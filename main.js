/* Portfolio v3 — Badreddine Etouabti */

/* ---------- Translations ----------
   English is read from index.html on load (the HTML is the English source),
   French lives here. Keys match the data-i18n attributes. */
const translations = {
  en: {},
  fr: {
    doc_title: 'Badreddine Etouabti — IA, data &amp; dev pour la santé',
    doc_desc: 'Portfolio de Badreddine Etouabti (Etouabti Badreddine), élève ingénieur en Digital &amp; IA pour la santé à Casablanca. Je crée des assistants IA privés et sourcés pour la santé.',
    theme_label: 'Basculer mode clair / sombre',
    menu_label: 'Ouvrir le menu',
    photo_alt: 'Portrait de Badreddine Etouabti',
    capsule_label: 'Capsule 3D',
    capsule_hint: 'Faites-la tourner',
    scene_alt: 'Illustration de Badreddine qui code sur son ordinateur dans un salon ensoleillé, à côté d’un petit robot magicien',
    cord_label: 'Tirer la chaînette de la lampe pour passer en mode clair / sombre',
    cord_title: 'Tirez-moi',
    scene_alt_night:'Illustration de Badreddine qui code sur son ordinateur la nuit, à côté d’un petit robot magicien',

    nav_work: 'Projets',
    nav_about: 'À propos',
    nav_experience: 'Expérience',
    nav_education: 'Formation',
    nav_contact: 'Contact',
    nav_email: 'M’écrire',
    scroll_hint: 'Défiler',
    scroll_label: 'Aller à la section suivante',

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

    work_label: '02 · Projets choisis',
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

    about_label: '01 · À propos',
    about_title: 'De la paillasse au <em>modèle de langage.</em>',
    sig_role: 'Digital &amp; IA pour la santé',
    about_p1: 'Je suis en deuxième année du cycle ingénieur en Ingénierie Digitale &amp; IA pour la Santé à Suptech Santé, Mohammedia. Je travaille là où l’IA, le logiciel et la médecine se rencontrent.',
    about_p2: 'Avant d’écrire du code, j’ai passé des années en laboratoire : contrôle qualité industriel à l’OCP et analyses biologiques à l’Hôpital Mohammed V. J’y ai appris ce que l’IA oublie souvent. En santé, une mauvaise réponse est un risque, pas un bug. Je construis donc des systèmes qui citent leurs sources et disent « information introuvable » quand il le faut.',
    st1: 'Paramètres de LLM, exécutés entièrement en local',
    st2: 'Postes en labo, hôpital et industrie',
    st3: 'Rôles utilisateurs dans ma plateforme Django',
    st4: 'Domaines que je relie',
    st1_sub: 'Qwen2.5-7B dans PharmaMind',
    st3_sub: 'Plateforme d’internat, Suptech Santé',
    st4_sub: 'IA · Logiciel · Médecine',

    exp_label: '03 · Expérience professionnelle',
    exp_title: 'Un parcours fondé sur la <em>précision.</em>',
    edu_label: '04 · Formation',
    edu_title: 'D’où vient la <em>rigueur.</em>',
    k_work: 'Emploi',
    k_intern: 'Stage',
    e1_r: 'Stagiaire ingénieur IA',
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

    sk_label: '05 · Boîte à outils',
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

    ct_label: '06 · Contact',
    ct_title: 'Construisons une IA qui <em>aide les patients.</em>',
    ct_text: 'Je cherche un stage en IA, data ou logiciel pour la santé. Basé à Casablanca, ouvert au télétravail.',
    ct_copy: 'Copier',
    ct_copied: 'Copié !',
    ct_cv: 'Télécharger le CV',
  },
};
translations.en.ct_copied = 'Copied!';

/* ---------- Tag explanations ----------
   Shown in the popover when a project tag is clicked.
   `what` = what the technology is. `how` = how it was used, per project
   (keys match data-project on the cards: pharmamind, checker, boarding, water). */
const tagInfo = {
  RAG: {
    what: {
      en: 'Retrieval-augmented generation: before answering, the AI first looks up relevant passages in trusted documents, then writes its answer from those passages only.',
      fr: 'Génération augmentée par récupération : avant de répondre, l’IA cherche d’abord les passages pertinents dans des documents fiables, puis rédige sa réponse uniquement à partir de ceux-ci.',
    },
    how: {
      pharmamind: {
        en: 'In PharmaMind, the documents are official medication leaflets, so every answer is grounded in them and cites its source.',
        fr: 'Dans PharmaMind, les documents sont les notices officielles des médicaments : chaque réponse s’y appuie et cite sa source.',
      },
    },
  },
  Ollama: {
    what: {
      en: 'A free tool that runs large language models on your own computer, with no cloud service involved.',
      fr: 'Un outil gratuit qui fait tourner des grands modèles de langage sur votre propre ordinateur, sans aucun service cloud.',
    },
    how: {
      pharmamind: {
        en: 'It runs the Qwen2.5-7B model locally, so patient questions never leave the machine.',
        fr: 'Il fait tourner le modèle Qwen2.5-7B en local : les questions des patients ne quittent jamais la machine.',
      },
    },
  },
  'Qwen2.5-7B': {
    what: {
      en: 'An open-source language model with 7 billion parameters: small enough to run on a single machine, capable enough to write clear answers.',
      fr: 'Un modèle de langage open source de 7 milliards de paramètres : assez léger pour tourner sur une seule machine, assez capable pour rédiger des réponses claires.',
    },
    how: {
      pharmamind: {
        en: 'It writes PharmaMind’s answers from the leaflet passages it is given, and nothing else.',
        fr: 'Il rédige les réponses de PharmaMind à partir des passages de notice qu’on lui fournit, et rien d’autre.',
      },
    },
  },
  'bge-m3': {
    what: {
      en: 'An embedding model: it turns a sentence into a list of numbers that captures its meaning, so similar sentences get similar numbers. It works across languages.',
      fr: 'Un modèle d’embeddings : il transforme une phrase en une liste de nombres qui capture son sens, pour que des phrases proches aient des nombres proches. Il fonctionne dans plusieurs langues.',
    },
    how: {
      pharmamind: {
        en: 'Both the question and every leaflet passage go through bge-m3, so the closest passages can be found by comparing numbers.',
        fr: 'La question et chaque passage de notice passent par bge-m3, ce qui permet de retrouver les passages les plus proches en comparant des nombres.',
      },
    },
  },
  NumPy: {
    what: {
      en: 'The standard Python library for fast math on large tables of numbers.',
      fr: 'La bibliothèque Python de référence pour les calculs rapides sur de grands tableaux de nombres.',
    },
    how: {
      pharmamind: {
        en: 'It computes the cosine similarity between the question and all leaflet passages in one go.',
        fr: 'Il calcule la similarité cosinus entre la question et tous les passages de notice en une seule opération.',
      },
    },
  },
  Flask: {
    what: {
      en: 'A lightweight Python framework for building web applications.',
      fr: 'Un framework Python léger pour créer des applications web.',
    },
    how: {
      pharmamind: {
        en: 'Flask serves the drug catalogue and the chat interface of the assistant.',
        fr: 'Flask sert le catalogue de médicaments et l’interface de discussion de l’assistant.',
      },
      checker: {
        en: 'The checker is a Flask app organised in three layers: web pages, business rules and database.',
        fr: 'Le vérificateur est une application Flask organisée en trois couches : pages web, règles métier et base de données.',
      },
    },
  },
  pypdf: {
    what: {
      en: 'A Python library that reads PDF files and extracts their text.',
      fr: 'Une bibliothèque Python qui lit les fichiers PDF et en extrait le texte.',
    },
    how: {
      pharmamind: {
        en: 'It extracts the leaflet text, which is then split by section (indications, dosage, contraindications) before indexing.',
        fr: 'Il extrait le texte des notices, ensuite découpé par rubrique (indications, posologie, contre-indications) avant l’indexation.',
      },
    },
  },
  SQLAlchemy: {
    what: {
      en: 'A Python library that lets you work with a database through Python objects instead of raw SQL queries.',
      fr: 'Une bibliothèque Python qui permet de manipuler une base de données avec des objets Python plutôt qu’avec des requêtes SQL brutes.',
    },
    how: {
      checker: {
        en: 'It defines the drug, interaction and user tables and handles every read and write.',
        fr: 'Elle définit les tables médicaments, interactions et utilisateurs, et gère toutes les lectures et écritures.',
      },
    },
  },
  SQLite: {
    what: {
      en: 'A small database stored in a single file, with no server to install.',
      fr: 'Une petite base de données stockée dans un seul fichier, sans serveur à installer.',
    },
    how: {
      checker: {
        en: 'It stores the public BDPM (France) and data.gov.ma drug data the checker searches.',
        fr: 'Elle stocke les données publiques de la BDPM (France) et de data.gov.ma dans lesquelles le vérificateur cherche.',
      },
    },
  },
  Auth: {
    what: {
      en: 'Authentication: the login system that checks who a user is and what they are allowed to do.',
      fr: 'Authentification : le système de connexion qui vérifie qui est l’utilisateur et ce qu’il a le droit de faire.',
    },
    how: {
      checker: {
        en: 'Multi-role login: each role gets its own permissions and screens.',
        fr: 'Connexion multi-rôles : chaque rôle a ses propres permissions et écrans.',
      },
    },
  },
  Django: {
    what: {
      en: 'A complete Python web framework with a built-in admin, user accounts and database tools.',
      fr: 'Un framework web Python complet, avec administration, comptes utilisateurs et outils de base de données intégrés.',
    },
    how: {
      boarding: {
        en: 'The whole boarding school platform runs on Django: students, rooms, staff, incident reports and the dashboard.',
        fr: 'Toute la plateforme d’internat tourne sur Django : élèves, chambres, personnel, signalements et tableau de bord.',
      },
    },
  },
  Python: {
    what: {
      en: 'The programming language I use for everything, from data analysis to web apps and AI.',
      fr: 'Le langage de programmation que j’utilise pour tout, de l’analyse de données aux applications web et à l’IA.',
    },
    how: {
      boarding: {
        en: 'All the server-side logic of the platform is written in Python.',
        fr: 'Toute la logique côté serveur de la plateforme est écrite en Python.',
      },
    },
  },
  Roles: {
    what: {
      en: 'User roles define what each type of user can see and do in an application.',
      fr: 'Les rôles utilisateurs définissent ce que chaque type d’utilisateur peut voir et faire dans une application.',
    },
    how: {
      boarding: {
        en: 'Five roles with granular permissions, so staff, students and administrators each get the right access.',
        fr: 'Cinq rôles avec des permissions fines, pour que le personnel, les élèves et les administrateurs aient chacun le bon accès.',
      },
    },
  },
  Email: {
    what: {
      en: 'Automatic email notifications sent by the application when something happens.',
      fr: 'Notifications e-mail automatiques envoyées par l’application quand quelque chose se produit.',
    },
    how: {
      boarding: {
        en: 'The platform emails users directly, so nobody has to keep checking the dashboard to stay informed.',
        fr: 'La plateforme envoie directement des e-mails aux utilisateurs : personne n’a besoin de surveiller le tableau de bord pour rester informé.',
      },
    },
  },
  'Lab analysis': {
    what: {
      en: 'Measuring the physical and chemical properties of samples in a laboratory, with calibrated instruments.',
      fr: 'Mesurer les propriétés physiques et chimiques d’échantillons en laboratoire, avec des instruments étalonnés.',
    },
    how: {
      water: {
        en: 'Well water samples from Oualidia were analysed for their physico-chemical parameters.',
        fr: 'Des échantillons d’eau de puits d’Oualidia ont été analysés pour leurs paramètres physico-chimiques.',
      },
    },
  },
  'Water chemistry': {
    what: {
      en: 'The study of what water contains: minerals, salts, acidity and contaminants.',
      fr: 'L’étude de ce que contient l’eau : minéraux, sels, acidité et contaminants.',
    },
    how: {
      water: {
        en: 'Each result was compared with Morocco’s national drinking-water standards.',
        fr: 'Chaque résultat a été comparé aux normes marocaines de potabilité.',
      },
    },
  },
  'Public health': {
    what: {
      en: 'Protecting the health of a whole population, not just one patient.',
      fr: 'Protéger la santé d’une population entière, et pas seulement d’un patient.',
    },
    how: {
      water: {
        en: 'The study answers a concrete question: is this well water safe for the people who drink it?',
        fr: 'L’étude répond à une question concrète : cette eau de puits est-elle sûre pour les gens qui la boivent ?',
      },
    },
  },
};

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
// data-i18n-attr="aria-label:key;alt:key2" translates attributes
const attrPairs = (el) => el.dataset.i18nAttr.split(';').map((p) => p.split(':'));
const metaDesc = document.querySelector('meta[name="description"]');

document.querySelectorAll('[data-i18n]').forEach((el) => {
  translations.en[el.dataset.i18n] = el.innerHTML;
});
document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
  attrPairs(el).forEach(([attr, key]) => { translations.en[key] = el.getAttribute(attr); });
});
translations.en.doc_title = document.title;
translations.en.doc_desc = metaDesc.content;

let lang = storage.get('lang') === 'fr' ? 'fr' : 'en';
const langBtn = document.getElementById('langToggle');

// decode entities for plain-text targets (title, attributes)
const decode = (html) => { const t = document.createElement('textarea'); t.innerHTML = html; return t.value; };

function applyLang(next) {
  lang = next;
  const dict = translations[lang];
  const t = (key) => dict[key] ?? translations.en[key];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = t(el.dataset.i18n);
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    attrPairs(el).forEach(([attr, key]) => { if (t(key) != null) el.setAttribute(attr, decode(t(key))); });
  });
  document.title = decode(t('doc_title'));
  metaDesc.content = decode(t('doc_desc'));
  root.lang = lang;
  langBtn.textContent = lang === 'en' ? 'FR' : 'EN';
  langBtn.setAttribute('aria-label', lang === 'en' ? 'Passer en français' : 'Switch to English');
  splitWords(heroTitle);
  splitWords(contactTitle);
}

applyLang(lang);
root.classList.add('i18n-ready');
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

/* ---------- Mobile menu ---------- */
const nav = document.querySelector('.nav');
const menuBtn = document.getElementById('menuToggle');
const setMenu = (open) => {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
};
menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
document.querySelectorAll('.mobile-menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

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

/* ---------- 3D capsule (three.js) ---------- */
(function initCapsule() {
  const host = document.getElementById('capsule');
  const canvas = host.querySelector('canvas');
  const shadow = host.querySelector('.capsule-shadow');
  const THREE = window.THREE;
  let renderer;
  try {
    if (!THREE) throw new Error('three.js missing');
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch (e) {
    host.classList.add('no-webgl');
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  const srgb = (hex) => new THREE.Color(hex).convertSRGBToLinear();

  // One capsule half: hemisphere cap + straight wall, drawn by revolving a profile
  const halfGeo = (radius, length) => {
    const pts = [];
    for (let i = 0; i <= 20; i++) {
      const a = (i / 20) * Math.PI / 2;
      pts.push(new THREE.Vector2(Math.max(Math.sin(a) * radius, 0.0001), length + Math.cos(a) * radius));
    }
    pts.push(new THREE.Vector2(radius, 0));
    return new THREE.LatheGeometry(pts, 64);
  };
  const glossy = (hex, rough) => new THREE.MeshPhysicalMaterial({
    color: srgb(hex), roughness: rough, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.12, side: THREE.DoubleSide,
  });

  const R = 0.82;
  const capsule = new THREE.Group();
  const cap = new THREE.Mesh(halfGeo(R * 1.045, 1.25), glossy('#2E5BFF', 0.28));
  cap.position.y = -0.12;
  const body = new THREE.Mesh(halfGeo(R, 1.25), glossy('#FBFBF8', 0.38));
  body.rotation.x = Math.PI;
  body.position.y = 0.12;
  capsule.add(cap, body);

  const tilt = new THREE.Group(); // pointer tilt wraps the idle spin
  tilt.add(capsule);
  tilt.rotation.z = -0.62;
  scene.add(tilt);

  // small floating beads around the capsule
  const beads = [
    { r: 0.2, color: '#2E5BFF', pos: [-1.9, 1.5, -0.6], speed: 1.1 },
    { r: 0.14, color: '#FFFFFF', pos: [1.85, 1.25, 0.4], speed: 0.8 },
    { r: 0.26, color: '#C9D5FF', pos: [1.6, -1.7, -0.9], speed: 0.95 },
    { r: 0.11, color: '#2E5BFF', pos: [-1.5, -1.65, 0.6], speed: 1.3 },
  ].map((b) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(b.r, 32, 32), glossy(b.color, 0.3));
    m.position.set(...b.pos);
    m.userData = b;
    scene.add(m);
    return m;
  });

  scene.add(new THREE.HemisphereLight(0xffffff, 0xd9d5c8, 0.75));
  const key = new THREE.DirectionalLight(0xffffff, 1.15);
  key.position.set(3, 5, 6);
  const rim = new THREE.DirectionalLight(0xa9bbff, 0.9);
  rim.position.set(-5, -1, -4);
  const fill = new THREE.PointLight(0xffffff, 0.45);
  fill.position.set(-4, 2, 5);
  scene.add(key, rim, fill);

  const resize = () => {
    const w = host.clientWidth, h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.position.set(0, 0, w / h < 0.95 ? 13 : 11.5);
    camera.updateProjectionMatrix();
    render();
  };

  // pointer: tilt toward the cursor, drag to spin (mouse / pen only, touch keeps scrolling)
  const target = { x: 0, y: 0 };
  let spin = 0.0035, dragging = false, lastX = 0;
  host.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    const r = host.getBoundingClientRect();
    target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    if (dragging) { spin += (e.clientX - lastX) * 0.0009; lastX = e.clientX; }
  });
  host.addEventListener('pointerleave', () => { target.x = 0; target.y = 0; dragging = false; });
  canvas.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch') return;
    dragging = true; lastX = e.clientX;
  });
  window.addEventListener('pointerup', () => { dragging = false; });

  const clock = new THREE.Clock();
  function render() {
    const t = clock.getElapsedTime();
    if (!reduceMotion) {
      capsule.rotation.y += spin;
      spin += (0.0035 - spin) * 0.03; // ease back to idle speed after a drag
      const float = Math.sin(t * 1.1) * 0.12;
      tilt.position.y = float;
      tilt.rotation.x += (target.y * 0.35 - tilt.rotation.x) * 0.06;
      tilt.rotation.y += (target.x * 0.45 - tilt.rotation.y) * 0.06;
      beads.forEach((b) => { b.position.y = b.userData.pos[1] + Math.sin(t * b.userData.speed + b.userData.pos[0]) * 0.15; });
      // shadow shrinks and fades as the capsule floats up
      shadow.style.transform = `translateX(-50%) scale(${1 - float * 0.8})`;
      shadow.style.opacity = String(0.85 - float * 1.2);
    }
    renderer.render(scene, camera);
  }

  let running = false, frame = 0;
  const loop = () => { render(); frame = requestAnimationFrame(loop); };
  const setRunning = (on) => {
    if (reduceMotion || on === running) return;
    running = on;
    if (on) frame = requestAnimationFrame(loop);
    else cancelAnimationFrame(frame);
  };
  new ResizeObserver(resize).observe(host);
  new IntersectionObserver(([entry]) => setRunning(entry.isIntersecting)).observe(host);
  document.addEventListener('visibilitychange', () => setRunning(!document.hidden && host.getBoundingClientRect().bottom > 0));
  resize();
})();

/* ---------- Scene (About) ----------
   Day / night illustration swaps with the theme in CSS; here the card tilts
   toward the cursor (mouse / pen only). */
(function initScene() {
  const hero = document.querySelector('.about-hero');
  const scene = document.getElementById('scene');
  if (!hero || !scene || reduceMotion || !window.matchMedia('(hover: hover)').matches) return;
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    scene.style.setProperty('--px', ((e.clientX - r.left) / r.width * 2 - 1).toFixed(3));
    scene.style.setProperty('--py', ((e.clientY - r.top) / r.height * 2 - 1).toFixed(3));
  });
  hero.addEventListener('pointerleave', () => {
    scene.style.setProperty('--px', 0);
    scene.style.setProperty('--py', 0);
  });
})();

/* ---------- Lamp cord: pull it down to switch light / dark ----------
   Distances are in image pixels (the SVG viewBox is the 1254px picture). */
(function initLampCord() {
  const btn = document.getElementById('lampCord');
  const cord = document.getElementById('cord');
  const line = document.getElementById('cordLine');
  const bead = document.getElementById('cordBead');
  if (!btn || !cord) return;
  const REST = 334, MAX = 60, TRIGGER = 18;
  let pull = 0, raf = 0, startY = 0, scale = 1, maxPull = 0, dragging = false, skipClick = false;

  const setPull = (p) => {
    pull = p;
    line.setAttribute('y2', REST + p);
    bead.setAttribute('transform', `translate(0 ${p})`);
  };
  // damped spring back to rest
  const release = () => {
    cancelAnimationFrame(raf);
    if (reduceMotion) { setPull(0); cord.classList.remove('is-pulling'); return; }
    const from = pull, t0 = performance.now();
    const step = (now) => {
      const t = (now - t0) / 1000;
      setPull(from * Math.exp(-5 * t) * Math.cos(13 * t));
      if (t < 1.2) raf = requestAnimationFrame(step);
      else { setPull(0); cord.classList.remove('is-pulling'); }
    };
    raf = requestAnimationFrame(step);
  };
  const toggle = () => themeBtn.click();

  btn.addEventListener('pointerdown', (e) => {
    cancelAnimationFrame(raf);
    dragging = true; maxPull = 0; startY = e.clientY;
    scale = 1254 / btn.parentElement.getBoundingClientRect().width;
    btn.setPointerCapture(e.pointerId);
    cord.classList.add('is-pulling');
  });
  btn.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    setPull(Math.max(0, Math.min(MAX, (e.clientY - startY) * scale)));
    maxPull = Math.max(maxPull, pull);
  });
  const end = () => {
    if (!dragging) return;
    dragging = false;
    if (maxPull > TRIGGER) { toggle(); skipClick = true; }
    release();
  };
  btn.addEventListener('pointerup', end);
  btn.addEventListener('pointercancel', end);
  // plain click / Enter / Space: give the cord a quick tug
  btn.addEventListener('click', () => {
    if (skipClick) { skipClick = false; return; }
    cord.classList.add('is-pulling');
    setPull(32);
    toggle();
    release();
  });
})();

/* ---------- Bot eyes follow the cursor ---------- */
(function initBotEyes() {
  const eyes = document.getElementById('botEyes');
  if (!eyes) return;
  const svg = eyes.ownerSVGElement;
  const CX = 450, CY = 957, REACH = 6; // between the two eyes, max shift in image px
  let x = 0, y = 0, frame = 0;
  const look = () => {
    frame = 0;
    const r = svg.getBoundingClientRect();
    if (!r.width) return;
    const dx = x - (r.left + CX / 1254 * r.width);
    const dy = y - (r.top + CY / 1254 * r.height);
    const d = Math.hypot(dx, dy) || 1;
    const k = Math.min(d / 160, 1) * REACH / d;
    eyes.setAttribute('transform', `translate(${(dx * k).toFixed(2)} ${(dy * k * 0.8).toFixed(2)})`);
  };
  window.addEventListener('pointermove', (e) => {
    x = e.clientX; y = e.clientY;
    if (!frame) frame = requestAnimationFrame(look);
  }, { passive: true });
})();

/* ---------- Tag popovers ---------- */
(function initTagPopovers() {
  let open = null; // { btn, pop }
  const close = (focusBack) => {
    if (!open) return;
    const { btn, pop } = open;
    open = null;
    pop.remove();
    btn.setAttribute('aria-expanded', 'false');
    btn.removeAttribute('aria-describedby');
    btn.closest('.card')?.classList.remove('has-pop');
    if (focusBack) btn.focus();
  };
  const pick = (obj) => obj && (obj[lang] ?? obj.en);
  const toggle = (btn) => {
    if (open && open.btn === btn) { close(); return; }
    close();
    const info = tagInfo[btn.dataset.tag];
    if (!info) return;
    const project = btn.closest('[data-project]')?.dataset.project;
    const what = pick(info.what);
    const how = pick(info.how?.[project]) ?? pick(info.how?.default);

    const pop = document.createElement('div');
    pop.className = 'tag-pop';
    pop.id = 'pop-' + btn.dataset.tag.replace(/\W+/g, '-').toLowerCase() + '-' + (project || 'x');
    pop.setAttribute('role', 'note');
    pop.innerHTML = `<strong>${btn.textContent}</strong>`
      + (what ? `<span>${what}</span>` : '')
      + (how ? `<span class="pop-how">${how}</span>` : '');
    btn.parentElement.append(pop);
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-describedby', pop.id);
    btn.closest('.card')?.classList.add('has-pop');

    // keep it inside the viewport: flip to the right edge / above the tag when needed
    const r = pop.getBoundingClientRect();
    if (r.right > window.innerWidth - 12) pop.classList.add('right');
    if (r.bottom > window.innerHeight - 12 && r.top - r.height - 48 > 0) pop.classList.add('up');
    requestAnimationFrame(() => pop.classList.add('show'));
    open = { btn, pop };
  };

  document.querySelectorAll('.tags .tag').forEach((btn) => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); toggle(btn); });
  });
  document.addEventListener('click', (e) => { if (open && !open.pop.contains(e.target)) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) close(true); });
  langBtn.addEventListener('click', () => close());
})();

/* ---------- Project cards: lift + 3D tilt + glow following the pointer ---------- */
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (motion && finePointer) {
  document.querySelectorAll('.project').forEach((card) => {
    const rotX = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3.out' });
    const rotY = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3.out' });
    const lift = gsap.quickTo(card, 'y', { duration: 0.5, ease: 'power3.out' });
    card.addEventListener('pointerenter', () => { gsap.set(card, { transformPerspective: 900 }); lift(-6); });
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
      rotX((0.5 - py) * 8);
      rotY((px - 0.5) * 10);
    });
    card.addEventListener('pointerleave', () => { rotX(0); rotY(0); lift(0); });
  });
} else {
  // touch / reduced motion: still light the glow ring from the centre
  document.querySelectorAll('.project').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    });
  });
}

/* ---------- Stats count-up ---------- */
const statNums = document.querySelectorAll('.stat-num');

/* ---------- Motion ---------- */
if (motion) {
  gsap.registerPlugin(ScrollTrigger);
  const easeOut = 'expo.out';
  const fadeUp = { y: 32, autoAlpha: 0, duration: 1.1, ease: easeOut, clearProps: 'transform' };

  // First screen: scene card fades in next to the text, scroll cue appears last
  gsap.from('.scene', { autoAlpha: 0, duration: 1.6, ease: 'power2.out', delay: 0.1 });
  gsap.from('.scroll-cue', { y: 12, autoAlpha: 0, duration: 0.8, ease: easeOut, delay: 1.1 });

  // Intro (capsule section): now second on the page, so it plays when scrolled into view
  const heroWords = heroTitle.querySelectorAll('.w');
  gsap.set(heroTitle, { autoAlpha: 1 });
  const intro = gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top 70%', once: true } });
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
