
/*
 * GET home page.
 */
var mongoose = require("mongoose");
      dbUrl = "mongodb://localhost/app";

var App = mongoose.model("App", {
  id: Number,
  name: String
});

exports.connect = function(request, response){
	mongoose.connect(dbUrl, function(e){
		if(e){
			response.send(e.message);
		}
		response.send("conect yes !");
	});
};


exports.insert = function(request, response){
  var app = new App({
    id: 1,
    name: "admin"
  });
  mongoose.connect(dbUrl);
  app.save(function(e, product, numberAffected){
    if(e){
      response.send(e.message);
    }
    var html = "<p>新增加的数据为: " + JSON.stringify(product) + "</p>";
    html += "<p>影响数据量为: " + numberAffected + "</p>";
    response.send(html);
  });
}


exports.find = function(request, response){
  mongoose.connect(dbUrl);
  App.find({
    id: 1
  }, function(e, docs){
    if(e){
      response.send(e.message);
    }
    var html = "<p>查询到的数据为:" + JSON.stringify(docs) + "</p>";
    response.send(html);
  });
}



exports.update = function(request, response){
  mongoose.connect(dbUrl);
  App.update({
    id: 1
  },{
    name: "test"
  }, function(e, numberAffected, raw){
    if(e){
      response.send(e.message);
    }
    var html = "<p>修改结果为" + JSON.stringify(raw) + "</p>";
    html += "<p>影响数据量为:" + numberAffected +  "</p>";
    response.send(html);
  });
}
