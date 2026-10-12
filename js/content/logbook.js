/* When adding a topic card, also append a logbook entry in the same commit. */
(function (g) {
  g.IKS = g.IKS || {};
  /* Newest first. paper: unit1…unit5 or "site". topicId must match a real card id (empty for site-only). */
  g.IKS.logbook = [
    {
      date: "2026-10-12",
      type: "updated",
      paper: "site",
      topicId: "",
      title: "Unit II raised to the 64 Kalās bar",
      note: "Nine galleries replace the Coming-next stubs: Śikṣā, Aṣṭādhyāyī, an honest NLP hour, place value and zero, large-number names, Bhūta-saṁkhyā, Kaṭapayādi, Piṅgala’s Meru, and Nyāya’s pramāṇa / prameya / saṁśaya. Full lists, attested verses, deep panels, Wikimedia figures, diagrams. Units III–V remain titled."
    },
    {
      date: "2026-10-12",
      type: "updated",
      paper: "unit2",
      topicId: "u2-phonetics",
      title: "Śikṣā — places, effort, sandhi",
      note: "Pāṇinīya-śikṣā 1, 10, 13, 17–18, 32–33. Five parameters, eight places, five vowel sandhis, reciter’s six faults and six virtues. Vedic recitation, Sarasvatī, Devanāgarī, nāgasvaram."
    },
    {
      date: "2026-10-12",
      type: "updated",
      paper: "unit2",
      topicId: "u2-panini",
      title: "Aṣṭādhyāyī — fourteen lines and six roles",
      note: "All fourteen Śiva-sūtras; ac, hal, al; rule-tempers including 1.4.2 and the tripāḍī; six kārakas with sūtra numbers; commentary stack. Grantha manuscript, Mahābhāṣya with Kaiyaṭa, Śeṣa image captioned honestly."
    },
    {
      date: "2026-10-12",
      type: "updated",
      paper: "unit2",
      topicId: "u2-nlp",
      title: "Sanskrit and NLP — three layers, one retired myth",
      note: "Sandhi-viccheda, reversed prakriyā, kāraka. Heritage Reader, Saṃsādhanī, Sanskrit Library named as research, not trophies. The space-agency claim is marked false."
    },
    {
      date: "2026-10-12",
      type: "updated",
      paper: "unit2",
      topicId: "u2-zero",
      title: "Place value and the arithmetical zero",
      note: "Āryabhaṭīya Gaṇitapāda 2; 30502 on six seats; Brahmagupta 18.30 and the product law; division by zero left open. Bakhshali dot with its date spread; Chaturbhuj 876 CE; Brahmi numerals as the before. Śūnyatā kept separate."
    },
    {
      date: "2026-10-12",
      type: "updated",
      paper: "unit2",
      topicId: "u2-large",
      title: "Large numbers — three columns",
      note: "Āryabhaṭa’s ten names as the spine. Lakh and crore placed without erasing niyuta. Later Sanskrit words above koṭi flagged as author-dependent. Līlāvatī and a Grantha Sūrya-siddhānta."
    },
    {
      date: "2026-10-12",
      type: "updated",
      paper: "unit2",
      topicId: "u2-bhuta",
      title: "Bhūta-saṁkhyā — lexicon and Mādhava",
      note: "Classroom lexicon 0–12 plus 18, 27, 33. Units-first reading. netra-veda = 42. Mādhava’s circumference walked digit by digit, including the two-unit gap. Three number-codes kept apart."
    },
    {
      date: "2026-10-12",
      type: "updated",
      paper: "unit2",
      topicId: "u2-katapayadi",
      title: "Kaṭapayādi — grid, melody, circumference",
      note: "Full consonant grid; conjunct rule; left edge = units. māyā = 15 as melakarta. bhadrā ends in 24. Haridatta 683 CE; Śaṅkaravarman’s rule-verse 1819, not backdated. Kerala paramparā and a vīṇā."
    },
    {
      date: "2026-10-12",
      type: "updated",
      paper: "unit2",
      topicId: "u2-pingala",
      title: "Piṅgala — two weights and a mountain",
      note: "Sūtras 8.20–21 and 8.34 quoted as terse. All eight patterns of three syllables. Meru through row 6, credited to Halāyudha. Base-2 shape allowed; the computer claim refused. Temple mṛdaṅgam and recitation."
    },
    {
      date: "2026-10-12",
      type: "updated",
      paper: "unit2",
      topicId: "u2-pramana",
      title: "Pramāṇa, prameya, saṁśaya",
      note: "Sixteen padārthas; Nyāya’s four against rival counts; twelve prameyas; saṁśaya 1.1.23. Classroom pyramid labelled as ours, not a management diagram and not a sūtra figure. Nālandā and śabda as manuscript."
    },
    {
      date: "2026-09-17",
      type: "updated",
      paper: "site",
      topicId: "",
      title: "Unit I raised to the 64 Kalās bar",
      note: "Every remaining Unit I gallery now carries full traditional lists/tables, an attested opening verse, deep panels, a Wikimedia heritage strip, and diagrams. Coaching stays on Teach notes. Revision is a map-gallery (thirteen rooms, six artefacts, forward filing), not a quiz booklet."
    },
    {
      date: "2026-09-17",
      type: "updated",
      paper: "unit1",
      topicId: "u1-revision",
      title: "Revision map — ridge gallery",
      note: "Muṇḍaka 1.1.4 hook; thirteen-room table; six redraw artefacts; Caturdaśa tree and Veda-river again; later units filed; four witnesses. Sample internal moved to Teach notes."
    },
    {
      date: "2026-09-17",
      type: "updated",
      paper: "unit1",
      topicId: "u1-nastika",
      title: "Nāstika — full path lists",
      note: "Cārvāka pramāṇa-flag; four truths named; eightfold path opened; Jaina seven tattvas and five mahāvratas; Sarnath, Tīrthaṅkara, Nālandā strip."
    },
    {
      date: "2026-09-17",
      type: "updated",
      paper: "unit1",
      topicId: "u1-niti",
      title: "Nīti — five tantras, four books",
      note: "Pañcatantra’s five tantras and Hitopadeśa’s four books as policy-rooms; turtle folio and Nepalese Hitopadeśa manuscript."
    },
    {
      date: "2026-09-17",
      type: "updated",
      paper: "unit1",
      topicId: "u1-upaveda",
      title: "Upavedas — four witnesses",
      note: "Pairing table as one traditional scheme; Suśruta leaf, Ravi Varma’s Rāma-and-bow, Naṭarāja, Bṛhadīśvara."
    },
    {
      date: "2026-09-17",
      type: "updated",
      paper: "unit1",
      topicId: "u1-purana",
      title: "Purāṇas — museum chapter",
      note: "Full gallery: cultural opening (smṛti/Upāṅga, Sanātana memory); five lakṣaṇa rooms with living examples; all eighteen Mahāpurāṇas as identities with the Śiva/Vāyu fork; Vaiṣṇava–Śaiva–Śākta houses (Padma guṇa-ranking named and refused as insult); daśāvatāra path + Bhāgavata 1.3.28; sthala walked at Kāśī, Kāñcī, Rameśvara, Puri; Upapurāṇa as companion; temple–festival–oral strip; Itihāsa contrast. Lecturer ‘don’t binge / two names’ coaching removed from the card body."
    },
    {
      date: "2026-09-17",
      type: "updated",
      paper: "site",
      topicId: "",
      title: "Attested-verse authenticity pass",
      note: "Unit I galleries now open on named śruti/smṛti/sūtra lines (Ṛg, Upaniṣad, Gītā, Nāṭyaśāstra, Pāṇinīya-śikṣā, Nyāya, Yoga-sūtra, Tattvārtha, Caraka, Matsya lakṣaṇa, Vālmīki, Yakṣa-praśna, Hitopadeśa, Manu) with IAST, English sense, Hindi भाव labelled not-a-śloka, and traditional attribution. Original Hindi couplets sit in a dashed ‘this site’ box. Remaining Git/wiki/lint/API analogies removed from What/Upaveda/Purāṇa/Itihāsa/Nīti. Full 18 Mahāpurāṇa names and 64 Kalās kept as lists."
    },
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
