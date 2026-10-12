(function (g) {
  g.IKS = g.IKS || {};
  g.IKS.papers = g.IKS.papers || {};

  g.IKS.papers.unit2 = {
    id: "unit2",
    code: "Unit II",
    title: "Foundation for Science & Technology",
    short: "Unit II topics",
    blurb: "Śikṣā’s sounds, Pāṇini’s rules, an honest account of Sanskrit and machines, place value and zero, named magnitudes, Bhūta-saṁkhyā, Kaṭapayādi, Piṅgala’s two weights, and Nyāya’s pramāṇa, prameya, and saṁśaya.",
    shelf: {
      primary: "Thakur Unit II · Mahadevan language & mathematics chapters (physical book)"
    },
    youtube: [{ title: "Pāṇini and the Śiva-sūtras", search: "Panini Shiva sutras pratyahara explained" }],
    topics: [
      {
        id: "u2-phonetics",
        seq: 1,
        unit: 2,
        yield: "standard",
        tags: ["sanskrit", "phonetics", "siksha", "sandhi", "varna"],
        title: "Sanskrit linguistics and phonetics",
        readAs: "Thakur Unit II — Sanskrit linguistics and phonetics · Pāṇinīya-śikṣā (the short text itself)",
        summary: "Śikṣā as the science of Sanskrit sound: five parameters, eight places, the school alphabet beside the treatise’s 63-or-64, sandhi you can undo, and the six faults and six virtues of a reciter.",
        outcomes: [
          "Name the five ways the Śikṣā says a sound should be known, and four places with an example each.",
          "Perform and undo one guṇa and one yaṇ sandhi.",
          "Distinguish the fourteen-vowel classroom chart from the Śikṣā’s larger count without forcing them to match."
        ],
        explainer: window.IKSGallery2.phonetics(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "After the places and the sandhi table: a speech system needs an inventory of sounds and rules for what happens at the boundary of two sounds. That is a fair last sentence. It is a poor first sentence. The nose of the vedapuruṣa is not a codec."
        },
        diagram: { type: "named", id: "varna-sthana", title: "Places of articulation" },
        mnemonic: {
          name: "S-K-S-P-A",
          hook: "Svara · Kāla · Sthāna · Prayatna · Anupradāna.",
          recite: "‘Accent, length, place, effort, breath. Fourteen vowels on the chart; sixty-three or sixty-four in the Śikṣā. Both sentences stay.’"
        },
        lectureTips: [
          "Open with Śikṣā 1, then the eight places, then five sandhi examples on the board. The reciter’s six virtues close the hour.",
          "Coaching for the arc of the whole unit lives under Teach notes."
        ],
        classroomActivity: {
          title: "Cut and rejoin",
          minutes: 10,
          body: "Pairs get eight joined forms (vidyālayam, narendra, sūryodaya, ity api, madhvari, vāgīśa, saṃskṛtam, rāmo ’pi). They restore the two parts and name the operation. Then they invent one legal join of their own and hand it to the next pair to undo."
        },
        studentQs: [
          "Do I memorise every sandhi sūtra number? (No. Five vowel operations with one example each, plus jaśtva and visarga as names.)",
          "Is a written page a fault? (The Śikṣā’s likhita-pāṭhaka is a mouth that only follows ink. Books are allowed. An untrained mouth is the problem.)",
          "Are accent and guru/laghu the same? (No. Accent is udātta, anudātta, svarita. Guru and laghu are length, and they belong to Piṅgala’s card.)"
        ],
        twomark: {
          q: "What is Śikṣā, and name two places of articulation with one sound each.",
          outline: ["Vedāṅga of pronunciation.", "e.g. kaṇṭha — a, ha; danta — ta-varga, la, sa."]
        },
        fivemark: {
          q: "Explain how the Pāṇinīya-śikṣā describes a sound. Use place and one other parameter, with examples.",
          outline: ["Five axes: svara, kāla, sthāna, prayatna, anupradāna.", "Eight places, or the verse 17–18 seating.", "One sandhi example showing sounds in contact.", "63 or 64 versus the fourteen-vowel chart."]
        },
        tenmark: {
          q: "Write a note on Sanskrit phonetics as a Vedāṅga: inventory, places, sandhi, and the reciter’s discipline.",
          outline: [
            "Śikṣā as nose of the vedapuruṣa; verse 1.",
            "Inventory and the honest 63/64.",
            "Places with examples.",
            "Length and accent as separate axes.",
            "Five vowel sandhis with examples.",
            "Six faults and six virtues.",
            "One sentence on why a later class in grammar needs this hour."
          ]
        },
        check: [
          "I can recite the five parameters.",
          "I can seat a, i, ṛ, ta, and pa in places.",
          "I can undo vidyālaya and ity api.",
          "I will not pretend the school chart and Śikṣā 3 are the same count."
        ],
        youtube: [
          { title: "Śikṣā and varṇa", search: "Paniniya Shiksha varna sthana sandhi lecture" },
          { title: "Svara sandhi examples", search: "Sanskrit sandhi guna vriddhi yan examples" }
        ]
      },
      {
        id: "u2-panini",
        seq: 2,
        unit: 2,
        yield: "high",
        tags: ["panini", "astadhyayi", "shiva-sutra", "karaka", "pratyahara"],
        title: "Pāṇini’s Aṣṭādhyāyī as a rule system",
        readAs: "Thakur Unit II — Pāṇini · a traditional introduction to the Aṣṭādhyāyī (sūtra, vārttika, bhāṣya)",
        summary: "The fourteen Śiva-sūtras, pratyāhāra, the tempers of a rule, anuvṛtti, the tripāḍī, six kārakas with their sūtras, and the commentary stack from Kātyāyana and Patañjali to the Kaumudī.",
        outcomes: [
          "Expand the pratyāhāras ac, hal, and al from the fourteen Śiva-sūtras.",
          "Give one example each of saṁjñā, vidhi, and a conflict-rule.",
          "Name the six kārakas and say why they are not the same thing as the case endings."
        ],
        explainer: window.IKSGallery2.panini(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "After the tripāḍī has been named: a body of ordered rules, with a stated way to resolve clashes and with later rules treated as not-yet-done for earlier ones, feels to a computing student like a pipeline. Let that sentence arrive last. The book in front of you is a lakṣaṇa of Sanskrit, not a program written for a machine."
        },
        diagram: { type: "flow", title: "From alphabet to word", steps: ["Śiva-sūtras", "Pratyāhāra", "Sūtra in order", "Pada"] },
        mnemonic: {
          name: "Sūtra–vārttika–bhāṣya",
          hook: "Pāṇini · Kātyāyana · Patañjali.",
          recite: "‘Eight books, fourteen alphabet-sūtras, ac / hal / al. Later rule wins a clash. The last three quarters are asiddha. Kāraka is the role; vibhakti is the ending.’"
        },
        lectureTips: [
          "Write the fourteen lines on the board even if it takes ten minutes. Then derive only ac, hal, and al.",
          "Do not open with ‘this is a compiler.’ Open with 1.1.1."
        ],
        classroomActivity: {
          title: "Cut a pratyāhāra",
          minutes: 10,
          body: "The fourteen sūtras stay projected. Groups expand ac, hal, al, and one they have not been given (for example ik, or yaṇ). Then they mark, in a single sentence, kartṛ and karma: ‘Rāmaḥ phalaṃ khādati.’ Role first, ending second."
        },
        studentQs: [
          "Is the Siddhānta-kaumudī the Aṣṭādhyāyī? (It is the same rules taught in topic order by Bhaṭṭoji. A rearrangement, not a second grammar.)",
          "Are there only six kārakas? (Six are the working set. Hetu, the causal agent, sits in the same neighbourhood.)",
          "Did Pāṇini write for computers? (No. He wrote a finite characterisation of correct Sanskrit words. The feeling of an engine is a guest, not the author.)"
        ],
        twomark: {
          q: "What is a pratyāhāra? Expand one.",
          outline: ["A short name: first sound plus a later it-marker from the Śiva-sūtras.", "ac = vowels; or hal = consonants."]
        },
        fivemark: {
          q: "Describe the Aṣṭādhyāyī as a system of rules. Refer to the Śiva-sūtras and to one meta-rule.",
          outline: ["Eight chapters, not a dictionary.", "Fourteen Śiva-sūtras and pratyāhāra.", "Anuvṛtti.", "vipratiṣedhe paraṃ kāryam or pūrvatrāsiddham.", "The triad: sūtra, vārttika, bhāṣya."]
        },
        tenmark: {
          q: "Explain Pāṇini’s grammar as a rule-system: alphabet, kinds of sūtra, order, and kāraka. Why do commentaries exist?",
          outline: [
            "What the book generates.",
            "Fourteen sūtras; ac, hal, al.",
            "Saṁjñā, vidhi, paribhāṣā, with one sūtra each.",
            "Anuvṛtti and the need for Mahābhāṣya and Kāśikā.",
            "Conflict and the tripāḍī.",
            "Six kārakas versus case endings.",
            "Kaumudī as a different path, not a different forest."
          ]
        },
        check: [
          "I can write the fourteen lines or reconstruct them from a neighbour’s start.",
          "I can expand ac and hal.",
          "I can say what 1.1.1 defines.",
          "I can separate kartṛ from prathamā vibhakti."
        ],
        youtube: [
          { title: "Śiva-sūtras", search: "Maheshvara sutra pratyahara ac hal explained" },
          { title: "Kāraka", search: "Karaka vibhakti difference Sanskrit grammar" }
        ]
      },
      {
        id: "u2-nlp",
        seq: 3,
        unit: 2,
        yield: "high",
        tags: ["nlp", "sanskrit", "sandhi", "karaka", "computational"],
        title: "Sanskrit and NLP",
        readAs: "Thakur Unit II — Sanskrit and natural language processing · the Aṣṭādhyāyī card beside this one",
        summary: "Three real tasks — undo sandhi, reverse a derivation, label kārakas — and a short honest map of living research. The viral claim about a space agency and Sanskrit is retired in the open.",
        outcomes: [
          "State the three layers from a written line to an analysis, in order.",
          "Undo three sandhis and mark kartṛ and karma in one sentence.",
          "Name one real research tool, and state one claim about Sanskrit and computers that is false."
        ],
        explainer: window.IKSGallery2.nlp(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "A morphological analyser is a return journey along a path the Aṣṭādhyāyī describes forwards. Neural models do not contain Pāṇini; they can be scored against analyses a Pāṇinian would accept. That is the whole bridge. It does not need a myth."
        },
        diagram: {
          type: "vflow",
          title: "Three layers",
          steps: ["Sandhi-viccheda", "Morphology in reverse", "Kāraka"]
        },
        mnemonic: {
          name: "Cut · Build-back · Role",
          hook: "Viccheda · Prakriyā reversed · Kāraka.",
          recite: "‘The grammar is explicit. The written line is still ambiguous until the join is undone. Testimony of a space agency adopting Sanskrit is false.’"
        },
        lectureTips: [
          "Keep Pāṇini’s card in view. This hour applies it. It does not replace it.",
          "Say the false NASA-style claim out loud and strike it, so the room hears the correction once."
        ],
        classroomActivity: {
          title: "Ten joins, one sentence",
          minutes: 10,
          body: "Project ten joined forms from the card’s third room. Groups restore them. The last item is a full sentence: mark kartṛ, karma, and the endings. If a laptop is open, students may check one form in the Sanskrit Heritage Reader or Saṃsādhanī afterwards — the hand analysis comes first."
        },
        studentQs: [
          "Is Sanskrit unambiguous? (The rule-system is explicit. A joined written line is not unambiguous. Those are different statements.)",
          "Did NASA adopt Sanskrit? (No. Strike the claim whenever it appears in a project.)",
          "Is a chatbot doing Pāṇinian analysis? (Only if the output survives sandhi, morphology, and kāraka. Seeing the word Aṣṭādhyāyī in training text is not analysis.)"
        ],
        twomark: {
          q: "Name the three tasks in a computational analysis of a Sanskrit line.",
          outline: ["Undo sandhi.", "Recover root, affixes, and derivation.", "Assign kāraka roles."]
        },
        fivemark: {
          q: "Why is sandhi a central problem for Sanskrit NLP? Give two examples of a join that must be undone.",
          outline: ["Words are written in contact.", "Two examples with the operation named.", "Explicit grammar does not remove the search for the right cut.", "One real tool, named modestly."]
        },
        tenmark: {
          q: "Discuss Sanskrit and natural language processing without unhistorical claims. Use Pāṇini’s framework and one modern project.",
          outline: [
            "Pada defined by endings, not by spaces.",
            "Three layers.",
            "Kāraka versus a naive subject/object scheme.",
            "One project: Heritage Reader or Saṃsādhanī, with what it is not.",
            "Neural models as something to test, not as Pāṇini-in-disguise.",
            "The false agency claim, corrected.",
            "A classroom exercise that needs no machine."
          ]
        },
        check: [
          "I can say the three layers in order.",
          "I can undo three joins from the phonetics table.",
          "I can name a real project without turning it into a trophy.",
          "I can retire the space-agency myth in one sentence."
        ],
        youtube: [
          { title: "Sanskrit computational linguistics", search: "Sanskrit computational linguistics sandhi analyser" },
          { title: "Kāraka in simple Sanskrit teaching", search: "karaka Sanskrit examples karta karma" }
        ]
      },
      {
        id: "u2-zero",
        seq: 4,
        unit: 2,
        yield: "high",
        tags: ["zero", "place-value", "decimal", "brahmagupta", "aryabhata"],
        title: "Zero, place value, and the decimal system",
        readAs: "Thakur Unit II — zero and the decimal system · Āryabhaṭīya Gaṇitapāda 2 and Brahmagupta, chapter 18",
        summary: "Place value as a tenfold law in Āryabhaṭa’s verse; zero as a quantity with addition and multiplication laws in Brahmagupta; the dot and the 876 CE Gwalior glyph as witnesses that must not be collapsed into one birthday.",
        outcomes: [
          "State the place law in one sentence and show why 30502 needs its internal zeros.",
          "Give Brahmagupta’s addition law for positives, negatives, and zero.",
          "Separate three witnesses: the verse of places, the laws of calculation, and a dated stone glyph."
        ],
        explainer: window.IKSGallery2.zero(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "A digit’s contribution is its face value times a power of ten given by its seat. An empty seat that is not marked will shift every digit to the wrong power. That is the engineering of this hour. Philosophical śūnyatā is a different śāstra and stays next door."
        },
        diagram: { type: "named", id: "place-value", title: "Place value of 30502" },
        mnemonic: {
          name: "Law · Glyph · Arithmetic",
          hook: "Daśaguṇa places · a mark for the empty seat · Brahmagupta’s sign rules.",
          recite: "‘Each place is ten times the previous. 876 CE at Chaturbhuj is a dated glyph, not the invention-day of the idea. Addition with zero is clean; division by zero stays argued.’"
        },
        lectureTips: [
          "Draw 30502 as six seats before any glory sentence. Strike ‘India invented zero in year X’ if it appears.",
          "Do the addition law with +2, −2, and 0 on the board so the Sanskrit has digits under it."
        ],
        classroomActivity: {
          title: "Remove a zero",
          minutes: 10,
          body: "Students write 30502, 3002, 352, and 3502 in place columns using Āryabhaṭa’s names (eka through niyuta). They say out loud which zeros are load-bearing. Then three sums from Brahmagupta: 5 + (−5), (−3) + 0, 0 + 0."
        },
        studentQs: [
          "Did Āryabhaṭa invent the symbol 0? (He states the tenfold places. His own astronomical numerals are a letter-code. Do not award him the Gwalior glyph.)",
          "Is the Bakhshali manuscript from one century? (No. Its leaves have been dated across a spread. Say ‘a dot in a calculation book,’ and give the uncertainty.)",
          "Is Buddhist emptiness the number zero? (No. Shared word-family, different śāstra.)"
        ],
        twomark: {
          q: "What is place value? Illustrate with a three-digit number.",
          outline: ["A digit’s value depends on its seat.", "In 305, 3 is three hundred because it sits in the śata place."]
        },
        fivemark: {
          q: "Explain zero both as an empty place and as a number. Use one Indian text.",
          outline: ["Daśaguṇa law from Āryabhaṭa.", "Why an internal zero cannot be omitted.", "Brahmagupta’s addition law, including negatives.", "One material witness: Gwalior 876, or Bakhshali with its date-caveat."]
        },
        tenmark: {
          q: "Give an account of the Indian decimal place-value system and the arithmetical zero. Distinguish idea, symbol, and rules.",
          outline: [
            "Place law with the ten names sketched.",
            "Worked 30502.",
            "Brahmagupta on addition and on multiplication by zero.",
            "Division by zero left as a scholarly caution.",
            "Bakhshali dot versus Gwalior stone versus Brahmi numerals that are not yet this system.",
            "Śūnyatā kept separate.",
            "What we will not claim about a single invention date."
          ]
        },
        check: [
          "I can explain a load-bearing zero with 30502.",
          "I can state the addition law including negatives.",
          "I can date the Gwalior witness and refuse a single birthday for ‘zero.’",
          "I can keep śūnyatā out of the arithmetic."
        ],
        youtube: [
          { title: "Place value in Āryabhaṭa", search: "Aryabhata place value Sanskrit verse dashagunam" },
          { title: "Gwalior zero inscription", search: "Gwalior Chaturbhuj temple zero inscription 876" }
        ]
      },
      {
        id: "u2-large",
        seq: 5,
        unit: 2,
        yield: "standard",
        tags: ["numbers", "ayuta", "koti", "lakh", "crore"],
        title: "Large numbers and their names",
        readAs: "Thakur Unit II — large numbers · Āryabhaṭīya Gaṇitapāda 2 as the spine",
        summary: "Āryabhaṭa’s ten place-names in full, set beside lakh and crore and beside later Sanskrit words that do not agree with each other above a crore. The rule tenfold-per-place matters more than the largest name you can shout.",
        outcomes: [
          "Recite Āryabhaṭa’s ten names from eka to vṛnda with their powers of ten.",
          "Place lakh and crore on that ladder without erasing niyuta.",
          "Say, in one sentence, what to do when two texts name 10⁹ differently."
        ],
        explainer: window.IKSGallery2.large(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "Scientific notation names a magnitude by a power of ten. A Sanskrit place-name does the same job with a word that can live inside a verse. After the two columns are on the board, that comparison is fair."
        },
        diagram: { type: "named", id: "place-value", title: "Places, named" },
        mnemonic: {
          name: "Eka to vṛnda",
          hook: "Eka, daśa, śata, sahasra, ayuta, niyuta, prayuta, koṭi, arbuda, vṛnda.",
          recite: "‘Tenfold each step. Crore is koṭi, 10⁷. Lakh is 10⁵, where this verse says niyuta. Above koṭi, name the author before you name the number.’"
        },
        lectureTips: [
          "Chant the ten names once as a row. Then the three-column table. Resist the largest-number competition.",
          "Use 30,502 so that ‘lakh’ is available and wrong."
        ],
        classroomActivity: {
          title: "Three columns, one number",
          minutes: 8,
          body: "Put 5,00,00,000 on the board in the Indian grouping. Students must say it as crore, as koṭi, and as a count of ayuta or sahasra. Then they place ‘one arab’ and write ‘author not Āryabhaṭa’ beside whatever Sanskrit word they were about to force onto 10⁹."
        },
        studentQs: [
          "Is niyuta a lakh? (In this verse niyuta is 10⁵, which is a lakh. Later authors move these names. Quote the verse you are using.)",
          "How far do the names go? (As far as the tenfold rule needs. A long litany in the Lalitavistara shows a culture enjoying scale. It is not our spine.)",
          "Which column do I memorise for the exam? (Āryabhaṭa’s ten. Plus the sentence that lakh is 10⁵ and crore is 10⁷.)"
        ],
        twomark: {
          q: "Name the places from sahasra to koṭi as Āryabhaṭa lists them.",
          outline: ["Sahasra 10³, ayuta 10⁴, niyuta 10⁵, prayuta 10⁶, koṭi 10⁷."]
        },
        fivemark: {
          q: "Explain the Indian system of large number-names. Why do lists disagree?",
          outline: ["Daśaguṇa rule.", "Āryabhaṭa’s ten.", "Lakh and crore placed honestly.", "Variance above koṭi, with one example.", "Naming as a way to carry a magnitude in speech and verse."]
        },
        tenmark: {
          q: "Compare Āryabhaṭa’s place-names with later and living Indian names for large numbers. What should a student do with the disagreement?",
          outline: [
            "The verse and the ten values.",
            "Worked reading of a number with an internal zero.",
            "Living scale: lakh, crore, arab, kharab.",
            "A later Sanskrit word, flagged as later.",
            "Lalitavistara or Līlāvatī as a witness of the culture, not as a rival spine.",
            "The exam sentence: quote the author.",
            "Why the rule beats a world-record boast."
          ]
        },
        check: [
          "I can chant the ten names and their powers.",
          "I can put a crore at 10⁷ without hesitation.",
          "I will not silently replace niyuta with lakh inside the verse.",
          "I can say ‘which author?’ when 10⁹ has three names."
        ],
        youtube: [
          { title: "Indian large number names", search: "Ayuta niyuta koti Indian number system Aryabhata" },
          { title: "Lakh and crore", search: "lakh crore in terms of powers of ten" }
        ]
      },
      {
        id: "u2-bhuta",
        seq: 6,
        unit: 2,
        yield: "high",
        tags: ["bhuta-sankhya", "encoding", "madhava", "numbers"],
        title: "Bhūta-saṁkhyā",
        readAs: "Thakur Unit II — Bhūta-saṁkhyā · a siddhānta commentary for a real encoded verse",
        summary: "A full classroom lexicon from 0 to 12 and the higher counts astronomy uses, the units-first reading, a small check (netra-veda = 42), and Mādhava’s circumference decoded — including the two-unit gap.",
        outcomes: [
          "Give two word-numbers each for 0, 1, 2, 4, 5, and 7.",
          "Decode a two-word compound with the first word as the units.",
          "State how Bhūta-saṁkhyā differs from Kaṭapayādi and from Āryabhaṭa’s letter-numerals."
        ],
        explainer: window.IKSGallery2.bhuta(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "After the table is learned: a shared dictionary of code-words, units at the left of the compound, then written as an ordinary numeral. Useful, and late. The dictionary is the lesson."
        },
        diagram: { type: "flow", title: "How to read a bhūta compound", steps: ["First word = units", "Next word = tens", "Write the number ordinary-wise"] },
        mnemonic: {
          name: "Eye, Veda, arrow",
          hook: "Netra 2 · Veda 4 · Bāṇa 5. First word = units.",
          recite: "‘Things that already have a count become digits. Sāgara is 4 or 7 until the author says. Netra-veda is 42, not 24.’"
        },
        lectureTips: [
          "Decode netra-veda and bāṇa-candra before the long Mādhava chain. Direction errors are the whole failure mode.",
          "Say the two-unit gap in Mādhava’s circumference in the same breath as the number."
        ],
        classroomActivity: {
          title: "Encode a birthday’s day-and-month",
          minutes: 10,
          body: "Each student encodes a two-digit number (a day of the month is enough) as a bhūta pair, units first, using only the table. Partners decode. Then the teacher puts sāgara on the board and asks for the digit — the wanted answer is the question ‘which author?’"
        },
        studentQs: [
          "Must I know every synonym? (Know two each for 0–9, and the direction. The long column is a dictionary.)",
          "Why is the first word the units? (That is the reading that makes astronomical compounds, including Mādhava’s, come out as the numbers the commentaries claim. Reverse it and you will ‘discover’ a different constant.)",
          "Is this encryption? (It is a mnemonic for insiders who know the counts. It is not a secret against outsiders, and it is not Kaṭapayādi.)"
        ],
        twomark: {
          q: "What is Bhūta-saṁkhyā? Give one word each for 2 and for 4.",
          outline: ["Numbers written as things that have a traditional count.", "e.g. netra = 2, veda = 4."]
        },
        fivemark: {
          q: "Explain the method of Bhūta-saṁkhyā with a worked two-word example. Mention one limitation.",
          outline: ["Definition.", "Units-first direction.", "Worked netra-veda = 42 or equivalent.", "Synonym variance, e.g. sāgara.", "Not the same system as Kaṭapayādi."]
        },
        tenmark: {
          q: "Describe Bhūta-saṁkhyā as a way of carrying numbers in verse. Decode one compound and discuss Mādhava’s circumference figure honestly.",
          outline: [
            "Why verse wants memorable numbers.",
            "Lexicon for 0–9 at least.",
            "Direction, with a small example.",
            "A two-digit word contributes its own units first.",
            "Mādhava’s compound and the integer 2827433388233.",
            "Diameter 9 × 10¹¹, and the two-unit excess.",
            "Three systems kept apart."
          ]
        },
        check: [
          "I can give two synonyms for zero and for five.",
          "I decode first-word-as-units without hesitating.",
          "I can tell bhūta, Kaṭapayādi, and Āryabhaṭa’s letters apart.",
          "I can mention Mādhava’s gap of 2."
        ],
        youtube: [
          { title: "Bhūta-saṁkhyā", search: "Bhuta sankhya system Sanskrit numbers words" },
          { title: "Mādhava and pi", search: "Madhava Kerala pi value circumference verse" }
        ]
      },
      {
        id: "u2-katapayadi",
        seq: 7,
        unit: 2,
        yield: "high",
        tags: ["katapayadi", "encoding", "kerala", "melakarta"],
        title: "Kaṭapayādi",
        readAs: "Thakur Unit II — Kaṭapayādi · Śaṅkaravarman’s Sadratnamālā verse, with Haridatta’s date kept in view",
        summary: "The full consonant grid, the conjunct rule, units at the left edge, māyā = 15 as a melakarta index, and bhadrā as the ending digits of Śaṅkaravarman’s circumference. Kerala is named as the workshop. The rule-verse is dated 1819 and not backdated.",
        outcomes: [
          "Fill the ka, ṭa, pa, and ya runs, including which letters are zero.",
          "Decode māyā and explain why the left edge is the units.",
          "Apply the conjunct rule to drā, and refuse to call the system Vedic."
        ],
        explainer: window.IKSGallery2.katapayadi(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "Several letters share one digit, so a number can wear a word worth saying. Read left-to-right as units, tens, hundreds, then rewrite the numeral in the ordinary direction. A useful description — after the grid is in the hand."
        },
        diagram: { type: "named", id: "katapayadi-grid", title: "Kaṭapayādi grid" },
        mnemonic: {
          name: "Ka-ṭa-pa-ya, left is units",
          hook: "Ña and na are 0. Vowels add no digit. In a cluster, the consonant before the vowel wins.",
          recite: "‘Māyā is 15. Bhadrā ends in 24. Haridatta, 683 CE, is the early dated use. The neat rule-verse is Śaṅkaravarman, 1819.’"
        },
        lectureTips: [
          "Project the grid and decode māyā before the long circumference phrase. Direction and conjuncts cause every error that matters.",
          "Point at the Kerala teacher-chain figure and say a coast and a century."
        ],
        classroomActivity: {
          title: "Two spellings of 15",
          minutes: 10,
          body: "Using the grid, everyone writes 15 in two different words (māyā and another, such as pāyā). They also write a trap: naya, and the partner must say why it is 10 and not 15. Then one conjunct: what digit is drā, and why is it not two digits?"
        },
        studentQs: [
          "Do vowels count? (They let the consonant speak. They are not extra digits. Ña and na are zero, which is different from ‘ignored.’)",
          "Is this older than Bhūta-saṁkhyā? (Bhūta-saṁkhyā is the older and more widespread habit, on Sarma’s account. Kaṭapayādi’s great dated workshop is Kerala, from Haridatta onward.)",
          "Why do melakarta names work? (Venkaṭamakhin’s catalogue, seventeenth century: the first two syllables are the rāga’s index, units first. Māyāmāḷavagauḷa begins mā-yā, and it is the fifteenth.)"
        ],
        twomark: {
          q: "Write the Kaṭapayādi digits for ka, ta, pa, and ya. Which letters stand for zero?",
          outline: ["Ka 1, ta 6, pa 1, ya 1 — or any correct four.", "Ña and na are zero."]
        },
        fivemark: {
          q: "Explain the Kaṭapayādi system with the grid’s structure and one worked word.",
          outline: ["Four runs, restarting at 1.", "Zero letters.", "Units at the left.", "Māyā = 15, or an equivalent.", "Conjunct rule in one sentence.", "Not the same as Bhūta-saṁkhyā."]
        },
        tenmark: {
          q: "Give a full account of Kaṭapayādi: rules, a musical use, and a mathematical use. Date your sources.",
          outline: [
            "The grid.",
            "Vowels, zeros, conjuncts, direction.",
            "Worked māyā = 15 and the melakarta, with the seventeenth century named.",
            "Bhadrā as the ending 24, and Śaṅkaravarman’s parārdha circumference.",
            "The rule-verse is 1819; Haridatta’s use is 683 CE.",
            "Kerala paramparā.",
            "Kept distinct from bhūta-saṁkhyā."
          ]
        },
        check: [
          "I can rebuild the grid’s first row from ka to ña.",
          "I read the left edge as units.",
          "I can say what a conjunct contributes.",
          "I will not call Śaṅkaravarman’s verse Vedic."
        ],
        youtube: [
          { title: "Kaṭapayādi", search: "Katapayadi system explained with examples" },
          { title: "Melakarta numbers", search: "Melakarta katapayadi sankhya Mayamalavagowla" }
        ]
      },
      {
        id: "u2-pingala",
        seq: 8,
        unit: 2,
        yield: "high",
        tags: ["pingala", "chandas", "binary", "meru", "laghu", "guru"],
        title: "Piṅgala — metre, combinatorics, binary flavour",
        readAs: "Thakur Unit II — Piṅgala · Chandaḥśāstra chapter 8 with Halāyudha’s Meru in mind",
        summary: "Laghu and guru as the two weights of verse; all eight patterns of three syllables; the Meru-prastāra through row 6; naṣṭa shown in one named convention. The power-of-two fact is kept. The computer is not claimed.",
        outcomes: [
          "Define laghu and guru, and list all patterns of three syllables.",
          "Read a row of the Meru and say why the row sums to a power of two.",
          "State the binary analogy as an analogy, with Halāyudha named for the triangle."
        ],
        explainer: window.IKSGallery2.pingala(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "Two symbols, all sequences of length n, and conversion between a sequence and its index by halving: that is the shape of base-2 counting. On this card the symbols remain laghu and guru. A later age’s machines may borrow the shape. They are not what Piṅgala was building."
        },
        diagram: { type: "named", id: "meru", title: "Meru-prastāra" },
        mnemonic: {
          name: "Two weights, 2ⁿ",
          hook: "Laghu light · guru heavy · prastāra, naṣṭa, uddiṣṭa · Meru from Halāyudha.",
          recite: "‘Eight patterns of three. Sixty-four patterns of six. The triangle sums each cell from the two above it. Piṅgala did not write the digits 0 and 1.’"
        },
        lectureTips: [
          "Fill the eight-pattern table on the board from the class’s own mouth before showing the binary column.",
          "When someone says ‘he invented binary,’ answer with the allowed sentence and the forbidden sentence from the card’s first deep room."
        ],
        classroomActivity: {
          title: "Build row 4, then find index 6",
          minutes: 10,
          body: "Groups construct Meru rows 0–4 by the ‘sum of the two parents’ rule and check that row 4 sums to 16. Then they recover index 6 in the published convention (GGL) and say what would change if odd were written as laghu instead. The convention must be spoken, not assumed."
        },
        studentQs: [
          "Did Piṅgala invent zero? (No. This card is not the zero card. Halving procedures are not a glyph for the empty place.)",
          "Is the Meru in Piṅgala’s own sūtras or in the commentary? (The terse sūtras are Piṅgala’s, including pare pūrṇam. The drawn triangle called Meru-prastāra is Halāyudha’s explanation, tenth century.)",
          "Why does row 6 equal the number of kalās? (Both are 64. It is a rhyme of integers. Do not make it a doctrine.)"
        ],
        twomark: {
          q: "Who is Piṅgala, and what are laghu and guru?",
          outline: ["Author of the Chandaḥśāstra, the science of metre.", "Light and heavy syllables, the two weights of a pattern."]
        },
        fivemark: {
          q: "Explain prastāra. How many patterns of three syllables are there, and why?",
          outline: ["Prastāra lists every pattern.", "Each syllable has two choices.", "2³ = 8.", "Show the eight, or the rule.", "Meru as the commentarial triangle, credited to Halāyudha."]
        },
        tenmark: {
          q: "Discuss Piṅgala’s treatment of metre as combinatorics, including the Meru and the sense in which it is binary. Keep the claim accurate.",
          outline: [
            "Guru and laghu defined.",
            "Prastāra, naṣṭa, uddiṣṭa named.",
            "Eight patterns of three, with the table’s logic.",
            "Meru, the parent-sum, 2ⁿ, Halāyudha’s century.",
            "One worked index.",
            "What may be said about base 2.",
            "What may not be said about computers.",
            "The 64-rhyme, enjoyed and not mythologised."
          ]
        },
        check: [
          "I can list eight patterns of length three.",
          "I can grow one new Meru row from the row above.",
          "I credit the drawn triangle to Halāyudha.",
          "I can refuse the sentence ‘Piṅgala invented the computer.’"
        ],
        youtube: [
          { title: "Piṅgala and metre", search: "Pingala Chanda sutra laghu guru binary prosody" },
          { title: "Meru prastāra", search: "Halayudha Meru prastara Pingala Pascal triangle" }
        ]
      },
      {
        id: "u2-pramana",
        seq: 9,
        unit: 2,
        yield: "high",
        tags: ["pramana", "prameya", "samsaya", "nyaya", "knowledge"],
        title: "Knowledge pyramid — Prameya, Pramāṇa, Saṁśaya",
        readAs: "Thakur Unit II — prameya, pramāṇa, saṁśaya · Nyāyasūtra 1.1, not a management diagram",
        summary: "Nyāya’s sixteen padārthas, four pramāṇas against the other schools’ counts, twelve prameyas, and saṁśaya as the door. The pyramid on the page is marked as a classroom stack standing on sūtra 1.1.1, not as an ancient diagram and not as data–information–knowledge–wisdom.",
        outcomes: [
          "Define pramāṇa, prameya, and saṁśaya without using them as synonyms.",
          "List Nyāya’s four pramāṇas and two other schools’ different counts.",
          "Name the twelve prameyas, and say why the pyramid figure is labelled a classroom figure."
        ],
        explainer: window.IKSGallery2.pramana(),
        diagramsInBody: true,
        analogy: {
          title: "A modern bridge",
          body: "A laboratory also knows the difference between an instrument, a result, and the thing the result is about — and it knows that a discrepancy is what starts the next measurement. That is as far as the bridge goes. Gautama’s fruit is niḥśreyasa, the highest good, which is not a mark on a paper."
        },
        diagram: { type: "named", id: "knowledge-pyramid", title: "Classroom knowledge pyramid" },
        mnemonic: {
          name: "Door, means, object",
          hook: "Saṁśaya at the door · four pramāṇas · twelve prameyas · sixteen in the first sūtra.",
          recite: "‘Perception, inference, comparison, word — Nyāya’s four, not everybody’s four. Doubt is a wavering that looks for the specific difference. The pyramid is ours; the sūtra is Gautama’s.’"
        },
        lectureTips: [
          "Write the sixteen as a table of contents before defining the first three slowly. The bad-argument tail of the list is part of the school’s character.",
          "Say aloud that the pyramid is a classroom figure. A pandit in the room should not have to wonder."
        ],
        classroomActivity: {
          title: "Post or person",
          minutes: 10,
          body: "Stage the stock doubt: a shape in the dusk, post or person. Students name the saṁśaya, then propose three different pramāṇas that could settle it (walk closer; infer from movement; ask someone who knows the path). Then they file the settled object as a tiny prameya, and say which of the twelve it is not. Last two minutes: which school would refuse śabda as a separate means?"
        },
        studentQs: [
          "Is the knowledge pyramid in the sūtra? (No. It is a teaching stack on this site: pramāṇa, pramā, prameya, niḥśreyasa, with doubt at the door. Anchor it, and label it.)",
          "Are there four pramāṇas in every Indian school? (No. Cārvāka, Bauddha manuals, Sāṁkhya, and the two Mīmāṁsās disagree. The table is the answer.)",
          "Are there only twelve things to know? (Vātsyāyana says other things are knowable. These twelve are listed because release is at stake.)"
        ],
        twomark: {
          q: "Define pramāṇa and name Nyāya’s four.",
          outline: ["A means of valid knowledge.", "Pratyakṣa, anumāna, upamāna, śabda."]
        },
        fivemark: {
          q: "Distinguish pramāṇa, prameya, and saṁśaya. Illustrate with one example.",
          outline: ["Three definitions.", "Post-or-person, or an equivalent.", "Which pramāṇa settles it.", "Doubt is not itself knowledge.", "One sentence that other schools count pramāṇas differently."]
        },
        tenmark: {
          q: "Explain the Nyāya account of knowing: the sixteen-fold list, the pramāṇas, the prameyas, and doubt. What is a fair ‘knowledge pyramid’ for this syllabus?",
          outline: [
            "Sūtra 1.1.1 and niḥśreyasa.",
            "Sixteen, including the failure-modes at the end.",
            "Four pramāṇas with a line each.",
            "At least two rival counts.",
            "Twelve prameyas, purposive not exhaustive.",
            "Saṁśaya defined, with the post and the person.",
            "Classroom pyramid, labelled as such, refused as a management diagram."
          ]
        },
        check: [
          "I can define the three syllabus words apart.",
          "I can list four pramāṇas and say whose four they are.",
          "I can name the twelve prameyas or reconstruct them from self to release.",
          "I will label the pyramid as a classroom figure."
        ],
        youtube: [
          { title: "Nyāya pramāṇas", search: "Nyaya four pramanas pratyaksha anumana upamana shabda" },
          { title: "Saṁśaya", search: "Nyaya sutra samshaya doubt explanation" }
        ]
      }
    ]
  };
})(window);
