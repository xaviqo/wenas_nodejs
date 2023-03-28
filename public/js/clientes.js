app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/api/clientes',  async(req, res) => {
    pool.connect();
    let result = await pool.query('select * from customers');
    //devuelve un array de objetos
    res.json(result.rows);
})

  app.listen(3000, () => {
  Console.log('Servidor en execució al http://localhost:3000');
 });