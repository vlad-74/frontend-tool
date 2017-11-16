'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {
	return function() {
		return gulp.src(options.src, {since: gulp.lastRun(options.taskName)})
		    .pipe($.if(!isDevelopment, $.revReplace({
		        manifest: gulp.src('manifest/css.json', {allowEmpty: true})
		      })))
		    .pipe($.if(!isDevelopment, $.revReplace({
		        manifest: gulp.src('manifest/webpack.json', {allowEmpty: true})
		      })))
		    .pipe(gulp.dest(options.dst));
	};
};
