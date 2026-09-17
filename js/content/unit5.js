(function (g) {
  g.IKS = g.IKS || {};
  g.IKS.papers = g.IKS.papers || {};
  const coming = g.IKS.coming;

  g.IKS.papers.unit5 = {
    id: "unit5",
    code: "Unit V",
    title: "Humanities & Social Sciences in IKS",
    short: "Unit V topics",
    blurb: "Āyurveda daily regimen, Yoga, Triguṇa, body–mind–intellect–consciousness, Rāmāyaṇa administration, Arthaśāstra. The life-and-state unit.",
    shelf: {
      primary: "Thakur Unit V · Mahadevan health / Yoga / polity chapters"
    },
    youtube: [{ title: "Arthashastra overview", search: "Kautilya Arthashastra statecraft lecture" }],
    topics: [
      coming({
        id: "u5-ayurveda",
        seq: 1,
        unit: 5,
        yield: "high",
        tags: ["ayurveda", "sleep", "food", "water"],
        title: "Āyurveda — sleep, food, water",
        summary: "Coming next: daily regimen as a knowledge system — not a diagnosis clinic in a BCA room.",
        lede: "CCS names sleep, food, and water. Teach as public-health adjacent wisdom: timing, measure, quality. Upaveda folder from Unit I. No student should leave thinking they can prescribe medicines.",
        hook: "A wellness protocol is a constrained schedule — inputs (food, water, sleep) with timing."
      }),
      coming({
        id: "u5-yoga",
        seq: 2,
        unit: 5,
        yield: "high",
        tags: ["yoga", "astanga", "practice"],
        title: "Yoga as a way of life",
        summary: "Coming next: Yoga as darśana-plus-practice, not only āsana Instagram.",
        lede: "Unit I paired Yoga with Sāṁkhya. Unit V opens the practice stack (ethical limbs, breath, posture, attention) as a life OS. Keep it non-sectarian and non-gym.",
        hook: "A full-stack practice: ethics at the bottom, attention at the top — not a stretching DLC."
      }),
      coming({
        id: "u5-psych",
        seq: 3,
        unit: 5,
        yield: "standard",
        tags: ["psychology", "wellbeing"],
        title: "Indian approaches to psychology and wellbeing",
        summary: "Coming next: mind as a taught object — citta, kleśa neighbourhood — in dialogue with, not a replacement for, modern psychology.",
        lede: "IKS talks about mind, habit, and flourishing in several dialects (Yoga, Āyurveda, Buddhist analysis). Teach as models. CO4: wellbeing without denying clinical care.",
        hook: "Multiple models of mind — pick the claim, name the school, do not mix into smoothie."
      }),
      coming({
        id: "u5-triguna",
        seq: 4,
        unit: 5,
        yield: "high",
        tags: ["triguna", "sattva", "rajas", "tamas"],
        title: "Triguṇa",
        summary: "Coming next: sattva, rajas, tamas as a three-quality model of prakṛti — descriptive, not a way to insult classmates.",
        lede: "Sāṁkhya’s three qualities leak into everyday IKS talk. Teach as a typology of activity/inertia/clarity. Ban using it to label students.",
        hook: "Three base traits whose mix explains states — a coarse clustering model, not a personality attack."
      }),
      coming({
        id: "u5-bmic",
        seq: 5,
        unit: 5,
        yield: "standard",
        tags: ["body", "mind", "intellect", "consciousness"],
        title: "Body–Mind–Intellect–Consciousness",
        summary: "Coming next: a layered person-model used in modern IKS teaching — map it, do not mystify it.",
        lede: "Some contemporary IKS classrooms stack śarīra, manas, buddhi, caitanya. Teach as a layer diagram: sensor/hardware, processor of impressions, discriminative function, witness. Connect to Sāṁkhya/Yoga without new religion.",
        hook: "Hardware · OS · application logic · user. A stack metaphor — keep it modest."
      }),
      coming({
        id: "u5-ramayana-admin",
        seq: 6,
        unit: 5,
        yield: "standard",
        tags: ["ramayana", "administration", "governance"],
        title: "Public administration via the Rāmāyaṇa",
        summary: "Coming next: kingship, counsel, and constraint — Unit I Itihāsa applied to governance.",
        lede: "Rāmāyaṇa as a public-admin case file: promise, exile, alliance, city. Extract institutional handles. No community-baiting.",
        hook: "A narrative postmortem of leadership protocols."
      }),
      coming({
        id: "u5-artha",
        seq: 7,
        unit: 5,
        yield: "high",
        tags: ["arthasastra", "kautilya", "state"],
        title: "Arthaśāstra and the Kautilyan state",
        summary: "Coming next: seven prakṛtis, intelligence, treasury, dharma-artha tension — statecraft as a knowledge system.",
        lede: "Kautilya’s Arthaśāstra is the heavy nīti file: organs of the state, revenue, spies, foreign policy. Teach structure. Compare lightly with a modern civics map; do not cosplay empire.",
        hook: "A systems design document for a state: components, information flows, failure modes."
      })
    ]
  };
})(window);
