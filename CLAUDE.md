# Portfolio v3 — Badreddine Etouabti

Rebuild of the Framer site https://interactive-mission-083337.framer.app as plain code
the owner controls. Match that page's look and behavior. Open the live link for reference.

## Stack
- Plain HTML + CSS + vanilla JS, no build step: `index.html`, `styles.css`, `main.js`.
- Animations: GSAP 3 + ScrollTrigger from cdnjs (pinned version, e.g. 3.12.5).
- Fonts (Google Fonts / Fontshare): General Sans (body + headings, 400/500/600),
  Instrument Serif italic (one accent word per heading), Geist Mono (labels).
  General Sans is on Fontshare: https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600
- Host later on GitHub Pages or Vercel.

## Design tokens (light / dark)
| Token       | Light     | Dark      | Use                              |
|-------------|-----------|-----------|----------------------------------|
| bg          | #F2F1EC   | #0B0D12   | page background                  |
| surface     | #FFFFFF   | #14171F   | cards, alternating sections      |
| ink         | #0F1115   | #EEF0F4   | headings, main text              |
| muted       | #5E636E   | #9AA1AE   | body copy                        |
| line        | #E1DFD8   | #262A35   | borders, dividers                |
| accent      | #2E5BFF   | #6A8BFF   | buttons, italic words, numbers   |
| accent-soft | #E6ECFF   | #1A2342   | icon tiles, hover fills          |
| deep        | #0F1115   | #05070B   | contact section, chat box (stays dark) |
| nav glass   | rgba(242,241,236,.78) | rgba(11,13,18,.72) | sticky nav + 14px backdrop blur |
Follow `prefers-color-scheme`, plus a light/dark toggle button in the nav that wins over it.

Type scale: display 76px (60 tablet, 44 phone), lh 1, tracking -0.04em, weight 500.
h2 52px (44/34), tracking -0.035em. h3 24px. lead 19px lh 1.55. body 16px lh 1.6.
label: Geist Mono 12px, uppercase, tracking 0.08em.
Radii: cards 22–28px, buttons/pills 100px. Max content width 1200px, side padding 40/32/20px.
Section padding 120px vertical (96 tablet, 72 phone).

## Page structure (single page, anchors #work #about #experience #contact)
1. **Sticky nav** — blue dot (pulsing) + "Badreddine Etouabti"; links Work, About,
   Experience, Contact (muted → ink on hover); "Email me ↗" pill (accent) → mailto.
   Links hide on phone.
2. **Intro** — two columns (stack on tablet/phone).
   Left: status pill (pulsing green dot) "OPEN TO INTERNSHIPS · AI, DATA & DEV IN HEALTH";
   H1 on three lines: "I build AI / that *healthcare* / can trust." (italic word accent);
   lead: "I'm Badreddine, an engineering student in Digital & AI for Health. I turn medical
   documents into private, source-backed AI assistants, and bring a lab scientist's rigor
   to every line of code."; buttons "See my work ↓" (accent → #work) and "Get in touch"
   (outlined → #contact); meta row with top border: CASABLANCA, MOROCCO · SUPTECH SANTÉ ·
   YEAR 2 · ARABIC · FRENCH · ENGLISH.
   Right: 3D capsule, 600px tall (460 tablet, 340 phone), radius 28px, iframe of
   https://my.spline.design/portfolioherocapsule-sdojBWhk1ChK6NFJqZWGPM1n/
   (or `<spline-viewer>`). Its own background is #F2F1EC, so on dark mode it reads as a card.
3. **Keyword ticker** — surface band with top/bottom borders, endless horizontal scroll,
   28px words separated by accent dots: Retrieval-augmented generation, Local LLMs,
   Medical data, Python, Flask, Django, Embeddings, Quality control, Machine learning.
   Slows on hover.
4. **Work (#work)** — label "01 · Selected work", h2 "Things I've *built*", side note
   "From a private medical AI assistant to the lab work that taught me why accuracy matters."
   - Featured card (surface, 44px padding, soft shadow), two columns:
     left: "FEATURED · ALEXSYS SOLUTIONS · 2026", title "PharmaMind", lead "A smart drug
     catalogue with an AI assistant that answers questions only from official medication
     leaflets, cites its sources, and runs entirely on a local model so patient data never
     leaves the machine."; 3 highlights with accent dot:
       • Anti-hallucination guardrails — Answers come only from the leaflets, otherwise
         "information not found", with the source excerpt shown.
       • PDF ingestion pipeline — pypdf extraction, split by leaflet section (indications,
         dosage, contraindications), then vector-indexed.
       • Interaction checker — Flask app in 3 layers with SQLAlchemy + SQLite, multi-role
         login and alerts ranked by severity.
     tags: RAG, Ollama, Qwen2.5-7B, bge-m3, NumPy, Flask, pypdf (mono 11px pills).
     right (bg panel): "HOW IT ANSWERS A QUESTION" + 6 step rows (number, name, note):
       01 Question — Asked in plain words · 02 Embedding — Turned into a vector with bge-m3 ·
       03 Search — Cosine similarity over leaflet passages · 04 Top 4 — The closest passages
       are kept · 05 Qwen2.5-7B — Runs locally through Ollama (this row filled accent, white
       text) · 06 Answer — Written from the passages, with sources.
       Then a dark (deep) chat box in Geist Mono: "› Can I take ibuprofen with an
       anticoagulant?" / "Caution. The leaflet lists anticoagulants under interactions:
       combined with NSAIDs like ibuprofen, the risk of bleeding rises. Ask a doctor or
       pharmacist first." / "Source · leaflet section "Interactions" — example of the answer
       format" (#8FA7FF). Notes hide on phone.
   - 3 project cards (grid, min 300px): icon tile (accent-soft) + label + title + text + tags.
       Database icon · ALEXSYS SOLUTIONS · 2026 · Drug interaction checker · "Part of
       PharmaMind: a Flask catalogue on public BDPM (France) and data.gov.ma data. The model
       sits behind an interface, so it runs without a GPU and swaps through a .env setting."
       · Flask, SQLAlchemy, SQLite, Auth
       School icon · SUPTECH SANTÉ · 2026 · Boarding school platform · "Full-stack Django app
       for students, rooms, staff and incident reports, with 5 roles, granular permissions, a
       dashboard and email notifications." · Django, Python, Roles, Email
       Droplet icon · CADI AYYAD UNIVERSITY · 2023 · Well water quality, Oualidia ·
       "Final-year study: physico-chemical analysis of well water, compared with Morocco's
       national drinking-water standards." · Lab analysis, Water chemistry, Public health
     Hover: lift 6px + blue glow shadow.
5. **About (#about, surface bg)** — "02 · About", h2 "From the lab bench to the
   *language model.*"; signature row: round 64px photo (assets/photo.jpg) + name +
   "DIGITAL & AI FOR HEALTH". Right column: "I'm in my second year of an engineering degree
   in Digital Engineering & AI for Health at Suptech Santé, Mohammedia. I work where AI,
   software and medicine meet." (ink) and "Before writing code I spent years in labs:
   industrial quality control at OCP and biological analysis at Hôpital Mohammed V. That
   taught me something AI often forgets. In health, a wrong answer is a risk, not a bug. So
   I build systems that cite their sources and say "information not found" when they
   should." Four stat tiles (bg fill, 56px accent numbers): 7B — LLM parameters, run fully
   on a local machine · 4 — Lab, hospital and industry roles · 5 — User roles in my Django
   platform · 3 — Working languages: Arabic, French, English. Numbers count up on scroll.
6. **Experience (#experience)** — "03 · Experience & education", h2 "A path built on
   *precision.*". Rows separated by lines: date (mono) + kind pill (WORK / EDUCATION /
   INTERNSHIP; education pill accent-soft) | role (h3) + org (accent) | description.
   Hover: row shifts 8px right, surface fill.
     2026 · Work · AI Developer Intern · Alexsys Solutions · Casablanca · Built PharmaMind, a
       RAG assistant over drug leaflets running on a local LLM, and the Flask catalogue around it.
     2025 — now · Education · Engineering degree, Digital & AI for Health · Suptech Santé ·
       Mohammedia · Machine learning, AI techniques, data mining, medical imaging, web
       development and advanced databases.
     Dec 2024 — Aug 2025 · Work · Senior Laboratory Technician · OCP · Oksa Lab · Chemical
       analysis and quality control (titration, pH, spectrophotometry) to industrial
       standards; compliance records and HSE rules.
     3 months · Internship · Laboratory Technologist Intern · Hôpital Mohammed V · Biological
       sample analysis and metrology of lab analyzers: checking instrument precision and reliability.
     2 months · Internship · Quality Control Intern · UNIMER · Inspection of products and
       production equipment, sampling and quality assurance.
     2019 — 2023 · Education · BSc in Industrial Chemistry · Cadi Ayyad University · Safi ·
       Final project on the potability of well water in Oualidia.
7. **Skills (surface bg)** — "04 · Toolkit", h2 "What I *work with.*", 4 cards (bg fill)
   with icon tile + title + chip list (chips hover accent-soft):
     Brain · Generative AI & LLMs: RAG, Ollama, Qwen2.5, bge-m3 embeddings, Cosine
       similarity, Prompt engineering
     Database · Development: Python, Flask, Django, SQLAlchemy, SQL / SQLite, C / C++,
       HTML / CSS / JS
     Sparkles · Data & AI: Machine learning, Data mining, Medical imaging, NumPy
     Flask · Health & lab: Physiology, Signal processing, UV-Vis, NMR / MS, GLP, HSE
   Icons: Lucide (https://lucide.dev), stroke 2, accent color.
8. **Contact (#contact, deep bg, centered)** — "05 · Contact" (#8FA7FF), display heading
   "Let's build AI that *helps patients.*" (white + #8FA7FF italic), text "I'm looking for an
   internship in AI, data or software for healthcare. Based in Casablanca, open to remote."
   (white 65%), big accent pill with mail icon "etouabtibadreddine@gmail.com" → mailto
   (also add a copy button). Footer row with top line: "© 2026 Badreddine Etouabti" |
   "Casablanca, Morocco".
   Do NOT publish the phone number.

## Motion
- On load: status pill fades up (0.1s), H1 reveals word by word with blur 10px → 0
  (0.2s start), lead (0.6s), buttons (0.75s), meta (1s), 3D card scales 0.85 → 1 and
  rotates -6° → 0 with a soft spring (0.3s).
- On scroll: every section header and card fades up 32px (spring, no bounce); pipeline
  steps slide in from the right one by one (0.12s stagger); project cards stagger 0.1s;
  contact heading reveals word by word.
- Hover: buttons lift 2px and press to 0.96; cards as described above.
- Respect `prefers-reduced-motion` (show everything, no motion).

## Additions wanted (not in the Framer version)
- French version: FR / EN switch in the nav. Keep all text in a `translations` object
  in main.js (or `/fr/index.html`). Remember the choice in localStorage.
- Light/dark toggle in the nav.
- LinkedIn + GitHub links in nav and contact once the owner provides them.

## Assets
- `assets/photo.jpg` — portrait (440×440).
- `assets/CV_ETOUABTI_Badreddine.pdf` — CV, for a "Download CV" button.
