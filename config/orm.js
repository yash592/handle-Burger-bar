// SQL queries for inserting updating and selecting all the burgers in the database.

var db = {

	selectAll: function() {
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(err, result) {

			console.log(result);

		});
	},

	// INSERT INTO burgers (burger_name) VALUES("McAloo Tikki")

	insertOne: function() {
		var queryString = "INSERT INTO burgers (burger_name) VALUES ( ? )", [req.body],;

		connection.query( function(err, result) {

			console.log(result);

		});
	},

	// UPDATE Customers
	// SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
	// WHERE CustomerID = 1;

	updateOne: function() {
		var queryString = "UPDATE burgers SET burger_name = ? WHERE id = ?";
		connection.query( function(err, result) {

		});
	}
}

module.exports = db;