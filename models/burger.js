var db = require("../config/orm.js");

var burger = {
	all: function(cb) {
		db.all("burgers", function(res) {
			cb(res);
		});
	},

	create: function(table, column, values, cb) {
		db.insertOne("burgers", column, values, function(res) {
			cb(res);
		})
	},

	// updateOne: function(table, column, columnVal, condition, cb) {

	update: function(table, column, columnVal, condition, cb) {
		db.updateOne("burgers", column, columnVal, condition, function(res) {
			cb(res);
		});
	}


} // burger ends here