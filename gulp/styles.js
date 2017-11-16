'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combine = require('stream-combiner2').obj;
const resolver = require('stylus').resolver; // ПЕРЕПИСЫВАНИЕ УРЛОВ

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {
  return function() {

	  let resolve = resolver();
	  let manifest;
	  if (!isDevelopment) {
	    manifest = require('../manifest/assets.json');
	    global.mnfst = manifest;
	  }

	  function url(urlLiteral) {
	    urlLiteral = resolve.call(this, urlLiteral);
	    for (let asset in manifest) {
	      if (urlLiteral.val == `url("${asset}")`) {
	        urlLiteral.string = urlLiteral.val = `url("${manifest[asset]}")`;
	      }
	    }
	    return urlLiteral;
	  }

	  url.options = resolve.options;
	  url.raw = true;

	  return combine(
	  	gulp.src(options.src),
	  	$.if(isDevelopment, $.sourcemaps.init()),
	  	$.stylus({ define: {url: url} }),
	  	$.if(isDevelopment, $.sourcemaps.write()),
	  	$.if(!isDevelopment, combine($.cssnano(), $.rev())),
	  	gulp.dest('public/styles'),
	  	$.if(!isDevelopment, combine($.rev.manifest('css.json'), gulp.dest('manifest')))
	  ).on('error', $.notify.onError());
  };
};
