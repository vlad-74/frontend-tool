'use strict';
var open = require("open");

module.exports = function(options) {
  return function (callback) {
    open(__dirname + '/' + options.path);
    callback();
	};
};
