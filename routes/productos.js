const express = require('express');
const router = express.Router();
const db = require('../db');
const app = express();

app.get('/public/productos',  async(req, res) => {
    pool.connect();
    let result = await pool.query('select * from products');

    res.json(result.rows);
})

module.exports = router;