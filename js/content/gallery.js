(function (g) {
  const D = window.IKSDiagrams;
  const esc = D.esc;

  /* Real verses only. Hindi lines marked hi= are this site’s sense, not a second śloka. */
  function cite(spec) {
    return `<aside class="verse cite-verse">
      <p class="verse-kind">${esc(spec.kind || "Traditional verse")}</p>
      <p class="sanskrit">${spec.sa}</p>
      ${spec.iast ? `<p class="gloss">${esc(spec.iast)}</p>` : ""}
      <p class="en"><strong>English sense.</strong> ${spec.en}</p>
      ${spec.hi ? `<p class="hi"><strong>हिन्दी भाव (इस स्थल का, श्लोक नहीं).</strong> ${spec.hi}</p>` : ""}
      <p class="attrib">${esc(spec.attrib)}</p>
      ${spec.note ? `<p class="context">${spec.note}</p>` : ""}
    </aside>`;
  }

  function sitePoem(spec) {
    return `<aside class="verse site-poem">
      <p class="verse-kind">मूल पंक्ति · this site — not a śloka, not śruti</p>
      <p class="sanskrit">${spec.lines}</p>
      <p class="en">${spec.en}</p>
    </aside>`;
  }

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
      ${cite({
        kind: "Nāṭyaśāstra",
        sa: "न तज्ज्ञानं न तच्छिल्पं न सा विद्या न सा कला ।<br/>नासौ योगो न तत्कर्म यन्न नाट्येऽस्मिन् दृश्यते ॥",
        iast: "na taj jñānaṃ na tac chilpaṃ na sā vidyā na sā kalā / nāsau yogo na tat karma yan na nāṭye ’smin dṛśyate",
        en: "There is no knowledge, no śilpa, no vidyā, no kalā, no yoga, no action that is not seen in this nāṭya.",
        hi: "नाट्य एक आँगन है — ज्ञान, शिल्प, विद्या और कला सब उसी आँगन में दिख जाते हैं।",
        attrib: "Bharata, Nāṭyaśāstra 1.116 (common numbering; some editions 1.107/1.113).",
        note: "This is why a skills-catalogue belongs next to a Veda-map. Performance is not leftover entertainment. It is a house in which the other arts appear."
      })}
      ${sitePoem({
        lines: "ज्ञान चौखट पर बैठा, कला खड़ी द्वार।<br/>दोनों मिलें तो घर बने — यही पुरानी बात।",
        en: "Knowing sits on the threshold; skill stands at the door. The house is whole only when they meet. (Original Hindi couplet for this page — not a śloka.)"
      })}

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
          ${cite({
            kind: "Bhagavadgītā",
            sa: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति ।<br/>तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ॥",
            iast: "patraṃ puṣpaṃ phalaṃ toyaṃ yo me bhaktyā prayacchati / tad ahaṃ bhakty-upahṛtam aśnāmi prayatātmanaḥ",
            en: "A leaf, a flower, a fruit, water — offered with bhakti — I accept from the devoted.",
            hi: "छोटी चीज़ भी जब पूरे मन से दी जाए, तो वह पूरी हो जाती है। माला, पुष्प-आस्तरण, पाक — ये भी भेंट की कलाएँ हैं।",
            attrib: "Bhagavadgītā 9.26 (Kṛṣṇa to Arjuna, inside the Mahābhārata).",
            note: "Use this only as a bridge from offering-arts (garland, flower-bed, food) to lived pūjā — not as a claim that the Gītā ‘lists the 64.’"
          })}
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
      ${cite({
        kind: "Ṛgveda",
        sa: "अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।<br/>होतारं रत्नधातमम् ॥",
        iast: "agnim īḷe purohitaṃ yajñasya devam ṛtvijam / hotāraṃ ratnadhātamam",
        en: "I praise Agni, the priest set in front, god and ṛtvij of the yajña, the hotṛ who bears treasure.",
        hi: "वेद की पहली बात सिद्धांत नहीं, निमंत्रण है — अग्नि को बुलाया गया है, द्वार पर।",
        attrib: "Ṛgveda 1.1.1 (the first ṛc of the saṁhitā as commonly taught).",
        note: "A civilisation that begins its remembered book with fire and invitation is already telling you what Veda will mean: a heard world, not a locked museum label."
      })}

      <h2>What ‘Veda’ names</h2>
      <p><em>Veda</em> is from the root <em>vid</em>, to know. In this paper it names the four great saṁhitās of <strong>śruti</strong> — that which is heard. Traditional Mīmāṁsā calls this speech <em>apauruṣeya</em>: not authored in the way a human book is authored. A classroom can state that claim with respect without turning the hour into a debate club. What no serious reader disputes is the other half: these corpora were conserved by recitation schools (<em>śākhā</em>), teacher to student, as a vow of sound.</p>
      <p>Śruti is the heard corpus of the civilisation. <strong>Smṛti</strong> is remembered literature — dharma texts, epics, Purāṇas — that acknowledges human transmission and, in orthodox reading, must not contradict śruti. Keep the distinction technical and warm. It is a care of sources, not a ranking of people.</p>

      <h2>Four faces of śruti</h2>
      <p>Four named Vedas, four temperaments. Learn each as a character, not as a bullet.</p>
      ${D.render({ type: "named", id: "veda-four", title: "Ṛg · Yajur · Sāma · Atharva" })}

      <div class="deep-panels">
        <article class="deep-panel">
          <h3>Ṛgveda — the hymn-ocean</h3>
          <p>About a thousand sūktas arranged in ten maṇḍalas. The ‘family books’ (maṇḍalas 2–7) keep the names of ṛṣi-lineages; the outer maṇḍalas gather other strata, including the hymn of the unknown source and the Puruṣa-sūkta’s vision of a cosmos that is also a sacrifice. Metres are not decoration: gāyatrī, triṣṭubh, jagatī are how the hymn stands up. Deities are addressed powers — Agni, Indra, Soma, Varuṇa, Uṣas — not mascots. When you say ‘Ṛgveda’ in an answer, say <em>ṛc</em>, maṇḍala, and hymn.</p>
          ${cite({
            kind: "Ṛgveda · Nāsadīya",
            sa: "नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत् ।",
            iast: "nāsad āsīn no sad āsīt tadānīṃ nāsīd rajo no vyomā paro yat",
            en: "Then there was neither the non-existent nor the existent; there was no realm of air, no sky beyond.",
            hi: "सृष्टि से पहले की बात — ‘न था’ और ‘था’ दोनों चुप हैं। यह प्रश्न का वेद है, नारे का नहीं।",
            attrib: "Ṛgveda 10.129.1 (Nāsadīya-sūkta).",
            note: "Read the first pāda in class. Do not finish the hymn as a cosmology lecture. The gift is the question."
          })}
          ${cite({
            kind: "Ṛgveda · Gāyatrī",
            sa: "तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।<br/>धियो यो नः प्रचोदयात् ॥",
            iast: "tat savitur vareṇyaṃ bhargo devasya dhīmahi / dhiyo yo naḥ pracodayāt",
            en: "We meditate on that desirable radiance of Savitṛ; may he impel our insights.",
            hi: "प्रकाश माँगो, बुद्धि माँगो — यही गायत्री का सादा हृदय है।",
            attrib: "Ṛgveda 3.62.10 (the Gāyatrī mantra; also carried in Yajur recitation).",
            note: "Twenty-four syllables: a living lesson in chandas. Recite only if the room can hold it with care; otherwise speak the English and stop."
          })}
        </article>
        <article class="deep-panel">
          <h3>Yajurveda — the Veda of the offering</h3>
          <p>Here speech is for the rite. Two recensions are taught by name: <strong>Śukla</strong> (White), with mantra and brāhmaṇa more clearly set apart (Vājasaneyi; Mādhyandina and Kāṇva schools), and <strong>Kṛṣṇa</strong> (Black), where formula and explanatory prose travel together (Taittirīya, Maitrāyaṇī, Kāṭhaka…). This is not a colour-war. It is two honest ways of carrying liturgical knowledge. The yajus is the sentence the rite cannot do without.</p>
          ${cite({
            kind: "Yajurveda",
            sa: "इषे त्वा ऊर्जे त्वा ।",
            iast: "iṣe tvā ūrje tvā",
            en: "For nourishment, thee; for strength, thee.",
            hi: "यजुर्वेद की चाल काम की भाषा है — ‘तुझे पोषण के लिए, तुझे बल के लिए।’",
            attrib: "Vājasaneyi Saṁhitā 1.1 (Śukla Yajurveda); the same opening gesture is taught in Kṛṣṇa Yajur schools.",
            note: "A whole Veda’s temperament in four words: speech that does the offering."
          })}
        </article>
        <article class="deep-panel">
          <h3>Sāmaveda — where the ṛk becomes song</h3>
          <p>Much of the Sāmaveda’s verse is Ṛg material lifted into <em>gāna</em>. That fact is a teaching gift: a ‘new’ Veda can be a new <em>way of sounding</em> a known hymn. Schools include Kauthuma, Rāṇāyanīya, Jaiminīya. Gandharvaveda later hangs near this door. If Ṛgveda is the poem, Sāmaveda is the poem remembering it is music.</p>
        </article>
        <article class="deep-panel">
          <h3>Atharvaveda — śruti of the household and of peace</h3>
          <p>The Atharvan–Aṅgiras stream keeps hymns of healing (bheṣaja), of śānti, of kingship, of the house’s trouble and hope. Śaunaka and Paippalāda are the two recensions usually named. Do not caricature this Veda as ‘the magical leftover.’ A pandit who recites Atharvan śānti is not slumming; he is in śruti. A modern reader who only wants ‘philosophy’ from the Upaniṣads has not yet met the Veda that knows a fever and a field.</p>
          ${cite({
            kind: "Śānti recitation (Ṛgveda, used as peace-speech)",
            sa: "भद्रं कर्णेभिः शृणुयाम देवा भद्रं पश्येमाक्षभिर्यजत्राः ।",
            iast: "bhadraṃ karṇebhiḥ śṛṇuyāma devā bhadraṃ paśyemākṣabhir yajatrāḥ",
            en: "Gods, may we hear the auspicious with our ears; may we see the auspicious with our eyes, O you who are worthy of the rite.",
            hi: "कान अच्छा सुनें, आँख अच्छा देखें — शान्ति की यह प्रार्थना घर की भी है, यज्ञ की भी।",
            attrib: "Ṛgveda 1.89.8; widely used as a śānti-mantra in later recitation (including Atharvan peace-rites).",
            note: "Honest citation: the line is Ṛg; the Atharvan world is where such peace-speech is at home in daily life."
          })}
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
      <div class="verse-duo">
        ${cite({
          kind: "Īśāvāsya Upaniṣad",
          sa: "ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।<br/>तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥",
          iast: "īśāvāsyam idaṃ sarvaṃ yat kiñca jagatyāṃ jagat / tena tyaktena bhuñjīthā mā gṛdhaḥ kasyasvid dhanam",
          en: "All this, whatever moves in the moving world, is indwelt by the Lord. Enjoy by letting go; do not covet anyone’s wealth.",
          hi: "जगत ईश से भरा है — लो, पर झपटो मत।",
          attrib: "Īśāvāsya Upaniṣad 1 (Vājasaneyi Saṁhitā 40.1).",
          note: "The first word of a Veda’s last adhyāya is already Upaniṣad. That is the river, not a later paperback."
        })}
        ${cite({
          kind: "Kaṭha Upaniṣad",
          sa: "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत ।<br/>क्षुरस्य धारा निशिता दुरत्यया दुर्गं पथस्तत्कवयो वदन्ति ॥",
          iast: "uttiṣṭhata jāgrata prāpya varān nibodhata / kṣurasya dhārā niśitā duratyayā durgaṃ pathas tat kavayo vadanti",
          en: "Rise, wake, take the boon of the excellent and know. The path is a razor’s edge, say the seers — sharp, hard to cross.",
          hi: "उठो, जागो, श्रेष्ठ के पास जाकर जानो — रास्ता छुरी की धार जितना पतला है।",
          attrib: "Kaṭha Upaniṣad 1.3.14 (Naciketas after Yama’s teaching of the path).",
          note: "A classroom may stand up on this line. It is not a motivational poster; it is a forest warning."
        })}
      </div>
      <div class="verse-duo">
        ${cite({
          kind: "Muṇḍaka Upaniṣad",
          sa: "द्वा सुपर्णा सयुजा सखाया समानं वृक्षं परिषस्वजाते ।<br/>तयोरन्यः पिप्पलं स्वाद्वत्त्यनश्नन्नन्यो अभिचाकशीति ॥",
          iast: "dvā suparṇā sayujā sakhāyā samānaṃ vṛkṣaṃ pariṣasvajāte / tayor anyaḥ pippalaṃ svādv atty anaśnann anyo abhicākaśīti",
          en: "Two birds, companions, cling to one tree. One eats the sweet fruit; the other looks on without eating.",
          hi: "एक पक्षी फल खाता है, दूसरा देखता रहता है — भोक्ता और साक्षी एक ही डाल पर।",
          attrib: "Muṇḍaka Upaniṣad 3.1.1 (also Ṛgveda 1.164.20 in an earlier form).",
          note: "Sāṁkhya and Vedānta both find a home in this image. Draw two birds. Stop."
        })}
        ${cite({
          kind: "Kaṭha Upaniṣad · chariot",
          sa: "आत्मानं रथिनं विद्धि शरीरं रथमेव तु ।<br/>बुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च ॥",
          iast: "ātmānaṃ rathinaṃ viddhi śarīraṃ ratham eva tu / buddhiṃ tu sārathiṃ viddhi manaḥ pragraham eva ca",
          en: "Know the Self as the rider, the body as the chariot, intelligence as the charioteer, the mind as the reins.",
          hi: "शरीर रथ है, बुद्धि सारथि है, मन लगाम है, आत्मा सवार है।",
          attrib: "Kaṭha Upaniṣad 1.3.3.",
          note: "An engineer’s map that is still a sacred map. Senses are the horses in the next line (1.3.4)."
        })}
      </div>
      ${cite({
        kind: "Bṛhadāraṇyaka Upaniṣad · śānti",
        sa: "पूर्णमदः पूर्णमिदं पूर्णात् पूर्णमुदच्यते ।<br/>पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥",
        iast: "pūrṇam adaḥ pūrṇam idaṃ pūrṇāt pūrṇam udacyate / pūrṇasya pūrṇam ādāya pūrṇam evāvaśiṣyate",
        en: "That is whole, this is whole; from the whole the whole arises. When the whole is taken from the whole, the whole remains.",
        hi: "पूरा से पूरा निकलता है, पूरा ही रह जाता है — घटने का हिसाब यहाँ काम नहीं करता।",
        attrib: "Bṛhadāraṇyaka Upaniṣad 5.1.1 (also the śānti of the Īśāvāsya in many recitations).",
        note: "A mathematics of fullness, not of scarcity. Say it slowly."
      })}
      ${sitePoem({
        lines: "मंत्र नदी है मुख में, प्रश्न किनारा वन।<br/>जो बैठा गुरु-पास, वही उतर गया जन।",
        en: "Mantra is a river in the mouth; the question is the forest bank. Whoever sits near the teacher has begun to cross. (Original couplet — not a śloka.)"
      })}

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
      ${cite({
        kind: "Pāṇinīya-śikṣā",
        sa: "छन्दः पादौ तु वेदस्य हस्तौ कल्पोऽथ पठ्यते ।<br/>ज्योतिषामयनं चक्षुर्निरुक्तं श्रोत्रमुच्यते ॥<br/>शिक्षा घ्राणं तु वेदस्य मुखं व्याकरणं स्मृतम् ।",
        iast: "chandaḥ pādau tu vedasya hastau kalpo ’tha paṭhyate / jyotiṣām ayanaṃ cakṣur niruktaṃ śrotram ucyate / śikṣā ghrāṇaṃ tu vedasya mukhaṃ vyākaraṇaṃ smṛtam",
        en: "Metre is the Veda’s feet, kalpa its hands; jyotiṣa its eyes, nirukta its ears; śikṣā its nose, vyākaraṇa its mouth.",
        hi: "वेद एक शरीर है — बिना अंगों के वह खड़ा नहीं होता, बोलता नहीं, समय नहीं देखता।",
        attrib: "Pāṇinīya-śikṣā (traditional vedapuruṣa verses, as taught with the śikṣā corpus).",
        note: "This is the spine of the card. The six aṅgas are life-support for śruti, not optional extras."
      })}

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
          <p>Metre is the verse’s skeleton. Gāyatrī’s twenty-four, triṣṭubh’s eleven-syllable lines — these are constraints that make memory possible and beauty exact. Piṅgala’s name opens, later, onto combinatorial play; today, metre is still first a sacred gait. The Gāyatrī (Ṛgveda 3.62.10) on the Vedas card is the exhibit: twenty-four syllables that a civilisation refused to lose.</p>
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
      ${cite({
        kind: "Ṛgveda · Puruṣa-sūkta",
        sa: "सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् ।<br/>स भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् ॥",
        iast: "sahasraśīrṣā puruṣaḥ sahasrākṣaḥ sahasrapāt / sa bhūmiṃ viśvato vṛtvāty atiṣṭhad daśāṅgulam",
        en: "The Person has a thousand heads, a thousand eyes, a thousand feet. Covering the earth on every side, he stands beyond by ten fingers’ breadth.",
        hi: "ब्रह्माण्ड एक शरीर है — सिर, आँख, पैर नापे गए हैं। मंदिर का शिखर उसी नाप-कल्पना का पहाड़ है।",
        attrib: "Ṛgveda 10.90.1 (Puruṣa-sūkta).",
        note: "Śilpa’s first wonder is not a tourist photograph. It is that a cosmos can be imagined as a measured body — and a temple as a mountain of that body."
      })}
      ${sitePoem({
        lines: "पहले नाप, फिर पत्थर।<br/>पहले प्राण, फिर आकार।",
        en: "Measure first, then stone. Breath first, then form. (Original — not a śloka.)"
      })}

      <p>If the 64 Kalās are a catalogue of what trained people can <em>do</em>, Śilpa Śāstra is the written and workshop tradition that says how a thing is to be made so that another maker can make it again: module, material, process, iconometry, the wall that must stand in monsoon.</p>

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
      ${cite({
        kind: "Muṇḍaka Upaniṣad",
        sa: "द्वे विद्ये वेदितव्ये इति ह स्म यद्ब्रह्मविदो वदन्ति परा चैवापरा च ।<br/>तत्रापरा ऋग्वेदो यजुर्वेदः सामवेदोऽथर्ववेदः शिक्षा कल्पो व्याकरणं निरुक्तं छन्दो ज्योतिषमिति । अथ परा यया तदक्षरमधिगम्यते ॥",
        iast: "dve vidye veditavye … parā caivāparā ca / tatrāparā ṛgvedo yajurvedaḥ sāmavedo ’tharvavedaḥ śikṣā kalpo vyākaraṇaṃ niruktaṃ chando jyotiṣam iti / atha parā yayā tad akṣaram adhigamyate",
        en: "Two knowledges are to be known, say the knowers of Brahman — the higher and the lower. The lower is Ṛg, Yajur, Sāma, Atharva, and śikṣā, kalpa, vyākaraṇa, nirukta, chandas, jyotiṣa. The higher is that by which the Imperishable is attained.",
        hi: "चार वेद और छह अंग — यह ‘अपरा’ विद्या है। जिससे अक्षर तत्त्व मिलता है, वह ‘परा’ है। दोनों गिनने पड़ते हैं।",
        attrib: "Muṇḍaka Upaniṣad 1.1.4–5.",
        note: "This is the authentic inner warrant for teaching Caturdaśa as a map: the Upaniṣad itself lists the four Vedas and the six Vedāṅgas. The Upāṅgas complete the later fourteen-count; they are not in this sentence — say so."
      })}

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
      ${cite({
        kind: "Yoga-sūtra",
        sa: "योगश्चित्तवृत्तिनिरोधः ॥",
        iast: "yogaś citta-vṛtti-nirodhaḥ",
        en: "Yoga is the stilling of the turnings of the mind.",
        hi: "योग मन की लहरों का थमना है — आसन उसका एक अंग है, पूरा महासागर नहीं।",
        attrib: "Patañjali, Yoga-sūtra 1.2.",
        note: "Āstika here is not ‘believes in God.’ Classical Sāṁkhya can be Veda-accepting without temple-theism. Yoga is the method next to Sāṁkhya’s map."
      })}
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
          <p>Sāṁkhya enumerates becoming: prakṛti and its evolutes, puruṣa as witness. Yoga, in the Pātañjala stream, is the disciplined stilling of the turnings of mind — eight limbs as a later Unit V hook. Same family: map and method. The two birds of Muṇḍaka 3.1.1 (on the Vedas card) are a picture this pair can share.</p>
        </article>
        <article class="deep-panel">
          <h3>Nyāya and Vaiśeṣika</h3>
          <p>Nyāya is the discipline of debate and knowing. Vaiśeṣika types the world: substance, quality, action, and the rest of the padārtha list. Together they are among the most teachable Indian gifts to anyone who cares how a claim is justified.</p>
          ${cite({
            kind: "Nyāya-sūtra",
            sa: "प्रत्यक्षानुमानोपमानशब्दाः प्रमाणानि ॥",
            iast: "pratyakṣānumānopamānaśabdāḥ pramāṇāni",
            en: "Perception, inference, comparison, and word (testimony) are the means of valid knowledge.",
            hi: "देखना, अनुमान, उपमा, और शब्द — न्याय ज्ञान को इन्हीं द्वारों से नापता है।",
            attrib: "Gautama, Nyāya-sūtra 1.1.3.",
            note: "Four pramāṇas as a classroom spine. Later Nyāya elaborates; first-years only need the four names in order."
          })}
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
      ${cite({
        kind: "Tattvārtha-sūtra",
        sa: "सम्यग्दर्शनज्ञानचारित्राणि मोक्षमार्गः ॥",
        iast: "samyag-darśana-jñāna-cāritrāṇi mokṣa-mārgaḥ",
        en: "Right vision, right knowledge, and right conduct — these are the path of liberation.",
        hi: "जैन मार्ग तीन रस्सियों का है — देखना, जानना, चलना। एक को पकड़कर बाकी दो को मत भूलो।",
        attrib: "Umāsvāti, Tattvārtha-sūtra 1.1.",
        note: "A nāstika stream has sūtras, logic, and an ethic. ‘Nāstika’ is an authority-flag (Veda not taken as binding pramāṇa), not a slur."
      })}
      ${D.render({ type: "named", id: "darsana-matrix", title: "Āstika and Nāstika on one cloth" })}
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>Cārvāka / Lokāyata</h3>
          <p>Perception-first pressure on hidden inferences. Material flourishing without a Veda-backed afterlife, as the college sketch runs. Much is known through opponents’ reports — say that. Intellectual honesty is also IKS pedagogy.</p>
          ${cite({
            kind: "Report of Cārvāka (not a recovered Cārvāka book)",
            sa: "यावज्जीवेत् सुखं जीवेद्रणं कृत्वा घृतं पिबेत् ।",
            iast: "yāvaj jīvet sukhaṃ jīved ṛṇaṃ kṛtvā ghṛtaṃ pibet",
            en: "As long as you live, live happily; borrow and drink ghee.",
            hi: "यह पंक्ति अक्सर चार्वाक के मुँह में दूसरों ने रखी है — हँसी में उड़ाने लायक नहीं, स्रोत-ईमानदारी लायक है।",
            attrib: "Widely quoted in doxographies such as the Sarvadarśanasaṅgraha neighbourhood; not a securely surviving Cārvāka scripture.",
            note: "Teach the pressure-test (what evidence is allowed). Do not teach the caricature as if we owned their library."
          })}
        </article>
        <article class="deep-panel">
          <h3>Bauddha</h3>
          <p>A full civilisation of analysis: arising and cessation, the refusal of a permanent ātman as Vedānta asserts one, a path, monasteries, logic. Mādhyamika and Yogācāra are names you may plant, not a syllabus you must empty into fifty minutes.</p>
          ${cite({
            kind: "Dhammapada (Pāli)",
            sa: "मनोपुब्बङ्गमा धम्मा मनोसेट्ठा मनोमया ।",
            iast: "manopubbaṅgamā dhammā manoseṭṭhā manomayā",
            en: "Mind precedes all phenomena; mind is their chief; they are mind-made.",
            hi: "सबसे पहले मन चलता है — बौद्ध शिक्षा का यह द्वार ध्यान का है, नारे का नहीं।",
            attrib: "Dhammapada 1.1 (Yamakavagga).",
            note: "Pāli, not Sanskrit. Say so. The syllabus still places Bauddha on the Indian knowledge map."
          })}
        </article>
        <article class="deep-panel">
          <h3>Jaina</h3>
          <p>Ahiṁsā as a rigorous ethic; anekāntavāda as many-sidedness of truth-claims; syādvāda as conditioned predication — intellectual humility with a spine, not ‘everything is true.’</p>
          ${cite({
            kind: "Mahābhārata (also at home in Jain teaching)",
            sa: "अहिंसा परमो धर्मः ।",
            iast: "ahiṃsā paramo dharmaḥ",
            en: "Non-harm is the highest dharma.",
            hi: "जैन मार्ग इस वाक्य को जीता है; महाभारत भी इसे जानता है। कक्षा में इसे दोनों जगहों से सम्मान दो।",
            attrib: "Mahābhārata, Anuśāsanaparvan (traditional classroom citation of the maxim); central in Jain teaching.",
            note: "A short line, a long civilisation. Pair it with Tattvārtha 1.1 above."
          })}
        </article>
      </div>
    `;
  }

  function purana() {
    const eighteen = [
      ["Brahma", "origins, first things"],
      ["Padma", "lotus-cosmology, tīrtha lore"],
      ["Viṣṇu", "Vaiṣṇava encyclopaedia"],
      ["Śiva / Vāyu", "Śaiva stream — lists vary here"],
      ["Bhāgavata", "Kṛṣṇa-līlā; bhakti as a knowledge"],
      ["Nārada", "teaching of devotion"],
      ["Mārkaṇḍeya", "includes the Devī-māhātmya neighbourhood"],
      ["Agni", "rite, image, and many crafts in summary"],
      ["Bhaviṣya", "the ‘future’ as a Purāṇa genre"],
      ["Brahmavaivarta", "Rādhā–Kṛṣṇa world"],
      ["Liṅga", "Śaiva; the liṅga as a teaching form"],
      ["Varāha", "the earth lifted — geography as story"],
      ["Skanda", "largest; many sthala-khaṇḍas live here"],
      ["Vāmana", "the dwarf-stride that measures worlds"],
      ["Kūrma", "the tortoise; churning’s still point"],
      ["Matsya", "the fish, the flood — and our lakṣaṇa verse"],
      ["Garuḍa", "Viṣṇu’s vehicle; dharma in flight"],
      ["Brahmāṇḍa", "the egg of Brahmā; cosmic architecture"]
    ];
    const cards = eighteen
      .map(
        ([name, hint], i) =>
          `<article class="upa-card"><p class="kicker">${i + 1}</p><h3>${name}</h3><p>${hint}</p></article>`
      )
      .join("");
    return `
      ${cite({
        kind: "Purāṇa-lakṣaṇa verse",
        sa: "सर्गश्च प्रतिसर्गश्च वंशो मन्वन्तराणि च ।<br/>वंशानुचरितं चैव पुराणं पञ्चलक्षणम् ॥",
        iast: "sargaś ca pratisargaś ca vaṃśo manvantarāṇi ca / vaṃśānucaritaṃ caiva purāṇaṃ pañca-lakṣaṇam",
        en: "Creation, re-creation, genealogies, the intervals of Manu, and the deeds of lineages — these five are the marks of a Purāṇa.",
        hi: "पुराण कहानी का ढेर नहीं — पाँच शीर्षक हैं: सृष्टि, फिर सृष्टि, वंश, मन्वन्तर, राजाओं की कथा।",
        attrib: "Matsya Purāṇa 53.65 neighbourhood; the same five marks appear in Vāyu and in Viṣṇu Purāṇa 3.6.",
        note: "Scoring spine of this card. Maha / Upa / Sthala is the size-and-place taxonomy. Eighteen is the famous count — know the count, the five marks, and two names. Do not binge plots."
      })}

      <h2>What a Purāṇa is (and is not)</h2>
      <p><strong>Purāṇa</strong> means ‘ancient’ — but the genre is not a dusty attic. These are long narrative-encyclopaedic works on the <em>smṛti</em> side of the line: cosmology, genealogies, place-lore, and dharma carried in story. They are <em>not</em> Vedas. In the Caturdaśa map they often occupy an Upāṅga slot. A civilisation that stores ‘how the world began,’ ‘who begot whom,’ ‘which king kept which vow,’ and ‘why this river is holy’ in the same kind of book is doing knowledge work, not only entertainment.</p>
      <p>One story, three minutes, to show dharma-in-narrative — then back to the five headings. Television serials are a later love. The exam wants the template.</p>

      <h2>The five marks</h2>
      ${D.render({ type: "named", id: "purana-lakshanas", title: "Pañcalakṣaṇa" })}
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>Sarga</h3>
          <p>Origination — how worlds, beings, and orders arise. Not a science-class ‘Big Bang substitute.’ A memory of beginning, told so a people know where they stand.</p>
        </article>
        <article class="deep-panel">
          <h3>Pratisarga</h3>
          <p>Dissolution and return. Time here is cyclic: what is made is unmade and made again. The heading keeps a student from treating one creation-story as the whole book.</p>
        </article>
        <article class="deep-panel">
          <h3>Vaṁśa</h3>
          <p>Genealogies of gods and sages. Who taught whom; which ṛṣi-line holds which knowledge. A family-tree as a library catalogue.</p>
        </article>
        <article class="deep-panel">
          <h3>Manvantara</h3>
          <p>The intervals of Manu — cosmic-administrative eras. A clock larger than a dynasty. First-years need the name and the idea of a named age, not a full list of fourteen Manus.</p>
        </article>
        <article class="deep-panel">
          <h3>Vaṁśānucarita</h3>
          <p>The deeds of royal lineages. Kings as cases: how power kept or broke dharma. Neighbour of Itihāsa, still inside the Purāṇa template.</p>
        </article>
      </div>

      <h2>Three folders on the CCS sheet</h2>
      ${D.render({
        type: "compare",
        title: "Maha · Upa · Sthala",
        headers: ["Folder", "What it names", "What to write in an answer"],
        rows: [
          ["Mahāpurāṇa", "The great eighteen", "Count + two examples (e.g. Viṣṇu, Bhāgavata, Matsya)"],
          ["Upapurāṇa", "Supplementary Purāṇas (often also counted eighteen)", "Lesser / companion corpus — not ‘unimportant,’ just not the Maha list"],
          ["Sthala-purāṇa", "Place-Purāṇa: a tīrtha, a temple-region, a river’s story", "How a civilisation stored <em>where</em> as well as when and who"]
        ]
      })}
      <p><strong>Sthala</strong> is the discriminator first-years forget. Skanda Purāṇa’s Kāśī-khaṇḍa is a famous large example: a city as a knowledge-object. Smaller sthala texts tie a pond, a hill, a liṅga, or a festival to a landscape you can still walk. Geography here is not a footnote. It is a heading.</p>

      <h2>Eighteen names — one spine, one honest variant</h2>
      <p>Traditional lists speak of eighteen Mahāpurāṇas. The names below are the usual classroom set. One well-known fork: some lists read <em>Vāyu</em> where others read <em>Śiva</em>. Say the count; name two; mention the fork if asked. That is scholarship, not hedging.</p>
      <div class="eighteen-grid">${cards}</div>
      ${cite({
        kind: "Bhāgavata Purāṇa",
        sa: "निगमकल्पतरोर्गलितं फलं शुकमुखादमृतद्रवसंयुतम् ।<br/>पिबत भागवतं रसमालयं मुहुरहो रसिका भुवि भावुकाः ॥",
        iast: "nigama-kalpa-taror galitaṃ phalaṃ śuka-mukhād amṛta-drava-saṃyutam / pibata bhāgavataṃ rasam ālayaṃ muhur aho rasikā bhuvi bhāvukāḥ",
        en: "The ripe fruit fallen from the wish-tree of the Veda, mixed with nectar from Śuka’s mouth — drink, lovers of rasa, this Bhāgavata again and again.",
        hi: "वेद कल्पवृक्ष है; भागवत उसका गिरा फल है — रस है, नारा नहीं।",
        attrib: "Bhāgavata Purāṇa 1.1.3.",
        note: "One Purāṇa speaking of its own job: to carry Veda as flavour, through a teacher’s mouth. Use as a taste of the genre — not as a claim that every Purāṇa is the Bhāgavata."
      })}

      ${D.render({
        type: "figures",
        title: "Images that teach the genre",
        items: [
          {
            file: "Vishnu_Vishvarupa.jpg",
            alt: "Viṣṇu as the cosmic form",
            caption: "Viśvarūpa.",
            note: "A body that contains worlds — sarga made visible. Neighbour of the Gītā’s theophany, at home in Purāṇa painting."
          },
          {
            file: "Matsya avatar.jpg",
            alt: "Matsya, the fish avatāra of Viṣṇu",
            caption: "Matsya.",
            note: "The Purāṇa that lends us the five-mark verse also remembers a flood and a fish that carries knowledge across a pratisarga."
          },
          {
            file: "Vishnu reclining on the cosmic serpent Shesha, with Brahma emerging from his navel.jpg",
            alt: "Viṣṇu reclining on Śeṣa, Brahmā emerging from the navel",
            caption: "Śeṣaśāyī Viṣṇu.",
            note: "Between kalpas: the world rests, then begins again. Pratisarga as an image, not a slogan."
          }
        ]
      })}
      ${sitePoem({
        lines: "पाँच शीर्षक, अठारह नाम, एक तीर्थ की कथा।<br/>जो जगह को भी ग्रन्थ माने — वही पुराण-विधा।",
        en: "Five headings, eighteen names, the story of one tīrtha. The genre that treats a place as a book — that is Purāṇa-knowledge. (Original — not a śloka.)"
      })}
    `;
  }

  function itihasa() {
    return `
      ${cite({
        kind: "Mahābhārata",
        sa: "इतिहासपुराणाभ्यां वेदं समुपबृंहयेत् ।<br/>बिभेत्यल्पश्रुताद् वेदो मामयं प्रतरिष्यति ॥",
        iast: "itihāsa-purāṇābhyāṃ vedaṃ samupabṛṃhayet / bibhety alpaśrutād vedo mām ayaṃ pratariṣyati",
        en: "One should expand the Veda by Itihāsa and Purāṇa. The Veda fears the little-heard person: ‘This one will stretch me wrongly.’",
        hi: "वेद कहानी से डरता नहीं — अधूरे सुनने वाले से डरता है। इतिहास-पुराण वेद को चौड़ा करते हैं, तोड़ते नहीं।",
        attrib: "Mahābhārata, Ādiparvan (critical ed. 1.1.204 neighbourhood; traditional classroom citation).",
        note: "Story here is a way of entering śruti’s values — not a gadget metaphor, not a serial recap."
      })}

      <h2>‘So indeed it was’</h2>
      <p><strong>Itihāsa</strong> is traditionally glossed as <em>iti ha āsa</em> — so indeed it was. Narrative that claims a past and teaches through it. On this CCS paper the pair is <strong>Rāmāyaṇa</strong> and <strong>Mahābhārata</strong>. Rough classroom contrast with Purāṇa: Itihāsa is framed as human-scale dynastic narrative with a ‘it happened’ claim; Purāṇa leans encyclopaedic-cosmological with the five lakṣaṇas. They leak into each other in real manuscripts. For marks: two folders, two jobs, one leak sentence.</p>

      ${cite({
        kind: "Vālmīki Rāmāyaṇa",
        sa: "मा निषाद प्रतिष्ठां त्वमगमः शाश्वतीः समाः ।<br/>यत्क्रौञ्चमिथुनादेकमवधीः काममोहितम् ॥",
        iast: "mā niṣāda pratiṣṭhāṃ tvam agamaḥ śāśvatīḥ samāḥ / yat krauñca-mithunād ekam avadhīḥ kāma-mohitam",
        en: "Hunter, may you not find rest for eternal years, for you killed one of the krauñca pair, lost in love.",
        hi: "श्लोक का जन्म करुणा से हुआ — एक पक्षी गिरा, और कवि का मुख छन्द बन गया।",
        attrib: "Vālmīki Rāmāyaṇa 1.2.15 (Bālakāṇḍa; the krauñca-vadha, taught as the first śloka).",
        note: "Metre is born from grief at harm. Before the epic is a campaign or a coronation, it is a poet’s refusal to treat a killing as small. That is already knowledge: ahiṁsā as a felt measure."
      })}

      <div class="deep-panels">
        <article class="deep-panel">
          <h3>Rāmāyaṇa — constraint and promise</h3>
          <p>Not ‘the good prince serial.’ Board handles: <em>maryādā</em> as a constraint language for royal conduct; vanavāsa as a stress-test of a spoken vow; counsel (Hanumān, Vibhīṣaṇa) as information that must be allowed into a campaign; the later public-administration hook in Unit V. Pick two scenes. Stop.</p>
          <p>Vālmīki’s opening (1.1.1) is a student asking a teacher: the ascetic, devoted to tapas and svādhyāya, questions Nārada. The epic begins as inquiry, not as a trailer.</p>
        </article>
        <article class="deep-panel">
          <h3>Mahābhārata — dilemma and counsel</h3>
          <p>Not ‘war plus a Gītā quote dump.’ Board handles: kin versus polity; the cost of silence (Vidura’s counsel unused); dharma as a conflict of duties rather than a sticker; the Gītā as a philosophical <em>module inside</em> the epic — do not let it eat the hour. The book is an encyclopaedia of hard cases.</p>
        </article>
      </div>

      <div class="verse-duo">
        ${cite({
          kind: "Mahābhārata · Yakṣa-praśna",
          sa: "तर्कोऽप्रतिष्ठः श्रुतयो विभिन्ना नैको मुनिर्यस्य मतं प्रमाणम् ।<br/>धर्मस्य तत्त्वं निहितं गुहायां महाजनो येन गतः स पन्थाः ॥",
          iast: "tarko ’pratiṣṭhaḥ śrutayo vibhinnā naiko munir yasya mataṃ pramāṇam / dharmasya tattvaṃ nihitaṃ guhāyāṃ mahājano yena gataḥ sa panthāḥ",
          en: "Reason has no final rest; the scriptures differ; there is no one sage whose word is the measure. The truth of dharma is hidden in a cave. The path is that by which the great have gone.",
          hi: "तर्क अकेला नहीं टिकता, शास्त्र एक नहीं — धर्म गुफा में छिपा है। बड़े लोगों का चला रास्ता ही रास्ता है।",
          attrib: "Mahābhārata, Vanaparvan, Yakṣa-praśna (Yudhiṣṭhira’s answer; vulgate Vana neighbourhood of the lake-questions).",
          note: "The epic’s own warning against easy dharma. Teach it as humility with a spine — not as ‘anything goes.’"
        })}
        ${cite({
          kind: "Bhagavadgītā",
          sa: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।<br/>मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
          iast: "karmaṇy evādhikāras te mā phaleṣu kadācana / mā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi",
          en: "Your claim is to action alone, never to its fruits. Do not be the cause of fruit; do not cling to inaction.",
          hi: "काम तेरा है, फल का दावा नहीं — और काम छोड़ना भी दावा नहीं।",
          attrib: "Bhagavadgītā 2.47 (Kṛṣṇa to Arjuna, inside the Bhīṣma-parvan neighbourhood of the Mahābhārata).",
          note: "One dilemma-module. The chariot is still on a field of kin. The line does not cancel the epic around it."
        })}
      </div>

      ${D.render({
        type: "compare",
        title: "Two epics — exam handles, not plot",
        headers: ["Itihāsa", "Knowledge handles for BCA-1003 T", "Later hook"],
        rows: [
          ["Rāmāyaṇa", "Promise-keeping, royal constraint, counsel in a campaign", "Unit V administration"],
          ["Mahābhārata", "Conflict of duties, cost of silence, polity versus kin", "Ethics; Gītā as inner module"]
        ]
      })}

      ${D.render({
        type: "figures",
        title: "Stone and pigment remember the epics",
        items: [
          {
            file: "The Poet Valmiki, teaching Ramayana to Kusa and Lava.jpg",
            alt: "Vālmīki teaching the Rāmāyaṇa to Kuśa and Lava",
            caption: "Vālmīki, Kuśa, Lava (Kangra).",
            note: "Itihāsa as transmission: the poet teaches the sons who will sing the poem. A knowledge scene, not a poster."
          },
          {
            file: "Krishna_and_Arjun_on_the_chariot,_Mahabharata,_18th-19th_century,_India.jpg",
            alt: "Kṛṣṇa and Arjuna on the chariot",
            caption: "The Gītā’s chariot.",
            note: "A philosophical hour inside a war of cousins. Keep both facts on the board."
          },
          {
            file: "Bhisma on arrows bed.jpg",
            alt: "Bhīṣma on the bed of arrows",
            caption: "Bhīṣma on śara-śayyā.",
            note: "A vow that outlives the body. Counsel continues from a bed of arrows — knowledge as cost."
          }
        ]
      })}
      <p><strong>Classroom ethics.</strong> Students will bring film versions. Honour the love; examine the syllabus object. No community-baiting. CO4 again: pride without turning classmates into avatars of a war.</p>
      ${sitePoem({
        lines: "जो बीता कह कर भी सिखाए,<br/>वही इतिहास — दास्ताँ से बड़ा।",
        en: "That which, in saying what happened, still teaches — that is Itihāsa, larger than a tale. (Original — not a śloka.)"
      })}
    `;
  }

  function niti() {
    return `
      ${cite({
        kind: "Hitopadeśa",
        sa: "विद्या ददाति विनयं विनयाद्याति पात्रताम् ।<br/>पात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम् ॥",
        iast: "vidyā dadāti vinayaṃ vinayād yāti pātratām / pātratvād dhanam āpnoti dhanād dharmaṃ tataḥ sukham",
        en: "Knowledge gives humility; from humility comes fitness; from fitness, means; from means, dharma; from dharma, sukha.",
        hi: "विद्या अगर घमंड दे, तो वह विद्या अधूरी है — विनय उसकी पहली फसल है।",
        attrib: "Hitopadeśa (praśasti / opening nīti chain, as widely printed).",
        note: "Walk the chain on the board: vidyā → vinaya → pātratā → dhana → dharma → sukha. Each noun is a step. That is how a subhāṣita stores policy."
      })}

      <h2>A knowledge format, not a sermon period</h2>
      <p><strong>Nīti</strong> is practical wisdom about conduct under constraint — of a person, a court, a king. <strong>Subhāṣita</strong> (‘well-spoken’) is a polished verse or sentence built to travel: compression, memory, an ethical point. Nīti-śāstras in the Hitopadeśa / Pañcatantra neighbourhood store policy inside a frame-story: animals and ministers speak; a prince is being educated; the maxim is what survives the story. This is not ‘moral science’ as a school slot. It is a storage format: <em>what should an agent do, here, with incomplete power?</em></p>
      ${D.render({
        type: "vflow",
        title: "From a hard case to a travelling line",
        steps: [
          "A situation with constraint",
          "A nīti judgement — what an agent should do",
          "A story wrapper (Pañcatantra-style)",
          "A subhāṣita packet — one line that can leave the room"
        ]
      })}

      <div class="verse-duo">
        ${cite({
          kind: "Mahopaniṣad (also travelled as nīti)",
          sa: "अयं निजः परो वेति गणना लघुचेतसाम् ।<br/>उदारचरितानां तु वसुधैव कुटुम्बकम् ॥",
          iast: "ayaṃ nijaḥ paro veti gaṇanā laghu-cetasām / udāra-caritānāṃ tu vasudhaiva kuṭumbakam",
          en: "‘This is mine, that is another’s’ — such counting is of the small-minded. For the large-hearted, the world itself is family.",
          hi: "अपना-पराया छोटी गिनती है; बड़े मन के लिए धरती कुटुम्ब है।",
          attrib: "Mahopaniṣad 6.71–72; later widely printed among Hitopadeśa / nīti couplets.",
          note: "CO4 lives here without a speech. Size of mind, not a rallying cry. Dual attribution is honesty: the line travelled."
        })}
        ${cite({
          kind: "Manusmṛti",
          sa: "धर्म एव हतो हन्ति धर्मो रक्षति रक्षितः ।<br/>तस्माद्धर्मो न हन्तव्यो मा नो धर्मो हतोऽवधीत् ॥",
          iast: "dharma eva hato hanti dharmo rakṣati rakṣitaḥ / tasmād dharmo na hantavyo mā no dharmo hato ’vadhīt",
          en: "Dharma, struck, strikes back; dharma, protected, protects. Therefore dharma is not to be struck down, lest struck dharma slay us.",
          hi: "धर्म मारा गया तो मारता है; रक्षा की तो रक्षा करता है — इसलिए धर्म को मत मारो।",
          attrib: "Manusmṛti 8.15 (the full couplet; courtroom / vyavahāra chapter).",
          note: "Nīti at the scale of a court. Unit V’s Arthaśāstra is the heavier cousin: statecraft as a śāstra, not a proverb-sheet."
        })}
      </div>

      <h2>How this classroom quotes</h2>
      <p>Fake Sanskrit on a slide is a professionalism fail — which is why this card carries <em>named</em> verses and refuses the rest. Prefer a line you can attribute. Students may add an original English or Hindi couplet of their own, labelled as theirs. Two safe themes if you paraphrase rather than chant: company shapes conduct; knowledge unused is a lamp in a closed room.</p>
      ${sitePoem({
        lines: "दो पंक्ति में नियम रखो, दस पंक्ति में कहानी।<br/>सुबह नौ बजे जो चले, वही नीति का पानी।",
        en: "Keep the rule in two lines, the story in ten. What still walks at 9 a.m. is nīti’s water. (Original — not a śloka.)"
      })}
      <p><strong>Link forward.</strong> Kauṭilya in Unit V is nīti at state scale. Unit I only installs the format: practical ethics, compressed, teachable before breakfast.</p>
    `;
  }

  function what() {
    return `
      ${cite({
        kind: "Taittirīya Upaniṣad (prose instruction, not a metrical śloka)",
        sa: "वेदमनूच्याचार्योऽन्तेवासिनमनुशास्ति । सत्यं वद । धर्मं चर । स्वाध्यायान्मा प्रमदः ।",
        iast: "vedam anūcyācāryo ’ntevāsinam anuśāsti / satyaṃ vada / dharmaṃ cara / svādhyāyān mā pramadaḥ",
        en: "Having taught the Veda, the ācārya instructs the resident student: speak the truth; practise dharma; do not neglect study.",
        hi: "गुरु वेद सिखाकर अंतिम बात यह कहता है — सच बोलो, धर्म चलो, पढ़ना मत छोड़ो।",
        attrib: "Taittirīya Upaniṣad 1.11.1 (śikṣāvallī; the teacher’s anuśāsana).",
        note: "IKS begins as a handing-on. The last word after the lesson is conduct. That is a system of knowledge, not a museum of slogans."
      })}
      ${cite({
        kind: "Bhagavadgītā",
        sa: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते ।<br/>तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ॥",
        iast: "na hi jñānena sadṛśaṃ pavitram iha vidyate / tat svayaṃ yoga-saṃsiddhaḥ kālenātmani vindati",
        en: "Nothing here is so purifying as knowledge. One perfected in yoga finds it in the self, in time.",
        hi: "ज्ञान को इस श्लोक ने पवित्र कहा है — नारे को नहीं, जानने को। समय लगाना पड़ता है।",
        attrib: "Bhagavadgītā 4.38.",
        note: "A BCA paper is not a licence to claim every invention. It is a licence to know, with names, without hurry."
      })}

      <h2>A working definition</h2>
      <p><strong>Indian Knowledge System</strong> names the organised methods by which knowledge on the subcontinent was produced, classified, transmitted, and put to work — from recitation schools and rule-grammars to medicine, metallurgy, architecture, and statecraft. It is a <em>system</em> word: taxonomy + transmission + application. If you only say “old Indian wisdom,” you have not started the paper.</p>
      ${D.render({ type: "named", id: "gcta", title: "Generate · Classify · Transmit · Apply" })}

      <h2>Why it is on a BCA timetable</h2>
      <p>CCS places this course as <strong>BCA-1003 T</strong>, GEC-I <em>Indian Culture and Civilization</em>, 2 credits, 30 theory hours, 100 marks (25 internal + 75 external), aligned to the <strong>AICTE Model Curriculum 2024</strong> and <strong>NEP 2020</strong>. The policy bet is not that every graduate becomes a Sanskritist. The bet is that a professional student can recognise Indian methods of conservation, measurement, grammar, and governance as knowledge architectures — then relate them to well-being and sustainable practice (CO3, CO4) without a shouting match.</p>

      <h2>Four course outcomes, in lecturer English</h2>
      <ul>
        <li><strong>CO1</strong> — sketch how Vedas, Vedāṅgas, Upāṅgas, Upaveda, Purāṇa and Itihāsa sit together as an education map.</li>
        <li><strong>CO2</strong> — trace and name the systems on the sheet.</li>
        <li><strong>CO3</strong> — pick ideas that are publicly discussable and testable rather than mystical fog.</li>
        <li><strong>CO4</strong> — take pride without denying other people’s knowledge or human rights.</li>
      </ul>

      <h2>What this course is not</h2>
      <p>It is not a substitute for Physics or Discrete Maths. It is not a licence to claim that every modern invention was “already in the Veda.” It is not a copy of any one textbook. We cite public syllabus headings and traditional names; we open Thakur and Mahadevan for chapter depth. Buddhist and Jain streams sit on the same map — this is not a single-creed class.</p>
      ${sitePoem({
        lines: "जो गिना, जो सिखाया, जो काम आया —<br/>वही ज्ञान-रीति; बाकी नारा।",
        en: "What was counted, what was taught, what was put to work — that is a knowledge-way; the rest is a slogan. (Original — not a śloka.)"
      })}
      <p><strong>How these pages work.</strong> Each topic is a gallery: a verse or hook, a map, named lists, heritage figures, then a short modern bridge. Seal a card when you can teach it without scrolling. Unit I is the map; Units II–V apply it to language, number, sky, making, and the body-politic.</p>
    `;
  }

  function upaveda() {
    return `
      ${cite({
        kind: "Caraka Saṁhitā",
        sa: "धर्मार्थकाममोक्षाणामारोग्यं मूलमुत्तमम् ।<br/>रोगास्तस्यापहर्तारः श्रेयसो जीवितस्य च ॥",
        iast: "dharmārtha-kāma-mokṣāṇām ārogyaṃ mūlam uttamam / rogās tasyāpahartāraḥ śreyaso jīvitasya ca",
        en: "Health is the foremost root of dharma, artha, kāma, and mokṣa. Diseases steal that root, and steal the good of life.",
        hi: "धर्म-अर्थ-काम-मोक्ष की जड़ आरोग्य है — रोग वही जड़ काटते हैं।",
        attrib: "Caraka Saṁhitā, Sūtrasthāna 1.15.",
        note: "Why an applied science of life sits on an education map. Without a body that can study, the other vidyās have nowhere to stand."
      })}

      <h2>Applied companions, not a fifth Veda</h2>
      <p><strong>Upavedas</strong> hang beside the Veda stack: corpora of practice that a civilisation counted as vidyā, not as leftover hobby. They are how Caturdaśa becomes Aṣṭādaśa (14+4=18), and how later units are not random GK. The four names this paper wants on the board:</p>
      ${D.render({
        type: "tree",
        title: "Four applied doors",
        root: "Upaveda",
        branches: ["Āyurveda — life and health", "Dhanurveda — bow and defence", "Gandharvaveda — music and performance", "Sthāpatyaveda — built form"]
      })}

      <div class="deep-panels">
        <article class="deep-panel">
          <h3>Āyurveda</h3>
          <p>Life-knowledge: food, regimen, the living body. Unit V returns with sleep, water, and diet as lecture headings. Today: name it as applied knowledge of āyus, not as a licence to diagnose classmates.</p>
          ${cite({
            kind: "Caraka Saṁhitā",
            sa: "हिताहितं सुखं दुःखमायुस्तस्य हिताहितम् ।<br/>मानं च तच्च यत्रोक्तमायुर्वेदः स उच्यते ॥",
            iast: "hitāhitaṃ sukhaṃ duḥkham āyus tasya hitāhitam / mānaṃ ca tac ca yatroktam āyurvedaḥ sa ucyate",
            en: "Wholesome and unwholesome, ease and suffering, life and what helps or harms it, and the measure of these — where that is taught, that is called Āyurveda.",
            hi: "आयु किसे सुखाती है, किसे दुखाती है — जहाँ यह नाप हो, वहीं आयुर्वेद।",
            attrib: "Caraka Saṁhitā, Sūtrasthāna 1.41.",
            note: "A definition, not a brand. Keep doṣa-charts for Unit V, and even then carefully."
          })}
        </article>
        <article class="deep-panel">
          <h3>Dhanurveda</h3>
          <p>Bow-knowledge: martial and defence training in the traditional list. Teach it as organised force-knowledge — discipline, measure, the ethics of harm — not as a video-game skin. Neighbour of nīti when a king must decide when not to draw.</p>
        </article>
        <article class="deep-panel">
          <h3>Gandharvaveda</h3>
          <p>Music and performance knowledge; hangs near Sāmaveda’s chant world. The Nāṭyaśāstra line on the Kalās card (na taj jñānaṃ…) is at home here: stage, song, and abhinaya as a house of vidyās. Useful when a student thinks IKS is only ‘serious philosophy.’</p>
        </article>
        <article class="deep-panel">
          <h3>Sthāpatyaveda</h3>
          <p>Architecture / built form. Neighbour of Śilpa and Vāstu. Unit IV lives here. The temple dialects already named — Nāgara, Drāviḍa, Vesara — are this door’s public face.</p>
        </article>
      </div>

      <p><strong>Pairing lore</strong> (optional colour, not a hill): traditional schemes often pair Āyurveda with Ṛg or Atharva, Dhanurveda with Yajur, Gandharva with Sāma, Sthāpatya with Atharva. Posters disagree. If you mention pairings, say “one traditional pairing” and keep the four names as the scoring core.</p>
      ${D.render({
        type: "figures",
        items: [
          {
            file: "The Susruta-Samhita or Sahottara-Tantra (A Treatise on Ayurvedic Medicine) LACMA M.87.271a-g (1 of 8).jpg",
            alt: "Palm-leaf Suśruta Saṁhitā manuscript (LACMA)",
            caption: "Suśruta Saṁhitā (LACMA).",
            note: "Āyurveda as a written śāstra: palm leaf, diagram, and a surgeon’s tradition. Name the book; do not invent biographies."
          }
        ]
      })}
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
    purana,
    itihasa,
    niti,
    what,
    upaveda,
    KALAS,
    CLUSTERS
  };
})(window);
