// var log = require('logger')(module);
// var args = [' - logger = ' + module.filename.substring(module.filename.indexOf('##log1Module\\dir') +17)].concat([].slice.call(arguments));
global.accessLoger = true;

module.exports = function(module) {
  return function(/* ... */) {

  console.log.format = function (c) {
    return c.getDate() + ": [" + c.filename + ":" + c.getLineNumber() + "] " + c.functionName;
  };

  	const isDev = process.env.NODE_ENV;
    var args = [' logger: ' + JSON.stringify(arguments) + ' || ' ];
    	if(accessLoger){
    		console.log.apply(console, args);
    	} 
  };
};