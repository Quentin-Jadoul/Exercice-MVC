var mysql = require("mysql");
//database connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'formations'
});
connection.connect(function(error){if (error) console.log(error);});

module.exports = connection;