import re
import json

def find_word_in_sentence(sentence, base_word):
    """
    Find the actual form of the word used in the sentence.
    Returns the word form found, or the base word if not found.
    """
    # Create a regex pattern to find word boundaries
    # This will match the word with any suffix/prefix
    pattern = r'\b(' + re.escape(base_word) + r'\w*)\b'

    # Search case-insensitively
    match = re.search(pattern, sentence, re.IGNORECASE)

    if match:
        return match.group(1)

    # If not found with suffix, try to find any word that contains the base
    # This handles irregular forms like "went" for "go"
    words = re.findall(r'\b\w+\b', sentence)

    # For very short base words (1-2 chars), be more strict
    if len(base_word) <= 2:
        # Only match exact word (case insensitive)
        for word in words:
            if word.lower() == base_word.lower():
                return word
        return base_word

    # For longer words, check if any word starts with the base
    for word in words:
        if word.lower().startswith(base_word.lower()[:3]):
            # Check similarity
            if len(word) >= len(base_word) - 2 and len(word) <= len(base_word) + 4:
                return word

    return base_word

def convert_vocab_entry(entry):
    """
    Convert a vocab entry's sentences to new format.
    """
    base_word = entry['en']
    new_sents = []

    for sent in entry['sents']:
        # Skip if already in new format
        if isinstance(sent, dict):
            new_sents.append(sent)
            continue

        # Find the actual word form used in this sentence
        actual_word = find_word_in_sentence(sent, base_word)

        # Create new format
        new_sents.append({
            'text': sent,
            'answer': actual_word
        })

    entry['sents'] = new_sents
    return entry

# Read the file
with open(r'C:\battleship\vocab_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find L1 section
l1_start = content.find('"L1": [')
# Find the end of L1 - look for the closing bracket followed by comma and comment
l1_end_pattern = r'\]\s*,\s*\n\s*//.*LEVEL 2'
match = re.search(l1_end_pattern, content[l1_start:])
if match:
    l2_start = l1_start + match.start()
else:
    l2_start = content.find('"L2": [')

if l1_start == -1 or l2_start == -1:
    print("Could not find L1 or L2 sections")
    exit(1)

# Extract L1 section
before_l1 = content[:l1_start + 7]  # Include '"L1": ['
after_l1 = content[l2_start:]  # Start from the comment before L2

# Extract just the L1 entries
l1_content = content[l1_start + 7:l2_start]

print(f"Processing L1 section (lines ~2-1764)")
print(f"L1 content length: {len(l1_content)} characters")

# Parse entries manually since it's JavaScript, not pure JSON
entries = []
current_entry = None
in_sents = False
current_sents = []
brace_count = 0

lines = l1_content.split('\n')
for line_num, line in enumerate(lines, start=2):
    stripped = line.strip()

    # Track braces to know when we're inside an entry
    brace_count += stripped.count('{') - stripped.count('}')

    # Start of new entry
    if stripped == '{' and brace_count == 1:
        current_entry = {'en': '', 'ch': '', 'sents': []}
        in_sents = False
        current_sents = []

    # Extract en field
    elif 'en:' in stripped and current_entry is not None:
        match = re.search(r'en:\s*["\']([^"\']+)["\']', stripped)
        if match:
            current_entry['en'] = match.group(1)

    # Extract ch field
    elif 'ch:' in stripped and current_entry is not None:
        match = re.search(r'ch:\s*["\']([^"\']+)["\']', stripped)
        if match:
            current_entry['ch'] = match.group(1)

    # Start of sents array
    elif 'sents:' in stripped:
        in_sents = True
        current_sents = []

    # Inside sents array - extract sentences
    elif in_sents and '"' in stripped:
        # Extract sentence
        match = re.search(r'"([^"]+)"', stripped)
        if match:
            current_sents.append(match.group(1))

    # End of entry
    elif stripped.startswith('}') and brace_count == 0:
        if current_entry and current_entry['en']:
            current_entry['sents'] = current_sents
            entries.append(current_entry)
            if len(entries) % 10 == 0:
                print(f"Processed {len(entries)} entries...")
        current_entry = None
        in_sents = False

print(f"\nTotal entries found: {len(entries)}")

# Convert each entry
converted_entries = []
for i, entry in enumerate(entries):
    converted = convert_vocab_entry(entry)
    converted_entries.append(converted)
    if (i + 1) % 20 == 0:
        print(f"Converted {i + 1}/{len(entries)} entries...")

print(f"\nConversion complete. Generating output...")

# Generate new JavaScript content for L1 section only
output_lines = []

for i, entry in enumerate(converted_entries):
    output_lines.append('        {')
    output_lines.append(f'            en: "{entry["en"]}",')
    output_lines.append(f'            ch: "{entry["ch"]}",')
    output_lines.append('            sents: [')

    for j, sent in enumerate(entry['sents']):
        if isinstance(sent, dict):
            text = sent['text'].replace('"', '\\"')
            answer = sent['answer'].replace('"', '\\"')
            comma = ',' if j < len(entry['sents']) - 1 else ''
            output_lines.append(f'                {{ text: "{text}", answer: "{answer}" }}{comma}')
        else:
            # Shouldn't happen, but handle it
            text = sent.replace('"', '\\"')
            comma = ',' if j < len(entry['sents']) - 1 else ''
            output_lines.append(f'                "{text}"{comma}')

    output_lines.append('            ]')
    comma = ',' if i < len(converted_entries) - 1 else ''
    output_lines.append(f'        }}{comma}')

# Reconstruct the full file - don't add extra ], since after_l1 starts with the comment
new_l1_section = '\n'.join(output_lines)
new_content = before_l1 + '\n' + new_l1_section + '\n    ],\n    ' + after_l1

with open(r'C:\battleship\vocab_data_new.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"\nOutput written to vocab_data_new.js")
print(f"Please review the file before replacing vocab_data.js")
