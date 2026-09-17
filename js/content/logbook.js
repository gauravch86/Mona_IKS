/* When adding a topic card, also append a logbook entry in the same commit. */
(function (g) {
  g.IKS = g.IKS || {};
  /* Newest first. paper: unit1…unit5 or "site". topicId must match a real card id (empty for site-only). */
  g.IKS.logbook = [
    {
      date: "2026-09-17",
      type: "updated",
      paper: "site",
      topicId: "",
      title: "Content-first Sanātana galleries",
      note: "Unit I high-yield cards rewritten as museum chapters: verse-led, illustrated, four-audience. Git/repo/checksum framing removed from Vedas. 64 Kalās now carries a full numbered list in seven clusters plus heritage figures. Mona coaching moved to Teach notes."
    },
    {
      date: "2026-09-17",
      type: "updated",
      paper: "unit1",
      topicId: "u1-vedas",
      title: "Four Vedas — inner river",
      note: "Museum chapter: Ṛgveda 1.1.1 hook; four temperaments; Saṁhitā–Brāhmaṇa–Āraṇyaka–Upaniṣad river; ten mukhya Upaniṣads; four mahāvākyas; pāṭha as vow. Timeline hook no longer uses payload/runbook/checksum."
    },
    {
      date: "2026-09-17",
      type: "updated",
      paper: "unit1",
      topicId: "u1-kalas",
      title: "64 Kalās — full catalogue",
      note: "All 64 numbered (Sanskrit + English) on a Vātsyāyana spine; seven pedagogical rooms with every item assigned; mandala diagram; Chola bronze, Ajanta, Bharatanāṭyam/Odissi, Bṛhadīśvara, Konark figures."
    },
    {
      date: "2026-09-17",
      type: "updated",
      paper: "unit1",
      topicId: "u1-vedanga",
      title: "Six Vedāṅgas — vedapuruṣa",
      note: "Limb-map from the traditional body-verses; function table; compiler-toolchain no longer the spine."
    },
    {
      date: "2026-09-17",
      type: "updated",
      paper: "unit1",
      topicId: "u1-silpa",
      title: "Śilpa — temple dialects",
      note: "Nāgara / Drāviḍa / Vesara with named temples; Mānasāra/Mayamata; Wikimedia case cards including Khajuraho, Thanjāvūr, Paṭṭadakal, Ellora, Konark wheel."
    },
    {
      date: "2026-09-17",
      type: "updated",
      paper: "unit1",
      topicId: "u1-caturdasa",
      title: "Caturdaśa tree",
      note: "Named 4+6+4 tree, Upaveda extension to 18, placement table for later units."
    },
    {
      date: "2026-09-17",
      type: "updated",
      paper: "unit1",
      topicId: "u1-astika",
      title: "Āstika / Nāstika matrix",
      note: "Comparison matrix across six Āstika and three Nāstika streams; theism-shortcut removed; CS ‘runtime’ analogies removed from the spine."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "site",
      topicId: "",
      title: "Mona_IKS lecture bench ships",
      note: "SPA shell (hash routes, theme, search, seal/progress in mona-iks-progress-v1), Overview + Teach notes + Resources + Logbook. Warm saffron/indigo/parchment theme. Unit I complete; II–V scaffolded."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit1",
      topicId: "u1-what",
      title: "What is IKS?",
      note: "Definition, NEP/AICTE/CCS meta, G-C-T-A, CO list in lecturer English, four sticky-note activity."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit1",
      topicId: "u1-caturdasa",
      title: "Caturdaśa Vidyāsthānam",
      note: "4+6+4=14, aṣṭādaśa +4 Upavedas, Upāṅga variant warning, human folder-tree activity."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit1",
      topicId: "u1-kalas",
      title: "64 Kalās",
      note: "High-yield checkmark. Taxonomy of competence, sample clusters, do-not-chant-64 rule, BCA 2030 mapping activity."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit1",
      topicId: "u1-silpa",
      title: "Śilpa Śāstra",
      note: "High-yield checkmark. Proportion–material–process, art–engineering interface, lamp-spec activity. Neighbours: Kalā, Sthāpatya, Vāstu."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit1",
      topicId: "u1-vedas",
      title: "Four Vedas",
      note: "High-yield checkmark. RYSA jobs, SBAU layers, śruti/smṛti, pāṭha as checksum, human-krama demo."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit1",
      topicId: "u1-vedanga",
      title: "Six Vedāṅgas",
      note: "High-yield checkmark. Six job boxes, toolchain analogy, pointers to Pāṇini and Śulba, match-the-limb activity."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit1",
      topicId: "u1-upaveda",
      title: "Upavedas",
      note: "ADGS applied doors; 14→18 arithmetic; Unit IV/V pointers."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit1",
      topicId: "u1-astika",
      title: "Āstika darśanas",
      note: "Three pairs; Āstika ≠ theist; Nyāya as type/proof handle."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit1",
      topicId: "u1-nastika",
      title: "Nāstika streams — Cārvāka, Buddhist, Jain",
      note: "Respect rule; epistemology handles; steelman 3×3. Cārvāka source-honesty."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit1",
      topicId: "u1-purana",
      title: "Purāṇas",
      note: "Maha / Upa / Sthala; five lakṣaṇas; style-guide audit activity."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit1",
      topicId: "u1-itihasa",
      title: "Itihāsa — Rāmāyaṇa and Mahābhārata",
      note: "Knowledge handles not plot recap; dilemma cards; contrast with Purāṇa."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit1",
      topicId: "u1-niti",
      title: "Nīti Śāstras and Subhāṣitas",
      note: "Practical compressed ethics; citation hygiene; write-a-12-word subhāṣita."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit1",
      topicId: "u1-revision",
      title: "Unit I revision map",
      note: "Six-lecture flow, six must-draw artefacts, sample 25-mark internal, blank-map relay."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit2",
      topicId: "u2-panini",
      title: "Unit II course map (Pāṇini → pramāṇa)",
      note: "Nine Coming-next titles: phonetics, Aṣṭādhyāyī, NLP, zero/place value, large numbers, Bhūta-saṁkhyā, Katapayādi, Piṅgala, pramāṇa."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit3",
      topicId: "u3-sulba",
      title: "Unit III course map (maths & sky)",
      note: "Ten Coming-next titles including Śulba, π, Pañcāṅga, Jantar Mantar."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit4",
      topicId: "u4-metallurgy",
      title: "Unit IV course map (making & settling)",
      note: "Six Coming-next titles: occupational skills, metallurgy, dyes, town planning, temple, Vāstu."
    },
    {
      date: "2026-09-17",
      type: "added",
      paper: "unit5",
      topicId: "u5-artha",
      title: "Unit V course map (life & state)",
      note: "Seven Coming-next titles: Āyurveda regimen, Yoga, psychology, Triguṇa, BMIC stack, Rāmāyaṇa admin, Arthaśāstra."
    }
  ];
})(window);
