var express = require('express');

const { Pool } = require('pg');
// Creamos una instancia de conexión a la base de datos
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'root',
  port: 5433,
});
// Conectamos a la base de datos
pool.connect((err, client, done) => {
  if (err) {
    console.error('Error de conexión:', err);
  } else {
    console.log('Conexión a la base de datos establecida');
  }
});
