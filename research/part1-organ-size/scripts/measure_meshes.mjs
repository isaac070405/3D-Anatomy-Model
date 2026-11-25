// Headless mesh measurement: node measure_meshes.mjs <dir with the anatomy-*.js files> <out.json>
// Needs 'three' installed next to this script. Writes world-space signed volume (mL) and bounds per mesh.
// Signed volume is only meaningful for closed meshes. Open tubes and lathes give approximate values.
import * as THREE from 'three';
import fs from 'fs';
const src = process.argv[2], out = process.argv[3];
const mk = () => { const f = function(){}; return new Proxy(f, {
  get(t,k){ if(k==='then') return undefined; if(k===Symbol.toPrimitive) return ()=>0; if(k===Symbol.iterator) return function*(){}; if (k==='length') return 0; return ANY; },
  apply(){ return ANY; }, construct(){ return ANY; }, set(){ return true; }, has(){ return true; } }); };
const ANY = mk();
const stage = new Proxy({ ready: Promise.resolve({ THREE }) }, { get:(t,k)=> k in t ? t[k] : ANY, set:(t,k,v)=>{ t[k]=v; return true; } });
globalThis.document = new Proxy({ querySelector: () => stage, getElementById: () => ANY, querySelectorAll: () => [], createElement: () => ANY, body: ANY, fonts: ANY }, { get:(t,k)=> k in t ? t[k] : ANY, set:(t,k,v)=>{t[k]=v;return true;} });
globalThis.window = new Proxy({}, { get:(t,k)=> k in t ? t[k] : ANY, set:(t,k,v)=>{ t[k]=v; return true; } });
globalThis.requestAnimationFrame = () => 0;
const p1 = await import(src + '/anatomy-part1.js');
try { await import(src + '/anatomy-part2.js'); } catch (e) { console.error('part2 error', e.stack.split('\n').slice(0,5).join('\n')); }
const model = p1.model; model.updateMatrixWorld(true);
const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), t = new THREE.Vector3(), rows = [];
model.traverse(o => { if (!o.isMesh || !o.geometry?.attributes.position) return;
  const g = o.geometry, pos = g.attributes.position, idx = g.index, n = idx ? idx.count : pos.count; let vol = 0;
  const get = (i, v) => { const j = idx ? idx.getX(i) : i; v.fromBufferAttribute(pos, j).applyMatrix4(o.matrixWorld); };
  for (let i = 0; i < n; i += 3) { get(i,a); get(i+1,b); get(i+2,c); vol += a.dot(t.crossVectors(b,c)) / 6; }
  const bb = new THREE.Box3().setFromObject(o);
  rows.push({ name: o.name, sys: o.userData.sys, vol_mL: Math.abs(vol)*1e6, min: bb.min.toArray().map(x=>+x.toFixed(4)), max: bb.max.toArray().map(x=>+x.toFixed(4)) }); });
fs.writeFileSync(out, JSON.stringify(rows, null, 1)); console.log('meshes', rows.length);
process.exit(0);
