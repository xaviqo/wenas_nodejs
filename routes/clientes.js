const express = require('express');
const router = express.Router();
const db = require('../db');

//Obtener todos los clientes
router.get('/', async(req, res) => {
    let result = await db.query('select * from customers');
    res.json(result.rows);
});

// Crear un nuevo cliente
router.post('/', async (req, res) => {
  console.log('entra')
  let cliente  = req.body;
    await db.query('INSERT INTO customers VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
    [
      cliente.customer_id, cliente.company_name, cliente.contact_name, cliente.contact_title, cliente.address, 
      cliente.city, cliente.region, cliente.postal_code, cliente.country, cliente.phone, cliente.fax,
    ]);    
    res.status(200).json({ message: `Cliente añadido correctamente.` });
});

// Actualizar un cliente existente
router.put('/:id', async (req, res) => {
  const customerId = req.params.id;
  let cliente = req.body;
    const result = await db.query(
      'UPDATE customers SET company_name=$1, contact_name=$2, contact_title=$3, address=$4, city=$5, region=$6, postal_code=$7, country=$8, phone=$9, fax=$10 WHERE customer_id=$11 RETURNING *',
      [cliente.company_name, cliente.contact_name, cliente.contact_title, cliente.address, cliente.city, cliente.region, 
        cliente.postal_code, cliente.country, cliente.phone, cliente.fax, customerId]
    );
    if (result.rowCount === 1) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: `No se encontró ningún cliente con ID ${customerId}` });
    }
});

// Eliminar un cliente existente
router.delete('/:id', async (req, res) => {
    const customerId = req.params.id;
      const result = await db.query('DELETE FROM customers WHERE customer_id = $1 RETURNING *', [customerId]);
      if (result.rowCount === 1) {
        res.json({ message: `El cliente con ID ${customerId} fue eliminado correctamente` });
      } else {
        res.status(404).json({ message: `No se encontró ningún cliente con ID ${customerId}` });
      }
  });
  
// router.delete('/:id', async(req, res) => {
//     await db.query('DELETE FROM customers where customer_id = $1),[id];
//     let result = await db.query('DELETE FROM customers where customer_id = $1' + req.params.id);
//     res.json(result.rows);
// });

module.exports = router;