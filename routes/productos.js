const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async(req, res) => {
    let result = await db.query('select * from products');
    res.json(result.rows);
});

router.delete('/:id', async(req, res) => {

    await db.execute('DELETE FROM order_details where product_id = ' + req.params.id);
    let result = await db.execute('DELETE FROM products where product_id = ' + req.params.id);
    res.json(result.rows);
});

router.put('/', async (req, res) => {
    try {
      const productId = req.params.id;
      const product = req.body; 
      await db.execute('UPDATE products SET name = ?, price = ?, description = ? WHERE product_id = ?', [product.name, product.price, product.description, productId]);
      res.status(200).json({ message: `Producto con ID ${productId} actualizado correctamente.` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Error al actualizar el producto con ID ${productId}.` });
    }
  });
  

module.exports = router;