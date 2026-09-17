(function (g) {
  g.IKS = g.IKS || {};
  g.IKS.papers = g.IKS.papers || {};
  const coming = g.IKS.coming;

  g.IKS.papers.unit4 = {
    id: "unit4",
    code: "Unit IV",
    title: "Science & Technology in IKS",
    short: "Unit IV topics",
    blurb: "Occupational skills, metallurgy, dyes, town planning, temple architecture, Vāstu. The making-and-settling unit.",
    shelf: {
      primary: "Thakur Unit IV · Mahadevan technology / architecture chapters"
    },
    youtube: [{ title: "Indian metallurgy", search: "ancient Indian metallurgy wootz zinc" }],
    topics: [
      coming({
        id: "u4-occupational",
        seq: 1,
        unit: 4,
        yield: "standard",
        tags: ["kala", "occupation", "heritage"],
        title: "64 arts and occupational skills (S&T view)",
        summary: "Coming next: Unit I’s Kalā catalogue, now as jobs and materials knowledge.",
        lede: "Revisit 64 Kalās as occupational S&T — who makes, with what, under which constraint. Avoid repeating Lecture 4; add the industry lens.",
        hook: "A skills matrix mapped onto real workshops."
      }),
      coming({
        id: "u4-metallurgy",
        seq: 2,
        unit: 4,
        yield: "high",
        tags: ["metallurgy", "zinc", "steel", "copper"],
        title: "Metallurgy — Cu, Au, Zn, Hg, Pb, Ag, Fe, steel",
        summary: "Coming next: a metal-by-metal board with one Indian process or use each — zinc distillation, high-carbon steel, rust-resistant iron as case files, not myths.",
        lede: "The CCS list is a periodic-table slice. Teach process (how extracted/alloyed) and evidence hygiene (what we can fairly claim).",
        hook: "Materials science: properties follow process. Wootz and zinc are case studies, not slogans."
      }),
      coming({
        id: "u4-dyes",
        seq: 3,
        unit: 4,
        yield: "standard",
        tags: ["dyes", "painting", "colour"],
        title: "Dyes and painting technology",
        summary: "Coming next: colour as chemistry and craft — mordants, minerals, organics.",
        lede: "Painting is not only ‘art period.’ Pigments, binders, and fastness are technology. Links to Kalā and to trade.",
        hook: "A colour is a material with a supply chain."
      }),
      coming({
        id: "u4-town",
        seq: 4,
        unit: 4,
        yield: "high",
        tags: ["town-planning", "drainage", "grid"],
        title: "Town planning and settlement",
        summary: "Coming next: streets, drainage, water, and grid thinking from excavated and textual sources — with careful dating talk.",
        lede: "Settlement knowledge: water, waste, streets, public vs private. Use Indus/historic examples as evidence objects, not as blank cheques.",
        hook: "Urban OS: water in, waste out, movement, plot rules."
      }),
      coming({
        id: "u4-temple",
        seq: 5,
        unit: 4,
        yield: "high",
        tags: ["temple", "architecture", "nagara", "dravida"],
        title: "Temple architecture",
        summary: "Coming next: Nāgara / Drāviḍa (and related) as architectural languages — structure, not tourism.",
        lede: "A temple is a structural and symbolic programme. Teach plan, elevation language, and regional schools. Śilpa from Unit I becomes a building.",
        hook: "An architectural DSL with regional dialects."
      }),
      coming({
        id: "u4-vastu",
        seq: 6,
        unit: 4,
        yield: "high",
        tags: ["vastu", "space", "orientation"],
        title: "Vāstu Śāstra",
        summary: "Coming next: spatial brief — orientation, grid, use-zones — taught as design constraints, not as fear-based TV Vāstu.",
        lede: "Vāstu is a tradition of organising space. Distinguish design heuristics (light, wind, grid) from commercial superstition. Neighbour of Śilpa and Sthāpatya.",
        hook: "A layout spec: orientation + modules + functions. Critique the cable-TV layer."
      })
    ]
  };
})(window);
