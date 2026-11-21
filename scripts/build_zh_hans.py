#!/usr/bin/env python3
"""Build the Simplified Chinese pack (lang/zh-Hans) from the Traditional Chinese pack (lang/zh-Hant).

Usage: python3 scripts/build_zh_hans.py        (needs: pip install opencc-python-reimplemented)

names.js, ui.js and worksheet.txt are converted with OpenCC tw2sp (character and phrase level), then
the term fixes in FIXES are applied. The language list between LANGS-BEGIN and LANGS-END is kept as is.
Edit a term in zh-Hant, or add a line to FIXES, then run this script again. Do not edit zh-Hans by hand.
"""
import json, pathlib, re, sys
import opencc

ROOT = pathlib.Path(__file__).resolve().parent.parent / 'Anatomical 3D Model' / 'lang'
SRC, DST = ROOT / 'zh-Hant', ROOT / 'zh-Hans'
cc = opencc.OpenCC('tw2sp')

# Mainland anatomy terms that differ from the character-level result, applied after conversion.
FIXES = [
    ('颚', '腭'),      # palate: 硬腭, 软腭
    ('集成', '整合'),  # "integrates" (OpenCC reads 整合 as the IT term 集成)
    ('附著', '附着'),  # attaches
    ('解像度', '分辨率'),
    ('食道', '食管'),  # oesophagus
    ('远程', '远端'),  # Distal (OpenCC reads 遠端 as the network term 远程)
    ('滑杆', '滑块'),  # UI slider
    ('重设', '重置'),  # UI reset
    ('红血球', '红细胞'),
    ('微血管', '毛细血管'),
    ('第一型肺泡', 'I型肺泡'),
    ('第二型肺泡', 'II型肺泡'),
    ('一型肺泡', 'I型肺泡'),
    ('二型肺泡', 'II型肺泡'),
    ('副睾', '附睾'),  # epididymis
    ('滤泡', '卵泡'),  # ovarian follicle (no thyroid follicle term in the pack)
    ('牙周韧带', '牙周膜'),
    ('横膈膜', '膈'),  # diaphragm
    ('中脑导水管', '中脑水管'),
    ('海马体', '海马'),
    ('食指', '示指'),  # index finger, anatomical term
    ('无名指', '环指'),  # ring finger, anatomical term
    ('拇长伸肌', '姆长伸肌'),  # extensor hallucis longus (the pack has no extensor pollicis longus)
    ('拇长屈肌（足）', '姆长屈肌'),  # flexor hallucis longus
    ('培氏斑', '派尔斑'),  # Peyer's patch
]

def convert(text):
    out = cc.convert(text)
    for a, b in FIXES:
        out = out.replace(a, b)
    return out

def convert_keep_langs(text):
    m = re.search(r'    // LANGS-BEGIN\n.*?    // LANGS-END\n', text, re.S)
    if not m:
        return convert(text)
    return convert(text[:m.start()]) + m.group(0) + convert(text[m.end():])

def main():
    DST.mkdir(exist_ok=True)
    names = convert_keep_langs((SRC / 'names.js').read_text(encoding='utf-8'))
    names = names.replace("const PACK = 'zh-Hant'", "const PACK = 'zh-Hans'")
    names = names.replace('"Noto Sans HK","PingFang HK","Microsoft JhengHei","Noto Sans TC"', '"PingFang SC","Microsoft YaHei","Noto Sans SC","Noto Sans HK"')
    names = names.replace('Traditional Chinese (繁体中文)', 'Simplified Chinese (简体中文)', 1)
    ui = convert((SRC / 'ui.js').read_text(encoding='utf-8'))
    ui = ui.replace('Traditional Chinese (繁体中文)', 'Simplified Chinese (简体中文)', 1).replace("'zh-Hant'", "'zh-Hans'")
    (DST / 'names.js').write_text(names, encoding='utf-8')
    (DST / 'ui.js').write_text(ui, encoding='utf-8')
    (DST / 'worksheet.txt').write_text(convert((SRC / 'worksheet.txt').read_text(encoding='utf-8')), encoding='utf-8')
    idx = (SRC / 'index.js').read_text(encoding='utf-8').replace('Traditional Chinese (繁體中文)', 'Simplified Chinese (简体中文)')
    (DST / 'index.js').write_text(idx, encoding='utf-8')
    pack = json.loads((SRC / 'pack.json').read_text(encoding='utf-8'))
    pack.update(id='zh-Hans', name='Simplified Chinese', nativeName='简体中文')
    pack['provides'] = {k: convert(v) if k == 'search' else v for k, v in pack['provides'].items()}
    pack['provides']['search'] = 'Simplified Chinese queries such as 股骨 (needs the search hooks in search.js)'
    (DST / 'pack.json').write_text(json.dumps(pack, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    pj = json.loads((SRC / 'package.json').read_text(encoding='utf-8'))
    pj['name'] = '@isaac070405/anatomy-lang-zh-hans'
    pj['description'] = 'Simplified Chinese (简体中文) language pack for the 3D Anatomy Model'
    pj['repository']['directory'] = 'Anatomical 3D Model/lang/zh-Hans'
    (DST / 'package.json').write_text(json.dumps(pj, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print('wrote', DST)

if __name__ == '__main__':
    sys.exit(main())
