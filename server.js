var express = require("express");
var bodyParser = require("body-parser");


var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs ({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

// app.use(app.router);
// routes.initialize(app);

app.listen(PORT, function() {
	console.log("Listening on PORT " + PORT);
});