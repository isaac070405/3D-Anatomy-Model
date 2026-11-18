# Contributing

Thanks for helping with the 3D Anatomy Model.

## Run it

```bash
cd "Anatomical 3D Model"
python3 -m http.server 8000
```

Open http://localhost:8000. There is no build step. three.js 0.184.0 loads from unpkg, so a network connection is needed.

## What to change

| Task | Where |
|---|---|
| Fix a shape or position | `Anatomical 3D Model/anatomy-*.js` |
| Fix a Chinese name | the matching `English|中文` line in `Anatomical 3D Model/lang/zh-Hant/names.js` |
| Add interface Chinese | `Anatomical 3D Model/lang/zh-Hant/ui.js` |
| Fix a Latin name | `Anatomical 3D Model/lang/latin/data/names.txt` or `structures.txt`, then run `node scripts/build_la_pack.js` |
| Fix or add a word root, prefix or suffix | `Anatomical 3D Model/lang/latin/data/*.json`, then run `python3 scripts/check_latin_addon.py` and `node scripts/test_latin_names.js` |
| Fix a wiki page | `wiki/` |
| Convert new mesh data | `scripts/` (see `scripts/requirements.txt`) |

## Pull requests

1. Branch from `main` and keep one topic per pull request.
2. Open the page and check the part in the browser console for errors.
3. State the source for anatomy changes (an atlas plate or textbook page).
4. Use plain, factual commit messages.

The model is simplified and organs run about 60 to 80% of textbook size, so changes that only match a textbook more closely are welcome but not required.

By contributing you agree your work is released under the MIT License in `LICENSE`. Follow `CODE_OF_CONDUCT.md`.
