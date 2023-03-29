const express = require('express');
const app = express();

app.use(express.json());

  app.use('/', express.static(__dirname + '/public'));

app.use('/api/categorias', require('./routes/categorias'));

  app.listen(3000, () => {
    console.log('Servidor en excecució a http://localhost:3000');
  });