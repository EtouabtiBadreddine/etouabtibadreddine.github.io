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
    avatar_label: 'Avatar 3D de Badreddine qui fait coucou',
    avatar_hint: 'Survolez pour un coucou',

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

/* ---------- 3D avatar (About) ----------
   Stylized character built from simple shapes: curly hair, brown eyes,
   black hoodie. Head + eyes follow the cursor, blinks, waves on view / hover / tap. */
(function initAvatar() {
  const host = document.getElementById('avatar');
  const canvas = host.querySelector('canvas');
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
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  const mat = (hex, rough, extra) => new THREE.MeshStandardMaterial({
    color: new THREE.Color(hex).convertSRGBToLinear(), roughness: rough, metalness: 0, ...extra,
  });
  const add = (parent, geo, material, pos, scale, rot) => {
    const m = new THREE.Mesh(geo, material);
    if (pos) m.position.set(...pos);
    if (scale) m.scale.set(...scale);
    if (rot) m.rotation.set(...rot);
    parent.add(m);
    return m;
  };

  const skin = mat('#EDB797', 0.55);
  const hair = mat('#2A1C15', 0.5);
  const hoodie = mat('#1B1C20', 0.92, { side: THREE.DoubleSide });
  const white = mat('#FFFFFF', 0.25);
  const brow = mat('#2A1A12', 0.7);

  const rig = new THREE.Group();
  scene.add(rig);

  // ----- Head (ellipsoid; surfZ gives the face surface depth at x, y) -----
  const HA = 0.9, HB = 1.05, HC = 0.92;
  const surfZ = (x, y) => HC * Math.sqrt(Math.max(0, 1 - (x / HA) ** 2 - (y / HB) ** 2));
  // flat shapes (mouth, blush) are wrapped onto the face curve
  const hug = (geo, cx, cy) => {
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) p.setZ(i, surfZ(p.getX(i) + cx, p.getY(i) + cy) - surfZ(cx, cy));
    return geo;
  };

  const head = new THREE.Group();
  rig.add(head);
  add(head, new THREE.SphereGeometry(1, 64, 64), skin, null, [HA, HB, HC]);
  [-1, 1].forEach((s) => add(head, new THREE.SphereGeometry(0.2, 32, 32), skin, [s * 0.88, -0.05, -0.05], [0.55, 1, 0.75]));
  add(head, new THREE.SphereGeometry(0.15, 32, 32), mat('#EDB194', 0.5), [0, -0.14, surfZ(0, -0.14) - 0.02], [1, 0.85, 0.9]);

  // eyes: white ball + iris and pupil caps, so the whole eye can rotate to look around
  const eyes = [-1, 1].map((s) => {
    const g = new THREE.Group();
    g.position.set(s * 0.34, 0.05, surfZ(0.34, 0.05) - 0.13);
    add(g, new THREE.SphereGeometry(0.21, 32, 32), white);
    const cap = (r, size, m) => add(g, new THREE.SphereGeometry(r, 32, 16, 0, Math.PI * 2, 0, size), m, null, null, [Math.PI / 2, 0, 0]);
    cap(0.212, 0.66, mat('#7A4317', 0.3));
    cap(0.214, 0.32, mat('#120A06', 0.2));
    add(g, new THREE.SphereGeometry(0.042, 16, 16), white, [0.06, 0.07, 0.2]);
    head.add(g);
    return g;
  });

  [-1, 1].forEach((s) => {
    const pts = [[0.55, 0.33], [0.36, 0.42], [0.15, 0.38]].map(([x, y]) => new THREE.Vector3(s * x, y, surfZ(x, y) + 0.03));
    add(head, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 20, 0.05, 12), brow);
    [pts[0], pts[2]].forEach((p) => add(head, new THREE.SphereGeometry(0.05, 12, 12), brow, [p.x, p.y, p.z]));
  });

  // big open smile with teeth
  const mouthShape = new THREE.Shape();
  mouthShape.moveTo(-0.3, 0.04);
  mouthShape.quadraticCurveTo(0, -0.04, 0.3, 0.04);
  mouthShape.quadraticCurveTo(0, -0.36, -0.3, 0.04);
  const teethShape = new THREE.Shape();
  teethShape.moveTo(-0.24, 0);
  teethShape.quadraticCurveTo(0, -0.07, 0.24, 0);
  teethShape.lineTo(0.19, -0.04);
  teethShape.quadraticCurveTo(0, -0.13, -0.19, -0.04);
  const MY = -0.44;
  const mouth = new THREE.Group();
  // pushed forward a little: the flat triangles between outline points would otherwise sink into the curved face
  mouth.position.set(0, MY, surfZ(0, MY) + 0.035);
  add(mouth, hug(new THREE.ShapeGeometry(mouthShape, 24), 0, MY), mat('#5B1E1E', 0.6));
  add(mouth, hug(new THREE.ShapeGeometry(teethShape, 24), 0, MY), white, [0, 0, 0.004]);
  head.add(mouth);

  const blush = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FF8A80').convertSRGBToLinear(), transparent: true, opacity: 0.28, depthWrite: false });
  [-1, 1].forEach((s) => {
    const cx = s * 0.5, cy = -0.24;
    add(head, hug(new THREE.CircleGeometry(0.15, 32), cx, cy), blush, [cx, cy, surfZ(cx, cy) + 0.008]);
  });

  // curly hair: blobs over the scalp (fibonacci sphere), small curls on top, fringe curls in front
  let seed = 11;
  const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const blob = new THREE.SphereGeometry(1, 20, 20);
  const N = 240;
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = i * 2.39996;
    const d = new THREE.Vector3(Math.cos(th) * r, y, Math.sin(th) * r);
    const hairline = d.z > 0.45 ? 0.62 : d.z > -0.1 ? 0.3 : -0.3;
    if (d.y < hairline) continue;
    const lift = 1.0 + rand() * 0.05;
    const s = 0.17 + rand() * 0.09;
    add(head, blob, hair, [d.x * HA * lift, d.y * HB * lift, d.z * HC * lift], [s, s * (0.9 + rand() * 0.2), s]);
    if (d.y > 0.5 && i % 2) {
      const c = 0.11 + rand() * 0.05;
      add(head, blob, hair, [d.x * HA * 1.14, d.y * HB * 1.16, d.z * HC * 1.14], [c, c, c]);
    }
  }
  const curl = new THREE.TorusGeometry(0.11, 0.055, 12, 24, Math.PI * 1.5);
  [[-0.5, 0.6, 0.4], [-0.26, 0.7, -0.5], [0.02, 0.66, 0.7], [0.27, 0.7, -0.2], [0.5, 0.6, 1]].forEach(([x, y, rz]) => {
    add(head, curl, hair, [x, y, surfZ(x, y) + 0.1], null, [0.35, 0, rz]);
  });
  [-1, 1].forEach((s) => add(head, curl, hair, [s * 0.86, 0.45, 0.1], [1.2, 1.2, 1.2], [0, s * 1.2, s * 0.8]));

  // ----- Body: neck, hoodie, hood collar, drawstrings -----
  add(rig, new THREE.CylinderGeometry(0.3, 0.34, 0.6, 32), skin, [0, -1.15, -0.05]);
  const torsoPts = [[0.001, -1.3], [0.45, -1.32], [0.85, -1.42], [1.1, -1.65], [1.2, -2], [1.18, -3.8], [0.001, -3.8]];
  const torso = add(rig, new THREE.LatheGeometry(torsoPts.map(([x, y]) => new THREE.Vector2(x, y)), 64), hoodie, null, [1, 1, 0.68]);
  add(rig, new THREE.TorusGeometry(0.52, 0.2, 24, 64), hoodie, [0, -1.38, -0.02], [1.15, 1, 0.95], [Math.PI / 2 - 0.25, 0, 0]);
  add(rig, new THREE.SphereGeometry(0.7, 32, 32), hoodie, [0, -1.25, -0.45], [1.2, 0.6, 0.6]);
  const cord = mat('#2C2D33', 0.8);
  [-1, 1].forEach((s) => {
    add(rig, new THREE.CylinderGeometry(0.022, 0.022, 0.75, 8), cord, [s * 0.17, -1.95, 0.83], null, [-0.15, 0, s * 0.04]);
    add(rig, new THREE.CylinderGeometry(0.03, 0.03, 0.1, 8), cord, [s * 0.185, -2.35, 0.88]);
  });

  // arms: shoulder -> elbow -> hand groups so the right one can wave
  const sleeve = new THREE.CylinderGeometry(0.27, 0.25, 1, 24);
  const makeArm = (s) => {
    const shoulder = new THREE.Group();
    shoulder.position.set(s * 1.05, -1.82, 0);
    add(shoulder, new THREE.SphereGeometry(0.29, 24, 24), hoodie);
    add(shoulder, sleeve, hoodie, [0, -0.5, 0]);
    const elbow = new THREE.Group();
    elbow.position.y = -1;
    add(elbow, new THREE.SphereGeometry(0.26, 24, 24), hoodie);
    add(elbow, sleeve, hoodie, [0, -0.5, 0], [0.95, 1, 0.95]);
    add(elbow, new THREE.SphereGeometry(0.22, 24, 24), skin, [0, -1.12, 0], [0.9, 1.1, 0.7]);
    add(elbow, new THREE.SphereGeometry(0.08, 16, 16), skin, [-s * 0.17, -1.0, 0.06], [1, 1.5, 1]);
    shoulder.add(elbow);
    rig.add(shoulder);
    shoulder.rotation.z = s * 0.12;
    return { shoulder, elbow };
  };
  makeArm(-1);
  const armR = makeArm(1);

  scene.add(new THREE.HemisphereLight(0xfff4ea, 0x8a8f99, 0.8));
  const key = new THREE.DirectionalLight(0xfff1e0, 1);
  key.position.set(-3, 4, 5);
  const rim = new THREE.DirectionalLight(0xbfcaff, 0.7);
  rim.position.set(4, 2, -4);
  const fill = new THREE.DirectionalLight(0xffffff, 0.35);
  fill.position.set(3, -1, 5);
  scene.add(key, rim, fill);

  // frame hair-to-chest (y ≈ 1.6 … -3) plus room for the raised hand
  const resize = () => {
    const w = host.clientWidth, h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const dist = Math.max(2.45 / tan, 2.5 / (tan * camera.aspect));
    camera.position.set(0, -0.7, dist);
    camera.lookAt(0, -0.7, 0);
    camera.updateProjectionMatrix();
    render();
  };

  // interaction state
  const target = { x: 0, y: 0 }, look = { x: 0, y: 0 };
  const clock = new THREE.Clock();
  let waveStart = -10, nextBlink = 2;
  const WAVE = 2.6;
  const wave = () => {
    const t = clock.getElapsedTime();
    if (t - waveStart > WAVE) waveStart = t;
  };
  host.addEventListener('pointermove', (e) => {
    const r = host.getBoundingClientRect();
    target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
  });
  host.addEventListener('pointerleave', () => { target.x = 0; target.y = 0; });
  host.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') wave(); });
  host.addEventListener('click', wave);

  function render() {
    const t = clock.getElapsedTime();
    if (!reduceMotion) {
      rig.position.y = Math.sin(t * 1.6) * 0.03;
      torso.scale.y = 1 + Math.sin(t * 1.6) * 0.006;

      look.x += (target.x - look.x) * 0.06;
      look.y += (target.y - look.y) * 0.06;
      head.rotation.y = look.x * 0.35;
      head.rotation.x = look.y * 0.18;

      if (t > nextBlink + 0.16) nextBlink = t + 2.5 + rand() * 3;
      const b = t > nextBlink ? Math.sin(((t - nextBlink) / 0.16) * Math.PI) : 0;
      eyes.forEach((eye) => {
        eye.rotation.y = look.x * 0.3;
        eye.rotation.x = look.y * 0.25;
        eye.scale.y = 1 - b * 0.9;
      });

      const w = t - waveStart;
      const env = w < 0 || w > WAVE ? 0 : Math.min(1, w / 0.45, (WAVE - w) / 0.5);
      const e = env * env * (3 - 2 * env);
      armR.shoulder.rotation.z = 0.12 + e * 2.1;
      armR.elbow.rotation.z = e * (0.8 + Math.sin(w * 11) * 0.4);
      head.rotation.z = e * 0.08;
    }
    renderer.render(scene, camera);
  }

  let running = false, frame = 0, greeted = false;
  const loop = () => { render(); frame = requestAnimationFrame(loop); };
  const setRunning = (on) => {
    if (reduceMotion || on === running) return;
    running = on;
    if (on) frame = requestAnimationFrame(loop);
    else cancelAnimationFrame(frame);
  };
  new ResizeObserver(resize).observe(host);
  new IntersectionObserver(([entry]) => {
    setRunning(entry.isIntersecting);
    if (entry.isIntersecting && !greeted) { greeted = true; setTimeout(wave, 500); }
  }, { threshold: 0.4 }).observe(host);
  resize();
})();

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
