const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Carpeta pública donde están el HTML, CSS, JS e imágenes
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para evitar error si alguien entra a otra URL
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
