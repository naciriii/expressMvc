const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'phpmyadmin',
    password : 'root',
    database : 'posts_db'
});
try {
connection.connect(function(err) {
    if (err) throw err;
});
} catch(err) {
    console.log(err.message);
}

module.exports = connection;