/* =========================================================
 * Biên Niên Sử Teyvat – ứng dụng một trang (hash router)
 * Không cần build: mở index.html trực tiếp trong trình duyệt.
 * ========================================================= */
(function () {
  "use strict";

  const L = window.LORE;
  const $app = document.getElementById("app");
  const TYPES = ["character", "weapon", "artifact", "book", "item"];
  const PAGES = { timeline: "#/timeline", civilizations: "#/civilizations", archive: "#/archive", theories: "#/theories" };

  let lang = localStorage.getItem("lang") || "vi";

  /* ---------------- Helpers ---------------- */
  const u = () => L.ui[lang];
  const t = (o) => (o == null ? "" : typeof o === "string" ? o : o[lang] ?? o.vi ?? o.en ?? "");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const arr = (o) => { const v = t(o); return Array.isArray(v) ? v : v ? [v] : []; };

  /* ---------------- Index ---------------- */
  const index = new Map();
  L.timeline.forEach((e) => index.set(e.id, { kind: "era", data: e }));
  L.civilizations.forEach((c) => index.set(c.id, { kind: "civ", data: c }));
  L.archive.forEach((a) => index.set(a.id, { kind: "archive", data: a }));

  function hrefOf(id) {
    const ent = index.get(id);
    if (!ent) return PAGES[id] || null;
    return ent.kind === "civ" ? `#/civ/${id}` : ent.kind === "archive" ? `#/archive/${id}` : `#/timeline/${id}`;
  }
  function nameOf(id) {
    const ent = index.get(id);
    if (ent) return t(ent.data.name);
    if (PAGES[id]) return u().nav[id === "civilizations" ? "civs" : id];
    return id;
  }

  /* Liên kết ngược: ai nhắc đến ai (qua related, tags hoặc [[id]]) */
  const backlinks = new Map(); // id -> Set(sourceId)
  const addBL = (target, source) => {
    if (target === source || !index.has(target)) return;
    if (!backlinks.has(target)) backlinks.set(target, new Set());
    backlinks.get(target).add(source);
  };
  function scanText(obj, cb) {
    if (obj == null) return;
    if (typeof obj === "string") { for (const m of obj.matchAll(/\[\[([a-z0-9-]+)/g)) cb(m[1]); return; }
    if (Array.isArray(obj)) return obj.forEach((x) => scanText(x, cb));
    if (typeof obj === "object") Object.values(obj).forEach((x) => scanText(x, cb));
  }
  [...L.civilizations, ...L.archive].forEach((e) => {
    (e.related || []).forEach((r) => addBL(r, e.id));
    scanText([e.sections, e.chapters, e.summary, e.theories, e.quote], (r) => addBL(r, e.id));
  });

  function neighborsOf(id) {
    const ent = index.get(id);
    if (!ent) return [];
    const d = ent.data;
    return [...new Set([...(d.related || []), ...(backlinks.get(id) || [])])].filter((x) => x !== id && index.has(x));
  }

  /* Sự kiện timeline liên quan tới một id */
  function eventsFor(id) {
    const out = [];
    L.timeline.forEach((era) => era.events.forEach((ev) => {
      let hit = (ev.tags || []).includes(id);
      if (!hit) scanText([ev.body, ev.details, ev.impact], (r) => { if (r === id) hit = true; });
      if (hit) out.push({ era, ev });
    }));
    return out;
  }

  /* ---------------- Định dạng văn bản ---------------- */
  function fmt(s) {
    let h = esc(s);
    h = h.replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (m, id, label) => {
      const href = hrefOf(id);
      const text = label || esc(nameOf(id));
      return href ? `<a class="lore-link" href="${href}">${text}</a>` : `<span class="lore-link broken" title="Missing: ${id}">${text}</span>`;
    });
    h = h.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
    return h;
  }
  const paras = (o) => arr(o).map((p) => `<p>${fmt(p)}</p>`).join("");

  /* ---------------- Biểu tượng ---------------- */
  const ICONS = {
    character: '<path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4.4 0-8 2.2-8 5v2h16v-2c0-2.8-3.6-5-8-5Z"/>',
    weapon: '<path d="M20.5 2.5 13 4l-8.4 8.4 2 2-2.9 2.9-1.2-.4-.9.9 2.1 2.1 2.1 2.1.9-.9-.4-1.2 2.9-2.9 2 2L19.9 11l1.5-7.5ZM8.6 14.4 18 5l.9.1.1.9-9.4 9.4Z"/>',
    artifact: '<path d="M12 2c1.6 2.6 1.6 5 0 7.3C10.4 7 10.4 4.6 12 2Zm-6.8 4.6c3 .5 4.8 2.2 5.3 5-2.9-.4-4.7-2-5.3-5Zm13.6 0c-.6 3-2.4 4.6-5.3 5 .5-2.8 2.3-4.5 5.3-5ZM12 11.5c2.5 0 4.5 2 4.5 4.5S14.5 22 12 22s-4.5-3.5-4.5-6 2-4.5 4.5-4.5Z"/>',
    book: '<path d="M4 3h7a3 3 0 0 1 3 3v15a2.5 2.5 0 0 0-2.5-2.5H4V3Zm16 0h-4.5A2.5 2.5 0 0 0 15 4v17a2.5 2.5 0 0 1 2.5-2.5H20V3Z"/>',
    item: '<path d="m12 2 7 6-7 14L5 8l7-6Zm0 3.1L8.2 8.3 12 16.6l3.8-8.3L12 5.1Z"/>',
    star: '<path d="M12 1.5 14 10l8.5 2-8.5 2-2 8.5-2-8.5-8.5-2 8.5-2 2-8.5Z"/>',
    civ: '<path d="M12 2 2 7v2h20V7L12 2ZM4 11v7h3v-7H4Zm6.5 0v7h3v-7h-3Zm6.5 0v7h3v-7h-3ZM2 20v2h20v-2H2Z"/>',
    time: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v4.6l3.6 2.1-1 1.7L11 12.6V7h2Z"/>',
    theory: '<path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2ZM9 20h6v2H9v-2Z"/>',
    ext: '<path d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/>'
  };
  const icon = (k, cls = "") => `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[k] || ICONS.star}</svg>`;

  /* ---------------- Thành phần dùng chung ---------------- */
  const statusBadge = (s) => `<span class="badge ${s}">${s === "fallen" ? u().fallen : u().existing}</span>`;
  const typeBadge = (ty) => `<span class="badge type">${icon(ty)}${u().types[ty]}</span>`;

  function sourcesBlock(list) {
    if (!list || !list.length) return "";
    return `<section class="block sources"><h3>${icon("ext")}${u().sources}</h3><ul>${list
      .map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`)
      .join("")}</ul></section>`;
  }

  function theoryBox(th, originId) {
    const origin = originId ? `<div class="theory-origin">${u().theoryFrom}: <a class="lore-link" href="${hrefOf(originId)}">${esc(nameOf(originId))}</a></div>` : "";
    const src = (th.sources || []).map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${icon("ext")}${esc(s.label)}</a>`).join("");
    return `<article class="theory">
      <div class="theory-tag">${icon("theory")}${u().theoryLabel}</div>
      <h4>${esc(t(th.title))}</h4>${origin}
      <p>${fmt(t(th.body))}</p>
      ${src ? `<div class="theory-src">${src}</div>` : ""}
    </article>`;
  }

  function theoriesBlock(list, originId) {
    if (!list || !list.length) return "";
    return `<section class="block theories-block">
      <h3>${icon("theory")}${u().theoryLabel}</h3>
      <p class="block-note">${u().theoryNote}</p>
      ${list.map((th) => theoryBox(th, originId)).join("")}
    </section>`;
  }

  function sectionsBlock(sections, quote) {
    const q = quote
      ? `<blockquote class="quote"><p>“${fmt(t(quote.text))}”</p><cite>— ${esc(t(quote.source))}</cite></blockquote>`
      : "";
    return `<section class="block canon">
      <div class="canon-head"><span class="canon-tag">${icon("star")}${u().canonLabel}</span><span class="block-note">${u().canonNote}</span></div>
      ${q}
      ${(sections || []).map((s) => `<h3>${esc(t(s.title))}</h3>${paras(s.body)}`).join("")}
    </section>`;
  }

  /* ---------------- Trình Đọc Sách Cổ & Thánh Di Vật (Interactive Tome Reader) ---------------- */
  function chaptersBlock(entry) {
    const chs = entry.chapters;
    if (!chs || !chs.length) return "";
    const isBook = entry.type === "book";
    const titleText = isBook ? u().readerBookTitle : u().readerArtifactTitle;

    const tabsHtml = chs.map((ch, idx) =>
      `<button type="button" class="tome-tab ${idx === 0 ? "active" : ""}" data-ch-idx="${idx}">
        <span class="tome-tab-num">${idx + 1}</span>
        <span class="tome-tab-label">${esc(t(ch.title).replace(/^\d+\.\s*/, ""))}</span>
      </button>`
    ).join("");

    const pagesHtml = chs.map((ch, idx) =>
      `<article class="tome-page ${idx === 0 ? "active" : ""}" data-page-idx="${idx}">
        <div class="tome-page-head">
          <span class="tome-vol-badge">${isBook ? "📖" : "🏺"} ${idx + 1} / ${chs.length}</span>
          <h4>${esc(t(ch.title))}</h4>
        </div>
        <div class="tome-page-body">${paras(ch.body)}</div>
      </article>`
    ).join("");

    return `
    <section class="block tome-reader ${isBook ? "is-book" : "is-artifact"}" id="tome-reader">
      <div class="tome-header">
        <div>
          <span class="canon-tag">${icon(entry.type)} ${esc(titleText)}</span>
          <h3>${esc(t(entry.name))} (${chs.length})</h3>
        </div>
        <button type="button" class="btn ghost small-btn" id="tome-toggle-all" data-mode="single">${esc(u().readerShowAll)}</button>
      </div>
      <div class="tome-tabs" role="tablist">${tabsHtml}</div>
      <div class="tome-viewport">${pagesHtml}</div>
      <div class="tome-controls" id="tome-controls">
        <button type="button" class="btn ghost small-btn" id="tome-prev" disabled>${esc(u().readerPrev)}</button>
        <span class="tome-status" id="tome-status">1 / ${chs.length}</span>
        <button type="button" class="btn ghost small-btn" id="tome-next" ${chs.length <= 1 ? "disabled" : ""}>${esc(u().readerNext)}</button>
      </div>
    </section>`;
  }

  function bindChaptersReader() {
    const reader = document.getElementById("tome-reader");
    if (!reader) return;
    const tabs = [...reader.querySelectorAll(".tome-tab")];
    const pages = [...reader.querySelectorAll(".tome-page")];
    const btnPrev = document.getElementById("tome-prev");
    const btnNext = document.getElementById("tome-next");
    const btnAll = document.getElementById("tome-toggle-all");
    const status = document.getElementById("tome-status");
    const controls = document.getElementById("tome-controls");
    let cur = 0;
    let showAll = false;

    function updateReader() {
      if (showAll) {
        reader.classList.add("show-all-pages");
        pages.forEach((p) => p.classList.add("active"));
        tabs.forEach((tb) => tb.classList.add("active"));
        if (controls) controls.style.display = "none";
        if (btnAll) btnAll.textContent = u().readerSingleMode;
        return;
      }
      reader.classList.remove("show-all-pages");
      pages.forEach((p, idx) => p.classList.toggle("active", idx === cur));
      tabs.forEach((tb, idx) => tb.classList.toggle("active", idx === cur));
      if (controls) controls.style.display = "flex";
      if (status) status.textContent = `${cur + 1} / ${pages.length}`;
      if (btnPrev) btnPrev.disabled = cur === 0;
      if (btnNext) btnNext.disabled = cur === pages.length - 1;
      if (btnAll) btnAll.textContent = u().readerShowAll;
    }

    tabs.forEach((tb, idx) => {
      tb.addEventListener("click", () => {
        showAll = false;
        cur = idx;
        updateReader();
      });
    });
    btnPrev?.addEventListener("click", () => {
      if (cur > 0) { cur--; updateReader(); }
    });
    btnNext?.addEventListener("click", () => {
      if (cur < pages.length - 1) { cur++; updateReader(); }
    });
    btnAll?.addEventListener("click", () => {
      showAll = !showAll;
      updateReader();
    });
  }

  /* ---------------- Hình ảnh thực tế từ Genshin Impact Wiki (Fandom) ---------------- */
  const imgOf = (id) => (L.images && L.images[id]) || "";

  function wikiCardBanner(id, altText) {
    const url = imgOf(id);
    if (!url) return "";
    return `<div class="card-img-wrap"><img src="${esc(url)}" alt="${esc(altText)}" loading="lazy" referrerpolicy="no-referrer" /></div>`;
  }

  function wikiHeroBanner(id, captionText) {
    const url = imgOf(id);
    if (!url) return "";
    return `
      <figure class="wiki-hero-banner">
        <div class="wiki-hero-img-wrap">
          <img src="${esc(url)}" alt="${esc(captionText)}" loading="lazy" referrerpolicy="no-referrer" />
        </div>
        <figcaption>${icon("star")} <span>${esc(captionText)} — <em>Genshin Impact Wiki</em></span></figcaption>
      </figure>`;
  }

  function galleryBlock(id) {
    let items = (L.galleries && L.galleries[id]) || [];
    if (!items.length) {
      // Tự động tạo bộ sưu tập hình ảnh từ các mục liên quan (related)
      const relIds = neighborsOf(id).filter((r) => imgOf(r)).slice(0, 6);
      items = relIds.map((r) => {
        const ent = index.get(r);
        return {
          url: imgOf(r),
          caption: ent ? ent.data.name : { vi: r, en: r },
          href: hrefOf(r)
        };
      });
    }
    if (!items.length) return "";
    return `
      <section class="block wiki-gallery-block">
        <h3>${icon("star")}${esc(u().galleryTitle)} (${items.length})</h3>
        <div class="wiki-gallery-grid">
          ${items.map((it) => {
            const cap = esc(t(it.caption));
            const inner = `<div class="wg-img"><img src="${esc(it.url)}" alt="${cap}" loading="lazy" referrerpolicy="no-referrer" /></div><p>${cap}</p>`;
            return it.href
              ? `<a class="wg-card" href="${it.href}">${inner}</a>`
              : `<a class="wg-card" href="${esc(it.url)}" target="_blank" rel="noopener">${inner}</a>`;
          }).join("")}
        </div>
      </section>`;
  }

  function eventWikiBanner(ev, eraId) {
    const validTags = (ev.tags || []).filter((x) => imgOf(x));
    const primaryId = validTags[0] || eraId;
    const url = imgOf(primaryId);
    if (!url) return "";
    return `<div class="event-img-banner"><img src="${esc(url)}" alt="${esc(t(ev.title))}" loading="lazy" referrerpolicy="no-referrer" /></div>`;
  }

  function causalDiagramHtml(ev) {
    const validTags = (ev.tags || []).filter((x) => index.has(x));
    if (validTags.length < 2) return "";
    const nodes = validTags.slice(0, 6).map((id) => {
      const ent = index.get(id);
      const d = ent.data;
      const typeLabel = ent.kind === "civ" ? (d.status === "fallen" ? u().fallen : u().existing) : u().types[d.type];
      return `<a class="causal-node ${ent.kind}" href="${hrefOf(id)}">
        <span class="causal-kind">${esc(typeLabel)}</span>
        <strong>${esc(t(d.name).replace(/\s*\(.+?\)/, ""))}</strong>
      </a>`;
    }).join('<span class="causal-arrow" aria-hidden="true">⟷</span>');

    return `<div class="event-causal-diagram">
      <div class="causal-title">${icon("civ")} ${esc(u().tlCausalDiagram)}</div>
      <div class="causal-track">${nodes}</div>
    </div>`;
  }

  function miniCard(id) {
    const ent = index.get(id);
    if (!ent) return "";
    const d = ent.data;
    const label = ent.kind === "civ" ? statusBadge(d.status) : ent.kind === "archive" ? typeBadge(d.type) : `<span class="badge canon">${icon("time")}${u().nav.timeline}</span>`;
    return `<a class="mini-card" href="${hrefOf(id)}">${label}<strong>${esc(t(d.name))}</strong><span>${esc(t(d.summary || d.desc).slice(0, 110))}…</span></a>`;
  }

  function relatedBlock(id) {
    const ids = neighborsOf(id);
    if (!ids.length) return "";
    return `<section class="block"><h3>${icon("star")}${u().related} (${ids.length})</h3><div class="mini-grid">${ids.map(miniCard).join("")}</div></section>`;
  }

  function timelineRefs(id) {
    const evs = eventsFor(id);
    if (!evs.length) return "";
    return `<section class="block"><h3>${icon("time")}${u().onTimeline} (${evs.length})</h3><ul class="tl-refs">${evs
      .map(({ era, ev }) => `<li><a href="#/timeline/${era.id}"><span class="when">${esc(t(ev.when))}</span>${esc(t(ev.title))}<small>${esc(t(era.name))}</small></a></li>`)
      .join("")}</ul></section>`;
  }

  /* ---------------- Bản đồ Chòm sao Liên kết Lore (3 vòng đồng tâm) ---------------- */
  const NODE_COLORS = {
    fallen: "#ff8a8a",
    existing: "#7fe3b0",
    character: "#e3c27a",
    weapon: "#ffd59a",
    artifact: "#f3a6d8",
    book: "#b8e3a0",
    item: "#8fd0ff"
  };

  function constellationSection() {
    const W = 1000, H = 640, cx = 500, cy = 320;
    const pos = new Map();

    // Vòng 1 (Trong cùng): 7 Quốc gia hiện tại
    const ring1 = L.civilizations.filter((c) => c.status === "existing");
    ring1.forEach((c, i) => {
      const ang = (i / ring1.length) * Math.PI * 2 - Math.PI / 2;
      const rx = 120, ry = 90;
      pos.set(c.id, { x: +(cx + Math.cos(ang) * rx).toFixed(1), y: +(cy + Math.sin(ang) * ry).toFixed(1), group: "existing", r: 7.5, data: c, kind: "civ" });
    });

    // Vòng 2 (Giữa): 13 Văn minh sụp đổ + 6 Đồ vật/Vũ trụ
    const ring2 = [
      ...L.civilizations.filter((c) => c.status === "fallen").map((c) => ({ data: c, group: "fallen", kind: "civ", r: 7 })),
      ...L.archive.filter((a) => a.type === "item").map((a) => ({ data: a, group: "item", kind: "archive", r: 6.5 }))
    ];
    ring2.forEach((item, i) => {
      const ang = (i / ring2.length) * Math.PI * 2 - Math.PI / 2 + 0.08;
      const rx = 265, ry = 185;
      pos.set(item.data.id, {
        x: +(cx + Math.cos(ang) * rx).toFixed(1),
        y: +(cy + Math.sin(ang) * ry).toFixed(1),
        group: item.group,
        r: item.r,
        data: item.data,
        kind: item.kind
      });
    });

    // Vòng 3 (Ngoài cùng): Nhân vật, Vũ khí, Thánh di vật, Sách cổ
    const ring3 = L.archive.filter((a) => a.type !== "item");
    ring3.forEach((a, i) => {
      const ang = (i / ring3.length) * Math.PI * 2 - Math.PI / 2 + 0.05;
      const rx = 435, ry = 280;
      pos.set(a.id, { x: +(cx + Math.cos(ang) * rx).toFixed(1), y: +(cy + Math.sin(ang) * ry).toFixed(1), group: a.type, r: 5.8, data: a, kind: "archive" });
    });

    const edges = [];
    const seenEdge = new Set();
    for (const id of pos.keys()) {
      for (const nb of neighborsOf(id)) {
        if (!pos.has(nb)) continue;
        const key = id < nb ? `${id}|${nb}` : `${nb}|${id}`;
        if (seenEdge.has(key)) continue;
        seenEdge.add(key);
        edges.push({ a: id, b: nb, p1: pos.get(id), p2: pos.get(nb) });
      }
    }

    const linesSvg = edges.map((e) =>
      `<line class="c-edge" data-a="${e.a}" data-b="${e.b}" x1="${e.p1.x}" y1="${e.p1.y}" x2="${e.p2.x}" y2="${e.p2.y}" />`
    ).join("");

    const nodesSvg = [...pos.entries()].map(([id, n]) => {
      const col = NODE_COLORS[n.group] || "#e3c27a";
      const shortName = t(n.data.name).replace(/\s*\(.+?\)/, "").replace(/^(Vương quốc của |Thành bang |Văn minh Rồng |Văn minh cổ dưới |Văn minh )/, "");
      const dy = n.y < cy ? -11 : 17;
      return `<a href="${hrefOf(id)}" class="c-node" data-id="${id}" data-group="${n.group}" style="--ncol:${col}">
        <circle class="c-halo" cx="${n.x}" cy="${n.y}" r="${n.r + 5.5}" />
        <circle class="c-dot" cx="${n.x}" cy="${n.y}" r="${n.r}" />
        <text x="${n.x}" y="${+(n.y + dy).toFixed(1)}" text-anchor="middle">${esc(shortName)}</text>
      </a>`;
    }).join("");

    const legendKeys = ["fallen", "existing", "character", "weapon", "artifact", "book", "item"];
    const legendHtml = `<button type="button" class="c-leg-item active" data-group="all">${esc(u().all)} (${pos.size})</button>` +
      legendKeys.map((k) =>
        `<button type="button" class="c-leg-item" data-group="${k}"><i style="background:${NODE_COLORS[k]}"></i>${esc(u().constellationLegend[k])}</button>`
      ).join("");

    const defaultId = "khaenriah";
    return `
    <section class="home-section constellation-wrap">
      <div class="section-head">
        <div>
          <h2>${icon("star")} ${u().constellationTitle}</h2>
          <p class="constellation-sub">${u().constellationSub}</p>
        </div>
      </div>
      <div class="constellation-box">
        <div class="constellation-stage">
          <svg class="constellation-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(u().constellationTitle)}">
            <ellipse class="c-ring" cx="${cx}" cy="${cy}" rx="120" ry="90" />
            <ellipse class="c-ring" cx="${cx}" cy="${cy}" rx="265" ry="185" />
            <ellipse class="c-ring outer" cx="${cx}" cy="${cy}" rx="435" ry="280" />
            <g class="c-edges">${linesSvg}</g>
            <g class="c-nodes">${nodesSvg}</g>
          </svg>
          <div class="c-legend">${legendHtml}</div>
        </div>
        <aside class="constellation-info" id="constellation-info">${renderConstellationPreview(defaultId)}</aside>
      </div>
    </section>`;
  }

  function renderConstellationPreview(id) {
    const ent = index.get(id);
    if (!ent) return "";
    const d = ent.data;
    const nbs = neighborsOf(id);
    const badge = ent.kind === "civ" ? statusBadge(d.status) : typeBadge(d.type);
    return `
      <div class="c-preview">
        <div class="c-preview-top">${badge}</div>
        <h3><a href="${hrefOf(id)}">${esc(t(d.name))}</a></h3>
        ${d.subtitle ? `<p class="c-preview-sub">${esc(t(d.subtitle))}</p>` : d.period ? `<p class="c-preview-sub">${esc(t(d.period))}</p>` : ""}
        <p class="c-preview-desc">${esc(t(d.summary))}</p>
        <div class="c-preview-links">
          <span class="c-preview-label">${u().related} (${nbs.length})</span>
          <div class="tags">${nbs.slice(0, 10).map((x) => `<a class="chip small" href="${hrefOf(x)}">${esc(nameOf(x))}</a>`).join("")}</div>
        </div>
        <a class="btn ghost small-btn" href="${hrefOf(id)}">${u().viewAll} →</a>
      </div>`;
  }

  function bindConstellation() {
    const svg = document.querySelector(".constellation-svg");
    const info = document.getElementById("constellation-info");
    if (!svg || !info) return;
    let activeGroup = "all";

    function applyGroupFilter() {
      if (activeGroup === "all") {
        svg.classList.remove("has-focus");
        svg.querySelectorAll(".is-active, .is-neighbor").forEach((el) => el.classList.remove("is-active", "is-neighbor"));
        return;
      }
      svg.classList.add("has-focus");
      const groupIds = new Set();
      svg.querySelectorAll(".c-node").forEach((n) => {
        const hit = n.dataset.group === activeGroup;
        n.classList.toggle("is-active", hit);
        n.classList.remove("is-neighbor");
        if (hit) groupIds.add(n.dataset.id);
      });
      svg.querySelectorAll(".c-edge").forEach((e) => {
        const hit = groupIds.has(e.dataset.a) && groupIds.has(e.dataset.b);
        e.classList.toggle("is-active", hit);
      });
    }

    function highlight(id) {
      const nbs = new Set(neighborsOf(id));
      svg.classList.add("has-focus");
      svg.querySelectorAll(".c-node").forEach((n) => {
        const nid = n.dataset.id;
        n.classList.toggle("is-active", nid === id);
        n.classList.toggle("is-neighbor", nbs.has(nid));
      });
      svg.querySelectorAll(".c-edge").forEach((e) => {
        const hit = e.dataset.a === id || e.dataset.b === id;
        e.classList.toggle("is-active", hit);
      });
      info.innerHTML = renderConstellationPreview(id);
    }

    svg.querySelectorAll(".c-node").forEach((n) => {
      n.addEventListener("mouseenter", () => highlight(n.dataset.id));
      n.addEventListener("focus", () => highlight(n.dataset.id));
    });
    svg.addEventListener("mouseleave", applyGroupFilter);

    document.querySelectorAll(".c-legend .c-leg-item[data-group]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeGroup = btn.dataset.group;
        document.querySelectorAll(".c-legend .c-leg-item").forEach((b) => b.classList.toggle("active", b === btn));
        applyGroupFilter();
      });
    });
  }

  /* ---------------- Trang ---------------- */
  function pageHome() {
    const nEvents = L.timeline.reduce((n, era) => n + era.events.length, 0);
    const nTheories = [...L.civilizations, ...L.archive].reduce((n, e) => n + (e.theories || []).length, 0);
    const existing = L.civilizations.filter((c) => c.status === "existing");
    const fallen = L.civilizations.filter((c) => c.status === "fallen");
    const featured = [
      "heavenly-principles", "three-moons", "project-lunar-veil", "anacharsis", "secret-source", "nibelung-sovereigns",
      "descenders-false-sky", "five-sinners", "abyss-void-realm", "dainsleif", "columbina", "gnosis"
    ].map((id) => index.get(id)?.data).filter(Boolean);

    return `
    <section class="hero">
      <div class="hero-orb" aria-hidden="true"></div>
      <p class="kicker">${icon("star")}${u().heroKicker}</p>
      <h1 class="hero-title">${u().heroTitle}</h1>
      <p class="hero-text">${u().heroText}</p>
      <div class="hero-cta">
        <a class="btn primary" href="#/timeline">${icon("time")}${u().heroCta}</a>
        <a class="btn ghost" href="#/civilizations">${icon("civ")}${u().heroCta2}</a>
      </div>
      <dl class="stats">
        <div><dt>${L.timeline.length} · ${nEvents}</dt><dd>${u().stats.eras}</dd></div>
        <div><dt>${L.civilizations.length}</dt><dd>${u().stats.civs}</dd></div>
        <div><dt>${L.archive.length}</dt><dd>${u().stats.entries}</dd></div>
        <div><dt>${nTheories}</dt><dd>${u().stats.theories}</dd></div>
      </dl>
    </section>

    <section class="pillars">
      <a class="pillar" href="#/timeline">${icon("time", "big")}<h2>${u().nav.timeline}</h2><p>${u().pillars.timeline}</p></a>
      <a class="pillar" href="#/civilizations">${icon("civ", "big")}<h2>${u().nav.civs}</h2><p>${u().pillars.civs}</p></a>
      <a class="pillar" href="#/archive">${icon("artifact", "big")}<h2>${u().nav.archive}</h2><p>${u().pillars.archive}</p></a>
    </section>

    ${constellationSection()}

    <section class="home-section">
      <div class="section-head"><h2>${u().sevenNationsSpotlight} (${existing.length})</h2><a href="#/civilizations?status=existing">${u().viewAll} →</a></div>
      <div class="civ-grid">${existing.map(civCard).join("")}</div>
    </section>

    <section class="home-section">
      <div class="section-head"><h2>${u().fallenSpotlight} (${fallen.length})</h2><a href="#/civilizations?status=fallen">${u().viewAll} →</a></div>
      <div class="civ-grid">${fallen.slice(0, 9).map(civCard).join("")}</div>
    </section>

    <section class="home-section">
      <div class="section-head"><h2>${u().featured} (${L.archive.length})</h2><a href="#/archive">${u().viewAll} →</a></div>
      <div class="archive-grid">${featured.map(archiveCard).join("")}</div>
    </section>`;
  }

  function pageTimeline(eraId, params) {
    const regFilter = (params && params.get("region")) || "all";
    const regionKeys = ["all", "cosmos", "mondstadt", "liyue", "inazuma", "sumeru", "fontaine", "natlan", "snezhnaya", "khaenriah"];

    const tocItems = L.timeline.map((e, i) => {
      const count = e.events.filter((ev) => regFilter === "all" || ev.region === regFilter || (ev.tags || []).includes(regFilter)).length;
      return `<a href="#/timeline/${e.id}${regFilter !== "all" ? "?region=" + regFilter : ""}" data-era="${e.id}" class="tl-toc-link ${eraId === e.id ? "active" : ""} ${count === 0 ? "dim" : ""}">
        <span class="tl-toc-num">${String(i + 1).padStart(2, "0")}</span>
        <span class="tl-toc-text">
          <strong>${esc(t(e.name))}</strong>
          <small>${esc(t(e.period))}</small>
        </span>
        <span class="tl-toc-count">${count}</span>
      </a>`;
    }).join("");

    const regButtons = regionKeys.map((rk) => {
      const href = rk === "all" ? (eraId ? `#/timeline/${eraId}` : "#/timeline") : `#/timeline${eraId ? "/" + eraId : ""}?region=${rk}`;
      return `<a href="${href}" class="chip small ${regFilter === rk ? "active" : ""}">${esc(u().regions[rk] || rk)}</a>`;
    }).join("");

    function renderTimelineDetailItem(rawStr) {
      const lines = String(rawStr).split("\n");
      const mainRaw = lines[0] || "";
      const subs = lines.slice(1).map((s) => s.replace(/^\s*↳\s*/, "").trim()).filter(Boolean);

      let badgeHtml = "";
      let bodyText = mainRaw;
      const mSep = mainRaw.match(/^\*\*([^*]+)\*\*\s*(?:―|—|-)\s*(.+)$/);
      const mVer = mainRaw.match(/^(Phiên bản [^\n]+|Version [^\n]+)$/);
      if (mSep) {
        badgeHtml = `<span class="tl-entry-badge">${esc(mSep[1])}</span>`;
        bodyText = mSep[2];
      } else if (mVer) {
        badgeHtml = `<span class="tl-entry-badge version">${esc(mVer[1])}</span>`;
        bodyText = "";
      }

      const mainHtml = bodyText ? `<div class="tl-entry-main">${fmt(bodyText)}</div>` : "";
      const subsHtml = subs.length
        ? `<ul class="tl-sublist">${subs.map((sl) => `<li class="tl-subitem">${fmt(sl)}</li>`).join("")}</ul>`
        : "";
      return `<li class="tl-entry">${badgeHtml}${mainHtml}${subsHtml}</li>`;
    }

    const erasHtml = L.timeline.map((era, i) => {
      const filteredEvents = era.events.filter((ev) => regFilter === "all" || ev.region === regFilter || (ev.tags || []).includes(regFilter));
      if (!filteredEvents.length) return "";
      return `
      <section class="era" id="${era.id}">
        <div class="era-head">
          <span class="era-num">${String(i + 1).padStart(2, "0")}</span>
          <div class="era-head-text">
            <p class="era-period">${esc(t(era.period))}</p>
            <h2>${esc(t(era.name))}</h2>
            <p class="era-desc">${fmt(t(era.desc))}</p>
          </div>
        </div>
        ${wikiHeroBanner(era.id, t(era.name) + " (" + t(era.period) + ")")}
        <ol class="events">${filteredEvents.map((ev) => {
          const detailsArr = arr(ev.details);
          const detailsHtml = detailsArr.length
            ? `<div class="event-details">
                <div class="event-details-head">
                  <h4>${icon("star")} ${u().tlDetailsTitle} <span class="tl-count-pill">${detailsArr.length}</span></h4>
                  <button type="button" class="tl-collapse-btn" aria-expanded="true">${lang === "vi" ? "Thu gọn" : "Collapse"}</button>
                </div>
                <ul class="tl-entries-list">${detailsArr.map(renderTimelineDetailItem).join("")}</ul>
              </div>`
            : "";
          const impactText = t(ev.impact);
          const impactHtml = impactText
            ? `<div class="event-impact">
                <strong>${icon("time")} ${u().tlImpactTitle}:</strong>
                <span>${fmt(impactText)}</span>
              </div>`
            : "";
          const regLabel = ev.region && u().regions[ev.region] ? `<span class="badge type">${esc(u().regions[ev.region])}</span>` : "";
          const validTags = (ev.tags || []).filter((x) => index.has(x));
          return `
          <li class="event ${ev.certainty || "canon"}">
            <span class="dot" aria-hidden="true"></span>
            <article class="event-card">
              ${eventWikiBanner(ev, era.id)}
              <div class="event-meta">
                <span class="when">${icon("time")} ${esc(t(ev.when))}</span>
                <div class="event-badges">
                  ${regLabel}
                  <span class="badge ${ev.certainty === "disputed" ? "disputed" : "canon"}">${ev.certainty === "disputed" ? u().disputed : u().canon}</span>
                </div>
              </div>
              <h3>${esc(t(ev.title))}</h3>
              <div class="event-body">${paras(ev.body)}</div>
              ${detailsHtml}
              ${impactHtml}
              ${causalDiagramHtml(ev)}
              <footer class="event-foot">
                ${validTags.length ? `<div class="tags">${validTags.map((x) => `<a class="chip small" href="${hrefOf(x)}">${esc(nameOf(x))}</a>`).join("")}</div>` : ""}
                ${(ev.sources || []).length ? `<div class="event-src">${ev.sources.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${icon("ext")}${esc(s.label)}</a>`).join("")}</div>` : ""}
              </footer>
            </article>
          </li>`;
        }).join("")}
        </ol>
      </section>`;
    }).join("");

    setTimeout(() => {
      if (eraId) document.getElementById(eraId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      document.querySelectorAll(".tl-toc-link[data-era]").forEach((a) => {
        a.addEventListener("click", () => {
          const target = document.getElementById(a.dataset.era);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
      document.querySelectorAll(".tl-collapse-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const box = btn.closest(".event-details");
          const collapsed = box.classList.toggle("is-collapsed");
          btn.setAttribute("aria-expanded", String(!collapsed));
          btn.textContent = collapsed ? (lang === "vi" ? "Mở rộng" : "Expand") : (lang === "vi" ? "Thu gọn" : "Collapse");
        });
      });
    }, 30);

    return `
      <header class="page-head">
        <p class="kicker">${icon("time")}${u().nav.timeline}</p>
        <h1>${u().nav.timeline}</h1>
        <p>${u().timelineIntro}</p>
      </header>
      <div class="tl-layout">
        <aside class="tl-sidebar">
          <div class="tl-box">
            <h3>${icon("civ")} ${u().tlFilterRegion}</h3>
            <div class="tl-reg-chips">${regButtons}</div>
          </div>
          <nav class="tl-box tl-toc">
            <h3>${icon("time")} ${u().tlTocTitle}</h3>
            <div class="tl-toc-list">${tocItems}</div>
          </nav>
        </aside>
        <div class="tl-main">
          ${erasHtml || `<p class="empty">${u().noResults}</p>`}
        </div>
      </div>`;
  }

  function civCard(c) {
    return `<a class="civ-card ${c.status}" href="#/civ/${c.id}" style="--accent:${c.accent || "#e3c27a"}">
      ${wikiCardBanner(c.id, t(c.name))}
      <div class="civ-card-top">${statusBadge(c.status)}<span class="civ-region">${esc(t(c.region))}</span></div>
      <h3>${esc(t(c.name))}</h3>
      <p class="civ-period">${esc(t(c.period))}</p>
      <p>${esc(t(c.summary))}</p>
    </a>`;
  }

  function pageCivs(params) {
    const f = params.get("status") || "all";
    const list = L.civilizations.filter((c) => f === "all" || c.status === f);
    const chip = (k, label) => `<a class="chip ${f === k ? "active" : ""}" href="#/civilizations${k === "all" ? "" : "?status=" + k}">${label} <span>${k === "all" ? L.civilizations.length : L.civilizations.filter((c) => c.status === k).length}</span></a>`;
    return `
      <header class="page-head"><p class="kicker">${icon("civ")}${u().nav.civs}</p><h1>${u().nav.civs}</h1><p>${u().civsIntro}</p></header>
      <nav class="chip-bar">${chip("all", u().all)}${chip("fallen", u().fallen)}${chip("existing", u().existing)}</nav>
      <div class="civ-grid">${list.map(civCard).join("") || `<p class="empty">${u().noResults}</p>`}</div>`;
  }

  function pageCiv(id) {
    const c = index.get(id)?.kind === "civ" ? index.get(id).data : null;
    if (!c) return pageNotFound();
    return `
    <article class="detail" style="--accent:${c.accent || "#e3c27a"}">
      <a class="back" href="#/civilizations">← ${u().backTo} ${u().nav.civs}</a>
      <header class="detail-head">
        <div class="detail-badges">${statusBadge(c.status)}</div>
        <h1>${esc(t(c.name))}</h1>
        <p class="lead">${fmt(t(c.summary))}</p>
      </header>
      ${wikiHeroBanner(c.id, t(c.name) + " — " + t(c.region))}
      <div class="detail-layout">
        <div class="detail-main">
          ${galleryBlock(c.id)}
          ${sectionsBlock(c.sections, c.quote)}
          ${theoriesBlock(c.theories)}
          ${relatedBlock(c.id)}
        </div>
        <aside class="detail-side">
          <dl class="infobox">
            <div><dt>${u().status}</dt><dd>${statusBadge(c.status)}</dd></div>
            <div><dt>${u().region}</dt><dd>${esc(t(c.region))}</dd></div>
            <div><dt>${u().period}</dt><dd>${esc(t(c.period))}</dd></div>
            <div><dt>${u().ruler}</dt><dd>${esc(t(c.ruler))}</dd></div>
            <div><dt>${u().fate}</dt><dd>${esc(t(c.fate))}</dd></div>
          </dl>
          ${timelineRefs(c.id)}
          ${sourcesBlock(c.sources)}
        </aside>
      </div>
    </article>`;
  }

  function archiveCard(a) {
    const hasReader = a.chapters && a.chapters.length;
    const readerPill = hasReader
      ? `<span class="reader-pill">${a.type === "book" ? u().readerBadgeBook : u().readerBadgeArtifact} (${a.chapters.length})</span>`
      : "";
    const thumbUrl = imgOf(a.id);
    const thumbHtml = thumbUrl
      ? `<div class="archive-thumb"><img src="${esc(thumbUrl)}" alt="${esc(t(a.name))}" loading="lazy" referrerpolicy="no-referrer" /></div>`
      : `<div class="archive-icon">${icon(a.type)}</div>`;
    return `<a class="archive-card ${a.type}" href="#/archive/${a.id}">
      ${thumbHtml}
      <div class="archive-body">
        <div class="archive-meta-row">
          <span class="archive-type">${u().types[a.type]}</span>
          ${readerPill}
        </div>
        <h3>${esc(t(a.name))}</h3>
        <p class="archive-sub">${esc(t(a.subtitle))}</p>
        <p>${esc(t(a.summary))}</p>
      </div>
    </a>`;
  }

  function pageArchive(params) {
    const f = params.get("type") || "all";
    const list = L.archive.filter((a) => f === "all" || a.type === f);
    const chip = (k, label, n) => `<a class="chip ${f === k ? "active" : ""}" href="#/archive${k === "all" ? "" : "?type=" + k}">${k !== "all" ? icon(k) : ""}${label} <span>${n}</span></a>`;
    return `
      <header class="page-head"><p class="kicker">${icon("artifact")}${u().nav.archive}</p><h1>${u().nav.archive}</h1><p>${u().archiveIntro}</p></header>
      <nav class="chip-bar">${chip("all", u().all, L.archive.length)}${TYPES.map((ty) => chip(ty, u().types[ty], L.archive.filter((a) => a.type === ty).length)).join("")}</nav>
      <div class="archive-grid">${list.map(archiveCard).join("") || `<p class="empty">${u().noResults}</p>`}</div>`;
  }

  function pageEntry(id) {
    const a = index.get(id)?.kind === "archive" ? index.get(id).data : null;
    if (!a) return pageNotFound();
    const portraitUrl = imgOf(a.id);
    const iconOrPortrait = portraitUrl
      ? `<div class="detail-portrait"><img src="${esc(portraitUrl)}" alt="${esc(t(a.name))}" loading="lazy" referrerpolicy="no-referrer" /></div>`
      : `<div class="detail-icon">${icon(a.type)}</div>`;
    return `
    <article class="detail entry ${a.type}">
      <a class="back" href="#/archive?type=${a.type}">← ${u().backTo} ${u().types[a.type]}</a>
      <header class="detail-head with-icon">
        ${iconOrPortrait}
        <div>
          <div class="detail-badges">${typeBadge(a.type)}</div>
          <h1>${esc(t(a.name))}</h1>
          <p class="subtitle">${esc(t(a.subtitle))}</p>
          <p class="lead">${fmt(t(a.summary))}</p>
        </div>
      </header>
      <div class="detail-layout">
        <div class="detail-main">
          ${chaptersBlock(a)}
          ${sectionsBlock(a.sections, a.quote)}
          ${galleryBlock(a.id)}
          ${theoriesBlock(a.theories)}
          ${relatedBlock(a.id)}
        </div>
        <aside class="detail-side">
          <dl class="infobox">
            ${portraitUrl ? `<div class="infobox-img"><img src="${esc(portraitUrl)}" alt="${esc(t(a.name))}" loading="lazy" referrerpolicy="no-referrer" /></div>` : ""}
            <div><dt>${u().types[a.type]}</dt><dd>${esc(t(a.subtitle))}</dd></div>
            <div><dt>${u().region}</dt><dd>${esc(t(a.region))}</dd></div>
          </dl>
          ${timelineRefs(a.id)}
          ${sourcesBlock(a.sources)}
        </aside>
      </div>
    </article>`;
  }

  function pageTheories() {
    const all = [];
    [...L.civilizations, ...L.archive].forEach((e) => (e.theories || []).forEach((th) => all.push({ th, id: e.id })));
    return `
      <header class="page-head"><p class="kicker">${icon("theory")}${u().nav.theories}</p><h1>${u().nav.theories}</h1><p>${u().theoriesIntro}</p></header>
      <div class="theory-list">${all.map(({ th, id }) => theoryBox(th, id)).join("") || `<p class="empty">${u().noResults}</p>`}</div>`;
  }

  /* Tìm kiếm: chuẩn hoá bỏ dấu tiếng Việt */
  const norm = (s) => String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
  function searchLore(q) {
    const nq = norm(q);
    if (!nq) return [];
    const hay = (o) => norm(JSON.stringify(o));
    const results = [];
    [...L.civilizations, ...L.archive].forEach((e) => {
      let score = 0;
      if (hay(e.name).includes(nq)) score += 10;
      if (hay([e.summary, e.subtitle, e.region]).includes(nq)) score += 4;
      if (hay([e.sections, e.chapters, e.theories, e.quote]).includes(nq)) score += 1;
      if (score) results.push({ id: e.id, score });
    });
    L.timeline.forEach((era) => {
      let score = 0;
      if (hay([era.name, era.desc]).includes(nq)) score += 6;
      if (hay(era.events).includes(nq)) score += 2;
      if (score) results.push({ id: era.id, score });
    });
    return results.sort((a, b) => b.score - a.score);
  }

  function pageSearch(params) {
    const q = (params.get("q") || "").trim();
    const results = searchLore(q);
    return `
      <header class="page-head"><h1>${u().searchTitle}</h1><p>“${esc(q)}”</p></header>
      ${results.length ? `<div class="mini-grid wide">${results.map((r) => miniCard(r.id)).join("")}</div>` : `<p class="empty">${u().searchEmpty} “${esc(q)}”.</p>`}`;
  }

  function pageNotFound() {
    return `<section class="not-found">${icon("star", "big")}<h1>404</h1><p>${u().notFound}</p><a class="btn primary" href="#/">${u().goHome}</a></section>`;
  }

  /* ---------------- Router ---------------- */
  function route() {
    const raw = location.hash.replace(/^#/, "") || "/";
    const [path, qs] = raw.split("?");
    const params = new URLSearchParams(qs || "");
    const parts = path.split("/").filter(Boolean);
    let html, key = parts[0] || "home";

    switch (key) {
      case "home": html = pageHome(); break;
      case "timeline": html = pageTimeline(parts[1], params); break;
      case "civilizations": html = pageCivs(params); break;
      case "civ": html = pageCiv(parts[1]); key = "civilizations"; break;
      case "archive": html = parts[1] ? pageEntry(parts[1]) : pageArchive(params); break;
      case "theories": html = pageTheories(); break;
      case "search": html = pageSearch(params); break;
      default: html = pageNotFound();
    }

    $app.innerHTML = `<div class="page-enter">${html}</div>`;
    if (key === "home") bindConstellation();
    bindChaptersReader();
    document.querySelectorAll(".nav a[data-key]").forEach((a) => a.classList.toggle("active", a.dataset.key === key));
    document.body.classList.remove("menu-open");
    closeSearchDropdown();

    const h1 = $app.querySelector("h1");
    document.title = (key === "home" ? "" : (h1 ? h1.textContent + " · " : "")) + u().siteName;
    if (!(key === "timeline" && parts[1])) window.scrollTo({ top: 0 });
  }

  /* ---------------- Khung giao diện & Tìm kiếm tức thì ---------------- */
  const $searchForm = document.getElementById("search-form");
  const $searchInput = document.getElementById("search-input");
  const $dropdown = document.createElement("div");
  $dropdown.className = "search-dropdown";
  $searchForm.appendChild($dropdown);

  function closeSearchDropdown() {
    $dropdown.classList.remove("open");
    $dropdown.innerHTML = "";
  }

  function updateSearchDropdown() {
    const q = $searchInput.value.trim();
    if (!q) return closeSearchDropdown();
    const hits = searchLore(q).slice(0, 7);
    if (!hits.length) {
      $dropdown.innerHTML = `<div class="sd-empty">${u().searchEmpty} “${esc(q)}”</div>`;
      $dropdown.classList.add("open");
      return;
    }
    $dropdown.innerHTML = hits.map(({ id }) => {
      const ent = index.get(id);
      const d = ent.data;
      const tag = ent.kind === "civ" ? (d.status === "fallen" ? u().fallen : u().existing) : ent.kind === "archive" ? u().types[d.type] : u().nav.timeline;
      return `<a class="sd-item" href="${hrefOf(id)}"><strong>${esc(t(d.name))}</strong><span>${esc(tag)}</span></a>`;
    }).join("") + `<a class="sd-all" href="#/search?q=${encodeURIComponent(q)}">${u().searchViewAll} (${searchLore(q).length}) →</a>`;
    $dropdown.classList.add("open");
  }

  $searchInput.addEventListener("input", updateSearchDropdown);
  $searchInput.addEventListener("focus", updateSearchDropdown);
  document.addEventListener("click", (e) => {
    if (!$searchForm.contains(e.target)) closeSearchDropdown();
  });
  document.addEventListener("keydown", (e) => {
    if ((e.key === "/" || (e.key === "k" && (e.ctrlKey || e.metaKey))) && document.activeElement !== $searchInput) {
      e.preventDefault();
      $searchInput.focus();
      $searchInput.select();
    } else if (e.key === "Escape") {
      closeSearchDropdown();
      $searchInput.blur();
    }
  });

  function renderChrome() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = el.dataset.i18n.split(".").reduce((o, k) => o?.[k], u());
      if (val) el.textContent = val;
    });
    $searchInput.placeholder = u().searchPlaceholder;
    document.querySelectorAll(".lang-toggle button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  }

  document.querySelectorAll(".lang-toggle button").forEach((b) =>
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      localStorage.setItem("lang", lang);
      renderChrome();
      const y = window.scrollY;
      route();
      window.scrollTo({ top: y });
    })
  );

  $searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = $searchInput.value.trim();
    if (q) {
      closeSearchDropdown();
      location.hash = `#/search?q=${encodeURIComponent(q)}`;
    }
  });

  document.getElementById("menu-btn").addEventListener("click", () => document.body.classList.toggle("menu-open"));

  window.addEventListener("hashchange", route);
  renderChrome();
  route();

  /* ---------------- Bầu trời sao ---------------- */
  const cv = document.getElementById("stars");
  const ctx = cv.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let stars = [];
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
    cv.style.width = innerWidth + "px"; cv.style.height = innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round((innerWidth * innerHeight) / 7000);
    stars = Array.from({ length: n }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      r: Math.random() * 1.3 + 0.2, p: Math.random() * Math.PI * 2, s: 0.4 + Math.random() * 1.2,
      gold: Math.random() < 0.12
    }));
    if (reduce) draw(0);
  }
  function draw(time) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const st of stars) {
      const a = 0.35 + 0.65 * Math.abs(Math.sin(st.p + time * 0.0006 * st.s));
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
      ctx.fillStyle = st.gold ? `rgba(240,210,140,${a})` : `rgba(200,220,255,${a})`;
      ctx.fill();
    }
  }
  function loop(time) { if (!document.hidden) draw(time); requestAnimationFrame(loop); }
  window.addEventListener("resize", resize);
  resize();
  if (!reduce) requestAnimationFrame(loop);
})();
