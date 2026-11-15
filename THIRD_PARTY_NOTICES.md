# Third-party notices

The project code is MIT licensed (`LICENSE`). The items below keep their own licences.

| Component | Used for | Licence |
|---|---|---|
| three.js 0.184.0 (https://threejs.org) | 3D rendering, loaders and exporters, loaded from unpkg | MIT, copyright three.js authors |
| feelpp/mesh.eye v1.1 (Zenodo 10.5281/zenodo.15630998) | Eyeball meshes in `Anatomical 3D Model/assets/eye.glb` | GPL-3.0-only |
| Skull-stripped T1 MNI brain template (`tpl-mni_T1w.nii.gz`, ICBM 152 MNI152NLin2009cAsym), from the track4edu v1.1 package | `assets/mni_brain.glb`, `mni_brain_t1.bin`, `mni_brain_t1.json` | ICBM 152 permissive licence, quoted below |
| TotalSegmentator dataset (Wasserthal et al., Radiology: AI 2023, doi:10.1148/ryai.230024) | Optional input for `scripts/totalsegmentator_to_glb.py` | CC BY 4.0 |
| Design system styles in `Anatomical 3D Model/_ds/` (classical and industry) | Page styling | Imported from Claude Design on 2026-10-08. The folder has no licence file |

## MNI brain template

The brain meshes and the axial slice volume are derived from `tpl-mni_T1w.nii.gz`, an ICBM 152 nonlinear asymmetric 2009c (MNI152NLin2009cAsym) T1 template. The file came from the track4edu v1.1 package. It is 193 × 229 × 193 voxels at 1 mm, which matches the 2009c grid (the FSL MNI152NLin6Asym version is 182 × 218 × 182). The brain crop recorded in `assets/mni_brain_t1.json` is 135 × 184 × 140 voxels. The repository stores no copy or checksum of the original file, so the match rests on that grid and on the file name. The SHA-256 of the file starts `7ebe5391` and ends `d2acc6`. Record the full hash here when it is to hand.

The ICBM 152 templates carry the licence below. Copy it, with its copyright line, wherever the derived files are redistributed.

> Copyright (C) 1993–2004 Louis Collins, McConnell Brain Imaging Centre, Montreal Neurological Institute, McGill University.
> Permission to use, copy, modify, and distribute this software and its documentation for any purpose and without fee is hereby granted, provided that the above copyright notice appear in all copies. The authors and McGill University make no representations about the suitability of this software for any purpose. It is provided "as is" without express or implied warranty. The authors are not responsible for any data loss, equipment damage, property loss, or injury to subjects or patients resulting from the use or misuse of this software package.

Licence text source: https://github.com/templateflow/tpl-MNI152NLin2009cAsym (LICENSE file). Cite Fonov et al., NeuroImage 2011 (doi:10.1016/j.neuroimage.2010.07.033) when the template is used.

## Eye meshes under GPL-3.0

`eye.glb` is derived from GPL-3.0 geometry (Chabannes, Prud'homme, Saigre, Sala, Szopos, Trophime). Distributing it carries GPL-3.0 terms for that file. To ship the page under MIT only, replace the eye with a procedural or permissively licensed model and delete `eye.glb` and `scripts/eye_*`.

## Dependencies of the scripts

`scripts/requirements.txt` lists nibabel, numpy, scipy, scikit-image, trimesh, fast-simplification and cadquery-ocp. Each keeps its own licence.
