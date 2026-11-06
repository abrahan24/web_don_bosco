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
  assert.match(html, /Padre Germán Barrera Blanco/);
  assert.match(html, /08:00/);
  assert.match(html, /14:00/);
  assert.match(html, /content-status/);
});

test('the page uses real gallery items without an empty placeholder tile', () => {
  assert.match(html, /gallery-item gallery-feature/);
  assert.match(html, /gallery-item gallery-tall/);
  assert.doesNotMatch(html, /ESPACIO PARA NUEVA IMAGEN/);
  assert.doesNotMatch(html, /Estos bloques pueden actualizarse/);
});

test('the visual system and interactions expose the approved behavior', () => {
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /--gold/);
  assert.match(js, /prefers-reduced-motion/);
  assert.match(js, /formStatus/);
  assert.match(js, /aria-expanded/);
});
