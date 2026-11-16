# Simplified Chinese language pack (zh-Hans)

Adds 简体中文 to the 3D Anatomy Model. The page runs in English without this folder.

This folder is generated from `../zh-Hant/`. Do not edit it by hand.

## Rebuild

```bash
pip install opencc-python-reimplemented
python3 scripts/build_zh_hans.py
```

The script converts `names.js`, `ui.js` and `worksheet.txt` with OpenCC `tw2sp`, then applies the term fixes listed in `FIXES` in the script (for example 硬颚 to 硬腭, 食道 to 食管). To change a term, edit it in `zh-Hant` or add a fix, then rebuild.

## Behaviour

Same as the Traditional Chinese pack. The loader loads one pack per page, chosen by the `anatomy-lang` value in localStorage. Choosing the other Chinese pack in the Language list reloads the page. Search takes Simplified characters here (for example 股骨).

## Get the zip

```bash
scripts/build_lang_pack.sh zh-Hans
```
