/* Portfolio v3 — Badreddine Etouabti */

/* ---------- Translations ----------
   English is read from index.html on load (the HTML is the English source),
   French lives here. Keys match the data-i18n attributes. */
const translations = {
  en: {},
  fr: {
    nav_work: 'Projets',
    nav_about: 'À propos',
    nav_experience: 'Parcours',
    nav_contact: 'Contact',
    nav_email: 'M’écrire',

    hero_status: 'Ouvert aux stages · IA, data &amp; dev en santé',
    hero_title: '<span class="line">Je crée une IA</span> <span class="line">en qui la <em>santé</em></span> <span class="line">peut avoir confiance.</span>',
    hero_lead: 'Je suis Badreddine, élève ingénieur en Ingénierie Digitale &amp; IA pour la Santé. Je transforme des documents médicaux en assistants IA privés et sourcés, avec la rigueur d’un scientifique de laboratoire dans chaque ligne de code.',
    hero_cta_work: 'Voir mes projets',
    hero_cta_contact: 'Me contacter',
    meta_city: 'Casablanca, Maroc',
    meta_year: '2e année',
    meta_langs: 'Arabe · Français · Anglais',

    tick_medical: 'Données médicales',
    tick_qc: 'Contrôle qualité',

    work_label: '01 · Projets choisis',
    work_title: 'Ce que j’ai <em>construit</em>',
    work_note: 'D’un assistant médical IA privé au travail de labo qui m’a appris pourquoi la précision compte.',
    feat_label: 'À la une · Alexsys Solutions · 2026',
    feat_lead: 'Un catalogue de médicaments intelligent avec un assistant IA qui répond uniquement à partir des notices officielles, cite ses sources et tourne entièrement sur un modèle local : les données des patients ne quittent jamais la machine.',
    hl1_t: 'Garde-fous anti-hallucination',
    hl1_d: 'Les réponses viennent uniquement des notices, sinon « information introuvable », avec l’extrait source affiché.',
    hl2_t: 'Pipeline d’ingestion PDF',
    hl2_d: 'Extraction avec pypdf, découpage par rubrique de notice (indications, posologie, contre-indications), puis indexation vectorielle.',
    hl3_t: 'Vérificateur d’interactions',
    hl3_d: 'Application Flask en 3 couches avec SQLAlchemy + SQLite, connexion multi-rôles et alertes classées par gravité.',
    pipe_label: 'Comment il répond à une question',
    s1_n: 'Question',
    s1_d: 'Posée en langage courant',
    s2_d: 'Transformée en vecteur avec bge-m3',
    s3_n: 'Recherche',
    s3_d: 'Similarité cosinus sur les passages des notices',
    s4_d: 'Les passages les plus proches sont gardés',
    s5_d: 'Tourne en local via Ollama',
    s6_n: 'Réponse',
    s6_d: 'Rédigée à partir des passages, avec sources',
    chat_q: 'Puis-je prendre de l’ibuprofène avec un anticoagulant ?',
    chat_a: 'Prudence. La notice cite les anticoagulants dans les interactions : associés à des AINS comme l’ibuprofène, le risque de saignement augmente. Demandez d’abord l’avis d’un médecin ou d’un pharmacien.',
    chat_src: 'Source · rubrique « Interactions » de la notice — exemple de format de réponse',
    p1_t: 'Vérificateur d’interactions médicamenteuses',
    p1_d: 'Partie de PharmaMind : un catalogue Flask basé sur les données publiques de la BDPM (France) et de data.gov.ma. Le modèle est derrière une interface : il tourne sans GPU et se change via un réglage .env.',
    p2_t: 'Plateforme d’internat',
    p2_d: 'Application Django full-stack pour les élèves, chambres, personnel et signalements d’incidents, avec 5 rôles, des permissions fines, un tableau de bord et des notifications e-mail.',
    tag_roles: 'Rôles',
    p3_org: 'Université Cadi Ayyad',
    p3_t: 'Qualité de l’eau des puits, Oualidia',
    p3_d: 'Projet de fin d’études : analyse physico-chimique de l’eau de puits, comparée aux normes marocaines de potabilité.',
    tag_lab: 'Analyse en labo',
    tag_water: 'Chimie de l’eau',
    tag_health: 'Santé publique',

    about_label: '02 · À propos',
    about_title: 'De la paillasse au <em>modèle de langage.</em>',
    sig_role: 'Digital &amp; IA pour la santé',
    about_p1: 'Je suis en deuxième année du cycle ingénieur en Ingénierie Digitale &amp; IA pour la Santé à Suptech Santé, Mohammedia. Je travaille là où l’IA, le logiciel et la médecine se rencontrent.',
    about_p2: 'Avant d’écrire du code, j’ai passé des années en laboratoire : contrôle qualité industriel à l’OCP et analyses biologiques à l’Hôpital Mohammed V. J’y ai appris ce que l’IA oublie souvent. En santé, une mauvaise réponse est un risque, pas un bug. Je construis donc des systèmes qui citent leurs sources et disent « information introuvable » quand il le faut.',
    st1: 'Paramètres de LLM, exécutés entièrement en local',
    st2: 'Postes en labo, hôpital et industrie',
    st3: 'Rôles utilisateurs dans ma plateforme Django',
    st4: 'Langues de travail : arabe, français, anglais',

    exp_label: '03 · Expérience &amp; formation',
    exp_title: 'Un parcours fondé sur la <em>précision.</em>',
    k_work: 'Emploi',
    k_edu: 'Formation',
    k_intern: 'Stage',
    e1_r: 'Stagiaire développeur IA',
    e1_d: 'Conception de PharmaMind, un assistant RAG sur les notices de médicaments tournant sur un LLM local, et du catalogue Flask qui l’entoure.',
    e2_date: '2025 — auj.',
    e2_r: 'Cycle ingénieur, Digital &amp; IA pour la santé',
    e2_d: 'Machine learning, techniques d’IA, data mining, imagerie médicale, développement web et bases de données avancées.',
    e3_date: 'Déc. 2024 — août 2025',
    e3_r: 'Technicien de laboratoire senior',
    e3_d: 'Analyses chimiques et contrôle qualité (titrage, pH, spectrophotométrie) selon les normes industrielles ; registres de conformité et règles HSE.',
    e4_date: '3 mois',
    e4_r: 'Stagiaire technicien de laboratoire',
    e4_d: 'Analyse d’échantillons biologiques et métrologie des analyseurs : vérification de la précision et de la fiabilité des instruments.',
    e5_date: '2 mois',
    e5_r: 'Stagiaire contrôle qualité',
    e5_d: 'Inspection des produits et des équipements de production, échantillonnage et assurance qualité.',
    e6_r: 'Licence en chimie industrielle',
    e6_d: 'Projet de fin d’études sur la potabilité de l’eau des puits à Oualidia.',

    sk_label: '04 · Boîte à outils',
    sk_title: 'Avec quoi je <em>travaille.</em>',
    sk1: 'IA générative &amp; LLM',
    sk2: 'Développement',
    sk3: 'Data &amp; IA',
    sk4: 'Santé &amp; labo',
    chip_emb: 'Embeddings bge-m3',
    chip_cos: 'Similarité cosinus',
    chip_img: 'Imagerie médicale',
    chip_phys: 'Physiologie',
    chip_sig: 'Traitement du signal',

    ct_label: '05 · Contact',
    ct_title: 'Construisons une IA qui <em>aide les patients.</em>',
    ct_text: 'Je cherche un stage en IA, data ou logiciel pour la santé. Basé à Casablanca, ouvert au télétravail.',
    ct_copy: 'Copier',
    ct_copied: 'Copié !',
    ct_cv: 'Télécharger le CV',
  },
};
translations.en.ct_copied = 'Copied!';

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
const motion = !reduceMotion && hasGsap;
if (!motion) root.classList.remove('motion');

const storage = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
};

/* ---------- Icons ---------- */
if (window.lucide) window.lucide.createIcons();

/* ---------- Word splitting (hero + contact headings) ---------- */
function splitWords(el) {
  const nodes = [...el.childNodes];
  el.textContent = '';
  nodes.forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE) {
      n.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { el.append(' '); return; }
        const w = document.createElement('span');
        w.className = 'w';
        w.textContent = part;
        el.append(w);
      });
    } else if (n.nodeType === Node.ELEMENT_NODE && n.classList.contains('line')) {
      splitWords(n);
      el.append(n);
    } else {
      const w = document.createElement('span');
      w.className = 'w';
      w.append(n);
      el.append(w);
    }
  });
  return el.querySelectorAll('.w');
}

const heroTitle = document.querySelector('.hero-title');
const contactTitle = document.querySelector('.contact-title');

/* ---------- Language ---------- */
document.querySelectorAll('[data-i18n]').forEach((el) => {
  translations.en[el.dataset.i18n] = el.innerHTML;
});

let lang = storage.get('lang') === 'fr' ? 'fr' : 'en';
const langBtn = document.getElementById('langToggle');

function applyLang(next) {
  lang = next;
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dict[el.dataset.i18n] ?? translations.en[el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  root.lang = lang;
  langBtn.textContent = lang === 'en' ? 'FR' : 'EN';
  langBtn.setAttribute('aria-label', lang === 'en' ? 'Passer en français' : 'Switch to English');
  splitWords(heroTitle);
  splitWords(contactTitle);
}

applyLang(lang);
langBtn.addEventListener('click', () => {
  const next = lang === 'en' ? 'fr' : 'en';
  storage.set('lang', next);
  applyLang(next);
  if (hasGsap) ScrollTrigger.refresh();
});

/* ---------- Theme ---------- */
const themeBtn = document.getElementById('themeToggle');
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = () => root.dataset.theme || (darkQuery.matches ? 'dark' : 'light');
themeBtn.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  storage.set('theme', next);
});

/* ---------- Copy email ---------- */
const copyBtn = document.getElementById('copyEmail');
copyBtn.addEventListener('click', async () => {
  const label = copyBtn.querySelector('[data-i18n]');
  try {
    await navigator.clipboard.writeText('etouabtibadreddine@gmail.com');
    label.textContent = translations[lang].ct_copied;
    setTimeout(() => { label.innerHTML = translations[lang].ct_copy; }, 2000);
  } catch (e) {
    window.location.href = 'mailto:etouabtibadreddine@gmail.com';
  }
});

/* ---------- Ticker (duplicate for a seamless loop, slow on hover) ---------- */
const track = document.getElementById('tickerTrack');
const list = track.querySelector('.ticker-list');
const clone = list.cloneNode(true);
clone.setAttribute('aria-hidden', 'true');
clone.querySelectorAll('[data-i18n]').forEach((el) => el.removeAttribute('data-i18n'));
track.append(clone);
// keep the clone in sync with language changes
langBtn.addEventListener('click', () => {
  clone.querySelectorAll('li').forEach((li, i) => { li.innerHTML = list.children[i].innerHTML; });
});

const tickerAnim = track.getAnimations ? track.getAnimations()[0] : null;
if (tickerAnim) {
  const rate = { v: 1 };
  const setRate = (to) => {
    if (hasGsap) gsap.to(rate, { v: to, duration: 0.6, ease: 'power2.out', onUpdate: () => tickerAnim.updatePlaybackRate(rate.v) });
    else tickerAnim.updatePlaybackRate(to);
  };
  track.addEventListener('mouseenter', () => setRate(0.25));
  track.addEventListener('mouseleave', () => setRate(1));
}

/* ---------- Stats count-up ---------- */
const statNums = document.querySelectorAll('.stat-num');

/* ---------- Motion ---------- */
if (motion) {
  gsap.registerPlugin(ScrollTrigger);
  const easeOut = 'expo.out';
  const fadeUp = { y: 32, autoAlpha: 0, duration: 1.1, ease: easeOut, clearProps: 'transform' };

  // Intro
  const heroWords = heroTitle.querySelectorAll('.w');
  gsap.set(heroTitle, { autoAlpha: 1 });
  const intro = gsap.timeline();
  intro
    .from('[data-hero="pill"]', { y: 16, autoAlpha: 0, duration: 0.8, ease: easeOut }, 0.1)
    .from(heroWords, { y: 24, autoAlpha: 0, filter: 'blur(10px)', duration: 0.9, ease: easeOut, stagger: 0.07, clearProps: 'filter' }, 0.2)
    .from('[data-hero="visual"]', { scale: 0.85, rotate: -6, autoAlpha: 0, duration: 1.6, ease: 'back.out(1.3)' }, 0.3)
    .from('[data-hero="lead"]', { y: 20, autoAlpha: 0, duration: 0.9, ease: easeOut }, 0.6)
    .from('[data-hero="buttons"]', { y: 20, autoAlpha: 0, duration: 0.9, ease: easeOut }, 0.75)
    .from('[data-hero="meta"]', { y: 20, autoAlpha: 0, duration: 0.9, ease: easeOut }, 1);

  // Section headers + generic cards
  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.from(el, { ...fadeUp, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });

  // Pipeline steps slide in from the right
  gsap.from('.step', {
    x: 48, autoAlpha: 0, duration: 0.9, ease: easeOut, stagger: 0.12, clearProps: 'transform',
    scrollTrigger: { trigger: '.steps', start: 'top 85%', once: true },
  });

  // Project cards stagger
  gsap.from('.project', {
    ...fadeUp, stagger: 0.1,
    scrollTrigger: { trigger: '.project-grid', start: 'top 88%', once: true },
  });

  // Count up
  ScrollTrigger.create({
    trigger: '.stats', start: 'top 85%', once: true,
    onEnter: () => statNums.forEach((el) => {
      const end = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const o = { n: 0 };
      el.textContent = '0' + suffix;
      gsap.to(o, { n: end, duration: 1.6, ease: 'power3.out', onUpdate: () => { el.textContent = Math.round(o.n) + suffix; } });
    }),
  });

  // Contact
  gsap.set(contactTitle, { autoAlpha: 1 });
  const contactTl = gsap.timeline({ scrollTrigger: { trigger: '#contact', start: 'top 70%', once: true } });
  contactTl
    .from('.contact-label', { y: 16, autoAlpha: 0, duration: 0.8, ease: easeOut }, 0)
    .from(contactTitle.querySelectorAll('.w'), { y: 28, autoAlpha: 0, filter: 'blur(10px)', duration: 0.9, ease: easeOut, stagger: 0.07, clearProps: 'filter' }, 0.1)
    .from('.contact-text', { y: 20, autoAlpha: 0, duration: 0.9, ease: easeOut }, 0.5);

  // Language switch rebuilds heading words: make sure they're visible
  langBtn.addEventListener('click', () => {
    gsap.set([...heroTitle.querySelectorAll('.w'), ...contactTitle.querySelectorAll('.w')], { autoAlpha: 1 });
  });
}
