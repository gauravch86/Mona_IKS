(function (g) {
  g.IKS = g.IKS || {};
  g.IKS.papers = g.IKS.papers || {};

  const ROMAN = { 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V" };

  g.IKS.coming = function (spec) {
    const unit = spec.unit;
    const lede = spec.lede || spec.summary || "";
    const explainer =
      spec.explainer ||
      `<p><strong>Coming next.</strong> ${lede}</p>
      <p>Keep this title on the course map so students see the full 30 hours. The filled card will add a board diagram, a 10-minute activity, and 2/5/10-mark outlines. Until then, one idea is enough to park: this heading is on the CCS BCA-1003 T sheet, and it will get a proper lecture script in a later drop.</p>
      <p>Do not invent a full class from this stub. If a student asks a sharp question, write it on the board and promise the Unit ${ROMAN[unit]} week.</p>`;
    const base = {
      yield: "standard",
      comingNext: true,
      tags: [],
      readAs: "Thakur Unit " + ROMAN[unit] + " · Mahadevan matching chapter (physical book)",
      explainer,
      analogy: {
        title: "BCA teaser",
        body: spec.hook || "A computing analogy will sit here when the lecture card is filled."
      },
      diagram: {
        type: "flow",
        title: "Parking space on the 30-hour map",
        steps: ["Syllabus title", "Coming next", "Full lecture card"]
      },
      lectureTips: [
        "Show the title so the five-unit map is honest.",
        "Do not invent a full lecture from this stub.",
        "Park student questions for the filled drop."
      ],
      classroomActivity: {
        title: "Name-it parking lot",
        minutes: 5,
        body: "Students write one thing they already associate with this heading. Collect slips; reuse them when the card is filled."
      },
      studentQs: ["Where does this heading sit in the 30-hour map?"],
      twomark: {
        q: "Name this syllabus heading in one sentence.",
        outline: ["State the official title.", "Say which unit owns it."]
      },
      fivemark: {
        q: "Why is this on a BCA IKS paper?",
        outline: ["Define the heading.", "Give one Indian example.", "Offer one computing parallel."]
      },
      tenmark: {
        q: "Place this topic in the course arc.",
        outline: ["Unit home.", "Prerequisite ideas from earlier units.", "What a later lecture will add."]
      },
      check: ["I can name this CCS heading.", "I know this card is not yet a full lecture."],
      youtube: [{ title: "Search later", search: (spec.title || "IKS") + " Indian Knowledge System" }]
    };
    return Object.assign(base, spec, { comingNext: true, explainer: spec.explainer || explainer });
  };

  g.IKS.pages = g.IKS.pages || {};

  g.IKS.pages.resources = function () {
    return `<article class="topic" id="topic-shelf" data-jump="shelf">
      <p class="kicker">Resources · physical books</p>
      <h1>Primary shelf this site tracks</h1>
      <p class="lede">Buy and open these. Sidebar order and topic titles follow the CCS / AICTE outline. Sentences on this website are original lecture prose — they do not replace the books.</p>
      <h2 class="section-title">1. Primary (keep on the desk)</h2>
      <table class="compare">
        <thead><tr><th>#</th><th>Book</th><th>How this site uses it</th></tr></thead>
        <tbody>
          <tr><td>1</td><td><strong>Thakur Publication</strong> — Dr. Mala Shharma &amp; Pankaj Bisht, <em>Indian Knowledge System</em> (CCS BCA 1st Sem / AICTE 2024 cover)</td><td>Unit order and BCA-facing chapter pointers via each card’s <em>readAs</em> line. Never paste the book.</td></tr>
          <tr><td>2</td><td><strong>B. Mahadevan, Vinayak Rajat Bhat, Nagendra Pavana R.N.</strong> — <em>Introduction to Indian Knowledge System: Concepts and Applications</em> (PHI / IIMB)</td><td>Deeper conceptual spine for Vedas, knowledge taxonomy, and applications. Point students here for “why this is a system.”</td></tr>
          <tr><td>3</td><td><strong>Kapur, K. &amp; Singh, A.K. (Eds.)</strong> — <em>Indian Knowledge Systems</em>, Vol. 1 (Indian Institute of Advanced Study / D.K. Printworld, 2005)</td><td>Essay collection for Mona’s own prep; not a first-year crib.</td></tr>
        </tbody>
      </table>
      <h2 class="section-title">2. Secondary (library / if a student wants more)</h2>
      <ul>
        <li>Shantha Nair — <em>Echoes of Ancient Indian Wisdom</em> (Hindology Books)</li>
        <li>S.K. Das — <em>The Education System of the Ancient Hindus</em></li>
        <li>B.L. Gupta — value and distribution / economic-history essays (as named on the CCS sheet)</li>
        <li>Public <strong>AICTE IKS</strong> curriculum notes (structure only — do not paste)</li>
      </ul>
      <aside class="note"><h3>Classroom rule</h3>
        <p>Project this site. Open Thakur or Mahadevan for the matching chapter. Students who want page-level detail go to the book, not to IntactOne / Scribd dumps.</p>
      </aside>
    </article>
    <article class="topic" id="topic-youtube" data-jump="youtube">
      <p class="kicker">Resources · video</p>
      <h1>YouTube search suggestions (playlists move)</h1>
      <p>Search strings, not pinned URLs. Prefer university / IKS division / NPTEL-style explainers. Confirm every list (six Vedāṅgas, five Purāṇa lakṣaṇas) against the board, not against a random reel.</p>
      <div class="yt-row">
        <div class="yt-card"><strong>IKS overview</strong><div class="search-query">Indian Knowledge System NEP AICTE introduction</div></div>
        <div class="yt-card"><strong>Vedas structure</strong><div class="search-query">Four Vedas Samhita Brahmana Aranyaka Upanishad lecture</div></div>
        <div class="yt-card"><strong>Vedāṅgas</strong><div class="search-query">Shiksha Vyakarana Nirukta Chandas Jyotisha Kalpa Vedanga</div></div>
        <div class="yt-card"><strong>Darśanas</strong><div class="search-query">Shad darshana Nyaya Vaisheshika Samkhya Yoga Mimamsa Vedanta</div></div>
        <div class="yt-card"><strong>Pāṇini for CS</strong><div class="search-query">Panini Ashtadhyayi computational linguistics</div></div>
        <div class="yt-card"><strong>Jantar Mantar</strong><div class="search-query">Jantar Mantar Jaipur instruments astronomy</div></div>
      </div>
    </article>
    <article class="topic" id="topic-copyright" data-jump="copyright">
      <p class="kicker">Resources · citation</p>
      <h1>How to cite this site</h1>
      <aside class="note"><h3>Copyright stance</h3>
        <p>All teaching prose here is original. It cites the public CCS / AICTE syllabus outline, traditional classifications (Veda names, Vedāṅga list, Āstika/Nāstika labels, Purāṇa lakṣaṇas), and well-known traditional names. It does <strong>not</strong> copy Thakur Publication, Mahadevan PHI, Kapur &amp; Singh chapter text, IntactOne, Scribd notes, or Unique-style question banks.</p>
      </aside>
      <p>When you quote a definition from a physical book in class, say the book name out loud and keep it off this website.</p>
    </article>`;
  };
})(window);
