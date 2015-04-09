
//导入模块
var http = require("http"),
	url = require("url"),
	qs = require("querystring"),
	module1 = require("module1");

http.createServer(function(request, response){

	var query = qs.parse(url.parse(request.url).query);

	var r = query.r,
		h = query.h;

	if ( r !==  undefined && h !== undefined ) {
		write(response, 200, "<h1>计算圆柱的面积和体积</h1>\
		<p>半径 => " + r + "</p>\
		<p>高 => " + r + "</p>\
		<p>面积 => " + module1.area(r,h) + "</p>\
		<p>体积 => " + module1.volume(r,h) + "</p>");
	} else {
		write(response, 200, "<h1>计算圆柱的面积和体积</h1>\
		<p>请输入圆柱的班级或高</p>")
	}




}).listen(1024);


function write(response, statusCode, content){
	response.writeHead(statusCode, {
		"content-type": "text/html"
	});
	response.write(content);
	response.end();
}

