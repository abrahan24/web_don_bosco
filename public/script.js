const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

document.documentElement.classList.add('js-enhanced');

const setMenuState = (isOpen) => {
  if (!menuToggle || !navLinks) return;
  navLinks.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  menuToggle.textContent = isOpen ? '×' : '☰';
};

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    setMenuState(!navLinks.classList.contains('open'));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuState(false);
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((element) => element.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14 });

  revealItems.forEach((element) => observer.observe(element));
}

const accordionItems = document.querySelectorAll('.accordion-item');

const setAccordionState = (item, isOpen) => {
  const button = item.querySelector('button');
  const content = item.querySelector('.accordion-content');
  const symbol = item.querySelector('.accordion-symbol');
  if (!button || !content || !symbol) return;

  item.classList.toggle('active', isOpen);
  button.setAttribute('aria-expanded', String(isOpen));
  content.hidden = !isOpen;
  symbol.textContent = isOpen ? '−' : '+';
};

accordionItems.forEach((item) => {
  const button = item.querySelector('button');
  if (!button) return;
  button.addEventListener('click', () => {
    const shouldOpen = button.getAttribute('aria-expanded') !== 'true';
    accordionItems.forEach((otherItem) => setAccordionState(otherItem, otherItem === item && shouldOpen));
  });
});

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'Consulta preparada. Este formulario es demostrativo y todavía no envía datos.';
  });
}
