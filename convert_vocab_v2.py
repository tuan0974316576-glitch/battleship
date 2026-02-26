import re

# Common irregular verb forms mapping
IRREGULAR_VERBS = {
    # Base form: [past, past participle, present participle, 3rd person singular]
    'be': ['was', 'were', 'been', 'being', 'is', 'am', 'are'],
    'become': ['became', 'become', 'becoming', 'becomes'],
    'begin': ['began', 'begun', 'beginning', 'begins'],
    'break': ['broke', 'broken', 'breaking', 'breaks'],
    'bring': ['brought', 'brought', 'bringing', 'brings'],
    'build': ['built', 'built', 'building', 'builds'],
    'buy': ['bought', 'bought', 'buying', 'buys'],
    'catch': ['caught', 'caught', 'catching', 'catches'],
    'choose': ['chose', 'chosen', 'choosing', 'chooses'],
    'come': ['came', 'come', 'coming', 'comes'],
    'do': ['did', 'done', 'doing', 'does'],
    'drink': ['drank', 'drunk', 'drinking', 'drinks'],
    'drive': ['drove', 'driven', 'driving', 'drives'],
    'eat': ['ate', 'eaten', 'eating', 'eats'],
    'fall': ['fell', 'fallen', 'falling', 'falls'],
    'feel': ['felt', 'felt', 'feeling', 'feels'],
    'find': ['found', 'found', 'finding', 'finds'],
    'fly': ['flew', 'flown', 'flying', 'flies'],
    'forget': ['forgot', 'forgotten', 'forgetting', 'forgets'],
    'freeze': ['froze', 'frozen', 'freezing', 'freezes'],
    'get': ['got', 'gotten', 'getting', 'gets'],
    'give': ['gave', 'given', 'giving', 'gives'],
    'go': ['went', 'gone', 'going', 'goes'],
    'grow': ['grew', 'grown', 'growing', 'grows'],
    'have': ['had', 'had', 'having', 'has'],
    'hear': ['heard', 'heard', 'hearing', 'hears'],
    'hold': ['held', 'held', 'holding', 'holds'],
    'keep': ['kept', 'kept', 'keeping', 'keeps'],
    'know': ['knew', 'known', 'knowing', 'knows'],
    'leave': ['left', 'left', 'leaving', 'leaves'],
    'lose': ['lost', 'lost', 'losing', 'loses'],
    'make': ['made', 'made', 'making', 'makes'],
    'meet': ['met', 'met', 'meeting', 'meets'],
    'pay': ['paid', 'paid', 'paying', 'pays'],
    'read': ['read', 'read', 'reading', 'reads'],  # Note: past is pronounced differently
    'ride': ['rode', 'ridden', 'riding', 'rides'],
    'ring': ['rang', 'rung', 'ringing', 'rings'],
    'run': ['ran', 'run', 'running', 'runs'],
    'say': ['said', 'said', 'saying', 'says'],
    'see': ['saw', 'seen', 'seeing', 'sees'],
    'sell': ['sold', 'sold', 'selling', 'sells'],
    'send': ['sent', 'sent', 'sending', 'sends'],
    'sing': ['sang', 'sung', 'singing', 'sings'],
    'sit': ['sat', 'sat', 'sitting', 'sits'],
    'sleep': ['slept', 'slept', 'sleeping', 'sleeps'],
    'speak': ['spoke', 'spoken', 'speaking', 'speaks'],
    'spend': ['spent', 'spent', 'spending', 'spends'],
    'stand': ['stood', 'stood', 'standing', 'stands'],
    'steal': ['stole', 'stolen', 'stealing', 'steals'],
    'swim': ['swam', 'swum', 'swimming', 'swims'],
    'take': ['took', 'taken', 'taking', 'takes'],
    'teach': ['taught', 'taught', 'teaching', 'teaches'],
    'tear': ['tore', 'torn', 'tearing', 'tears'],
    'tell': ['told', 'told', 'telling', 'tells'],
    'think': ['thought', 'thought', 'thinking', 'thinks'],
    'throw': ['threw', 'thrown', 'throwing', 'throws'],
    'understand': ['understood', 'understood', 'understanding', 'understands'],
    'wake': ['woke', 'woken', 'waking', 'wakes'],
    'wear': ['wore', 'worn', 'wearing', 'wears'],
    'win': ['won', 'won', 'winning', 'wins'],
    'write': ['wrote', 'written', 'writing', 'writes'],
}

def find_word_in_sentence(sentence, base_word):
    """
    Find the actual form of the word used in the sentence.
    Handles irregular verbs, plurals, and verb conjugations.
    """
    # First, check if it's an irregular verb
    if base_word.lower() in IRREGULAR_VERBS:
        all_forms = [base_word] + IRREGULAR_VERBS[base_word.lower()]
        # Search for any form in the sentence (case-insensitive)
        for form in all_forms:
            pattern = r'\b(' + re.escape(form) + r')\b'
            match = re.search(pattern, sentence, re.IGNORECASE)
            if match:
                return match.group(1)

    # For regular words, try to find with common suffixes
    # Pattern: base word + optional suffix (s, es, ed, ing, etc.)
    pattern = r'\b(' + re.escape(base_word) + r'\w*)\b'
    match = re.search(pattern, sentence, re.IGNORECASE)

    if match:
        return match.group(1)

    # If still not found, return base word
    return base_word

# Read the file
with open(r'C:\battleship\vocab_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find L1 section
l1_start = content.find('"L1": [')
l1_end_pattern = r'\]\s*,\s*\n\s*//.*LEVEL 2'
match = re.search(l1_end_pattern, content[l1_start:])
if match:
    l2_start = l1_start + match.start()
else:
    l2_start = content.find('"L2": [')

if l1_start == -1 or l2_start == -1:
    print("Could not find L1 or L2 sections")
    exit(1)

# Extract sections
before_l1 = content[:l1_start + 7]
after_l1 = content[l2_start:]
l1_content = content[l1_start + 7:l2_start]

print(f"Processing L1 section")
print(f"L1 content length: {len(l1_content)} characters")

# Parse entries
entries = []
current_entry = None
in_sents = False
current_sents = []
brace_count = 0

lines = l1_content.split('\n')
for line_num, line in enumerate(lines, start=2):
    stripped = line.strip()
    brace_count += stripped.count('{') - stripped.count('}')

    if stripped == '{' and brace_count == 1:
        current_entry = {'en': '', 'ch': '', 'sents': []}
        in_sents = False
        current_sents = []

    elif 'en:' in stripped and current_entry is not None:
        match = re.search(r'en:\s*["\']([^"\']+)["\']', stripped)
        if match:
            current_entry['en'] = match.group(1)

    elif 'ch:' in stripped and current_entry is not None:
        match = re.search(r'ch:\s*["\']([^"\']+)["\']', stripped)
        if match:
            current_entry['ch'] = match.group(1)

    elif 'sents:' in stripped:
        in_sents = True
        current_sents = []

    elif in_sents and '"' in stripped:
        match = re.search(r'"([^"]+)"', stripped)
        if match:
            current_sents.append(match.group(1))

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
    base_word = entry['en']
    new_sents = []

    for sent in entry['sents']:
        if isinstance(sent, dict):
            new_sents.append(sent)
            continue

        actual_word = find_word_in_sentence(sent, base_word)
        new_sents.append({
            'text': sent,
            'answer': actual_word
        })

    entry['sents'] = new_sents
    converted_entries.append(entry)

    if (i + 1) % 20 == 0:
        print(f"Converted {i + 1}/{len(entries)} entries...")

print(f"\nConversion complete. Generating output...")

# Generate output
output_lines = []

for i, entry in enumerate(converted_entries):
    output_lines.append('        {')
    output_lines.append(f'            en: "{entry["en"]}",')
    output_lines.append(f'            ch: "{entry["ch"]}",')
    output_lines.append('            sents: [')

    for j, sent in enumerate(entry['sents']):
        text = sent['text'].replace('"', '\\"')
        answer = sent['answer'].replace('"', '\\"')
        comma = ',' if j < len(entry['sents']) - 1 else ''
        output_lines.append(f'                {{ text: "{text}", answer: "{answer}" }}{comma}')

    output_lines.append('            ]')
    comma = ',' if i < len(converted_entries) - 1 else ''
    output_lines.append(f'        }}{comma}')

# Reconstruct file
new_l1_section = '\n'.join(output_lines)
new_content = before_l1 + '\n' + new_l1_section + '\n    ],\n    ' + after_l1

with open(r'C:\battleship\vocab_data_new.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"\nOutput written to vocab_data_new.js")
print(f"Please review the file before replacing vocab_data.js")
