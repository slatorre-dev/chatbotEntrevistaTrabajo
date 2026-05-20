// Pequeña interactividad: temporizador para practicar respuestas
document.addEventListener('DOMContentLoaded', () => {
  const timerBtn = document.createElement('button');
  timerBtn.textContent = 'Practicar respuesta (60s)';
  timerBtn.style.margin = '8px 0';
  const container = document.querySelector('.container');
  container.insertBefore(timerBtn, container.firstChild);
  let timerId;
  timerBtn.addEventListener('click', () => {
    if (timerId) { clearInterval(timerId); timerId = null; timerBtn.textContent = 'Practicar respuesta (60s)'; return; }
    let t = 60;
    timerBtn.textContent = '60s';
    timerId = setInterval(() => {
      t--;
      timerBtn.textContent = t + 's';
      if (t<=0) { clearInterval(timerId); timerId = null; timerBtn.textContent = 'Practicar respuesta (60s)'; alert('Tiempo finalizado'); }
    }, 1000);
  });
});
