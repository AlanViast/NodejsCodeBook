
var express = require("express"),
	app = express(),
	routes = require("./routes/index");

app.listen(1024);


app.get("/connect", routes.connect);
app.get("/insert", routes.insert);
app.get("/find", routes.find);
app.get("/update", routes.update);
