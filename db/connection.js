const mysql = require("mysql2");
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  //please provide your database and customized password created on MySQL on your own computer
  database: "employee_db1",
  password: "potatoes-123",
}); 

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to employee database");
});

module.exports = connection;