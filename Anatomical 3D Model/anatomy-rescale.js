// Size corrections from the Part 1 organ size research (research/part1-organ-size/README.md).
// Each entry scales an organ about a pivot in the model's metre coordinates (x right to left, y up, z front).
// Factors differ per axis where a uniform factor would break a measured length or leave the skull.
export const RESCALE = {
  // 63 mL to about 125 mL (reference median 125.6 mL). Length x1.06 keeps it under the 130 mm splenomegaly limit; width and thickness carry the volume.
  spleen: { k: [1.3, 1.06, 1.36], note: 'single ellipsoid, built in anatomy-part1.js' },
  // Radius x1.25 on a 159 mm path. Tube volume 52 mL to about 81 mL (reference median 78 mL).
  pancreas: { radius: 1.25 },
  // 9.5 mL to about 25.5 mL (reference median 25.5 mL), uniform x1.39 about the base of the gland.
  prostate: { k: [1.39, 1.39, 1.39], pivot: [0, 0.815, 0.047] },
  // 44.5 mL to about 73 mL (reference median 78 mL). Length 60 to 66 mm stays inside the 50 to 80 mm ultrasound range.
  uterus: { k: [1.3, 1.1, 1.15], pivot: [0, 0.815, 0.02] },
  // 740 mL to about 1,060 mL (reference median 1,320 mL). Width and length are capped by the cranial cavity (skull outer 160 x 183 mm); height is unchanged because it already exceeds the textbook 93 mm.
  brain: { k: [1.3, 1, 1.1], pivot: [0, 1.655, 0] },
};

const mapPoint = (p, k, c) => [c[0] + k[0] * (p[0] - c[0]), c[1] + k[1] * (p[1] - c[1]), c[2] + k[2] * (p[2] - c[2])];
export { mapPoint };

// Bake the mesh transform into its geometry, then scale the geometry about a pivot given in the parent frame.
export function reshape(mesh, k, pivot) {
  const M4 = mesh.matrix.constructor, [px, py, pz] = pivot;
  mesh.updateMatrix();
  const S = new M4().makeTranslation(px, py, pz).multiply(new M4().makeScale(k[0], k[1], k[2])).multiply(new M4().makeTranslation(-px, -py, -pz));
  const g = mesh.geometry.clone();
  g.applyMatrix4(mesh.matrix); g.applyMatrix4(S);
  g.boundingBox = null; g.boundingSphere = null;
  mesh.geometry = g;
  mesh.position.set(0, 0, 0); mesh.quaternion.identity(); mesh.scale.set(1, 1, 1); mesh.updateMatrix();
  return mesh;
}

// Reshape every mesh in a group whose name matches
export function reshapeGroup(group, rx, k, pivot) {
  const hit = []; group.traverse(o => { if (o.isMesh && rx.test(o.name)) hit.push(o); });
  hit.forEach(m => reshape(m, k, pivot));
  return hit.length;
}
