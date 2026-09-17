(function () {
  const STORAGE = "mona-iks-progress-v1";
  const THEME_KEY = "mona-iks-theme";
  const papers = window.IKS && window.IKS.papers ? window.IKS.papers : {};
  const extra = window.IKS && window.IKS.pages ? window.IKS.pages : {};

  const subjectNav = document.getElementById("subjectNav");
  const topicNav = document.getElementById("topicNav");
  const sidebarTitle = document.getElementById("sidebarTitle");
  const filterRow = document.getElementById("filterRow");
  const main = document.getElementById("main");
  const sidebar = document.getElementById("sidebar");
  const globalProgress = document.getElementById("globalProgress");
  const searchOverlay = document.getElementById("searchOverlay");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  let filter = "all";
  let charts = [];

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE) || "{}");
    } catch {
      return {};
    }
  }
  function saveProgress(p) {
    localStorage.setItem(STORAGE, JSON.stringify(p));
  }
  function sortedTopics(paper) {
    return (paper.topics || []).slice().sort((a, b) => (a.seq || 99) - (b.seq || 99));
  }
  function allTopics() {
    const list = [];
    Object.values(papers).forEach((paper) => {
      sortedTopics(paper).forEach((t) => list.push({ paper, topic: t }));
    });
    return list;
  }
  function sealedCount() {
    const p = loadProgress();
    const all = allTopics();
    const n = all.filter((x) => p[x.topic.id]).length;
    return { n, t: all.length };
  }
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    document.getElementById("themeBtn").textContent = theme === "light" ? "Dark" : "Light";
  }

  function parseHash() {
    const raw = (location.hash || "#/overview").replace(/^#\/?/, "");
    const [page, id] = raw.split("/");
    return { page: page || "overview", id: id || "" };
  }

  const EXTRA_DEFAULTS = { overview: "dash", teach: "plan", resources: "shelf", logbook: "all" };
  const LOG_FILTERS = [
    ["all", "All"],
    ["unit1", "Unit I"],
    ["unit2", "Unit II"],
    ["unit3", "Unit III"],
    ["unit4", "Unit IV"],
    ["unit5", "Unit V"],
    ["site", "Site"]
  ];
  let scrollToken = 0;

  function headerOffset() {
    const top = document.querySelector(".topbar");
    const nav = document.querySelector(".subject-nav");
    return (top ? top.offsetHeight : 72) + (nav ? nav.offsetHeight : 58) + 12;
  }

  function revealSidebarLink() {
    const active = document.querySelector(".topic-link.active");
    const nav = document.getElementById("topicNav");
    if (!active || !nav) return;
    const a = active.getBoundingClientRect();
    const n = nav.getBoundingClientRect();
    if (a.top < n.top) nav.scrollTop -= n.top - a.top;
    else if (a.bottom > n.bottom) nav.scrollTop += a.bottom - n.bottom;
  }

  function findJumpTarget(id) {
    if (id) {
      return (
        document.getElementById("topic-" + id) ||
        document.getElementById("sec-" + id) ||
        document.querySelector('#main [data-jump="' + id + '"]')
      );
    }
    return document.querySelector("#main .hero, #main article.topic[id], #main .panel[id]");
  }

  function pageAlreadyMounted(page) {
    if (page === "overview") return !!document.getElementById("topic-dash");
    if (page === "resources") return !!document.getElementById("topic-shelf");
    if (page === "teach") return !!document.getElementById("topic-plan");
    if (page === "logbook") {
      const el = document.getElementById("topic-logbook");
      return !!(el && el.getAttribute("data-jump") === (parseHash().id || "all"));
    }
    const paper = papers[page];
    if (!paper) return false;
    const first = sortedTopics(paper)[0];
    return !!(first && document.getElementById("topic-" + first.id));
  }

  function scrollToHashTarget(id) {
    const target = findJumpTarget(id);
    if (!target) return false;
    const scroller = document.scrollingElement || document.documentElement;
    const y = Math.max(0, scroller.scrollTop + target.getBoundingClientRect().top - headerOffset());
    scroller.scrollTop = y;
    revealSidebarLink();
    return true;
  }

  function afterPaint(fn) {
    requestAnimationFrame(() => requestAnimationFrame(fn));
  }

  function queueScroll(id) {
    const token = ++scrollToken;
    const run = () => {
      if (token !== scrollToken) return;
      scrollToHashTarget(id || "");
    };
    run();
    afterPaint(run);
    [32, 80, 160, 320, 640, 1000].forEach((ms) => setTimeout(run, ms));
  }

  function syncChrome() {
    navTabs();
    renderSidebar();
  }

  function go(page, id) {
    const next = id ? `#/${page}/${id}` : `#/${page}`;
    sidebar.classList.remove("open");
    if (location.hash === next) {
      queueScroll(id || "");
      return;
    }
    history.pushState({ page, id: id || "" }, "", next);
    if (pageAlreadyMounted(page)) {
      syncChrome();
      queueScroll(id || "");
      return;
    }
    render();
  }

  function onRouteChange() {
    const { page, id } = parseHash();
    if (pageAlreadyMounted(page)) {
      syncChrome();
      queueScroll(id || "");
      return;
    }
    render();
  }

  function destroyCharts() {
    charts.forEach((c) => {
      try {
        c.destroy();
      } catch {
        /* ignore */
      }
    });
    charts = [];
  }

  function navTabs() {
    const tabs = [
      { id: "overview", label: "Overview", small: "Course map" },
      { id: "unit1", label: "Unit I", small: "Intro to IKS" },
      { id: "unit2", label: "Unit II", small: "S&T base" },
      { id: "unit3", label: "Unit III", small: "Maths · sky" },
      { id: "unit4", label: "Unit IV", small: "Tech · built" },
      { id: "unit5", label: "Unit V", small: "Life · state" },
      { id: "teach", label: "Teach notes", small: "Mona plan" },
      { id: "resources", label: "Resources", small: "Shelf" },
      { id: "logbook", label: "Logbook", small: "What’s new" }
    ];
    const { page } = parseHash();
    subjectNav.innerHTML = tabs
      .map(
        (t) =>
          `<button class="tab ${t.id === page ? "active" : ""}" type="button" data-nav="${t.id}"><small>${t.small}</small>${t.label}</button>`
      )
      .join("");
  }

  function renderSidebar() {
    const { page, id } = parseHash();
    const paper = papers[page];
    filterRow.innerHTML = "";
    if (!paper) {
      sidebarTitle.textContent =
        page === "resources" ? "Shelf" : page === "teach" ? "Lectures" : page === "logbook" ? "Logbook" : "Navigate";
      const extras =
        page === "resources"
          ? [
              ["shelf", "Primary shelf"],
              ["youtube", "YouTube searches"],
              ["copyright", "How to cite"]
            ]
            : page === "teach"
            ? [
                ["plan", "6-lecture plan"],
                ["voice", "Four audiences"],
                ["board", "Board habits"],
                ["internals", "Internals"]
              ]
            : page === "logbook"
              ? LOG_FILTERS
              : [
                  ["dash", "Dashboard"],
                  ["units", "Five units"],
                  ["cos", "Course outcomes"],
                  ["heatmap", "Emphasis chart"],
                  ["coverage", "Syllabus map"]
                ];
      topicNav.innerHTML = extras
        .map(
          ([eid, label]) =>
            `<button class="topic-link ${id === eid || (!id && eid === extras[0][0]) ? "active" : ""}" data-nav="${page}" data-topic="${eid}">${label}</button>`
        )
        .join("");
      return;
    }
    sidebarTitle.textContent = paper.short;
    ["all", "high", "open", "sealed"].forEach((f) => {
      const b = document.createElement("button");
      b.className = "chip" + (filter === f ? " on" : "");
      b.textContent = f;
      b.onclick = () => {
        filter = f;
        renderSidebar();
      };
      filterRow.appendChild(b);
    });
    const prog = loadProgress();
    const topics = sortedTopics(paper);
    topicNav.innerHTML = topics
      .filter((t) => {
        if (filter === "high") return t.yield === "high";
        if (filter === "sealed") return !!prog[t.id];
        if (filter === "open") return !prog[t.id];
        return true;
      })
      .map((t) => {
        const active = t.id === id || (!id && t.id === topics[0].id);
        const sub = t.readAs
          ? `<div class="yield">${t.readAs}</div>`
          : t.comingNext
            ? '<div class="yield">coming next</div>'
            : t.yield === "high"
              ? '<div class="yield">high-yield</div>'
              : "";
        return `<button class="topic-link ${active ? "active" : ""} ${prog[t.id] ? "sealed" : ""} ${t.yield === "high" ? "high" : ""}" data-nav="${page}" data-topic="${t.id}">
          <span class="dot"></span>
          <span>${t.title}${sub}</span>
        </button>`;
      })
      .join("");
  }

  function markBlock(label, block) {
    if (!block) return "";
    const outline = (block.outline || []).map((li) => `<li>${li}</li>`).join("");
    return `<article class="mark-block">
      <div class="meta">${label}</div>
      <h4>${block.q}</h4>
      <ol class="outline">${outline}</ol>
    </article>`;
  }

  function topicHtml(paper, topic) {
    const prog = loadProgress();
    const sealed = !!prog[topic.id];
    const yt = (topic.youtube || paper.youtube || [])
      .slice(0, 3)
      .map(
        (y) => `<div class="yt-card"><strong>${y.title}</strong><div class="search-query">Search: ${y.search}</div>
        <p><a href="https://www.youtube.com/results?search_query=${encodeURIComponent(y.search)}" target="_blank" rel="noopener">Open YouTube search</a></p></div>`
      )
      .join("");
    const checks = (topic.check || []).map((c) => `<li>${c}</li>`).join("");
    const outcomes = (topic.outcomes || []).map((o) => `<li>${o}</li>`).join("");
    const tips = (topic.lectureTips || [])
      .slice(0, 2)
      .map((t) => `<li>${t}</li>`)
      .join("");
    const qs = (topic.studentQs || []).map((q) => `<li>${q}</li>`).join("");
    const act = topic.classroomActivity
      ? `<aside class="activity"><h3>${topic.classroomActivity.title || "Classroom activity"} · ${topic.classroomActivity.minutes || 10} min</h3><p>${topic.classroomActivity.body}</p></aside>`
      : "";
    const coming = topic.comingNext
      ? `<aside class="coming"><h3>Coming next</h3><p>This title is on the CCS / AICTE map so the full 30-hour arc is visible. The gallery card will land in a later drop.</p></aside>`
      : "";
    const shelf = paper.shelf
      ? `<aside class="note shelf-footer"><p>${paper.shelf.primary}${topic.readAs ? ` · <em>${topic.readAs}</em>` : ""}. Prose on this page is original.</p></aside>`
      : "";
    const yieldBadge = topic.yield === "high" ? '<span class="badge">High-yield</span>' : "";
    const stubBadge = topic.comingNext ? '<span class="badge">Coming next</span>' : "";
    const diagramList = topic.diagrams || (topic.diagram && !topic.diagramsInBody ? [topic.diagram] : []);
    const diagramBlock =
      topic.diagramsInBody || !diagramList.length
        ? ""
        : `<h2 class="section-title">Maps</h2>${diagramList.map((d) => window.IKSDiagrams.render(d)).join("")}`;
    return `<article class="topic" id="topic-${topic.id}">
      <div class="topic-head">
        <div>
          <p class="kicker">${paper.code}${yieldBadge}${stubBadge}</p>
          <h1>${topic.title}</h1>
          <p class="lede">${topic.summary || ""}</p>
        </div>
        <button class="seal-btn ${sealed ? "sealed" : ""}" data-seal="${topic.id}">${sealed ? "Sealed ✓" : "Seal this topic"}</button>
      </div>
      ${coming}
      <div class="explainer">${topic.explainer || ""}</div>
      ${diagramBlock}
      ${window.IKSTimeline ? window.IKSTimeline.renderForTopic(topic.id) : ""}
      ${
        topic.analogy
          ? `<aside class="analogy modern-bridge"><h3>${topic.analogy.title || "A modern bridge"}</h3><p>${topic.analogy.body}</p></aside>`
          : ""
      }
      ${
        topic.mnemonic
          ? `<aside class="mnemonic"><h3>Memory hook · ${topic.mnemonic.name}</h3><p><strong>${topic.mnemonic.hook}</strong></p><p>${topic.mnemonic.recite || ""}</p></aside>`
          : ""
      }
      ${
        outcomes
          ? `<h2 class="section-title">Short checks</h2><ul class="outcomes">${outcomes}</ul>`
          : ""
      }
      ${qs ? `<h2 class="section-title">Questions that usually arise</h2><ul class="qs-list">${qs}</ul>` : ""}
      ${act}
      <h2 class="section-title">Exam outlines</h2>
      <p class="note">2 / 5 / 10-mark skeletons in original wording. Write your own English in the answer book.</p>
      ${markBlock("2 marks", topic.twomark)}
      ${markBlock("5 marks", topic.fivemark)}
      ${markBlock("10 marks", topic.tenmark)}
      <h2 class="section-title">Seal checklist</h2>
      <ul class="check-list">${checks}</ul>
      <h2 class="section-title">Watch / search</h2>
      <div class="yt-row">${yt}</div>
      ${tips ? `<h2 class="section-title">For the lecturer</h2><ul class="tips-list thin">${tips}</ul>` : ""}
      ${shelf}
    </article>`;
  }

  function overviewHtml() {
    const { n, t } = sealedCount();
    const cards = Object.values(papers)
      .map((p) => {
        const prog = loadProgress();
        const tot = sortedTopics(p).length;
        const done = sortedTopics(p).filter((x) => prog[x.id]).length;
        const pct = tot ? Math.round((done / tot) * 100) : 0;
        const filled = sortedTopics(p).filter((x) => !x.comingNext).length;
        return `<div class="card" data-nav="${p.id}">
          <div class="code">${p.code}</div>
          <h3>${p.title}</h3>
          <p>${p.blurb}</p>
          <div class="meter" aria-label="${pct}% sealed"><span style="width:${pct}%"></span></div>
          <p>${done}/${tot} sealed · ${filled} lecture-ready</p>
        </div>`;
      })
      .join("");
    return `<section class="hero" id="topic-dash" data-jump="dash">
      <p class="kicker">Prof. Mona · BCA 1st semester · CCS University</p>
      <h2>Indian Knowledge System as a lecture operating system</h2>
      <p class="lede">Course <strong>BCA-1003 T</strong>, GEC-I <em>Indian Culture and Civilization</em>, aligned to AICTE Model Curriculum 2024 / NEP 2020. Tone: pride without chauvinism; CS analogies for 18–20 year-olds. Track new cards in <button type="button" class="text-link" data-nav="logbook">Logbook</button>. Six-hour Unit I plan lives under <button type="button" class="text-link" data-nav="teach">Teach notes</button>.</p>
      <div class="stat-row">
        <div class="stat"><b>2</b>credits · 30 theory hours</div>
        <div class="stat"><b>25 + 75</b>internal + external</div>
        <div class="stat"><b>${n}/${t}</b>topics sealed</div>
        <div class="stat"><b>Unit I</b>complete this drop</div>
      </div>
    </section>
    <section class="panel" id="topic-units" data-jump="units">
      <h2 class="display">Five units</h2>
      <div class="grid-cards">${cards}</div>
    </section>
    <section class="panel">
      <h2 class="display">How to use this bench in class</h2>
      <ol>
        <li>Pick a unit tab, then a sidebar topic. Unit I is lecture-ready; Units II–V show the course map with honest “Coming next” cards.</li>
        <li>Project the <strong>gallery</strong> (verse, map, figures). A modern bridge, if any, is last. Hide the site and redraw the map on the board.</li>
        <li>Run the <strong>10-minute classroom activity</strong>. Park student answers; do not chase a perfect list.</li>
        <li>Close with a 2-mark oral and point students at the matching chapter in the <strong>physical Thakur / Mahadevan book</strong> — this site does not copy those books.</li>
        <li>Hit <strong>Seal this topic</strong> only when you can teach it without scrolling. Progress lives in this browser under <code>mona-iks-progress-v1</code>.</li>
      </ol>
    </section>
    <section class="panel" id="topic-cos" data-jump="cos">
      <h2 class="display">Course outcomes</h2>
      <table class="compare">
        <thead><tr><th>CO</th><th>What students should be able to do</th></tr></thead>
        <tbody>
          <tr><td>CO1</td><td>Introduce the pattern and purpose of studying Vedas, Vedāṅgas, Upāṅgas, Upaveda, Purāṇa and Itihāsa — the map of ancient Indian education.</td></tr>
          <tr><td>CO2</td><td>Trace, identify, and develop the ancient knowledge systems named on the CCS sheet.</td></tr>
          <tr><td>CO3</td><td>See apparently rational, verifiable, and universal ideas in IKS as a resource for holistic (physical, mental, spiritual) development.</td></tr>
          <tr><td>CO4</td><td>Build rooted pride in Indian knowledge, committed to universal human rights, well-being, and sustainable development — without turning the classroom into a contest of civilisations.</td></tr>
        </tbody>
      </table>
    </section>
    <section class="panel" id="topic-heatmap" data-jump="heatmap">
      <h2 class="display">Unit I emphasis (syllabus checkmarks)</h2>
      <p>Relative teaching pressure for the first six hours. 64 Kalās, Śilpa Śāstra, Four Vedas, and Vedāṅga are hand-checked on the printed CCS sheet — they get more board time. This is a planning chart, not an official mark scheme.</p>
      <canvas id="heatChart" height="120"></canvas>
    </section>
    <section class="panel" id="topic-coverage" data-jump="coverage">
      <h2 class="display">Official 30-hour map</h2>
      <p>Checked against the CCS BCA-1003 T sheet (GEC-I, 2 credits, 5 × ~6 lectures). Unit I is filled; later units are titled so the map is visible on day one.</p>
      <table class="compare">
        <thead><tr><th>Unit</th><th>Official home</th><th>On this site</th></tr></thead>
        <tbody>
          <tr><td>I</td><td>Introduction to IKS — Caturdaśa Vidyāsthānam, 64 Kalās, Śilpa, Four Vedas, Vedāṅga, Āstika/Nāstika, Purāṇa, Itihāsa, Nīti, Subhāṣita</td><td><strong>13 lecture-ready cards</strong> including a revision map</td></tr>
          <tr><td>II</td><td>Foundation for science &amp; technology — Pāṇini / NLP, zero &amp; place value, Bhūta-saṁkhyā, Katapayādi, Piṅgala binary, Prameya / Pramāṇa</td><td>Sidebar titles + Coming-next placeholders</td></tr>
          <tr><td>III</td><td>Indian mathematics &amp; astronomy — Śulba, π, trig, algebra, Pañcāṅga, Yantras / Jantar Mantar</td><td>Sidebar titles + Coming-next placeholders</td></tr>
          <tr><td>IV</td><td>S&amp;T heritage — metallurgy, dyes, town planning, temple architecture, Vāstu</td><td>Sidebar titles + Coming-next placeholders</td></tr>
          <tr><td>V</td><td>Humanities &amp; social sciences — Āyurveda, Yoga, Triguṇa, Arthaśāstra / Kautilya</td><td>Sidebar titles + Coming-next placeholders</td></tr>
        </tbody>
      </table>
    </section>`;
  }

  function logbookHtml(filterId) {
    const current = filterId || "all";
    const entries = (window.IKS && window.IKS.logbook) || [];
    const shown = entries.filter((e) => {
      if (current === "all") return true;
      if (current === "site") return e.paper === "site";
      return e.paper === current;
    });
    const chips = LOG_FILTERS.map(
      ([fid, label]) =>
        `<button type="button" class="chip ${fid === current ? "on" : ""}" data-nav="logbook" data-topic="${fid}">${label}</button>`
    ).join("");
    const rows = shown
      .map((e) => {
        const jump = e.topicId && e.paper !== "site";
        const title = jump
          ? `<button type="button" class="log-title" data-nav="${e.paper}" data-topic="${e.topicId}">${e.title}</button>`
          : `<span class="log-title static">${e.title}</span>`;
        return `<li class="log-entry">
          <div class="log-meta">
            <span class="badge log-${e.type}">${e.type}</span>
            <span class="log-paper">${e.paper}</span>
            <time datetime="${e.date}">${e.date}</time>
          </div>
          ${title}
          <p class="log-note">${e.note || ""}</p>
        </li>`;
      })
      .join("");
    return `<section class="hero" id="topic-logbook" data-jump="${current}">
      <p class="kicker">What’s new · reverse chronological</p>
      <h2>Logbook</h2>
      <p class="lede">Every card in this drop, clickable. Filter by unit; the title jumps to the live topic.</p>
      <div class="filter-row log-chips">${chips}</div>
      <p class="log-count">${shown.length} ${shown.length === 1 ? "entry" : "entries"} shown</p>
    </section>
    <section class="panel">
      <ol class="log-list">${rows || "<li class=\"log-entry\">No entries in this filter.</li>"}</ol>
    </section>`;
  }

  function pageHtml(page) {
    if (page === "overview") return overviewHtml();
    if (page === "teach") return extra.teach ? extra.teach() : "";
    if (page === "resources") return extra.resources ? extra.resources() : "";
    if (page === "logbook") return logbookHtml(parseHash().id);
    const paper = papers[page];
    if (!paper) return `<section class="panel"><p>Unknown page.</p></section>`;
    return sortedTopics(paper)
      .map((t) => topicHtml(paper, t))
      .join("");
  }

  function paintHeatChart() {
    const el = document.getElementById("heatChart");
    if (!el || typeof Chart === "undefined") return;
    const dark = document.documentElement.getAttribute("data-theme") !== "light";
    const tick = dark ? "#c9b89a" : "#5c5348";
    const chart = new Chart(el, {
      type: "bar",
      data: {
        labels: ["64 Kalās", "Śilpa Śāstra", "Four Vedas", "Six Vedāṅgas", "Darśanas", "Purāṇa–Itihāsa"],
        datasets: [
          {
            label: "Relative board time",
            data: [94, 90, 96, 95, 82, 78],
            backgroundColor: ["#e07a2f", "#c45c4a", "#f0b36a", "#8b86d8", "#3fa796", "#7b78c9"]
          }
        ]
      },
      options: {
        animation: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, max: 100, ticks: { color: tick }, grid: { color: "rgba(224,122,47,0.12)" } },
          x: { ticks: { color: tick, maxRotation: 18 }, grid: { display: false } }
        }
      }
    });
    charts.push(chart);
  }

  function updateProgressChip() {
    const { n, t } = sealedCount();
    globalProgress.textContent = `${n}/${t} sealed`;
  }

  function render() {
    destroyCharts();
    navTabs();
    renderSidebar();
    const { page, id } = parseHash();
    main.innerHTML = pageHtml(page);
    updateProgressChip();
    if (page === "overview") paintHeatChart();
    sidebar.classList.remove("open");
    main.focus({ preventScroll: true });
    queueScroll(id || EXTRA_DEFAULTS[page] || "");
  }

  function searchIndex() {
    const hits = [];
    Object.values(papers).forEach((paper) => {
      (paper.topics || []).forEach((t) => {
        const blob = [
          t.title,
          t.summary,
          t.explainer,
          t.mnemonic && t.mnemonic.hook,
          (t.tags || []).join(" "),
          (t.lectureTips || []).join(" "),
          t.twomark && t.twomark.q,
          t.fivemark && t.fivemark.q,
          window.IKSTimeline ? window.IKSTimeline.searchBlob(t.id) : ""
        ]
          .join(" ")
          .toLowerCase();
        hits.push({ paper, topic: t, blob });
      });
    });
    return hits;
  }
  const INDEX = searchIndex();

  function runSearch(q) {
    const query = q.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = "";
      return;
    }
    const found = INDEX.filter((h) => h.blob.includes(query)).slice(0, 12);
    searchResults.innerHTML = found
      .map(
        (h, i) =>
          `<li><button class="${i === 0 ? "active" : ""}" data-nav="${h.paper.id}" data-topic="${h.topic.id}"><small>${h.paper.code}</small> · ${h.topic.title}</button></li>`
      )
      .join("");
  }

  document.addEventListener("click", (e) => {
    const nav = e.target.closest("[data-nav]");
    if (nav && !e.target.closest("[data-seal]")) {
      go(nav.getAttribute("data-nav"), nav.getAttribute("data-topic") || "");
      searchOverlay.hidden = true;
    }
    const seal = e.target.closest("[data-seal]");
    if (seal) {
      const id = seal.getAttribute("data-seal");
      const p = loadProgress();
      if (p[id]) delete p[id];
      else p[id] = Date.now();
      saveProgress(p);
      render();
    }
    if (e.target.id === "searchBtn" || e.target.closest("#searchBtn")) {
      searchOverlay.hidden = false;
      searchInput.focus();
    }
    if (e.target.id === "themeBtn") {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      setTheme(next);
    }
    if (e.target.id === "topicsFab") sidebar.classList.toggle("open");
    if (e.target === searchOverlay) searchOverlay.hidden = true;
  });

  searchInput.addEventListener("input", () => runSearch(searchInput.value));
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const first = searchResults.querySelector("button");
      if (first) first.click();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      searchOverlay.hidden = false;
      searchInput.focus();
    }
    if (e.key === "Escape") searchOverlay.hidden = true;
  });

  window.addEventListener("hashchange", onRouteChange);
  window.addEventListener("popstate", onRouteChange);
  document.querySelector(".brand").addEventListener("click", () => go("overview"));

  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  setTheme(savedTheme);
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (!location.hash) location.hash = "#/overview";
  else render();
})();
