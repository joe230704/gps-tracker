const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let ultimaUbicacion = null;

app.post('/guardar-ubicacion', (req, res) => {
  const { lat, lon } = req.body;
  if (lat && lon) {
    ultimaUbicacion = { lat, lon, fecha: new Date() };
    console.log('Ubicación guardada:', ultimaUbicacion);
    res.json({ mensaje: 'Ubicación guardada' });
  } else {
    res.status(400).json({ mensaje: 'Faltan latitud o longitud' });
  }
});

app.get('/ultima-ubicacion', (req, res) => {
  if (ultimaUbicacion) {
    res.json(ultimaUbicacion);
  } else {
    res.status(404).json({ mensaje: 'No hay ubicación disponible' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
