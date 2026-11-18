// Private-parts gate. Private parts here are the external genitalia, the buttocks and the female breast (nipple and areola included).
// The male chest is not treated as private. Hiding does three things: it hides the external genital and breast meshes, drapes a neutral
// swimwear shape over the skin in those regions, and keeps the hidden meshes hidden when other controls try to show them.
(function () {
  const $ = id => document.getElementById(id);
  const KEY = 'anatomy-private';
  const EXT_M = /scrot|penis|penile|glans|corona_glandis|prepuce|foreskin|frenulum|testi|epididym|spermatic|cremaster|dartos|raphe|tunica|corpus_(cav|spong)|external_urethral|bulb_of_penis|bulbospongiosus|ischiocavernosus|pampiniform/i;
  const EXT_F = /labia|clitoris|urethral_opening|vaginal_opening|breast|nipple|areola|montgomery|cooper|acini|lactiferous|retromammary|axillary_tail/i;
  const BREAST_C = [[-0.092, 1.278, 0.108], [0.092, 1.278, 0.108]];
  let A = null, hide = false, tagged = [], covers = {}, sex = 'male', loop = 0;
  const label = o => (o.name || '') + ' ' + ((o.userData && o.userData.label) || '');

  // swimwear: cut the skin triangles exactly along flat boundaries (so the hems are straight), weld the cut pieces,
  // smooth the normals, then push the shell 3.5 mm outward along them
  const BRIEF = [[1, 1, 0.66], [1, -1, 0.84], [0, 1, -0.23], [0, -1, 0.23]];   // [axis, sign, value]: keep sign*(p[axis]-value) >= 0
  const TOP = [[1, 1, 1.205], [1, -1, 1.345], [0, 1, -0.165], [0, -1, 0.165]];
  const clip = (poly, pl) => { const [ax, sg, val] = pl, out = [];
    for (let i = 0; i < poly.length; i++) { const A = poly[i], B = poly[(i + 1) % poly.length], da = sg * (A[ax] - val), db = sg * (B[ax] - val);
      if (da >= 0) out.push(A);
      if ((da >= 0) !== (db >= 0)) { const t = da / (da - db); out.push([A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t]); } }
    return out; };
  const makeCover = (grp, regions, color, name) => {
    const THREE = A.THREE, inv = A.G.skin.matrixWorld.clone().invert(), v = new THREE.Vector3(), tris = [];
    grp.updateMatrixWorld(true);
    grp.traverse(m => {
      if (!m.isMesh || /^(scrotum|penis)/.test(m.name) || (m.userData && m.userData.cover)) return;
      const g = m.geometry, p = g.attributes.position, ix = g.index, tc = ix ? ix.count / 3 : Math.floor(p.count / 3), mx = new THREE.Matrix4().multiplyMatrices(inv, m.matrixWorld);
      const W = i => { v.fromBufferAttribute(p, i).applyMatrix4(mx); return [v.x, v.y, v.z]; };
      for (let t = 0; t < tc; t++) {
        const P = (ix ? [ix.getX(t * 3), ix.getX(t * 3 + 1), ix.getX(t * 3 + 2)] : [t * 3, t * 3 + 1, t * 3 + 2]).map(W);
        for (const reg of regions) { let poly = P; for (const pl of reg) { poly = clip(poly, pl); if (poly.length < 3) break; }
          for (let k = 1; poly.length >= 3 && k < poly.length - 1; k++) tris.push(poly[0], poly[k], poly[k + 1]); }
      }
    });
    if (!tris.length) return null;
    const idx = new Map(), P = [], I = [], key = q => Math.round(q[0] * 1e5) + ',' + Math.round(q[1] * 1e5) + ',' + Math.round(q[2] * 1e5);
    tris.forEach(q => { const k = key(q); let i = idx.get(k); if (i === undefined) { i = P.length; idx.set(k, i); P.push(q); } I.push(i); });
    const N = P.map(() => [0, 0, 0]), a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
    for (let t = 0; t < I.length; t += 3) { a.set(...P[I[t]]); b.set(...P[I[t + 1]]); c.set(...P[I[t + 2]]); const f = b.sub(a).cross(c.sub(a));
      for (let j = 0; j < 3; j++) { const n = N[I[t + j]]; n[0] += f.x; n[1] += f.y; n[2] += f.z; } }
    const pos = []; P.forEach((q, i) => { const n = new THREE.Vector3(...N[i]).normalize(); pos.push(q[0] + n.x * 0.0035, q[1] + n.y * 0.0035, q[2] + n.z * 0.0035); });
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(I); g.computeVertexNormals();
    const mesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ name: 'swimwear', color, roughness: 0.7, metalness: 0, side: THREE.DoubleSide }));
    mesh.name = name; mesh.userData.cover = true; mesh.visible = false; grp.add(mesh); return mesh;
  };
  const build = () => {
    covers.male = [makeCover(A.SEXG.male, [BRIEF], 0x4a5a70, 'swimwear_male')].filter(Boolean);
    covers.female = [makeCover(A.SEXG.female, [BRIEF, TOP], 0x4a5a70, 'swimwear_female')].filter(Boolean);
  };

  const collect = () => {
    tagged = []; A.model.traverse(o => { if (!o.isMesh || (o.userData && o.userData.cover)) return;
      let inRepro = false; for (let p = o; p; p = p.parent) if (p === A.G.reproductive) inRepro = true;
      const l = label(o), isSkinGen = /^(scrotum|penis)/.test(o.name);
      if (isSkinGen || (inRepro && (EXT_M.test(l) || EXT_F.test(l)))) tagged.push(o); });
  };
  const apply = () => {
    if (!A) return;
    ['male', 'female'].forEach(s => (covers[s] || []).forEach(m => { m.visible = hide && sex === s; }));
    if (hide) tagged.forEach(o => { o.visible = false; });
    document.body.classList.toggle('privacy-on', hide);
    const cb = $('privhide'); if (cb) cb.checked = hide;
    cancelAnimationFrame(loop);
    if (hide) { const tick = () => { for (let i = 0; i < tagged.length; i++) if (tagged[i].visible) tagged[i].visible = false; loop = requestAnimationFrame(tick); }; loop = requestAnimationFrame(tick); }
    else tagged.forEach(o => { o.visible = /^(scrotum|penis)/.test(o.name) ? sex === 'male' : true; });
  };
  const setHide = v => { hide = v; try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (e) { } apply(); };

  const init = () => {
    A = window.__anat; build(); collect();
    const b = document.querySelector('#p-sex .b.on'); sex = b ? b.dataset.v : 'male';
    $('p-sex').addEventListener('click', e => { const t = e.target.closest('.b'); if (t) { sex = t.dataset.v; setTimeout(() => { collect(); apply(); }, 0); } });
    $('privhide').addEventListener('change', e => setHide(e.target.checked));
    apply();
  };
  let last = null; try { last = localStorage.getItem(KEY); } catch (e) { }
  const gate = $('privgate'), choose = v => { gate.hidden = true; hide = v; try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (e) { } if (A) apply(); document.body.style.overflow = ''; };
  document.body.style.overflow = 'hidden';
  $('pg-hide').addEventListener('click', () => choose(true));
  $('pg-show').addEventListener('click', () => choose(false));
  if (last === '0') $('pg-show').classList.add('pri'), $('pg-hide').classList.remove('pri');
  const focusBtn = last === '0' ? $('pg-show') : $('pg-hide'); focusBtn.focus();
  const wait = setInterval(() => { if (window.__anat && window.__anat.ready && $('p-sex')) { clearInterval(wait); init(); } }, 200);
})();
