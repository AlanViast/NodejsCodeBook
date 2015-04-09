// 导入Http模块
var http = require("http");


// 导入url 和 fs 模块
var url = require("url");
var fs = require("fs");


http.createServer(function(request, response){
	var pathname = url.parse(request.url).pathname;
	var appendData = Date.now();

	if(/^\/app1\/?$/.test(pathname)) {
		write(response, 200, "<h1>Hello App1!!!</h1>");
	} else if(/^\/app1\/read\/?$/.test(pathname)) {
		fs.readFile("test.txt", function(error, data){
			if(error){
				write(response, 500, "<h1>Interent server error</h1>");
			} else {
				write(response, 200, "<h1>读取内容为:</h1><pre>" + data + "</pre>")
			}
		});
	} else if(/^\/app1\/write\/?$/.test(pathname)) {
		fs.writeFile("test.txt", appendData, function(error){
			if(error){
				write(response, 500, "<h1>Interent server error</h1>");
			} else {
				write(response, 200, "<h1>写入内容为" + appendData + "</h1>");
			}
		});
	} else if(/^\/app1\/append\/?$/.test(pathname)) {
		fs.appendFile("test.txt", appendData, function(error){
			if(error){
				write(response, 500, "<h1>Interent server error</h1>");
			} else {
				write(response, 200, "<h1>写入内容为" + appendData + "</h1>");
			}
		});
	} else {
		write(response, 404, "<h1>Page Not found!!</h1>");
	}

}).listen(1024);



var write = function(response, statusCode, content){
	response.writeHead(statusCode, {
		"content-type": "text/html"
	});
	response.write(content);
	response.end();
}