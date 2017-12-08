var express = require("express");
var bodyParser = require("body-parser");

var PORT = 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs ({ defaultLayout: "main"}));

var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
	console.log("Listening on PORT " + PORT);
});