(function (g) {
  g.IKS = g.IKS || {};
  g.IKS.papers = g.IKS.papers || {};

  g.IKS.papers.unit1 = {
    id: "unit1",
    code: "Unit I",
    title: "Introduction to IKS",
    short: "Unit I topics",
    blurb: "Map of Indian education: Caturdaśa, 64 Kalās, Śilpa, Vedas, Vedāṅgas, darśanas, Purāṇa, Itihāsa, Nīti. 13 lecture-ready cards.",
    shelf: {
      primary: "Thakur — <em>Indian Knowledge System</em> (BCA 1st Sem) · Mahadevan et al. — <em>Introduction to Indian Knowledge System</em> (PHI)"
    },
    youtube: [
      { title: "IKS + NEP overview", search: "Indian Knowledge System NEP 2020 AICTE lecture" },
      { title: "Veda layers", search: "Samhita Brahmana Aranyaka Upanishad explained" }
    ],
    topics: [
      {
        id: "u1-what",
        seq: 1,
        unit: 1,
        yield: "high",
        tags: ["iks", "nep", "aicte", "bca", "definition", "co1"],
        title: "What is IKS?",
        readAs: "Thakur Unit I opening · Mahadevan ch. 1 (physical book)",
        summary: "IKS is not a museum of slogans. It is the set of ways Indian civilisation generated, stored, taught, and applied knowledge — now on a BCA paper because NEP/AICTE want professional students to read those ways as systems.",
        outcomes: [
          "Define IKS in two sentences without using the word ‘glorious’.",
          "Name why BCA-1003 T exists (NEP 2020 / AICTE 2024 / CCS GEC-I).",
          "Give one CS-facing reason to care (storage, rules, measurement, or ethics)."
        ],
        explainer: `<p><strong>Working definition for this classroom:</strong> Indian Knowledge System (IKS) names the organised methods by which knowledge on the subcontinent was produced, classified, transmitted, and put to work — from recitation schools and rule-grammars to medicine, metallurgy, architecture, and statecraft. It is a <em>system</em> word: taxonomy + transmission + application. If you only say “old Indian wisdom,” you have not started the paper.</p>
        <p><strong>Why it is on a BCA timetable.</strong> CCS places this course as <strong>BCA-1003 T</strong>, GEC-I <em>Indian Culture and Civilization</em>, 2 credits, 30 theory hours, 100 marks (25 internal + 75 external), aligned to the <strong>AICTE Model Curriculum 2024</strong> and <strong>NEP 2020</strong>. The policy bet is not that every graduate becomes a Sanskritist. The bet is that a computing student can recognise Indian methods of encoding, error-checking, measurement, and governance as <em>knowledge architectures</em>, then relate them to well-being and sustainable practice (CO3, CO4) without turning the room into a civilisational shouting match.</p>
        <p><strong>What this course is not.</strong> It is not a substitute for Physics or Discrete Maths. It is not a licence to claim that every modern invention was “already in the Veda.” It is not a copy of any one textbook. We cite public syllabus headings and traditional names; we open Thakur and Mahadevan for chapter depth.</p>
        <p><strong>Four course outcomes, in lecturer English:</strong> (CO1) students can sketch how Vedas, Vedāṅgas, Upāṅgas, Upaveda, Purāṇa and Itihāsa sit together as an education map; (CO2) they can trace and name the systems on the sheet; (CO3) they can pick ideas that are publicly discussable and testable rather than mystical fog; (CO4) they can take pride without denying other people’s knowledge or human rights.</p>
        <p><strong>How we will work.</strong> Each topic card has a board diagram, a BCA analogy, a 10-minute activity, and 2/5/10-mark outlines. Seal a card only when you can teach it without scrolling. Unit I is the map; Units II–V apply it to language, number, sky, making, and the body-politic.</p>`,
        analogy: {
          title: "OS, not wallpaper",
          body: "Think of IKS as an operating system: file formats (how knowledge is stored — oral pāṭha, sūtra, narrative), APIs (Vedāṅgas as tooling), applications (Upavedas, Kalās), and design debates (darśanas). BCA already studies OS concepts. This paper asks you to notice that India ran knowledge systems long before GitHub — and to describe them in precise nouns, not adjectives."
        },
        diagram: {
          type: "tree",
          title: "IKS as a system word",
          root: "IKS",
          branches: ["Generate (inquiry, experiment, śāstra)", "Classify (vidyāsthāna, kalā)", "Transmit (oral, sūtra, school)", "Apply (health, craft, state)"]
        },
        mnemonic: {
          name: "G-C-T-A",
          hook: "Generate · Classify · Transmit · Apply.",
          recite: "‘IKS is the Indian stack for making, sorting, passing on, and using knowledge — not a slogan pack.’"
        },
        lectureTips: [
          "Write the course code and 25+75 on the board in minute one so the paper feels real.",
          "Ban the sentence ‘India invented everything.’ Replace with ‘Here is a named method; here is what it conserved.’",
          "Spend two minutes on CO4: pride + human rights + sustainability sit on the same slide.",
          "Point at Thakur’s Unit I and Mahadevan’s opening chapter — then teach from this card, not from a photocopy."
        ],
        classroomActivity: {
          title: "Four sticky notes",
          minutes: 10,
          body: "Each pair writes four nouns: one Indian knowledge practice they have seen at home (food rule, festival calendar, craft, story), one computing term it reminds them of, one thing they refuse to claim without evidence, one question they want this paper to answer. Stick them on four board columns: Practice / Analogy / Guardrail / Question. Revisit the Question column in Lecture 6."
        },
        studentQs: [
          "Is IKS the same as ‘Hindu studies’? (No: the syllabus includes Buddhist and Jain streams, and treats knowledge methods, not a single creed.)",
          "Why should a Python student care? (Encoding, rules, measurement, ethics of systems.)",
          "Will this be in internals? (Yes: 25 marks. Definitions and maps are cheap marks if they are clean.)"
        ],
        twomark: {
          q: "What is meant by Indian Knowledge System in this paper?",
          outline: [
            "Organised methods of producing, classifying, transmitting, and applying knowledge in the Indian civilisation.",
            "Not a list of patriotic adjectives; name at least one layer (Veda / śāstra / kalā)."
          ]
        },
        fivemark: {
          q: "Why has NEP / AICTE placed IKS in a BCA programme?",
          outline: [
            "Professional degrees should locate Indian methods as systems, not folklore.",
            "CO1–CO2: map and identify; CO3: discussable, testable ideas for holistic development.",
            "CO4: pride without chauvinism; well-being and sustainability.",
            "One BCA landing: oral conservation, formal grammar, or measurement."
          ]
        },
        tenmark: {
          q: "Explain IKS as a system of generate–classify–transmit–apply, with examples from the Unit I map.",
          outline: [
            "Define IKS in two lines.",
            "Generate: inquiry traditions / śāstra.",
            "Classify: Caturdaśa, Kalās.",
            "Transmit: oral pāṭha, teacher-student, sūtra compression.",
            "Apply: Upavedas, Śilpa, Nīti.",
            "Close with one guardrail against over-claim."
          ]
        },
        check: [
          "I can define IKS without ‘glorious’.",
          "I can recite code, credits, hours, 25+75.",
          "I can name G-C-T-A.",
          "I can state CO4 in one breath."
        ],
        youtube: [
          { title: "NEP + IKS in higher education", search: "NEP 2020 Indian Knowledge System higher education" },
          { title: "AICTE IKS curriculum talk", search: "AICTE Indian Knowledge System curriculum" }
        ]
      },
      {
        id: "u1-caturdasa",
        seq: 2,
        unit: 1,
        yield: "high",
        tags: ["caturdasa", "vidyasthana", "astadasa", "upanga", "map"],
        title: "Caturdaśa Vidyāsthānam",
        readAs: "Thakur Unit I — 14 vidyās · Mahadevan knowledge-taxonomy chapter",
        summary: "Fourteen ‘seats of knowledge’: 4 Vedas + 6 Vedāṅgas + 4 Upāṅgas. Sometimes the four Upavedas are added to make eighteen (aṣṭādaśa). Teach the CCS grouping as primary and flag variants instead of fighting them.",
        outcomes: [
          "Write 4 + 6 + 4 = 14 on the board from memory.",
          "Name one common Upāṅga list and one variant.",
          "Explain how 14 becomes 18."
        ],
        explainer: `<p><strong>Caturdaśa vidyāsthānam</strong> means fourteen established seats of learning — a classical curriculum map, not a modern UGC file. The version this paper wants you to write first is arithmetic anyone can check: <strong>four Vedas + six Vedāṅgas + four Upāṅgas = 14</strong>.</p>
        <p><strong>The four Vedas</strong> are Ṛg, Yajur, Sāma, Atharva (own card). <strong>The six Vedāṅgas</strong> are Śikṣā, Vyākaraṇa, Nirukta, Chandas, Jyotiṣa, Kalpa (own card). They are called aṅgas — limbs — because they make the Veda usable: sound, grammar, etymology, metre, timing, procedure.</p>
        <p><strong>The four Upāṅgas</strong> are where lists wobble, and a good lecturer says so. A widely taught set is <em>Purāṇa, Nyāya, Mīmāṁsā, Dharmaśāstra</em>. Other teachers fold <em>Itihāsa–Purāṇa</em> together, or treat darśana more broadly. CCS wants you to know that Upāṅgas complete the fourteen; it does not want a religious war over the fourth name. Write the common list, add one line: “variant listings exist.”</p>
        <p><strong>Aṣṭādaśa (18):</strong> add the four <strong>Upavedas</strong> (Āyurveda, Dhanurveda, Gandharvaveda, Sthāpatyaveda) and many traditional accounts speak of eighteen vidyās. So 14 is the core academic map; 18 is the same map with the application layer counted. That is a 2-mark gift if students keep the arithmetic clean.</p>
        <p><strong>How to use the map in later units.</strong> Unit II’s Pāṇini lives under Vyākaraṇa. Unit III’s Śulba lives under Kalpa. Unit IV’s architecture lives under Sthāpatya / Śilpa. Unit V’s Āyurveda is an Upaveda. Caturdaśa is the folder tree; later lectures are files inside folders.</p>`,
        analogy: {
          title: "Degree programme vs course list",
          body: "Caturdaśa is a programme specification: required cores (Vedas), tooling labs (Vedāṅgas), theory electives (Upāṅgas). Aṣṭādaśa adds applied labs (Upavedas). Different colleges shuffle elective names; the credit total is still 14 or 18. Do not panic when two PDFs disagree on the fourth Upāṅga — read the grouping rule."
        },
        diagram: {
          type: "stack",
          title: "14, then 18",
          layers: ["4 Vedas (śruti cores)", "6 Vedāṅgas (toolchain)", "4 Upāṅgas (often Purāṇa, Nyāya, Mīmāṁsā, Dharmaśāstra)", "+ 4 Upavedas → 18 vidyās"]
        },
        mnemonic: {
          name: "4–6–4–(+4)",
          hook: "Four heard · six limbs · four near-limbs · optional four applied.",
          recite: "‘Fourteen is 4+6+4. Eighteen adds the four Upavedas. Variants live in the Upāṅga slot.’"
        },
        lectureTips: [
          "Draw three boxes before naming anything. Numbers first, names second.",
          "If a student quotes a different Upāṅga list from Instagram, praise the curiosity and park it under ‘variants’.",
          "Do not recite all 18 names at speed. Make them build the sum."
        ],
        classroomActivity: {
          title: "Human folder tree",
          minutes: 10,
          body: "Twelve students stand as four Vedas + six Vedāṅgas + two volunteers as ‘Upāṅga pair’. Remaining students must attach a sticky note (Purāṇa / Nyāya / Āyurveda / Kalā) to the correct cluster. Photograph the lineup. Wrong attachments become next class’s 2-markers."
        },
        studentQs: [
          "Is Itihāsa a Veda? (No. Narrative knowledge; often near Purāṇa / Upāṅga discussions.)",
          "Are Kalās inside the 14? (Usually not; they are a parallel skill taxonomy. Own card.)",
          "Why ‘sthānam’? (Seat / established place of a vidyā — a named slot, not a mood.)"
        ],
        twomark: {
          q: "How are the fourteen vidyāsthānas counted?",
          outline: ["4 Vedas + 6 Vedāṅgas + 4 Upāṅgas.", "Optionally name the Upaveda add-on for 18."]
        },
        fivemark: {
          q: "Distinguish Caturdaśa and Aṣṭādaśa vidyās.",
          outline: ["State 14 as 4+6+4.", "Name a common Upāṅga quartet.", "Add 4 Upavedas → 18.", "One sentence on why lists vary."]
        },
        tenmark: {
          q: "Sketch Caturdaśa Vidyāsthānam as a map of ancient Indian education. Note variants.",
          outline: [
            "Define vidyāsthāna.",
            "Table: Vedas / Vedāṅgas / Upāṅgas with one-line jobs.",
            "Aṣṭādaśa extension.",
            "Variant warning (Itihāsa–Purāṇa / darśana folding).",
            "One modern landing: this is a curriculum architecture."
          ]
        },
        check: [
          "I can write 4+6+4 without looking.",
          "I can name six Vedāṅgas (even if the dedicated card is later).",
          "I can explain 14 vs 18.",
          "I can name one Upāṅga variant without freezing."
        ],
        youtube: [
          { title: "Fourteen vidyās overview", search: "Chaturdasha vidya Vedas Vedangas Upangas" },
          { title: "Eighteen vidyās", search: "Ashtadasha vidya Upaveda" }
        ]
      },
      {
        id: "u1-kalas",
        seq: 3,
        unit: 1,
        yield: "high",
        tags: ["kala", "64", "skills", "occupation", "nep"],
        title: "64 Kalās",
        readAs: "Thakur Unit I — 64 Kalās (syllabus checkmark) · Mahadevan arts/skills discussion",
        summary: "A traditional taxonomy of arts and practical skills — fine arts plus occupational know-how. High-yield on the printed CCS sheet. Do not memorise all 64 in Lecture 4; teach the idea of integrated competence and a classroom-friendly sample.",
        outcomes: [
          "Define kalā as skilled competence, not only ‘fine art’.",
          "Give 8–12 named examples spanning music, making, calculation, and social skill.",
          "Connect the list to occupational knowledge and NEP-style skill education."
        ],
        explainer: `<p>The printed CCS sheet check-marks <strong>64 Kalās</strong>. That is a signal: spend real board time. A <strong>kalā</strong> in this usage is a cultivated skill — singing, painting, jewellery, cooking, carpentry, logic-play, even the social arts of conversation and dressing. Traditional lists (often attached to stories of Kṛṣṇa or to śilpa/kāma encyclopaedic cultures) mix what a modern college splits into Fine Arts, Vocational, and Life Skills.</p>
        <p><strong>Do not make the class chant 64 names.</strong> That is a trap. Examiners want (a) what a kalā is, (b) that there is a canonical sixty-four, (c) a sample that shows range, (d) why a knowledge civilisation bothered to count skills at all. The pedagogical claim is integrated education: a learned person was not only a reciter of verse but a body that could make, measure, and live with others.</p>
        <p><strong>Classroom sample (pick ten, stay honest that lists vary):</strong> gīta (song), vādya (instrument), nṛtya (dance), alekhya (drawing), takṣaṇa (carpentry), svarṇa-ratna-parīkṣā (testing gold/gems), pāka (cooking), vastroddhāna / clothing arts, gaṇita-related calculation play, mlecchita-vikalpa (cipher / secret writing — a fun BCA landing), utsādana / perfumery, and dūta-karma / message-craft. If a student brings a different ten from a calendar poster, accept the range and refuse the fight.</p>
        <p><strong>Occupational knowledge.</strong> Several kalās are job descriptions: metal-testing, architecture-adjacent making, agriculture-adjacent skills. Unit IV will return to metallurgy and dyes; plant the flag now. NEP’s talk of multidisciplinary and skill-based education is not a foreign implant — this list is one classical way India already catalogued competence beside vidyā.</p>
        <p><strong>Exam hygiene.</strong> Never claim you personally verified all 64 from a palm leaf in class. Say “traditional lists.” The marks are in the taxonomy idea plus a clean sample.</p>`,
        analogy: {
          title: "Competency matrix, not a Spotify genre list",
          body: "A software team has a skills matrix: backend, UX, security, communication, on-call. 64 Kalās is an older competency matrix that refuses to treat ‘music’ and ‘metal-testing’ as different species of dignity. BCA students already know T-shaped skills. Teach kalā as T-shaped citizenship of a knowledge culture."
        },
        diagram: {
          type: "tree",
          title: "Kalā as a skill tree (sample, not the full 64)",
          root: "64 Kalās",
          branches: ["Performance (gīta, nṛtya, vādya)", "Making (takṣaṇa, painting, jewellery)", "Measure & cipher (gaṇita play, secret writing)", "Social / life arts (food, dress, speech)"]
        },
        mnemonic: {
          name: "MAKE",
          hook: "Music · Artefact · Knowing-count · Everyday social skill.",
          recite: "‘Sixty-four is a catalogue of competence. Sample ten; explain the catalogue.’"
        },
        lectureTips: [
          "This is a check-marked heading — slow down. One full lecture with Śilpa, not a drive-by.",
          "Put a ‘lists vary’ box on the board before any names.",
          "Invite one student who paints / sings / codes / cooks to map their skill onto the tree.",
          "Do not gender the list (‘girls’ arts’). The traditional mix is broader than that insult."
        ],
        classroomActivity: {
          title: "Ten sticky kalās",
          minutes: 10,
          body: "Groups of four invent a ‘BCA 2030’ list of ten kalās a computing graduate should have (e.g. version control, accessible design, kitchen literacy, local-language UI). Then map each modern skill to a classical cluster (performance / making / measure / social). Debrief: the point is taxonomy, not time-travel."
        },
        studentQs: [
          "Must I memorise all 64? (No. Sample + idea. Maybe five names cleanly.)",
          "Is coding a kalā? (Not on the classical list; it is a useful analogy for ‘skilled making with rules’.)",
          "Kalā vs vidyā? (Vidyā = organised knowledge seat; kalā = practised skill. They overlap in people, not in the folder names.)"
        ],
        twomark: {
          q: "What are the 64 Kalās?",
          outline: ["Traditional catalogue of arts and practical skills.", "Give two examples from different clusters."]
        },
        fivemark: {
          q: "Why does an IKS paper teach 64 Kalās to BCA students?",
          outline: ["Define kalā.", "Integrated skill + knowledge, not only recitation.", "Occupational / making skills as knowledge.", "One NEP or competency-matrix landing."]
        },
        tenmark: {
          q: "Discuss the 64 Kalās as a taxonomy of competence. Illustrate with examples. Do not dump an unlabelled list.",
          outline: [
            "Definition and ‘lists vary’.",
            "Four clusters with 2 examples each.",
            "Relation to vidyāsthāna (parallel, not identical).",
            "Bridge to Śilpa / Unit IV occupations.",
            "Close: why counting skills is itself a knowledge act."
          ]
        },
        check: [
          "I can define kalā without saying ‘dance only’.",
          "I can give ten examples in four clusters.",
          "I can say lists vary.",
          "I can connect kalā to occupational knowledge."
        ],
        youtube: [
          { title: "Chausath kala overview", search: "64 kala Chausath kalas Indian arts list" },
          { title: "Skill education + IKS", search: "NEP skill education Indian knowledge crafts" }
        ]
      },
      {
        id: "u1-silpa",
        seq: 4,
        unit: 1,
        yield: "high",
        tags: ["silpa", "iconometry", "craft", "vastu", "engineering"],
        title: "Śilpa Śāstra",
        readAs: "Thakur Unit I — Śilpa Śāstra (syllabus checkmark) · later Unit IV Vāstu/temple chapters",
        summary: "Treatises on making: craft, sculpture, proportion, materials. The art–engineering interface. High-yield. For BCA, teach measurement, spec, and constraint — not temple tourism.",
        outcomes: [
          "Define Śilpa Śāstra as a body of making-knowledge, not ‘drawing class’.",
          "Name proportion / iconometry / materials as three handles.",
          "Place it relative to Sthāpatyaveda, Vāstu, and 64 Kalās."
        ],
        explainer: `<p>The CCS sheet also check-marks <strong>Śilpa Śāstra</strong>. If Kalās are the skill catalogue, Śilpa is the <em>written and workshop tradition of making</em>: how a form is measured, how a material behaves, how an image or building part is specified so another craftsperson can repeat it. Śilpa sits next to <strong>Sthāpatyaveda</strong> (Upaveda of built form) and later <strong>Vāstu</strong> (Unit IV). Do not collapse all three into one vague ‘Indian architecture’ blob on day one — but do show they are neighbours.</p>
        <p><strong>Three handles for a BCA lecture.</strong> (1) <em>Proportion / iconometry:</em> grids, modules, tāla measures for images and elements — a spec. (2) <em>Materials:</em> stone, metal, wood, plaster — constraints, not vibes. (3) <em>Process:</em> from selection of material to finishing; workshop knowledge that is empirical even when wrapped in ritual language. The ritual layer is real for practitioners; in this paper we also name the engineering layer so CS students have a door in.</p>
        <p><strong>Art–science interface.</strong> A mūrti that must stand, take weather, and match a canonical proportion is both aesthetic and structural. That is why this heading is in an IKS paper rather than only in a BFA studio. Students who draw well and students who only code should both hear: specification plus constraint is knowledge.</p>
        <p><strong>Guardrail.</strong> We will not reconstruct a full temple from this card. Unit IV returns to town planning and temple architecture. Today’s job is to put Śilpa on the map as <em>śāstra of making</em>.</p>`,
        analogy: {
          title: "Design system + materials science",
          body: "A UI design system (spacing scale, component spec) plus a hardware constraint file (this glass, this load). Śilpa is closer to that pair than to ‘art period.’ Iconometry is the type scale. Material chapters are the device lab. The workshop is CI: can another maker reproduce the artefact?"
        },
        diagram: {
          type: "flow",
          title: "From brief to artefact",
          steps: ["Purpose / icon or element", "Module & proportion", "Material constraint", "Workshop process", "Finish & install"]
        },
        mnemonic: {
          name: "P-M-P",
          hook: "Proportion · Material · Process.",
          recite: "‘Śilpa is the spec for making. Kalā is the skill. Vāstu is the spatial brief (later).’"
        },
        lectureTips: [
          "Bring one photograph of a measured grid (you may sketch a simple 8×8 on the board) — no need for a copyrighted plate from a book.",
          "Pair this card with 64 Kalās in the same lecture hour if time is tight; they are the check-marked twin.",
          "If a student asks for ‘secret codes in temples,’ park it: this paper teaches measure and making, not conspiracy."
        ],
        classroomActivity: {
          title: "Spec a lamp",
          minutes: 10,
          body: "Pairs write a 6-line ‘śilpa brief’ for a clay lamp: purpose, three measurements, material, one failure mode (cracks in firing), one finish. No drawing skill required. Debrief: you just wrote a constrained spec — that is the door into Śilpa."
        },
        studentQs: [
          "Śilpa vs Vāstu? (Making/form vs spatial/organisational brief — neighbours, not synonyms.)",
          "Is this only Hindu temples? (Temple architecture is a major application; the idea of craft-science is wider — tools, images, objects.)",
          "Will we do Unit IV today? (No. Flag and move.)"
        ],
        twomark: {
          q: "What is Śilpa Śāstra?",
          outline: ["Body of knowledge on craft, sculpture, proportion, and materials.", "Art–engineering interface."]
        },
        fivemark: {
          q: "Explain Śilpa Śāstra as an art–science interface with two illustrations.",
          outline: ["Definition.", "Proportion/iconometry as spec.", "Materials as constraint.", "One object example (image, pillar, lamp)."]
        },
        tenmark: {
          q: "Discuss Śilpa Śāstra in the IKS map. Relate it to Kalās and to Sthāpatyaveda / Vāstu.",
          outline: [
            "Place on the map (making-knowledge).",
            "P-M-P handles.",
            "Kalā = skill catalogue; Śilpa = śāstra of making.",
            "Sthāpatya / Vāstu as neighbours (Unit IV).",
            "BCA landing: spec + constraint + reproducibility."
          ]
        },
        check: [
          "I can define Śilpa without saying ‘just art’.",
          "I can recite P-M-P.",
          "I can separate Kalā / Śilpa / Vāstu in one line each.",
          "I can run the lamp-spec activity."
        ],
        youtube: [
          { title: "Shilpa shastra proportion", search: "Shilpa Shastra iconometry proportion temple" },
          { title: "Craft knowledge India", search: "Indian craft treatises sculpture proportion" }
        ]
      },
      {
        id: "u1-vedas",
        seq: 5,
        unit: 1,
        yield: "high",
        tags: ["veda", "sruti", "rg", "yajur", "sama", "atharva", "patha", "high"],
        title: "Four Vedas",
        readAs: "Thakur Unit I — Four Vedas (checkmark) · Mahadevan Veda chapters",
        summary: "Ṛg, Yajur, Sāma, Atharva. Teach each Veda’s job, the Saṁhitā–Brāhmaṇa–Āraṇyaka–Upaniṣad layering, śruti vs smṛti, and oral pāṭha as error-checking. High-yield.",
        outcomes: [
          "Name the four Vedas with one job-line each.",
          "Sketch the four internal layers.",
          "Distinguish śruti and smṛti in one sentence.",
          "Explain one pāṭha method as redundancy."
        ],
        explainer: `<p><strong>Four named corpora, four jobs.</strong> <em>Ṛgveda</em> — metrical hymns (ṛks); the oldest widely taught layer; deities such as Agni, Indra, Varuṇa appear as addressed powers in hymn. <em>Yajurveda</em> — liturgical formulas for the rite; traditionally taught in Śukla (white, more clearly arranged) and Kṛṣṇa (black, mixed with brāhmaṇa-like prose) recensions. <em>Sāmaveda</em> — melodies; much of its verse is Ṛg material set for chant — a reminder that ‘new Veda’ can mean a new <em>interface</em> (sound) on shared payload. <em>Atharvaveda</em> — speech of everyday welfare, healing, peace, and household concerns in the Atharvan–Aṅgiras stream. Do not caricature it as ‘magic vs the serious Vedas’; teach it as the corpus closest to lived trouble.</p>
        <p><strong>Layers often taught inside a Veda:</strong> <em>Saṁhitā</em> (collected mantras), <em>Brāhmaṇa</em> (prose that explains the rite), <em>Āraṇyaka</em> (forest treatises, interiorising ritual), <em>Upaniṣad</em> (inquiry). This is a reading map. It stops the false idea that ‘Veda’ is only fire and ‘Upaniṣad’ is a separate modern spirituality shelf.</p>
        <p><strong>Śruti vs smṛti.</strong> Śruti is ‘heard’ — the Veda as conserved revelation/recitation, classically called <em>apauruṣeya</em> (not authored in the ordinary human-book sense) in Mīmāṁsā teaching. Smṛti is ‘remembered’ — dharma texts, epics, Purāṇas, codes that acknowledge human transmission. For this paper: śruti is the primary file; smṛti is commentary, narrative, and law-memory that must not contradict the primary in orthodox reading. Keep it technical, not sermonising.</p>
        <p><strong>Oral conservation (the CS gold).</strong> Recitation schools used multiple <em>pāṭha</em> patterns — saṁhitā (continuous), pada (word-wise), krama (pairwise chaining), jaṭā and ghana (dense interleavings). If a syllable slips in one pattern, another pattern fails to match. That is redundancy and checksum, implemented in human memory. Mention it; do not pretend you trained as a ghanapāṭhin this morning.</p>
        <p><strong>What not to do.</strong> Do not date-fight for twenty minutes. Do not claim astrophysics from a hymn in this class. Do name the four, the layers, śruti/smṛti, and pāṭha.</p>`,
        analogy: {
          title: "Repo, recensions, and checksums",
          body: "Each Veda is a repo. Śukla/Kṛṣṇa Yajur are recensions (forks with different working-tree layouts). Sāma is the same poetry with a different codec (melody). Pāṭha methods are like storing a file plus its hash plus a second encoding: corruption in one copy is caught by the others. Śruti is the protected main branch; smṛti is documentation and narrative issues that still refer to main."
        },
        diagram: {
          type: "compare",
          title: "Four Vedas — job lines",
          headers: ["Veda", "Primary job in this paper", "BCA landing"],
          rows: [
            ["Ṛg", "Hymn / ṛk — praise and cosmic address in metre", "Source payload"],
            ["Yajur", "Liturgical formula — Śukla / Kṛṣṇa recensions", "Runbook / two layouts"],
            ["Sāma", "Melody — chant interface on verse", "Codec / audio layer"],
            ["Atharva", "Everyday welfare, healing, peace-speech", "User-space / applied speech"]
          ]
        },
        mnemonic: {
          name: "RYSA + SBAU",
          hook: "Ṛg Yajur Sāma Atharva. Saṁhitā Brāhmaṇa Āraṇyaka Upaniṣad.",
          recite: "‘Four corpora, four layers, heard vs remembered, oral checksums.’"
        },
        lectureTips: [
          "This is check-marked — a full lecture with the oral-checksum demo.",
          "Clap a simple krama: words A B C become AB, BC on the board. Students feel chaining.",
          "Say ‘apauruṣeya’ once, define it as a traditional claim about authorship, then return to structure.",
          "Leave dating debates to optional reading. Structure scores."
        ],
        classroomActivity: {
          title: "Human krama",
          minutes: 10,
          body: "Write a 6-word English line on the board. Team A recites it continuously (saṁhitā). Team B recites word-wise (pada). Team C recites overlapping pairs (krama). Then silently change one word on a hidden card and see which team catches the mismatch first. Debrief: redundancy detects error."
        },
        studentQs: [
          "How many Vedas? (Four named. Occasional ‘fifth’ talk in popular culture is not the CCS list.)",
          "Is Upaniṣad a fifth Veda? (No. It is a layer / associated corpus, often the close of the Veda stack.)",
          "Can I write that Vedas are ‘scientific’? (Write what they conserved: metre, ritual procedure, oral engineering. Avoid blank cheque ‘science’.)"
        ],
        twomark: {
          q: "Name the four Vedas and one feature of any one.",
          outline: ["Ṛg, Yajur, Sāma, Atharva.", "One job-line (e.g. Sāma = melody)."]
        },
        fivemark: {
          q: "Explain śruti and smṛti. Why does oral pāṭha matter?",
          outline: ["Śruti = heard / Veda.", "Smṛti = remembered literature.", "Pāṭha as multiple encodings / error check.", "One named pāṭha."]
        },
        tenmark: {
          q: "Write a structured note on the four Vedas, their internal layers, and conservation.",
          outline: [
            "Four job-lines.",
            "Śukla / Kṛṣṇa Yajur in one sentence.",
            "SBAU layers.",
            "Śruti vs smṛti.",
            "Pāṭha redundancy.",
            "Close: map, not mystique."
          ]
        },
        check: [
          "I can recite RYSA.",
          "I can recite SBAU.",
          "I can distinguish śruti / smṛti.",
          "I can run the krama demo."
        ],
        youtube: [
          { title: "Four Vedas explained", search: "Rig Yajur Sama Atharva Veda difference lecture" },
          { title: "Ghana patha demonstration", search: "Ghana patha Vedic recitation error correction" }
        ]
      },
      {
        id: "u1-vedanga",
        seq: 6,
        unit: 1,
        yield: "high",
        tags: ["vedanga", "siksa", "vyakarana", "nirukta", "chandas", "jyotisa", "kalpa"],
        title: "Six Vedāṅgas",
        readAs: "Thakur Unit I — Vedāṅga (checkmark) · Mahadevan ancillary sciences",
        summary: "Six limbs that make the Veda usable: phonetics, grammar, etymology, metre, timing, and ritual procedure (including Śulba geometry). High-yield toolchain card.",
        outcomes: [
          "List all six Vedāṅgas in a stable order.",
          "Give a one-line job for each.",
          "Point Unit II (Pāṇini) and Unit III (Śulba, Jyotiṣa) from this list."
        ],
        explainer: `<p>If the Veda is a protected corpus, the <strong>Vedāṅgas</strong> are the tools without which it cannot be pronounced, parsed, timed, or performed. CCS check-marks this heading. Teach all six; do not skip Kalpa because geometry sounds ‘Unit III’ — plant the pointer.</p>
        <ol>
          <li><strong>Śikṣā</strong> — phonetics and pronunciation. Sound is data: a changed vowel can change a rite. Closest BCA cousin: phonology / speech as discrete symbols.</li>
          <li><strong>Vyākaraṇa</strong> — grammar. Pāṇini’s Aṣṭādhyāyī is the celebrity system: compact rewrite rules. Unit II will live here.</li>
          <li><strong>Nirukta</strong> — etymology and word-explanation, classically associated with Yāska. When a Vedic word is opaque, this is the gloss engine.</li>
          <li><strong>Chandas</strong> — metre / prosody, classically associated with Piṅgala. Patterns of light and heavy syllables; later the same name opens a door onto combinatorial and binary-like ideas (Unit II/III). Today: metre is a constraint language for verse.</li>
          <li><strong>Jyotiṣa</strong> — time-keeping and sky-calculation for ritual timing (and, in the wider tradition, astronomy). Unit III returns with Pañcāṅga and yantras. Today: clocks and calendars as knowledge.</li>
          <li><strong>Kalpa</strong> — procedure: ritual manuals (Śrauta, Gṛhya, Dharma) and, inside that family, <strong>Śulba Sūtras</strong> — cord geometry for altars. That is the honest bridge to Indian geometry. Do not steal Unit III’s lecture; name the folder.</li>
        </ol>
        <p><strong>Order to recite:</strong> Śikṣā, Vyākaraṇa, Nirukta, Chandas, Jyotiṣa, Kalpa. Some posters shuffle; pick one order and keep it for internals.</p>`,
        analogy: {
          title: "Compiler toolchain",
          body: "Śikṣā = lexer (tokens must be valid sounds). Vyākaraṇa = parser/grammar. Nirukta = documentation / symbol table for opaque names. Chandas = formatting language / typed patterns. Jyotiṣa = scheduler / clock. Kalpa = build and deploy scripts; Śulba is the geometry library the build calls when the altar must actually fit."
        },
        diagram: {
          type: "compare",
          title: "Six limbs — job board",
          headers: ["Vedāṅga", "Job", "Later unit"],
          rows: [
            ["Śikṣā", "Phonetics", "I (and linguistics in II)"],
            ["Vyākaraṇa", "Grammar / Pāṇini", "II"],
            ["Nirukta", "Etymology / Yāska", "I–II"],
            ["Chandas", "Metre / Piṅgala", "II–III"],
            ["Jyotiṣa", "Time / sky", "III"],
            ["Kalpa (+ Śulba)", "Procedure + altar geometry", "III"]
          ]
        },
        mnemonic: {
          name: "SVC-NJK",
          hook: "Sounds · Vyākaraṇa · Chandas — Nirukta · Jyotiṣa · Kalpa. (Or: ‘Some Very Neat Chants Just Click.’)",
          recite: "‘Six limbs: pronounce, parse, gloss, metre, time, perform.’"
        },
        lectureTips: [
          "Write six boxes in a row. Fill jobs before names if the class is sleepy.",
          "Spend extra seconds on Kalpa→Śulba so Unit III does not feel like a new planet.",
          "If you only remember one celebrity per box: Pāṇini, Yāska, Piṅgala."
        ],
        classroomActivity: {
          title: "Match the limb",
          minutes: 10,
          body: "Six envelopes on the wall: a mispronounced word, a broken sentence, an unknown Vedic noun, a clapping metre, a ‘wrong day for the rite’, a ‘altar rope too short’. Teams race to stick the right Vedāṅga on each envelope."
        },
        studentQs: [
          "Is Jyotiṣa fortune-telling in this paper? (Teach timing/astronomy first; keep predictive astrology off the 10-marker unless the question asks.)",
          "Is Yoga a Vedāṅga? (No. Darśana. Different shelf.)",
          "Why ‘limb’? (Without it the Veda-body cannot act.)"
        ],
        twomark: {
          q: "List the six Vedāṅgas.",
          outline: ["Śikṣā, Vyākaraṇa, Nirukta, Chandas, Jyotiṣa, Kalpa.", "Half a mark each if clean."]
        },
        fivemark: {
          q: "Write one-line functions of the six Vedāṅgas.",
          outline: ["Six job-lines.", "One later-unit pointer (Pāṇini or Śulba)."]
        },
        tenmark: {
          q: "Vedāṅgas as a toolchain for preserving and using the Veda.",
          outline: [
            "Define aṅga.",
            "Six-box table.",
            "Patañjali/Pāṇini only as grammar celebrity — do not derail.",
            "Kalpa–Śulba bridge.",
            "CS toolchain analogy in four lines max."
          ]
        },
        check: [
          "I can list six in order.",
          "I can give six jobs.",
          "I can name Pāṇini, Yāska, Piṅgala in the right boxes.",
          "I can point Śulba from Kalpa."
        ],
        youtube: [
          { title: "Six Vedangas", search: "Shad Vedanga Shiksha Vyakarana Nirukta Chandas Jyotisha Kalpa" },
          { title: "Sulba and Kalpa", search: "Shulba Sutra Vedanga Kalpa geometry" }
        ]
      },
      {
        id: "u1-upaveda",
        seq: 7,
        unit: 1,
        yield: "standard",
        tags: ["upaveda", "ayurveda", "dhanurveda", "gandharva", "sthapya"],
        title: "Upavedas",
        readAs: "Thakur Unit I — Upavedas · later Units IV–V applications",
        summary: "Four applied sciences commonly paired with the Vedas: Āyurveda, Dhanurveda, Gandharvaveda, Sthāpatyaveda. This is how 14 becomes 18, and how Unit I points at health, music, war-craft, and building.",
        outcomes: [
          "Name the four Upavedas.",
          "Give a one-line domain for each.",
          "State the 14→18 arithmetic."
        ],
        explainer: `<p><strong>Upavedas</strong> are the applied companions of the Veda stack — not a fifth Veda, but a traditional way of saying: this corpus of practice hangs next to śruti. The four names this paper wants on the board:</p>
        <ul>
          <li><strong>Āyurveda</strong> — life-knowledge: health, food, regimen. Unit V returns with sleep, water, and food as lecture headings. Today: name it as applied knowledge of the living body.</li>
          <li><strong>Dhanurveda</strong> — bow-knowledge: martial and defence training in the traditional list. Teach it as organised force-knowledge, not as a video-game skin.</li>
          <li><strong>Gandharvaveda</strong> — music and performance knowledge; sits beside Sāmaveda’s chant world. Useful when students think IKS is only ‘serious philosophy’.</li>
          <li><strong>Sthāpatyaveda</strong> — architecture / built form. Neighbour of Śilpa and Vāstu. Unit IV lives here.</li>
        </ul>
        <p><strong>Pairing lore</strong> (optional 2-mark colour, not a hill to die on): traditional schemes often pair Āyurveda with Ṛg or Atharva, Dhanurveda with Yajur, Gandharva with Sāma, Sthāpatya with Atharva — posters disagree. If you mention pairings, say “one traditional pairing” and keep the four names as the scoring core.</p>
        <p><strong>Curriculum job.</strong> Upavedas are how Caturdaśa becomes Aṣṭādaśa, and how later units are not random GK. Health, sound, defence, building — application layer.</p>`,
        analogy: {
          title: "Core CS + applied labs",
          body: "Discrete maths is core; HCI, networks, security, graphics are applied. Upavedas are applied labs hanging off the Veda programme spec. You can be examined on the lab names even before the lab manuals (Units IV–V) are fully taught."
        },
        diagram: {
          type: "tree",
          title: "Four applied doors",
          root: "Upaveda",
          branches: ["Āyurveda — body/health", "Dhanurveda — defence", "Gandharva — music/performance", "Sthāpatya — built form"]
        },
        mnemonic: {
          name: "ADGS",
          hook: "Āyus · Dhanus · Gandharva · Sthāpatya.",
          recite: "‘Four applied: health, bow, music, building. 14+4=18.’"
        },
        lectureTips: [
          "This can share a lecture with Vedāṅgas (Lecture 3 in the teach plan).",
          "Do not start diagnosing students with doṣas here — Unit V, and even then carefully.",
          "One sentence linking Sthāpatya to the Śilpa card they already heard."
        ],
        classroomActivity: {
          title: "Which door?",
          minutes: 8,
          body: "Read four modern headlines you invent (hospital hygiene protocol; concert training; city drainage; sports-defence academy). Students hold up A/D/G/S cards. Fast, noisy, memorable."
        },
        studentQs: [
          "Is Yoga an Upaveda? (No. Darśana / practice stack. Āyurveda is the Upaveda for health.)",
          "Is computer science an Upaveda? (No. Analogy only.)"
        ],
        twomark: {
          q: "Name the four Upavedas.",
          outline: ["Āyurveda, Dhanurveda, Gandharvaveda, Sthāpatyaveda."]
        },
        fivemark: {
          q: "What are Upavedas? How do they extend Caturdaśa?",
          outline: ["Applied companions.", "Four names + jobs.", "14+4=18."]
        },
        tenmark: {
          q: "Write notes on the Upavedas and their place in the IKS education map.",
          outline: [
            "Definition vs Vedāṅga (applied vs tooling).",
            "Four domains.",
            "Pointers to Units IV–V.",
            "Optional pairing lore with a variant warning.",
            "One line on why ‘applied’ knowledge still counts as vidyā."
          ]
        },
        check: [
          "I can recite ADGS.",
          "I can do 14+4=18.",
          "I can point Sthāpatya at Unit IV and Āyurveda at Unit V."
        ],
        youtube: [
          { title: "Four Upavedas", search: "Upaveda Ayurveda Dhanurveda Gandharva Sthapatya" }
        ]
      },
      {
        id: "u1-astika",
        seq: 8,
        unit: 1,
        yield: "high",
        tags: ["astika", "samkhya", "yoga", "nyaya", "vaiseika", "mimamsa", "vedanta"],
        title: "Āstika darśanas",
        readAs: "Thakur Unit I — Āstika systems · Mahadevan philosophical systems",
        summary: "Six Veda-accepting outlooks, taught in pairs: Sāṁkhya–Yoga, Nyāya–Vaiśeṣika, Pūrva-Mīmāṁsā and Vedānta. Āstika here is an authority flag, not a census of theism.",
        outcomes: [
          "Define Āstika as ‘accepts Veda as authority / pramāṇa’ for this paper.",
          "Name the six and the three pairs.",
          "Give one signature idea per pair."
        ],
        explainer: `<p>A <strong>darśana</strong> is a ‘way of seeing’ — a philosophical operating system. The CCS sheet asks for Indian philosophical systems in two baskets. This card is the Āstika basket.</p>
        <p><strong>Do not translate Āstika as ‘theist’.</strong> In this syllabus it means systems that accept the Veda as a valid authority (a pramāṇa), even when they argue fiercely about what the Veda is primarily <em>for</em>. Some Āstika schools have little use for a creator-God in the classroom sense (classical Sāṁkhya is the usual example). If you say ‘Āstika = believes in God,’ you will mis-mark your own internals.</p>
        <p><strong>Pair 1 — Sāṁkhya and Yoga.</strong> Sāṁkhya maps reality as <em>prakṛti</em> (the evolute world) and <em>puruṣa</em> (consciousness-witness). Yoga, in the Patañjali stream taught in colleges, is the disciplined method (eight limbs as a later Unit V hook). Same family: map + method.</p>
        <p><strong>Pair 2 — Nyāya and Vaiśeṣika.</strong> Nyāya is the logic and debate OS: how we know (perception, inference, comparison, testimony — the famous pramāṇa set). Vaiśeṣika is the category OS: how the world is typed (substance, quality, action, and the rest of the padārtha list). Type system + proof system. Unit II will reopen pramāṇa.</p>
        <p><strong>Pair 3 — Pūrva-Mīmāṁsā and Vedānta (Uttara-Mīmāṁsā).</strong> Both are Veda-hermeneutics. Pūrva-Mīmāṁsā reads the Veda as primarily action-guiding (dharma, rite). Vedānta reads the ‘end’ of the Veda (Upaniṣad) as knowledge of Brahman. Same library, different primary key. Mention that Vedānta itself has sub-schools (Advaita etc.) but do not drown a first-year BCA slot in later sectarian detail unless a student asks.</p>
        <p><strong>Board discipline.</strong> Six names, three pairs, one signature each. That is a 10-marker. Save Cārvāka/Buddha/Jina for the next card.</p>`,
        analogy: {
          title: "Three product pairs",
          body: "Sāṁkhya–Yoga is spec plus implementation of a practice stack. Nyāya–Vaiśeṣika is type theory plus theorem prover. Mīmāṁsā–Vedānta is two compilers for the same language spec — one optimises for actions, one for knowledge of the ground of being. Students do not need to ‘join’ a school; they need to know which compiler they are describing."
        },
        diagram: {
          type: "compare",
          title: "Three Āstika pairs",
          headers: ["Pair", "Signature", "One-line exam phrase"],
          rows: [
            ["Sāṁkhya–Yoga", "Map of prakṛti/puruṣa + method", "Metaphysics with a practice OS"],
            ["Nyāya–Vaiśeṣika", "Pramāṇa + padārtha", "How we know / what there is"],
            ["Mīmāṁsā–Vedānta", "Rite-hermeneutics + Brahman-knowledge", "Action vs knowledge as Veda’s centre"]
          ]
        },
        mnemonic: {
          name: "SNM pairs",
          hook: "Sāṁkhya-Yoga · Nyāya-Vaiśeṣika · Mīmāṁsā-Vedānta.",
          recite: "‘Āstika = Veda-accepting. Six names, three pairs, no theism shortcut.’"
        },
        lectureTips: [
          "Write ‘NOT = theist’ in a box before the six names.",
          "This is Lecture 5 with the Nāstika card — 30/30 minutes if you talk. Cut celebrity quotes.",
          "Nyāya pramāṇa list is the CS-friendly core; linger there."
        ],
        classroomActivity: {
          title: "Compiler badges",
          minutes: 10,
          body: "Six slips: ‘witness consciousness’, ‘inference as a valid knowledge event’, ‘atom-like particular’, ‘ritual meaning of a sentence’, ‘Brahman as Upaniṣadic centre’, ‘eight-limbed discipline’. Students pin them on the three pair columns. Wrong pins stay on the board as the next oral 2-marker."
        },
        studentQs: [
          "Is Vedānta the same as Hinduism? (Vedānta is a darśana family reading śruti. Hinduism is a much larger lived field.)",
          "Does Nyāya ‘believe the Veda’? (It accepts testimony including Veda as a pramāṇa — that is the Āstika flag.)",
          "Where is Cārvāka? (Next card.)"
        ],
        twomark: {
          q: "Name the six Āstika darśanas.",
          outline: ["Nyāya, Vaiśeṣika, Sāṁkhya, Yoga, Pūrva-Mīmāṁsā, Vedānta.", "Pairing optional for 2 marks."]
        },
        fivemark: {
          q: "What does Āstika mean here? Illustrate with one pair.",
          outline: ["Veda-accepting, not ‘theist’.", "One pair with signatures.", "Contrast one-line with Nāstika."]
        },
        tenmark: {
          q: "Explain the Āstika systems as three pairs.",
          outline: [
            "Definition of darśana and Āstika.",
            "Three pair paragraphs.",
            "One CS analogy (types/proofs or compilers).",
            "Guardrail on Vedānta ≠ whole of Indian life.",
            "Pointer to nāstika paper."
          ]
        },
        check: [
          "I can list six.",
          "I can draw three pair boxes.",
          "I will not define Āstika as theism.",
          "I can say one Nyāya pramāṇa."
        ],
        youtube: [
          { title: "Shad darshana", search: "Shad darshana Nyaya Vaisheshika Samkhya Yoga Mimamsa Vedanta" }
        ]
      },
      {
        id: "u1-nastika",
        seq: 9,
        unit: 1,
        yield: "standard",
        tags: ["nastika", "carvaka", "buddhist", "jain", "pramana"],
        title: "Nāstika streams — Cārvāka, Buddhist, Jain",
        readAs: "Thakur Unit I — Nāstika (Cārvāka, Bauddha, Jaina)",
        summary: "Syllabus wording: Cārvāka, Buddhist, Jain. Teach as Veda-non-accepting streams with different epistemologies. Accurate and respectful. Best BCA handle: what counts as a valid knowledge-event.",
        outcomes: [
          "Define Nāstika for this paper as ‘does not accept Veda as authority’.",
          "State one signature each for Cārvāka, Bauddha, Jaina.",
          "Avoid mockery and avoid flattening all three into ‘atheism’."
        ],
        explainer: `<p>CCS lists <strong>Nāstika</strong> systems as <em>Cārvāka, Buddhist, Jain</em>. In this classroom Nāstika means: these streams do not take the Veda as a binding pramāṇa. It does <em>not</em> mean ‘villains in a myth’ or ‘people without ethics.’ A professional lecturer models respect; the marks are in the distinctions.</p>
        <p><strong>Cārvāka (Lokāyata, as often taught).</strong> Perception-first empiricism in the college caricature: inference is treated with suspicion when it claims hidden ritual worlds; material flourishing is discussed without a Veda-backed afterlife. Teach it as a philosophical pressure-test: <em>what evidence is allowed?</em> Do not turn it into a joke about eating meat. Do not pretend we have a complete Cārvāka library — much is known through opponents’ reports. Say that out loud; it is intellectual honesty, which is also IKS pedagogy (CO3: discussable, not fog).</p>
        <p><strong>Buddhist stream (Bauddha).</strong> A full civilisation of philosophy, not a footnote. For a 50-minute BCA slot, pick a tiny honest core: dissatisfaction and its cessation as an analysed problem; no permanent ātman in the way Vedānta asserts one (anātman as taught); a middle path ethic; later schools (Mādhyamika, Yogācāra) exist but are optional names. Epistemology: perception and inference are heavily analysed. The point is: this is a knowledge system with monasteries, logic, and ethics — on the Indian map.</p>
        <p><strong>Jain stream (Jaina).</strong> Signature classroom handles: <em>ahiṁsā</em> as a rigorous ethic, <em>anekāntavāda</em> (many-sidedness of truth claims), <em>syādvāda</em> (conditioned predication) — teach as intellectual humility plus logic, not as ‘maybe everything is true.’ Karma as a subtle-matter doctrine in Jain teaching is different from pop-karma tweets; one sentence is enough.</p>
        <p><strong>Why BCA should care.</strong> These three disagree about <em>what counts as knowledge</em>. That is the same family of question as: what is a valid test, a valid proof, a valid log? Unit II’s pramāṇa card will echo this. Pride in IKS (CO4) includes the capacity to describe a neighbour’s system without a sneer.</p>`,
        analogy: {
          title: "Three alternative runtimes",
          body: "If Āstika schools compile against a Veda standard library, these three ship their own runtimes. Cārvāka is a ‘only what I can instrument’ runtime. Buddhist analysis is a process/impermanence runtime. Jain logic is a multi-valued / standpoint runtime. You can describe a runtime you do not install."
        },
        diagram: {
          type: "compare",
          title: "Three nāstika handles (exam-sized)",
          headers: ["Stream", "Authority flag", "One signature for internals"],
          rows: [
            ["Cārvāka", "No Veda-as-pramāṇa", "Perception-first scepticism of hidden inference"],
            ["Buddhist", "Own canon / analysis", "Dukkha analysis · anātman (as taught) · path"],
            ["Jain", "Own canon / teachers", "Ahiṁsā · anekānta · syāt predication"]
          ]
        },
        mnemonic: {
          name: "C-B-J",
          hook: "Cārvāka tests evidence · Bauddha analyses arising · Jaina many-sides + ahiṁsā.",
          recite: "‘Nāstika ≠ unethical. It means a different authority flag.’"
        },
        lectureTips: [
          "Open with the respect rule. Close with one student restating a Jain idea fairly.",
          "If the room is mixed-faith, this card is a trust test. Do not smile at Cārvāka as ‘the funny one’.",
          "Keep Buddhist and Jain history (councils, tīrthaṅkaras) to one line each unless a student is from that tradition and offers more."
        ],
        classroomActivity: {
          title: "Steelman, 3×3",
          minutes: 10,
          body: "Trios. Each person must steelman (strongest fair version) one stream in 40 seconds. The other two may only ask a clarifying question, not refute. Rotate. Debrief: if you cannot steelman it, you cannot write it in an exam either."
        },
        studentQs: [
          "Are Buddhists Indian knowledge? (Yes. The syllabus names them. Geography of origin is the subcontinent; later spread is extra.)",
          "Is Cārvāka ‘scientific’? (It is empiricist-leaning in the college sketch. ‘Scientific’ is a modern honour-word — use ‘perception-first’ instead.)",
          "Is Nāstika abusive as a label? (In this paper it is a technical folder name. In the corridor, use the community’s own names: Bauddha, Jaina, etc.)"
        ],
        twomark: {
          q: "Name the nāstika streams listed in this syllabus.",
          outline: ["Cārvāka, Buddhist, Jain.", "Optional: Nāstika = Veda not taken as authority."]
        },
        fivemark: {
          q: "Distinguish Āstika and Nāstika as used in IKS. Give one nāstika signature.",
          outline: ["Authority of Veda vs not.", "Not a theism census.", "One of C/B/J with a fair signature."]
        },
        tenmark: {
          q: "Write notes on Cārvāka, Buddhist, and Jain streams as knowledge systems.",
          outline: [
            "Folder definition.",
            "Three paragraphs, equal dignity.",
            "Epistemology contrast (perception / analysis / many-sidedness).",
            "Honesty about Cārvāka sources.",
            "CO4 close: pride includes fair description."
          ]
        },
        check: [
          "I can define Nāstika without insult.",
          "I can give three signatures.",
          "I can steelman all three.",
          "I will not collapse them into ‘atheism’."
        ],
        youtube: [
          { title: "Indian philosophy nastika", search: "Charvaka Buddhism Jainism Indian philosophy comparison" }
        ]
      },
      {
        id: "u1-purana",
        seq: 10,
        unit: 1,
        yield: "standard",
        tags: ["purana", "lakshana", "maha", "upa", "sthala"],
        title: "Purāṇas",
        readAs: "Thakur Unit I — Purāṇas (Maha, Upa, Sthala)",
        summary: "Narrative encyclopaedias of the smṛti world. Teach Maha / Upa / Sthala as a size-and-place taxonomy, and the five lakṣaṇas as the exam spine — not a binge-watch of every book.",
        outcomes: [
          "Place Purāṇa on the map (often Upāṅga; smṛti-side narrative).",
          "Explain Maha, Upa, Sthala in one line each.",
          "Recite the five lakṣaṇas."
        ],
        explainer: `<p><strong>Purāṇas</strong> are long narrative-encyclopaedic works that carry cosmology, genealogies, place-lore, and dharma-in-story. They are not Vedas. They are typically taught on the smṛti side of the line, and in the Caturdaśa map they often occupy an Upāṅga slot. Traditional counts speak of <strong>eighteen Mahāpurāṇas</strong> (and eighteen Upapurāṇas in many lists). Do not force a student to name all eighteen on day one unless you are drilling a specific 2-marker; teach the <em>count</em> and two examples (e.g. Viṣṇu, Śiva, Bhāgavata — as names, not as plot summaries).</p>
        <p><strong>Three folders on the CCS sheet:</strong> <em>Maha</em> — the great Purāṇas, the eighteen. <em>Upa</em> — lesser / supplementary Purāṇas. <em>Sthala</em> — place-Purāṇas, tied to a tīrtha or temple-region (local knowledge, pilgrimage geography). Sthala is the one first-years forget; put it in a box. It is how a civilisation stored <em>where</em> as well as <em>when</em> and <em>who</em>.</p>
        <p><strong>Five lakṣaṇas</strong> (the scoring spine): <em>sarga</em> (creation / origination of the world), <em>pratisarga</em> (re-creation / dissolution cycles), <em>vaṁśa</em> (genealogies of gods and sages), <em>manvantara</em> (intervals of Manu — cosmic-administrative eras), <em>vaṁśānucarita</em> (histories of royal lineages). A text that does this encyclopaedic job is ‘doing Purāṇa.’ That is a better 5-marker than a plot of one episode.</p>
        <p><strong>How to teach without TV serials.</strong> One story, three minutes, to show dharma-in-narrative — then back to lakṣaṇas. Purāṇa is a knowledge vehicle (memory, geography, ethics), not a substitute for a streaming app.</p>`,
        analogy: {
          title: "Wiki + changelog + place pages",
          body: "Mahāpurāṇa is a huge wiki with cosmology templates. Upapurāṇa is a smaller project wiki. Sthala is a location page with history. The five lakṣaṇas are required headings in the style guide: origin, reset, people-tree, era-clock, dynasty log. If a page misses the style guide, tradition may still love it — but the exam wants the style guide."
        },
        diagram: {
          type: "tree",
          title: "Purāṇa taxonomy + five headings",
          root: "Purāṇa",
          branches: ["Maha (18)", "Upa (supplement)", "Sthala (place)", "Lakṣaṇas: sarga, pratisarga, vaṁśa, manvantara, vaṁśānucarita"]
        },
        mnemonic: {
          name: "SPVMV",
          hook: "Sarga · Pratisarga · Vaṁśa · Manvantara · Vaṁśānucarita.",
          recite: "‘Create, re-create, family tree, Manu-era, kings’ stories.’"
        },
        lectureTips: [
          "Write the five lakṣaṇas as a numbered list and leave it on the board all hour.",
          "Sthala is the discriminator — ask it orally.",
          "If a student starts a 20-minute myth, smile and time-box to 90 seconds."
        ],
        classroomActivity: {
          title: "Style-guide audit",
          minutes: 10,
          body: "Give a 6-line fake ‘mini-Purāṇa’ you invent (a town, a flood, a family, a king). Teams tick which lakṣaṇas are present and which are missing. Then they add one sentence to fill a hole. Teaches the template, not trivia."
        },
        studentQs: [
          "Are Purāṇas ‘history’? (They conserve memory, geography, and values in narrative form. Do not dump them into Rankean history or into ‘mere myth’ — teach the lakṣaṇa job.)",
          "Eighteen names? (Know the count; two examples; full list is extra drill.)"
        ],
        twomark: {
          q: "What are the five lakṣaṇas of a Purāṇa?",
          outline: ["Sarga, pratisarga, vaṁśa, manvantara, vaṁśānucarita.", "One-line gloss if space."]
        },
        fivemark: {
          q: "Distinguish Mahāpurāṇa, Upapurāṇa, and Sthala-purāṇa.",
          outline: ["Great / eighteen.", "Supplementary.", "Place-linked.", "One line on smṛti placement."]
        },
        tenmark: {
          q: "Purāṇas as a knowledge system: taxonomy and lakṣaṇas.",
          outline: [
            "Not Veda; smṛti / Upāṅga neighbourhood.",
            "Maha–Upa–Sthala.",
            "Five lakṣaṇas with glosses.",
            "One example of ‘knowledge in story’.",
            "Guardrail: no serial recap."
          ]
        },
        check: [
          "I can recite five lakṣaṇas.",
          "I can explain Sthala.",
          "I know the ‘eighteen’ count without listing all names.",
          "I can run the style-guide audit."
        ],
        youtube: [
          { title: "Puranas pancha lakshana", search: "Puranas pancha lakshana sarga pratisarga" }
        ]
      },
      {
        id: "u1-itihasa",
        seq: 11,
        unit: 1,
        yield: "standard",
        tags: ["itihasa", "ramayana", "mahabharata", "dharma"],
        title: "Itihāsa — Rāmāyaṇa and Mahābhārata",
        readAs: "Thakur Unit I — Itihāsa · Mahadevan narrative/knowledge chapters as applicable",
        summary: "Itihāsa as ‘thus it was’ — the two great narrative vehicles of dharma, state, kin, and choice. Teach them as knowledge systems that travel in story, not as TV plot recap.",
        outcomes: [
          "Define Itihāsa vs Purāṇa in one clean contrast.",
          "Name Rāmāyaṇa and Mahābhārata as the pair on this paper.",
          "Give two examples of knowledge carried (kingship, kin-dharma, counsel)."
        ],
        explainer: `<p><strong>Itihāsa</strong> is traditionally glossed as ‘so indeed it was’ — narrative that claims a past and teaches through it. On this CCS paper the pair is <strong>Rāmāyaṇa</strong> and <strong>Mahābhārata</strong>. A famous line taught in this neighbourhood is that Veda is afraid of being misread by one who has not approached it via Itihāsa–Purāṇa — i.e. story is a <em>user interface</em> for values and institutions. You may cite the idea; you need not chant a Sanskrit verse unless you are sure of it.</p>
        <p><strong>Rāmāyaṇa as a knowledge vehicle.</strong> Not ‘the good prince serial.’ Board handles: maryādā (a constraint language for royal conduct), vanavāsa as a stress-test of promises, counsel (Vibhīṣaṇa, Hanumān) as information flow in a campaign, and later Unit V’s public-administration hook. Pick two scenes max.</p>
        <p><strong>Mahābhārata as a knowledge vehicle.</strong> Not ‘war plus Gītā quote dump.’ Board handles: kin vs polity, the cost of silence (Vidura’s counsel ignored), dharma as conflict of duties rather than a sticker, and the Gītā as a philosophical module <em>inside</em> the epic (do not let it eat the whole hour). The epic is an encyclopaedia of dilemmas.</p>
        <p><strong>Itihāsa vs Purāṇa.</strong> Rough classroom contrast: Itihāsa is framed as human-scale dynastic narrative with a ‘it happened’ claim; Purāṇa leans encyclopaedic-cosmological with the five lakṣaṇas. They leak into each other in real manuscripts. For marks: two folders, two jobs, one leak sentence.</p>
        <p><strong>Classroom ethics.</strong> Students will bring film versions. Honour the love; examine the syllabus object. No community-baiting. CO4 again: pride without turning classmates into avatars of a war.</p>`,
        analogy: {
          title: "Narrative as a teaching API",
          body: "A well-written postmortem or a case-study in a B-school is knowledge in story form. Itihāsa is a civilisation-scale case library: kingship bugs, kin-protocol bugs, counsel ignored, recovery after failure. The Gītā is a module imported into the Mahābhārata repo. You can study the API (what dilemma it exposes) without binge-watching the runtime (the serial)."
        },
        diagram: {
          type: "compare",
          title: "Two epics — exam handles, not plot",
          headers: ["Itihāsa", "Knowledge handles for BCA-1003 T", "Later hook"],
          rows: [
            ["Rāmāyaṇa", "Promise-keeping, royal constraint, counsel in campaign", "Unit V administration"],
            ["Mahābhārata", "Conflict of duties, cost of silence, polity vs kin", "Ethics / Gītā as inner module"]
          ]
        },
        mnemonic: {
          name: "R+M",
          hook: "Rāmāyaṇa = constraint &amp; promise. Mahābhārata = dilemma &amp; counsel.",
          recite: "‘Itihāsa teaches through a claimed past. Two books on this paper. Not a third serial.’"
        },
        lectureTips: [
          "Ban 15-minute plot recap. Timer on the phone if needed.",
          "Ask: ‘What knowledge does this scene store?’ That question saves the hour.",
          "If someone only knows a film, ask them to name one dilemma the film still kept."
        ],
        classroomActivity: {
          title: "Dilemma cards",
          minutes: 10,
          body: "Two prompts (keep them dry): (1) A leader’s promise hurts the present population — keep or renegotiate? (2) A family vote will wreck an institution — speak or stay silent? Teams must answer as ‘Rāmāyaṇa-handle’ or ‘Mahābhārata-handle’ and justify in three lines. No character-bashing."
        },
        studentQs: [
          "Is the Gītā a Veda? (It is taught as part of the Bhīṣma-parvan neighbourhood of the Mahābhārata — smṛti-side, philosophical module.)",
          "Can I write ‘Itihāsa is true history’? (Write: traditional narrative claiming a past, used to teach dharma and institutions. Leave courtroom history to historians.)"
        ],
        twomark: {
          q: "What is Itihāsa in this paper?",
          outline: ["Rāmāyaṇa and Mahābhārata as narrative knowledge vehicles.", "‘Thus it was’ + dharma teaching."]
        },
        fivemark: {
          q: "Distinguish Itihāsa and Purāṇa.",
          outline: ["Itihāsa: two epics, human-scale claimed past.", "Purāṇa: encyclopaedic, lakṣaṇas, Maha/Upa/Sthala.", "Leak sentence: they share narrative DNA."]
        },
        tenmark: {
          q: "Itihāsa as a knowledge system. Illustrate from both epics without story-dumping.",
          outline: [
            "Definition and UI-for-Veda idea.",
            "Rāmāyaṇa: two handles.",
            "Mahābhārata: two handles.",
            "Contrast Purāṇa.",
            "CO4 classroom ethic."
          ]
        },
        check: [
          "I can define Itihāsa without a plot.",
          "I can contrast Purāṇa in two lines.",
          "I have two handles per epic.",
          "I can stop a recap politely."
        ],
        youtube: [
          { title: "Itihasa and Purana difference", search: "Itihasa vs Purana Indian knowledge" }
        ]
      },
      {
        id: "u1-niti",
        seq: 12,
        unit: 1,
        yield: "standard",
        tags: ["niti", "subhashita", "ethics", "artha", "classroom"],
        title: "Nīti Śāstras and Subhāṣitas",
        readAs: "Thakur Unit I — Nīti Śāstras, Subhāṣitas",
        summary: "Portable ethics and statecraft aphorisms. Teach nīti as practical right-conduct / policy wisdom, and subhāṣita as a compressed, memorizable packet. Classroom-usable; not a sermon pile.",
        outcomes: [
          "Define nīti vs vidyā vs kalā in one line each.",
          "Explain why aphorism is a storage format.",
          "Use two classroom-safe maxims without claiming a fake Sanskrit quote."
        ],
        explainer: `<p><strong>Nīti</strong> is practical wisdom about conduct — of a person, a court, a king. Nīti-śāstras (the Hitopadeśa / Pañcatantra neighbourhood, later Arthaśāstra as a heavier cousin in Unit V) store policy and ethics in story-plus-maxim form. This is not ‘moral science period’ in the school sense. It is a knowledge format: <em>what should an agent do under constraint?</em></p>
        <p><strong>Subhāṣita</strong> means ‘well-spoken’ — a polished verse or sentence built to travel. Compression + memorability + ethical payload. For BCA: it is a tweet-sized packet with checksums of metre (when in verse) and a point. The classroom use is to give students a few portable lines they can explain, not a WhatsApp forward dump of unverified Sanskrit.</p>
        <p><strong>How we will quote.</strong> Prefer ideas you can paraphrase in English and attribute as ‘a common nīti idea’ unless you have verified the verse from a printed subhāṣita collection in your hand. Fake Sanskrit on a slide is a professionalism fail. Two safe themes: (1) company shapes conduct (choose colleagues as you choose libraries); (2) knowledge unused is a lamp in a closed box — vidyā asks for application (CO3).</p>
        <p><strong>Link forward.</strong> Unit V’s Kautilya is nīti at state scale. Unit I only installs the format: practical ethics, compressed, teachable at 9 a.m. to a sleepy first year.</p>`,
        analogy: {
          title: "Lint rules and commit messages",
          body: "A good linter encodes ‘how we do things here’ in short rules. A good commit message is a subhāṣita for a diff. Nīti-śāstra is an organisation’s engineering handbook written as fables. You still need the big spec (dharma, artha, Veda-map) — the aphorism is the on-call cheat sheet."
        },
        diagram: {
          type: "vflow",
          title: "From situation to portable line",
          steps: ["Situation / constraint", "Nīti judgement (what an agent should do)", "Story wrapper (Pañcatantra-style)", "Subhāṣita packet (one travelling line)"]
        },
        mnemonic: {
          name: "P-C-P",
          hook: "Practical · Compressed · Portable.",
          recite: "‘Nīti is policy-ethics. Subhāṣita is the packet. Verify before you chant.’"
        },
        lectureTips: [
          "Model citation hygiene: one English paraphrase you stand behind > five unverified verses.",
          "Invite students to write an original two-line nīti about lab plagiarism. That is IKS as living practice, not costume.",
          "Do not turn this into a political rally. Practical ethics for 18-year-olds: speech, company, study, power."
        ],
        classroomActivity: {
          title: "Write a subhāṣita (English is legal)",
          minutes: 10,
          body: "Each pair writes a 12-word max rule for ‘how we debug together’ or ‘how we treat a classmate’s question.’ Then they add a 6-word title. Vote two onto the class wall. Debrief: you just did compression + ethics + transmission."
        },
        studentQs: [
          "Is Chanakya Niti the whole paper? (It is a popular nīti stream. Unit V handles Arthaśāstra properly. Today: format.)",
          "Can I answer in Hindi maxims? (If accurate and explained. Explanation scores; decoration does not.)"
        ],
        twomark: {
          q: "What is a subhāṣita?",
          outline: ["A well-spoken, portable sentence/verse carrying a point.", "Compression + ethics/knowledge."]
        },
        fivemark: {
          q: "Explain nīti-śāstra as practical knowledge. Give two uses in student life.",
          outline: ["Definition.", "Story+maxim format.", "Company / speech / study as examples.", "Not a sermon: constraint-aware action."]
        },
        tenmark: {
          q: "Nīti and subhāṣita in the IKS map. How do they store and transmit practical ethics?",
          outline: [
            "Place vs Veda / darśana (applied conduct).",
            "Nīti-śāstra format.",
            "Subhāṣita as packet.",
            "Citation hygiene.",
            "Bridge to Kautilya (Unit V).",
            "One original example from classroom life."
          ]
        },
        check: [
          "I can define nīti and subhāṣita.",
          "I will not paste unverified Sanskrit.",
          "I can run the 12-word activity.",
          "I can point to Unit V Arthaśāstra."
        ],
        youtube: [
          { title: "Subhashita as a genre", search: "Subhashita Sanskrit well spoken verse" }
        ]
      },
      {
        id: "u1-revision",
        seq: 13,
        unit: 1,
        yield: "high",
        tags: ["revision", "map", "internals", "six lectures"],
        title: "Unit I revision map",
        readAs: "Whole of Thakur Unit I · Mahadevan opening + Veda/darśana chapters as used",
        summary: "One-page teaching flow for the six Unit I hours, plus sample internal questions. Seal this when you can redraw the folder tree and the check-marked four from memory.",
        outcomes: [
          "Redraw Caturdaśa + Kalā + Śilpa + darśana baskets in five minutes.",
          "Assign each heading to a lecture slot.",
          "Set a 25-mark internal without copying a bazaar guidebook."
        ],
        explainer: `<p><strong>Six-lecture flow (also on the Teach notes tab).</strong> L1: What is IKS + Caturdaśa map. L2: Four Vedas + oral pāṭha. L3: Vedāṅgas + Upavedas. L4: 64 Kalās + Śilpa (the check-marked twin). L5: Āstika pairs + Nāstika trio. L6: Purāṇa lakṣaṇas, Itihāsa handles, Nīti packets, then a 20-minute quiz.</p>
        <p><strong>Must-draw artefacts.</strong> (1) 4+6+4(+4). (2) RYSA and SBAU. (3) Six Vedāṅga job boxes. (4) Kalā tree + Śilpa P-M-P. (5) Three Āstika pairs + C-B-J. (6) Five Purāṇa lakṣaṇas. If a student can draw those six, they can pass a fair internal.</p>
        <p><strong>High-yield reminder.</strong> Printed syllabus checkmarks: 64 Kalās, Śilpa Śāstra, Four Vedas, Vedāṅga. Those four get more board time and more 10-mark likelihood in a sane paper. Still teach Purāṇa/Itihāsa/Nīti — they are cheap 2/5s if the lists are clean.</p>
        <p><strong>Sample internal (25).</strong> Section A: 5 × 2 marks — list Vedāṅgas; 14 counting; śruti/smṛti; nāstika names; five lakṣaṇas. Section B: 1 × 5 — Kalās as taxonomy. Section C: 1 × 10 — Four Vedas + layers + pāṭha. Adjust to your college pattern. Word questions yourself so you never need a leaked PDF.</p>
        <p><strong>After Unit I.</strong> Students should feel the later units as files in folders they already own: Pāṇini under Vyākaraṇa, Śulba under Kalpa, temple under Sthāpatya/Śilpa, Āyurveda under Upaveda, Kautilya under Nīti-at-scale.</p>`,
        analogy: {
          title: "Sprint review",
          body: "Unit I is sprint 0: repo layout, branching model, lint rules. Units II–V are features. A revision map is the architecture diagram you redraw before you add code. If you cannot draw the folders, you will duplicate them later (teaching Yoga twice, missing Śulba, etc.)."
        },
        diagram: {
          type: "flow",
          title: "Six hours",
          steps: ["L1 Map", "L2 Vedas", "L3 Tool+apply", "L4 Skills+making", "L5 Darśana", "L6 Story+ethics+quiz"]
        },
        mnemonic: {
          name: "MAP-TOOL-MAKE-SEE-TELL",
          hook: "Map · Veda · Tool · Make · See · Tell.",
          recite: "‘Folders first. Checkmarks extra. Quiz on L6.’"
        },
        lectureTips: [
          "Project the coverage table from Overview, then hide it and redraw.",
          "Collect the Lecture 1 sticky-note questions and answer three of them live.",
          "Seal Unit I cards only after this revision hour, not after Lecture 1 excitement."
        ],
        classroomActivity: {
          title: "Blank-map relay",
          minutes: 12,
          body: "Four teams, four boards: (A) 14/18, (B) Vedas+layers, (C) six aṅgas, (D) darśana pairs. Two minutes each, then rotate to correct the previous team in a different colour. Photograph. That photograph is your next tutorial’s slide 1."
        },
        studentQs: [
          "What is ‘high-yield’? (Check-marked + structurally central. Not a promise from the examiner.)",
          "Are Units II–V in this internal? (Not if you are testing Unit I. Say so in the question paper heading.)"
        ],
        twomark: {
          q: "Name four Unit I headings marked as high-emphasis on the CCS sheet used for this bench.",
          outline: ["64 Kalās, Śilpa Śāstra, Four Vedas, Vedāṅga.", "Any four check-marked / central names if the paper varies."]
        },
        fivemark: {
          q: "Propose a 6-lecture plan for Unit I with one learning target per hour.",
          outline: ["L1 map.", "L2 Veda+pāṭha.", "L3 aṅga+upaveda.", "L4 kalā+śilpa.", "L5 darśana.", "L6 purāṇa–itihāsa–nīti."]
        },
        tenmark: {
          q: "Draw the Unit I knowledge map and justify why later BCA-1003 T units can be filed inside it.",
          outline: [
            "Caturdaśa sketch.",
            "Kalā/Śilpa as skill-making.",
            "Darśana as how-we-know.",
            "Pointers: Pāṇini, Śulba, Vāstu, Āyurveda, Arthaśāstra.",
            "One CO4 line."
          ]
        },
        check: [
          "I can redraw six artefacts in five minutes.",
          "I can assign 13 cards to 6 hours.",
          "I have a 25-mark internal drafted in my own words.",
          "I know what is still Coming next in Units II–V."
        ],
        youtube: [
          { title: "IKS unit 1 recap searches", search: "Indian knowledge system Vedas Vedanga darshana revision" }
        ]
      }
    ]
  };
})(window);
