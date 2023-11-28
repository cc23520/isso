// database.js
const { createPool } = require('mysql');

const pool = createPool({
    host: 'regulus.cotuca.unicamp.br',
    user: 'BD23520',
    password: 'BD23520',
    database: 'BD23520'
    
});

module.exports = pool;
