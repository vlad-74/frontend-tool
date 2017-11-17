'use strict';

const browserSync = require('browser-sync').create();

module.exports = function(options) {

  return function() {

    browserSync.init({
      server: options.src,
      browser: ["chrome", "firefox"]
    });

    browserSync.watch(`${options.src}/**/*.*`).on('change', browserSync.reload);
  };

};
