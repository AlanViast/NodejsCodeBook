// 路由器

exports.router = function(request){
	var url = require("url"),
		i, reg, val, find = 0,
		aReg = ['', 'read', 'write', 'append'],
		pathName = url.parse(request.url).pathname;


	for(i in aReg){
		val = aReg[i];
		reg = new RegExp('^\\\/app1' + (val ? '\\\/' + val : val) + '\\\/?$');
		if(reg.test(pathName)){
			return val || 'default';
		}
	}

	return "404";
}