// Builds a Latin name from an English structure label. Works in the browser (window.__latinCompose) and in Node (module.exports) so scripts/test_latin_names.js can test it.
// Lookup order: names.txt (exact), structures.txt (exact), then "direction words + one structure" with the direction words agreeing in gender with the noun.
(function (root) {
  const ROMAN = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  const roman = n => { let s = ''; for (const [v, r] of ROMAN) while (n >= v) { s += r; n -= v; } return s; };
  const REGION = { C: 'cervicalis', T: 'thoracica', L: 'lumbalis', S: 'sacralis', Co: 'coccygea' };

  // Parse "English|Latin|gender" lines. Lines starting with # are comments.
  function parseTable(text) {
    const map = new Map();
    String(text).split('\n').forEach(l => {
      if (!l.trim() || l[0] === '#') return; const p = l.split('|'); if (p.length < 2 || !p[0].trim()) return;
      const e = p[0].trim().toLowerCase(); if (!map.has(e)) map.set(e, { t: p[1].trim(), g: (p[2] || '').trim() });
    });
    return map;
  }
  // Parse "English|masculine|feminine|neuter" lines.
  function parseDirections(text) {
    const map = new Map();
    String(text).split('\n').forEach(l => {
      if (!l.trim() || l[0] === '#') return; const p = l.split('|').map(s => s.trim()); if (p.length < 4) return;
      map.set(p[0].toLowerCase(), { m: p[1], f: p[2], n: p[3] });
    });
    return map;
  }

  function create(data) {
    const names = parseTable(data.names), structures = parseTable(data.structures), dirs = parseDirections(data.directions);
    const SIDE = { left: 'left', right: 'right' };
    const hit = s => { const k = s.toLowerCase(); return names.get(k) || structures.get(k) || null; };

    // Add direction words (English order) to an entry. Latin puts the word nearest the noun first, so the list is reversed.
    // A name with a comma gets the words before the comma, so they agree with the main noun.
    function addAdj(e, words) {
      if (!e || !/^[mfn]$/.test(e.g)) return null;
      const forms = []; for (let i = words.length - 1; i >= 0; i--) { const d = dirs.get(words[i].toLowerCase()); if (!d) return null; forms.push(d[e.g]); }
      const adj = forms.join(' '), i = e.t.indexOf(', ');
      return { t: i < 0 ? e.t + ' ' + adj : e.t.slice(0, i) + ' ' + adj + e.t.slice(i), g: e.g };
    }

    // Numbers after a name: ribs and vertebrae use Roman numerals (Costa V, Vertebra lumbalis V (L5)). Other codes stay as written.
    function numbered(baseEn, b, code) {
      let m;
      if (/^rib$/i.test(baseEn) && /^\d+$/.test(code)) return { t: b.t + ' ' + roman(+code), g: b.g };
      if (/^vertebra$/i.test(baseEn) && (m = code.match(/^(Co|[CTLS])(\d+)$/))) return { t: b.t + ' ' + REGION[m[1]] + ' ' + roman(+m[2]) + ' (' + code + ')', g: b.g };
      return { t: b.t + ' ' + code, g: b.g };
    }

    // Direction words at the start, then one known structure: "Right superior lobe" = lobus superior dexter.
    function composed(s) {
      const tok = s.split(/\s+/);
      for (let i = 1; i < tok.length; i++) {
        if (!dirs.has(tok[i - 1].toLowerCase())) return null;
        const rest = hit(tok.slice(i).join(' '));
        if (rest) return addAdj(rest, tok.slice(0, i));
      }
      return null;
    }

    function tr(s) {
      s = (s || '').trim(); if (!s) return null;
      let e = hit(s); if (e) return e;
      let m;
      m = s.match(/^Magnified(?: tooth)?:\s+(.+)$/); if (m) { const b = tr(m[1]); if (b) return { t: 'Auctum: ' + b.t, g: b.g }; }
      m = s.match(/^([CTLS]\d+)\s+root$/); if (m) return { t: 'Radix ' + m[1], g: 'f' };
      // side after the name, in brackets: "Rib 5 (left)", "Canine, maxillary (right, #13)", "Vagus nerve (CN X, left)"
      m = s.match(/^(.+?)\s+\((left|right),\s*#(\d+)\)$/i); if (m) { const b = tr(m[1]), r = b && addAdj(b, [m[2]]); if (r) return { t: r.t + ' #' + m[3], g: r.g }; }
      m = s.match(/^(.+?)\s+\((.+?),\s*(left|right)\)$/i); if (m) { const b = tr(m[1] + ' (' + m[2] + ')') || tr(m[1]); if (b) return addAdj(b, [m[3]]); }
      m = s.match(/^(Left|Right)\s+(.+)$/i); if (m) { const b = tr(m[2]); if (b) return addAdj(b, [m[1]]); }
      m = s.match(/^(.+?),?\s+\((left|right)\)$/i) || s.match(/^(.+?),\s+(left|right)$/i); if (m) { const b = tr(m[1]); if (b) return addAdj(b, [m[2]]); }
      m = s.match(/^(.*?)\s+((?:Co|[CTLS])\d+(?:\/[CTLS]\d+)?|\d+(?:[–-]\d+)?)$/); if (m) { const b = tr(m[1]); if (b) return numbered(m[1], b, m[2]); }
      m = s.match(/^(.+?)\s+\((.+)\)$/); if (m) { const b = tr(m[1]), q = tr(m[2]); if (b && q) return { t: b.t + ' (' + q.t + ')', g: b.g }; if (b) return b; }
      const i = s.indexOf(', ');
      if (i > 0) {
        const b = tr(s.slice(0, i)), qs = s.slice(i + 2); if (b) {
          const ws = qs.split(/\s+/);
          if (ws.every(w => dirs.has(w.toLowerCase()))) { const r = addAdj(b, ws); if (r) return r; }   // "Canine, maxillary" = dens caninus maxillaris
          const q = tr(qs); if (q) return { t: b.t + ', ' + q.t, g: b.g };
        }
      }
      return composed(s);
    }

    return { latinName: s => { const r = tr(s); return r ? r.t : null; }, tr, roman };
  }

  const api = { create, parseTable, parseDirections, roman };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.__latinCompose = api;
})(typeof window !== 'undefined' ? window : globalThis);
