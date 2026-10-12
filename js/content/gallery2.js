(function (g) {
  const D = window.IKSDiagrams;
  const esc = D.esc;

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

  /* Bhūta-saṁkhyā classroom lexicon. Synonyms vary by author; words such as
     sāgara (4 or 7) and go (1 or 9) are flagged in the prose, not hidden. */
  const BHUTA = [
    [0, "śūnya, kha, bindu, ākāśa, ambara, vyoma, gagana, ananta, pūrṇa, randhra"],
    [1, "ādi, eka, indu, candra, soma, śaśī, dharā, bhūmi, pṛthivī, rūpa"],
    [2, "yama, aśvin, netra, akṣi, nayana, karṇa, pakṣa, bāhu, kara"],
    [3, "rāma, guṇa, agni, vahni, anala, loka, tri, pura, kāla (three times)"],
    [4, "veda, śruti, abdhi, samudra, sāgara, yuga, āśrama, varṇa, kṛta"],
    [5, "bāṇa, śara, iṣu, indriya, bhūta, prāṇa, pāṇḍava, artha, viṣaya"],
    [6, "rasa, aṅga, ṛtu, darśana, tarka, kāya, rāga"],
    [7, "aśva, naga, parvata, ṛṣi, muni, svara, dvīpa, aśva of the sun"],
    [8, "vasu, nāga, gaja, danti, diggaja, bhūti"],
    [9, "aṅka, graha, nanda, chidra, go (openings — author-dependent)"],
    [10, "diś, āśā, aṅguli, paṅkti, avatāra"],
    [11, "rudra, īśvara, hara, śiva"],
    [12, "rāśi, māsa, sūrya, arka, āditya, bhānu, cakra"],
    [18, "purāṇa, dhṛti (eighteen great books; also a metre-name)"],
    [27, "nakṣatra, bha"],
    [33, "deva, amara, sura, vibudha"]
  ];

  function bhutaTable() {
    const rows = BHUTA.map(
      ([n, words]) => `<tr><td>${n}</td><td>${esc(words)}</td></tr>`
    ).join("");
    return `<div class="map-wrap"><table class="compare kala-index">
      <thead><tr><th>Number</th><th>Words a verse may use</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  }

  function phonetics() {
    return `
      ${cite({
        kind: "Pāṇinīya-śikṣā 1",
        sa: "अथ शिक्षां प्रवक्ष्यामि पाणिनीयं मतं यथा ।<br/>शास्त्रानुपूर्वं तद्विद्याद्यथोक्तं लोकवेदयोः ॥",
        iast: "atha śikṣāṃ pravakṣyāmi pāṇinīyaṃ mataṃ yathā / śāstrānupūrvaṃ tad vidyād yathoktaṃ lokavedayoḥ",
        en: "Now I shall set forth phonetics as the Pāṇinian view has it. Know that science in its proper order, as it is spoken for the world and for the Veda.",
        hi: "ध्वनि का शास्त्र दोनों जगह काम आता है — लोक की भाषा में, और वेद के पाठ में।",
        attrib: "Pāṇinīya-śikṣā 1. One of several śikṣā texts; this is the short metrical treatise taught with Pāṇini’s name.",
        note: "Unit I seated Śikṣā as the nose of the vedapuruṣa. This hour opens the nose. Grammar (the mouth) is the next card."
      })}
      ${sitePoem({
        lines: "अक्षर पहले मुँह में जन्मे, अर्थ बाद में आए।<br/>स्वर बिगड़ा तो मन्त्र दूसरा हो जाता है।",
        en: "The syllable is born in the mouth before the meaning arrives. Spoil the accent, and the mantra has become a different speech. (Original — not a śloka.)"
      })}

      <h2>What Śikṣā is keeping</h2>
      <p>A language that lives by recitation has to know its sounds the way a builder knows joints. <em>Śikṣā</em> is that knowledge: place of articulation, effort, length, accent, and the breath-quality of each sound. It is a Vedāṅga because a Veda kept in the ear can be lost by a lazy tongue. The famous warning in this same short text is blunt: a mantra wrong in accent or in sound does not say what it was meant to say. The classroom does not need the fear. It needs the care.</p>
      <p>The treatise itself offers two totals — sixty-three sounds, or sixty-four — “in Śambhu’s view,” for both Prakrit and Sanskrit. Then it gives the ingredients rather than a poster. Twenty-one vowels. Twenty-five stops (<em>sparśa</em>: five rows of five, from ka to ma). Eight sounds beginning from <em>ya</em> (ya, ra, la, va, śa, ṣa, sa, ha). Four <em>yama</em>s. Anusvāra and visarga, which lean on a neighbour. The dependent sounds <em>jihvāmūlīya</em> and <em>upadhmānīya</em>. A student who has only met the school varṇamālā of fourteen vowels has not yet met the Śikṣā’s arithmetic. Both belong on the board, and they are not the same sentence.</p>
      ${cite({
        kind: "Pāṇinīya-śikṣā 10 and 13",
        sa: "स्वरतः कालतः स्थानात् प्रयत्नानुप्रदानतः ।<br/>इति वर्णविदः प्राहुर्निपुणं तन्निबोधत ॥<br/>अष्टौ स्थानानि वर्णानामुरः कण्ठः शिरस्तथा ।<br/>जिह्वामूलं च दन्ताश्च नासिकोष्ठौ च तालु च ॥",
        iast: "svarataḥ kālataḥ sthānāt prayatnānupradānataḥ / iti varṇavidaḥ prāhur nipuṇaṃ tan nibodhata // aṣṭau sthānāni varṇānām uraḥ kaṇṭhaḥ śiras tathā / jihvāmūlaṃ ca dantāś ca nāsikoṣṭhau ca tālu ca",
        en: "Those who know sounds say: understand a sound carefully by accent, by length, by place, by effort, and by the quality of the breath. The places of sounds are eight — chest, throat, head, root of the tongue, teeth, nose, lips, and palate.",
        hi: "हर वर्ण को पाँच तरह से पहचानो — स्वर, समय, स्थान, प्रयत्न, और श्वास का प्रकार। स्थान आठ गिनाए गए हैं।",
        attrib: "Pāṇinīya-śikṣā 10 and 13.",
        note: "Five parameters, eight places. The next verses assign particular sounds to throat, palate, roof, teeth, and lips. A wall-chart of five places is a simplification of this, not a rival Veda."
      })}

      <h2>Where the sound is made</h2>
      <p>Verses 17 and 18 seat the inventory. Throat: <em>a</em> and <em>ha</em>. Palate: <em>i</em>, the ca-row, <em>ya</em>, <em>śa</em>. Lips: <em>u</em> and the pa-row. The roof of the mouth: <em>ṛ</em>, the ṭa-row, <em>ra</em>, <em>ṣa</em>. Teeth: <em>ḷ</em>, the ta-row, <em>la</em>, <em>sa</em>. Tongue-root: the ka-row. Teeth and lip together: <em>va</em>. <em>e</em> and <em>ai</em> are throat-and-palate. <em>o</em> and <em>au</em> are throat-and-lip. Nasals leave by the nose.</p>
      ${D.render({ type: "named", id: "varna-sthana", title: "Places — a seating of Śikṣā 17–18" })}
      ${cite({
        kind: "Pāṇinīya-śikṣā 17–18",
        sa: "कण्ठ्यावहाविचुयशास्तालव्या ओष्ठजावुपू ।<br/>स्युर्मूर्धन्या ऋटुरषा दन्त्या ऌितुलसाः स्मृताः ॥<br/>जिह्वामूले तु कुः प्रोक्तो दन्त्योष्ठ्यो वः स्मृतो बुधैः ।<br/>एऐ तु कण्ठतालव्या ओऔ कण्ठोष्ठजौ स्मृतौ ॥",
        iast: "kaṇṭhyāv ahāv icuyaśās tālavyā oṣṭhajāv upū / syur mūrdhanyā ṛṭuraṣā dantyā ḷitulasāḥ smṛtāḥ // jihvāmūle tu kuḥ prokto dantyoṣṭhyo vaḥ smṛto budhaiḥ / e-ai tu kaṇṭhatālavyā o-au kaṇṭhoṣṭhajau smṛtau",
        en: "A and ha are throat sounds; i, the ca-row, ya and śa are palatal; u and the pa-row are labial. Ṛ, the ṭa-row, ra and ṣa are retroflex; ḷ, the ta-row, la and sa are dental. The ka-row is taught at the root of the tongue; va is dental-labial. E and ai are throat-and-palate; o and au are throat-and-lip.",
        hi: "कण्ठ, तालु, मूर्धा, दन्त, ओष्ठ — और जहाँ दो स्थान मिलते हैं, वहाँ ए/ऐ और ओ/औ बैठते हैं।",
        attrib: "Pāṇinīya-śikṣā 17–18, in the sandhi of the recited line.",
        note: "Read this beside the diagram. If a printed chart moves ka to the throat and calls the roof ‘mūrdhan’, it is using a cousin-map. Name the cousin. Do not pretend there is only one poster in the tradition."
      })}

      <h2>Effort, breath, length, accent</h2>
      ${D.render({
        type: "compare",
        title: "Four further axes — so a sound is not only a place",
        headers: ["Axis", "Traditional names", "What changes"],
        rows: [
          ["Prayatna · effort / contact", "spṛṣṭa, īṣat-spṛṣṭa, īṣad-vivṛta, vivṛta", "Stops touch fully. Ya ra la va touch lightly. Śa ṣa sa are slightly open. Vowels are open."],
          ["Anupradāna · breath", "śvāsa / aghoṣa and nāda / ghoṣa; alpa- and mahā-prāṇa; anunāsika", "Unvoiced and voiced, unaspirated and aspirated, oral and nasal. Ka and kha differ by breath; ka and ga by voice; ga and ṅa by the nose."],
          ["Kāla · length", "hrasva, dīrgha, pluta — one, two, three mātrās", "A short a is one beat. Ā is two. A pluta, the called vowel of ritual, is three. Verse 11 names all three."],
          ["Svara · accent", "udātta, anudātta, svarita", "Raised, unraised, and the moving accent. In Vedic recitation these are not decoration. A shifted accent is a shifted utterance."]
        ]
      })}

      <h2>Sandhi — what happens when sounds meet</h2>
      <p>Sandhi is not a trick for examinations. It is the ordinary life of a language whose words are pronounced in contact. A final sound and an initial sound negotiate. The tradition sorts the negotiations into vowel-meetings, consonant-meetings, and visarga-meetings. Five vowel operations cover most of what a first year must be able to undo and redo.</p>
      ${D.render({
        type: "compare",
        title: "Five vowel meetings a class can hear",
        headers: ["Operation", "The meeting", "Heard result"],
        rows: [
          ["Savarṇa-dīrgha", "a or ā meets a or ā", "vidyā + ālaya → vidyālaya"],
          ["Guṇa", "a or ā meets i/ī, u/ū, or ṛ", "nara + indra → narendra; sūrya + udaya → sūryodaya"],
          ["Vṛddhi", "a or ā meets e/ai or o/au", "deva + aiśvarya → devaiśvarya; rāma + oṣadhi → rāmauṣadhi"],
          ["Yaṇ", "i, u, or ṛ meets a following vowel", "iti + api → ity api; madhu + ari → madhv ari"],
          ["Ayādi", "e, o, ai, au meet a following vowel", "hare + e → haraye; the e opens into ay"]
        ]
      })}
      <p>Consonant sandhi is the same courtesy among stops. A familiar pair: <em>vāk</em> + <em>īśa</em> becomes <em>vāgīśa</em> — the unvoiced ka has become voiced ga between vowels, which is <em>jaśtva</em> in the grammarian’s name. <em>Sam</em> + <em>kṛta</em> is heard as <em>saṃskṛta</em>, with the nasal taking the anusvāra a scribe writes as a dot. Visarga, the final <em>ḥ</em>, is the most restless of all: <em>rāmaḥ</em> + <em>api</em> is heard as <em>rāmo ’pi</em>. A reader who cannot undo these meetings cannot find the words. That problem returns, honestly, on the NLP card. It is not a slogan. It is this table.</p>

      <h2>Three rooms</h2>
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>1. A reciter’s six faults and six virtues</h3>
          <p>The Śikṣā is not only a chart of places. It knows a bad reading when it hears one: sung when it should be spoken, rushed, with a wobbling head, read off a page without the mouth’s knowledge, ignorant of the sense, thin in the throat. Against those it sets sweetness, distinct syllables, a true word-break, right accent, steadiness, and the power to keep the tempo. A BCA room that treats phonetics as “data about phones” should still hear this list. The tradition was already evaluating transmission.</p>
          ${cite({
            kind: "Pāṇinīya-śikṣā 32–33",
            sa: "गीती शीघ्री शिरःकम्पी तथा लिखितपाठकः ।<br/>अनर्थज्ञोऽल्पकण्ठश्च षडेते पाठकाधमाः ॥<br/>माधुर्यमक्षरव्यक्तिः पदच्छेदस्तु सुस्वरः ।<br/>धैर्यं लयसमर्थं च षडेते पाठका गुणाः ॥",
            iast: "gītī śīghrī śiraḥkampī tathā likhitapāṭhakaḥ / anarthajño ’lpakaṇṭhaś ca ṣaḍ ete pāṭhakādhamāḥ // mādhuryam akṣaravyaktiḥ padacchedas tu susvaraḥ / dhairyaṃ layasamarthaṃ ca ṣaḍ ete pāṭhakā guṇāḥ",
            en: "Six low reciters: the one who sings it, the one who rushes, the one whose head shakes, the one who reads from a written page, the one who does not know the sense, the one whose throat is weak. Six virtues: sweetness, distinctness of syllables, a true cut between words, right accent, steadiness, and mastery of tempo.",
            hi: "जल्दी पढ़ना, केवल लिखे से पढ़ना, अर्थ न जानना — ये दोष हैं। अक्षर साफ हों, पद कटे हों, स्वर सही हो — ये गुण हैं।",
            attrib: "Pāṇinīya-śikṣā 32–33.",
            note: "‘Likhita-pāṭhaka’ is not a ban on books. It is a warning against a mouth that only follows ink and has not learned the sound."
          })}
        </article>
        <article class="deep-panel">
          <h3>2. The school alphabet and the Śikṣā’s alphabet</h3>
          <p>Fourteen vowels on a classroom chart — a ā i ī u ū ṛ ṝ ḷ ḹ e ai o au — are the right first instrument. They are not the whole instrument. Pluta (the three-mora vowel), anunāsika colour, anusvāra, visarga, the two dependent fricatives at the tongue-root and the lip, and the yamas (twin sounds inside certain clusters) are why the verse can say sixty-three or sixty-four. A pandit is not embarrassed that the totals are argued. A first-year student should be able to say: “fourteen on the chart I recite; more in the Śikṣā, and the text itself allows two totals.”</p>
        </article>
        <article class="deep-panel">
          <h3>3. Accent is part of the word</h3>
          <p>In classical Sanskrit as printed for a modern prose class, accent is often silent. In Vedic recitation it is not. Udātta, anudātta, and svarita are three behaviours of the voice, and families of reciters still carry them. The Śikṣā even ties Vedic accents to the musical notes in one teaching verse (udātta with niṣāda and gāndhāra, and so on) — a bridge between phonetics and song, not a claim that every ṛk is a rāga. When Unit III and the Piṅgala card talk of heavy and light syllables, they are talking about length. Accent is a different axis. Do not fold them into one “prosody” blur.</p>
        </article>
      </div>

      <h2>Heard and kept</h2>
      <p>Phonetics in this civilisation is not a museum of diagrams only. It is a sound still carried by people, and a script that had to decide how to show what the mouth already knew.</p>
      ${D.render({
        type: "figures",
        title: "Heritage figures — sound, script, and the goddess of speech",
        items: [
          {
            file: "Vedic Chanting by Brahmacharins (15885243999).jpg",
            alt: "Brahmacharins associated with Vedic chanting",
            caption: "Recitation as a discipline.",
            note: "Śikṣā is proved in the mouth. A written chart is the map; the pāṭha is the country."
          },
          {
            file: "Raja Ravi Varma, Goddess Saraswati.jpg",
            alt: "Sarasvatī with vīṇā",
            caption: "Sarasvatī, vāgdevī.",
            note: "Speech, learning, and the vīṇā in one figure. Phonetics and music share a goddess before they share a syllabus box."
          },
          {
            file: "Devanagari_script.png",
            alt: "Devanagari script sample",
            caption: "Devanāgarī.",
            note: "A later script, orderly about vowels. It is not the sound. It is one successful attempt to show the sound."
          },
          {
            file: "Nadaswaram (also nagaswaram or nagasuram).jpg",
            alt: "Nadaswaram",
            caption: "Nāgasvaram.",
            note: "A temple wind instrument. Useful here as a reminder that Indian sound-knowledge is not only spoken Sanskrit — the ear was trained in more than one room."
          }
        ]
      })}
    `;
  }

  function panini() {
    return `
      ${cite({
        kind: "Aṣṭādhyāyī 1.1.1",
        sa: "वृद्धिरादैच्",
        iast: "vṛddhir ād-aic",
        en: "Vṛddhi is the name of the vowels ā, ai, and au.",
        hi: "पहला सूत्र शब्दकोश नहीं है। वह एक नाम रखता है — वृद्धि — और बताता है कि वह किन स्वरों का नाम है।",
        attrib: "Pāṇini, Aṣṭādhyāyī 1.1.1. The first sūtra of the eight books. The Śiva-sūtras stand before it, as the alphabet from which abbreviations are cut.",
        note: "A definition (saṁjñā-sūtra). The book begins by naming, because later rules will say ‘do vṛddhi here’ and will expect you to know which vowels those are."
      })}
      ${sitePoem({
        lines: "नियम छोटा, भाषा बड़ी।<br/>जो सूत्र में न कहा, वह आगे से चला आता है।",
        en: "The rule is short and the language is large. What a sūtra does not repeat, it expects you to have carried forward. (Original — not a śloka.)"
      })}

      <h2>A book in eight, built on fourteen</h2>
      <p>Pāṇini’s <em>Aṣṭādhyāyī</em> — “eight chapters” — is the classical generative grammar of Sanskrit. It does not list every correct sentence. It gives a finite body of rules which, applied in a known order to roots, stems, and affixes, produce well-formed words. That is why a person who has never written a program can still feel, on meeting it, that someone has built an engine. The feeling is welcome at the end of the hour. The engine itself is the hour.</p>
      <p>Before the eight chapters stand the fourteen <em>Śiva-sūtras</em> (also called Māheśvara-sūtras or pratyāhāra-sūtras). They are not chapter 1. They are the alphabet arranged so that a name can mean a span. The marker at the end of each line — ṇ, k, ṅ, c, ṭ, and the rest — is an <em>it</em>, a tag, not a sound you pronounce in the word. A <em>pratyāhāra</em> is a short name made from a starting sound plus a later tag. <em>Ac</em> means “from a up to the tag c”: the vowels. <em>Hal</em> means “from ha up to the final tag l”: the consonants. <em>Al</em> means every sound in the list. The first sūtra’s <em>aic</em> means “from ā, which is already inside the vowel-list’s logic, up to c” in the special way the tradition reads <em>āt</em> + <em>aic</em>: ā, ai, au. You do not have to derive that on day one. You do have to see why fourteen lines can do the work of a hundred lists.</p>
      ${D.render({
        type: "compare",
        title: "The fourteen Śiva-sūtras — the whole alphabet as a cuttable list",
        headers: ["#", "The line", "The tag is not pronounced"],
        rows: [
          ["1", "a i u", "ṇ"],
          ["2", "ṛ ḷ", "k"],
          ["3", "e o", "ṅ"],
          ["4", "ai au", "c"],
          ["5", "ha ya va ra", "ṭ"],
          ["6", "la", "ṇ"],
          ["7", "ña ma ṅa ṇa na", "m"],
          ["8", "jha bha", "ñ"],
          ["9", "gha ḍha dha", "ṣ"],
          ["10", "ja ba ga ḍa da", "ś"],
          ["11", "kha pha cha ṭha tha ca ṭa ta", "v"],
          ["12", "ka pa", "y"],
          ["13", "śa ṣa sa", "r"],
          ["14", "ha", "l"]
        ]
      })}
      <p>Count them aloud once in the term. <em>Ac</em>, <em>hal</em>, and <em>al</em> are the three pratyāhāras a first year should be able to expand without notes. Everything else in the grammar becomes less magical after that.</p>

      <h2>How a sūtra actually behaves</h2>
      <p>The eight books are four quarters each (<em>pāda</em>). Rules are of several tempers, and the tradition’s own names are better than invented ones.</p>
      ${D.render({
        type: "compare",
        title: "Tempers of a rule — learn the names",
        headers: ["Kind", "What it does", "A sūtra you can point at"],
        rows: [
          ["Saṁjñā", "Gives a technical name", "1.1.1 vṛddhir ād-aic — vṛddhi means ā, ai, au. 1.1.2 adeṅ guṇaḥ — guṇa means a, e, o."],
          ["Paribhāṣā", "Tells other rules how to behave", "1.4.2 vipratiṣedhe paraṃ kāryam — when two operations compete, the later one prevails."],
          ["Adhikāra", "Holds a heading over the following rules until it is closed", "A domain-marker. Later rules inherit it. This is why the book can be short."],
          ["Vidhi", "States an operation: substitute, add, double, delete", "The working mass of the text. 6.1.87 ād guṇaḥ is the famous ‘guṇa in place of a and the following vowel’, inside its domain."],
          ["Atideśa", "Says ‘treat this as if it were that’", "A transfer of behaviour, not a new sound."],
          ["Nipātana", "Lists a form that is simply so", "An exception you memorise because the general machine does not build it."],
          ["Asiddha", "Treats a later rule as not yet done, for the sake of an earlier one", "8.2.1 pūrvatrāsiddham opens the tripāḍī, the last three quarters (8.2–8.4)."]
        ]
      })}
      <p><em>Anuvṛtti</em> is the habit that makes the book readable only if you read it as a book. A word stated in one sūtra continues to apply to the next sūtras until it is cancelled. The ink is silent. The commentary is not. This is why a bare list of sūtras, stripped of anuvṛtti, looks like riddles, and why Patañjali’s <em>Mahābhāṣya</em> and the later <em>Kāśikā</em> (Jayāditya and Vāmana) and Bhaṭṭoji’s <em>Siddhānta-kaumudī</em> are not optional ornaments. They are how a human carries the ellipsis.</p>
      <p>Kātyāyana’s <em>vārttika</em>s are critical notes on the sūtras — additions, repairs, objections. Patañjali’s Mahābhāṣya discusses the sūtras and the vārttikas. In the opening, the Paspaśāhnika, Patañjali gives grammar five purposes a class can remember without a slogan: <em>rakṣā</em> (guarding the Veda’s wording), <em>ūha</em> (adapting a mantra when the rite changes the word), <em>āgama</em> (what has come down by tradition), <em>laghu</em> (brevity — a rule instead of an endless list), and <em>asaṁdeha</em> (removing doubt about which form is right). Brevity is a moral of this science, not an accident of style.</p>

      <h2>A word, and who does what</h2>
      <p>One sūtra a computing student and a pandit can share without embarrassment: <em>suptiṅantaṃ padam</em> (1.4.14) — a <em>pada</em>, a word in the grammatical sense, is what ends in a nominal ending (<em>sup</em>) or a verbal ending (<em>tiṅ</em>). Sanskrit grammar does not start from the space-separated token a modern keyboard makes. It starts from an inflected unit.</p>
      <p>Around that decision sit the <em>kāraka</em>s — the semantic roles that later receive case endings. They are not identical with the cases. A kāraka is the role; the vibhakti is the ending that often expresses it. Six are the working set:</p>
      ${D.render({
        type: "compare",
        title: "Six kārakas — roles, with the sūtra that names them",
        headers: ["Kāraka", "Sūtra", "Plain sense"],
        rows: [
          ["Apādāna", "1.4.24 dhruvam apāye ’pādānam", "The fixed point from which something departs"],
          ["Sampradāna", "1.4.32 karmaṇā yam abhipraiti sa sampradānam", "The one toward whom the act is aimed — the recipient"],
          ["Karaṇa", "1.4.42 sādhakatamaṃ karaṇam", "The means most effective in accomplishing the act"],
          ["Adhikaraṇa", "1.4.45 ādhāro ’dhikaraṇam", "The location, the substratum"],
          ["Karma", "1.4.49 kartur īpsitatamaṃ karma", "What the agent most wants to reach through the act"],
          ["Kartṛ", "1.4.54 svatantraḥ kartā", "The agent — the one who is independent in the act"]
        ]
      })}
      <p>A seventh name, <em>hetu</em>, the causal agent, is discussed in the same neighbourhood. Case endings (prathamā through saptamī, and the vocative as a use of the first) are assigned afterwards. A student who says “nominative means subject” has collapsed two layers the grammar keeps apart. That collapse is the thing this table exists to prevent.</p>

      <h2>Three rooms</h2>
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>1. Order is part of the meaning</h3>
          <p>Rules conflict. Pāṇini does not shrug. <em>Vipratiṣedhe paraṃ kāryam</em> — in a conflict, the later operation wins — is a default, not a mood. The tripāḍī then declares itself <em>asiddha</em> with respect to what came before: a rule in 8.2–8.4 is treated as not yet having taken effect when an earlier rule looks back. An engineer recognises a pipeline with a staged commit. A pandit recognises the tripāḍī. Both are looking at 8.2.1. Neither has to rename it.</p>
        </article>
        <article class="deep-panel">
          <h3>2. The commentary stack is the text’s social life</h3>
          <p>Pāṇini, Kātyāyana, Patañjali — sūtra, vārttika, bhāṣya — is the classical triad. The Kāśikā vṛtti walks the sūtras in order with examples. Bhaṭṭoji Dīkṣita’s Siddhānta-kaumudī rearranges them by topic (sandhi together, kāraka together), which is why a modern student often meets Pāṇini through Bhaṭṭoji and not through the raw eight books. Say that. A rearrangement is a pedagogical mercy and also a different path through the same forest. The Kaumudī is not the Aṣṭādhyāyī. It is the Aṣṭādhyāyī taught in another order.</p>
        </article>
        <article class="deep-panel">
          <h3>3. What this book is not</h3>
          <p>It is not a dictionary, not a list of all Sanskrit sentences, and not a program written for a machine that would be built two millennia later. It is a lakṣaṇa, a characterisation, of a lakṣya, the language to be characterised. Roots (<em>dhātu</em>, listed in the Dhātupāṭha), nominal bases, and affixes go in. Correct words come out, when the operator knows the order. Undoing a finished sentence — finding the words inside sandhi, then the roots inside the words — is a further art. That art is the next card. Do not make this card apologise for not being that one.</p>
        </article>
      </div>

      <h2>The book as a thing people copied</h2>
      ${D.render({
        type: "figures",
        title: "Heritage figures — the grammar as manuscript and as tradition",
        items: [
          {
            file: "Panini_Astadhyayi,_Sanskrit_language,_Southern_Grantha_script.jpg",
            alt: "Aṣṭādhyāyī manuscript in Grantha script",
            caption: "Aṣṭādhyāyī in Grantha.",
            note: "The same sūtras, a southern script. Pāṇini’s book travelled by being rewritten, not by remaining in one alphabet."
          },
          {
            file: "2nd century BCE and 11th century CE, Double book manuscript, Patanjali Mahabhasya and Kaiyata Mahābhāṣyapradīpa, Sanskrit Hindu text India, now at University of Pennsylvania 01.jpg",
            alt: "Manuscript of the Mahābhāṣya with Kaiyaṭa’s commentary",
            caption: "Mahābhāṣya with Kaiyaṭa’s Pradīpa.",
            note: "A later manuscript carrying Patañjali’s great commentary and Kaiyaṭa’s gloss. The paper is not the century of the teacher. The stack of commentary is the point."
          },
          {
            file: "Patanjali.jpg",
            alt: "Patañjali depicted as Śeṣa",
            caption: "Patañjali as Śeṣa.",
            note: "A traditional image. Later devotion often seats the Mahābhāṣya’s author in this form. Historians keep the grammarian and the Yoga-sūtra’s Patañjali as a question of identity, not as one statue that settles it."
          },
          {
            file: "Saraswati statue (2052703080).jpg",
            alt: "Sarasvatī with a manuscript",
            caption: "Vāc, with a palm leaf.",
            note: "Grammar is a science of speech. The goddess of speech holds the leaf because the rule and the recitation were never enemies."
          }
        ]
      })}
    `;
  }

  function nlp() {
    return `
      ${cite({
        kind: "Aṣṭādhyāyī 1.4.14",
        sa: "सुप्तिङन्तं पदम्",
        iast: "suptiṅantaṃ padam",
        en: "A word is that which ends in a nominal ending or a verbal ending.",
        hi: "आधुनिक टोकन खाली जगह से कटता है। पाणिनि का पद विभक्ति से कटता है। यही अंतर संगणकीय विश्लेषण की असली शुरुआत है।",
        attrib: "Pāṇini, Aṣṭādhyāyī 1.4.14.",
        note: "The right epigraph for a computing hour. Segmentation, morphology, and roles all start after you accept this definition of a word."
      })}
      ${sitePoem({
        lines: "संधि ने शब्द चिपकाए, मनुष्य ने उन्हें पहचाना।<br/>मशीन तभी पढ़ेगी जब चिपकने का नियम उसके पास हो।",
        en: "Sandhi glued the words; a human still recognised them. A machine reads them only when it has been given the rules of the glue. (Original — not a śloka.)"
      })}

      <h2>The real task, in three layers</h2>
      <p>Sanskrit on a page is a poor guide to Sanskrit in a sentence. Classical writing often joins words that speech joins. A computational treatment that deserves the name has to do three things, in an order a grammarian would recognise.</p>
      ${D.render({
        type: "vflow",
        title: "From a written line to an analysis",
        steps: [
          "Sandhi-viccheda — find the joints and restore the words",
          "Prakriyā reversed — for each word, root or stem, affixes, and the rule-path that built it",
          "Kāraka and vibhakti — who does what, and which ending carried the role"
        ]
      })}
      <p><strong>Sandhi-viccheda</strong> is segmentation. <em>Vidyālayam</em> might be <em>vidyā</em> + <em>ālayam</em>, and a human hears it at once. A program must propose the cut, undo savarṇa-dīrgha, and keep the other legal cuts from flooding the result. This is the hard ordinary problem. It is not solved by calling Sanskrit “unambiguous.” The grammar is explicit. The written line is still ambiguous until the rules are run in reverse under constraints.</p>
      <p><strong>Morphological analysis</strong> walks back along a path the Aṣṭādhyāyī would walk forward. A finite verb yields a root from the Dhātupāṭha, a tense or mood (<em>la-kāra</em>), a person and number. A noun yields a stem, a gender, a case, a number. The forward direction is <em>prakriyā</em>, the derivation a student performs on a slate. The backward direction is what a reader and a parser both do. Pāṇini wrote the forward characterisation. Centuries of readers practised the return journey in their heads. Software that does the return journey is new. The path it tries to reverse is not.</p>
      <p><strong>Kāraka labelling</strong> is where this tradition is more interesting than a naive “subject and object” scheme. The six roles on the previous card — agent, object, instrument, recipient, source, location — do not line up one-to-one with the seven cases. A location can surface in the seventh, and sometimes not. An agent can hide behind a passive construction while the grammar still knows who the <em>kartṛ</em> is. A computational model that emits only nominative-subject and accusative-object will fail exactly the sentences a kāraka analysis was built to illuminate.</p>

      <h2>What is actually being built now</h2>
      <p>There is a living research field called Sanskrit computational linguistics. It is not a rumour and it is not finished. Name work a student can go and look at, and do not inflate it.</p>
      ${D.render({
        type: "compare",
        title: "Research a class may cite — tools, not trophies",
        headers: ["Work", "What it is", "What it is not"],
        rows: [
          ["Sanskrit Heritage Reader", "Gérard Huet’s long project (Inria): a formalised Pāṇinian lexicon and an analyser a reader can query", "Not ‘the Aṣṭādhyāyī running itself’, and not a neural translator"],
          ["Saṃsādhanī", "The analyser and sandhi tools associated with IIIT Hyderabad’s Sanskrit initiative", "Not a replacement for a teacher of prakriyā"],
          ["The Sanskrit Library", "Digital texts and linguistic annotation associated with Peter Scharf and collaborators", "Not a claim that the Veda has been ‘solved’ by software"]
        ]
      })}
      <p>These projects differ in formalism. Some lean on a careful encoding of Pāṇinian derivations. Some on transducers. Newer work, as in every language, also uses statistical and neural models. A neural model does not “contain” Pāṇini. It can be tested against analyses a Pāṇinian would accept or reject. That test is the intellectually honest meeting point. Use it in class if a student asks about ChatGPT and Sanskrit. The question is whether the output survives sandhi, morphology, and kāraka — not whether the model once saw the word Aṣṭādhyāyī in its training text.</p>

      <h2>Three rooms</h2>
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>1. Explicit is not the same as easy</h3>
          <p>Sanskrit has a grammar that was written down as rules, with conflict-resolution and a technical vocabulary of terrifying economy. That is a gift to anyone building a symbolic analyser. It does not make the language “the best language for computers,” and it does not make segmentation free. English has weak morphology and hard word-sense ambiguity. Sanskrit has rich morphology and hard sandhi ambiguity. Different hard problems. A BCA student who can say that sentence has understood the card.</p>
        </article>
        <article class="deep-panel">
          <h3>2. Retire one viral sentence</h3>
          <p>A claim still circulates that a space agency declared Sanskrit the programming language of the future, or the only unambiguous language fit for artificial intelligence. It is not true. No such adoption happened. The claim is a forwarded glory, and forwarded glory is the enemy of this paper’s CO4 — pride that can stand in front of a specialist. When the sentence appears in a project report, mark it false and return to the three-layer task above, which is real.</p>
        </article>
        <article class="deep-panel">
          <h3>3. What a first practical hour can contain</h3>
          <p>Give the room ten joined forms and ask for the cut: <em>narendro ’pi</em>, <em>vidyālayam</em>, <em>ity api</em>, <em>vāgīśa</em>, <em>saṃskṛtam</em>, <em>gaṅgodakam</em>, <em>madhvari</em>, <em>rāmo gṛhaṃ gacchati</em> as a whole sentence rather than one sandhi. Then ask, of the last sentence, who is kartṛ and what is karma, and which endings showed it. That is computational linguistics at first-year scale. A screen is optional. The analysis is not.</p>
        </article>
      </div>

      <h2>The line a machine would have to undo</h2>
      ${D.render({
        type: "figures",
        title: "Heritage figures — joined writing, and the leaf that carried it",
        items: [
          {
            file: "Rigveda_MS2097.jpg",
            alt: "A manuscript of the Ṛgveda",
            caption: "A Ṛgveda manuscript.",
            note: "Sandhi is already in the ink. A reciter resolves it by training. A program has to resolve it by rule."
          },
          {
            file: "Devanagari_script.png",
            alt: "Devanagari letters",
            caption: "Devanāgarī letters.",
            note: "The script marks vowels carefully and still writes words in contact. The alphabet is not the segmentation."
          },
          {
            file: "Palm_leaf_manuscript.jpg",
            alt: "A palm-leaf manuscript",
            caption: "Palm leaf.",
            note: "The medium of a great deal of śāstra. Computational work begins by respecting the line that was actually written, not a spaced-out textbook sentence."
          },
          {
            file: "Panini_Astadhyayi,_Sanskrit_language,_Southern_Grantha_script.jpg",
            alt: "Aṣṭādhyāyī in Grantha",
            caption: "The rule-book in another script.",
            note: "An analyser for Sanskrit is not an analyser for one font. Grantha, Śāradā, Newar, Telugu, and Devanāgarī have all carried the same language."
          }
        ]
      })}
    `;
  }

  function zero() {
    return `
      ${cite({
        kind: "Āryabhaṭīya, Gaṇitapāda 2",
        sa: "एकं दश च शतं च सहस्रमयुतनियुते तथा प्रयुतम् ।<br/>कोट्यर्बुदं च वृन्दं स्थानात्स्थानं दशगुणं स्यात् ॥",
        iast: "ekaṃ daśa ca śataṃ ca sahasram ayuta-niyute tathā prayutam / koṭy-arbudaṃ ca vṛndaṃ sthānāt sthānaṃ daśaguṇaṃ syāt",
        en: "One, ten, hundred, thousand, ayuta and niyuta, and so prayuta, koṭi and arbuda, and vṛnda — from place to place, each is ten times the previous.",
        hi: "हर अगली जगह पिछले स्थान से दस गुना है। यही दशमलव स्थानमान है, एक वाक्य में।",
        attrib: "Āryabhaṭa, Āryabhaṭīya, Gaṇitapāda 2. The usual dating from the text’s own age-statement places the work in 499 CE.",
        note: "Ten names, ten places, one law: the next seat is ten times the seat before it. The glyph for an empty seat is the next problem, not this verse’s problem. Āryabhaṭa states the places. He writes many of his own astronomical numbers in a letter-code, not in the modern digits."
      })}
      ${sitePoem({
        lines: "खाली जगह भी जगह है — उस पर निशान न हो तो संख्या बिखर जाए।<br/>शून्य मात्रा भी है, और खाली आसन का नाम भी।",
        en: "An empty seat is still a seat. Leave it unmarked and the number falls apart. Śūnya is a quantity, and it is also the name of that empty seat. (Original — not a śloka.)"
      })}

      <h2>Two different gifts that share a word</h2>
      <p><em>Śūnya</em> in ordinary Sanskrit means empty, void, a blank. Indian arithmetic uses the word in two precise ways, and a lecture that mixes them will confuse every audience in the room.</p>
      <p>The first gift is <strong>place value</strong>. The same digit means different magnitudes according to its seat. A 5 in the śata seat is five hundred. A 5 in the eka seat is five. This is older than any one stone inscription, and Āryabhaṭa’s verse is the clean statement of the law: each place is ten times the place before it. The names of the places are a second card. The law is this one.</p>
      <p>The second gift is a <strong>mark for the empty seat</strong>, and a <strong>number that is itself nothing</strong>. Without a mark, 30502 and 352 cannot be told apart once the names of the places are dropped. With a mark, the empty seat stays empty and the other digits keep their rank. Separately, mathematicians needed rules for calculating with that nothing: add it, subtract it, multiply by it. Brahmagupta, in 628 CE, writes those rules down, and writes them for negative numbers in the same breath. That is not a glyph on a temple wall. That is arithmetic.</p>
      ${D.render({ type: "named", id: "place-value", title: "Six seats — 30502, and the empties that keep it honest" })}

      <h2>Brahmagupta’s laws</h2>
      <p>The <em>Brāhmasphuṭasiddhānta</em> (628 CE) treats positive quantities as <em>dhana</em>, negative as <em>ṛṇa</em>, and zero as <em>kha</em> or <em>śūnya</em>. Chapter 18 states how they combine. The addition law is the one to learn by heart. The multiplication law is as clean. Division by zero is the line to treat with scholarly caution rather than as a trophy.</p>
      ${cite({
        kind: "Brāhmasphuṭasiddhānta 18.30",
        sa: "धनयोर्धनमृणमृणयोर्धनर्णयोरन्तरं समैक्यं खम् ।<br/>ऋणमैक्यं च धनमृणधनशून्ययोः शून्ययोः शून्यम् ॥",
        iast: "dhanayor dhanam ṛṇam ṛṇayor dhana-ṛṇayor antaraṃ samaikyaṃ kham / ṛṇam aikyaṃ ca dhanam ṛṇa-dhana-śūnyayoḥ śūnyayoḥ śūnyam",
        en: "Positive plus positive is positive. Negative plus negative is negative. Positive plus negative is their difference; if they are equal, the sum is zero. Negative plus zero is negative, positive plus zero is positive, and zero plus zero is zero.",
        hi: "धन और ऋण के जोड़ के नियम, और शून्य के साथ जोड़ — दोनों एक ही पद्य में।",
        attrib: "Brahmagupta, Brāhmasphuṭasiddhānta 18.30. Some editions follow Colebrooke’s numbering and call this verse 31. The Sanskrit is the addition law.",
        note: "Teach this as arithmetic, not as mysticism. A negative number is a fortune on the other side of zero — a debt in the word ṛṇa — and the rules are sign rules a first-year algebra class still uses."
      })}
      <p>The product law (18.33) is the one students already half-know: negative times positive is negative, negative times negative is positive, positive times positive is positive, and anything times zero is zero — including zero times zero. Say it with the Sanskrit names once, then in digits. Both rooms should hear their own language.</p>
      <p>On division, Brahmagupta’s 18.35 speaks of a quantity divided by zero in the language of a zero-denominator. Later authors, notably Bhāskara II, press the idea of <em>khahara</em> further. Historians do not agree that the seventh-century verse is a modern theory of infinity. The honest classroom sentence is: addition and multiplication with zero and with negatives are stated cleanly in 628; division by zero remains a place where the tradition itself kept thinking. Do not close that place with a slogan.</p>

      <h2>A glyph has a biography</h2>
      <p>Place-value as a law, a dot or circle as a written zero, and zero as a number you can add, are three chapters of one history. They do not share a single birthday.</p>
      ${D.render({
        type: "compare",
        title: "Three witnesses — do not collapse them into one date",
        headers: ["Witness", "What it shows", "What we will not claim"],
        rows: [
          ["Āryabhaṭīya, Gaṇitapāda 2", "The tenfold place law, in a verse", "That Āryabhaṭa wrote the modern digit 0. His own number-code is alphabetic."],
          ["Brāhmasphuṭasiddhānta 18.30 and 18.33", "Laws for zero and for negative numbers", "That a calculation rule is the same thing as a temple inscription."],
          ["Bakhshali birch-bark", "A dot used in a place-value calculation book", "A single century. Radiocarbon dates of its leaves spread across a long range. Say ‘a manuscript with a dot-zero, whose leaves are not all of one age.’"],
          ["Chaturbhuj temple, Gwalior Fort, 876 CE", "A zero glyph inside a number, on dated stone", "That this is ‘the invention of zero.’ It is a public, dateable appearance of the glyph in India."]
        ]
      })}
      <p>One more guardrail, because the word travels. Buddhist <em>śūnyatā</em> — emptiness as a philosophical analysis — belongs to another śāstra. It shares a word-family with the arithmetical kha. It is not the number zero, and the number zero is not a doctrine of emptiness. A class that can keep those apart has done something more grown-up than repeating “India invented zero.”</p>
      <p>Before the place-value zero, India already had numerals. Aśokan Brahmi signs record numbers. They are a different technology: a sign for a value, not a digit whose value depends on an empty neighbour. Show the Brahmi figure so the zero glyph arrives as a change, not as the first time anyone in India wrote a number.</p>

      <h2>Three rooms</h2>
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>1. The empty seat is doing work</h3>
          <p>In 30502 the zero between 3 and 5 holds the hundreds in their place, and the zero between 5 and 2 holds the tens. Erase them and the digits slide together into 352, which is a different number and a different price. A leading zero, in the niyuta seat of the diagram, may be left unwritten without changing the value. An internal zero may not. That difference is the whole pedagogy of the glyph.</p>
        </article>
        <article class="deep-panel">
          <h3>2. Negative numbers arrive with zero</h3>
          <p>Brahmagupta does not treat zero as a lonely curiosity. In the same chapter, <em>ṛṇa</em> (debt, the negative) has addition and multiplication laws beside kha. A class that can compute 5 + (−5) = 0 and (−3) × (−4) = 12 has met the Indian statement of sign rules. The word ṛṇa keeps the arithmetic honest: a negative is not a mood. It is a quantity on the other side of the empty seat.</p>
        </article>
        <article class="deep-panel">
          <h3>3. Do not award a single birthday</h3>
          <p>The tenfold law, the calculation rules, the dot on birch bark, and the glyph on a temple wall are four facts. Popular lessons fuse them into “invented in year N.” This card refuses the fusion. Say what each witness shows, say what it does not show, and let the pride sit in the accuracy. A dated stone in 876 CE is already a magnificent public fact. It does not need to be the first sunrise.</p>
        </article>
      </div>

      <h2>Stone, bark, and a numeral that is not yet zero</h2>
      ${D.render({
        type: "figures",
        title: "Heritage figures — the empty seat, made visible",
        items: [
          {
            file: "Bakhshali_manuscript.jpg",
            alt: "A folio of the Bakhshali manuscript",
            caption: "Bakhshali manuscript.",
            note: "Birch bark, a calculation book, a dot in play. The leaves have been dated to more than one century. Cite the dot; do not cite a single year as if the laboratory had agreed."
          },
          {
            file: "876_CE_monolithic_rock_Chaturbhuj_Hindu_Temple_Gwalior_Fort,_Zero_Inscription_3.jpg",
            alt: "Zero inscription at the Chaturbhuj temple, Gwalior, 876 CE",
            caption: "Chaturbhuj, Gwalior, 876 CE.",
            note: "A temple record in stone. The zero sits inside a number a visitor can be shown. This is the dateable public witness."
          },
          {
            file: "Chaturbhuj Temple at Gwalior Fort 2011-08-14.jpg",
            alt: "Chaturbhuj temple at Gwalior Fort",
            caption: "The temple that holds the inscription.",
            note: "Zero’s famous Indian stone is not a laboratory. It is a shrine wall. Mathematics here is also a public sentence."
          },
          {
            file: "Ashoka Brahmi numerals 256.jpg",
            alt: "The number 256 written in Brahmi numerals of the Ashokan period",
            caption: "Brahmi numerals, a figure for 256.",
            note: "A number-sign from centuries before the Gwalior zero. Useful exactly because it is not place-value-with-a-blank. The story has a before."
          }
        ]
      })}
    `;
  }

  function large() {
    return `
      ${cite({
        kind: "Āryabhaṭīya, Gaṇitapāda 2 — the names",
        sa: "एकं दश च शतं च सहस्रमयुतनियुते तथा प्रयुतम् ।<br/>कोट्यर्बुदं च वृन्दं स्थानात्स्थानं दशगुणं स्यात् ॥",
        iast: "ekaṃ daśa ca śataṃ ca sahasram ayuta-niyute tathā prayutam / koṭy-arbudaṃ ca vṛndaṃ sthānāt sthānaṃ daśaguṇaṃ syāt",
        en: "Eka, daśa, śata, sahasra, ayuta, niyuta, prayuta, koṭi, arbuda, vṛnda — each place ten times the one before.",
        hi: "दस नाम, दस स्थान। आज का लाख और करोड़ इसी सीढ़ी के आस-पास बैठते हैं, पर हर नाम हर ग्रंथ में एक सा नहीं है।",
        attrib: "Āryabhaṭa, Āryabhaṭīya, Gaṇitapāda 2. Repeated here because this card is the lexicon the verse carries.",
        note: "The spine of the hour. Later lists are invited in as variants, not as corrections that shame this verse."
      })}
      ${sitePoem({
        lines: "नाम बड़ा हुआ तो संख्या बड़ी हुई — गिनती को शब्द मिला।<br/>शब्द बदले तो सीढ़ी मत तोड़ना; दोनों स्तंभ लिखो।",
        en: "When the name grew, the number had a word to live in. When the words differ, do not break the ladder — write both columns. (Original — not a śloka.)"
      })}

      <h2>Āryabhaṭa’s ten, in digits</h2>
      <p>A civilisation that builds altars, counts years of a cosmic cycle, and computes a planet’s longitude needs names past a thousand. Āryabhaṭa stops, in this verse, at the tenth place. That is already a billion by the English short scale. It is enough ladder for one board.</p>
      ${D.render({
        type: "compare",
        title: "The spine — Gaṇitapāda 2, and no further",
        headers: ["Place", "Name in the verse", "Value", "A modern ear"],
        rows: [
          ["10⁰", "eka", "1", "one"],
          ["10¹", "daśa", "10", "ten"],
          ["10²", "śata", "100", "hundred"],
          ["10³", "sahasra", "1,000", "thousand"],
          ["10⁴", "ayuta", "10,000", "ten thousand"],
          ["10⁵", "niyuta", "100,000", "Āryabhaṭa’s name here; later speech often says lakṣa / lakh"],
          ["10⁶", "prayuta", "1,000,000", "million — and already a name later lists reshuffle"],
          ["10⁷", "koṭi", "10,000,000", "the crore of living Indian speech"],
          ["10⁸", "arbuda", "100,000,000", "kept here; later lexicons wander"],
          ["10⁹", "vṛnda", "1,000,000,000", "Āryabhaṭa’s tenth name; other books say padma, abja, or something else"]
        ]
      })}

      <h2>The column people actually speak</h2>
      <p>A BCA student in this university already says <em>lakh</em> and <em>crore</em>. Those words are Indian. They are not identical with Āryabhaṭa’s niyuta and koṭi in every century of Sanskrit. Koṭi has been stable enough that “one crore” and “one koṭi” can shake hands at 10⁷. Lakh is 10⁵, where Āryabhaṭa’s verse says niyuta. Above crore, Hindi and Indian English go on to <em>arab</em> (10⁹) and <em>kharab</em> (10¹¹) in the commercial scale many families use. Sanskrit lexicons go on with another poetry: nikharva, śaṅkha, padma, jaladhi, parārdha. Buddhist narrative, in the Lalitavistara’s account of the Bodhisattva’s arithmetic, pushes a still longer litany of names. The point of that litany is scale as a cultural achievement. The point of this card is that you can put three columns on one board without forcing them to be one column.</p>
      ${D.render({
        type: "compare",
        title: "Three lexicons — same ladder, different names above a lakh",
        headers: ["Power of ten", "Āryabhaṭa’s verse", "Living Indian speech", "A later Sanskrit word you may meet"],
        rows: [
          ["10⁵", "niyuta", "lakh / lakṣa", "lakṣa is the usual later word"],
          ["10⁶", "prayuta", "(ten lakh)", "prayuta is not stable across authors"],
          ["10⁷", "koṭi", "crore", "koṭi"],
          ["10⁹", "vṛnda", "arab", "padma, abja, vṛnda — pick the author before you pick the word"],
          ["10¹¹", "—", "kharab", "nikharva in one common later ladder"],
          ["10¹⁷", "—", "—", "parārdha, the name Śaṅkaravarman uses for the diameter in the Kaṭapayādi card"]
        ]
      })}
      <p>Bhāskara II’s <em>Līlāvatī</em> teaches arithmetic to a named listener and, in doing so, lives inside this culture of named magnitudes. The manuscript in Newar script on this page is a witness of that book’s travels, not a licence to invent a single medieval table and call it universal. If two authorities disagree above koṭi, the examination answer is: “Āryabhaṭa’s ten are these; later names vary; koṭi is 10⁷; today’s crore matches it.” That sentence scores. A memorised poster that hides the variance does not, not in this room.</p>

      <h2>Three rooms</h2>
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>1. Naming is a mathematical act</h3>
          <p>A name for 10⁷ is not decoration. It lets a verse, a treasury, and a conversation refer to a magnitude without drawing seven zeroes. Scientific notation will later do a related job with exponents. The Indian solution was linguistic: a ladder of words, each a tenfold step, stable enough to compute and poetic enough to scan. When Bhūta-saṁkhyā and Kaṭapayādi encode a number inside a line of verse, they are using this culture of named quantity. They are not a rival to place value. They ride on it.</p>
        </article>
        <article class="deep-panel">
          <h3>2. Do not turn the ladder into a world record</h3>
          <p>Some popular lessons end at the largest name they can pronounce and stop, as if size were the achievement. The achievement is the rule <em>sthānāt sthānaṃ daśaguṇam</em> — place to place, tenfold — which generates as many names as a community needs. A finite verse of ten names plus a rule beats an infinite boast. Teach the rule.</p>
        </article>
        <article class="deep-panel">
          <h3>3. Read a number in both dialects</h3>
          <p>Take 30,502. In seats: 3 ayuta, 0 sahasra, 5 śata, 2 — the zeroes stay. In speech a student already owns: thirty thousand five hundred and two, or “three lakh…” no, 30,502 is thirty thousand, not three lakh. The exercise is the conversion, including the moment a student reaches for “lakh” too early. Place value is the cure.</p>
        </article>
      </div>

      <h2>Books in which large numbers had to live</h2>
      ${D.render({
        type: "figures",
        title: "Heritage figures — arithmetic and astronomy as copied books",
        items: [
          {
            file: "Lilavati of Bhaskaracharya II, Sanskrit language, Newar script.jpg",
            alt: "Līlāvatī manuscript in Newar script",
            caption: "Līlāvatī, in Newar script.",
            note: "Bhāskara II’s arithmetic, travelling in a Nepalese script. Named magnitudes are a book culture, not only a verse."
          },
          {
            file: "1836 CE purchase, Surya siddhanta, Whish manuscript collection, Kahle-Austin Foundation, Sanskrit, Grantha script.jpg",
            alt: "Sūrya-siddhānta palm leaf in Grantha script",
            caption: "Sūrya-siddhānta, Grantha palm leaf.",
            note: "A Whish manuscript bought in Thanjavur in 1836. Astronomical constants in such books are exactly why huge, exact names exist."
          },
          {
            file: "Palm_leaf_manuscript.jpg",
            alt: "Palm-leaf manuscript",
            caption: "Palm leaf as a medium.",
            note: "A number in a verse survives because a hand copied the verse. The lexicon and the manuscript are one history."
          },
          {
            file: "Bakhshali_manuscript.jpg",
            alt: "Bakhshali manuscript",
            caption: "A calculation book.",
            note: "Place value on bark. The names on this card are what the digits are standing in for."
          }
        ]
      })}
    `;
  }

  function bhuta() {
    return `
      ${cite({
        kind: "A Kerala verse in bhūta-saṁkhyā, quoted as Mādhava’s",
        sa: "विबुधनेत्रगजाहिहुताशनत्रिगुणवेदभवारणबाहवः",
        iast: "vibudha-netra-gaja-ahi-hutāśana-tri-guṇa-veda-bha-vāraṇa-bāhavaḥ",
        en: "Gods, eyes, elephants, serpents, fires, three, qualities, Vedas, nakṣatras, elephants, arms — read as digits, the circumference of a circle whose diameter is nine nikharva.",
        hi: "देवता, आँख, हाथी, सर्प — ये शब्द यहाँ संख्या हैं। छंद में अंक छिपा है, और दिशा इकाइयों से शुरू होती है।",
        attrib: "Quoted as Mādhava of Saṅgamagrāma’s in the Kriyākramakarī commentary on the Līlāvatī. The word-number reading yields 2,827,433,388,233 as the circumference of a circle of diameter 9 × 10¹¹.",
        note: "Scholars note that this integer is 2 more than the nearest integer to the true circumference. Teach the code, and teach the two-unit gap. A tradition can be admired and corrected in the same breath."
      })}
      ${sitePoem({
        lines: "आँख कहो तो दो, वेद कहो तो चार।<br/>कवि को अंक याद रहता है, क्योंकि अंक को रूप मिल गया।",
        en: "Say ‘eye’ and you have said two. Say ‘Veda’ and you have said four. The poet remembers the number because the number was given a body. (Original — not a śloka.)"
      })}

      <h2>Numbers that can be spoken as things</h2>
      <p><em>Bhūta-saṁkhyā</em> means “number by means of beings” — or, more fairly, number by means of things that already have a count in the culture. The earth is one. Eyes are two. The Vedas are four. The arrows of Kāma are five. The sages are seven. A verse that must carry a constant — a sine, a circumference, a count of years — can say <em>veda</em> instead of “4” and still scan as poetry. The word is doing two jobs: it means Veda, and it means four. Context, and the reader’s training, decide.</p>
      <p>This is not a secret cipher against outsiders. It is a mnemonic inside a community that already knows the counts. A pandit hears <em>śara</em> and thinks “arrow, therefore five” because Kāma’s five arrows are a stock image. A student who has not been told the stock image cannot decode the verse. The table below is that telling. It is a classroom lexicon, not the only lexicon. Authors add synonyms. A few words are dangerous because the culture counts their referent in more than one way: oceans are four in one scheme and seven in another, so <em>sāgara</em> is not safe until the author is known. <em>Go</em> can be pressed into service as one (the earth, or a cow in a count) or as nine (the openings). When two good editions disagree, believe the edition in your hand and say so.</p>

      <h2>The lexicon</h2>
      <p>From zero through twelve in full, then the higher counts astronomy actually leans on: eighteen, twenty-seven, thirty-three. Memorise the first column of meanings for zero through nine so that you can read a line. Use the rest as a dictionary, not as a threat.</p>
      ${bhutaTable()}
      <p>The direction is the part everyone forgets. In this habit — the same habit Kaṭapayādi uses — the <strong>first word is the units place</strong>, the next word is the tens, and so on upward. You read the compound from the left as growing place value, then you write the number in the ordinary way, with the units on the right.</p>
      <p>A small check before the long one. <em>Netra-veda</em>: eye = 2, and it stands first, so it is the units; Veda = 4, so it is the tens. The number is 42. <em>Bāṇa-candra</em>: arrow = 5 in the units, moon = 1 in the tens. The number is 15. If a student reverses these, every later verse will be backwards. Stop and repair it here.</p>

      <h2>Mādhava’s circumference, digit by digit</h2>
      <p>The compound in the epigraph is long because two of its words are themselves two-digit numbers, and a two-digit word contributes its own units digit first. <em>Vibudha</em> means 33, so it contributes a 3 in the lower place and a 3 in the next. <em>Bha</em> means 27, so it contributes 7 and then 2. Walk the whole chain from the units end:</p>
      ${D.render({
        type: "compare",
        title: "From the left of the compound — units first",
        headers: ["Word", "Count", "Digits it gives, lower place first"],
        rows: [
          ["vibudha", "33 gods", "3, then 3"],
          ["netra", "2 eyes", "2"],
          ["gaja", "8 elephants", "8"],
          ["ahi", "8 serpents", "8"],
          ["hutāśana", "3 fires", "3"],
          ["tri", "3", "3"],
          ["guṇa", "3 qualities", "3"],
          ["veda", "4 Vedas", "4"],
          ["bha", "27 nakṣatras", "7, then 2"],
          ["vāraṇa", "8 elephants", "8"],
          ["bāhu", "2 arms", "2"]
        ]
      })}
      <p>Read those digits from the bottom of the table upward — that is, put the last contribution on the left of the written number — and you obtain <strong>2,827,433,388,233</strong>. The verse calls this the circumference of a circle whose diameter is <em>nava-nikharva</em>, nine times 10¹¹. Divide, and you are holding a value of π. It is very good. It is two units high on the circumference. That sentence belongs in the notebook next to the number, not in a footnote the class never sees.</p>

      <h2>Three rooms</h2>
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>1. Why verse, and not a column of digits</h3>
          <p>A palm leaf cracks. A memorised stanza travels in a person. Bhūta-saṁkhyā is a way to make a numeral memorable by tying it to things the hearer already cares about — gods, senses, metres, rivers. It is cousin to the art of memory and to the kalā called dhāraṇa-mātṛkā. The digits ride inside a shared dictionary of things, and the first word keeps the units. That is the whole mechanism. Name it in Sanskrit first.</p>
        </article>
        <article class="deep-panel">
          <h3>2. It is not Kaṭapayādi, and not Āryabhaṭa’s letters</h3>
          <p>Three Indian ways of putting numbers into syllables get blurred in popular notes. Bhūta-saṁkhyā uses <em>words with a cultural count</em>. Kaṭapayādi uses <em>consonants as digits</em>, one grid for the whole alphabet. Āryabhaṭa’s own alphabetic numerals, in the astronomical chapters, are a third code, tied to his alphabet and his squares of powers. If a question says “encode,” ask which of the three. A correct grid from the wrong system is a wrong answer.</p>
        </article>
        <article class="deep-panel">
          <h3>3. Variance is part of literacy</h3>
          <p>Give the class <em>sāgara</em> and ask for the digit. The grown-up answer is: “Four oceans, or seven seas — I need the author.” That answer is more Pāṇinian in spirit than a guess. The table’s job is to make the usual reading easy and the unusual reading visible.</p>
        </article>
      </div>

      <h2>Where such verses were copied</h2>
      ${D.render({
        type: "figures",
        title: "Heritage figures — astronomy that had to remember its constants",
        items: [
          {
            file: "1836 CE purchase, Surya siddhanta, Whish manuscript collection, Kahle-Austin Foundation, Sanskrit, Grantha script.jpg",
            alt: "Sūrya-siddhānta in Grantha on palm leaf",
            caption: "Sūrya-siddhānta, Grantha.",
            note: "A siddhānta is full of numbers that had to survive as verse. Bhūta-saṁkhyā is one of the ways they survived."
          },
          {
            file: "Kerala school chain of teachers.jpg",
            alt: "Guru-paramparā of the Kerala school of astronomy and mathematics",
            caption: "Kerala school, a chain of teachers.",
            note: "Mādhava’s circle sits in this paramparā. The number in the epigraph is a Kerala inheritance, not an anonymous ‘ancient code.’"
          },
          {
            file: "Lilavati of Bhaskaracharya II, Sanskrit language, Newar script.jpg",
            alt: "Līlāvatī manuscript",
            caption: "Līlāvatī.",
            note: "The commentary that quotes Mādhava’s circumference-verse is a commentary on this book. Number-poetry and arithmetic textbooks grew together."
          },
          {
            file: "Palm_leaf_manuscript.jpg",
            alt: "Palm-leaf manuscript",
            caption: "The leaf.",
            note: "A code designed for memory is still, very often, a code we now meet on a leaf."
          }
        ]
      })}
    `;
  }

  function katapayadi() {
    return `
      ${cite({
        kind: "Śaṅkaravarman, Sadratnamālā",
        sa: "नञावचश्च शून्यानि सङ्ख्याः कटपयादयः ।<br/>मिश्रे तूपान्त्यहल् सङ्ख्या न च चिन्त्यो हलस्वरः ॥",
        iast: "nañāvacaś ca śūnyāni saṅkhyāḥ kaṭapayādayaḥ / miśre tūpāntyahal saṅkhyā na ca cintyo halasvaraḥ",
        en: "Ña, na, and the vowels are zeros. The numbers are the consonants beginning with ka, ṭa, pa, and ya. In a conjunct, the number is the consonant just before the vowel. A consonant with no vowel is ignored.",
        hi: "ञ और न और स्वर — शून्य। क से, ट से, प से, य से गिनती चलती है। संयुक्त में आखिरी हल ही अंक है।",
        attrib: "Śaṅkaravarman of Kerala, Sadratnamālā (1819). The clearest single verse of the rules. It is not the earliest use of the system.",
        note: "S. R. Sarma notes a shorter anonymous line — kādi nava, ṭādi nava, pādi pañca, yādy aṣṭau — which gives the grid and forgets to say how zero is written. Haridatta’s Grahacāranibandhana (683 CE) is the earliest firmly dated use. Do not call the 1819 verse Vedic."
      })}
      ${sitePoem({
        lines: "अक्षर अंक बने, शब्द संख्या बने।<br/>बाएँ की इकाई — दिशा भूलोगे तो सारा छंद उल्टा।",
        en: "A syllable becomes a digit and a word becomes a number. The left edge is the units place. Miss the direction and the whole verse is backwards. (Original — not a śloka.)"
      })}

      <h2>One grid for the consonant alphabet</h2>
      <p>Kaṭapayādi assigns digits to consonants so that a pronounceable Sanskrit or Malayalam word can carry a decimal number. The name says the method: start at <em>ka</em>, at <em>ṭa</em>, at <em>pa</em>, at <em>ya</em>. Each of those starts a run of digits beginning again at 1. The first two runs cover nine digits and a zero. The pa-run stops at 5, because <em>ma</em> is the last of that row. The ya-run gives 1 through 8 for ya, ra, la, va, śa, ṣa, sa, ha. In Malayalam reckoning a further liquid, <em>ḻa</em>, is sometimes seated as 9. The Sanskrit classroom grid below does not invent that seat.</p>
      ${D.render({ type: "named", id: "katapayadi-grid", title: "Kaṭapayādi — consonants to digits" })}
      <p>Vowels do not add a digit; they let the consonant be spoken. <em>Ka</em>, <em>kā</em>, <em>ki</em>, <em>kī</em> are all 1. <em>Ña</em> and <em>na</em> are 0, which the verse states outright, and a vowel standing with no counted consonant is not a digit either. In a conjunct cluster, only the consonant immediately before the vowel counts. <em>Dra</em> is not “da and then ra.” It is ra, because ra carries the vowel. A bare consonant with a virāma is ignored.</p>
      <p>Direction: <em>aṅkānāṃ vāmato gatiḥ</em> — the digits move leftward. In practice for this system, the <strong>left-most counted consonant is the units</strong>, the next counted consonant to its right is the tens, and so on. You read the word from the left as units, tens, hundreds, and only then do you write the number in the ordinary right-handed way.</p>

      <h2>Two worked readings</h2>
      <p><strong>Māyā.</strong> <em>Ma</em> is 5. <em>Ya</em> is 1. Left edge is units, so 5 is units and 1 is tens: the number is 15. In the melakarta catalogue of Carnatic music, as Venkaṭamakhin organised it in the seventeenth century, the rāga Māyāmāḷavagauḷa is the fifteenth. Its name begins <em>mā-yā</em>. The first two syllables are the index. This is Kaṭapayādi as a living art, centuries after Haridatta and well before anyone needed to call it computer science. A vīṇā in the figure strip is there for that reason.</p>
      <p><strong>Bhadrā</strong>, the opening of Śaṅkaravarman’s famous circumference-word. <em>Bha</em> is 4, and it is the units. <em>Drā</em> is a conjunct; the consonant that owns the vowel is <em>ra</em>, which is 2, and that 2 is the tens. So <em>bhadrā</em> contributes the ending <strong>…24</strong> of the big integer, not its beginning. The familiar 3.14159… of π appears at the other end of his long phrase, once the whole word is read units-first and then turned around into an ordinary numeral. He gives the circumference of a circle whose diameter is a parārdha, 10¹⁷. The verse that states the rule is the verse quoted above; the phrase that carries the digits is <em>bhadrāmbudhisiddhajanmagaṇitaśraddhā sma yad bhūpagīḥ</em>. A class needs the direction more than it needs all seventeen digits on the first day. A student who can show why <em>bhadrā</em> ends the number in 24 has understood the system.</p>

      <h2>Three rooms</h2>
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>1. Several consonants, one digit — that is the art</h3>
          <p>Because 1 can be ka or ṭa or pa or ya, a number can wear more than one word. The encoder hunts for a word that is both numerically true and worth saying. That is why astronomical constants become invocations, and why a rāga can be named so that its name is also its index. The surplus of codewords is not waste. It is how a number becomes memorable speech. Bhūta-saṁkhyā does this with dictionary words. Kaṭapayādi does it with the alphabet itself.</p>
        </article>
        <article class="deep-panel">
          <h3>2. Kerala is the home, not an afterthought</h3>
          <p>The system is attested across a wide map, but its great workshop is the Kerala school of astronomy and mathematics: Haridatta in the seventh century, and then the line that runs through Mādhava, Nīlakaṇṭha, and much later Śaṅkaravarman. A figure of that guru-paramparā belongs on this card. “Ancient Indian code” with no coast and no century is how a precise art becomes a poster.</p>
        </article>
        <article class="deep-panel">
          <h3>3. A small encode, done in public</h3>
          <p>Ask the room to write 15 in at least two ways: <em>māyā</em> (5 then 1, units first) and, for example, <em>pāyā</em> — pa is also 5, ya is 1. Then ask why <em>naya</em> is not 15: na is 0, ya is 1, so the number is 10, not 15. The mistakes that matter are direction, the zero-letters, and the conjunct rule. Mark those. Ignore calligraphy.</p>
        </article>
      </div>

      <h2>Coast, string, and the book of constants</h2>
      ${D.render({
        type: "figures",
        title: "Heritage figures — where Kaṭapayādi was a working script",
        items: [
          {
            file: "Kerala school chain of teachers.jpg",
            alt: "Chain of teachers of the Kerala school",
            caption: "Kerala’s chain of teachers.",
            note: "Haridatta to the later siddhānta writers. Kaṭapayādi is a regional intellectual glory with dates, not a vague national mood."
          },
          {
            file: "Veena.jpg",
            alt: "A vīṇā on display",
            caption: "A vīṇā.",
            note: "Melakarta names encode their own numbers in the first two syllables. The instrument is the cultural home of that catalogue."
          },
          {
            file: "1836 CE purchase, Surya siddhanta, Whish manuscript collection, Kahle-Austin Foundation, Sanskrit, Grantha script.jpg",
            alt: "Grantha palm-leaf siddhānta",
            caption: "A southern astronomical leaf.",
            note: "C. M. Whish, who bought such manuscripts in the nineteenth century, was one of the readers through whom Kerala mathematics reached European notice. The leaf is part of the transmission."
          },
          {
            file: "Lilavati of Bhaskaracharya II, Sanskrit language, Newar script.jpg",
            alt: "Līlāvatī in Newar script",
            caption: "Līlāvatī again.",
            note: "Commentaries on this book are one place the great numerical verses get unpacked. Keep it in view beside the Kerala chain."
          }
        ]
      })}
    `;
  }

  function pingala() {
    return `
      ${cite({
        kind: "Piṅgala, Chandaḥśāstra 8.20–21 and 8.34",
        sa: "द्विकौ ग्लौ । मिश्रौ च ।<br/>परे पूर्णम् ।",
        iast: "dvikau glau / miśrau ca / pare pūrṇam",
        en: "The two are g and l. And their mixtures. (And later:) the next is filled.",
        hi: "दो मात्राएँ — गुरु और लघु। उन्हीं के मेल से छंद बनते हैं। ‘परे पूर्णम्’ को हलायुध मेरु-प्रस्तार बनाकर समझाते हैं।",
        attrib: "Piṅgala, Chandaḥśāstra, end of chapter 8 in the common numbering (8.20, 8.21, 8.34). The sūtras are terse on purpose. Halāyudha’s Mṛtasañjīvanī (tenth century) is where the Meru-prastāra is drawn and explained.",
        note: "Do not translate four syllables into a line of modern code and call the translation the sūtra. The arithmetic of halving, doubling, and filling a triangle is what the commentarial tradition reads here. The verse-patterns are what Piṅgala was counting."
      })}
      ${sitePoem({
        lines: "गुरु भारी, लघु हल्का — छंद इन्हीं दो पर खड़ा है।<br/>दो से गिनती चले तो वह बाद की भाषा है; कदम पुराना है।",
        en: "Guru is heavy, laghu is light, and metre stands on those two. Counting by twos can be said in a later language. The step itself is old. (Original — not a śloka.)"
      })}

      <h2>Metre is a sequence of two weights</h2>
      <p>A syllable in Sanskrit verse is <em>laghu</em> (light, short) or <em>guru</em> (heavy, long). A laghu is a short vowel not followed by a conjunct. A guru is a long vowel, or a short vowel followed by a conjunct or by an anusvāra, or a vowel at the end of the line in many practical scansions. The details of scansion fill a prosody course. For this paper the structural fact is enough, and it is large: every metre is a pattern of two symbols, and the science of metre therefore becomes a science of patterns.</p>
      <p>Piṅgala’s <em>Chandaḥśāstra</em> is the classical sūtra of that science. Vedāṅga Chandas, the feet of the vedapuruṣa, is the family; Piṅgala is the author a mathematics class names. The early chapters name metres. The close of the work turns to operations on patterns: <em>prastāra</em> (spread them all out), <em>naṣṭa</em> (a pattern is lost — recover it from its index), <em>uddiṣṭa</em> (a pattern is pointed at — find its index), and the count of how many there are. The sūtras that do this are only a few words each. Halāyudha, commenting in the tenth century, shows the triangle he calls <em>Meru-prastāra</em>, because it rises like the mountain Meru. Bhāskara II later speaks of a <em>khaṇḍa-meru</em>. The triangle’s entries are combination counts. Row n, read across, tells you how many patterns of n syllables contain each possible number of gurus. Each interior number is the sum of the two numbers above it. The row sums to 2ⁿ.</p>
      ${D.render({ type: "named", id: "meru", title: "Meru-prastāra — rows 0 to 6, with the row-sum at the right" })}

      <h2>All eight patterns of three syllables</h2>
      <p>For one syllable there are 2 patterns. For two, 4. For three, 8. For n, 2ⁿ. That sentence is the whole of the “binary” claim that is actually safe. Two weights, freely combined, give a power of two. Below, every pattern of length three is written out so the sentence can be checked by eye. The right-hand column writes laghu as 0 and guru as 1, with the left syllable as the higher place. That column is a modern reading drawn on this page. Piṅgala’s text does not contain the digits 0 and 1. It contains laghu and guru, and procedures of halving and doubling which historians of mathematics recognise as the arithmetic shape of base 2.</p>
      ${D.render({ type: "named", id: "pingala-prastara", title: "Prastāra of three syllables" })}
      <p>A worked recovery, in the convention of that table (odd step writes the mark that our column calls 1, and we build from the units side). Take index 6. 6 is even, so the units weight is laghu; halve to 3. 3 is odd, so the next weight is guru; step down to 1. 1 is odd, so the next is guru. Reading the higher place on the left, the pattern is guru–guru–laghu, GGL, which is row 6 of the table. If a textbook swaps which symbol meets the odd case, its patterns will be the photographic negative of these and the count will still be eight. Say which convention you are using. The scandal is not the swap. The scandal is pretending the sūtra spells out a programming language.</p>

      <h2>Three rooms</h2>
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>1. What may be said, and what may not</h3>
          <p>May be said: Piṅgala studies sequences of two syllable-weights; the number of metres of length n is a power of two; the procedures naṣṭa and uddiṣṭa convert between a pattern and its index by halving and related steps; Halāyudha’s Meru is the triangle of combination numbers, centuries before Pascal’s triangle is drawn in Europe; Bhāskara knows that mountain. May not be said: Piṅgala invented the computer, or the bit, or Boolean algebra, or that a guru “is” a zero in a CPU. The two-symbol insight is real and it is metrical. The hardware sentence is a theft of the hour.</p>
        </article>
        <article class="deep-panel">
          <h3>2. Hear a guru</h3>
          <p>A long syllable takes time. A drummer’s heavy stroke and a light stroke are the bodily cousins of guru and laghu, not the same science, but the right analogy for a room that has never scanned a śloka. The anuṣṭubh line of the epics is taught as eight syllables a quarter, with a characteristic pattern of heavies. You do not need to scan a whole Rāmāyaṇa stanza today. You need to believe that “heavy” is something the ear can get wrong, which is why a science grew up around it.</p>
        </article>
        <article class="deep-panel">
          <h3>3. The 64</h3>
          <p>Row 6 of the Meru sums to 64. A quarter of six syllables has sixty-four possible patterns of light and heavy. The kalā catalogue also has sixty-four members. Write both facts. Then write that a coincidence of integers is not a hidden identity. Students enjoy the rhyme. Let them enjoy it, and do not examine them on a myth you built out of the enjoyment.</p>
        </article>
      </div>

      <h2>Heavy and light, in a temple’s sound</h2>
      ${D.render({
        type: "figures",
        title: "Heritage figures — time, stroke, and recitation",
        items: [
          {
            file: "Man playing Mridangam in Bhoganandeeshwara Temple.jpg",
            alt: "A mridangam player at the Bhoganandishwara temple",
            caption: "Mṛdaṅgam at a temple.",
            note: "Heavy stroke and light stroke as a public art. Metre’s guru and laghu are linguistic, not percussive — and the ear that learned one is ready to hear the other."
          },
          {
            file: "Wiki-mridangam.jpg",
            alt: "A mridangam",
            caption: "The drum itself.",
            note: "Two heads, more than two sounds. A reminder that ‘two weights’ is a metrical decision, not a claim that Indian music is binary."
          },
          {
            file: "Vedic Chanting by Brahmacharins (15885243999).jpg",
            alt: "Brahmacharins in a recitation setting",
            caption: "Recitation.",
            note: "Chandas is a Vedāṅga because the hymn has a gait. Piṅgala’s combinatorics grows from that gait."
          },
          {
            file: "Nadaswaram (also nagaswaram or nagasuram).jpg",
            alt: "Nadaswaram",
            caption: "Nāgasvaram.",
            note: "Processional temple music. Sound as measured time, beside the quieter science of the syllable."
          }
        ]
      })}
    `;
  }

  function pramana() {
    return `
      ${cite({
        kind: "Nyāyasūtra 1.1.3",
        sa: "प्रत्यक्षानुमानोपमानशब्दाः प्रमाणानि",
        iast: "pratyakṣānumānopamānaśabdāḥ pramāṇāni",
        en: "Perception, inference, comparison, and word are the means of knowing.",
        hi: "न्याय चार प्रमाण मानता है — प्रत्यक्ष, अनुमान, उपमान, और शब्द। दूसरे दर्शन गिनती अलग रखते हैं।",
        attrib: "Gautama, Nyāyasūtra 1.1.3.",
        note: "The shortest honest opening. The count ‘four’ is Nyāya’s count. The card’s comparison table is there so that ‘four’ does not silently become ‘the Indian count.’"
      })}
      ${sitePoem({
        lines: "संदेह द्वार पर खड़ा है। प्रमाण भीतर ले जाता है।<br/>जो जाना, वह प्रमेय है — जानना खुद सीढ़ी नहीं, फल की राह है।",
        en: "Doubt stands at the door. A means of knowing takes you in. What is known is the prameya. Knowing itself is not the whole ladder; the sūtra is walking toward a fruit. (Original — not a śloka.)"
      })}

      <h2>The syllabus words are Nyāya’s words</h2>
      <p>Unit I seated Nyāya among the āstika darśanas and said: this school cares how knowing happens. Unit II opens that care. Three technical words do almost all the work, and they are not synonyms.</p>
      <p><em>Pramāṇa</em> is a means of valid knowing — the instrument, not the fact. <em>Prameya</em> is what can be known — the object. <em>Saṁśaya</em> is doubt, a wavering that has not yet settled into knowledge and has not yet collapsed into mere confusion. Around them, in the very first sūtra, Gautama lists sixteen topics whose true knowledge, he says, leads to <em>niḥśreyasa</em>, the highest good. The “knowledge pyramid” of a modern IKS classroom is not a diagram in that sūtra. The diagram on this page is ours: a teaching stack, labelled as a teaching stack, built so that a fifty-minute hour has a shape. Saṁśaya is drawn at the door rather than as a floor, because doubt is not a grade of knowledge. It is the reason a person reaches for a pramāṇa at all.</p>
      ${D.render({ type: "named", id: "knowledge-pyramid", title: "A classroom pyramid — pramāṇa, pramā, prameya, niḥśreyasa" })}

      <h2>The sixteen, because the first sūtra lists them</h2>
      <p>A first year needs the first three by heart, and should have seen the other thirteen so that “Nyāya” does not shrink to a slogan about logic. The sixteen are the table of contents of the sūtra, not sixteen kinds of mysticism.</p>
      ${D.render({
        type: "compare",
        title: "Nyāyasūtra 1.1.1 — sixteen padārthas",
        headers: ["#", "Name", "A working gloss"],
        rows: [
          ["1", "Pramāṇa", "Means of valid knowing"],
          ["2", "Prameya", "Object of valid knowing"],
          ["3", "Saṁśaya", "Doubt — wavering between alternatives"],
          ["4", "Prayojana", "Purpose — why one bothers to know"],
          ["5", "Dṛṣṭānta", "Example on which both sides agree"],
          ["6", "Siddhānta", "An established tenet"],
          ["7", "Avayava", "Members of a full inference"],
          ["8", "Tarka", "Hypothetical reasoning that tests a supposition"],
          ["9", "Nirṇaya", "A settled conclusion"],
          ["10", "Vāda", "Discussion aimed at truth"],
          ["11", "Jalpa", "Disputation aimed at victory"],
          ["12", "Vitaṇḍā", "Wrangling that only attacks, with no counter-thesis"],
          ["13", "Hetvābhāsa", "A reason that looks like a reason and is not"],
          ["14", "Chala", "Quibbling on a word"],
          ["15", "Jāti", "A false rejoinder, a sophistical analogy"],
          ["16", "Nigrahasthāna", "A ground of defeat in debate"]
        ]
      })}
      <p>Notice the honesty of the last seven. Nyāya is not a celebration of argument. It is a map that includes bad argument — fallacies, quibbles, cheap rejoinders, and the moves by which a debate is lost. A student who only memorises “perception and inference” has missed the school’s temperament.</p>

      <h2>Four means, and other schools’ counts</h2>
      ${cite({
        kind: "Nyāyasūtra 1.1.4, in brief",
        sa: "इन्द्रियार्थसन्निकर्षोत्पन्नं ज्ञानमव्यपदेश्यमव्यभिचारि व्यवसायात्मकं प्रत्यक्षम्",
        iast: "indriyārthasannikarṣotpannaṃ jñānam avyapadeśyam avyabhicāri vyavasāyātmakaṃ pratyakṣam",
        en: "Perception is knowledge born of the contact of sense and object, not expressible in words (as its cause), unwandering, and determinate.",
        hi: "प्रत्यक्ष इंद्रिय और विषय के सन्निकर्ष से जन्मता है — भटका हुआ नहीं, निश्चयात्मक।",
        attrib: "Gautama, Nyāyasūtra 1.1.4.",
        note: "The definition is dense because later writers fight over every word. For this paper: perception is a knowing that starts in sense-contact and settles. It is not a mood, and it is not whatever someone feels."
      })}
      ${D.render({
        type: "compare",
        title: "Nyāya’s four — one line each, enough to use",
        headers: ["Pramāṇa", "Sūtra neighbourhood", "The idea a class can say"],
        rows: [
          ["Pratyakṣa", "1.1.4", "Sense and object meet, and a determinate knowing arises that does not wander."],
          ["Anumāna", "1.1.5", "Inference. Three named kinds: pūrvavat (cause to effect), śeṣavat (effect to cause), sāmānyato-dṛṣṭa (a general sign, as when motion is inferred for the sun)."],
          ["Upamāna", "1.1.6", "Comparison. The stock picture: told that a gavaya is like a cow, one recognises the animal in the forest. Knowing-by-similarity."],
          ["Śabda", "1.1.7 āptopadeśaḥ śabdaḥ", "Word, meaning the speech of a trustworthy source. Testimony is a pramāṇa, not a failure to think."]
        ]
      })}
      <p>Other schools do not sign Nyāya’s list. The disagreement is the tradition’s own intellectual history, and it belongs on the board.</p>
      ${D.render({
        type: "compare",
        title: "How many pramāṇas? — a real disagreement, not a footnote",
        headers: ["School", "What it typically counts", "The pressure this puts on Nyāya"],
        rows: [
          ["Cārvāka", "Pratyakṣa alone, in the usual textbook portrait", "If only perception counts, inference and scripture have to earn their seat. Unit I already refused to mock this."],
          ["Bauddha (many manuals)", "Pratyakṣa and anumāna", "Comparison and word are analysed as not independent."],
          ["Sāṁkhya", "Pratyakṣa, anumāna, śabda", "Three. Upamāna is not given a separate chair."],
          ["Nyāya and Vaiśeṣika", "The four of sūtra 1.1.3", "This paper’s default, because the sūtra is the default."],
          ["Prabhākara Mīmāṁsā", "Five: the four, plus arthāpatti (presumption)", "‘He is alive and not in the house, so he is outside’ — a presumption from otherwise inconsistent facts."],
          ["Kumārila Mīmāṁsā, and Advaita in many accounts", "Six: those five, plus anupalabdhi (non-apprehension)", "Knowing an absence because a present thing is not apprehended. Whether ‘absence’ needs its own pramāṇa is the fight."]
        ]
      })}
      <p>Jaina epistemology is often taught through five kinds of knowledge — mati, śruta, avadhi, manaḥparyāya, kevala — which are not the same grid as the pramāṇa lists above. Mention the difference rather than forcing kevala-jñāna into the sixth Mīmāṁsā slot. Anekānta, from Unit I, is the moral: more than one count can be intelligent.</p>

      <h2>Twelve prameyas</h2>
      ${cite({
        kind: "Nyāyasūtra 1.1.9",
        sa: "आत्मशरीरेन्द्रियार्थबुद्धिमनःप्रवृत्तिदोषप्रेत्यभावफलदुःखापवर्गास्तु प्रमेयम्",
        iast: "ātma-śarīra-indriya-artha-buddhi-manaḥ-pravṛtti-doṣa-pretyabhāva-phala-duḥkha-apavargās tu prameyam",
        en: "The knowables are: self, body, senses, objects, cognition, mind, activity, fault, rebirth, fruit, suffering, and release.",
        hi: "प्रमेय की सूची आत्मा से अपवर्ग तक जाती है। जानने का विषय केवल ‘तथ्य’ नहीं — दुःख और उसकी निवृत्ति भी विषय हैं।",
        attrib: "Gautama, Nyāyasūtra 1.1.9.",
        note: "Vātsyāyana’s bhāṣya says openly that other things are also knowable. These twelve are listed because knowing them truly is tied to release. The list is purposive, not a claim that the world contains only twelve items."
      })}
      ${D.render({
        type: "compare",
        title: "The twelve — so ‘prameya’ is not a vague ‘object’",
        headers: ["Prameya", "Plain sense on this paper"],
        rows: [
          ["Ātman", "The self, the one who knows and undergoes"],
          ["Śarīra", "The body, seat of that undergoing"],
          ["Indriya", "The senses"],
          ["Artha", "The objects of the senses — smell, taste, colour, touch, sound"],
          ["Buddhi", "Cognition"],
          ["Manas", "Mind, the inner instrument without which the senses do not cohere"],
          ["Pravṛtti", "Activity of body, speech, and mind"],
          ["Doṣa", "Fault — attachment, aversion, confusion, as what drives activity"],
          ["Pretyabhāva", "Rebirth, the continuing from one embodied life to another"],
          ["Phala", "Fruit, the experience that activity and fault lead to"],
          ["Duḥkha", "Suffering"],
          ["Apavarga", "Release — the cutting of that suffering"]
        ]
      })}

      <h2>Saṁśaya</h2>
      ${cite({
        kind: "Nyāyasūtra 1.1.23",
        sa: "समानानेकधर्मोपपत्तेर्विप्रतिपत्तेरुपलब्ध्यनुपलब्ध्यव्यवस्थातश्च विशेषापेक्षो विमर्शः संशयः",
        iast: "samānānekadharmopapatter vipratipatter upalabdhy-anupalabdhy-avyavasthātaś ca viśeṣāpekṣo vimarśaḥ saṃśayaḥ",
        en: "Doubt is a wavering reflection that looks for the specific character, arising from noticing a common property, or from conflicting views, together with the unsettledness of perception and non-perception.",
        hi: "संशय वह डगमगाहट है जो विशेष की तलाश करती है — समान धर्म से, या परस्पर विरुद्ध मतों से।",
        attrib: "Gautama, Nyāyasūtra 1.1.23.",
        note: "The classical picture: a tall shape in the distance — a post or a person? Shared properties (height) are seen; the distinguishing property is not yet grasped; so the mind wavers. That waver is saṁśaya. It is the beginning of inquiry, not a character flaw."
      })}
      <p>Put the three syllabus words in one scene. You see a shape and cannot tell post from person: <em>saṁśaya</em>. You walk closer, or you infer from a movement, or someone trustworthy tells you: a <em>pramāṇa</em> operates. What becomes known — the post, or the person — is the <em>prameya</em> in that small case. The twelve-item list is the school’s large case: the knowables that matter because suffering and its end are among them. Gautama’s opening sentence does not stop at “a fact was checked.” It says that knowing these things truly is for the highest good.</p>

      <h2>Three rooms</h2>
      <div class="deep-panels">
        <article class="deep-panel">
          <h3>1. Testimony is a means, not a surrender</h3>
          <p>A modern habit treats “I was told” as the opposite of knowledge. Nyāya treats trustworthy speech as a pramāṇa, and then spends sūtras on when speech fails. The Veda, for this school, is an instance of śabda, not a replacement for the category. A student can accept the category — we know many things because a competent person told us — without turning the class into a contest about scripture. Science classrooms run on testimony constantly: the periodic table is not re-derived from ore by every first year. The grown-up question, which Nyāya forces, is what makes a speaker āpta, trustworthy, and how you detect the failures named later in the sixteen (fallacy, quibble, sham rejoinder).</p>
        </article>
        <article class="deep-panel">
          <h3>2. The pyramid is a tool we built</h3>
          <p>Say this aloud once, so a pandit in the back of the hall can relax. There is no śloka whose title is “knowledge pyramid.” Management schools draw data, information, knowledge, wisdom. Some IKS lectures borrow that drawing. This page refuses the borrow as the spine. The spine is sūtra 1.1.1’s movement: know the sixteen truly, and that knowing is for niḥśreyasa. The figure stacks pramāṇa, pramā, prameya, and the fruit, and leaves doubt at the door. If a question paper says “explain the knowledge pyramid,” answer with this stack, name it as a classroom figure, and anchor every layer in the sūtra. That is sufficient and it is honest.</p>
        </article>
        <article class="deep-panel">
          <h3>3. Debate has failure modes</h3>
          <p>Hetvābhāsa, chala, jāti, nigrahasthāna — four of the sixteen are about how reasoning goes bad or how a debater is defeated. Teach one example. The stock fallacy-family includes a reason that is too wide, a reason that contradicts the thesis, and a reason that is itself unproved. You do not need all five names on this pass. You need the idea that Nyāya catalogues error. A tradition that catalogues error is harder to recruit into triumphalism, and that is a kindness to CO4.</p>
        </article>
      </div>

      <h2>Places where argument was a way of life</h2>
      ${D.render({
        type: "figures",
        title: "Heritage figures — testimony, the self’s questions, a university",
        items: [
          {
            file: "Nalanda.jpg",
            alt: "The main stupa at the Nalanda ruins",
            caption: "Nālandā, the great stupa.",
            note: "A mahāvihāra where pramāṇa was not a chapter but a life. Bauddha epistemology and Nyāya grew up arguing with each other. The ruins are a witness of that argument’s seriousness."
          },
          {
            file: "Nalanda_Mahavihara.jpg",
            alt: "Ruins of Nalanda Mahavihara",
            caption: "The vihāra plan.",
            note: "Cells, courts, a campus. Knowledge here had architecture. Unit IV will return to building. Today the point is institutional inquiry."
          },
          {
            file: "Rigveda_MS2097.jpg",
            alt: "Rigveda manuscript",
            caption: "Śabda, as a manuscript of śruti.",
            note: "Word as a means of knowing. The page does not perceive the hymn for you. Testimony still needs a hearer who can test the speaker and the reciter."
          },
          {
            file: "Raja Ravi Varma, Goddess Saraswati.jpg",
            alt: "Sarasvatī",
            caption: "Sarasvatī.",
            note: "Learning personified. A fitting last figure for a unit that began with the sounds of her speech and ends with the question of how speech counts as knowledge."
          }
        ]
      })}
    `;
  }

  g.IKSGallery2 = {
    phonetics,
    panini,
    nlp,
    zero,
    large,
    bhuta,
    katapayadi,
    pingala,
    pramana,
    bhutaTable,
    BHUTA
  };
})(window);

