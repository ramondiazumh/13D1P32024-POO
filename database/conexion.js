const { Pool } = require('pg');

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "poo",
    port: "5432"
});

module.exports = pool;