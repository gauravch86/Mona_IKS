(function (g) {
  g.IKS = g.IKS || {};
  g.IKS.pages = g.IKS.pages || {};

  g.IKS.pages.teach = function () {
    const D = window.IKSDiagrams;
    return `<article class="topic" id="topic-plan" data-jump="plan">
      <p class="kicker">Teach notes · Unit I · 6 × ~50 min</p>
      <h1>Six-lecture plan for Mona</h1>
      <p class="lede">These notes are for the lecturer. The topic cards themselves are galleries of substance — lists, rivers, temples, verses, grids — so that a BCA student, an engineer, and a traditional scholar can all stay in the room. Do not project this tab as the lesson. Unit II has its own six-hour arc below the Unit I plan.</p>
      ${D.render({ type: "flow", steps: ["L1 Map", "L2 Vedas", "L3 Limbs", "L4 Make", "L5 See", "L6 Tell+quiz"] })}
      <div class="lecture-grid">
        <section class="lecture-card">
          <h3>Lecture 1 — What is IKS + Caturdaśa</h3>
          <p>Cards: <button type="button" class="text-link" data-nav="unit1" data-topic="u1-what">What is IKS?</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-caturdasa">Caturdaśa</button></p>
          <p><strong>Open</strong> with Taittirīya 1.11.1 (satyaṃ vada, dharmaṃ cara) then Gītā 4.38. <strong>Board:</strong> G-C-T-A; the 4+6+4 tree with named fruit. <strong>Activity:</strong> four sticky notes. <strong>Do not:</strong> invent civilisational rankings. <strong>Exit ticket:</strong> 14 vs 18 in one sentence.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 2 — Four Vedas as a museum hour</h3>
          <p>Card: <button type="button" class="text-link" data-nav="unit1" data-topic="u1-vedas">Four Vedas</button></p>
          <p><strong>Open with the verse</strong> (Ṛgveda 1.1.1) — let the room hear a calling before any table. <strong>Then four characters</strong> (hymn, rite, chant, household-and-peace). <strong>Then the river</strong> Saṁhitā → Brāhmaṇa → Āraṇyaka → Upaniṣad. <strong>Then two Upaniṣadic rooms</strong> (Kaṭha’s Naciketas, or Chāndogya’s tat tvam asi, plus the four mahāvākyas as hinges). <strong>Pāṭha last</strong>, as a vow of sound — never as a software demo. <strong>Do not:</strong> lead with Git, repo, checksum, runbook, or codec. <strong>Exit ticket:</strong> one Veda’s temperament + one layer of the river.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 3 — Vedāṅgas as a living body</h3>
          <p>Cards: <button type="button" class="text-link" data-nav="unit1" data-topic="u1-vedanga">Six Vedāṅgas</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-upaveda">Upavedas</button></p>
          <p><strong>Board:</strong> vedapuruṣa (nose, mouth, ear, feet, eyes, hands) + the function table + Kalpa’s four folders (Śrauta, Gṛhya, Dharma, Śulba). Upavedas: four doors, Suśruta leaf, Rāma’s bow, Naṭarāja, Bṛhadīśvara. Pointers to Pāṇini and Śulba. <strong>Activity:</strong> match-the-limb. <strong>Do not:</strong> make the compiler-toolchain the spine. <strong>Exit ticket:</strong> six aṅgas in order.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 4 — 64 Kalās + Śilpa (the check-marked twin)</h3>
          <p>Cards: <button type="button" class="text-link" data-nav="unit1" data-topic="u1-kalas">64 Kalās</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-silpa">Śilpa Śāstra</button></p>
          <p><strong>20-minute Kalās arc:</strong> (1) kalā vs vidyā, lists vary, Vātsyāyana as spine. (2) Mandala of seven rooms — all 64 assigned; project the numbered table, do not hide it. (3) Three deep dives: nṛtya + Naṭarāja/Bharatanāṭyam; ālekhya + Ajanta; dhātu-vāda + temple metal. (4) Why BCA: a civilisation already catalogued skill beside knowing — NEP did not invent that. Put that last. <strong>Śilpa half-hour:</strong> P-M-P, Nāgara–Drāviḍa–Vesara with named temples on the figure strip. <strong>Exit ticket:</strong> kalā vs śilpa in one line each + one numbered kalā in a room.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 5 — Darśanas</h3>
          <p>Cards: <button type="button" class="text-link" data-nav="unit1" data-topic="u1-astika">Āstika</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-nastika">Nāstika</button></p>
          <p><strong>Board:</strong> ‘Āstika ≠ theist’; three pairs; C-B-J. Open Yoga with YS 1.2; Nyāya with NS 1.1.3; Jain with Tattvārtha 1.1. Walk Sāṁkhya’s twenty-five, aṣṭāṅga’s eight, Vaiśeṣika’s seven padārthas; then four truths, eightfold path, seven Jaina tattvas. <strong>Activity:</strong> signature slips on the three pair columns. <strong>Do not:</strong> mock Cārvāka. <strong>Exit ticket:</strong> one fair Jain sentence.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 6 — Purāṇa, Itihāsa, Nīti + quiz</h3>
          <p>Cards: <button type="button" class="text-link" data-nav="unit1" data-topic="u1-purana">Purāṇas</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-itihasa">Itihāsa</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-niti">Nīti</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-revision">Revision map</button></p>
          <p><strong>Purāṇas as a museum half-hour:</strong> open on Matsya’s five-mark verse; walk five rooms with one picture each (lotus-birth, flood, gotra, Vaivasvata, Pṛthu/Rāma-line); project all eighteen as identities; three houses (not Padma’s guṇa-ranking as a grade); daśāvatāra path + Bhāgavata 1.3.28; one sthala walked (Kāśī / Kāñcī / Setu). Then Itihāsa (seven kāṇḍas, eighteen parvans) and Nīti (five tantras, four Hitopadeśa books). Last 20 quiz. <strong>Do not:</strong> tell students to skip the eighteen, or lead with ‘don’t binge plots.’ The card is the chapter. Answer three sticky questions from Lecture 1.</p>
        </section>
      </div>
    </article>
    <article class="topic" id="topic-plan2" data-jump="plan2">
      <p class="kicker">Teach notes · Unit II · 6 × ~50 min</p>
      <h1>Six-lecture plan — foundation of number and rule</h1>
      <p class="lede">Nine cards, six hours. The galleries are the chapter. This arc is only the order. Open on a verse or a grid, not on a computing metaphor.</p>
      ${D.render({ type: "flow", steps: ["L1 Sound", "L2 Pāṇini", "L3 Places", "L4 Codes", "L5 Metre", "L6 Knowing"] })}
      <div class="lecture-grid">
        <section class="lecture-card">
          <h3>Lecture 1 — Śikṣā</h3>
          <p>Card: <button type="button" class="text-link" data-nav="unit2" data-topic="u2-phonetics">Phonetics</button></p>
          <p><strong>Open</strong> with Pāṇinīya-śikṣā 1. <strong>Board:</strong> five parameters; eight places; five vowel sandhis with examples. <strong>Close</strong> on the six faults and six virtues. <strong>Do not:</strong> call the alphabet a character encoding. <strong>Exit ticket:</strong> one place, one sandhi undone.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 2 — Aṣṭādhyāyī, then the honest machine hour</h3>
          <p>Cards: <button type="button" class="text-link" data-nav="unit2" data-topic="u2-panini">Pāṇini</button> · <button type="button" class="text-link" data-nav="unit2" data-topic="u2-nlp">Sanskrit and NLP</button></p>
          <p><strong>First 30 minutes:</strong> fourteen Śiva-sūtras on the board; expand only ac, hal, al; 1.1.1; one clash-rule; six kārakas versus endings. <strong>Last 20:</strong> three layers (cut, reverse the derivation, role). Strike the space-agency myth once, out loud. <strong>Do not:</strong> lead with “compiler.” <strong>Exit ticket:</strong> expand hal, and name kartṛ in one sentence.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 3 — Place value, zero, and the names of magnitude</h3>
          <p>Cards: <button type="button" class="text-link" data-nav="unit2" data-topic="u2-zero">Zero and place value</button> · <button type="button" class="text-link" data-nav="unit2" data-topic="u2-large">Large numbers</button></p>
          <p><strong>Board:</strong> 30502 in six seats before any glory. Āryabhaṭa’s tenfold verse. Brahmagupta’s addition law with +2, −2, and 0. Then the ten names, and lakh/crore placed without erasing niyuta. <strong>Do not:</strong> give zero a single birthday, or collapse śūnyatā into the digit. <strong>Exit ticket:</strong> which zero in 30502 is load-bearing, and what is a crore?</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 4 — Two codes</h3>
          <p>Cards: <button type="button" class="text-link" data-nav="unit2" data-topic="u2-bhuta">Bhūta-saṁkhyā</button> · <button type="button" class="text-link" data-nav="unit2" data-topic="u2-katapayadi">Kaṭapayādi</button></p>
          <p><strong>Direction first,</strong> on both systems: the left edge is the units. Decode netra-veda = 42 before Mādhava’s long compound, and say the two-unit gap. Then the Kaṭapayādi grid, māyā = 15, drā as a single digit. Date Haridatta (683 CE) and Śaṅkaravarman (1819). <strong>Do not:</strong> call either code Vedic, or call them the same code. <strong>Exit ticket:</strong> one word for 4, and why naya is not 15.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 5 — Piṅgala</h3>
          <p>Card: <button type="button" class="text-link" data-nav="unit2" data-topic="u2-pingala">Piṅgala</button></p>
          <p><strong>Board:</strong> eight patterns of three syllables from the class’s mouth, then the Meru up to a row that sums to 16. Halāyudha’s name goes on the triangle. <strong>Do not:</strong> say he invented the computer. The allowed sentence is “two weights, freely combined, are a power of two.” <strong>Exit ticket:</strong> 2³ and the name of the commentator who draws the Meru.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 6 — Pramāṇa, prameya, saṁśaya</h3>
          <p>Card: <button type="button" class="text-link" data-nav="unit2" data-topic="u2-pramana">Knowledge pyramid</button></p>
          <p><strong>Open</strong> with Nyāyasūtra 1.1.3. <strong>Board:</strong> sixteen as a table of contents; four means; two rival counts; twelve prameyas from self to release; the post and the person. Label the pyramid as a classroom figure in the first minute. <strong>Do not:</strong> teach data–information–knowledge–wisdom as if Gautama drew it. <strong>Exit ticket:</strong> three definitions, and one school that does not count four pramāṇas.</p>
        </section>
      </div>
    </article>
    <article class="topic" id="topic-voice" data-jump="voice">
      <p class="kicker">Teach notes · four audiences</p>
      <h1>The four-audience test</h1>
      <p>Every gallery on this bench — Unit I and Unit II alike — must be able to please, in the same page:</p>
      <ol>
        <li><strong>A BCA first-year</strong> — curious, clear, memorable. Light modern bridges are guests at the end, never the spine.</li>
        <li><strong>Prof. Mona</strong> — enough accurate substance to lecture 45–60 minutes without opening another tab.</li>
        <li><strong>An engineer</strong> — structures and systems maps (rivers, trees, mandalas, comparison tables). Not Git-repo metaphors as the main story.</li>
        <li><strong>A religious pandit / traditional scholar</strong> — respectful Sanskrit, śruti/smṛti care, no cartoon of sacred text, no ‘checksum’ renaming of pāṭha.</li>
      </ol>
      <p>If a paragraph would embarrass a reciter or bore a student, rewrite it. If it only tells Mona how to teach, it belongs on this tab, not on the card.</p>
    </article>
    <article class="topic" id="topic-board" data-jump="board">
      <p class="kicker">Teach notes · habits</p>
      <h1>Board habits for a BCA IKS room</h1>
      <ol>
        <li><strong>Verse or image first</strong> on high-yield hours. Then the map. Then the modern bridge if there is time.</li>
        <li><strong>Numbers and names.</strong> 4+6+4 on the board; 64 on the table; six limbs on a body.</li>
        <li><strong>Guardrail box.</strong> Every high-yield hour gets a ‘we will not claim…’ line. It protects CO4.</li>
        <li><strong>Physical book.</strong> End with a page-range in Thakur or a chapter name in Mahadevan — spoken, not photocopied onto the site.</li>
        <li><strong>Seal after class, not before.</strong> Progress is <code>mona-iks-progress-v1</code> in this browser.</li>
      </ol>
      <aside class="analogy"><h3>If the hour is slipping</h3>
        <p>Cut celebrity stories first, then YouTube, then the activity’s debrief. Never cut the artefact (the river, the six limbs, the kalā mandala, the lakṣaṇas).</p>
      </aside>
    </article>
    <article class="topic" id="topic-internals" data-jump="internals">
      <p class="kicker">Teach notes · 25 marks</p>
      <h1>Internals without a leaked bank</h1>
      <p>Write your own English. Sample 25: Section A 5×2 (Vedāṅgas; 14-count; śruti/smṛti; nāstika names; five lakṣaṇas). Section B 1×5 (Kalās as seven rooms). Section C 1×10 (Four Vedas + river + two Upaniṣadic doorways). Swap Kalās as the 10-marker in another cycle; keep Vedāṅgas as the list everyone should get right. The revision gallery is the map; this tab is where the exam is designed.</p>
      <table class="compare">
        <thead><tr><th>Cycle</th><th>10-marker</th><th>5-marker</th><th>Lists (2s)</th></tr></thead>
        <tbody>
          <tr><td>A (after L3)</td><td>Four Vedas + river + two Upaniṣads</td><td>14 vs 18</td><td>Vedāṅgas; Upavedas; śruti/smṛti</td></tr>
          <tr><td>B (after L4)</td><td>Kalās as seven rooms + one heritage witness</td><td>Nāgara / Drāviḍa / Vesara + one temple</td><td>Sample kalās from two rooms; 4 Vedas</td></tr>
          <tr><td>C (after L6)</td><td>Āstika pairs + one nāstika</td><td>Five lakṣaṇas</td><td>C-B-J; R+M; nīti vs subhāṣita</td></tr>
        </tbody>
      </table>
      <p>College may fix a pattern. Adapt, do not import IntactOne wording.</p>
    </article>`;
  };
})(window);
