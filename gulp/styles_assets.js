'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combine = require('stream-combiner2').obj;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {
	return function() {
	  return gulp.src(options.src, {since: gulp.lastRun('styles_assets')})
	      .pipe($.if(!isDevelopment, $.rev()))
	      .pipe(gulp.dest(options.dst))
	      .pipe($.if(!isDevelopment, combine($.rev.manifest('assets.json'), gulp.dest('manifest'))));
	};
};
