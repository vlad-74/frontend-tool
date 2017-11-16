'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
// const svgSprite = require('gulp-svg-sprite'); // СОЗДАНИЕ СПРАЙТА

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {
	return function() {
	  
		return gulp.src(options.src)
	      .pipe($.svgSprite({
	        mode: {
	          css: {
	            dest:       '.', // where to put style && sprite, default: 'css'
	            bust:       !isDevelopment,
	            sprite:     'sprite.svg', // filename for sprite relative to dest
	            layout:     'vertical',
	            prefix:     '$', // .svg-
	            dimensions: true,
	            render:     {
	              styl: {
	                dest: 'sprite.styl'  // filename for .styl relative to dest^
	              }
	            }
	          }
	        }
	      }))
	      .pipe($.if('*.styl', gulp.dest(options.dst), gulp.dest(options.dst2)));

	};
};
