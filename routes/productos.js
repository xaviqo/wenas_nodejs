const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async(req, res) => {
    let result = await db.query('select * from products');
    res.json(result.rows);
});

router.get('/', async(req, res) => {
  let result = await db.query('select * from products');
  res.json(result.rows);
});

router.delete('/:id', async(req, res) => {

    try {

      let productId = req.params.id;
      console.log(productId);
    //  await db.query('DELETE FROM order_details where product_id = ' + req.params.id);

      await db.query('DELETE FROM products where product_id = $1', 
        [ productId ]);

      res.status(200).json({ message: `Producto borrado correctamente.`, product_id: productId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Error al eliminar el producto.` });
    }
});

router.post('/', async (req, res) => {
    try {
      //todo devolver id de la respuesta para el mensaje
      let maxProductId = await db.query('SELECT MAX(product_id) FROM products');
      let nextProductId = maxProductId.rows[0].max + 1;
      
      let product = req.body; 
      await db.query('INSERT into products VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', 
        [ nextProductId,
          product.product_name, 
          product.supplier_id, 
          product.category_id, 
          product.quantity_per_unit, 
          product.unit_price,
          product.units_in_stock, 
          product.units_on_order, 
          product.reorder_level, 
          product.discontinued]);
      res.status(200).json({ message: `Producto añadido correctamente.`, product_id: nextProductId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Error al añadido el producto.` });
    }
  });

  router.put('/', async (req, res) => {
    try {
      let product = req.body;
      await db.query(
        'UPDATE products SET product_name = $1, supplier_id = $2, category_id = $3, quantity_per_unit = $4, unit_price = $5, units_in_stock = $6, units_on_order = $7, reorder_level = $8, discontinued = $9 WHERE product_id = $10',
        [
          product.product_name,
          product.supplier_id,
          product.category_id,
          product.quantity_per_unit,
          product.unit_price,
          product.units_in_stock,
          product.units_on_order,
          product.reorder_level,
          product.discontinued,
          product.product_id
        ]
      );
      res.status(200).json({ message: `Producto actualizado correctamente.`, product_id: product.product_id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Error al actualizar el producto.` });
    }
  });
  

module.exports = router;