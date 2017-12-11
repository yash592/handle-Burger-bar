var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.all(function(data) {

		var hbsObject = {
			burgers: data
		};

		console.log(hbsObject);
		res.render("index", hbsObject)
	});
});

// POST a banana

// create: function(column, values, cb) 

router.post("/api/burgers", function(req, res) {

	var banana = "'" + req.body.name + "'";

	burger.create(
		["burger_name"], [banana], function(result) {

			res.json({ id: result.insertId });
			
		});		
});

// update: function(columnVal, condition, cb) 

router.put("/api/burgers/:id", function(req, res) {
	// var columnVal = "'" + req.body.name + "'";
	var condition = "id = " + req.params.id;

	var columnVal = (devoured = true);

	console.log("condition", condition);

	burger.update(condition,  function(result) {
			res.status(200).end();
		
	});
})

module.exports = router;