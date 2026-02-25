with open(r'C:\battleship\index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

stack = []
for i in range(2992, 7163):
    line = lines[i]
    for j, char in enumerate(line):
        if char == '{':
            stack.append((i+1, j, char))
        elif char == '}':
            if stack:
                stack.pop()

print(f'Total unclosed braces: {len(stack)}')
if stack:
    print('First 10 unclosed brace locations:')
    for item in stack[:10]:
        line_num, col, _ = item
        print(f'  Line {line_num}, Column {col}: {lines[line_num-1][max(0,col-20):col+30].strip()}')
