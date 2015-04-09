//导入fs模块
var fs = require("fs");

//读文件
fs.readFile("text.txt", function(error, fileData){
	if(error){
		//出现错误
	}
	// 操作fileData
});


// 写文件
fs.writeFile("text.txt", "new File data", function(error){
	if(error){
		//出现错误
	}
	//继续操作
});


fs.appendFile("text.txt", "appendFileData", function(error){
	if(error){
		//出现错误
	}
	//继续操作
});