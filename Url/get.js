//导入http模块
var http = require("http");

// 导入URL和querystring 解析模块
var url = require("url");
var querystring = require("querystring");


http.createServer(function(request, response){
	//解析URL和查询参数
	var objectUrl = url.parse(request.url);
	var objectQueryString = querystring.parse(objectUrl.query);

	//设置响应头
	response.writeHead(200, {
		"content-type": "text/html"
	});

	//输出所有url的属性
	response.write("<h1>objectUrl</h1>")
	for(var i in objectUrl){
		if(typeof(objectUrl[i]) !== "function"){
			response.write(i  + "=> " + objectUrl[i] + "<br/>");
		}
	}

	//输出所有get请求的参数
	response.write("<h1>objectQueryString</h1>")
	for(var i in objectQueryString){
		response.write(i  + "=> " + objectQueryString[i] + "<br/>");
	}

	response.end();
})
.listen(2014);