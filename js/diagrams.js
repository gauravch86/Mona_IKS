(function (global) {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function flow(steps) {
    const parts = (steps || []).map((step, i) => {
      const node = `<div class="node">${esc(step)}</div>`;
      const arrow = i < steps.length - 1 ? '<div class="arrow" aria-hidden="true">→</div>' : "";
      return node + arrow;
    });
    return `<div class="flow">${parts.join("")}</div>`;
  }

  function vflow(steps) {
    const parts = (steps || []).map((step, i) => {
      const node = `<div class="node">${esc(step)}</div>`;
      const arrow = i < steps.length - 1 ? '<div class="arrow" aria-hidden="true">↓</div>' : "";
      return node + arrow;
    });
    return `<div class="vflow">${parts.join("")}</div>`;
  }

  function compare(headers, rows) {
    const th = (headers || []).map((h) => `<th>${esc(h)}</th>`).join("");
    const body = (rows || [])
      .map((row) => `<tr>${row.map((c) => `<td>${c}</td>`).join("")}</tr>`)
      .join("");
    return `<div class="map-wrap"><table class="compare"><thead><tr>${th}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  function tree(root, branches) {
    const kids = (branches || [])
      .map((b) => `<div class="node">${typeof b === "string" ? esc(b) : b}</div>`)
      .join("");
    return `<div class="tree"><div class="node">${esc(root)}</div><div class="row">${kids}</div></div>`;
  }

  function decision(title, yes, no) {
    return `<div class="tree">
      <div class="node">${esc(title)}</div>
      <div class="row">
        <div class="node">Yes → ${esc(yes)}</div>
        <div class="node">No → ${esc(no)}</div>
      </div>
    </div>`;
  }

  function svgStack(layers) {
    const h = 28 + layers.length * 48;
    const rects = layers
      .map((layer, i) => {
        const y = 16 + i * 48;
        const colors = ["#e07a2f", "#3fa796", "#8b86d8", "#c45c4a", "#f0b36a"];
        const c = colors[i % colors.length];
        return `<rect x="20" y="${y}" width="360" height="40" rx="8" fill="${c}" fill-opacity="0.18" stroke="${c}"/>
          <text x="200" y="${y + 26}" text-anchor="middle" fill="currentColor" font-size="13" font-family="Figtree, sans-serif">${esc(layer)}</text>`;
      })
      .join("");
    return `<svg viewBox="0 0 400 ${h}" width="100%" role="img">${rects}</svg>`;
  }

  function fig(spec) {
    const file = spec.file;
    const w = spec.width || 720;
    const src =
      spec.src ||
      "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(file) + "?width=" + w;
    const href = spec.href || "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(file);
    const credit = spec.credit || "Wikimedia Commons";
    return `<figure class="heritage-fig">
      <a href="${esc(href)}" target="_blank" rel="noopener">
        <img src="${esc(src)}" alt="${esc(spec.alt || spec.caption || "")}" loading="lazy" />
      </a>
      <figcaption><strong>${spec.caption || ""}</strong> ${spec.note || ""} <a href="${esc(href)}" target="_blank" rel="noopener">${esc(credit)}</a></figcaption>
    </figure>`;
  }

  function figStrip(items) {
    return `<div class="figure-strip">${(items || []).map(fig).join("")}</div>`;
  }

  function vedaRiver() {
    return `<div class="river-wrap" role="img" aria-label="Saṁhitā to Upaniṣad as one inward river">
      <svg viewBox="0 0 720 420" width="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vedaWater" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#e07a2f" stop-opacity="0.35"/>
            <stop offset="55%" stop-color="#8b86d8" stop-opacity="0.32"/>
            <stop offset="100%" stop-color="#3fa796" stop-opacity="0.4"/>
          </linearGradient>
        </defs>
        <path d="M80 20 C 200 40, 520 0, 640 36 C 660 90, 680 140, 620 170 C 500 210, 220 150, 100 190 C 40 230, 80 280, 160 300 C 300 340, 500 300, 600 340 C 640 370, 560 400, 360 408 C 160 414, 80 370, 90 330" fill="url(#vedaWater)" stroke="#e07a2f" stroke-opacity="0.45"/>
        <g font-family="Fraunces, Georgia, serif" fill="currentColor">
          <text x="360" y="58" text-anchor="middle" font-size="20">Saṁhitā</text>
          <text x="360" y="78" text-anchor="middle" font-size="11" font-family="Figtree, sans-serif" opacity="0.8">the heard collection — mantra as living speech</text>
          <text x="360" y="148" text-anchor="middle" font-size="20">Brāhmaṇa</text>
          <text x="360" y="168" text-anchor="middle" font-size="11" font-family="Figtree, sans-serif" opacity="0.8">why the rite is done this way — the liturgy thinks aloud</text>
          <text x="360" y="248" text-anchor="middle" font-size="20">Āraṇyaka</text>
          <text x="360" y="268" text-anchor="middle" font-size="11" font-family="Figtree, sans-serif" opacity="0.8">the forest turn — the rite is taken inward</text>
          <text x="360" y="348" text-anchor="middle" font-size="20">Upaniṣad</text>
          <text x="360" y="368" text-anchor="middle" font-size="11" font-family="Figtree, sans-serif" opacity="0.8">sitting near the teacher — inquiry into the Self and Brahman</text>
        </g>
      </svg>
      <p class="diagram-note">One śruti-river, deepening. Not four later textbooks stacked on a shelf.</p>
    </div>`;
  }

  function pathaWeave() {
    return `<div class="patha-weave">
      <div class="patha-row"><span class="patha-name">Saṁhitā-pāṭha</span><span class="patha-ex">the continuous recitation, words joined as they are sung in the rite</span></div>
      <div class="patha-row"><span class="patha-name">Pada-pāṭha</span><span class="patha-ex">each word isolated — the joints of speech made visible</span></div>
      <div class="patha-row"><span class="patha-name">Krama-pāṭha</span><span class="patha-ex">pairs in a chain: ab, bc, cd… the verse holds hands with its neighbour</span></div>
      <div class="patha-row"><span class="patha-name">Jaṭā-pāṭha</span><span class="patha-ex">a braid: forward, reverse, forward again</span></div>
      <div class="patha-row"><span class="patha-name">Ghana-pāṭha</span><span class="patha-ex">the densest weave — a reciter’s tapas, not a trick</span></div>
      <p class="diagram-note">A śākhā keeps the Veda by mouth, ear, and vow. Exact sound is an offering.</p>
    </div>`;
  }

  function vedaFour() {
    const cards = [
      ["Ṛgveda", "Hymn", "The oldest widely taught saṁhitā. Ten maṇḍalas of ṛc — metrical praise addressed to Agni, Indra, Soma, Varuṇa, Uṣas, and many more. Family books of named ṛṣis sit at its heart."],
      ["Yajurveda", "Rite", "The Veda of the offering-formula. Śukla (clearly arranged) and Kṛṣṇa (mantra woven with brāhmaṇa-prose) are two ways of carrying the same liturgical world."],
      ["Sāmaveda", "Chant", "Where a ṛk learns to be a song. Much of its verse is Ṛg material set to melody — gāna as a sacred interface, not a lesser copy."],
      ["Atharvaveda", "Household", "Speech of healing, peace (śānti), kingship, and the day’s trouble. The Atharvan–Aṅgiras stream. Teach it with dignity — it is śruti of lived life, not a cartoon of ‘magic’."]
    ];
    return `<div class="four-veda-grid">${cards
      .map(
        ([name, job, body]) =>
          `<article class="veda-portrait"><p class="kicker">${esc(job)}</p><h3>${esc(name)}</h3><p>${esc(body)}</p></article>`
      )
      .join("")}</div>`;
  }

  function kalasMandala() {
    const clusters = [
      { label: "Performing", n: 7, hint: "gīta, nṛtya, nāṭya" },
      { label: "Visual", n: 9, hint: "ālekhya, mālya, citra" },
      { label: "Domestic", n: 6, hint: "pāka, dress, couch" },
      { label: "Craft", n: 10, hint: "takṣaṇa, dhātu, vāstu" },
      { label: "Language", n: 14, hint: "kāvya, cipher, chandas" },
      { label: "Social", n: 11, hint: "etiquette, play, disguise" },
      { label: "Nature & care", n: 7, hint: "trees, water, body" }
    ];
    const cx = 280;
    const cy = 250;
    const r = 168;
    const petals = clusters
      .map((c, i) => {
        const a = (Math.PI * 2 * i) / 7 - Math.PI / 2;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        const colors = ["#e07a2f", "#c45c4a", "#f0b36a", "#3fa796", "#8b86d8", "#b07cc6", "#2f8f78"];
        const col = colors[i];
        return `<g>
          <circle cx="${x}" cy="${y}" r="54" fill="${col}" fill-opacity="0.18" stroke="${col}" stroke-width="1.4"/>
          <text x="${x}" y="${y - 8}" text-anchor="middle" fill="currentColor" font-size="13" font-family="Fraunces, Georgia, serif">${esc(c.label)}</text>
          <text x="${x}" y="${y + 10}" text-anchor="middle" fill="currentColor" font-size="11" font-family="Figtree, sans-serif">${c.n} kalās</text>
          <text x="${x}" y="${y + 26}" text-anchor="middle" fill="currentColor" opacity="0.75" font-size="9" font-family="Figtree, sans-serif">${esc(c.hint)}</text>
        </g>`;
      })
      .join("");
    return `<svg class="kalas-mandala" viewBox="0 0 560 520" width="100%" role="img" aria-label="Seven pedagogical clusters covering all 64 kalās">
      <circle cx="${cx}" cy="${cy}" r="72" fill="#e07a2f" fill-opacity="0.16" stroke="#e07a2f"/>
      <text x="${cx}" y="${cy - 6}" text-anchor="middle" fill="currentColor" font-size="18" font-family="Fraunces, Georgia, serif">64 Kalās</text>
      <text x="${cx}" y="${cy + 16}" text-anchor="middle" fill="currentColor" font-size="11" font-family="Figtree, sans-serif">catuḥṣaṣṭi kalā</text>
      ${petals}
    </svg>
    <p class="diagram-note">Classroom grouping (original framing). Every numbered kalā on the list belongs to one petal. Traditional lists vary; this map is a teaching mandala, not a claim that Vātsyāyana drew these seven circles.</p>`;
  }

  function vedapurusa() {
    return `<div class="vedanga-body">
      <p class="diagram-note">A traditional image: the Veda as a living body (vedapuruṣa). The six Vedāṅgas are its limbs — without them the body cannot stand, speak, or see the right moment.</p>
      <svg viewBox="0 0 640 420" width="100%" role="img" aria-label="Vedapuruṣa with six Vedāṅgas as limbs">
        <ellipse cx="320" cy="210" rx="70" ry="88" fill="#e07a2f" fill-opacity="0.12" stroke="#e07a2f"/>
        <circle cx="320" cy="86" r="36" fill="#e07a2f" fill-opacity="0.16" stroke="#e07a2f"/>
        <text x="320" y="90" text-anchor="middle" fill="currentColor" font-size="12" font-family="Fraunces, Georgia, serif">Veda</text>
        <line x1="320" y1="122" x2="320" y2="128" stroke="#e07a2f"/>
        <line x1="250" y1="190" x2="160" y2="150" stroke="#8b86d8"/>
        <line x1="390" y1="190" x2="480" y2="150" stroke="#8b86d8"/>
        <line x1="280" y1="280" x2="200" y2="350" stroke="#3fa796"/>
        <line x1="360" y1="280" x2="440" y2="350" stroke="#3fa796"/>
        <g font-family="Figtree, sans-serif" font-size="12" fill="currentColor">
          <text x="320" y="44" text-anchor="middle">Śikṣā — nose · pronunciation</text>
          <text x="320" y="28" text-anchor="middle" font-size="11" opacity="0.8">sound must be right or the offering is other than it claims</text>
          <text x="96" y="146">Vyākaraṇa — mouth</text>
          <text x="96" y="162" font-size="11" opacity="0.8">grammar · Pāṇini</text>
          <text x="430" y="146">Nirukta — ear</text>
          <text x="430" y="162" font-size="11" opacity="0.8">etymology · Yāska</text>
          <text x="48" y="368">Chandas — feet</text>
          <text x="48" y="384" font-size="11" opacity="0.8">metre · Piṅgala</text>
          <text x="430" y="368">Kalpa — hands</text>
          <text x="430" y="384" font-size="11" opacity="0.8">procedure · Śulba geometry</text>
          <text x="320" y="412" text-anchor="middle">Jyotiṣa — eyes · the right time in the sky</text>
        </g>
      </svg>
    </div>`;
  }

  function caturdasaTree() {
    return `<div class="catur-tree">
      <div class="node root">Caturdaśa vidyāsthānam — 14 seats</div>
      <div class="catur-cols">
        <div>
          <h4>4 Vedas</h4>
          <ul><li>Ṛgveda</li><li>Yajurveda</li><li>Sāmaveda</li><li>Atharvaveda</li></ul>
        </div>
        <div>
          <h4>6 Vedāṅgas</h4>
          <ul><li>Śikṣā</li><li>Vyākaraṇa</li><li>Nirukta</li><li>Chandas</li><li>Jyotiṣa</li><li>Kalpa</li></ul>
        </div>
        <div>
          <h4>4 Upāṅgas</h4>
          <ul><li>Purāṇa</li><li>Nyāya</li><li>Mīmāṁsā</li><li>Dharmaśāstra</li></ul>
          <p class="tiny">A widely taught quartet; some teachers fold Itihāsa–Purāṇa together. Variants exist — they do not cancel the 4+6+4 arithmetic.</p>
        </div>
      </div>
      <div class="node">+ 4 Upavedas → Aṣṭādaśa (18): Āyurveda · Dhanurveda · Gandharvaveda · Sthāpatyaveda</div>
    </div>`;
  }

  function templeStyles() {
    return `<div class="style-trio">
      <article>
        <h3>Nāgara</h3>
        <p>Northern curvilinear <em>śikhara</em>; the latina tower as a mountain of stone. Exam names: Kandariya Mahādeva (Khajuraho), Liṅgarāja (Bhubaneswar). Kalinga temples (Konark) are close kin.</p>
      </article>
      <article>
        <h3>Drāviḍa</h3>
        <p>Southern pyramidal <em>vimāna</em> in storeys (<em>tala</em>), often a great gateway later. Exam names: Bṛhadīśvara (Thanjāvūr), Shore Temple (Mahabalipuram), Mīnākṣī (Madurai).</p>
      </article>
      <article>
        <h3>Vesara</h3>
        <p>Deccan meeting-ground: Chalukya–Hoysala experiments that refuse a simple north/south binary. Exam names: Paṭṭadakal, Bēlūr, Haḷēbīḍu.</p>
      </article>
    </div>`;
  }

  function darsanaMatrix() {
    return compare(
      ["School", "Folder on this paper", "Signature to remember", "What it will not let you skip"],
      [
        ["Sāṁkhya", "Āstika", "Prakṛti and puruṣa", "A map of becoming, with a witness"],
        ["Yoga", "Āstika", "Discipline of stilling", "Patañjali’s path as method, not a brand"],
        ["Nyāya", "Āstika", "Pramāṇa — how knowing happens", "Perception, inference, comparison, testimony"],
        ["Vaiśeṣika", "Āstika", "Padārtha — how the world is typed", "Particulars, qualities, action"],
        ["Pūrva-Mīmāṁsā", "Āstika", "Dharma as what the Veda enjoins", "Hermeneutics of action"],
        ["Vedānta", "Āstika", "Brahman as the Upaniṣadic centre", "Uttara-Mīmāṁsā: the ‘end’ of the Veda"],
        ["Cārvāka", "Nāstika", "Perception-first pressure-test", "Honesty about fragmentary sources"],
        ["Bauddha", "Nāstika", "Analysis of arising and cessation", "A full knowledge civilisation"],
        ["Jaina", "Nāstika", "Ahiṁsā, anekānta, syāt", "Many-sidedness without mush"]
      ]
    );
  }

  const NAMED = {
    "veda-river": vedaRiver,
    "veda-four": vedaFour,
    "patha-weave": pathaWeave,
    "kalas-clusters": kalasMandala,
    "vedapurusa": vedapurusa,
    "caturdasa-tree": caturdasaTree,
    "temple-styles": templeStyles,
    "darsana-matrix": darsanaMatrix
  };

  function render(diagram) {
    if (!diagram) return "";
    if (typeof diagram === "string") return `<div class="diagram">${diagram}</div>`;
    const inner = (() => {
      switch (diagram.type) {
        case "flow":
          return flow(diagram.steps);
        case "vflow":
          return vflow(diagram.steps);
        case "compare":
          return compare(diagram.headers, diagram.rows);
        case "tree":
          return tree(diagram.root, diagram.branches);
        case "decision":
          return decision(diagram.q, diagram.yes, diagram.no);
        case "stack":
          return svgStack(diagram.layers);
        case "named":
          return NAMED[diagram.id] ? NAMED[diagram.id](diagram) : "";
        case "figures":
          return figStrip(diagram.items);
        case "html":
          return diagram.html;
        default:
          return "";
      }
    })();
    const cap = diagram.title ? `<p class="search-query">${esc(diagram.title)}</p>` : "";
    return `<div class="diagram">${cap}${inner}</div>`;
  }

  global.IKSDiagrams = {
    render,
    flow,
    vflow,
    compare,
    tree,
    esc,
    fig,
    figStrip,
    named: NAMED
  };
})(window);
