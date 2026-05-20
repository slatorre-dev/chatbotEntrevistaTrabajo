/* ── Student hero themes ───────────────────────────── */
const studentHeroThemes = [
  {
    title: 'Descubre el trabajo que te mueve',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Tu perfil profesional, sin estereotipos',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Conecta con tu futuro desde hoy',
    image: 'https://images.unsplash.com/photo-1531379410504-1b0f4f8f9f04?auto=format&fit=crop&w=1400&q=80'
  }
];

/* ── Quick-practice data ───────────────────────────── */
const questions = [
  {
    question: 'Cuéntame sobre ti y tus principales logros.',
    good: 'Haz un resumen breve de tu perfil, tus experiencias más relevantes y por qué te interesa este puesto.',
    bad: 'No hables solo de tu vida personal ni te extiendas en detalles innecesarios.'
  },
  {
    question: '¿Por qué quieres trabajar en esta empresa?',
    good: 'Conecta tus valores y habilidades con la misión de la organización.',
    bad: 'Evita respuestas vagas como "porque necesito trabajo".'
  },
  {
    question: '¿Cuál es tu mayor debilidad?',
    good: 'Explica una debilidad real y qué haces para mejorarla.',
    bad: 'No respondas con clichés como "soy perfeccionista" sin un plan de mejora.'
  },
  {
    question: 'Descríbeme una situación difícil que resolviste.',
    good: 'Usa STAR: situación, tarea, acción y resultado.',
    bad: 'No culpes a otras personas ni omitas lo que aprendiste.'
  },
  {
    question: '¿Cómo manejas el trabajo bajo presión?',
    good: 'Explica tu método para priorizar tareas y mantener la calma.',
    bad: 'No digas solo "lo hago" sin dar un ejemplo concreto.'
  }
];

const challenges = [
  {
    challenge: 'Prepara tu presentación personal en 60 segundos.',
    action: 'Escribe una presentación breve y practícala en voz alta frente al espejo.',
    duration: '5 minutos'
  },
  {
    challenge: 'Investiga una empresa que te interese.',
    action: 'Anota sus valores, productos y una razón real por la que te gustaría trabajar allí.',
    duration: '10 minutos'
  },
  {
    challenge: 'Responde a una pregunta difícil con STAR.',
    action: 'Escribe una respuesta sobre un conflicto o reto que hayas resuelto en formato STAR.',
    duration: '8 minutos'
  },
  {
    challenge: 'Diseña preguntas para el entrevistador o entrevistadora.',
    action: 'Crea dos preguntas inteligentes sobre el equipo, el proyecto o la cultura de la empresa.',
    duration: '6 minutos'
  }
];

/* ── Career paths (con ODS) ────────────────────────── */
const careerPaths = {
  comunicacion: {
    title: 'Comunicación y Creatividad',
    emoji: '🎨',
    description: 'Tienes talento para transmitir ideas, crear mensajes con impacto y conectar con las personas. El sector creativo y comunicativo tiene una demanda creciente de perfiles diversos.',
    options: ['Community Manager', 'Diseño de contenidos', 'Periodismo digital', 'Relaciones públicas', 'Producción audiovisual'],
    ods: [
      { num: 4, label: 'Educación de calidad', color: '#C5192D' },
      { num: 5, label: 'Igualdad de género', color: '#FF3A21' },
      { num: 16, label: 'Instituciones sólidas', color: '#00689D' }
    ],
    tip: '💡 La comunicación inclusiva y la divulgación de causas sociales son áreas con mucho futuro donde la diversidad de perfiles es una fortaleza.'
  },
  digital: {
    title: 'Marketing Digital y Datos',
    emoji: '📊',
    description: 'Combinas creatividad con análisis. Disfrutas midiendo resultados y optimizando estrategias con herramientas digitales. El mercado busca perfiles analíticos con visión de negocio.',
    options: ['Social Media Specialist', 'Analista de marketing', 'SEO / SEM', 'Analista de datos', 'E-commerce'],
    ods: [
      { num: 8, label: 'Trabajo decente', color: '#A21942' },
      { num: 9, label: 'Innovación e industria', color: '#FD6925' },
      { num: 17, label: 'Alianzas globales', color: '#19486A' }
    ],
    tip: '💡 El marketing de impacto y el análisis de datos son sectores en pleno crecimiento con alta demanda de talento joven y perspectivas diversas.'
  },
  administracion: {
    title: 'Administración y Gestión',
    emoji: '📋',
    description: 'Eres la persona que hace que todo funcione. Tu capacidad de organización y planificación es un activo muy valorado en cualquier tipo de organización, pública o privada.',
    options: ['Auxiliar administrativo/a', 'Gestión de proyectos', 'Control de calidad', 'Gestión de oficina', 'Administración pública'],
    ods: [
      { num: 8, label: 'Trabajo decente', color: '#A21942' },
      { num: 10, label: 'Reducción de desigualdades', color: '#DD1367' },
      { num: 16, label: 'Instituciones sólidas', color: '#00689D' }
    ],
    tip: '💡 La gestión eficiente es clave en proyectos sociales, ONG y empresas comprometidas con los ODS. Tu perfil tiene impacto real.'
  },
  tecnologia: {
    title: 'Tecnología y Programación',
    emoji: '💻',
    description: 'Piensas en soluciones, sistemas y código. Disfrutas construyendo herramientas que resuelven problemas reales. La tecnología necesita más perfiles diversos para crear un futuro más justo.',
    options: ['Desarrollo web', 'Ciberseguridad', 'Diseño UX / UI', 'Inteligencia artificial', 'Soporte técnico'],
    ods: [
      { num: 9, label: 'Innovación e industria', color: '#FD6925' },
      { num: 4, label: 'Educación de calidad', color: '#C5192D' },
      { num: 13, label: 'Acción por el clima', color: '#3F7E44' }
    ],
    tip: '💡 La tecnología sostenible, la IA responsable y la ciberseguridad son los campos con mayor proyección y más necesidad de talento diverso globalmente.'
  },
  recursoshumanos: {
    title: 'Personas y Talento',
    emoji: '🤝',
    description: 'Tu inteligencia emocional y capacidad de escucha son tu gran fortaleza. Generas confianza y ayudas a que los equipos crezcan. Los RRHH evolucionan hacia la diversidad y el bienestar.',
    options: ['Selección de personal', 'Formación y desarrollo', 'Gestión del talento', 'Orientación laboral', 'Bienestar organizacional'],
    ods: [
      { num: 5, label: 'Igualdad de género', color: '#FF3A21' },
      { num: 8, label: 'Trabajo decente', color: '#A21942' },
      { num: 10, label: 'Reducción de desigualdades', color: '#DD1367' }
    ],
    tip: '💡 Los RRHH modernos gestionan diversidad, inclusión y bienestar, áreas directamente vinculadas a los ODS 5 y 10. Tu perfil marca la diferencia.'
  }
};

/* ── Career quiz (4 pasos, lenguaje inclusivo) ─────── */
const careerQuiz = [
  {
    question: '¿Qué te mueve más cuando trabajas o estudias?',
    options: [
      { text: 'Crear contenidos, historias y comunicar ideas con impacto', profile: 'comunicacion' },
      { text: 'Analizar datos y medir resultados en entornos digitales', profile: 'digital' },
      { text: 'Organizar procesos y conseguir que todo funcione bien', profile: 'administracion' },
      { text: 'Programar, automatizar y construir soluciones técnicas', profile: 'tecnologia' },
      { text: 'Acompañar, formar y motivar a otras personas', profile: 'recursoshumanos' }
    ]
  },
  {
    question: '¿Cuál es tu mayor fortaleza natural?',
    options: [
      { text: 'Comunicar con claridad y creatividad', profile: 'comunicacion' },
      { text: 'Pensar con datos y detectar tendencias', profile: 'digital' },
      { text: 'Planificar, priorizar y ser metódico/metódica', profile: 'administracion' },
      { text: 'Resolver problemas técnicos con lógica', profile: 'tecnologia' },
      { text: 'Escuchar, empatizar y crear buen clima de equipo', profile: 'recursoshumanos' }
    ]
  },
  {
    question: 'Cuando trabajas en equipo, normalmente eres quien…',
    options: [
      { text: 'Diseña presentaciones y da voz a las ideas del grupo', profile: 'comunicacion' },
      { text: 'Propone métricas y analiza qué funciona mejor', profile: 'digital' },
      { text: 'Lleva el seguimiento de tareas y mantiene la agenda', profile: 'administracion' },
      { text: 'Busca y prueba soluciones técnicas para los problemas', profile: 'tecnologia' },
      { text: 'Escucha a todos los perfiles y cuida las relaciones', profile: 'recursoshumanos' }
    ]
  },
  {
    question: '¿Qué futuro te inspira más?',
    options: [
      { text: 'Un mundo con más voces diversas, cultura accesible y libertad de expresión', profile: 'comunicacion' },
      { text: 'Un mundo más conectado, innovador y con acceso digital para todos', profile: 'digital' },
      { text: 'Un mundo con organizaciones más eficientes, transparentes y justas', profile: 'administracion' },
      { text: 'Un mundo más sostenible gracias a la tecnología y la innovación', profile: 'tecnologia' },
      { text: 'Un mundo donde todas las personas puedan desarrollar su talento plenamente', profile: 'recursoshumanos' }
    ]
  }
];

const careerState = {
  index: 0,
  scores: { comunicacion: 0, digital: 0, administracion: 0, tecnologia: 0, recursoshumanos: 0 }
};

/* ── Image cycler per step ─────────────────────────── */
const timelineImages = {
  0: [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80'
  ],
  1: [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1531379410504-1b0f4f8f9f04?auto=format&fit=crop&w=1200&q=80'
  ],
  2: [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80'
  ],
  3: [
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80'
  ]
};

let imageCycler = { intervalId: null, currentIndex: 0 };

function startImageCycler() {
  stopImageCycler();
  const step = careerState.index;
  const imgs = timelineImages[step] || [];
  if (!imgs.length) return;
  const stepEl = document.querySelector(`.timeline-step[data-step="${step}"] .step-image`);
  if (!stepEl) return;
  imageCycler.currentIndex = 0;
  stepEl.style.backgroundImage = `url('${imgs[0]}')`;
  imageCycler.intervalId = setInterval(() => {
    imageCycler.currentIndex = (imageCycler.currentIndex + 1) % imgs.length;
    stepEl.style.backgroundImage = `url('${imgs[imageCycler.currentIndex]}')`;
  }, 3500);
}

function stopImageCycler() {
  if (imageCycler.intervalId) {
    clearInterval(imageCycler.intervalId);
    imageCycler.intervalId = null;
  }
}

/* ── Hub navigation ────────────────────────────────── */
function showStudentSection() {
  document.getElementById('hub-landing').hidden = true;
  document.getElementById('student-section').hidden = false;
  window.scrollTo({ top: 0, behavior: 'instant' });
  startStudentHeroRotation();
  resetCareerQuiz();
}

function showHub() {
  document.getElementById('student-section').hidden = true;
  document.getElementById('hub-landing').hidden = false;
  window.scrollTo({ top: 0, behavior: 'instant' });
  stopImageCycler();
}

/* ── Student hero rotation ─────────────────────────── */
let heroRotationId = null;

function startStudentHeroRotation() {
  if (heroRotationId) clearInterval(heroRotationId);
  let idx = 0;
  applyHeroTheme(idx);
  heroRotationId = setInterval(() => {
    idx = (idx + 1) % studentHeroThemes.length;
    applyHeroTheme(idx);
  }, 7000);
}

function applyHeroTheme(idx) {
  const hero = document.getElementById('stu-hero');
  const title = document.getElementById('stu-hero-title');
  const theme = studentHeroThemes[idx];
  if (hero) hero.style.backgroundImage = `url('${theme.image}')`;
  if (title) title.textContent = theme.title;
}

/* ── Progress bar ──────────────────────────────────── */
function updateProgressBar() {
  const fill  = document.getElementById('quiz-progress-fill');
  const label = document.getElementById('quiz-step');
  if (!fill || !label) return;
  const pct = (careerState.index / careerQuiz.length) * 100;
  fill.style.width = `${pct}%`;
  label.textContent = careerState.index >= careerQuiz.length
    ? 'Resultado'
    : `Paso ${careerState.index + 1} de ${careerQuiz.length}`;
}

/* ── Timeline progress ─────────────────────────────── */
function updateTimelineProgress() {
  document.querySelectorAll('.timeline-step').forEach((step, i) => {
    step.classList.toggle('active', i === careerState.index);
  });
  stopImageCycler();
  startImageCycler();
}

/* ── Populate step inline options ─────────────────── */
function populateStepActions() {
  document.querySelectorAll('.timeline-step').forEach((step, index) => {
    const actions = step.querySelector('.step-actions');
    if (!actions) return;
    if (index !== careerState.index) { actions.innerHTML = ''; return; }

    const item = careerQuiz[index];
    actions.innerHTML = item.options
      .map(o => `<button class="quiz-option" type="button" data-profile="${o.profile}">${o.text}</button>`)
      .join('');

    actions.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => handleOptionClick(btn));
    });
  });
}

function handleOptionClick(btn) {
  btn.classList.add('selected');
  setTimeout(() => {
    const profile = btn.dataset.profile;
    if (profile) careerState.scores[profile] += 1;
    careerState.index += 1;
    renderCareerQuestion();
  }, 180);
}

/* ── Render current quiz question ─────────────────── */
function renderCareerQuestion() {
  const questionEl = document.getElementById('career-quiz-text');
  const optionsEl  = document.getElementById('career-quiz-options');
  const restartBtn = document.getElementById('career-quiz-restart');
  const resultEl   = document.getElementById('career-quiz-result');

  if (!questionEl || !optionsEl || !restartBtn || !resultEl) return;

  updateProgressBar();
  updateTimelineProgress();

  if (careerState.index >= careerQuiz.length) {
    restartBtn.hidden = false;
    resultEl.hidden = false;
    showCareerResult();
    document.getElementById('career-quiz-card').hidden = true;
    return;
  }

  document.getElementById('career-quiz-card').hidden = false;
  resultEl.hidden = true;
  restartBtn.hidden = true;

  const item = careerQuiz[careerState.index];
  questionEl.textContent = item.question;

  optionsEl.innerHTML = item.options
    .map(o => `<button class="quiz-option" type="button" data-profile="${o.profile}">${o.text}</button>`)
    .join('');

  optionsEl.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => handleOptionClick(btn));
  });

  populateStepActions();
}

/* ── Get top profiles ──────────────────────────────── */
function getTopProfiles() {
  const sorted = Object.entries(careerState.scores).sort((a, b) => b[1] - a[1]);
  const topScore = sorted[0][1];
  if (topScore === 0) return [];
  return sorted.filter(([, s]) => s === topScore).map(([p]) => p);
}

/* ── Show result ───────────────────────────────────── */
function showCareerResult() {
  const resultEl = document.getElementById('career-quiz-result');
  if (!resultEl) return;

  const topProfiles = getTopProfiles();
  if (!topProfiles.length) {
    resultEl.innerHTML = '<p>No se obtuvo una preferencia clara. Pulsa "Repetir orientación" e inténtalo de nuevo.</p>';
    return;
  }

  const renderProfile = (profile) => {
    const p = careerPaths[profile];
    const odsBadges = p.ods
      .map(o => `<span class="ods-badge" style="--ods-color:${o.color}">ODS ${o.num} · ${o.label}</span>`)
      .join('');
    const chips = p.options
      .map(op => `<span class="career-chip">${op}</span>`)
      .join('');

    return `
      <div class="result-emoji">${p.emoji}</div>
      <h3 class="result-title">${p.title}</h3>
      <p class="result-desc">${p.description}</p>
      <span class="result-ods-label">Este perfil conecta con los ODS:</span>
      <div class="result-ods-badges">${odsBadges}</div>
      <div class="result-careers">${chips}</div>
      <div class="result-tip">${p.tip}</div>
    `;
  };

  if (topProfiles.length === 1) {
    resultEl.innerHTML = renderProfile(topProfiles[0]);
  } else {
    const blocks = topProfiles.map(prof => {
      const p = careerPaths[prof];
      const odsBadges = p.ods.map(o => `<span class="ods-badge" style="--ods-color:${o.color}">ODS ${o.num}</span>`).join('');
      const chips = p.options.map(op => `<span class="career-chip">${op}</span>`).join('');
      return `
        <div class="result-dual-block">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span style="font-size:1.8rem">${p.emoji}</span>
            <strong style="color:var(--violet)">${p.title}</strong>
          </div>
          <p style="margin:0 0 10px;color:var(--muted);font-size:0.9rem">${p.description}</p>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px">${odsBadges}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px">${chips}</div>
        </div>
      `;
    }).join('');

    resultEl.innerHTML = `
      <div style="font-size:2rem;margin-bottom:12px">🌟</div>
      <h3 class="result-title">¡Tienes un perfil doble!</h3>
      <p class="result-desc">Tus respuestas muestran afinidad con dos áreas. Ambas son tuyas.</p>
      ${blocks}
      <div class="result-tip">💡 Tener un perfil dual es una ventaja. Puedes explorar roles que combinen ambas áreas, o especializarte en la que más te llame ahora mismo.</div>
    `;
  }
}

/* ── Reset quiz ────────────────────────────────────── */
function resetCareerQuiz() {
  careerState.index = 0;
  careerState.scores = { comunicacion: 0, digital: 0, administracion: 0, tecnologia: 0, recursoshumanos: 0 };
  document.getElementById('career-quiz-card').hidden = false;
  document.getElementById('career-quiz-result').hidden = true;
  document.getElementById('career-quiz-restart').hidden = true;
  renderCareerQuestion();
}

function initCareerQuiz() {
  document.getElementById('career-quiz-restart')?.addEventListener('click', resetCareerQuiz);
  resetCareerQuiz();
}

/* ── Quick tools ───────────────────────────────────── */
function randomQuestion() {
  const item   = questions[Math.floor(Math.random() * questions.length)];
  const text   = document.getElementById('practice-text');
  const answer = document.getElementById('practice-answer');
  if (!text || !answer) return;
  text.textContent = item.question;
  text.hidden = false;
  answer.innerHTML = `
    <p><strong>Respuesta recomendada:</strong> ${item.good}</p>
    <p><strong>Evita:</strong> ${item.bad}</p>
  `;
  answer.hidden = false;
}

function randomChallenge() {
  const item   = challenges[Math.floor(Math.random() * challenges.length)];
  const text   = document.getElementById('challenge-text');
  const result = document.getElementById('challenge-result');
  if (!text || !result) return;
  text.textContent = item.challenge;
  text.hidden = false;
  result.innerHTML = `
    <p><strong>¿Qué tienes que hacer?</strong> ${item.action}</p>
    <p><strong>Duración:</strong> ${item.duration}</p>
  `;
  result.hidden = false;
}

/* ── Version management ────────────────────────────── */
function setSiteVersion(version) {
  document.querySelectorAll('.version-num').forEach(el => {
    el.textContent = version || '…';
  });
  const footer = document.querySelector('.version-num-footer');
  if (footer) footer.textContent = `v${version}`;
}

async function checkVersion() {
  const stored = localStorage.getItem('site-version');
  if (stored) setSiteVersion(stored);
  try {
    const res     = await fetch('version.txt', { cache: 'no-store' });
    const version = (await res.text()).trim();
    if (!version) return;
    setSiteVersion(version);
    const prev = localStorage.getItem('site-version');
    if (prev && prev !== version) {
      localStorage.setItem('site-version', version);
      window.location.reload();
      return;
    }
    localStorage.setItem('site-version', version);
  } catch {
    /* no critical */
  }
}

/* ── Service worker ────────────────────────────────── */
async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  try {
    const reg = await navigator.serviceWorker.register('/sw.js');
    let refreshing = false;
    reg.addEventListener('updatefound', () => {
      const nw = reg.installing;
      if (!nw) return;
      nw.addEventListener('statechange', () => {
        if (nw.state === 'installed' && navigator.serviceWorker.controller) window.location.reload();
      });
    });
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
  } catch {
    /* SW not critical */
  }
}

/* ── Init ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  /* Hub navigation */
  document.getElementById('go-student')?.addEventListener('click', showStudentSection);
  document.getElementById('back-to-hub')?.addEventListener('click', showHub);

  /* Student section hero CTA → scroll to quiz */
  document.getElementById('start-quiz-btn')?.addEventListener('click', () => {
    document.getElementById('career-quiz')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* Quick tools */
  document.getElementById('random-btn')?.addEventListener('click', randomQuestion);
  document.getElementById('challenge-btn')?.addEventListener('click', randomChallenge);

  /* Init quiz (so it's ready when student section opens) */
  initCareerQuiz();

  /* Version + SW */
  checkVersion();
  registerServiceWorker();
});
