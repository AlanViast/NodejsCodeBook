//import htto module


var http = require("http");


http.createServer(function(request, response){
	response.writeHead(200, {
		"content-type": "text/html"
	});

	response.write("<h1>Hello World !</h1");

	console.log("Hello World !");


	response.end();
})

// 监听2014端口
.listen(2014);