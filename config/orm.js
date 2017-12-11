// SQL queries for inserting updating and selecting all the burgers in the database.

var connection = require("../config/connection.js");

var db = {

	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table + ";";
		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err
			}

			cb(result);
			console.log(result);

		});
	},

	// INSERT INTO burgers (burger_name) VALUES("McAloo Tikki")

	insertOne: function(column, values, cb) {
		var queryString = "INSERT INTO burgers  (" + column + ") " + "VALUES ("  + values + ") "
		console.log(queryString);

		connection.query(queryString, function(err, result) {

			if (err) {
				throw err
			}

			cb(result);
			console.log(result);
			
		});
	},

	// UPDATE burgers SET devoured = true where id =  "2"

	updateOne: function(table, columnVal, condition, cb) {
		var queryString = "UPDATE " + table +  " SET " +  columnVal  + " WHERE " + condition + ";"
		console.log(queryString);
		connection.query(queryString, function(err, result) {

			if (err) {
				throw err
			}

			cb(result);
			console.log(result);

		});
	}
} // db obj ends here

module.exports = db;