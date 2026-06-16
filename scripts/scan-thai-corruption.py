import re
import glob

pat = re.compile(r"[\u0E00-\u0E7F][a-zA-Z]|[a-zA-Z][\u0E00-\u0E7F]")
files = glob.glob("src/**/*.ts", recursive=True) + glob.glob("src/**/*.tsx", recursive=True)
found = []
for f in files:
    try:
        text = open(f, encoding="utf-8").read()
    except OSError:
        continue
    for i, line in enumerate(text.splitlines(), 1):
        if not pat.search(line):
            continue
        if "http" in line or "className" in line or line.strip().startswith(("import ", "//")):
            continue
        found.append((f, i, line.strip()[:140]))

for f, i, line in found:
    print(f"{f}:{i}: {line}")
print("TOTAL", len(found))
