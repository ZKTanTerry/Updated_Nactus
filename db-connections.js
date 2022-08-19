var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'database-1.crcc7dn3iq4d.us-east-1.rds.amazonaws.com',
    port:'3306',
    user:'admin',
    password:'ViralMeme22',
    database: 'nactus'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected To DB');
});
module.exports = connection;