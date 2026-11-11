const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'public', 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'public', 'styles.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'public', 'script.js'), 'utf8');

test('the page presents confirmed institutional information', () => {
  assert.match(html, /Centro de Formación Don Bosco de Cobija/);
  assert.match(html, /Clases de computación/);
  assert.match(html, /Asistencia pedagógica/);
  assert.match(html, /<img src="imagenes\/WhatsApp\.jpeg" alt="Centro de Formación Don Bosco de Cobija">/);
  assert.match(html, /Padre Germán Barrera Blanco/);
  assert.match(html, /08:00/);
  assert.match(html, /14:00/);
  assert.match(html, /\+591 79381157/);
  assert.match(html, /barrerablanco34@gmail\.com/);
  assert.doesNotMatch(html, /La oferta puede ampliarse/);
});

test('the page uses real gallery items without an empty placeholder tile', () => {
  assert.match(html, /gallery-item gallery-feature/);
  assert.match(html, /gallery-item gallery-tall/);
  assert.match(html, /WhatsApp Image 2026-11-10 at 9\.08\.55 PM\.jpeg/);
  assert.match(html, /WhatsApp Image 2026-11-10 at 9\.08\.55 PM \(1\)\.jpeg/);
  assert.doesNotMatch(html, /ESPACIO PARA NUEVA IMAGEN/);
  assert.doesNotMatch(html, /Estos bloques pueden actualizarse/);
});

test('the page includes the supplied salesian identity and history', () => {
  assert.match(html, /id="salesianos"/);
  assert.match(html, /Sociedad de San Francisco de Sales/);
  assert.match(html, /18 de diciembre de 1859/);
  assert.match(html, /signos y portadores del amor de Dios a los jóvenes/);
  assert.match(html, /Inspectoría de Bolivia/);
  assert.match(html, /17 de febrero de 1896/);
  assert.match(html, /Sistema Preventivo/);
});

test('the page includes verified local impact information for Cobija', () => {
  assert.match(html, /7 de febrero de 2025/);
  assert.match(html, /barrio Roberto Rojas/);
  assert.match(html, /Más de 500 niños y niñas/);
  assert.match(html, /más de 100 familias/);
  assert.match(html, /40 computadoras/);
  assert.match(html, /OFPROBOL/);
  assert.match(html, /sdb\.bo\/sdb\/2025\/02\/11/);
});

test('the page presents the broader salesian activities and services', () => {
  assert.match(html, /Actividades, servicios y recursos/);
  assert.match(html, /Educación regular/);
  assert.match(html, /CEAs/);
  assert.match(html, /Institutos superiores/);
  assert.match(html, /Universidad/);
  assert.match(html, /Parroquias/);
  assert.match(html, /Santuarios/);
  assert.match(html, /Basílica de María Auxiliadora/);
  assert.match(html, /Red de hogares/);
  assert.match(html, /Proyecto Don Bosco/);

  const identityIndex = html.indexOf('id="institucion"');
  const activitiesIndex = html.indexOf('Actividades, servicios y recursos');
  const servicesIndex = html.indexOf('id="servicios"');
  assert.ok(activitiesIndex > identityIndex && activitiesIndex < servicesIndex);
});

test('the previous suggested identity block is removed', () => {
  assert.doesNotMatch(html, /Historia e inspiración/);
  assert.doesNotMatch(html, /Misión sugerida/);
  assert.doesNotMatch(html, /Visión sugerida/);
  assert.doesNotMatch(html, /Contenido institucional sugerido/);
});

test('the visual system and interactions expose the approved behavior', () => {
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /accordion-item:focus-within/);
  assert.match(css, /gallery-item\s*\{\s*min-height:\s*0/);
  assert.match(css, /--gold/);
  assert.match(css, /js-enhanced/);
  assert.match(js, /prefers-reduced-motion/);
  assert.match(js, /js-enhanced/);
  assert.match(js, /formStatus/);
  assert.match(js, /aria-expanded/);
});
