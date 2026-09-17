(function (g) {
  g.IKS = g.IKS || {};

  g.IKS.timelines = {
    "iks-map": {
      id: "iks-map",
      title: "Knowledge seats — what Unit I actually maps",
      lede: "Teach this rail on day one. Students should leave able to place a new name (Kalpa, Sthāpatya, Nyāya) on the right shelf.",
      hook: "Śruti is heard and conserved. Vedāṅgas are its living limbs. Upavedas apply it. Kalās are cultivated skill. Darśanas are ways of seeing.",
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
          country: "Limbs of the Veda-body",
          work: "Śikṣā, Vyākaraṇa, Nirukta, Chandas, Jyotiṣa, Kalpa",
          doctrine: "How to pronounce, parse, etymologise, metre, time, and perform. Without these, the corpus cannot be used as it was meant to be used.",
          shift: "The traditional image is a body: nose, mouth, ear, feet, eyes, hands — not a toolbox metaphor that replaces the body."
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
          doctrine: "Health, defence, music/performance, and built form — applied knowledge hanging next to śruti.",
          shift: "Unit IV (architecture, metallurgy) and Unit V (Āyurveda, Yoga) live downstream of these doors."
        },
        {
          year: "Kalā / Śilpa",
          name: "64 arts and craft science",
          school: "kala",
          schoolLabel: "Kalā",
          country: "Occupational knowledge",
          work: "Kalā lists · Śilpa treatises",
          doctrine: "Skill taxonomy plus proportion, materials, and making. A map of competence beside vidyā.",
          shift: "Syllabus check-marks live here. The full list is on the Kalās card; the temple dialects are on the Śilpa card."
        }
      ]
    },
    "veda-layers": {
      id: "veda-layers",
      title: "The inner river of a Veda",
      lede: "Not four later books stacked on a shelf — a way of reading how the same śruti-tradition walks from hymn to the thinking of the rite, into the forest, into inquiry.",
      hook: "Saṁhitā is the heard collection. Brāhmaṇa is the liturgy thinking aloud. Āraṇyaka is the forest turn. Upaniṣad is sitting near the teacher.",
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
          country: "The heard core",
          work: "Mantra / ṛk / yajus / sāman",
          doctrine: "The verses and formulas actually conserved. Ṛg is mostly hymn; Yajur is mostly liturgical formula; Sāma is melody; Atharva keeps healing, peace, and household speech.",
          shift: "If students only remember ‘four books,’ they miss that each Veda is a tradition with depth."
        },
        {
          year: "Brāhmaṇa",
          name: "The rite explained",
          school: "sruti",
          schoolLabel: "Śruti",
          country: "Prose around the offering",
          work: "Aitareya, Śatapatha, Taittirīya, Gopatha…",
          doctrine: "Prose that says what the rite is doing, and why this verse sits here. Procedure plus meaning — not ‘mythology hour.’",
          shift: "The liturgy is allowed to think. That thinking is still śruti."
        },
        {
          year: "Āraṇyaka",
          name: "Forest treatises",
          school: "sruti",
          schoolLabel: "Śruti",
          country: "The inward turn",
          work: "Aitareya Āraṇyaka · Taittirīya Āraṇyaka · Bṛhadāraṇyaka",
          doctrine: "Teaching that takes the rite into solitude and interiorises it. The forest is a pedagogical place in the traditional story of the corpus.",
          shift: "The bridge from outer performance to inner inquiry — name it without over-romancing it."
        },
        {
          year: "Upaniṣad",
          name: "Sitting near the teacher",
          school: "sruti",
          schoolLabel: "Śruti",
          country: "The same river, asking",
          work: "Īśa, Kena, Kaṭha, Praśna, Muṇḍaka, Māṇḍūkya, Taittirīya, Aitareya, Chāndogya, Bṛhadāraṇyaka",
          doctrine: "Inquiry into ātman and Brahman. Later Vedānta reads this as the ‘end’ of the Veda (anta). It is not a fifth Veda and not a modern paperback of slogans.",
          shift: "Stops the false split: ‘Veda = only fire’ and ‘Upaniṣad = only philosophy.’"
        },
        {
          year: "Pāṭha",
          name: "The weave of recitation",
          school: "anga",
          schoolLabel: "Śākhā",
          country: "Guru-śiṣya paramparā",
          work: "Saṁhitā, pada, krama, jaṭā, ghana",
          doctrine: "Several patterns braid the same verse so that sound is kept as a vow. Exact syllable and svara are an offering.",
          shift: "Memory trained in community — a civilisation trusting the mouth and the ear. Fidelity first; later comparisons are guests."
        }
      ]
    },
    "darsana-pairs": {
      id: "darsana-pairs",
      title: "Darśanas as paired ways of seeing",
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
          shift: "A pair a first-year can actually use: how we know, and what there is. Unit II returns to pramāṇa."
        },
        {
          year: "Pair 3",
          name: "Pūrva-Mīmāṁsā and Vedānta",
          school: "darsana",
          schoolLabel: "Āstika",
          country: "Hermeneutics of Veda",
          work: "Ritual meaning · jñāna reading of Upaniṣad",
          doctrine: "Pūrva-Mīmāṁsā reads the Veda as primarily action-guiding. Vedānta (Uttara-Mīmāṁsā) reads the end of the Veda as knowledge of Brahman. Same library, different centre of gravity.",
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
