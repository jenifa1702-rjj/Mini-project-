const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "it_helpdesk"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err.message);
    return;
  }

  console.log("MySQL connected successfully");
});

module.exports = db;
