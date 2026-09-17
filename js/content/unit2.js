(function (g) {
  g.IKS = g.IKS || {};
  g.IKS.papers = g.IKS.papers || {};
  const coming = g.IKS.coming;

  g.IKS.papers.unit2 = {
    id: "unit2",
    code: "Unit II",
    title: "Foundation for Science & Technology",
    short: "Unit II topics",
    blurb: "Sanskrit as a formal language, zero and place value, Bhūta-saṁkhyā, Katapayādi, Piṅgala, pramāṇa. Titles live now; scripts come next.",
    shelf: {
      primary: "Thakur Unit II · Mahadevan language & mathematics chapters (physical book)"
    },
    youtube: [{ title: "Pāṇini computational", search: "Panini Ashtadhyayi computational linguistics" }],
    topics: [
      coming({
        id: "u2-phonetics",
        seq: 1,
        unit: 2,
        yield: "standard",
        tags: ["sanskrit", "phonetics", "siksha"],
        title: "Sanskrit linguistics and phonetics",
        summary: "Coming next: sounds as discrete data — why Śikṣā belongs on a computing timetable.",
        lede: "Phonetics is where Unit I’s Śikṣā becomes a lab: places of articulation, vowels as a closed set, sandhi as rewrite.",
        hook: "A phoneme inventory is an alphabet for a speech runtime — tokens before parsing."
      }),
      coming({
        id: "u2-panini",
        seq: 2,
        unit: 2,
        yield: "high",
        tags: ["panini", "astadhyayi", "rules"],
        title: "Pāṇini’s Aṣṭādhyāyī as a rule system",
        summary: "Coming next: ordered sūtras, meta-rules, and why CS people hear ‘compiler frontend’.",
        lede: "Aṣṭādhyāyī is a finite set of rules with an application order — generation and analysis of forms, not a dictionary to memorise.",
        hook: "Rewrite rules + priority = the feeling of a grammar engine.",
        diagram: { type: "flow", steps: ["Sūtra", "Meta-rule / order", "Derived form"] }
      }),
      coming({
        id: "u2-nlp",
        seq: 3,
        unit: 2,
        yield: "high",
        tags: ["nlp", "sanskrit", "computational"],
        title: "Sanskrit and NLP",
        summary: "Coming next: what is actually reusable in modern NLP, without claiming that Pāṇini ‘is Python’.",
        lede: "Morphology-rich language, explicit sandhi, and a culture of rule-writing. Honest bridge to computational linguistics; no miracle claims.",
        hook: "Tokenisation is hard when sandhi glues tokens. That is a real NLP problem, not a slogan."
      }),
      coming({
        id: "u2-zero",
        seq: 4,
        unit: 2,
        yield: "high",
        tags: ["zero", "place-value", "decimal"],
        title: "Zero, place value, and the decimal system",
        summary: "Coming next: śūnya as a number and as a place — the positional OS that later arithmetic assumes.",
        lede: "Place value is an encoding: the same glyph means different magnitudes by slot. Zero is both a quantity and a positional blank. This is the Unit II headline for every BCA student.",
        hook: "Without a zero glyph, you do not have a clean positional notation — like missing 0 in binary."
      }),
      coming({
        id: "u2-large",
        seq: 5,
        unit: 2,
        yield: "standard",
        tags: ["numbers", "scale", "names"],
        title: "Large numbers and their names",
        summary: "Coming next: named scales beyond crore — a culture that needed words for huge counts.",
        lede: "Indian counting vocabularies go far past everyday market numbers. Teach as a naming architecture for scale, not as a world-record shout.",
        hook: "Scientific notation is one way to name large magnitudes; traditional scales are another lexicon for the same problem."
      }),
      coming({
        id: "u2-bhuta",
        seq: 6,
        unit: 2,
        yield: "high",
        tags: ["bhuta-sankhya", "encoding"],
        title: "Bhūta-saṁkhyā",
        summary: "Coming next: encoding numbers as memorable nouns (earth=1, eyes=2…) — a checksum-friendly notation for verse.",
        lede: "A concrete-word code for numerals so a number can live inside a śloka. Inverse of writing digits; useful when memory is the disk.",
        hook: "It is a substitution cipher from integers to a constrained noun list — data in poetry."
      }),
      coming({
        id: "u2-katapayadi",
        seq: 7,
        unit: 2,
        yield: "high",
        tags: ["katapayadi", "encoding", "alphabet"],
        title: "Katapayādi",
        summary: "Coming next: consonants as digits — another verse-safe numeral encoding.",
        lede: "Map groups of consonants to 0–9 so a meaningful word can carry a number (often least-significant first in the taught scheme). Famous in astronomical verse.",
        hook: "Base-10 digits encoded in an alphabet — like packing an integer into a pronounceable string."
      }),
      coming({
        id: "u2-pingala",
        seq: 8,
        unit: 2,
        yield: "high",
        tags: ["pingala", "binary", "chandas"],
        title: "Piṅgala — metre, combinatorics, binary flavour",
        summary: "Coming next: light/heavy syllables as two symbols; counting metres; the honest binary analogy.",
        lede: "Chandaḥśāstra treats verse patterns as sequences of two lengths. Combinatorial questions follow. Teach the two-symbol idea carefully — analogy, not a patent claim on 1950s hardware.",
        hook: "Two symbols, sequences, counting — the shape of binary thinking in a metre lab."
      }),
      coming({
        id: "u2-pramana",
        seq: 9,
        unit: 2,
        yield: "high",
        tags: ["pramana", "prameya", "samsaya", "knowledge"],
        title: "Knowledge pyramid — Prameya, Pramāṇa, Saṁśaya",
        summary: "Coming next: what is known, how we know, and what doubt is for — Nyāya handles for a computing class.",
        lede: "Prameya = the knowable. Pramāṇa = valid means of knowing. Saṁśaya = doubt that starts inquiry. This is Unit I darśana returning as a science-method card.",
        hook: "Spec (what), tests (how), failing tests (doubt). A knowledge pipeline, not a mood."
      })
    ]
  };
})(window);
