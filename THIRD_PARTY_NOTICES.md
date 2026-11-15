# Third-party notices

The project code is MIT licensed (`LICENSE`). The items below keep their own licences.

| Component | Used for | Licence |
|---|---|---|
| three.js 0.184.0 (https://threejs.org) | 3D rendering, loaders and exporters, loaded from unpkg | MIT, copyright three.js authors |
| feelpp/mesh.eye v1.1 (Zenodo 10.5281/zenodo.15630998) | Eyeball meshes in `Anatomical 3D Model/assets/eye.glb` | GPL-3.0-only |
| MNI T1 brain template (`tpl-mni_T1w`) | `assets/mni_brain.glb`, `mni_brain_t1.bin`, `mni_brain_t1.json` | Check the template's own terms before redistributing |
| TotalSegmentator dataset (Wasserthal et al., Radiology: AI 2023, doi:10.1148/ryai.230024) | Optional input for `scripts/totalsegmentator_to_glb.py` | CC BY 4.0 |
| Design system styles in `Anatomical 3D Model/_ds/` | Page styling | See the files in that folder |

## Eye meshes under GPL-3.0

`eye.glb` is derived from GPL-3.0 geometry (Chabannes, Prud'homme, Saigre, Sala, Szopos, Trophime). Distributing it carries GPL-3.0 terms for that file. To ship the page under MIT only, replace the eye with a procedural or permissively licensed model and delete `eye.glb` and `scripts/eye_*`.

## Dependencies of the scripts

`scripts/requirements.txt` lists nibabel, numpy, scipy, scikit-image, trimesh, fast-simplification and cadquery-ocp. Each keeps its own licence.
