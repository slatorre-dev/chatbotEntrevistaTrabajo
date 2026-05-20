const heroThemes = [
  {
    text: 'Tu mejor respuesta empieza con práctica.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    text: 'Responde seguro y crea mejor primera impresión.',
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1200&q=80'
  },
  {
    text: 'Prepara historias con ejemplos reales y claros.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
  }
];

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
    challenge: 'Prepara tu pitch personal en 60 segundos.',
    action: 'Escribe una presentación breve y practícala en voz alta.',
    duration: '5 minutos'
  },
  {
    challenge: 'Investiga una empresa local.',
    action: 'Anota sus valores, productos y una razón por la que te gustaría trabajar allí.',
    duration: '10 minutos'
  },
  {
    challenge: 'Responde a una pregunta difícil de entrevista.',
    action: 'Escribe una respuesta usando STAR para un problema o conflicto.',
    duration: '8 minutos'
  },
  {
    challenge: 'Diseña una pregunta para el entrevistador.',
    action: 'Crea dos preguntas inteligentes sobre el equipo o el proyecto.',
    duration: '6 minutos'
  }
];

const careerPaths = {
  comunicacion: {
    title: 'Comunicación y creatividad',
    description: 'Ideal si disfrutas transmitir ideas, contar historias y trabajar con equipos creativos.',
    options: ['Community Manager', 'Diseño de contenidos', 'Relaciones públicas']
  },
  digital: {
    title: 'Marketing digital',
    description: 'Perfecto si te gusta combinar creatividad con datos y trabajar con herramientas digitales.',
    options: ['Social Media', 'Analista de marketing', 'SEO/SEM']
  },
  administracion: {
    title: 'Administración y organización',
    description: 'Buen camino si te encuentras cómodo planificando tareas, ordenando procesos y apoyando equipos.',
    options: ['Auxiliar administrativo', 'Gestión de proyectos', 'Control de calidad']
  },
  tecnologia: {
    title: 'Tecnología y programación',
    description: 'Para quien disfruta resolver problemas técnicos, construir soluciones y aprender nuevas herramientas.',
    options: ['Desarrollador web', 'Soporte técnico', 'Diseño UX']
  },
  recursoshumanos: {
    title: 'Recursos Humanos y gestión de personas',
    description: 'Si prefieres trabajar con personas, talento y clima dentro de equipos, esta área es para ti.',
    options: ['Selección de personal', 'Formación', 'Gestión del talento']
  }
};

const careerQuiz = [
  {
    question: '¿Qué te motiva más cuando trabajas?',
    options: [
      { text: 'Compartir ideas y crear mensajes claros', profile: 'comunicacion' },
      { text: 'Diseñar soluciones que se vean y funcionen en internet', profile: 'digital' },
      { text: 'Mantener el orden y ayudar a que todo avance bien', profile: 'administracion' },
      { text: 'Resolver problemas con herramientas y tecnología', profile: 'tecnologia' },
      { text: 'Acompañar a personas para que se sientan bien en el trabajo', profile: 'recursoshumanos' }
    ]
  },
  {
    question: '¿Qué prefieres aprender en una semana?',
    options: [
      { text: 'Escribir, diseñar o contar historias atractivas', profile: 'comunicacion' },
      { text: 'Analizar datos y medir resultados en redes', profile: 'digital' },
      { text: 'Organizar actividades y reuniones con claridad', profile: 'administracion' },
      { text: 'Instalar, probar o programar herramientas nuevas', profile: 'tecnologia' },
      { text: 'Practicar entrevistas y ayudar con formación', profile: 'recursoshumanos' }
    ]
  },
  {
    question: 'Cuando trabajas en grupo, normalmente eres quien...',
    options: [
      { text: 'Expresa ideas y ayuda a convencer con palabras', profile: 'comunicacion' },
      { text: 'Propone campañas, diseños o contenidos digitales', profile: 'digital' },
      { text: 'Hace seguimiento de tareas y mantiene la agenda', profile: 'administracion' },
      { text: 'Busca soluciones técnicas y prueba nuevas opciones', profile: 'tecnologia' },
      { text: 'Escucha, organiza formaciones y cuida relaciones', profile: 'recursoshumanos' }
    ]
  },
  {
    question: 'Para ti, el éxito en un trabajo es...',
    options: [
      { text: 'Poder comunicar bien y sentirme creativo', profile: 'comunicacion' },
      { text: 'Ver resultados medibles y atraer atención online', profile: 'digital' },
      { text: 'Cumplir metas con procesos ordenados y claros', profile: 'administracion' },
      { text: 'Resolver problemas con lógica y tecnología', profile: 'tecnologia' },
      { text: 'Mejorar el ambiente y ayudar a crecer a otras personas', profile: 'recursoshumanos' }
    ]
  }
];

const careerState = {
  index: 0,
  scores: {
    comunicacion: 0,
    digital: 0,
    administracion: 0,
    tecnologia: 0,
    recursoshumanos: 0
  }
};

function updateTimelineProgress() {
  const steps = document.querySelectorAll('.timeline-step');
  steps.forEach((step, index) => {
    step.classList.toggle('active', index === careerState.index);
  });
}

function renderCareerQuestion() {
  const questionElement = document.getElementById('career-quiz-text');
  const optionsElement = document.getElementById('career-quiz-options');
  const stepElement = document.getElementById('quiz-step');
  const restartButton = document.getElementById('career-quiz-restart');
  const result = document.getElementById('career-quiz-result');

  if (!questionElement || !optionsElement || !stepElement || !result || !restartButton) return;

  updateTimelineProgress();

  if (careerState.index >= careerQuiz.length) {
    stepElement.textContent = `Resultado`;
    restartButton.hidden = false;
    showCareerResult();
    return;
  }

  const item = careerQuiz[careerState.index];
  stepElement.textContent = `Paso ${careerState.index + 1} de ${careerQuiz.length}`;
  questionElement.textContent = item.question;
  result.textContent = 'Responde todas las preguntas para obtener tu resultado.';
  restartButton.hidden = true;

  optionsElement.innerHTML = item.options
    .map(
      (option) => `<button class="quiz-option" type="button" data-profile="${option.profile}">${option.text}</button>`
    )
    .join('');

  optionsElement.querySelectorAll('.quiz-option').forEach((button) => {
    button.addEventListener('click', () => {
      const profile = button.dataset.profile;
      if (!profile) return;
      careerState.scores[profile] += 1;
      careerState.index += 1;
      renderCareerQuestion();
    });
  });
}

function getCareerResult() {
  const scores = Object.entries(careerState.scores);
  const sorted = scores.sort((a, b) => b[1] - a[1]);
  const topScore = sorted[0][1];
  if (topScore === 0) return [];
  return sorted.filter(([, score]) => score === topScore).map(([profile]) => profile);
}

function showCareerResult() {
  const resultElement = document.getElementById('career-quiz-result');
  if (!resultElement) return;

  const topProfiles = getCareerResult();
  if (!topProfiles.length) {
    resultElement.textContent = 'No se obtuvo una preferencia clara. Reinicia el reto y contesta otra vez.';
    return;
  }

  const recommendations = topProfiles.map((profile) => {
    const item = careerPaths[profile];
    return `
      <div class="career-result-block">
        <p><strong>${item.title}</strong></p>
        <p>${item.description}</p>
        <p><strong>Salidas recomendadas:</strong></p>
        <ul>${item.options.map((option) => `<li>${option}</li>`).join('')}</ul>
      </div>
    `;
  }).join('');

  const header = topProfiles.length > 1
    ? 'Tus respuestas muestran dos perfiles candidatos:'
    : 'Tu perfil más probable es:';

  resultElement.innerHTML = `
    <p><strong>${header}</strong></p>
    ${recommendations}
    <p class="quiz-tip"><strong>Reto extra:</strong> elige una de estas salidas y busca una oferta o proyecto donde puedas practicarla.</p>
  `;
}

function resetCareerQuiz() {
  careerState.index = 0;
  careerState.scores = {
    comunicacion: 0,
    digital: 0,
    administracion: 0,
    tecnologia: 0,
    recursoshumanos: 0
  };
  renderCareerQuestion();
}

function initCareerQuiz() {
  const restartButton = document.getElementById('career-quiz-restart');
  if (restartButton) {
    restartButton.addEventListener('click', resetCareerQuiz);
  }
  resetCareerQuiz();
}

function setHeroTheme(index) {
  const hero = document.getElementById('hero-image');
  const tag = document.getElementById('hero-tagline');
  const theme = heroThemes[index];
  if (!hero || !tag) return;
  hero.style.backgroundImage = `url('${theme.image}')`;
  tag.textContent = theme.text;
}

function randomQuestion() {
  const item = questions[Math.floor(Math.random() * questions.length)];
  const text = document.getElementById('practice-text');
  const answer = document.getElementById('practice-answer');
  if (!text || !answer) return;
  text.textContent = item.question;
  answer.innerHTML = `
    <p><strong>Respuesta recomendada:</strong> ${item.good}</p>
    <p><strong>Evita:</strong> ${item.bad}</p>
  `;
}

function randomChallenge() {
  const item = challenges[Math.floor(Math.random() * challenges.length)];
  const text = document.getElementById('challenge-text');
  const result = document.getElementById('challenge-result');
  if (!text || !result) return;
  text.textContent = item.challenge;
  result.innerHTML = `
    <p><strong>¿Qué tienes que hacer?</strong> ${item.action}</p>
    <p><strong>Duración:</strong> ${item.duration}</p>
  `;
}

function recommendCareer(profile) {
  const result = document.getElementById('career-result');
  if (!result) return;
  const item = careerPaths[profile];
  if (!item) {
    result.textContent = 'Elige un área para ver opciones profesionales.';
    return;
  }
  result.innerHTML = `
    <p><strong>${item.title}</strong></p>
    <p>${item.description}</p>
    <ul>${item.options.map((option) => `<li>${option}</li>`).join('')}</ul>
  `;
}

function startHeroRotation() {
  let index = 0;
  setHeroTheme(index);
  setInterval(() => {
    index = (index + 1) % heroThemes.length;
    setHeroTheme(index);
  }, 8000);
}

function initButton() {
  const button = document.getElementById('random-btn');
  if (!button) return;
  button.addEventListener('click', randomQuestion);
  const challengeButton = document.getElementById('challenge-btn');
  if (challengeButton) challengeButton.addEventListener('click', randomChallenge);
  initCareerQuiz();
}

async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      let refreshing = false;

      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            window.location.reload();
          }
        });
      });

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });
    } catch (error) {
      console.warn('Service worker registration failed:', error);
    }
  }
}

function setSiteVersion(version) {
  const badge = document.getElementById('site-version');
  if (badge) badge.textContent = version || 'desconocida';
}

async function checkVersion() {
  const storedVersion = localStorage.getItem('site-version');
  if (storedVersion) setSiteVersion(storedVersion);

  try {
    const response = await fetch('version.txt', { cache: 'no-store' });
    const version = (await response.text()).trim();
    if (!version) return;

    setSiteVersion(version);

    const previous = localStorage.getItem('site-version');
    if (previous && previous !== version) {
      localStorage.setItem('site-version', version);
      window.location.reload();
      return;
    }
    localStorage.setItem('site-version', version);
  } catch (error) {
    console.warn('No se pudo comprobar la versión:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  startHeroRotation();
  initButton();
  registerServiceWorker();
  checkVersion();
  const practiceQuestion = document.getElementById('practice-question');
  if (practiceQuestion) {
    practiceQuestion.addEventListener('click', () => {
      randomQuestion();
      document.getElementById('random-btn')?.scrollIntoView({behavior:'smooth', block:'center'});
    });
  }
});
