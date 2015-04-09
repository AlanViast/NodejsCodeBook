
/*
 * GET home page.
 */
var mongoose = require("mongoose");


exports.connect = function(request, response){
	mongoose.connect("mongodb://localhost/app", function(e){
		if(e){
			response.send(e.message);
		}
		response.send("conect yes !");
	});
};
