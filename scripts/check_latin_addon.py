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
print("\n".join(errors) if errors else "latin add-on data OK")
sys.exit(1 if errors else 0)
