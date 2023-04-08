const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req,res) => {
    try {
        const { name, desc } = req.body;
        const lastRow = await db.query('SELECT c.category_id FROM categories c ORDER BY c.category_id DESC LIMIT 1');
        const categoryId = (lastRow.rows[0]['category_id']+1);
        await db.query(`INSERT INTO categories(category_id,category_name,description) VALUES(${categoryId},'${name}','${desc}')`);
        res.status(200).json({'message':'categoria añadida correctamente'});
    } catch (e) {
        console.error(e)
        res.status(500).json({
            'message': 'Error añadiendo categoría',
            'exception':e
        })
    }
});

router.get('/:id', async(req, res) => {
    try {
        const categories = await db.query(`SELECT * FROM categories WHERE category_id = ${req.params.id}`);
        res.status(200).json(categories['rows'][0]);
    } catch (e) {
        console.error(e)
        res.status(500).json({
            'message': 'Error solicitando categoría',
            'exception':e
        })
    }
});

router.get('/', async(req, res) => {
    try {
        const categories = await db.query('SELECT * FROM categories');
        res.status(200).json(categories['rows']);
    } catch (e) {
        console.error(e)
        res.status(500).json({
            'message': 'Error solicitando categorías',
            'exception':e
        })
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const categoryId = req.params.id;
        await db.query(`UPDATE products SET category_id = null WHERE category_id = ${categoryId}`);
        await db.query(`DELETE FROM categories WHERE category_id = ${categoryId}`);
        res.status(200).json({'message':'categoria eliminada correctamente'});
    } catch (e) {
        console.error(e)
        res.status(500).json({
            'message': 'Error eliminando categoría',
            'exception':e
        })
    }
});

module.exports = router;