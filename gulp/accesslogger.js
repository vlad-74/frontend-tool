'use strict';
const $ = require('gulp-load-plugins')();
const gulp = require('gulp');

module.exports = function(options) {
  return function(callback) {
    gulp.src(["./frontend/js/logger.js"]) 
    .pipe($.stringReplace(options.from, options.to))
    .pipe(gulp.dest('./frontend/js/'))
    callback();
  };
};
