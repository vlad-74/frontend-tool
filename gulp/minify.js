'use strict';
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const uglify = composer(uglifyes, console);
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {
  return function() {
    return gulp.src(options.from)
    .pipe($.if(!isDevelopment, uglify()))
    .pipe(gulp.dest(options.to))
  };
};


// $.if(!isDevelopment, 'minify')
