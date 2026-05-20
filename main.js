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
}

document.addEventListener('DOMContentLoaded', () => {
  startHeroRotation();
  initButton();
  const practiceQuestion = document.getElementById('practice-question');
  if (practiceQuestion) {
    practiceQuestion.addEventListener('click', () => {
      randomQuestion();
      document.getElementById('random-btn')?.scrollIntoView({behavior:'smooth', block:'center'});
    });
  }
});
