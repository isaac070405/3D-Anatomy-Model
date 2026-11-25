
import * as THREE from 'three';
import fs from 'fs';
const mk = () => { const f = function(){}; return new Proxy(f, {
  get(t,k){ if(k==='then') return undefined; if(k===Symbol.toPrimitive) return ()=>0; if(k===Symbol.iterator) return function*(){}; if (k==='length') return 0; return ANY; },
  apply(){ return ANY; }, construct(){ return ANY; }, set(){ return true; }, has(){ return true; } }); };
const ANY = mk();
const stage = new Proxy({ ready: Promise.resolve({ THREE }) }, { get:(t,k)=> k in t ? t[k] : ANY, set:(t,k,v)=>{ t[k]=v; return true; } });
globalThis.document = new Proxy({ querySelector: () => stage, getElementById: () => ANY, createElement: () => ANY, body: ANY }, { get:(t,k)=> k in t ? t[k] : ANY, set:(t,k,v)=>{t[k]=v;return true;} });
globalThis.window = new Proxy({}, { get:(t,k)=> k in t ? t[k] : ANY, set:(t,k,v)=>{ t[k]=v; return true; } });
globalThis.requestAnimationFrame = () => 0;
const p1 = await import('./js/anatomy-part1.js');
try { await import('./js/anatomy-part2-geom.js'); } catch (e) { console.error('part2 error', e.stack.split('\n').slice(0,4).join('\n')); }
const model = p1.model;
model.updateMatrixWorld(true);
const rows = [];
const tmp = new THREE.Vector3(), a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
model.traverse(o => {
  if (!o.isMesh || !o.geometry) return;
  const g = o.geometry; const pos = g.attributes.position; if (!pos) return;
  const idx = g.index; const n = idx ? idx.count : pos.count;
  let vol = 0, area = 0;
  const get = (i, v) => { const j = idx ? idx.getX(i) : i; v.fromBufferAttribute(pos, j).applyMatrix4(o.matrixWorld); };
  for (let i = 0; i < n; i += 3) { get(i,a); get(i+1,b); get(i+2,c);
    vol += a.dot(tmp.crossVectors(b,c)) / 6;
    area += tmp.crossVectors(b.clone().sub(a), c.clone().sub(a)).length() / 2; }
  const bb = new THREE.Box3().setFromObject(o);
  const m = o.material;
  const anc=[]; for (let p=o.parent; p && p!==model; p=p.parent) anc.push(p.name); rows.push({ anc: anc.join('>'), name: o.name, label: o.userData.label, sys: o.userData.sys, geom: g.type, vol_m3: Math.abs(vol), area_m2: area,
    min: bb.min.toArray(), max: bb.max.toArray(), transparent: !!(m && m.transparent), opacity: m ? m.opacity : null });
});
fs.writeFileSync('model_meshes.json', JSON.stringify(rows));
console.log('meshes', rows.length);
const bb = new THREE.Box3().setFromObject(model); console.log('model bbox', bb.min.toArray(), bb.max.toArray());

// binary dump of world-space triangle meshes
const posChunks = [], idxChunks = [], index = []; let pOff = 0, iOff = 0, k = 0;
model.traverse(o => {
  if (!o.isMesh || !o.geometry || !o.geometry.attributes.position) return;
  const g = o.geometry, pos = g.attributes.position, n = pos.count, idx = g.index;
  const P = new Float32Array(n*3); const v = new THREE.Vector3();
  for (let i=0;i<n;i++){ v.fromBufferAttribute(pos,i).applyMatrix4(o.matrixWorld); P[i*3]=v.x;P[i*3+1]=v.y;P[i*3+2]=v.z; }
  const m = idx ? idx.count : n; const I = new Uint32Array(m);
  for (let i=0;i<m;i++) I[i] = idx ? idx.getX(i) : i;
  posChunks.push(Buffer.from(P.buffer)); idxChunks.push(Buffer.from(I.buffer));
  index.push({ k: k++, name: o.name, label: o.userData.label, sys: o.userData.sys, pOff, nV: n, iOff, nI: m });
  pOff += n*3*4; iOff += m*4;
});
fs.writeFileSync('mesh_pos.bin', Buffer.concat(posChunks)); fs.writeFileSync('mesh_idx.bin', Buffer.concat(idxChunks));
fs.writeFileSync('mesh_index.json', JSON.stringify(index));
console.log('dumped', index.length, pOff, iOff);

process.exit(0);
