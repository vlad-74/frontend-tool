var static = require('node-static');
var open = require("open");
var file = new static.Server('./public');

require('http').createServer(function (request, response) {
debugger; // остановка!!!!!!!!!  	
  if (!/\./.test(request.url)) {
    request.url = '/';
  }
  file.serve(request, response);
}).listen(3000);


setTimeout(function(){
	open("http://127.0.0.1:3000");
}, 2000)
