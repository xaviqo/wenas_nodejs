const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async(req, res) => {
    let result = await db.query('select * from customers');
    res.json(result.rows);
});

// router.delete('/:id', async(req, res) => {
//     await db.query('DELETE FROM customers where customer_id = $1),[id];
//     let result = await db.query('DELETE FROM customers where customer_id = $1' + req.params.id);
//     res.json(result.rows);
// });

module.exports = router;