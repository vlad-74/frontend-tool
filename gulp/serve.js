'use strict';

const browserSync = require('browser-sync').create();
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {

  return function() {
  	if(isDevelopment){
	    browserSync.init({
	      server: options.src,
	      browser: ["chrome", "firefox"]
	    });

	    browserSync.watch(`${options.src}/**/*.*`).on('change', browserSync.reload);
  	}else{
		var child_process = require('child_process');
		child_process.exec("node server.js", function(error, stdout, stderr) {
		    console.log(stdout);
		});
	}
  };

};

