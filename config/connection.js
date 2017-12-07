var mysql = require("mysql");

// ===========================================

// Setting up SQL connection

// ===========================================

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "watchlist_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;