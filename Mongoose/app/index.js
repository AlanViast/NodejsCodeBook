
var express = require("express"),
	app = express(),
	routes = require("./routes/index");

app.listen(1024);


app.get("/connect", routes.connect);