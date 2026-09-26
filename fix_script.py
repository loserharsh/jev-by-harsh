import re

with open(r'C:\Users\harshw\.gemini\antigravity\scratch\jev-talk-website\build_slides.py', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace any triple quotes that are not prefixed by r with r"""
fixed = re.sub(r'(?<!r)"""', 'r"""', code)

with open(r'C:\Users\harshw\.gemini\antigravity\scratch\jev-talk-website\build_slides_fixed.py', 'w', encoding='utf-8') as f:
    f.write(fixed)

print("build_slides_fixed.py written successfully.")
