let mysql = require("mysql2");
let cfg = require("./config.json");

let connect = mysql.createConnection(cfg);
module.exports = connect;

