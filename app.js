const express = require('express');
const app = express();

  app.use('/', express.static(__dirname + '/public'));

  app.use('/api/productos', require('./routes/productos'));

  app.listen(3000, () => {
    console.log('Servidor en excecució a http://localhost:3000');
  });