import express from 'express';
const app = express();
// import usuarios from './usuarios.js';
const usuarios = ['Pedro', 'Maria', 'Jennifer', 'Claudio', 'Lia', 'Sofia'];
app.use(express.static('static'));
app.use(express.static('assets'));

app.get('/abacadabra/usuarios', (req, res) => {
  res.status(200);
  res.json({ usuarios });
});

app.use('/abracadabra/juego/:usuario', (req, res, next) => {
  const usuario = req.params.usuario;
  const userExist = usuarios.includes(usuario);
  userExist ? next() : res.redirect('/who.jpeg');
});

app.get('/abracadabra/juego/:usuario', (req, res) => {
  res.send(`Hola ${req.params.usuario}`);
});

app.get('/abracadabra/conejo/:n', (req, res) => {
  const azar = Math.floor(Math.random() * 4);
  req.params.n == azar
    ? res.redirect('/conejito.jpg')
    : res.redirect('/voldemort.jpg');
});

app.get('*', (req, res) => {
  res.send('Esta ruta no existe');
});

app.listen(3000, () => console.log('Servidor andando en puerto 3000'));
