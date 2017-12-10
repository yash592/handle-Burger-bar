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

router.post("/api/burgers", function(req, res) {

	var banana = "'" + req.body.name + "'";

	burger.create(
		["burger_name"], [banana], function(result) {

			res.json({ id: result.insertID });
			
		});		
});

module.exports = router;