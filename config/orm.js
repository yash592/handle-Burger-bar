// SQL queries for inserting updating and selecting all the burgers in the database.

var db = {

	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err
			}

			cb(result);
			console.log(result);

		});
	},

	// INSERT INTO burgers (burger_name) VALUES("McAloo Tikki")

	insertOne: function(table, column, values, cb) {
		var queryString = "INSERT INTO " + table + " (" + column + ") " + "VALUES (" + values + ") "
		console.log(queryString);

		connection.query( function(err, result) {

			if (err) {
				throw err
			}

			cb(result);
			console.log(result);
			
		});
	},

	// UPDATE Customers	SET ContactName = 'Alfred Schmidt', City= 'Frankfurt' WHERE CustomerID = 1;

	updateOne: function(table, column, columnVal, condition, cb) {
		var queryString = "UPDATE " + table + " SET " + column + "= '" + columnVal + "'" + "WHERE " + condition + ";"
		connection.query( function(err, result) {

			if (err) {
				throw err
			}

			cb(result);
			console.log(result);

		});
	}
} // db obj ends here

module.exports = db;