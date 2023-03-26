const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async(req, res) => {
    let result = await db.query('select * from products');
    res.json(result.rows);
});

router.get('/getByID', async(req, res) => {
    console.log(data);
    let result = await db.query('select * from products where id = ' + req.params.id);
    res.json(result.rows);
});

module.exports = router;