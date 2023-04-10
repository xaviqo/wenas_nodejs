const {Pool} = require('pg');
const fs = require('fs');

const pool = new Pool(JSON.parse(fs.readFileSync(__dirname + '/public/db_credentials.json')));

const db = {
    //query
    query: async (str, optArray) => {
        const conexion = await pool.connect();
        const result = await pool.query(str, optArray);
        conexion.release();;
        return result;
    }
};

module.exports = db;