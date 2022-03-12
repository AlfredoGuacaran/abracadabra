import express from 'express';
const app = express();
import usuarios from './usuarios.js';

app.use(express.static('static'));

app.get('/abacadabra/:ruta', (req, res) => {
  res.json({ usuarios });
});

app.listen(3000, () => console.log('Servidor andando en puerto 3000'));
