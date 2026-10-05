document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navlinks');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
    }));
  }

  const form = document.querySelector('.form');
  const status = document.querySelector('.form-status');
  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      status.textContent = 'Solicitud preparada. Para una atención directa, también puedes escribirnos por WhatsApp.';
      form.reset();
    });
  }
});
