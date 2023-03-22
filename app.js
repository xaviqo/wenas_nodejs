const Express = require('express');
        const path = require('path');
        const app = Express();
        //instalar el paquete con 'npm install pg' para la bd
        //coge las dependencias del pg, todo lo que tiene dentro

const { Pool } = require('pg');
// Creamos una instancia de conexión a la base de datos
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'root',
  port: 5433,
});

//lo que vamos a devolver en la respuesta
//res.send('Hello world');
//para ir a cualquier pagina de public con la url por ejemplo htpp://localhost3000/main
app.use('/', Express.static(path.join(__dirname, 'public')));

app.get('/api/client',  async(req, res) => {
    pool.connect();
    let result = await pool.query('select * from customers');
    //devuelve un array de objetos
    res.json(result.rows);
})

app.listen(3000, () => {
console.log('Servidor en execució al http://localhost:3000');
 });
