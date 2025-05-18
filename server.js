const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos (tu carpeta public)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para guardar ubicación (ejemplo)
app.post('/guardar-ubicacion', (req, res) => {
  const { lat, lon } = req.body;
  console.log(`Ubicación recibida: lat=${lat}, lon=${lon}`);
  // Aquí podrías guardar la ubicación en una base de datos o archivo

  res.json({ mensaje: 'Ubicación guardada' });
});

// Ruta principal (si quieres mostrar algo simple)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
