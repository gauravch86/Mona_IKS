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
        explainer: window.IKSGallery.what(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "After the Taittirīya instruction and the Gītā line: a computing student already knows that ‘system’ is not a slogan. Use that familiarity last. Do not let it rename śruti, kalā, or dharma."
        },
        diagram: { type: "named", id: "gcta", title: "Generate · Classify · Transmit · Apply" },
        mnemonic: {
          name: "G-C-T-A",
          hook: "Generate · Classify · Transmit · Apply.",
          recite: "‘IKS is the Indian stack for making, sorting, passing on, and using knowledge — not a slogan pack.’"
        },
        lectureTips: [
          "Write the course code and 25+75 in minute one. Ban ‘India invented everything.’",
          "CO4 in one breath: pride, human rights, sustainability."
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
        summary: "Fourteen established seats of learning: four Vedas, six Vedāṅgas, four Upāṅgas. Eighteen when the four Upavedas are counted. A curriculum tree, drawn before the names are fought over.",
        outcomes: [
          "Draw 4 + 6 + 4 = 14, and 14 + 4 = 18.",
          "Name the four Upāṅgas in a widely taught list and admit variants.",
          "File Pāṇini, Śulba, temple, and Āyurveda on the tree."
        ],
        explainer: window.IKSGallery.caturdasa(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "If you have ever looked at a university’s programme specification — cores, tool-courses, electives, applied labs — you already understand why a civilisation bothered to count fourteen seats and then eighteen. The bridge is allowed after the Sanskrit names are in the mouth."
        },
        diagram: { type: "named", id: "caturdasa-tree", title: "Caturdaśa tree" },
        mnemonic: {
          name: "4–6–4–(+4)",
          hook: "Four heard · six limbs · four near-limbs · optional four applied.",
          recite: "‘Fourteen is 4+6+4. Eighteen adds the four Upavedas. Variants live in the Upāṅga slot.’"
        },
        lectureTips: [
          "Numbers on the board before names; variants go in a small box, not a fight.",
          "Leave Pāṇini, Śulba, temple, Āyurveda as labelled fruits on the tree."
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
        summary: "Catuḥṣaṣṭi kalā: a classical catalogue of sixty-four trained skills. Full numbered list (Sanskrit and English), seven pedagogical rooms, temple–bronze–painting–dance heritage. Lists vary; this page keeps one spine and shows every item.",
        outcomes: [
          "Define kalā beside vidyā — skill beside a seat of knowing.",
          "Point to the seven-cluster map and land any numbered kalā in a room.",
          "Name three living or built witnesses (e.g. Naṭarāja bronze, Ajanta, a temple sculpture programme)."
        ],
        explainer: window.IKSGallery.kalas(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "A competency matrix that refuses to treat music, metal, cooking, and coded speech as different species of dignity is older than the modern university’s split between ‘fine art’ and ‘vocational.’ After the Sanskrit names, a computing student may notice cipher and machine-kalās — then must put them back among garlands."
        },
        diagram: { type: "named", id: "kalas-clusters", title: "64 Kalās in seven clusters" },
        mnemonic: {
          name: "Seven rooms",
          hook: "Performing · Visual · Domestic · Craft · Language · Social · Nature-and-care.",
          recite: "‘Sixty-four is a catalogue of competence. The mandala holds all of them. Lists vary; the spine is Vātsyāyana’s tradition.’"
        },
        lectureTips: [
          "Project the numbered table; walk three clusters slowly; land in Naṭarāja, Ajanta, and one temple wall.",
          "Coaching for the 20-minute arc lives under Teach notes — this card is the chapter."
        ],
        classroomActivity: {
          title: "Place the kalā",
          minutes: 10,
          body: "Call twelve numbers from the table. Students stand under the seven cluster titles on the wall. Then one volunteer must walk from nṛtya (3) to dhātu-vāda (38) to ālekhya (4) using the heritage figures on the card — bronze, temple, painting."
        },
        studentQs: [
          "Must I memorise all 64? (Know the seven rooms and a dozen names cleanly; the full table is here to be used, not feared.)",
          "Is coding a kalā? (Not on the classical list. Yantra-mātṛkā and mlecchita-vikalpa are the nearest doors — still only two of sixty-four.)",
          "Kalā vs vidyā? (Vidyā = organised knowledge seat; kalā = practised skill. They meet in people.)"
        ],
        twomark: {
          q: "What are the 64 Kalās? Name two from different clusters.",
          outline: ["Traditional catalogue of trained skills (catuḥṣaṣṭi kalā).", "e.g. nṛtya (performing) and takṣaṇa or dhātu-vāda (craft)."]
        },
        fivemark: {
          q: "Explain kalā as a taxonomy of competence. Use one pedagogical cluster with at least four named arts.",
          outline: ["Define kalā vs vidyā.", "Lists vary; name the Vātsyāyana spine.", "One full cluster (names + English).", "One heritage witness."]
        },
        tenmark: {
          q: "Write a structured note on the 64 Kalās: definition, the seven-room map, and how the arts appear in temple, bronze, and painting traditions.",
          outline: [
            "Kalā vs vidyā; catuḥṣaṣṭi; lists vary.",
            "Seven clusters with two examples each (cover all rooms).",
            "Deep dive: nṛtya + Naṭarāja / living dance.",
            "Deep dive: ālekhya + Ajanta; takṣaṇa/vāstu + a named temple.",
            "Relation to Śilpa.",
            "Close: why counting skills is a knowledge act."
          ]
        },
        check: [
          "I can define kalā without saying ‘dance only’.",
          "I can show the seven-cluster mandala and land any number in a room.",
          "I can name the list-variance honestly.",
          "I can point at bronze, mural, and temple as kalā-witnesses."
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
        summary: "Śilpa as the śāstra of making: proportion, material, process. Nāgara, Drāviḍa, Vesara with named temples; Mānasāra and Mayamata on the shelf; bronze, mural, and the cut mountain at Ellora as witnesses.",
        outcomes: [
          "Define Śilpa as making-knowledge, neighbour of kalā, sthāpatya, and vāstu.",
          "Sketch Nāgara / Drāviḍa / Vesara with one named temple each.",
          "Point at iconometry, lost-wax bronze, and a sculpture programme."
        ],
        explainer: window.IKSGallery.silpa(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "A design system (spacing, component, constraint) is a faint cousin of tāla and material temperament. After the temples have been named, that sentence is allowed. Before they are named, it is a theft of the hour."
        },
        diagram: { type: "named", id: "temple-styles", title: "Three temple dialects" },
        mnemonic: {
          name: "P-M-P",
          hook: "Proportion · Material · Process.",
          recite: "‘Śilpa is the spec for making. Kalā is the skill. Vāstu is the spatial brief (later).’"
        },
        lectureTips: [
          "Walk Nāgara–Drāviḍa–Vesara on the figures; keep Kalā / Śilpa / Vāstu as three courtyard neighbours.",
          "Park ‘secret codes in temples.’ Measure and making are the paper."
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
          q: "Explain Śilpa Śāstra as making-knowledge. Illustrate with one temple style and one named building.",
          outline: ["Definition (proportion, material, process).", "Nāgara or Drāviḍa or Vesara with one named temple.", "Neighbour: kalā vs vāstu."]
        },
        tenmark: {
          q: "Discuss Śilpa Śāstra in the IKS map. Relate it to the 64 Kalās and to Nāgara–Drāviḍa–Vesara with named examples.",
          outline: [
            "Making-knowledge; P-M-P.",
            "Mānasāra / Mayamata as named treatises.",
            "Three dialects + Khajuraho / Thanjāvūr / Paṭṭadakal (or kin).",
            "Chola bronze or Ellora as process-witness.",
            "Kalā = skill; Śilpa = śāstra; Vāstu later."
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
        summary: "Four Vedas as four temperaments of śruti; the Saṁhitā–Brāhmaṇa–Āraṇyaka–Upaniṣad river; oral pāṭha as a vow of sound; ten principal Upaniṣads as doorways. A museum chapter, not a software metaphor.",
        outcomes: [
          "Give each Veda a character: hymn, rite, chant, household-and-peace.",
          "Walk the inner river to the Upaniṣad without calling the Upaniṣad a fifth Veda.",
          "Name saṁhitā, pada, krama (and jaṭā, ghana) as the weave of recitation.",
          "Place four mahāvākyas in their Upaniṣads."
        ],
        explainer: window.IKSGallery.vedas(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "After the hymn has been heard as a hymn, a student of systems may notice that a civilisation which refuses to lose a syllable has trained human memory as an instrument of fidelity. That observation is a guest. It does not get to rename the Veda."
        },
        diagram: { type: "named", id: "veda-river", title: "The inner river" },
        mnemonic: {
          name: "RYSA + the river + four lines",
          hook: "Ṛg Yajur Sāma Atharva. Saṁhitā Brāhmaṇa Āraṇyaka Upaniṣad. Four mahāvākyas in four houses.",
          recite: "‘Four faces of śruti; one inward river; sound kept by vow.’"
        },
        lectureTips: [
          "Begin with Ṛgveda 1.1.1; walk four characters; then the river; then two Upaniṣadic rooms. Pāṭha last, as reverence, not as a trick.",
          "Date-fights and ‘Vedas are scientific’ slogans are off this card. Structure and hearing score."
        ],
        classroomActivity: {
          title: "Four voices, one river",
          minutes: 12,
          body: "Four volunteers speak one sentence in the voice of Ṛg (a calling), Yajur (a formula for doing), Sāma (the same line hummed), Atharva (a peace or healing wish). Then the class places that line on the river: is it still saṁhitā, or has someone begun to ask an Upaniṣadic question about it?"
        },
        studentQs: [
          "How many Vedas? (Four named saṁhitās. Popular ‘fifth Veda’ talk is not the CCS list.)",
          "Is the Upaniṣad a fifth Veda? (No. It is a depth of the same śruti-river.)",
          "May I write that Vedas are ‘scientific’? (Write what they conserved: metre, rite, oral exactitude, inquiry. Avoid a blank cheque.)"
        ],
        twomark: {
          q: "Name the four Vedas and give one character-line for any one.",
          outline: ["Ṛg, Yajur, Sāma, Atharva.", "e.g. Sāma — where the ṛk becomes song."]
        },
        fivemark: {
          q: "Explain śruti and smṛti. How does pāṭha keep the Veda?",
          outline: ["Śruti = heard / Veda.", "Smṛti = remembered literature.", "Guru-śiṣya, śākhā.", "One named pāṭha as a weave of sound."]
        },
        tenmark: {
          q: "Write a structured note on the four Vedas, the Saṁhitā–Brāhmaṇa–Āraṇyaka–Upaniṣad river, and oral conservation. Include two Upaniṣadic doorways.",
          outline: [
            "Four characters (not four slogans).",
            "Śukla / Kṛṣṇa Yajur in one sentence.",
            "The inner river with named Brāhmaṇa or Āraṇyaka examples.",
            "Two mukhya Upaniṣads and one mahāvākya placed.",
            "Pāṭha as vow, not as a modern metaphor.",
            "Close: map and reverence together."
          ]
        },
        check: [
          "I can recite RYSA as four temperaments.",
          "I can walk SBAU as one river.",
          "I can distinguish śruti / smṛti without insulting either.",
          "I can name ten mukhya Upaniṣads as rooms, and four mahāvākyas as hinges."
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
        summary: "Six living limbs of the vedapuruṣa: pronunciation, grammar, etymology, metre, timing, procedure. A body-map, a function table, and pointers to Pāṇini and the Śulba.",
        outcomes: [
          "List the six Vedāṅgas in a stable order.",
          "Place each on the vedapuruṣa (nose, mouth, ear, feet, eyes, hands).",
          "Give a one-line job and one later-unit pointer."
        ],
        explainer: window.IKSGallery.vedanga(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "Only after the limbs are named: a body that cannot pronounce, parse, time, or perform cannot keep a sacred corpus. That is why the aṅgas were counted as life-support for śruti — not as optional extras."
        },
        diagram: { type: "named", id: "vedapurusa", title: "Vedapuruṣa" },
        mnemonic: {
          name: "SVC-NJK",
          hook: "Sounds · Vyākaraṇa · Chandas — Nirukta · Jyotiṣa · Kalpa. (Or: ‘Some Very Neat Chants Just Click.’)",
          recite: "‘Six limbs: pronounce, parse, gloss, metre, time, perform.’"
        },
        lectureTips: [
          "Draw the body; fill jobs; then names. Linger on Kalpa→Śulba so Unit III is not a new planet.",
          "One celebrity per box is enough: Pāṇini, Yāska, Piṅgala."
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
          q: "Vedāṅgas as the living limbs of the Veda. Explain with the traditional body-map.",
          outline: [
            "Vedapuruṣa verses in English.",
            "Six-box table with limb + job.",
            "Pāṇini and Yāska in the right boxes.",
            "Kalpa–Śulba bridge.",
            "Why ‘limb’ is not a metaphor you can skip."
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
        explainer: window.IKSGallery.upaveda(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "After the four names: a university still distinguishes core seats from applied faculties — medicine, music, architecture, defence studies. The Sanskrit doors are older than that office-map. Use the comparison last."
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
        summary: "Six Veda-accepting darśanas in three pairs. Āstika is an authority flag, not a theism census. Signatures you can lecture from.",
        outcomes: [
          "Define Āstika as ‘accepts Veda as pramāṇa’ for this paper.",
          "Name the six and the three pairs.",
          "Give one signature per pair without drowning in later sects."
        ],
        explainer: window.IKSGallery.astika(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "After the pairs are named: two schools can share a library and still compile different centres of gravity — action (Mīmāṁsā) or knowledge of Brahman (Vedānta). The sentence is a guest."
        },
        diagram: {
          type: "compare",
          title: "Three Āstika pairs",
          headers: ["Pair", "Signature", "Exam phrase"],
          rows: [
            ["Sāṁkhya–Yoga", "Map of prakṛti/puruṣa + method", "Metaphysics with a practice"],
            ["Nyāya–Vaiśeṣika", "Pramāṇa + padārtha", "How we know / what there is"],
            ["Mīmāṁsā–Vedānta", "Rite-hermeneutics + Brahman-knowledge", "Action vs knowledge as the Veda’s centre"]
          ]
        },
        mnemonic: {
          name: "SNM pairs",
          hook: "Sāṁkhya-Yoga · Nyāya-Vaiśeṣika · Mīmāṁsā-Vedānta.",
          recite: "‘Āstika = Veda-accepting. Six names, three pairs, no theism shortcut.’"
        },
        lectureTips: [
          "Write ‘Āstika ≠ theist’ before the six names. Nyāya’s pramāṇa list is the clearest hour-saver.",
          "Save Cārvāka, Bauddha, Jaina for the next card."
        ],
        classroomActivity: {
          title: "Signature slips",
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
            "One careful modern bridge (how knowing is justified) — after the pairs, not instead of them.",
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
        explainer: window.IKSGallery.nastika(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "After fair portraits: these three disagree about what counts as a valid knowing. That family of question is older than any laboratory — and it is why they sit on an IKS paper."
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
          "Do not smile at Cārvāka as ‘the funny one.’"
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
        summary: "Eighteen named Mahāpurāṇas, five lakṣaṇa-rooms, Vaiṣṇava–Śaiva–Śākta houses, daśāvatāra as a path of time, and sthala-lore you can still walk. Smṛti-side encyclopaedias of Sanātana memory.",
        outcomes: [
          "Place Purāṇa as smṛti / Upāṅga — not a fifth Veda.",
          "Walk the five lakṣaṇas with one living example each.",
          "Give any of the eighteen a one-line identity; name the Śiva/Vāyu fork.",
          "Sketch daśāvatāra as cosmology-in-story; name one sthala (Kāśī, Kāñcī, or Rameśvara)."
        ],
        explainer: window.IKSGallery.purana(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "After the five rooms and the eighteen names: a civilisation that stores origin, era, family, king, and holy place in one genre is doing encyclopaedic memory. That sentence is a guest. It does not get to rename Purāṇa."
        },
        diagram: { type: "named", id: "purana-lakshanas", title: "Pañcalakṣaṇa" },
        mnemonic: {
          name: "SPVMV",
          hook: "Sarga · Pratisarga · Vaṁśa · Manvantara · Vaṁśānucarita.",
          recite: "‘Create, re-create, family tree, Manu-era, kings’ stories.’"
        },
        lectureTips: [
          "Project the eighteen as a gallery; walk three houses; land in one sthala and one avatāra image.",
          "Coaching for the hour lives under Teach notes — this card is the chapter."
        ],
        classroomActivity: {
          title: "Five rooms, one town",
          minutes: 12,
          body: "Pairs take a place they know (a river, a temple-street, a hill). They write one sentence each for sarga, pratisarga, vaṁśa, manvantara, and vaṁśānucarita as if that place had a Purāṇa. Read two aloud. The point is the floor-plan, not invention-as-scripture."
        },
        studentQs: [
          "Are Purāṇas ‘history’? (They conserve memory, geography, and values in narrative form. Neither Rankean history nor ‘mere myth’ — walk the lakṣaṇa job and one sthala.)",
          "Must I memorise all eighteen? (They are on the card as identities. Know the five rooms, the three houses, the path of ten, and as many names as your mouth will hold — Skanda, Bhāgavata, Matsya, and the Śiva/Vāyu fork at minimum.)"
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
            "Five lakṣaṇas with a living example each.",
            "Eighteen as identities; Śiva/Vāyu fork.",
            "Three houses (Vaiṣṇava / Śaiva / Śākta) without ranking.",
            "Daśāvatāra as a path; one sthala walked.",
            "Itihāsa contrast in two clean lines."
          ]
        },
        check: [
          "I can walk five lakṣaṇas with examples, not slogans.",
          "I can give identities for the eighteen and name the Śiva/Vāyu fork.",
          "I can sketch daśāvatāra as cosmology-in-story.",
          "I can walk Kāśī or Kāñcī or Rameśvara as sthala-knowledge."
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
        explainer: window.IKSGallery.itihasa(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "After Vālmīki’s krauñca-line and the Yakṣa’s cave of dharma: a well-written case still teaches through a claimed past. That is allowed as a guest sentence. The spine remains maryādā, dilemma, and counsel — not a gadget word for story."
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
            "Definition; Itihāsa–Purāṇa as how the little-heard person is kept from stretching the Veda.",
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
        explainer: window.IKSGallery.niti(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "After Hitopadeśa’s chain and Manu’s courtroom line: a short, attributed maxim is a storage format. That is why first-years still learn nīti. Do not rename it as a software style-guide."
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
        summary: "The Unit I house seen from the ridge: thirteen rooms, six artefacts to redraw, later units filed in folders already owned. A gallery of the map — not a quiz booklet.",
        outcomes: [
          "Redraw Caturdaśa + Kalā + Śilpa + darśana baskets in five minutes.",
          "Name the six artefacts of the Unit I hand.",
          "Point each later-unit heading to a folder already drawn."
        ],
        explainer: window.IKSGallery.revision(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "Unit I is the map of seats, skills, and ways of seeing. Units II–V fill the folders. A revision hour is redrawing that map before later names arrive. If the folders are not drawn, Yoga will be taught twice and Śulba will go missing."
        },
        diagram: {
          type: "flow",
          title: "Six hours",
          steps: ["L1 Map", "L2 Vedas", "L3 Tool+apply", "L4 Skills+making", "L5 Darśana", "L6 Story+ethics+quiz"]
        },
        mnemonic: {
          name: "MAP-TOOL-MAKE-SEE-TELL",
          hook: "Map · Veda · Tool · Make · See · Tell.",
          recite: "‘Folders first. Checkmarks extra. The six artefacts, from memory.’"
        },
        lectureTips: [
          "Hide the card; redraw the six artefacts. Coaching for the 25-mark paper lives under Teach notes.",
          "Seal Unit I cards only after this revision hour, not after Lecture 1 excitement."
        ],
        classroomActivity: {
          title: "Blank-map relay",
          minutes: 12,
          body: "Four teams, four boards: (A) 14/18, (B) Vedas+layers, (C) six aṅgas, (D) darśana pairs. Two minutes each, then rotate to correct the previous team in a different colour. Photograph. That photograph is your next tutorial’s slide 1."
        },
        studentQs: [
          "What is ‘high-yield’? (Check-marked + structurally central. Not a promise from the examiner.)",
          "Must I memorise every Purāṇa plot? (No. Five lakṣaṇas, eighteen names as identities, one sthala walked.)"
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
          "I can walk thirteen rooms as one house.",
          "I can file Pāṇini, Śulba, temple, Āyurveda, and Kauṭilya in folders already drawn.",
          "I know Units II–V are Coming next, not a new civilisation."
        ],
        youtube: [
          { title: "IKS unit 1 recap searches", search: "Indian knowledge system Vedas Vedanga darshana revision" }
        ]
      }
    ]
  };
})(window);
