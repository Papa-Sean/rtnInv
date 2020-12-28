const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Blueshoes1",
    database : "Rotten-Inv-DB",
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
    if(!err)
        {
            console.log("Connection is ROTTEN");
        }
    else
        {
            console.log("Pay your internet bill loser");
        }
});

module.exports = mysqlConnection;