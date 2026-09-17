(function (g) {
  g.IKS = g.IKS || {};
  g.IKS.papers = g.IKS.papers || {};
  const coming = g.IKS.coming;

  g.IKS.papers.unit3 = {
    id: "unit3",
    code: "Unit III",
    title: "Indian Mathematics & Astronomy",
    short: "Unit III topics",
    blurb: "Mathematicians, Śulba geometry, π, trig, algebra, Piṅgala’s chandas, celestial coordinates, Pañcāṅga, yantras. Coming-next cards keep the sky on the map.",
    shelf: {
      primary: "Thakur Unit III · Mahadevan mathematics & astronomy chapters"
    },
    youtube: [{ title: "Sulba sutras", search: "Shulba Sutra geometry altar" }],
    topics: [
      coming({
        id: "u3-mathematicians",
        seq: 1,
        unit: 3,
        yield: "high",
        tags: ["aryabhata", "brahmagupta", "bhaskara"],
        title: "Indian mathematicians and their contributions",
        summary: "Coming next: a named spine (Āryabhaṭa, Brahmagupta, Bhāskara…) with one contribution each — no hagiography dump.",
        lede: "Teach a short, checkable list: who, which century-band, one idea (place-value arithmetic, zero rules, sine tables, algebra). Pride with citations.",
        hook: "A changelog of authors, not a statue garden."
      }),
      coming({
        id: "u3-arithmetic",
        seq: 2,
        unit: 3,
        yield: "standard",
        tags: ["arithmetic", "operations"],
        title: "Arithmetic operations in the Indian tradition",
        summary: "Coming next: algorithms for the four operations and how place value makes them teachable.",
        lede: "Once positional notation exists, algorithms for +, −, ×, ÷ become classroom objects. Connect to Unit II zero/place-value.",
        hook: "Long multiplication is a procedure — an algorithm — on a place-value grid."
      }),
      coming({
        id: "u3-sulba",
        seq: 3,
        unit: 3,
        yield: "high",
        tags: ["sulba", "geometry", "kalpa"],
        title: "Śulba Sūtras — geometry of the altar",
        summary: "Coming next: cord geometry, squares and circles, the practical Pythagorean neighbourhood — Kalpa’s Unit III file.",
        lede: "Śulba is geometry in the service of constructing ritual spaces with ropes. Measurement, transformation of shapes, and approximations live here. Unit I already labelled the folder.",
        hook: "Computational geometry with a rope: constraints first, theorem language later."
      }),
      coming({
        id: "u3-pi",
        seq: 4,
        unit: 3,
        yield: "high",
        tags: ["pi", "approximation"],
        title: "Value of π — approximations that can be stated",
        summary: "Coming next: named approximations (e.g. Āryabhaṭa’s) as engineering values, not mystical π-worship.",
        lede: "π is a ratio. Indian texts give usable approximations for calculation. Teach the number, the author, the use — then stop before numerology.",
        hook: "A floating-point constant in a pre-modern manual."
      }),
      coming({
        id: "u3-trig",
        seq: 5,
        unit: 3,
        yield: "standard",
        tags: ["jya", "sine", "trigonometry"],
        title: "Trigonometry — jyā and tables",
        summary: "Coming next: sine-like functions as computed tables for astronomy, not as class-10 identities only.",
        lede: "Indian astronomy needed chords/sines. Tables are algorithms frozen into lists. That is a computing idea.",
        hook: "A lookup table is an API for a function you do not want to recompute every time."
      }),
      coming({
        id: "u3-algebra",
        seq: 6,
        unit: 3,
        yield: "standard",
        tags: ["bijaganita", "algebra"],
        title: "Algebra (bījagaṇita neighbourhood)",
        summary: "Coming next: unknown quantities, equations, and the move from arithmetic to symbols.",
        lede: "Algebra is the OS for ‘find x’. Indian bījagaṇita traditions belong on a BCA paper as problem-solving architecture.",
        hook: "Variables are named holes in a procedure."
      }),
      coming({
        id: "u3-chandas",
        seq: 7,
        unit: 3,
        yield: "standard",
        tags: ["pingala", "chandas", "combinatorics"],
        title: "Chandaḥśāstra of Piṅgala (maths view)",
        summary: "Coming next: combinatorics of metres — Unit II’s binary flavour, now as counting.",
        lede: "How many metres of length n? Recurrence ideas appear in this neighbourhood. Keep the poetry and the counting on the same board.",
        hook: "Counting binary strings is combinatorics; metres are constrained strings."
      }),
      coming({
        id: "u3-coords",
        seq: 8,
        unit: 3,
        yield: "standard",
        tags: ["astronomy", "coordinates"],
        title: "Celestial coordinates",
        summary: "Coming next: how the sky is addressed — nakṣatra / ecliptic neighbourhood as a coordinate system.",
        lede: "Astronomy needs a way to name positions. Indian systems are a coordinate language. Compare, do not convert the class into astrology.",
        hook: "Latitude/longitude for the sky — an address space."
      }),
      coming({
        id: "u3-pancanga",
        seq: 9,
        unit: 3,
        yield: "high",
        tags: ["pancanga", "calendar"],
        title: "Pañcāṅga — the Indian calendar system",
        summary: "Coming next: five limbs of the calendar as a time API for ritual and civil life.",
        lede: "Pañcāṅga is a published interface to luni-solar time. Teach the five aṅgas as fields in a datetime object, then stop.",
        hook: "A calendar is a data structure over astronomical cycles."
      }),
      coming({
        id: "u3-yantra",
        seq: 10,
        unit: 3,
        yield: "high",
        tags: ["yantra", "jantar", "instruments"],
        title: "Yantras — Jantar Mantar as instrument lab",
        summary: "Coming next: built instruments for measuring the sky — architecture in the service of observation.",
        lede: "Jantar Mantar (e.g. Jaipur) is a public instrument park. Yantra = device. This is Unit III’s hardware lab, and a door into Unit IV making.",
        hook: "Sensors you can walk through — analog computers in masonry."
      })
    ]
  };
})(window);
