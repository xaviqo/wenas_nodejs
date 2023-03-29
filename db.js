const {Pool} = require('pg');
const fs = require('fs');

const pool = new Pool(JSON.parse(fs.readFileSync(__dirname + '/public/db_credentials.json')));

const db = {
    //query
    query: async (str, optArray) => {
        pool.connect();
        return await pool.query(str, optArray);
    },
    //modificar datos
    // execute: async (str) => {
    //     pool.connect()
    //     await pool.execute(str);
    // }
};

module.exports = db;