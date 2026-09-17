(function (g) {
  g.IKS = g.IKS || {};
  g.IKS.pages = g.IKS.pages || {};

  g.IKS.pages.teach = function () {
    const D = window.IKSDiagrams;
    return `<article class="topic" id="topic-plan" data-jump="plan">
      <p class="kicker">Teach notes · Unit I · 6 × ~50 min</p>
      <h1>Six-lecture plan for Mona</h1>
      <p class="lede">One GEC hour is not a TED talk. Each slot below names a target artefact on the board, a 10-minute activity already on the card, and what students should open in Thakur / Mahadevan that evening. Units II–V stay visible in the last three minutes so the 30-hour map does not collapse.</p>
      ${D.render({ type: "flow", steps: ["L1 Map", "L2 Vedas", "L3 Tools", "L4 Make", "L5 See", "L6 Tell+quiz"] })}
      <div class="lecture-grid">
        <section class="lecture-card">
          <h3>Lecture 1 — What is IKS + Caturdaśa</h3>
          <p>Cards: <button type="button" class="text-link" data-nav="unit1" data-topic="u1-what">What is IKS?</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-caturdasa">Caturdaśa</button></p>
          <p><strong>Board:</strong> G-C-T-A; 4+6+4(+4). <strong>Activity:</strong> four sticky notes. <strong>Do not:</strong> invent civilisational rankings. <strong>Exit ticket:</strong> 14 vs 18 in one sentence.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 2 — Four Vedas + oral conservation</h3>
          <p>Card: <button type="button" class="text-link" data-nav="unit1" data-topic="u1-vedas">Four Vedas</button></p>
          <p><strong>Board:</strong> RYSA table + SBAU stack + śruti/smṛti. <strong>Activity:</strong> human krama checksum. <strong>Do not:</strong> date-fight. <strong>Exit ticket:</strong> one pāṭha name and why it catches errors.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 3 — Vedāṅgas + Upavedas</h3>
          <p>Cards: <button type="button" class="text-link" data-nav="unit1" data-topic="u1-vedanga">Six Vedāṅgas</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-upaveda">Upavedas</button></p>
          <p><strong>Board:</strong> six job boxes; ADGS; pointer arrows to Units II–V. <strong>Activity:</strong> match-the-limb envelopes. <strong>Exit ticket:</strong> list six aṅgas.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 4 — 64 Kalās + Śilpa (checkmarks)</h3>
          <p>Cards: <button type="button" class="text-link" data-nav="unit1" data-topic="u1-kalas">64 Kalās</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-silpa">Śilpa Śāstra</button></p>
          <p><strong>Board:</strong> MAKE clusters; P-M-P; ‘lists vary’ box. <strong>Activity:</strong> ten sticky kalās + lamp spec. This hour is slow on purpose. <strong>Exit ticket:</strong> kalā vs śilpa in one line each.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 5 — Darśanas</h3>
          <p>Cards: <button type="button" class="text-link" data-nav="unit1" data-topic="u1-astika">Āstika</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-nastika">Nāstika</button></p>
          <p><strong>Board:</strong> ‘Āstika ≠ theist’; three pairs; C-B-J. <strong>Activity:</strong> compiler badges + steelman 3×3. <strong>Do not:</strong> mock Cārvāka. <strong>Exit ticket:</strong> one fair Jain sentence.</p>
        </section>
        <section class="lecture-card">
          <h3>Lecture 6 — Purāṇa, Itihāsa, Nīti + quiz</h3>
          <p>Cards: <button type="button" class="text-link" data-nav="unit1" data-topic="u1-purana">Purāṇas</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-itihasa">Itihāsa</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-niti">Nīti</button> · <button type="button" class="text-link" data-nav="unit1" data-topic="u1-revision">Revision map</button></p>
          <p><strong>Board:</strong> five lakṣaṇas; R+M handles; P-C-P. First 30 minutes teach; last 20 quiz from the revision card’s 25-mark sketch. Answer three sticky questions from Lecture 1.</p>
        </section>
      </div>
    </article>
    <article class="topic" id="topic-board" data-jump="board">
      <p class="kicker">Teach notes · habits</p>
      <h1>Board habits for a BCA IKS room</h1>
      <ol>
        <li><strong>Numbers before names.</strong> 4+6+4 on the board before Ṛgveda.</li>
        <li><strong>One analogy, then hide the site.</strong> Project the diagram; redraw it from memory.</li>
        <li><strong>Guardrail box.</strong> Every high-yield hour gets a ‘we will not claim…’ line. It protects CO4.</li>
        <li><strong>Physical book.</strong> End with a page-range in Thakur or a chapter name in Mahadevan — spoken, not photocopied onto this site.</li>
        <li><strong>Seal after class, not before.</strong> Progress is <code>mona-iks-progress-v1</code> in this browser.</li>
      </ol>
      <aside class="analogy"><h3>If the hour is slipping</h3>
        <p>Cut celebrity stories first, then YouTube, then the activity’s debrief. Never cut the artefact (the map, the six boxes, the lakṣaṇas). Internals mark artefacts.</p>
      </aside>
    </article>
    <article class="topic" id="topic-internals" data-jump="internals">
      <p class="kicker">Teach notes · 25 marks</p>
      <h1>Internals without a leaked bank</h1>
      <p>Write your own English. The revision card has a 5×2 + 5 + 10 sketch. Swap in Kalās as the 10-marker in another cycle; keep Vedāṅgas as the list that everyone should get right.</p>
      <table class="compare">
        <thead><tr><th>Cycle</th><th>10-marker</th><th>5-marker</th><th>Lists (2s)</th></tr></thead>
        <tbody>
          <tr><td>A (after L3)</td><td>Four Vedas + layers + pāṭha</td><td>14 vs 18</td><td>Vedāṅgas; Upavedas; śruti/smṛti</td></tr>
          <tr><td>B (after L4)</td><td>Kalās as taxonomy + Śilpa P-M-P</td><td>Śilpa vs Vāstu (one line + neighbour)</td><td>Sample kalās; 4 Vedas</td></tr>
          <tr><td>C (after L6)</td><td>Āstika pairs + one nāstika</td><td>Five lakṣaṇas</td><td>C-B-J; R+M; nīti vs subhāṣita</td></tr>
        </tbody>
      </table>
      <p>College may fix a pattern. Adapt, do not import IntactOne wording.</p>
    </article>`;
  };
})(window);
