const express = require("express");
const app = express();
app.use(express.json({type: '*/*'}));

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


  app.use("/api/clientes", require("./routes/clientes"));
  app.use('/api/productos', require('./routes/productos'));
  app.use('/api/categorias', require('./routes/categorias'));


  app.listen(3000, () => {
    console.log('Servidor en excecució a http://localhost:3000');
  });
