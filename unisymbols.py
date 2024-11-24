# Loop through the Unicode range from 0x1F300 to 0x1F5FF and print each character
for code_point in range(0x2600, 0x26FF):  # Unicode range 1F300 to 1F5FF
    print(chr(code_point), end=" ")
