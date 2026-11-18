// Latin and Greek word-origin add-on. It sits on top of whichever language pack is loaded and adds a "Word origin" card to the selection sidebar.
// It reads data/*.json (roots, prefixes, suffixes, grammar, origins) and the Latin name lists data/names.txt, structures.txt and directions.txt (built into names by compose.js). Edit those files to fix or add an entry; no build step.
// The card shows English glosses, or Traditional Chinese when the zh-Hant pack is on. With no pack, or if the data fails to load, nothing is added.
(function () {
  const base = document.currentScript.src.replace(/card\.js(\?.*)?$/, '');
  const FILES = ['roots', 'prefixes', 'suffixes', 'origins'];
  const ENDINGS = {
    um: { display: '-um', origin: { lang: 'lat', word: '-um' }, meaning: { en: 'neuter noun ending', 'zh-Hant': '中性名詞詞尾' } },
    us: { display: '-us', origin: { lang: 'lat', word: '-us' }, meaning: { en: 'masculine noun ending', 'zh-Hant': '陽性名詞詞尾' } },
  };
  const LANGNAME = { grc: 'Greek', lat: 'Latin' };
  const LANGNAME_ZH = { grc: '希臘語', lat: '拉丁語' };
  let D = null, els = [];
  let namer = null;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const zhOn = () => !!(window.__zh && window.__zh.on && window.__zh.pack === 'zh-Hant');
  const lang = () => (zhOn() ? 'zh-Hant' : 'en');
  const gloss = f => (f && (f[lang()] || f.en)) || '';
  const label = (kind, e) => (kind === 'root' ? e.combining : e.display) || e.form;

  // Split a word into known pieces with the fewest parts. A joining -o- after a root is skipped. Returns [[kind, element], ...] or null.
  function decompose(word) {
    word = word.toLowerCase(); const memo = new Map();
    const solve = (i, prev) => {
      if (i === word.length) return [];
      if (prev === 'root' && ENDINGS[word.slice(i)]) return [['ending', ENDINGS[word.slice(i)]]];
      const key = i + '|' + prev; if (memo.has(key)) return memo.get(key);
      let best = null;
      for (const [kind, e] of els) {
        if (!word.startsWith(e.form, i)) continue;
        if (kind === 'prefix' && prev) continue;
        if (kind === 'suffix' && !prev) continue;
        const j = i + e.form.length, nexts = [solve(j, kind)];
        if (kind === 'root' && word[j] === 'o') nexts.push(solve(j + 1, kind));
        for (const rest of nexts) { if (!rest) continue; const c = [[kind, e], ...rest]; if (!best || c.length < best.length) best = c; }
      }
      memo.set(key, best); return best;
    };
    return solve(0, '');
  }

  // Root explaining a structure name, by English keyword. Only the part before the first comma counts, so "Biceps brachii, long head" does not match head.
  function rootsFor(name) {
    const core = name.toLowerCase().replace(/\([^)]*\)/g, ' ').split(',')[0];
    const hits = [], used = [];
    const cand = [];
    D.roots.forEach(r => (r.match || []).forEach(k => cand.push([k, r])));
    cand.sort((a, b) => b[0].length - a[0].length);
    for (const [k, r] of cand) {
      const re = new RegExp('(^|[^a-z])(' + k + '(?:e?s)?)(?![a-z])', 'g'); let m;
      while ((m = re.exec(core))) {
        const s = m.index + m[1].length, e = s + m[2].length;
        if (used.some(u => s < u[1] && e > u[0])) continue;
        used.push([s, e]); if (!hits.some(h => h.r === r)) hits.push({ r, word: m[2] });
      }
    }
    return hits;
  }

  const originLine = (kind, e) => {
    const o = e.origin || {}, ln = (lang() === 'zh-Hant' ? LANGNAME_ZH : LANGNAME)[o.lang] || '';
    return '<li><b>' + esc(label(kind, e)) + '</b> <span class="om">' + esc(gloss(e.meaning)) + '</span><span class="oo">' + esc(ln + (o.word ? ' ' + o.word : '')) + '</span></li>';
  };

  function build(name) {
    const ln = namer && namer.latinName(name);
    const head = ln ? '<div class="ot">' + (lang() === 'zh-Hant' ? '拉丁名' : 'Latin name') + '</div><div class="ol" lang="la">' + esc(ln) + '</div>' : '';
    return head + buildOrigin(name);
  }

  function buildOrigin(name) {
    const words = name.replace(/\([^)]*\)/g, ' ').split(',')[0].match(/[A-Za-z]+/g) || [], out = [], seen = new Set();
    for (const w of words) {
      const lw = w.toLowerCase(); if (lw.length < 4 || seen.has(lw)) continue; seen.add(lw);
      const parts = decompose(lw); if (!parts || parts.length < 2) continue;
      const known = D.origins.terms.find(t => t.term === lw);
      const plain = known ? gloss(known.plain) : parts.filter(p => p[0] !== 'ending').map(p => gloss(p[1].meaning)).join(' + ');
      out.push('<div class="ot"><span class="ow">' + esc(lw) + '</span> <span class="oa">→</span> ' + esc(plain) + '</div><ul>' + parts.map(p => originLine(p[0], p[1])).join('') + '</ul>');
    }
    const roots = rootsFor(name).filter(h => !out.some(x => x.includes('<b>' + esc(h.r.combining) + '</b>')));
    if (roots.length) out.push('<div class="ot">' + (lang() === 'zh-Hant' ? '字根' : 'Word root') + '</div><ul>' + roots.map(h => {
      const o = h.r.origin, ln = (lang() === 'zh-Hant' ? LANGNAME_ZH : LANGNAME)[o.lang] || '';
      return '<li><b>' + esc(h.r.combining) + '</b> <span class="om">' + esc(gloss(h.r.meaning).toLowerCase().includes(h.word.toLowerCase()) ? gloss(h.r.meaning) : h.word.toLowerCase() + ' = ' + gloss(h.r.meaning)) + '</span><span class="oo">' + esc(ln + ' ' + o.word) + '</span></li>';
    }).join('') + '</ul>');
    return out.join('');
  }

  function css() {
    const s = document.createElement('style');
    s.textContent = '#sborigin[data-zh]::after{content:none!important}#sborigin{margin:12px 0 4px;border-top:1px solid var(--color-accent-200,#e3dccc);padding-top:8px;font-size:12.5px;line-height:1.45}' +
      '#sborigin summary{cursor:pointer;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-accent-700,#6b5a3a);font-weight:600}' +
      '#sborigin .ot{margin:8px 0 2px;font-weight:600}#sborigin .ow{font-style:italic}#sborigin .oa{opacity:.6}' +
      '#sborigin ul{list-style:none;margin:0;padding:0}#sborigin li{display:flex;flex-wrap:wrap;gap:2px 8px;padding:2px 0}' +
      '#sborigin .ol{font-style:italic;font-size:13.5px}#sborigin .om{flex:1 1 auto}#sborigin .oo{opacity:.65;font-size:11.5px}' +
      '#sborigin:lang(zh-Hant),#sborigin[lang="zh-Hant"]{font-family:"Noto Sans HK","PingFang HK","Microsoft JhengHei","Noto Sans TC",sans-serif}';
    document.head.appendChild(s);
  }

  function mount() {
    const sbar = document.getElementById('sbar'), name = document.getElementById('sbname');
    if (!sbar || !name) return false;
    css();
    const card = document.createElement('details'); card.id = 'sborigin'; card.open = true;
    card.dataset.zh = ''; // makes the pack's interface translator skip this card, so its glosses are not re-translated
    const sys = document.getElementById('sbsys'); (sys || name).insertAdjacentElement('afterend', card);
    let lastEn = '';
    const render = () => {
      const html = D ? build(lastEn) : '';
      card.hidden = !html; card.lang = lang();
      card.innerHTML = html ? '<summary>' + (lang() === 'zh-Hant' ? '詞源' : 'Word origin') + '</summary>' + html : '';
    };
    // The pack's interface translator may rewrite #sbname after the page sets it. A new label arrives as a childList record, and the
    // translator's rewrite follows as a characterData record whose oldValue is the English label. Other changes keep the last English label.
    new MutationObserver(list => {
      if (list.some(r => r.type === 'childList')) { const cd = list.find(r => r.type === 'characterData'); lastEn = cd && cd.oldValue != null ? cd.oldValue : name.textContent || ''; }
      render();
    }).observe(name, { childList: true, characterData: true, characterDataOldValue: true, subtree: true });
    new MutationObserver(render).observe(document.body, { attributes: true, attributeFilter: ['class'] });
    lastEn = name.textContent || '';
    render(); return true;
  }

  const TEXT = ['names', 'structures', 'directions'];
  const textP = Promise.all(TEXT.map(f => fetch(base + 'data/' + f + '.txt').then(r => r.text()).catch(() => '')));
  Promise.all([textP].concat(FILES.map(f => fetch(base + 'data/' + f + '.json').then(r => r.json())))).then(([[names, structures, directions], roots, prefixes, suffixes, origins]) => {
    namer = window.__latinCompose.create({ names, structures, directions });
    D = { roots: roots.roots, origins };
    els = [].concat(prefixes.prefixes.map(e => ['prefix', e]), roots.roots.map(e => ['root', e]), suffixes.suffixes.map(e => ['suffix', e]));
    window.__latin = { decompose, rootsFor, build, latinName: n => namer && namer.latinName(n) };
    let tries = 0; const go = () => { if (!mount() && ++tries < 40) setTimeout(go, 500); };
    if (document.readyState === 'complete') go(); else window.addEventListener('load', go);
  }).catch(() => { });
})();
