'use strict';

var log = require('./logger')(module);
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
console.log('accessLoger = ', accessLoger)
