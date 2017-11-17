// var log = require('logger')(module);
global.accessLoger = true;

module.exports = function(module) {
  return function(/* ... */) {
  	const isDev = process.env.NODE_ENV;
    var args = [' logger : '+ JSON.stringify(arguments)];
    	if(accessLoger){
    		console.log.apply(console, args);
    	} 
  };
};