const express = require('express');
const app = express();

  // Con esta linea lo pasa a json, sino devolvera una respuesta vacia si lo pasamos por body y no por get(url)
  //app.use(express.json());

  //Con esta manera (la siguiente linea no comentada), no es necesario poner en el header del fetch de la vista lo siguiente:
  /*method: 'PUT',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },*/

  app.use(express.json({type: '*/*'}));

  app.use('/', express.static(__dirname + '/public'));

  app.use('/api/productos', require('./routes/productos'));

  app.listen(3000, () => {
    console.log('Servidor en excecució a http://localhost:3000');
  });