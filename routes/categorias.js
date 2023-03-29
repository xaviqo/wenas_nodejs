const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async(req, res) => {
    const categories = await db.query('SELECT * FROM categories');
    res.json(categories['rows']);
});

router.delete('/', async(req, res) => {
    await db.query('DELETE FROM products p WHERE p.category_id = ?', [req.body.category_id]);
    console.log(await db.query('DELETE FROM categories c WHERE c.category_id = ?', [req.body.category_id]))
    res.json({'message':'categoria eliminada correctamente'});
});

module.exports = router;