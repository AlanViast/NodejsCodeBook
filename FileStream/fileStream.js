// 导入http模块
var http = require("http");

//引用fileStream模块
var fs = require("fs");


//导入url和querystring模块
var url = require("url");
var querystring = require("querystring");


http.createServer(function(request, response){

	urlObj = url.parse(request.url);
	queryObj = querystring.parse(urlObj.query);

	if(queryObj.type === "read"){
		fs.readFile("file.txt", function(error, fileData){
			if(error){
				write(response, "<h1>读取出现错误</h1>")
			} else {
				write(response, "<h1>读取内容为</h1>" + fileData);
			}
		});
	} else if(queryObj.type === "write"){
		var writeString = "\n" + Date.now();
		fs.writeFile("file.txt", writeString, function(error){
			if(error){
				write(response, "<h1>写入内容出错</h1>")
			} else {
				write(response, "<h1>写入内容为</h1>" + writeString);
			}
		});
	} else if(queryObj.type === "append"){
		var appendString = "\n" + Date.now();
		fs.appendFile("file.txt", appendString, function(error){
			if(error){
				write(response, "<h1>追加内容出错</h1>")
			} else {
				write(response, "<h1>追加内容为</h1>" + appendString);
			}
		});
	} else {
		write(response,  "<h1>请在网址上写入参数</h1>")
	}


}).listen(1024);



function write(response, content){
	response.writeHead(200,{
		"content-type": "text/html"
	});

	response.write(content);
	response.end();
}