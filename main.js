/* ══ ODS INFO ═══════════════════════════════════════ */
const odsInfo = {
  3:  { label: 'Salud y bienestar',          color: '#4C9F38' },
  4:  { label: 'Educación de calidad',        color: '#C5192D' },
  5:  { label: 'Igualdad de género',          color: '#FF3A21' },
  8:  { label: 'Trabajo decente',             color: '#A21942' },
  9:  { label: 'Industria e innovación',      color: '#FD6925' },
  10: { label: 'Reducción desigualdades',     color: '#DD1367' },
  13: { label: 'Acción por el clima',         color: '#3F7E44' },
  17: { label: 'Alianzas globales',           color: '#19486A' },
};

/* ══ 5 PERFILES ALUMNADO — IES Juan Bosco Alcázar ══ */
const students = [
  {
    id: 1,
    initials: 'MT',
    avatarColor: '#ff5c1a',
    name: 'Marcos Torres Ruiz',
    cycle: 'CFGM Electrónica y Automatismo',
    school: 'IES Juan Bosco · Alcázar de San Juan',
    available: true,
    availableDate: 'Sep 2025',
    location: 'Alcázar de San Juan, Castilla-La Mancha',
    github: 'marcos-torres',
    about: 'Alumno de 2º CFGM Electrónica y Automatismo. Apasionado del IoT, la domótica y la automatización industrial. Busco FCT en empresa del sector electrónico o industrial donde poder aprender de profesionales del sector.',
    skills: [
      { name: 'Soldadura SMD',      level: 'avanzado' },
      { name: 'Osciloscopio',       level: 'avanzado' },
      { name: 'Arduino / ESP32',    level: 'avanzado' },
      { name: 'Proteus / ARES',     level: 'medio' },
      { name: 'PLCs Siemens S7',    level: 'medio' },
      { name: 'Python básico',      level: 'basico' },
    ],
    projects: [
      { icon: '🌡️', title: 'Sistema IoT Colmena', desc: 'Sensorización ESP32 + MQTT + Grafana para monitorización remota de colmenas', tags: ['ESP32', 'IoT', 'Python', 'MQTT'] },
      { icon: '⚙️', title: 'CNC Router PCB',      desc: 'Fresado de PCBs con GRBL/Candle y compensación de altura por sonda Z automática', tags: ['CNC', 'GRBL', 'FlatCAM'] },
    ],
    verifiedBy: { name: 'Prof. S. Domínguez', skills: 6 },
    ods: [9, 4, 13],
  },
  {
    id: 2,
    initials: 'LH',
    avatarColor: '#3a9bdc',
    name: 'Lucía Herrero Sánchez',
    cycle: 'CFGS Administración y Finanzas',
    school: 'IES Juan Bosco · Alcázar de San Juan',
    available: true,
    availableDate: 'Feb 2025',
    location: 'Alcázar de San Juan, Castilla-La Mancha',
    linkedin: 'lucia-herrero-sanchez',
    about: 'Alumna de 2º CFGS Administración y Finanzas. Me apasiona la contabilidad analítica, la gestión fiscal y el análisis financiero. Busco FCT en empresa o asesoría con proyección, donde contribuir con rigor y organización.',
    skills: [
      { name: 'Excel Avanzado',     level: 'avanzado' },
      { name: 'Contabilidad',       level: 'avanzado' },
      { name: 'Nóminas / IRPF',    level: 'avanzado' },
      { name: 'ERP Holded / SAGE', level: 'medio' },
      { name: 'Inglés B2',          level: 'medio' },
      { name: 'Power BI básico',    level: 'basico' },
    ],
    projects: [
      { icon: '📊', title: 'Análisis P&L Empresa',   desc: 'Análisis completo de cuenta de resultados y propuesta de mejora de márgenes para empresa ficticia', tags: ['Excel', 'Contabilidad', 'Análisis'] },
      { icon: '📋', title: 'Gestión Nóminas 20 emp.', desc: 'Simulación de nóminas con retenciones IRPF, cotización SS y liquidación mensual para 20 personas', tags: ['Nóminas', 'IRPF', 'SAGE'] },
    ],
    verifiedBy: { name: 'Prof. M. Ortega', skills: 5 },
    ods: [5, 8, 10],
  },
  {
    id: 3,
    initials: 'AB',
    avatarColor: '#2dcc7a',
    name: 'Ahmed Benali',
    cycle: 'CFGM Sistemas Microinformáticos y Redes',
    school: 'IES Juan Bosco · Alcázar de San Juan',
    available: false,
    availableDate: 'Sep 2025',
    location: 'Alcázar de San Juan, Castilla-La Mancha',
    github: 'ahmed-benali-dev',
    about: 'Alumno de 1º CFGM Sistemas Microinformáticos y Redes. Me interesa especialmente la ciberseguridad y la administración de sistemas Linux. Disponible para FCT el próximo curso; actualmente completando módulos de primer año.',
    skills: [
      { name: 'Redes TCP/IP',       level: 'avanzado' },
      { name: 'Linux (Ubuntu)',      level: 'medio' },
      { name: 'Windows Server',      level: 'medio' },
      { name: 'Ciberseguridad',      level: 'medio' },
      { name: 'Python scripting',    level: 'basico' },
      { name: 'Inglés B1',           level: 'basico' },
    ],
    projects: [
      { icon: '🔒', title: 'Red VLAN doméstica',    desc: 'Segmentación de red con VLANs, switch TP-Link gestionable y router Mikrotik para separar tráfico IoT', tags: ['VLAN', 'Mikrotik', 'Seguridad'] },
      { icon: '🖥️', title: 'Home Lab con Docker',  desc: 'Servidor Raspberry Pi 4 con Docker, Pi-hole, Nextcloud y monitorización con Uptime Kuma', tags: ['Linux', 'Docker', 'Self-hosting'] },
    ],
    verifiedBy: { name: 'Prof. R. Pérez', skills: 4 },
    ods: [4, 9, 17],
  },
  {
    id: 4,
    initials: 'SL',
    avatarColor: '#a855f7',
    name: 'Sara López Martínez',
    cycle: 'CFGM Cuidados Auxiliares de Enfermería',
    school: 'IES Juan Bosco · Alcázar de San Juan',
    available: true,
    availableDate: 'Ene 2025',
    location: 'Alcázar de San Juan, Castilla-La Mancha',
    about: 'Alumna de 2º CFGM Cuidados Auxiliares de Enfermería. Vocación clara hacia la atención geriátrica y la atención a la dependencia. Busco FCT en residencia de mayores o centro de salud de la comarca para adquirir experiencia real en entornos clínicos.',
    skills: [
      { name: 'Cuidados básicos',    level: 'avanzado' },
      { name: 'Primeros auxilios',   level: 'avanzado' },
      { name: 'Higiene y movil.',    level: 'avanzado' },
      { name: 'Gerontología',        level: 'medio' },
      { name: 'Registro clínico',    level: 'medio' },
      { name: 'Inglés A2',           level: 'basico' },
    ],
    projects: [
      { icon: '❤️', title: 'Protocolo ACP',           desc: 'Diseño de protocolo de Atención Centrada en la Persona para residencia de 40 plazas', tags: ['Gerontología', 'ACP', 'Protocolos'] },
      { icon: '🏥', title: 'Formación RCP al aula',   desc: 'Taller práctico de reanimación cardiopulmonar básica impartido a compañeros y compañeras de ciclo', tags: ['RCP', 'Primeros auxilios', 'Formación'] },
    ],
    verifiedBy: { name: 'Prof. A. Morales', skills: 6 },
    ods: [3, 5, 10],
  },
  {
    id: 5,
    initials: 'DR',
    avatarColor: '#06b6d4',
    name: 'Diego Ramírez Castro',
    cycle: 'CFGS Desarrollo de Aplicaciones Web',
    school: 'IES Juan Bosco · Alcázar de San Juan',
    available: true,
    availableDate: 'Mar 2025',
    location: 'Alcázar de San Juan, Castilla-La Mancha',
    github: 'diegoram-dev',
    about: 'Alumno de 2º CFGS DAW. Me apasiona el desarrollo frontend y la experiencia de usuario. Contribuyo a proyectos open source y busco FCT en empresa de desarrollo o agencia digital donde poder crecer dentro de un equipo real.',
    skills: [
      { name: 'JavaScript / React', level: 'avanzado' },
      { name: 'HTML5 / CSS3',       level: 'avanzado' },
      { name: 'Git / GitHub',       level: 'avanzado' },
      { name: 'PHP / Laravel',      level: 'medio' },
      { name: 'MySQL',              level: 'medio' },
      { name: 'Figma / UX',         level: 'basico' },
    ],
    projects: [
      { icon: '🛒', title: 'E-commerce artesanía local', desc: 'Tienda online con carrito, pagos Stripe y panel de administración. Stack: React + Laravel + MySQL', tags: ['React', 'Laravel', 'MySQL', 'Stripe'] },
      { icon: '📱', title: 'App eventos culturales',     desc: 'Plataforma de gestión de eventos culturales de la comarca con mapa interactivo Leaflet', tags: ['JavaScript', 'Leaflet', 'PHP'] },
    ],
    verifiedBy: { name: 'Prof. J. García', skills: 7 },
    ods: [9, 4, 8],
  },
];

/* ══ OFERTAS FCT — comarca Alcázar de San Juan ══════ */
const mockOffers = [
  {
    id: 1, logo: '⚙️', company: 'Grupo Industrial CLM', sector: 'Industria & Automatización',
    title: 'FCT Técnico/a Electrónica y Automatismo', type: 'FCT',
    cycle: 'CFGM Electrónica y Automatismo', location: 'Alcázar de San Juan', duration: '400 h', start: 'Sep 2025',
    description: 'Empresa agroalimentaria de la comarca busca alumno/a de CFGM Electrónica para FCT. Colaborará en mantenimiento de PLCs Siemens S7, sistemas de control de líneas de producción y diagnóstico de fallos electrónicos.',
    requirements: ['CFGM Electrónica cursando', 'Conocimientos básicos de PLCs', 'Disponibilidad en turno de mañana', 'Carnet de conducir (valorable)'],
  },
  {
    id: 2, logo: '💻', company: 'Digital Agency Sur', sector: 'Desarrollo Web & Marketing Digital',
    title: 'FCT Desarrollador/a Web Frontend', type: 'FCT',
    cycle: 'CFGS Desarrollo de Aplicaciones Web', location: 'Tomelloso / Teletrabajo', duration: '370 h', start: 'Mar 2025',
    description: 'Agencia digital de la comarca busca alumno/a de DAW para FCT en proyectos reales de clientes locales. Trabajará en interfaces con React, optimización de webs WordPress y testing de funcionalidades.',
    requirements: ['CFGS DAW cursando', 'HTML / CSS / JavaScript básico', 'Git y control de versiones', 'Actitud proactiva y ganas de aprender'],
  },
  {
    id: 3, logo: '❤️', company: 'Residencia "La Mancha"', sector: 'Servicios Sociales & Salud',
    title: 'FCT Auxiliar de Cuidados', type: 'FCT',
    cycle: 'CFGM Cuidados Auxiliares de Enfermería', location: 'Alcázar de San Juan', duration: '400 h', start: 'Ene 2025',
    description: 'Residencia de 120 plazas busca alumno/a de CAE para FCT con supervisión directa de enfermería. Participará en cuidados básicos, higiene, movilizaciones y registros. Posibilidad de incorporación posterior.',
    requirements: ['CFGM CAE cursando', 'Sensibilidad hacia personas mayores', 'Certificado de delitos sexuales', 'Vacunación hepatitis B recomendable'],
  },
  {
    id: 4, logo: '📋', company: 'Gestoría Manchega SL', sector: 'Asesoría & Administración',
    title: 'Técnico/a Administrativo/a Junior', type: 'Empleo',
    cycle: 'CFGS Administración y Finanzas', location: 'Alcázar de San Juan', duration: 'Jornada completa', start: 'Inmediata',
    description: 'Gestoría con 25 años de experiencia en la comarca incorpora técnico/a administrativo/a. Contrato de 6 meses con opción a indefinido. Trabajo con SAGE 50, contabilidad, nóminas y atención al cliente presencial.',
    requirements: ['CFGS Administración y Finanzas', 'Conocimiento de SAGE 50 o similar', 'Experiencia o prácticas previas valorables', 'Atención al cliente presencial'],
  },
];

/* ══ TUTOR — tabla seguimiento ══════════════════════ */
const mockStudentsTable = [
  { initials:'MT', name:'Marcos Torres Ruiz',    cycle:'CFGM Electrónica',      company:'Grupo Industrial CLM',  status:'en-curso',  label:'En Curso',          weeks:'8/16' },
  { initials:'LH', name:'Lucía Herrero Sánchez', cycle:'CFGS Adm. y Finanzas',  company:'Gestoría Manchega SL',  status:'firmado',   label:'Convenio Firmado',  weeks:'—' },
  { initials:'AB', name:'Ahmed Benali',           cycle:'CFGM SMR',              company:'Pendiente asignación',  status:'pendiente', label:'Pendiente',         weeks:'—' },
  { initials:'SL', name:'Sara López Martínez',    cycle:'CFGM CAE',              company:'Residencia La Mancha',  status:'en-curso',  label:'En Curso',          weeks:'12/16' },
  { initials:'DR', name:'Diego Ramírez Castro',   cycle:'CFGS DAW',              company:'Digital Agency Sur',    status:'firmado',   label:'Convenio Firmado',  weeks:'—' },
];

/* ══ CAREER QUIZ DATA ═══════════════════════════════ */
const careerQuiz = [
  {
    question: '¿Qué te mueve más cuando trabajas o estudias?',
    options: [
      { text: 'Crear contenidos, historias y comunicar ideas con impacto',         profile: 'comunicacion' },
      { text: 'Analizar datos y medir resultados en entornos digitales',            profile: 'digital' },
      { text: 'Organizar procesos y conseguir que todo funcione bien',              profile: 'administracion' },
      { text: 'Programar, automatizar y construir soluciones técnicas',             profile: 'tecnologia' },
      { text: 'Acompañar, formar y motivar a otras personas',                       profile: 'recursoshumanos' },
    ]
  },
  {
    question: '¿Cuál es tu mayor fortaleza natural?',
    options: [
      { text: 'Comunicar con claridad y creatividad',                               profile: 'comunicacion' },
      { text: 'Pensar con datos y detectar tendencias',                             profile: 'digital' },
      { text: 'Planificar, priorizar y ser metódico/metódica',                     profile: 'administracion' },
      { text: 'Resolver problemas técnicos con lógica',                             profile: 'tecnologia' },
      { text: 'Escuchar, empatizar y crear buen clima de equipo',                  profile: 'recursoshumanos' },
    ]
  },
  {
    question: 'Cuando trabajas en equipo, normalmente eres quien…',
    options: [
      { text: 'Diseña las presentaciones y da voz a las ideas del grupo',           profile: 'comunicacion' },
      { text: 'Propone métricas y analiza qué estrategia funciona mejor',           profile: 'digital' },
      { text: 'Lleva el seguimiento de tareas y mantiene la agenda al día',         profile: 'administracion' },
      { text: 'Busca y prueba soluciones técnicas para los problemas',              profile: 'tecnologia' },
      { text: 'Escucha a todos los perfiles y cuida las relaciones del equipo',     profile: 'recursoshumanos' },
    ]
  },
  {
    question: '¿Qué futuro te inspira más?',
    options: [
      { text: 'Un mundo con más voces diversas, cultura accesible y libertad de expresión', profile: 'comunicacion' },
      { text: 'Un mundo más conectado, innovador y con acceso digital para todos',          profile: 'digital' },
      { text: 'Un mundo con organizaciones más eficientes, transparentes y justas',         profile: 'administracion' },
      { text: 'Un mundo más sostenible gracias a la tecnología y la innovación',            profile: 'tecnologia' },
      { text: 'Un mundo donde todas las personas puedan desarrollar su talento',            profile: 'recursoshumanos' },
    ]
  },
];

const careerPaths = {
  comunicacion: {
    emoji: '🎨', title: 'Comunicación y Creatividad',
    description: 'Tienes talento para transmitir ideas, crear mensajes con impacto y conectar con las personas. El sector creativo y comunicativo demanda perfiles diversos con perspectiva fresca.',
    options: ['Community Manager', 'Diseño de contenidos', 'Periodismo digital', 'Relaciones públicas', 'Producción audiovisual'],
    ods: [4, 5, 16],
    tip: '💡 La comunicación inclusiva y la divulgación de causas sociales son áreas en auge donde la diversidad de perfiles es una fortaleza, no una excepción.',
  },
  digital: {
    emoji: '📊', title: 'Marketing Digital y Datos',
    description: 'Combinas creatividad con análisis. Disfrutas midiendo resultados y optimizando estrategias con herramientas digitales. Alta demanda de perfiles analíticos con visión de negocio.',
    options: ['Social Media Specialist', 'Analista de marketing', 'SEO / SEM', 'Analista de datos', 'E-commerce'],
    ods: [8, 9, 17],
    tip: '💡 El marketing de impacto y el análisis de datos son sectores en pleno crecimiento con alta necesidad de talento joven y perspectivas diversas.',
  },
  administracion: {
    emoji: '📋', title: 'Administración y Gestión',
    description: 'Eres la persona que hace que todo funcione. Tu capacidad de organización y planificación es un activo muy valorado en cualquier tipo de organización, pública o privada.',
    options: ['Auxiliar administrativo/a', 'Gestión de proyectos', 'Control de calidad', 'Gestión de oficina', 'Administración pública'],
    ods: [8, 10, 16],
    tip: '💡 La gestión eficiente es clave en proyectos sociales, ONG y empresas comprometidas con los ODS. Tu perfil tiene impacto real más allá de la oficina.',
  },
  tecnologia: {
    emoji: '💻', title: 'Tecnología y Programación',
    description: 'Piensas en soluciones, sistemas y código. Disfrutas construyendo herramientas que resuelven problemas reales. La tecnología necesita más perfiles diversos para crear un futuro más justo.',
    options: ['Desarrollo web', 'Ciberseguridad', 'Diseño UX / UI', 'Inteligencia artificial', 'Soporte técnico'],
    ods: [9, 4, 13],
    tip: '💡 La tecnología sostenible, la IA responsable y la ciberseguridad son los campos con mayor proyección y más necesidad de talento diverso a nivel global.',
  },
  recursoshumanos: {
    emoji: '🤝', title: 'Personas y Talento',
    description: 'Tu inteligencia emocional y tu capacidad de escucha son tu gran fortaleza. Generas confianza y ayudas a que los equipos crezcan. Los RRHH modernos apuestan por la diversidad y el bienestar.',
    options: ['Selección de personal', 'Formación y desarrollo', 'Gestión del talento', 'Orientación laboral', 'Bienestar organizacional'],
    ods: [5, 8, 10],
    tip: '💡 Los RRHH modernos gestionan diversidad, inclusión y bienestar, áreas directamente vinculadas a los ODS 5 y 10. Tu perfil marca la diferencia.',
  },
};

const careerState = {
  index: 0,
  scores: { comunicacion:0, digital:0, administracion:0, tecnologia:0, recursoshumanos:0 },
};

/* ══ TIMELINE IMAGE CYCLER ══════════════════════════ */
const timelineImages = {
  0: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80'],
  1: ['https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1531379410504-1b0f4f8f9f04?auto=format&fit=crop&w=1200&q=80'],
  2: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80'],
  3: ['https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80'],
};
let imageCycler = { intervalId: null, currentIndex: 0 };

function startImageCycler() {
  stopImageCycler();
  const imgs = timelineImages[careerState.index] || [];
  if (!imgs.length) return;
  const el = document.querySelector(`.timeline-step[data-step="${careerState.index}"] .step-image`);
  if (!el) return;
  imageCycler.currentIndex = 0;
  el.style.backgroundImage = `url('${imgs[0]}')`;
  imageCycler.intervalId = setInterval(() => {
    imageCycler.currentIndex = (imageCycler.currentIndex + 1) % imgs.length;
    el.style.backgroundImage = `url('${imgs[imageCycler.currentIndex]}')`;
  }, 3500);
}
function stopImageCycler() {
  if (imageCycler.intervalId) { clearInterval(imageCycler.intervalId); imageCycler.intervalId = null; }
}

/* ══ NAVIGATION ═════════════════════════════════════ */
function switchView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId)?.classList.add('active');
  document.querySelectorAll('.nav-links button[data-nav="view"]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === viewId);
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (viewId === 'view-offers') renderOffers();
  if (viewId === 'view-tutor')  renderTutorPanel();
  if (viewId === 'view-student') {
    switchSubView('sub-directory');
    renderStudentDirectory();
  }
}

function switchSubView(subId) {
  document.querySelectorAll('.sub-view').forEach(v => v.classList.remove('active'));
  document.getElementById(subId)?.classList.add('active');
  document.querySelectorAll('.sidebar-item[data-nav="sub"]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === subId);
  });
  if (subId === 'sub-quiz') { stopImageCycler(); startImageCycler(); }
  else { stopImageCycler(); }
}

/* ══ STUDENT DIRECTORY ══════════════════════════════ */
function renderStudentDirectory() {
  const grid = document.getElementById('student-grid');
  if (!grid) return;
  grid.innerHTML = students.map(s => {
    const ods = (s.ods || []).map(n => `<span class="oc-mini c${n}" title="ODS ${n}">${n}</span>`).join('');
    const topSkills = s.skills.slice(0, 3).map(sk => `<span class="skill-mini ${sk.level}">${sk.name}</span>`).join('');
    return `
      <div class="student-card" data-student-id="${s.id}">
        <div class="student-card-top">
          <div class="avatar-lg" style="background:${s.avatarColor}">${s.initials}</div>
          <div>
            <div class="sc-name">${s.name}</div>
            <div class="sc-cycle">${s.cycle}</div>
          </div>
          ${s.available ? '<span class="sc-badge">FCT Disponible</span>' : ''}
        </div>
        <div class="sc-skills">${topSkills}</div>
        <div class="sc-ods">${ods}</div>
        <div class="sc-cta">Ver perfil →</div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.student-card').forEach(card => {
    card.addEventListener('click', () => {
      const student = students.find(s => s.id === parseInt(card.dataset.studentId));
      if (!student) return;
      renderStudentProfile(student);
      switchSubView('sub-profile');
      document.querySelectorAll('.sidebar-item[data-nav="sub"]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.target === 'sub-profile');
      });
    });
  });
}

/* ══ STUDENT PROFILE ════════════════════════════════ */
function renderStudentProfile(student) {
  const odsBadges = (student.ods || []).map(n => {
    const o = odsInfo[n] || {};
    return `<span class="ods-badge" style="--ods-color:${o.color}">ODS ${n} · ${o.label}</span>`;
  }).join('');

  const skills = student.skills.map(s =>
    `<span class="skill-tag ${s.level}"><span class="skill-dot"></span>${s.name}</span>`
  ).join('');

  const projects = student.projects.map(p => `
    <div class="project-card">
      <div class="project-thumb">${p.icon}</div>
      <div class="project-info">
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');

  const github   = student.github   ? `<a href="#" style="font-size:13px;color:var(--orange);display:flex;gap:8px">💻 GitHub: /${student.github}</a>` : '';
  const linkedin = student.linkedin ? `<a href="#" style="font-size:13px;color:var(--blue);display:flex;gap:8px">💼 LinkedIn: ${student.linkedin}</a>` : '';

  document.getElementById('profile-content').innerHTML = `
    <div class="profile-header">
      <div class="profile-header-bg"></div>
      <div class="profile-header-content">
        <div class="avatar" style="background:${student.avatarColor}">${student.initials}</div>
        <div class="profile-info">
          <h2>${student.name}</h2>
          <div class="profile-meta">
            <span class="meta-tag">📚 ${student.cycle}</span>
            <span class="meta-tag">🏫 ${student.school}</span>
            ${student.available
              ? '<span class="meta-tag badge-available">✓ Disponible para FCT</span>'
              : '<span class="meta-tag">En prácticas</span>'}
          </div>
        </div>
        <div class="profile-actions">
          <button class="btn-ghost">Contactar</button>
        </div>
      </div>
    </div>

    <div class="profile-grid">
      <div>
        <div class="card">
          <div class="card-title">Habilidades técnicas</div>
          <div class="skills-grid">${skills}</div>
          <div class="skills-legend">
            <span style="color:var(--orange)">● Avanzado</span>
            <span style="color:var(--blue)">● Medio</span>
            <span style="color:var(--muted)">● Básico</span>
          </div>
        </div>
        <div class="card">
          <div class="card-title">Proyectos destacados</div>
          <div class="projects-grid">${projects}</div>
        </div>
      </div>
      <div>
        <div class="card">
          <div class="card-title">Sobre mí</div>
          <p style="font-size:14px;color:var(--text-dim);line-height:1.7">${student.about}</p>
          <div style="margin-top:16px;display:flex;flex-direction:column;gap:8px">
            <span style="font-size:13px;color:var(--text-dim)">📍 ${student.location}</span>
            <span style="font-size:13px;color:var(--text-dim)">📅 Disponible: ${student.availableDate}</span>
            ${github}${linkedin}
          </div>
        </div>
        <div class="card">
          <div class="card-title">ODS relacionados</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">${odsBadges}</div>
        </div>
        <div class="card">
          <div class="card-title">Verificado por</div>
          <div class="verified-block">
            <div class="verified-icon">🏫</div>
            <div>
              <div style="font-size:13px;font-weight:600">${student.school}</div>
              <div style="font-size:11px;color:var(--green)">✓ Centro verificado · Ciclo acreditado</div>
            </div>
          </div>
          ${student.verifiedBy ? `
          <div class="verified-block" style="margin-top:8px">
            <div class="verified-icon" style="background:var(--blue)">👨‍🏫</div>
            <div>
              <div style="font-size:13px;font-weight:600">${student.verifiedBy.name}</div>
              <div style="font-size:11px;color:var(--blue)">✓ Avala ${student.verifiedBy.skills} competencias técnicas</div>
            </div>
          </div>` : ''}
        </div>
      </div>
    </div>
  `;
}

/* ══ OFFERS ═════════════════════════════════════════ */
let selectedOffer = mockOffers[0];

function renderOffers() {
  const listEl  = document.getElementById('offers-list');
  const countEl = document.getElementById('offers-count');
  if (!listEl) return;
  countEl.textContent = `${mockOffers.length} ofertas encontradas`;
  listEl.innerHTML = mockOffers.map(o => `
    <div class="offer-item ${selectedOffer?.id === o.id ? 'selected' : ''}" data-offer-id="${o.id}">
      <div class="offer-company">${o.company}</div>
      <div class="offer-title">${o.title}</div>
      <div class="offer-meta-row">
        <span class="offer-chip ${o.type === 'FCT' ? 'fct' : 'empleo'}">${o.type}</span>
        <span class="offer-chip">📍 ${o.location}</span>
        <span class="offer-chip">⏱ ${o.duration}</span>
      </div>
    </div>
  `).join('');
  listEl.querySelectorAll('.offer-item').forEach(item => {
    item.addEventListener('click', () => {
      selectedOffer = mockOffers.find(o => o.id === parseInt(item.dataset.offerId));
      renderOffers();
    });
  });
  renderOfferDetail();
}

function renderOfferDetail() {
  const el = document.getElementById('offer-detail');
  if (!el || !selectedOffer) return;
  const o = selectedOffer;
  el.innerHTML = `
    <div class="company-header">
      <div class="company-logo">${o.logo}</div>
      <div><div class="company-name bebas">${o.company}</div><div class="company-sector">${o.sector}</div></div>
    </div>
    <h2 class="offer-detail-title bebas">${o.title}</h2>
    <div class="offer-chips-row">
      <span class="offer-chip ${o.type === 'FCT' ? 'fct' : 'empleo'}">${o.type}</span>
      <span class="offer-chip">📍 ${o.location}</span>
      <span class="offer-chip">⏱ ${o.duration}</span>
      <span class="offer-chip">📚 ${o.cycle}</span>
      <span class="offer-chip">📅 ${o.start}</span>
    </div>
    <div class="detail-section"><h4>Descripción</h4><p>${o.description}</p></div>
    <div class="detail-section">
      <h4>Requisitos</h4>
      <ul class="req-list">${o.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
    </div>
    <button class="apply-btn">Aplicar a esta oferta →</button>
  `;
}

/* ══ TUTOR PANEL ════════════════════════════════════ */
function renderTutorPanel() {
  const statsEl = document.getElementById('tutor-stats');
  if (statsEl) {
    const stats = [
      { num: '5', label: 'Alumnos en seguimiento' },
      { num: '4', label: 'Empresas activas' },
      { num: '1', label: 'Convenios pendientes' },
      { num: '96%', label: 'Satisfacción empresas' },
    ];
    statsEl.innerHTML = stats.map(s => `
      <div class="stat-card">
        <div class="stat-card-num bebas">${s.num}</div>
        <div class="stat-card-label">${s.label}</div>
      </div>
    `).join('');
  }

  const tbody = document.getElementById('tutor-table-body');
  if (tbody) {
    tbody.innerHTML = mockStudentsTable.map(s => `
      <tr>
        <td>
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:32px;height:32px;background:var(--orange);display:flex;align-items:center;justify-content:center;font-size:12px;color:#000;font-weight:700;flex-shrink:0">${s.initials}</div>
            <span style="color:var(--text)">${s.name}</span>
          </div>
        </td>
        <td>${s.cycle}</td>
        <td>${s.company}</td>
        <td><span class="status-pill ${s.status}">${s.label}</span></td>
        <td style="font-family:monospace">${s.weeks}</td>
        <td><div style="display:flex;gap:8px">
          <button class="btn-ghost" style="padding:4px 12px;font-size:11px">Ver</button>
          <button class="btn-ghost" style="padding:4px 12px;font-size:11px">Informe</button>
        </div></td>
      </tr>
    `).join('');
  }

  const companiesEl = document.getElementById('companies-list');
  if (companiesEl) {
    const cos = [
      { name: 'Grupo Industrial CLM',  active: true },
      { name: 'Digital Agency Sur',    active: true },
      { name: 'Residencia La Mancha',  active: true },
      { name: 'Gestoría Manchega SL',  active: true },
      { name: 'TechSur Telecomunic.',  active: false },
    ];
    companiesEl.innerHTML = cos.map(c => `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:8px;height:8px;background:${c.active ? 'var(--green)' : 'var(--muted)'};border-radius:50%"></div>
          <span style="font-size:14px">${c.name}</span>
        </div>
        <span style="font-size:11px;color:var(--text-dim)">${c.active ? 'Activa' : 'Sin conv.'}</span>
      </div>
    `).join('');
  }

  const datesEl = document.getElementById('dates-list');
  if (datesEl) {
    const dates = [
      { fecha: '15 Sep', text: 'Inicio FCT — Grupo A (3 alumnos/as)' },
      { fecha: '30 Sep', text: 'Límite entrega convenios firmados' },
      { fecha: '10 Oct', text: '1ª Visita empresas Grupo A' },
      { fecha: '20 Ene', text: 'Fin FCT — Grupo A · Evaluación final' },
      { fecha: '10 Feb', text: 'Inicio FCT — Grupo B (2 alumnos/as)' },
    ];
    datesEl.innerHTML = dates.map(d => `
      <div style="display:flex;gap:16px;padding:10px 0;border-bottom:1px solid var(--border);align-items:center">
        <div style="font-family:'Bebas Neue';font-size:16px;color:var(--orange);min-width:52px">${d.fecha}</div>
        <div style="font-size:13px;color:var(--text-dim)">${d.text}</div>
      </div>
    `).join('');
  }
}

/* ══ QUIZ LOGIC ═════════════════════════════════════ */
function updateProgressBar() {
  const fill  = document.getElementById('quiz-progress-fill');
  const label = document.getElementById('quiz-step');
  if (!fill || !label) return;
  fill.style.width = `${(careerState.index / careerQuiz.length) * 100}%`;
  label.textContent = careerState.index >= careerQuiz.length
    ? 'Resultado'
    : `Paso ${careerState.index + 1} de ${careerQuiz.length}`;
}

function updateTimelineProgress() {
  document.querySelectorAll('.timeline-step').forEach((step, i) => {
    step.classList.toggle('active', i === careerState.index);
  });
  stopImageCycler();
  startImageCycler();
}

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

function renderCareerQuestion() {
  const questionEl = document.getElementById('career-quiz-text');
  const optionsEl  = document.getElementById('career-quiz-options');
  const restartBtn = document.getElementById('career-quiz-restart');
  const resultEl   = document.getElementById('career-quiz-result');
  const cardEl     = document.getElementById('career-quiz-card');
  if (!questionEl || !optionsEl || !restartBtn || !resultEl || !cardEl) return;

  updateProgressBar();
  updateTimelineProgress();

  if (careerState.index >= careerQuiz.length) {
    cardEl.hidden = true;
    restartBtn.hidden = false;
    resultEl.hidden = false;
    showCareerResult();
    return;
  }

  cardEl.hidden = false;
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

function getTopProfiles() {
  const sorted = Object.entries(careerState.scores).sort((a, b) => b[1] - a[1]);
  const top = sorted[0][1];
  if (top === 0) return [];
  return sorted.filter(([, s]) => s === top).map(([p]) => p);
}

function showCareerResult() {
  const el = document.getElementById('career-quiz-result');
  if (!el) return;
  const topProfiles = getTopProfiles();
  if (!topProfiles.length) {
    el.innerHTML = '<p style="color:var(--text-dim)">Sin preferencia clara. Pulsa "Repetir" e inténtalo de nuevo.</p>';
    return;
  }

  const renderPath = (profile) => {
    const p = careerPaths[profile];
    const odsBadges = (odsInfo[profile] ? [] : p.ods).concat(p.ods)
      .filter((v, i, a) => a.indexOf(v) === i)
      .map(n => {
        const o = odsInfo[n] || {};
        return `<span class="ods-badge" style="--ods-color:${o.color}">ODS ${n} · ${o.label}</span>`;
      }).join('');
    const chips = p.options.map(op => `<span class="career-chip">${op}</span>`).join('');
    return `
      <div class="result-emoji">${p.emoji}</div>
      <h3 class="result-title">${p.title}</h3>
      <p class="result-desc">${p.description}</p>
      <span class="result-ods-label">Este perfil conecta con los ODS:</span>
      <div class="result-ods-badges">${p.ods.map(n => {const o=odsInfo[n]||{};return`<span class="ods-badge" style="--ods-color:${o.color}">ODS ${n} · ${o.label}</span>`;}).join('')}</div>
      <div class="result-careers">${chips}</div>
      <div class="result-tip">${p.tip}</div>
    `;
  };

  if (topProfiles.length === 1) {
    el.innerHTML = renderPath(topProfiles[0]);
  } else {
    const blocks = topProfiles.map(prof => {
      const p = careerPaths[prof];
      const chips = p.options.map(op => `<span class="career-chip">${op}</span>`).join('');
      const odsBadges = p.ods.map(n => {const o=odsInfo[n]||{};return`<span class="ods-badge" style="--ods-color:${o.color}">ODS ${n}</span>`;}).join('');
      return `<div class="result-dual-block">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
          <span style="font-size:1.8rem">${p.emoji}</span>
          <strong style="color:var(--orange);font-family:'Bebas Neue';font-size:22px">${p.title}</strong>
        </div>
        <p style="margin:0 0 10px;color:var(--text-dim);font-size:.9rem">${p.description}</p>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px">${odsBadges}</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">${chips}</div>
      </div>`;
    }).join('');
    el.innerHTML = `
      <div class="result-emoji">🌟</div>
      <h3 class="result-title">¡Perfil doble!</h3>
      <p class="result-desc">Tus respuestas muestran afinidad con dos áreas. Ambas son tuyas para explorar.</p>
      ${blocks}
      <div class="result-tip">💡 Tener un perfil dual es una ventaja. Puedes explorar roles que combinen ambas áreas, o especializarte en la que más te llame ahora mismo.</div>
    `;
  }
}

function resetCareerQuiz() {
  careerState.index = 0;
  careerState.scores = { comunicacion:0, digital:0, administracion:0, tecnologia:0, recursoshumanos:0 };
  document.getElementById('career-quiz-card').hidden = false;
  document.getElementById('career-quiz-result').hidden = true;
  document.getElementById('career-quiz-restart').hidden = true;
  renderCareerQuestion();
}

/* ══ QUICK TOOLS ════════════════════════════════════ */
const questions = [
  { question:'Cuéntame sobre ti y tus principales logros.', good:'Haz un resumen breve de tu perfil, tus experiencias más relevantes y por qué te interesa este puesto.', bad:'No hables solo de tu vida personal ni te extiendas en detalles innecesarios.' },
  { question:'¿Por qué quieres trabajar en esta empresa?', good:'Conecta tus valores y habilidades con la misión de la organización.', bad:'Evita respuestas vagas como "porque necesito trabajo".' },
  { question:'¿Cuál es tu mayor debilidad?', good:'Explica una debilidad real y qué haces para mejorarla.', bad:'No respondas con clichés como "soy perfeccionista" sin un plan de mejora.' },
  { question:'Descríbeme una situación difícil que resolviste.', good:'Usa STAR: situación, tarea, acción y resultado.', bad:'No culpes a otras personas ni omitas lo que aprendiste.' },
  { question:'¿Cómo manejas el trabajo bajo presión?', good:'Explica tu método para priorizar tareas y mantener la calma.', bad:'No digas solo "lo hago bien" sin dar un ejemplo concreto.' },
];
const challenges = [
  { challenge:'Prepara tu presentación personal en 60 segundos.', action:'Escribe una presentación breve y practícala en voz alta frente al espejo.', duration:'5 minutos' },
  { challenge:'Investiga una empresa que te interese.', action:'Anota sus valores, productos/servicios y una razón real por la que querrías trabajar allí.', duration:'10 minutos' },
  { challenge:'Responde a una pregunta difícil con método STAR.', action:'Escribe una respuesta completa sobre un conflicto o reto que hayas resuelto.', duration:'8 minutos' },
  { challenge:'Diseña dos preguntas para el entrevistador.', action:'Crea preguntas inteligentes sobre el equipo, el proyecto o la cultura de la empresa.', duration:'6 minutos' },
];

function randomQuestion() {
  const item = questions[Math.floor(Math.random() * questions.length)];
  const text   = document.getElementById('practice-text');
  const answer = document.getElementById('practice-answer');
  if (!text || !answer) return;
  text.textContent = item.question;
  text.hidden = false;
  answer.innerHTML = `<p><strong>Respuesta recomendada:</strong> ${item.good}</p><p><strong>Evita:</strong> ${item.bad}</p>`;
  answer.hidden = false;
}

function randomChallenge() {
  const item = challenges[Math.floor(Math.random() * challenges.length)];
  const text   = document.getElementById('challenge-text');
  const result = document.getElementById('challenge-result');
  if (!text || !result) return;
  text.textContent = item.challenge;
  text.hidden = false;
  result.innerHTML = `<p><strong>¿Qué hacer?</strong> ${item.action}</p><p><strong>Duración:</strong> ${item.duration}</p>`;
  result.hidden = false;
}

/* ══ VERSION ════════════════════════════════════════ */
function setSiteVersion(v) {
  document.querySelectorAll('.version-num').forEach(el => { el.textContent = v || '…'; });
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
    if (prev && prev !== version) { localStorage.setItem('site-version', version); window.location.reload(); return; }
    localStorage.setItem('site-version', version);
  } catch { /* non-critical */ }
}

/* ══ SERVICE WORKER ═════════════════════════════════ */
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
      if (refreshing) return; refreshing = true; window.location.reload();
    });
  } catch { /* non-critical */ }
}

/* ══ INIT ═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  /* Event delegation for all [data-nav] elements */
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-nav]');
    if (!btn) return;
    if (btn.dataset.nav === 'view') {
      switchView(btn.dataset.target);
    } else if (btn.dataset.nav === 'sub') {
      switchSubView(btn.dataset.target);
      if (btn.dataset.target === 'sub-directory') renderStudentDirectory();
      if (btn.dataset.target === 'sub-profile') {
        if (!document.getElementById('profile-content')?.innerHTML.trim()) {
          renderStudentProfile(students[0]);
        }
      }
    }
  });

  /* Quick tools */
  document.getElementById('random-btn')?.addEventListener('click', randomQuestion);
  document.getElementById('challenge-btn')?.addEventListener('click', randomChallenge);

  /* Career quiz restart */
  document.getElementById('career-quiz-restart')?.addEventListener('click', resetCareerQuiz);

  /* Init quiz */
  renderCareerQuestion();

  /* Version + SW */
  checkVersion();
  registerServiceWorker();
});
