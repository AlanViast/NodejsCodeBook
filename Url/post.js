//导入http模块
var http = require("http");

//导入querystring模块
var querystring = require("querystring");



http.createServer(function(request, response){
	var postData = "";

	var responseString = "";

	response.writeHead(200, {
		"content-type" : "text/html"
	});

	if(request.method === "GET"){
		responseString = '<!doctype html><html lang="en"><head><meta charset="UTF-8" /><title>Document</title></head><body>\
		<form action="/" method="post">\
		<input type="text" name="a" value="1" />\
		<input type="text" name="b" value="2" />\
		<input type="text" name="c" value="3" />\
		<input type="submit" value="submit" />\
		</form>\
		</body></html>';

		response.write(responseString);
		response.end();
	} else if(request.method === "POST"){
		// 设置接收数据的编码格式
		request.setEncoding("utf-8");

		// 因为nodejs在处理post数据的时候，会将数据分成小包来序列处理
		// 所以必须监听每一个数据小包的结果
		request.addListener("data", function(postDataChunk){
			postData += postDataChunk;
		});

		// 监听数据传递完毕
		request.addListener("end", function(){
			var objectPostData = querystring.parse(postData);

			// 输出查询数据
			response.write("<h1> post query string </h1>");
			for(var i in objectPostData){
				response.write(i + " => " + objectPostData[i] + "<br/>");
			}

			response.end();
		});
	}

}).listen(1024);






















