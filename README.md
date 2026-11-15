# 3D Anatomy Model

An interactive three.js model of the human body that runs in the browser with no build step and no backend.

**Live demo: https://isaac070405.github.io/3D-Anatomy-Model/**

[Known gaps](https://isaac070405.github.io/3D-Anatomy-Model/known-limitations.html) · [Wiki](wiki/Home.md) · [Layers view](https://isaac070405.github.io/3D-Anatomy-Model/layers.html)

> [!NOTE]
> The model is a simplified teaching model. Shapes, sizes and positions are approximate, and organs run about 60 to 80% of textbook size. It is not for clinical use.

## Features

- 971 named parts across 13 systems (skeletal, muscular, circulatory, nervous, digestive, respiratory, urinary, reproductive, eye and ear, endocrine, skin, fat).
- Fuzzy search with aliases, plus an anatomical tree with breadcrumb.
- Traditional Chinese (繁體中文) names beside every structure, group, system and layer. Search accepts Chinese (for example 股骨), and a button in the sidebar turns the Chinese labels and interface text off.
- Layer peeling: a depth slider removes 14 layers from skin to bone.
- Live cross-sections on the transverse, coronal and sagittal planes.
- Explode mode, X-ray and atlas colour modes, and region dissection with undo.
- Preset views for the heart, thorax, kidneys, pelvis, breast, limbs, head and neck.
- Pinned notes, PNG snapshot, and export to OBJ + MTL or GLB.
- Mobile dock and drawer, adaptive pixel ratio, and a screen-reader announcement region.

## Keyboard shortcuts

| Key | Action |
|---|---|
| Space | Reset the camera to the opening view |
| 1, 2, 3 | Cross-section on the transverse, coronal, sagittal axis |
| X | Toggle X-ray and atlas colours |
| H | Hide or show the selected structure |
| U | Undo the last hide or dissection |

## Run locally

The page loads three.js 0.184.0 from unpkg through an import map, so it needs a network connection and a static server.

```bash
cd "Anatomical 3D Model"
python3 -m http.server 8000
```

Open http://localhost:8000.

## Project layout

| Path | Contents |
|---|---|
| `Anatomical 3D Model/index.html` | Page, import map and interface |
| `Anatomical 3D Model/anatomy-*.js` | Procedural geometry for each body region |
| `Anatomical 3D Model/three-d-stage.js` | Scene, camera, selection and cross-section |
| `Anatomical 3D Model/lang/` | Optional language packs. `lang/zh-Hant/` is the Traditional Chinese pack (names, interface text, search) |
| `Anatomical 3D Model/layers.js`, `explode.js`, `search.js`, `tree.js` | Peel layers, explode mode, search, anatomical tree |
| `Anatomical 3D Model/assets/` | `eye.glb`, `mni_brain.glb` and brain volume data |
| `scripts/` | Python converters for the eye, brain and TotalSegmentator output, and `build_lang_pack.sh` to zip a language pack |
| `wiki/` | System pages, interface guide and modelling notes |
| `.github/workflows/pages.yml` | Deploys `Anatomical 3D Model/` to GitHub Pages on each push to `main` |

## Deploy

Enable Pages once under Settings, Pages, Source: GitHub Actions. Each push to `main` then publishes the demo.

## Licence

The code and documents written for this project are under the MIT licence (`LICENSE`). Third-party data keeps its own terms:

- `Anatomical 3D Model/assets/eye.glb` is derived from feelpp/mesh.eye v1.1 (Zenodo 10.5281/zenodo.15630998), GPL-3.0-only.
- `Anatomical 3D Model/assets/mni_brain*` is derived from the MNI T1 template, whose licence has not been checked.
