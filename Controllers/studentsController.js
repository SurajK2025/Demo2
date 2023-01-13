const mysql = require("mysql");
const mysqlConnection = require("../DbConnector/MysqlConnector");
const connection = mysqlConnection(mysql);


exports.getAllUsers = (req, res) => {
  connection.query("select * from students", (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
}

exports.deleteUser = (req, res) => { 
  connection.query(`delete from students where rollno = ${req.params.id}`, (err, rows, fields) => {
  });
}

exports.createUser = (req, res) => {
  connection.query(`insert into students set rollno='${req.body.rollno}', name='${req.body.name}', course='${req.body.course}', doa='${req.body.doa}', marks='${req.body.marks}', phone='${req.body.phone}'`, (err, rows) => {
    if (err) console.log(err);
    res.redirect('/');
  });
}