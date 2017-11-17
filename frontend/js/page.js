'use strict';

var log = require('./logger')(module);
let a = 111111111111111;
import Menu from './menu';

new Menu({
  elem: document.querySelector('.menu')
});

document.querySelector('.page__header').onclick = function() {
  require.ensure([], function() {
    require('./header');
  });
};

log('ПРОСТОЙ ТЕКСТ ЛОГ', accessLoger)
// debugger;
console.log('accessLoger = ', accessLoger, a)
