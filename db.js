const {Pool} = require('pg');
const fs = require('fs');

const pool = new Pool(JSON.parse(fs.readFileSync(__dirname + '/public/db_credentials.json')));

const db = {
    //query
    query: async (str, optArray) => {
        pool.connect();
        return await pool.query(str, optArray);
    }
};

module.exports = db;