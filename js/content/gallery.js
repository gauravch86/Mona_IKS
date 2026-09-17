(function (g) {
  const D = window.IKSDiagrams;

  const CLUSTERS = {
    performing: { id: "performing", title: "Performing arts", colour: "saffron", idea: "Sound, body, and stage — gīta, vādya, nṛtya, and the play that needs a costume." },
    visual: { id: "visual", title: "Visual and plastic arts", colour: "crimson", idea: "Line, pigment, flower, jewel, and the floor as a picture." },
    domestic: { id: "domestic", title: "Domestic and personal arts", colour: "gold", idea: "Food, drink, dress, the made bed, the arranged ornament." },
    craft: { id: "craft", title: "Craft and materials", colour: "teal", idea: "Wood, metal, thread, stone, mine, and machine — the hand that measures." },
    language: { id: "language", title: "Language and intellect", colour: "indigo", idea: "Riddle, verse, metre, lexicon, memory, and secret writing." },
    social: { id: "social", title: "Social and strategic arts", colour: "violet", idea: "Conversation of a court, disguise, games, etiquette, and the arts that win." },
    nature: { id: "nature", title: "Nature and care", colour: "green", idea: "Water, trees, animals, perfume-plants, and the tended body." }
  };

  /* Primary classroom list: Vātsyāyana’s catuḥṣaṣṭi kalā (Kāmasūtra 1.3 tradition).
     Numbering follows the usual enumeration of that compound. Lists in Śukranīti, Purāṇa
     commentaries, and later posters differ; the class names the variance and keeps one spine. */
  const KALAS = [
    [1, "Gīta", "Singing", "performing"],
    [2, "Vādya", "Playing musical instruments", "performing"],
    [3, "Nṛtya", "Dancing", "performing"],
    [4, "Ālekhya", "Painting and drawing", "visual"],
    [5, "Viśeṣaka-cchedya", "Decorative marks on the face; cosmetic design", "visual"],
    [6, "Taṇḍula-kusuma-bali-vikāra", "Designs with rice-grains and flowers", "visual"],
    [7, "Puṣpāstaraṇa", "Spreading and arranging flowers", "visual"],
    [8, "Daśana-vasanāṅga-rāga", "Colouring of teeth, garments, and the body", "domestic"],
    [9, "Maṇi-bhūmikā-karma", "Jewel-inlaid or mosaic floors", "visual"],
    [10, "Śayyā-racana", "Making the bed and arranging the couch", "domestic"],
    [11, "Udaka-vādya", "Music made with water", "performing"],
    [12, "Udaka-ghāta", "Water-play; skill with streams and reservoirs", "nature"],
    [13, "Citra-yoga", "Pictorial combinations and the mixing of colours", "visual"],
    [14, "Mālya-grathana-vikalpa", "Stringing garlands in many patterns", "visual"],
    [15, "Śekharāpīḍa-yojana", "Setting a floral crest or chaplet", "visual"],
    [16, "Nepathya-yoga", "Costume, makeup, and stage dress", "performing"],
    [17, "Karṇa-patra-bhaṅga", "Ear ornaments — making and wearing", "visual"],
    [18, "Gandha-yukti", "The compounding of perfumes", "nature"],
    [19, "Bhūṣaṇa-yojana", "Arranging ornaments on the body", "domestic"],
    [20, "Aindra-jāla", "Illusion, juggling, wonder-play", "social"],
    [21, "Kaucumāra-yoga", "Toilet-recipes of Kucumāra — cosmetics and care", "domestic"],
    [22, "Hasta-lāghava", "Sleight of hand", "social"],
    [23, "Citra-śākāpūpa-bhakṣya-vikāra-kriyā", "Culinary art: vegetables, breads, prepared dishes", "domestic"],
    [24, "Pānaka-rasa-rāgāsava-yojana", "Preparing flavoured drinks", "domestic"],
    [25, "Sūcī-vāna-karma", "Needlework and sewing", "craft"],
    [26, "Sūtra-krīḍā", "Play and figures with thread", "craft"],
    [27, "Vīṇā-ḍamaruka-vādya", "Specialised playing of the vīṇā and small drum", "performing"],
    [28, "Prahelikā", "Riddles", "language"],
    [29, "Pratimālā", "Capping verses; reciting in a chain", "language"],
    [30, "Durvācaka-yoga", "Difficult speech, tongue-twisters, obscure utterance", "language"],
    [31, "Pustaka-vācana", "Reading and reciting from books", "language"],
    [32, "Nāṭakākhyāyikā-darśana", "Staging plays and framed stories", "performing"],
    [33, "Kāvya-samasyā-pūraṇa", "Completing a verse from a given fragment", "language"],
    [34, "Paṭṭikā-vetra-vāṇa-vikalpa", "Work in cane, reed, and shaft", "craft"],
    [35, "Takṣaṇa", "Carpentry and wood-shaping", "craft"],
    [36, "Vāstu-vidyā", "Knowledge of building and spatial measure", "craft"],
    [37, "Rūpya-ratna-parīkṣā", "Testing silver and gems", "craft"],
    [38, "Dhātu-vāda", "Knowledge of metals", "craft"],
    [39, "Maṇi-rāga-jñāna", "Knowing and tinting gems", "craft"],
    [40, "Ākara-jñāna", "Knowledge of mines and sources of stone and metal", "craft"],
    [41, "Vṛkṣāyurveda-yoga", "Care and healing of trees; arboriculture", "nature"],
    [42, "Meṣa-kukkuṭa-lāvaka-yuddha-vidhi", "Traditional sport-knowledge of ram, cock, and quail contests", "social"],
    [43, "Śuka-sārikā-pralāpana", "Teaching parrots and mynas to speak", "nature"],
    [44, "Utsādana", "Anointing and shampooing the body", "nature"],
    [45, "Saṃvāhana", "Massage", "nature"],
    [46, "Keśa-mārjana-kauśala", "The skill of tending hair", "nature"],
    [47, "Akṣara-muṣṭikā-kathana", "Finger-cipher and gesture-speech", "language"],
    [48, "Mlecchita-vikalpa", "Secret writing and coded speech", "language"],
    [49, "Deśa-bhāṣā-jñāna", "Knowledge of the country’s languages", "language"],
    [50, "Puṣpa-śakaṭikā-nimitta-jñāna", "Flower-chariots and reading floral signs", "social"],
    [51, "Yantra-mātṛkā", "Making of mechanical devices", "craft"],
    [52, "Dhāraṇa-mātṛkā", "The art of memory", "language"],
    [53, "Saṃpāṭhya", "Reciting together; shared reading", "language"],
    [54, "Mānasī kāvya-kriyā", "Composing poetry in the mind", "language"],
    [55, "Abhidhāna-koṣa", "Lexicons and word-treasuries", "language"],
    [56, "Chando-jñāna", "Knowledge of metre", "language"],
    [57, "Kriyā-vikalpa", "Improvised composition; variant renderings", "language"],
    [58, "Chalitaka-yoga", "Disguise", "social"],
    [59, "Vastra-gopana", "Changing appearance through dress", "social"],
    [60, "Dyūta-viśeṣa", "Games of dice and chance as a known art", "social"],
    [61, "Ākarṣa-krīḍā", "Board-games of attraction (the pachisi neighbourhood)", "social"],
    [62, "Bālaka-krīḍanaka", "Making toys and children’s playthings", "social"],
    [63, "Vaināyikī vidyā", "Etiquette and the training of conduct", "social"],
    [64, "Vaijayikī vidyā", "Arts that win — training and success in contest", "social"]
  ];

  function kalaTable() {
    const rows = KALAS.map(
      ([n, sa, en, c]) =>
        `<tr><td>${n}</td><td><em>${sa}</em></td><td>${en}</td><td><span class="cluster-tag">${CLUSTERS[c].title}</span></td></tr>`
    ).join("");
    return `<div class="map-wrap"><table class="compare kala-index">
      <thead><tr><th>#</th><th>Sanskrit</th><th>English</th><th>Cluster</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  }

  function clusterPanels() {
    const order = ["performing", "visual", "domestic", "craft", "language", "social", "nature"];
    return `<div class="cluster-panels">${order
      .map((id) => {
        const meta = CLUSTERS[id];
        const items = KALAS.filter((k) => k[3] === id);
        const nums = items.map((k) => k[0]).join(", ");
        const lis = items.map((k) => `<li><strong>${k[0]}.</strong> <em>${k[1]}</em> — ${k[2]}</li>`).join("");
        return `<article class="cluster-card">
          <h3>${meta.title} <small>(${items.length})</small></h3>
          <p class="nums">nos. ${nums}</p>
          <p>${meta.idea}</p>
          <ul>${lis}</ul>
        </article>`;
      })
      .join("")}</div>`;
  }

  function kalas() {
    return `
      <aside class="verse">
        <p class="sanskrit">Kalā is not a hobby-list. It is a cultivated competence — a hand, a voice, a measure, a courtesy — brought to finish.</p>
        <p class="gloss">kalā · skilled making · beside vidyā, not beneath it</p>
        <p>Where a <strong>vidyā</strong> is a seat of organised knowing (the fourteen seats of the next card), a <strong>kalā</strong> is something a person can <em>do</em> with grace under constraint: sing a rāga, set a stone, complete a verse, test a gem, keep a guest. Indian education counted both. That double count is the point of this chapter.</p>
      </aside>

      <h2>What a kalā is</h2>
      <p>In ordinary Sanskrit, <em>kalā</em> can mean a digit of the moon, a small part, or an art. On this paper it means a <em>trained skill</em>. The famous number is sixty-four — <em>catuḥṣaṣṭi kalā</em>. The number is a cultural signal: a learned person was expected to be more than a reciter of verse. The body that sings, the hand that carves, the mind that riddles, and the social art of not humiliating a guest all sit inside one catalogue.</p>
      <p><strong>Lists vary, and they should be allowed to.</strong> Vātsyāyana’s <em>Kāmasūtra</em> (book 1, the chapter on the arts of a cultured life) is the spine used here. Śukranīti, Purāṇa commentaries, and later temple-poster traditions shuffle names and sometimes count differently (Lalitavistara even speaks of a larger set of arts in the Bodhisattva’s education). A pandit is not embarrassed by variance; a first-year student need not be either. We pick one numbered list so the class can point, and we say out loud that it is one classical tradition among others.</p>
      <p>The CCS sheet check-marks 64 Kalās because the heading is a window onto occupational knowledge, gurukula training, and what later policy calls multidisciplinary skill. The window is the list itself — not a warning to skip the list.</p>

      <h2>The map of sixty-four</h2>
      <p>Below, every item is numbered with a Sanskrit name and a plain English gloss. The right-hand column is a <em>pedagogical</em> cluster — seven rooms in which to walk the list — not a claim that the classical text drew these seven circles.</p>
      ${D.render({ type: "named", id: "kalas-clusters", title: "Seven-cluster mandala — all 64 assigned" })}
      ${kalaTable()}

      <h2>Seven rooms, with every kalā inside one of them</h2>
      ${clusterPanels()}

      <h2>Three deep dives (how to explain, not how to skip)</h2>
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>1. Nṛtya is not ‘an extra’</h3>
          <p>Dance (3), song (1), instrument (2, 27), costume (16), and staged story (32) are one household. A Chola bronze of Naṭarāja is not a souvenir of ‘art period’: it is metal-knowledge (38) holding a theology of dance. Living forms — Bharatanāṭyam, Odissi, Kathak, Kūṭiyāṭṭam — are what gurukula transmission looks like when the kalā did not die.</p>
        </article>
        <article class="deep-panel">
          <h3>2. Ālekhya has a wall</h3>
          <p>Painting (4), pictorial yoga (13), rice-and-flower design (6), garlands (14), mosaic floors (9) are the visual room. Ajanta’s painted Bodhisattva is a cousin of ālekhya: mineral pigment, narrative programme, a cave as a manuscript of colour. Ellora’s cut mountain is takṣaṇa and vāstu at civilisational scale.</p>
        </article>
        <article class="deep-panel">
          <h3>3. Cipher sits next to cooking</h3>
          <p>The list refuses modern snobbery. Culinary art (23) and drinks (24) share a civilisation with secret writing (48), finger-cipher (47), lexicons (55), and metre (56). A BCA student who only notices <em>mlecchita-vikalpa</em> because it sounds like encryption has still only noticed one door. The dignity of the catalogue is that pāka and prahelikā are both kalā.</p>
        </article>
      </div>

      <h2>Lived heritage — temples, bronze, paint, and the living stage</h2>
      <p>Temple walls in India are not blank masonry waiting for a guidebook. They are <strong>sculpture programmes</strong>: dancers, drummers, garland-bearers, jewelled gods, floral ceilings, and sometimes the very tools of making. To walk a mandapa is to walk a kalā-index in stone. Festival arts (ratha, alankāra, nadasvaram, yakṣagāna) are the same index outdoors.</p>
      ${D.render({
        type: "figures",
        title: "Heritage figures — public images, captions as teaching",
        items: [
          {
            file: "Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg",
            alt: "Chola-period bronze of Shiva Nataraja",
            caption: "Naṭarāja, Chola bronze (LACMA).",
            note: "Lost-wax metal kalā (dhātu-vāda, 38) holding nṛtya (3). The image is a theology you can lift."
          },
          {
            file: "Bharatanatyam.jpg",
            alt: "Bharatanatyam dancer",
            caption: "Bharatanāṭyam as living nṛtya.",
            note: "A gurukula art: body, tāla, abhinaya, costume (16). Not a fossil."
          },
          {
            file: "Odissi.jpg",
            alt: "Odissi dancer",
            caption: "Odissi — tribhaṅga in motion.",
            note: "The bend of the body is already in Konark’s stone; the living dancer completes the sentence."
          },
          {
            file: "Ajanta_Padmapani.jpg",
            alt: "Padmapani mural at Ajanta",
            caption: "Ajanta, Padmapāṇi (Cave 1).",
            note: "Ālekhya lineage: mineral colour, compassion as a painted posture, a cave as a book."
          },
          {
            file: "Brihadeeswara_Temple_-_Thanjavur.jpg",
            alt: "Brihadisvara temple vimana at Thanjavur",
            caption: "Bṛhadīśvara, Thanjāvūr.",
            note: "Drāviḍa vimāna as vāstu-vidyā (36) plus a sculpture programme of dancers and attendants."
          },
          {
            file: "Konark_Sun_Temple.jpg",
            alt: "Konark Sun Temple",
            caption: "Konark, the sun-temple.",
            note: "Stone chariot: takṣaṇa, maṇi-bhūmikā thinking, musicians in relief — kalās as a built hymn to time."
          }
        ]
      })}

      <h2>Kalā beside śilpa, beside vidyā</h2>
      <p><strong>Vidyāsthāna</strong> names a curriculum seat (Veda, Vedāṅga, Upāṅga). <strong>Kalā</strong> names practised skill. <strong>Śilpa</strong> names the śāstra of making — proportion, material, process — so that another workshop can repeat an image or a moulding. A temple needs all three: a vidyā of sacred measure, kalās in the hands of the dancing and carving community, and śilpa so the vimāna stands. Unit IV will return to metallurgy, dyes, and vāstu; this card plants the people who already knew those as arts.</p>

      <h2>Worked examples you can actually say aloud</h2>
      <ul>
        <li><strong>From list to life:</strong> “Number 38, dhātu-vāda, is why a Chola Naṭarāja can still take a museum light without collapsing — metal as a known art, not a mystery.”</li>
        <li><strong>From life to list:</strong> “A rangoli at a threshold is kin to taṇḍula-kusuma-bali-vikāra (6): grain and powder as a daily ālekhya.”</li>
        <li><strong>From list to a computing student without stealing the spine:</strong> “Mlecchita-vikalpa (48) is coded speech. Notice it; then put it back beside cooking and garlands, or the catalogue has been flattened into a single modern interest.”</li>
      </ul>

      <h2>What an answer should sound like</h2>
      <p>A 2-marker names the catalogue and two kalās from different rooms. A 5-marker defines kalā against vidyā and walks one cluster with examples. A 10-marker uses the seven-room map, cites the ‘lists vary’ honesty, and lands in a temple or a living dance form — not in a paragraph about what the professor should not do.</p>
    `;
  }

  function vedas() {
    return `
      <aside class="verse">
        <p class="sanskrit">अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।<br/>होतारं रत्नधातमम् ॥</p>
        <p class="gloss">agnim īḷe purohitaṃ yajñasya devam ṛtvijam / hotāraṃ ratnadhātamam — Ṛgveda 1.1.1</p>
        <p>The Ṛgveda does not open with a theory. It opens with a calling. Agni is praised as the priest placed in front, the hotṛ who bears treasure, the guest through whom speech reaches the gods. A civilisation that begins its remembered book with fire and invitation is already telling you what ‘Veda’ will mean: not a locked museum label, but a heard world.</p>
      </aside>

      <h2>What ‘Veda’ names</h2>
      <p><em>Veda</em> is from the root <em>vid</em>, to know. In this paper it names the four great saṁhitās of <strong>śruti</strong> — that which is heard. Traditional Mīmāṁsā calls this speech <em>apauruṣeya</em>: not authored in the way a human book is authored. A classroom can state that claim with respect without turning the hour into a debate club. What no serious reader disputes is the other half: these corpora were conserved by recitation schools (<em>śākhā</em>), teacher to student, as a vow of sound.</p>
      <p>Śruti is the heard file of the civilisation. <strong>Smṛti</strong> is remembered literature — dharma texts, epics, Purāṇas — that acknowledges human transmission and, in orthodox reading, must not contradict śruti. Keep the distinction technical and warm. It is a care of sources, not a ranking of people.</p>

      <h2>Four faces of śruti</h2>
      <p>Four named Vedas, four temperaments. Learn each as a character, not as a bullet.</p>
      ${D.render({ type: "named", id: "veda-four", title: "Ṛg · Yajur · Sāma · Atharva" })}

      <div class="deep-panels">
        <article class="deep-panel">
          <h3>Ṛgveda — the hymn-ocean</h3>
          <p>About a thousand sūktas arranged in ten maṇḍalas. The ‘family books’ (maṇḍalas 2–7) keep the names of ṛṣi-lineages; the outer maṇḍalas gather other strata, including the great philosophical hymn of the unknown source (Nāsadīya, 10.129) and the Puruṣa-sūkta’s vision of a cosmos that is also a sacrifice. Metres are not decoration: gāyatrī, triṣṭubh, jagatī are how the hymn stands up. Deities are addressed powers — Agni, Indra, Soma, Varuṇa, Uṣas — not mascots. When you say ‘Ṛgveda’ in an answer, say <em>ṛc</em>, maṇḍala, and hymn.</p>
        </article>
        <article class="deep-panel">
          <h3>Yajurveda — the Veda of the offering</h3>
          <p>Here speech is for the rite. Two recensions are taught by name: <strong>Śukla</strong> (White), with mantra and brāhmaṇa more clearly set apart (Vājasaneyi; Mādhyandina and Kāṇva schools), and <strong>Kṛṣṇa</strong> (Black), where formula and explanatory prose travel together (Taittirīya, Maitrāyaṇī, Kāṭhaka…). This is not a colour-war. It is two honest ways of carrying liturgical knowledge. The yajus is the sentence the rite cannot do without.</p>
        </article>
        <article class="deep-panel">
          <h3>Sāmaveda — where the ṛk becomes song</h3>
          <p>Much of the Sāmaveda’s verse is Ṛg material lifted into <em>gāna</em>. That fact is a teaching gift: a ‘new’ Veda can be a new <em>way of sounding</em> a known hymn. Schools include Kauthuma, Rāṇāyanīya, Jaiminīya. Gandharvaveda later hangs near this door. If Ṛgveda is the poem, Sāmaveda is the poem remembering it is music.</p>
        </article>
        <article class="deep-panel">
          <h3>Atharvaveda — śruti of the household and of peace</h3>
          <p>The Atharvan–Aṅgiras stream keeps hymns of healing (bheṣaja), of śānti, of kingship, of the house’s trouble and hope. Śaunaka and Paippalāda are the two recensions usually named. Do not caricature this Veda as ‘the magical leftover.’ A pandit who recites Atharvan śānti is not slumming; he is in śruti. A modern reader who only wants ‘philosophy’ from the Upaniṣads has not yet met the Veda that knows a fever and a field.</p>
        </article>
      </div>

      ${D.render({
        type: "figures",
        items: [
          {
            file: "Yajna.jpg",
            alt: "A Vedic-style fire offering",
            caption: "Agni as guest.",
            note: "The Ṛgveda’s first word is a fire-priest. The yajña is a grammar of offering, not a spectacle for photographs."
          }
        ]
      })}

      <h2>The inner river: Saṁhitā · Brāhmaṇa · Āraṇyaka · Upaniṣad</h2>
      <p>Each Veda is taught as a <em>tradition with depth</em>, not as a single slim volume. The four layers are a walk inward — from the collected mantra, through the thinking of the rite, into the forest, into the questions asked while sitting near the teacher (<em>upa-ni-ṣad</em>).</p>
      ${D.render({ type: "named", id: "veda-river", title: "One river, four depths" })}

      <div class="deep-panels">
        <article class="deep-panel">
          <h3>Saṁhitā</h3>
          <p>The gathered mantras. This is the Veda as most people first imagine it: hymn, formula, chant — the collected speech the other layers surround.</p>
        </article>
        <article class="deep-panel">
          <h3>Brāhmaṇa</h3>
          <p>Prose that explains the rite — why this brick, this verse, this sequence. Named oceans: Aitareya and Kauṣītaki (Ṛg), Śatapatha (Śukla Yajur), Taittirīya (Kṛṣṇa Yajur), Tāṇḍya/Pañcaviṁśa (Sāma), Gopatha (Atharva). The Brāhmaṇa is the liturgy thinking aloud. It is not ‘later padding.’</p>
        </article>
        <article class="deep-panel">
          <h3>Āraṇyaka</h3>
          <p>Forest treatises. The sacrifice is taken into solitude and interiorised. Aitareya Āraṇyaka, Taittirīya Āraṇyaka, Bṛhadāraṇyaka (which is also the doorway into a great Upaniṣad) — the forest is a pedagogical place, not a tourist metaphor.</p>
        </article>
        <article class="deep-panel">
          <h3>Upaniṣad</h3>
          <p>Inquiry. The same river, now asking what the rite, the hymn, and the self <em>are</em>. This is not a fifth Veda and not a modern self-help shelf. It is śruti still, sitting close.</p>
        </article>
      </div>

      <h2>Upaniṣadic doorways</h2>
      <p>Ten <em>mukhya</em> (principal) Upaniṣads are the usual first map — the set Śaṅkara’s tradition comments as a spine, with sister texts (Śvetāśvatara, Kauṣītaki, Maitrī) standing nearby. Each has a temperament. Learn them as rooms, not as a chanted shopping list.</p>
      <div class="upanishad-grid">
        <article class="upa-card"><h3>Īśā</h3><p>The Lord and the world’s covering; how to live in it without grabbing. A short door with a long afterlife.</p></article>
        <article class="upa-card"><h3>Kena</h3><p>‘By whom?’ — the question that unseats the senses’ pride. Umā’s teaching to Indra is a scene worth telling once.</p></article>
        <article class="upa-card"><h3>Kaṭha</h3><p>Naciketas at Yama’s house. Death as a teacher; the chariot of the body; the famous two paths.</p></article>
        <article class="upa-card"><h3>Praśna</h3><p>Six questions to Pippalāda. A classroom in the text itself.</p></article>
        <article class="upa-card"><h3>Muṇḍaka</h3><p>Two knowledges — lower and higher — and the image of two birds on one tree.</p></article>
        <article class="upa-card"><h3>Māṇḍūkya</h3><p>The shortest: AUM and the four quarters of the self. A whole metaphysics in a handful of mantras.</p></article>
        <article class="upa-card"><h3>Taittirīya</h3><p>From śikṣā to the five sheaths (kośa) to ānanda. A ladder you can draw.</p></article>
        <article class="upa-card"><h3>Aitareya</h3><p>Creation and consciousness; the mahāvākya <em>prajñānaṃ brahma</em>.</p></article>
        <article class="upa-card"><h3>Chāndogya</h3><p>A Sāmavedic forest of stories: Śvetaketu, Uddālaka, <em>tat tvam asi</em>, the honey-doctrine, the space within the heart.</p></article>
        <article class="upa-card"><h3>Bṛhadāraṇyaka</h3><p>Yājñavalkya’s debates; Gārgī and Maitreyī; <em>neti neti</em>; <em>aham brahmāsmi</em>. The great forest-brāhmaṇa as inquiry.</p></article>
      </div>
      <div class="mahavakya-row">
        <article><p class="sa">प्रज्ञानं ब्रह्म</p><p>prajñānaṃ brahma — Aitareya. Consciousness is Brahman.</p></article>
        <article><p class="sa">अहं ब्रह्मास्मि</p><p>aham brahmāsmi — Bṛhadāraṇyaka. I am Brahman.</p></article>
        <article><p class="sa">तत्त्वमसि</p><p>tat tvam asi — Chāndogya. That thou art.</p></article>
        <article><p class="sa">अयमात्मा ब्रह्म</p><p>ayam ātmā brahma — Māṇḍūkya. This Self is Brahman.</p></article>
      </div>
      <p>These four <em>mahāvākyas</em> are traditional hinges, not slogans for a sticker. In class, say which Upaniṣad holds which line, then stop. The line is a doorway; walking through it is a lifetime.</p>

      <h2>How the sound was kept — with dignity</h2>
      <p>A Veda that lives in the mouth is not a failed book. It is a choice. The <em>guru-śiṣya-paramparā</em> of a śākhā treats syllable, accent (<em>svara</em>), and breath as sacred exactitude. Several <em>pāṭha</em> patterns braid the same verse so that a slipped sound is felt as a broken offering, not as a ‘typo.’</p>
      ${D.render({ type: "named", id: "patha-weave", title: "The weave of pāṭha" })}
      <p>Saṁhitā, pada, krama, jaṭā, ghana: names a student can carry. What they name is tapas — a reciter’s discipline — and a civilisation’s trust that memory, trained in community, can hold what matters. Engineers may later notice redundancy. Notice the hymn first.</p>

      <h2>A note on dating, science-claims, and pride</h2>
      <p>This gallery will not spend its hour on calendar-fights. It will not claim astrophysics from a hymn as if the ṛṣi had sat a modern exam. Pride (CO4) here means: we can describe a sacred corpus accurately, name its inner river, and refuse both sneer and cartoon. That is enough knowledge for a first-year paper, and enough reverence for a traditional scholar in the room.</p>
    `;
  }

  function vedanga() {
    return `
      <aside class="verse">
        <p class="sanskrit">chandah pādau tu vedasya hastau kalpo ’tha paṭhyate ।<br/>jyotiṣām ayanaṃ cakṣur niruktaṃ śrotram ucyate ॥<br/>śikṣā ghrāṇaṃ tu vedasya mukhaṃ vyākaraṇaṃ smṛtam ।</p>
        <p class="gloss">Pāṇinīya-śikṣā (traditional vedapuruṣa verses) — metre as feet, kalpa as hands, jyotiṣa as eyes, nirukta as ears, śikṣā as nose, vyākaraṇa as mouth.</p>
        <p>The Veda is imagined as a living body. The six Vedāṅgas are not ‘optional extras in a guidebook.’ They are how that body stands, handles, sees the right moment, hears a word’s history, smells the correctness of a sound, and speaks in grammar.</p>
      </aside>

      <h2>Six limbs, six jobs</h2>
      ${D.render({ type: "named", id: "vedapurusa", title: "Vedapuruṣa" })}
      ${D.render({
        type: "compare",
        title: "Function table — learn this by heart",
        headers: ["Vedāṅga", "Limb in the traditional body", "What it conserves", "A name to keep"],
        rows: [
          ["Śikṣā", "Nose", "Pronunciation, svara, the phonetics of offering", "Prātiśākhya traditions"],
          ["Vyākaraṇa", "Mouth", "Grammar as a rule-system for correct speech", "Pāṇini, Aṣṭādhyāyī"],
          ["Nirukta", "Ear", "Etymology and the gloss of opaque Vedic words", "Yāska"],
          ["Chandas", "Feet", "Metre — the verse’s gait", "Piṅgala"],
          ["Jyotiṣa", "Eyes", "Time and sky so the rite meets its moment", "Vedāṅga-jyotiṣa; later Pañcāṅga"],
          ["Kalpa", "Hands", "Procedure: Śrauta, Gṛhya, Dharma; cords for the altar", "Śulba sūtras"]
        ]
      })}

      <div class="deep-panels">
        <article class="deep-panel">
          <h3>Śikṣā</h3>
          <p>Sound is not packaging. A lengthened vowel, a misplaced accent, and the rite has said something else. Śikṣā is the science of that care — articulation, pitch, sandhi as lived breath. Anyone who has learned a rāga already knows why this limb is first in many recitations of the six.</p>
        </article>
        <article class="deep-panel">
          <h3>Vyākaraṇa</h3>
          <p>Pāṇini’s Aṣṭādhyāyī is the celebrity of this limb: compact rules that generate correct forms. Unit II will live here. Today, only this: grammar is how the Veda’s mouth remains a mouth and not a noise.</p>
        </article>
        <article class="deep-panel">
          <h3>Nirukta</h3>
          <p>Yāska’s art when a Vedic word has become opaque. Nirukta is not ‘making up etymologies for fun’; it is a disciplined attempt to hear why a word was fit for a hymn.</p>
        </article>
        <article class="deep-panel">
          <h3>Chandas</h3>
          <p>Metre is the verse’s skeleton. Gāyatrī’s twenty-four, triṣṭubh’s eleven-syllable lines — these are constraints that make memory possible and beauty exact. Piṅgala’s name opens, later, onto combinatorial play; today, metre is still first a sacred gait.</p>
        </article>
        <article class="deep-panel">
          <h3>Jyotiṣa</h3>
          <p>The eyes of the vedapuruṣa: when to begin. Calendar, nakṣatra, the sky as a public clock. Predictive astrology is a later thicket; this paper’s first loyalty is timing and astronomy as knowledge that serves the rite and the year. Unit III returns with Pañcāṅga and yantras.</p>
        </article>
        <article class="deep-panel">
          <h3>Kalpa</h3>
          <p>The hands: manuals of how. Śrauta for the solemn rite, Gṛhya for the household, Dharma for conduct. Inside this family the <strong>Śulba sūtras</strong> stretch cord geometry for altars — the honest Indian doorway onto ritual mathematics. Name the folder now; do not steal Unit III’s hour.</p>
        </article>
      </div>
      <p>Stable recitation order for internals: <strong>Śikṣā, Vyākaraṇa, Nirukta, Chandas, Jyotiṣa, Kalpa</strong>. Posters shuffle; pick this order and keep it.</p>
    `;
  }

  function silpa() {
    return `
      <aside class="verse">
        <p class="sanskrit">Śilpa is the knowledge that lets a form be born twice: once in measure, once in matter.</p>
        <p class="gloss">śilpa-śāstra · the making-knowledge · neighbour of sthāpatya and vāstu</p>
        <p>If the 64 Kalās are a catalogue of what trained people can do, Śilpa Śāstra is the written and workshop tradition that says <em>how a thing is to be made so that another maker can make it again</em>: module, material, process, iconometry, the wall that must stand in monsoon.</p>
      </aside>

      <h2>Three handles</h2>
      <ul>
        <li><strong>Proportion / iconometry.</strong> Tāla measures, grids, the body’s modules for a mūrti. A spec, in the old sense: a promise of fitness.</li>
        <li><strong>Material.</strong> Stone, brick, timber, plaster, metal — each with a temperament. Chola bronze is not ‘sculpture’ only; it is alloy, wax, and fire (madhucchista-vidhāna, the lost-wax way).</li>
        <li><strong>Process.</strong> From the choosing of stone or the making of a wax model to consecration and install. Ritual language often wraps empirical workshop knowledge. Both layers are real; this paper names both.</li>
      </ul>
      ${D.render({ type: "flow", title: "From brief to artefact", steps: ["Purpose — deity, element, wall", "Module and tāla", "Material temperament", "Workshop process", "Finish, install, live with weather"] })}

      <h2>Texts that carry the workshop</h2>
      <p><em>Mānasāra</em> and <em>Mayamata</em> are the two names a first-year can safely keep as south-Indian śilpa/vāstu cousins: village to temple, icon to moulding. <em>Samāraṅgaṇa-sūtradhāra</em> (attributed to Bhoja) and later <em>Śilparatna</em> widen the shelf. Viśvakarman stands as the divine architect in the mythic frame — a reminder that making was never ‘secular leftover.’ Do not pretend you have read these cover to cover; do name them as the śāstra-layer of making.</p>

      <h2>Three languages of the temple tower</h2>
      <p>Indian sacred architecture is taught, in this paper, as three great dialects. They leak; they marry in the Deccan; they still help an examiner and a pilgrim.</p>
      ${D.render({ type: "named", id: "temple-styles", title: "Nāgara · Drāviḍa · Vesara" })}

      ${D.render({
        type: "figures",
        title: "Temple case cards",
        items: [
          {
            file: "Kandariya_Mahadeva_Temple.jpg",
            alt: "Kandariya Mahadeva temple at Khajuraho",
            caption: "Kandariya Mahādeva, Khajuraho.",
            note: "Nāgara śikhara as a mountain of latina towers. Sculpture programme: gods, dancers, the wall as a populated heaven."
          },
          {
            file: "Lingaraja_Temple.jpg",
            alt: "Lingaraja temple Bhubaneswar",
            caption: "Liṅgarāja, Bhubaneswar.",
            note: "Kalinga kin of Nāgara: soaring curvilinear tower, a city of stone around a liṅga."
          },
          {
            file: "Brihadeeswara_Temple_-_Thanjavur.jpg",
            alt: "Brihadisvara temple Thanjavur",
            caption: "Bṛhadīśvara, Thanjāvūr (Rajaraja I, early 11th c.).",
            note: "Drāviḍa vimāna of stacked talas; granite; a living Chola temple. Engineer of record in inscription: the perundachchan tradition."
          },
          {
            file: "Shore_Temple_Mahabalipuram.jpg",
            alt: "Shore Temple at Mahabalipuram",
            caption: "Shore Temple, Mahabalipuram.",
            note: "Pallava Drāviḍa on the sea — compact vimānas, salt weather as a materials lesson."
          },
          {
            file: "Meenakshi_Amman_Temple.jpg",
            alt: "Meenakshi temple gopurams Madurai",
            caption: "Mīnākṣī, Madurai.",
            note: "Later Drāviḍa city-temple: gopura as a painted mountain of figures, kalās crowding the gateway."
          },
          {
            file: "Pattadakal.jpg",
            alt: "Pattadakal temple complex",
            caption: "Paṭṭadakal.",
            note: "Vesara / meeting-ground: northern and southern tongues in one royal landscape (Chalukya)."
          },
          {
            file: "Hoysaleswara_Temple.jpg",
            alt: "Hoysala temple entrance (Chennakeshava, Belur)",
            caption: "Chennakeśava, Bēlūr (Hoysala).",
            note: "Star-plan, lathe-turned pillars, soapstone narrative bands — vesara as jewellery of stone."
          },
          {
            file: "Kailasa_temple_Ellora.jpg",
            alt: "Kailasa temple at Ellora, excavated from living rock",
            caption: "Kailāsa, Ellora (Cave 16).",
            note: "A mountain subtracted until a temple remained. Takṣaṇa at the scale of a hill. Not a style-box; a wonder that still teaches process."
          },
          {
            file: "Konark_Sun_Temple_Wheel.jpg",
            alt: "Stone chariot wheel at Konark Sun Temple",
            caption: "Konark wheel.",
            note: "Time as a carved wheel: śilpa, jyotiṣa, and bhakti in one object. Kalinga stone-craft."
          }
        ]
      })}

      <h2>Neighbours on the IKS map</h2>
      <p><strong>Kalā</strong> = the skill in a person. <strong>Śilpa</strong> = the śāstra of making. <strong>Sthāpatyaveda</strong> = the Upaveda of built form. <strong>Vāstu</strong> (Unit IV) = the spatial brief — how a place is organised. Collapse them into ‘Indian architecture’ and you lose marks and lose the civilisation. Keep them as neighbours who share a courtyard.</p>
      <p>A mūrti that must stand, take weather, match a canonical proportion, and still be beautiful is already an art–engineering sentence. That is why this heading is on a BCA paper. Conspiracy-readings of temples are not on the paper. Measure and making are.</p>
    `;
  }

  function caturdasa() {
    return `
      <aside class="verse">
        <p class="sanskrit">Caturdaśa vidyāsthānam — fourteen established seats of learning.</p>
        <p class="gloss">4 Vedas + 6 Vedāṅgas + 4 Upāṅgas = 14 · optionally + 4 Upavedas = 18</p>
        <p>This is a curriculum architecture, not a modern UGC file and not a mood. Ancient India named where knowledge sat. The arithmetic is the first artefact to draw; the names are the furniture in the rooms.</p>
      </aside>

      <h2>The tree</h2>
      ${D.render({ type: "named", id: "caturdasa-tree", title: "Fourteen, then eighteen" })}

      <h2>How to read the map</h2>
      <p>The <strong>four Vedas</strong> are the śruti cores (own gallery). The <strong>six Vedāṅgas</strong> are the limbs that make śruti usable (own gallery). The <strong>four Upāṅgas</strong> complete the fourteen. A widely taught quartet is Purāṇa, Nyāya, Mīmāṁsā, Dharmaśāstra — narrative encyclopaedia, logic, Vedic hermeneutics, and the science of dharma. Other teachers fold Itihāsa–Purāṇa together, or treat darśana more broadly. Say the common list; add one calm line: variant listings exist. That sentence is scholarship, not hedging.</p>
      <p><strong>Aṣṭādaśa (18):</strong> add the four <strong>Upavedas</strong> — Āyurveda (life and health), Dhanurveda (martial knowledge), Gandharvaveda (music and performance), Sthāpatyaveda (built form). Fourteen is the academic core; eighteen is the same map with the applied doors counted. Later units file inside these folders: Pāṇini under Vyākaraṇa, Śulba under Kalpa, temple under Sthāpatya/Śilpa, Āyurveda under its Upaveda, Arthaśāstra near nīti and dharma.</p>

      <h2>Worked placement</h2>
      ${D.render({
        type: "compare",
        headers: ["Name you will meet later", "Folder on this tree"],
        rows: [
          ["Pāṇini / Aṣṭādhyāyī", "Vedāṅga — Vyākaraṇa"],
          ["Śulba sūtras", "Vedāṅga — Kalpa"],
          ["Pañcāṅga, yantra", "Vedāṅga — Jyotiṣa"],
          ["Nyāya pramāṇa", "Upāṅga — Nyāya (and Unit II)"],
          ["Temple, vāstu", "Upaveda — Sthāpatya · Śilpa neighbour"],
          ["Āyurveda, Yoga (as practice)", "Upaveda · darśana — do not mix the folders"]
        ]
      })}
    `;
  }

  function astika() {
    return `
      <aside class="verse">
        <p class="sanskrit">Darśana means a way of seeing — a philosophical gaze with tools, not a mood.</p>
        <p class="gloss">Āstika on this paper = accepts Veda as a pramāṇa · not a census of theism</p>
        <p>Six outlooks, taught in three pairs. Sāṁkhya–Yoga, Nyāya–Vaiśeṣika, Pūrva-Mīmāṁsā and Vedānta. Classical Sāṁkhya can be Āstika without behaving like a temple-theism. If you translate Āstika as ‘believes in God,’ you have already marked your own answer wrong.</p>
      </aside>
      ${D.render({
        type: "compare",
        title: "Three pairs",
        headers: ["Pair", "Signature", "One sentence that is allowed in an exam"],
        rows: [
          ["Sāṁkhya–Yoga", "Map of prakṛti/puruṣa + method of stilling", "Metaphysics with a practice"],
          ["Nyāya–Vaiśeṣika", "Pramāṇa + padārtha", "How we know, and what there is"],
          ["Mīmāṁsā–Vedānta", "Dharma-hermeneutics + Brahman-knowledge", "Same Veda, different centre of gravity"]
        ]
      })}
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>Sāṁkhya and Yoga</h3>
          <p>Sāṁkhya enumerates becoming: prakṛti and its evolutes, puruṣa as witness. Yoga, in the Pātañjala stream, is the disciplined stilling of the turnings of mind — eight limbs as a later Unit V hook. Same family: map and method.</p>
        </article>
        <article class="deep-panel">
          <h3>Nyāya and Vaiśeṣika</h3>
          <p>Nyāya is the discipline of debate and knowing: perception, inference, comparison, testimony. Vaiśeṣika types the world: substance, quality, action, and the rest of the padārtha list. Together they are among the most teachable Indian gifts to anyone who cares how a claim is justified.</p>
        </article>
        <article class="deep-panel">
          <h3>Pūrva-Mīmāṁsā and Vedānta</h3>
          <p>Both read the Veda. Pūrva-Mīmāṁsā hears primarily injunction — dharma, rite, the force of a sacred sentence. Vedānta (Uttara-Mīmāṁsā) hears the Upaniṣadic end: Brahman, ātman, liberation-knowledge. Mention Advaita, Viśiṣṭādvaita, Dvaita as a polite footnote, not as the whole hour.</p>
        </article>
      </div>
    `;
  }

  function nastika() {
    return `
      <aside class="verse">
        <p class="sanskrit">Nāstika, in this syllabus, is an authority-flag — not a slur and not ‘people without ethics.’</p>
        <p class="gloss">Cārvāka · Bauddha · Jaina — three Indian knowledge-streams that do not take Veda as binding pramāṇa</p>
        <p>A professional classroom describes a neighbour’s system without a sneer. Pride in IKS includes that capacity. The marks are in the distinctions.</p>
      </aside>
      ${D.render({ type: "named", id: "darsana-matrix", title: "Āstika and Nāstika on one cloth" })}
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>Cārvāka / Lokāyata</h3>
          <p>Perception-first pressure on hidden inferences. Material flourishing without a Veda-backed afterlife, as the college sketch runs. Much is known through opponents’ reports — say that. Intellectual honesty is also IKS pedagogy.</p>
        </article>
        <article class="deep-panel">
          <h3>Bauddha</h3>
          <p>A full civilisation of analysis: arising and cessation, the refusal of a permanent ātman as Vedānta asserts one, a path, monasteries, logic. Mādhyamika and Yogācāra are names you may plant, not a syllabus you must empty into fifty minutes.</p>
        </article>
        <article class="deep-panel">
          <h3>Jaina</h3>
          <p>Ahiṁsā as a rigorous ethic; anekāntavāda as many-sidedness of truth-claims; syādvāda as conditioned predication — intellectual humility with a spine, not ‘everything is true.’</p>
        </article>
      </div>
    `;
  }

  g.IKSGallery = {
    kalas,
    vedas,
    vedanga,
    silpa,
    caturdasa,
    astika,
    nastika,
    KALAS,
    CLUSTERS
  };
})(window);
