#!/usr/bin/env python3
"""Build the Cantonese pack (lang/zh-Yue) from the Traditional Chinese pack (lang/zh-Hant).

Usage: python3 scripts/build_zh_yue.py        (no dependencies)

Structure names (names.js) are kept as in zh-Hant, because anatomical terms are written the same way in Hong Kong.
Interface text (ui.js, worksheet.txt) is rewritten into written Cantonese with the phrase rules in COLLOQUIAL,
applied top to bottom, so put longer phrases before the single characters they contain.
The language list between LANGS-BEGIN and LANGS-END is copied from zh-Hant, so add new languages there first.
Edit a term in zh-Hant, or add a line to COLLOQUIAL, then run this script again. Do not edit zh-Yue by hand.
"""
import json, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent / 'Anatomical 3D Model' / 'lang'
SRC, DST = ROOT / 'zh-Hant', ROOT / 'zh-Yue'

# Written Cantonese (Hong Kong). Each pair is (zh-Hant text, Cantonese text).
COLLOQUIAL = [
    ('參與', '\0join\0'),
    ('不透明', '\0opaque\0'),  # keep the technical word 不透明度 (opacity)
    ('不同', '\0differ\0'),
    ('不含', '唔包括'),
    ('不會', '唔會'),
    ('不能', '唔可以'),
    ('不是', '唔係'),
    ('不', '唔'),
    ('沒有', '冇'),
    ('沒', '冇'),
    ('以及', '同埋'),
    ('與', '同'),
    ('和', '同'),
    ('點擊', '撳'),
    ('可看到', '睇到'),
    ('看到', '睇到'),
    ('查看', '睇'),
    ('正在顯示', '而家顯示'),
    ('位於', '喺'),
    ('存在', '\0exist\0'),
    ('現在', '\0now\0'),
    ('所在', '\0where\0'),
    ('在', '喺'),
    ('的', '嘅'),
    ('他們', '佢哋'),
    ('它們', '佢哋'),
    ('它', '佢'),
    ('他', '佢'),
    ('這些', '呢啲'),
    ('這', '呢'),
    ('那', '嗰'),
    ('是否', '\0whether\0'),
    ('就是', '\0isjust\0'),
    ('是', '係'),
    ('若', '如果'),
    ('較少', '少啲'),
    ('較多', '多啲'),
    ('因此', '所以'),
    ('但是', '但係'),
    ('讓', '令'),
]
PROTECT = {'\0opaque\0': '不透明', '\0differ\0': '不同', '\0exist\0': '存在', '\0now\0': '現在',
           '\0where\0': '所在', '\0whether\0': '是否', '\0isjust\0': '就是', '\0join\0': '參與'}

def colloquial(text):
    for a, b in COLLOQUIAL:
        text = text.replace(a, b)
    for k, v in PROTECT.items():
        text = text.replace(k, v)
    return text

def main():
    DST.mkdir(exist_ok=True)
    names = (SRC / 'names.js').read_text(encoding='utf-8')
    names = names.replace("const PACK = 'zh-Hant'", "const PACK = 'zh-Yue'")
    names = names.replace('// Traditional Chinese (繁體中文) labels.', '// Cantonese (廣東話) labels, the same Hong Kong anatomical terms as zh-Hant.', 1)
    (DST / 'names.js').write_text(names, encoding='utf-8')
    ui = colloquial((SRC / 'ui.js').read_text(encoding='utf-8'))
    ui = ui.replace('// Traditional Chinese (繁體中文) interface text.', '// Cantonese (廣東話) interface text, written Cantonese for Hong Kong readers.', 1)
    ui = ui.replace("(Z() && Z().pack) || 'zh-Hant'", "'yue-Hant-HK'")
    (DST / 'ui.js').write_text(ui, encoding='utf-8')
    (DST / 'worksheet.txt').write_text(colloquial((SRC / 'worksheet.txt').read_text(encoding='utf-8')), encoding='utf-8')
    idx = (SRC / 'index.js').read_text(encoding='utf-8').replace('Traditional Chinese (繁體中文)', 'Cantonese (廣東話)')
    (DST / 'index.js').write_text(idx, encoding='utf-8')
    pack = json.loads((SRC / 'pack.json').read_text(encoding='utf-8'))
    pack.update(id='zh-Yue', name='Cantonese', nativeName='廣東話')
    pack['provides']['interface'] = 'buttons, headings, descriptions and notes in written Cantonese (嘅, 同, 冇, 喺, 撳), applied when the Cantonese button is on'
    pack['provides']['search'] = 'Chinese queries such as 股骨 (needs the search hooks in search.js)'
    (DST / 'pack.json').write_text(json.dumps(pack, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    pj = json.loads((SRC / 'package.json').read_text(encoding='utf-8'))
    pj['name'] = '@isaac070405/anatomy-lang-zh-yue'
    pj['description'] = 'Cantonese (廣東話) language pack for the 3D Anatomy Model'
    pj['repository']['directory'] = 'Anatomical 3D Model/lang/zh-Yue'
    (DST / 'package.json').write_text(json.dumps(pj, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print('wrote', DST)

if __name__ == '__main__':
    sys.exit(main())
