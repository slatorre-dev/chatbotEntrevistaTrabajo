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
    description: 'Ideal si disfrutas hablar, escribir y trabajar con ideas. Estas salidas combinan comunicación y gestión de proyectos.',
    options: ['Community Manager', 'Diseño de contenidos', 'Relaciones públicas']
  },
  digital: {
    title: 'Marketing digital',
    description: 'Perfecto si te interesa la creatividad online, redes sociales y análisis de datos.',
    options: ['Social Media', 'Analista de marketing', 'SEO/SEM']
  },
  administracion: {
    title: 'Administración y organización',
    description: 'Buen camino si te gusta el orden, la gestión de equipos y el trabajo con documentación y procesos.',
    options: ['Auxiliar administrativo', 'Gestión de proyectos', 'Control de calidad']
  },
  tecnologia: {
    title: 'Tecnología y programación',
    description: 'Para quien disfruta resolver problemas, crear apps y trabajar con nuevas herramientas digitales.',
    options: ['Desarrollador web', 'Soporte técnico', 'Diseño UX']
  },
  recursoshumanos: {
    title: 'Recursos Humanos y gestión de personas',
    description: 'Si te interesa el talento, la formación y el acompañamiento de equipos, esta área es muy atractiva.',
    options: ['Selección de personal', 'Formación', 'Gestión del talento']
  }
};

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
  document.querySelectorAll('.career-option').forEach((button) => {
    button.addEventListener('click', () => recommendCareer(button.dataset.profile));
  });
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

async function checkVersion() {
  try {
    const response = await fetch('version.txt', { cache: 'no-store' });
    const version = (await response.text()).trim();
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
