var express = require('express');
const path = require('path');
const app = express();
const { Pool } = require('pg');

  app.use('/', express.static(__dirname + '/public'));

  app.use('api/productos', require('./routes/productos'));

  app.listen(3000, () => {
    console.log('Servidor en excecució a http://localhost:3000');
})