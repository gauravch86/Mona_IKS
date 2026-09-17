(function (g) {
  g.IKS = g.IKS || {};

  g.IKS.timelines = {
    "iks-map": {
      id: "iks-map",
      title: "Knowledge seats — what Unit I actually maps",
      lede: "Teach this rail on day one. Students should leave able to place a new name (Kalpa, Sthāpatya, Nyāya) on the right shelf.",
      hook: "Śruti is heard and conserved. Aṅgas keep it readable. Upavedas apply it. Kalās are skilled practice. Darśanas argue about how we know.",
      spine: {
        lead: "From ",
        parts: [
          { label: "śruti", note: "4 Vedas" },
          { label: "vedāṅga", note: "6 tools" },
          { label: "upāṅga", note: "often 4" },
          { label: "upaveda", note: "applied" },
          { label: "kalā", note: "skill" }
        ]
      },
      filters: [
        { id: "sruti", label: "Śruti", school: "sruti" },
        { id: "anga", label: "Aṅga", school: "anga" },
        { id: "upaveda", label: "Upaveda", school: "upaveda" },
        { id: "kala", label: "Kalā / Śilpa", school: "kala" }
      ],
      beats: [
        {
          year: "Śruti",
          name: "Four Vedas",
          school: "sruti",
          schoolLabel: "Śruti",
          country: "Oral corpus",
          work: "Ṛg · Yajur · Sāma · Atharva",
          doctrine: "Primary heard corpus. Conserved by recitation, not by a single printed file.",
          shift: "Everything else in Unit I either explains, applies, or argues about this layer."
        },
        {
          year: "Vedāṅga",
          name: "Six limbs",
          school: "anga",
          schoolLabel: "Aṅga",
          country: "Tooling around the Veda",
          work: "Śikṣā, Vyākaraṇa, Nirukta, Chandas, Jyotiṣa, Kalpa",
          doctrine: "How to pronounce, parse, etymologise, metre, time, and perform. Without these, the corpus is unreadable.",
          shift: "For BCA: this is the toolchain — lexer, grammar, docs, clock, build script."
        },
        {
          year: "Upāṅga",
          name: "Four often-taught seats",
          school: "anga",
          schoolLabel: "Aṅga",
          country: "Caturdaśa remainder",
          work: "Purāṇa, Nyāya, Mīmāṁsā, Dharmaśāstra (common list)",
          doctrine: "Narrative memory, logic, ritual hermeneutics, and dharma-as-norm. Lists vary — teach the CCS grouping and flag variants.",
          shift: "Turns 4+6 into 14. Do not fight a student who saw Itihāsa folded in; name the variant and move."
        },
        {
          year: "Upaveda",
          name: "Applied sciences",
          school: "upaveda",
          schoolLabel: "Upaveda",
          country: "Practice",
          work: "Āyurveda, Dhanurveda, Gandharvaveda, Sthāpatyaveda",
          doctrine: "Health, defence, music/performance, and built form. Application layer on the Veda stack.",
          shift: "Unit IV (architecture, metallurgy) and Unit V (Āyurveda, Yoga) live downstream of this shelf."
        },
        {
          year: "Kalā / Śilpa",
          name: "64 arts and craft science",
          school: "kala",
          schoolLabel: "Kalā",
          country: "Occupational knowledge",
          work: "Kalā lists · Śilpa treatises",
          doctrine: "Skill taxonomy plus proportion, materials, and making. Not a Fine Arts elective — a map of competence.",
          shift: "Syllabus checkmarks live here. Spend board time; do not recite 64 names."
        }
      ]
    },
    "veda-layers": {
      id: "veda-layers",
      title: "How a Veda is usually taught as four layers",
      lede: "Not four separate books stacked later — a way of reading how the same tradition moves from hymn to ritual explanation to forest teaching to philosophical close.",
      hook: "Saṁhitā is the payload. Brāhmaṇa is the runbook. Āraṇyaka is the retreat. Upaniṣad is the design review.",
      spine: {
        lead: "Layer walk: ",
        parts: [
          { label: "Saṁhitā", note: "hymn / formula" },
          { label: "Brāhmaṇa", note: "ritual prose" },
          { label: "Āraṇyaka", note: "forest teaching" },
          { label: "Upaniṣad", note: "inquiry" }
        ]
      },
      beats: [
        {
          year: "Saṁhitā",
          name: "Collected recitation",
          school: "sruti",
          schoolLabel: "Śruti",
          country: "Core text",
          work: "Mantra / ṛk / yajus / sāman",
          doctrine: "The verses and formulas actually conserved. Ṛg is mostly hymn; Yajur is mostly liturgical formula; Sāma is melody; Atharva mixes everyday and healing speech.",
          shift: "If students only remember ‘four books,’ they miss that each Veda is a tradition with internal layers."
        },
        {
          year: "Brāhmaṇa",
          name: "Ritual explanation",
          school: "sruti",
          schoolLabel: "Śruti",
          country: "Prose around the rite",
          work: "Why this offering, in this order",
          doctrine: "Prose that says what the rite is doing. Not ‘mythology hour’ — procedure plus meaning.",
          shift: "Analogy: comments and design docs, not the source file itself."
        },
        {
          year: "Āraṇyaka",
          name: "Forest treatises",
          school: "sruti",
          schoolLabel: "Śruti",
          country: "Edge of the household rite",
          work: "Interiorisation of ritual",
          doctrine: "Teaching that takes ritual inward — often linked to later forest/renouncer settings in the traditional story of the corpus.",
          shift: "Bridge from outer performance to inner inquiry. Do not over-romance; name the bridge."
        },
        {
          year: "Upaniṣad",
          name: "Inquiry texts",
          school: "sruti",
          schoolLabel: "Śruti",
          country: "Close of the stack",
          work: "Ātman / Brahman questions (taught names)",
          doctrine: "Philosophical close that later Vedānta reads as the ‘end of the Veda’ (anta). CCS wants the four-layer map more than a Vedānta seminar.",
          shift: "Stops students treating ‘Veda’ as only fire-ritual, and ‘Upaniṣad’ as a separate modern paperback."
        },
        {
          year: "Pāṭha",
          name: "Oral checksums",
          school: "anga",
          schoolLabel: "Aṅga",
          country: "Recitation schools",
          work: "Saṁhitā, pada, krama, jaṭā, ghana",
          doctrine: "Multiple recitation patterns so a slipped syllable is caught by a neighbouring pattern. Redundancy, not mystery.",
          shift: "Best CS landing in the whole unit: error-detecting codes for a civilisation that stored knowledge in people."
        }
      ]
    },
    "darsana-pairs": {
      id: "darsana-pairs",
      title: "Darśanas as paired operating systems",
      lede: "Āstika here means ‘accepts Veda as a pramāṇa,’ not ‘theist’ in a Western census sense. Teach pairings the syllabus already uses.",
      hook: "Sāṁkhya–Yoga, Nyāya–Vaiśeṣika, Pūrva-Mīmāṁsā–Vedānta. Nāstika on this paper: Cārvāka, Bauddha, Jaina.",
      spine: {
        lead: "Three pairs + three nāstika streams: ",
        parts: [
          { label: "Sāṁkhya–Yoga", note: "map / method" },
          { label: "Nyāya–Vaiśeṣika", note: "know / stuff" },
          { label: "Mīmāṁsā–Vedānta", note: "act / know" }
        ]
      },
      filters: [
        { id: "darsana", label: "Āstika pairs", school: "darsana" },
        { id: "sruti", label: "Nāstika (syllabus)", school: "sruti" }
      ],
      beats: [
        {
          year: "Pair 1",
          name: "Sāṁkhya and Yoga",
          school: "darsana",
          schoolLabel: "Āstika",
          country: "Metaphysics + practice",
          work: "Puruṣa–prakṛti · eight-limbed Yoga (as taught)",
          doctrine: "Sāṁkhya maps constituents; Yoga is the disciplined method. CCS lists them together for a reason.",
          shift: "Stop teaching Yoga as only stretching. It is a darśana with a practice stack."
        },
        {
          year: "Pair 2",
          name: "Nyāya and Vaiśeṣika",
          school: "darsana",
          schoolLabel: "Āstika",
          country: "Logic + categories",
          work: "Pramāṇa theory · padārtha list",
          doctrine: "Nyāya cares how we know (perception, inference, comparison, testimony). Vaiśeṣika cares how the world is typed (substance, quality, action…).",
          shift: "Best CS pair: type system + proof system. Unit II will return to pramāṇa."
        },
        {
          year: "Pair 3",
          name: "Pūrva-Mīmāṁsā and Vedānta",
          school: "darsana",
          schoolLabel: "Āstika",
          country: "Hermeneutics of Veda",
          work: "Ritual meaning · jñāna reading of Upaniṣad",
          doctrine: "Pūrva-Mīmāṁsā reads the Veda as primarily action-guiding. Vedānta (Uttara-Mīmāṁsā) reads the end of the Veda as knowledge of Brahman. Same library, different primary key.",
          shift: "Students confuse ‘Vedānta’ with ‘Hinduism.’ Keep it as a reading strategy of śruti."
        },
        {
          year: "Nāstika",
          name: "Cārvāka, Bauddha, Jaina",
          school: "sruti",
          schoolLabel: "Nāstika",
          country: "Syllabus wording",
          work: "Perception-first · four noble truths / anātman · anekānta / ahiṁsā",
          doctrine: "Three streams that do not take Veda as authority. Teach epistemology and ethics, not mockery.",
          shift: "A BCA class that can state Cārvāka’s pramāṇa scepticism without sneering has understood the paper."
        }
      ]
    }
  };

  g.IKS.topicTimelines = {
    "u1-what": ["iks-map"],
    "u1-caturdasa": ["iks-map"],
    "u1-vedas": ["veda-layers"],
    "u1-vedanga": ["iks-map"],
    "u1-astika": ["darsana-pairs"],
    "u1-nastika": ["darsana-pairs"],
    "u1-revision": ["iks-map"]
  };
})(window);
