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

  // swimwear: copy the skin triangles inside a region and push them 3 mm outward along the normal
  const inBrief = (x, y) => y > 0.66 && y < 0.84 && Math.abs(x) < 0.23;
  const inTop = (x, y, z) => Math.abs(x) < 0.17 && y > 1.225 && y < 1.335 && z > -0.2;
  const makeCover = (grp, test, color, name) => {
    const THREE = A.THREE, pos = [], inv = A.G.skin.matrixWorld.clone().invert(), v = new THREE.Vector3(), cen = new THREE.Vector3();
    grp.updateMatrixWorld(true);
    grp.traverse(m => {
      if (!m.isMesh || /^(scrotum|penis)/.test(m.name) || (m.userData && m.userData.cover)) return;
      const g = m.geometry, p = g.attributes.position, n = g.attributes.normal, ix = g.index, tc = ix ? ix.count / 3 : Math.floor(p.count / 3);
      const mx = new THREE.Matrix4().multiplyMatrices(inv, m.matrixWorld), nm = new THREE.Matrix3().getNormalMatrix(mx), nv = new THREE.Vector3();
      const W = i => { v.fromBufferAttribute(p, i).applyMatrix4(mx); return [v.x, v.y, v.z]; };
      for (let t = 0; t < tc; t++) {
        const ids = ix ? [ix.getX(t * 3), ix.getX(t * 3 + 1), ix.getX(t * 3 + 2)] : [t * 3, t * 3 + 1, t * 3 + 2];
        const P = ids.map(W); cen.set((P[0][0] + P[1][0] + P[2][0]) / 3, (P[0][1] + P[1][1] + P[2][1]) / 3, (P[0][2] + P[1][2] + P[2][2]) / 3);
        if (!test(cen.x, cen.y, cen.z)) continue;
        ids.forEach((id, k) => { if (n) { nv.fromBufferAttribute(n, id).applyMatrix3(nm).normalize(); } else nv.set(0, 0, 0);
          pos.push(P[k][0] + nv.x * 0.003, P[k][1] + nv.y * 0.003, P[k][2] + nv.z * 0.003); });
      }
    });
    if (!pos.length) return null;
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.computeVertexNormals();
    const mesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ name: 'swimwear', color, roughness: 0.75, metalness: 0, side: THREE.DoubleSide }));
    mesh.name = name; mesh.userData.cover = true; mesh.visible = false; grp.add(mesh); return mesh;
  };
  const build = () => {
    const male = A.SEXG.male, female = A.SEXG.female;
    covers.male = [makeCover(male, inBrief, 0x4a5a70, 'swimwear_male')].filter(Boolean);
    covers.female = [makeCover(female, (x, y, z) => inBrief(x, y) || inTop(x, y, z), 0x4a5a70, 'swimwear_female')].filter(Boolean);
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
