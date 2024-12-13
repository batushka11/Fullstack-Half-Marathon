const mysql = require('mysql2');
const cfg = require('./config.json');

const connect = mysql.createConnection(cfg);

module.exports = connect;