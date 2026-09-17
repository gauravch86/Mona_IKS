# Mona_IKS · BCA Sem-1 Lecture Bench

Interactive, original lecture site for **CCS University** BCA **Semester 1** paper **BCA-1003 T** — *Indian Knowledge System* (GEC-I *Indian Culture and Civilization*). Built for **Prof. Mona** and first-year BCA students. 2 credits · 30 theory hours · 100 marks (**25 internal + 75 external**). Aligned to **AICTE Model Curriculum 2024 / NEP 2020**.

Tone: lecture-ready, CS/BCA analogies, pride in IKS without chauvinism. This is a teaching bench, not a photocopy of a guidebook.

**Live URL:** [https://gauravch86.github.io/Mona_IKS/](https://gauravch86.github.io/Mona_IKS/) (enable Pages from `main` `/` if that still 404s — see below). Open `index.html` via a local static server if you prefer.

## How to use for lectures

1. Open a **unit tab**, then a sidebar topic. **Unit I is complete** (13 cards). Units II–V show real syllabus titles with honest **Coming next** placeholders so the 30-hour map is visible on day one.
2. Project **Concept + board diagram**. Read the BCA analogy once; hide the site and redraw the diagram on the board.
3. Run the **10-minute classroom activity** on the card. Park student answers.
4. Close with a 2-mark oral. Point to the matching chapter in the **physical Thakur / Mahadevan book** — this site does not copy those books (`readAs` is a pointer only).
5. After class, tick **Seal this topic** only when you can teach it without scrolling. Progress is stored in this browser under `localStorage` key **`mona-iks-progress-v1`**. Theme is `mona-iks-theme`.
6. **Teach notes** tab: 6-lecture Unit I plan, board habits, internals cycles.
7. Keyboard: `/` search, `Esc` close search. **Topics** FAB opens the sidebar on small screens.

## Coverage

| Unit | Official home | On this site |
|------|----------------|--------------|
| **I** | Introduction to IKS — Caturdaśa, 64 Kalās, Śilpa, Four Vedas, Vedāṅga, Āstika/Nāstika, Purāṇa, Itihāsa, Nīti, Subhāṣita | **13 lecture-ready cards** (checkmarks on Kalās, Śilpa, Vedas, Vedāṅga get extra board time) |
| **II** | Linguistics / Pāṇini / NLP; zero & place value; Bhūta-saṁkhyā, Katapayādi, Piṅgala; Prameya / Pramāṇa | Sidebar titles + Coming next |
| **III** | Mathematicians, Śulba, π, trig, algebra, Pañcāṅga, Yantras / Jantar Mantar | Sidebar titles + Coming next |
| **IV** | Occupational skills, metallurgy, dyes, town planning, temple architecture, Vāstu | Sidebar titles + Coming next |
| **V** | Āyurveda (sleep/food/water), Yoga, Triguṇa, BMIC, Rāmāyaṇa admin, Arthaśāstra | Sidebar titles + Coming next |

Also: **Overview** (COs, unit cards, emphasis chart), **Teach notes**, **Resources** (shelf), **Logbook** (click a title to jump to the card).

## Primary shelf

Buy and use these. The website’s sentences are original.

1. **Thakur Publication** — Dr. Mala Shharma & Pankaj Bisht, *Indian Knowledge System* (CCS BCA 1st Sem / AICTE 2024 cover).
2. **B. Mahadevan, Vinayak Rajat Bhat, Nagendra Pavana R.N.** — *Introduction to Indian Knowledge System: Concepts and Applications* (PHI / IIMB).
3. **Kapur, K. & Singh, A.K. (Eds.)** — *Indian Knowledge Systems*, Vol. 1 (IIAS / D.K. Printworld, 2005) — Mona’s deeper prep.

Secondary names live on the **Resources** tab (Nair, S.K. Das, B.L. Gupta, public AICTE IKS notes).

## Copyright

All teaching prose here is **original**. It cites:

- The public CCS / AICTE syllabus outline
- Traditional classifications and names (Vedas, Vedāṅgas, Kalās, darśanas, Purāṇa lakṣaṇas)

It does **not** copy Thakur Publication, Mahadevan PHI, Kapur & Singh chapter text, IntactOne, Scribd notes, or Unique-style Q-bank language. Open the physical book for chapter depth.

## Run locally

No build step. Static HTML/CSS/JS (Chart.js from CDN).

```bash
git clone https://github.com/gauravch86/Mona_IKS.git
cd Mona_IKS
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## GitHub Pages

**URL:** [https://gauravch86.github.io/Mona_IKS/](https://gauravch86.github.io/Mona_IKS/)

Site files (`index.html` at repo root, plus empty `.nojekyll`) are on **`main`**. Publish mode: **branch `main`, folder `/ (root)`**.

If that URL still shows GitHub’s “Site not found”:

1. Open **[Settings → Pages](https://github.com/gauravch86/Mona_IKS/settings/pages)**
2. **Build and deployment → Source:** Deploy from a branch
3. **Branch:** `main` · **Folder:** `/ (root)`
4. **Save** — wait about a minute, then reload the URL

## Repo layout

```
index.html
.nojekyll
css/styles.css
js/app.js
js/diagrams.js
js/timeline.js
js/content/meta.js          # stub helper, resources page
js/content/unit1.js         # 13 lecture-ready cards
js/content/unit2.js … unit5.js
js/content/timelines.js
js/content/logbook.js
js/content/teach.js         # 6-lecture Unit I plan
assets/favicon.svg
```

Namespace: `window.IKS`. Hash routes: `#/<unitOrPage>/<topicId>` (e.g. `#/unit1/u1-vedas`, `#/teach/plan`).
