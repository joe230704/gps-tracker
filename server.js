const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let ubicaciones = [];

app.post('/guardar-ubicacion', (req, res) => {
  const { lat, lon, timestamp } = req.body;
  ubicaciones.push({ lat, lon, timestamp });
  console.log('Ubicación guardada:', lat, lon, new Date(timestamp));
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
