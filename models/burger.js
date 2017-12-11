var db = require("../config/orm.js");

var burger = {
	all: function(cb) {
		db.selectAll("burgers", function(res) {
			cb(res);
		});
	},

	create: function(column, values, cb) {
		db.insertOne(column, values, function(res) {
			cb(res);
		});
	},

	// updateOne: function(table, columnVal, condition, cb)

	update: function(condition, cb) {
		db.updateOne("burgers", "Devoured = true", condition, function(res) {
			cb(res);
		});
	}


} // burger ends here

module.exports = burger;