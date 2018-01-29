var http = require("http"),
	url = require("url");

//route作为依赖注入模块
function start(route, handle) {
	http.createServer(function(request, response){
		var pathname = url.parse(request.url).pathname;
		route(handle, pathname, response, request);
	}).listen(8888);
}

exports.start = start;
