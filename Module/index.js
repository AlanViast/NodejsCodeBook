// 导入模块
var http 	= require("http"),
	url 	= require("url"),
	fs 		= require("fs"),
	router 	= require("./router"),
	config = require("./config");



http.createServer(function(request, response){

	var eventHandle = router.router(request);
	config[eventHandle](response);

}).listen(2014);