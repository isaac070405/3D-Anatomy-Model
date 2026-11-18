#!/usr/bin/env python3
"""Check the Latin add-on data: every gloss has en and zh-Hant, ids are unique, term parts resolve.
Usage: python3 scripts/check_latin_addon.py"""
import json
import sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent / "Anatomical 3D Model" / "lang" / "latin" / "data"
data = {n: json.loads((root / f"{n}.json").read_text(encoding="utf-8")) for n in ("roots", "prefixes", "suffixes", "grammar", "origins")}
errors = []


def walk(node, path):
    if isinstance(node, dict):
        if "en" in node and "zh-Hant" in node or "en" in node and set(node) <= {"en", "zh-Hant"}:
            for lang in ("en", "zh-Hant"):
                if not node.get(lang):
                    errors.append(f"{path}: missing {lang}")
        for k, v in node.items():
            walk(v, f"{path}/{k}")
    elif isinstance(node, list):
        for i, v in enumerate(node):
            walk(v, f"{path}[{i}]")


for name, blob in data.items():
    walk(blob, name)
ids = {}
for kind in ("roots", "prefixes", "suffixes"):
    seen = [e["id"] for e in data[kind][kind]]
    ids[{"roots": "root", "prefixes": "prefix", "suffixes": "suffix"}[kind]] = set(seen)
    errors += [f"{kind}: duplicate id {i}" for i in set(seen) if seen.count(i) > 1]
for t in data["origins"]["terms"]:
    for p in t["parts"]:
        if p["id"] not in ids[p["type"]]:
            errors.append(f"origins: {t['term']} uses unknown {p['type']} {p['id']}")
# Latin name lists. names.txt and structures.txt: "English|Latin|gender"; directions.txt: "English|masc|fem|neut".
def rows(fname):
    for n, l in enumerate((root / fname).read_text(encoding="utf-8").splitlines(), 1):
        if l.strip() and not l.startswith("#"):
            yield n, [c.strip() for c in l.split("|")]


names = {}
for fname, genders in (("names.txt", "mfnx"), ("structures.txt", "mfn")):
    for n, c in rows(fname):
        if len(c) != 3 or not c[0] or not c[1] or c[2] not in genders:
            errors.append(f"{fname} line {n}: needs English|Latin|gender ({'/'.join(genders)})")
        elif c[0].lower() in names:
            errors.append(f"{fname} line {n}: duplicate {c[0]}")
        else:
            names[c[0].lower()] = c[1]
for n, c in rows("directions.txt"):
    if len(c) != 4 or not all(c):
        errors.append(f"directions.txt line {n}: needs English|masculine|feminine|neuter")
zh = (root.parent.parent / "zh-Hant" / "names.js").read_text(encoding="utf-8")
block = zh.split("const TERMS = `", 1)[1].split("`", 1)[0]
missing = sorted({l.split("|", 1)[0].strip() for l in block.splitlines() if "|" in l if l.split("|", 1)[0].strip().lower() not in names})
errors += [f"no Latin name for '{m}'" for m in missing]
print("\n".join(errors) if errors else f"latin add-on data OK ({len(names)} names)")
sys.exit(1 if errors else 0)
