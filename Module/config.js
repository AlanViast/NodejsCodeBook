// 配置


var fs = require("fs");



module.exports = {
	"default": function(response){
		write(response, 200, "<h1> Hello app1!! </h1>")
	},

	"read": function(response){
		fs.readFile("test.txt", function(error, data){
			if(error){
				write(response, 500, "<h1>Interent server error</h1>");
			} else {
				write(response, 200, "<h1>读取内容为:</h1><pre>" + data + "</pre>")
			}
		});
	},

	"write": function(response){
		var appendData = Date.now();
		fs.writeFile("test.txt", appendData, function(error){
			if(error){
				write(response, 500, "<h1>Interent server error</h1>");
			} else {
				write(response, 200, "<h1>写入内容为" + appendData + "</h1>");
			}
		});
	},

	"append": function(response){
		var appendData = Date.now();
		fs.appendFile("test.txt", appendData, function(error){
			if(error){
				write(response, 500, "<h1>Interent server error</h1>");
			} else {
				write(response, 200, "<h1>写入内容为" + appendData + "</h1>");
			}
		});
	},

	"404": function(response){
		write(response, 404, "<h1>Page Not found!!</h1>");
	}

};

function write(response, statusCode, content){
	response.writeHead(statusCode, {
		"content-type": "text/html"
	});

	response.write(content);
	response.end();
}