var express = require('express');
var sql = require('mssql');
var app = express();
var webconfig = {
host: 'localhost',
user: 'testDB',
password: 'vishal',
database: 'node_db'

var port = process.env.PORT || 8000;
var connection = new sql.connect(webconfig, function (err) {
debugger
var request = new sql.Request(connection);
request.query('select * from tblstudent', function (err, recordset) {
if (err) // ... error checks
console.log('Database connection error');
console.dir("User Data: " + recordset);
});
});
app.listen(port);
console.log(port + ' is the magic port');