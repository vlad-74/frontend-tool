'use strict';
var hf = require('help-functions/functions/functions');

var log = require('./logger')(module);

var a = 111111111111111;

import Menu from './menu';

new Menu({
  elem: document.querySelector('.menu')
});

document.querySelector('.page__header').onclick = function() {
  require.ensure([], function() {
    require('./header');
  });
};

// let getFunctionName = function(){
//   return '| function - ' + (new Error()).stack.split('\n')[2].split(' ')[5] + ' | ';
// }

let test = function(){
	log(hf.getFunctionName() + 'ТЕКСТ ЛОГА ' + accessLoger);
};

test();


console.log('accessLoger = ', accessLoger, a)
