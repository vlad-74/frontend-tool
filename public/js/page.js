/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _menu = __webpack_require__(2);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hf = __webpack_require__(3);
	var ha = __webpack_require__(4);

	var log = __webpack_require__(6)(module);

	var a = 111111111111111;

	new _menu2.default({
	  elem: document.querySelector('.menu')
	});

	document.querySelector('.page__header').onclick = function () {
	  __webpack_require__.e/* nsure */(1, function () {
	    __webpack_require__(8);
	  });
	};

	var test = function test() {
	  log(hf.getFunctionName() + 'ТЕКСТ ЛОГА ' + accessLoger);
	};

	test();

	var prom = ha.getPromise(100);

	setTimeout(function () {
	  console.log(prom);
	}, 200);
	console.log('accessLoger = ', accessLoger, a);

	// console.log((new Error()).stack);


	log(hf.getFunctionName() + 'ТЕКСТ ЛОГА ' + accessLoger);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Menu = function Menu(_ref) {
	  var elem = _ref.elem;

	  _classCallCheck(this, Menu);

	  elem.querySelector('.menu__title').onclick = function () {
	    elem.classList.toggle('menu_open');
	    return false;
	  };
	};

		exports.default = Menu;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/* =======================================htmlspecialchars=======================================*/
	exports.escapeHtml = function(text) {
	  return text
	      .replace(/&/g, "&amp;")
	      .replace(/</g, "&lt;")
	      .replace(/>/g, "&gt;")
	      .replace(/"/g, "&quot;")
	      .replace(/'/g, "&#039;");
	};

	exports.escapeHtml_decode = function(string, quote_style) {
	  var optTemp = 0,
	    i = 0,
	    noquotes = false;
	  if (typeof quote_style === 'undefined') {
	    quote_style = 2;
	  }
	  string = string.toString()
	    .replace(/&lt;/g, '<')
	    .replace(/&gt;/g, '>');
	  var OPTS = {
	    'ENT_NOQUOTES': 0,
	    'ENT_HTML_QUOTE_SINGLE': 1,
	    'ENT_HTML_QUOTE_DOUBLE': 2,
	    'ENT_COMPAT': 2,
	    'ENT_QUOTES': 3,
	    'ENT_IGNORE': 4
	  };
	  if (quote_style === 0) {
	    noquotes = true;
	  }
	  if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
	    quote_style = [].concat(quote_style);
	    for (i = 0; i < quote_style.length; i++) {
	      // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
	      if (OPTS[quote_style[i]] === 0) {
	        noquotes = true;
	      } else if (OPTS[quote_style[i]]) {
	        optTemp = optTemp | OPTS[quote_style[i]];
	      }
	    }
	    quote_style = optTemp;
	  }
	  if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
	    string = string.replace(/&#0*39;/g, "'"); // PHP doesn't currently escape if more than one 0, but it should
	    // string = string.replace(/&apos;|&#x0*27;/g, "'"); // This would also be useful here, but not a part of PHP
	  }
	  if (!noquotes) {
	    string = string.replace(/&quot;/g, '"');
	  }
	  // Put this in last place to avoid escape being double-decoded
	  string = string.replace(/&amp;/g, '&');

	  return string;
	}
	/* =======================================htmlspecialchars=======================================*/

	exports.capitalizeFirstLetter = function(string) {
	    return string[0].toUpperCase() + string.slice(1);
	};

	exports.toLowerFirstLetter = function(string) {
	    return string[0].toLowerCase() + string.slice(1);
	};

	exports.supports_localStorage = function() {
	  try {
	    return 'localStorage' in window && window['localStorage'] !== null;
	  } catch (e) {
	      return false;
	  }
	};

	let getBrowser = function() {
	    var b = "unknown";
	    try {
	        var e;
	        var f = e.width;
	    } catch (e) {
	        var err = e.toString();
	        if(err.search("not an object") !== -1){
	            return "safari";
	        } else if(err.search("Cannot read") !== -1){
	            return "chrome";
	        } else if(err.search("e is undefined") !== -1){
	            return "firefox";
	        } else if(err.search("Unable to get property 'width' of undefined or null reference") !== -1){
	            if(!(false || !!document.documentMode) && !!window.StyleMedia){
	                return "edge";
	            }
	        } else if(err.search("cannot convert e into object") !== -1){
	            return "opera";
	        } else if(/*@cc_on!@*/false || !!document.documentMode){
	            return "IE";
	        } else {
	            return undefined;
	        }
	    }
	};

	exports.getFunctionName = function(){
	  let err = new Error().stack, txt_fun,fun,emp;
	  emp = ' - АНОНИМНАЯ';
	  if(getBrowser() == "chrome") {
	    fun = err.split('\n')[2].split(' ')[5];
	    if(fun != 'Object.<anonymous>'){ txt_fun = err.split('\n')[2].split(' ')[5];}else{txt_fun = emp}
	    return getBrowser() + ' | ФАЙЛ ' + (err).split('\n')[2].split(' ')[6].split('/')[4].split(':')[0] + ' | ФУНКЦИЯ ' + txt_fun + ' | ';
	  }else{
	    fun = err.split('\n')[1].split('@')[0];
	    if(fun != ''){ txt_fun = err.split('\n')[1].split('@')[0]}else{txt_fun = emp}
	    return getBrowser() + ' | ФАЙЛ ' + (err).split('js/')[1].split(':')[0] + ' | ФУНКЦИЯ ' + txt_fun + ' | ';
	  }
	};

	// process.stdout.write('КОНТЕНТ ИЗ help-functions:' +'\n' + '| functions ');

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	exports.phpCreateFile = function (fileName, p){ // fileName = 'fileName.json' или 'fileName.'
	  var data = new FormData();
	  data.append("data" , fileName);

	  var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
	  xhr.open( 'POST', p, true );
	  xhr.send(data);
	}

	exports.phpWriteFile = function(fileName, fileContent, p){ // fileName = 'fileName.json' или 'fileName.'
	  var dataf = new FormData();
	  dataf.append("name" , fileName);
	  dataf.append("cont" , fileContent);

	  var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
	  xhr.open( 'POST', p, true );
	  xhr.send(dataf);
	}

	let getResultFromJsonNode = function(path){
	   var menuButtons = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());// var a = JSON.parse(menuButtons);
	   return menuButtons;  
	};
	exports.getResultFromJsonNode = getResultFromJsonNode;

	exports.getResultFromJson = function(path){
	  // path = '../../' + path; //console.log(path);

	  var resultFromJson = null;
	  try { 
	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', path, false);
	    xhr.send();

	    if (xhr.status != 200) {
	   // обработать ошибку
	   alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
	    } else {
	  // вывести результат
	  // alert(xhr.responseText);
	    }
	    resultFromJson = JSON.parse(xhr.responseText);
	    return resultFromJson;
	  }
	  catch(err) {
	    resultFromJson = getResultFromJsonNode(path); 
	    return resultFromJson;
	  }
	};

	exports.promiseGetDataFromUrl = function(url){
	    return new Promise(function(resolve, reject) {
	        let xhr = new XMLHttpRequest();
	        xhr.open('GET', url);
	        xhr.onload = function() {
	            if (xhr.status === 200) {
	                let json = JSON.parse(xhr.response);
	                resolve(json.Search);
	            } else {
	                reject(xhr.statusText);
	            }
	        };
	        
	        xhr.onerror = function(error) {
	            reject(error);
	        };
	        
	        xhr.send();
	    });
	}

	exports.httpGetPromise = function(url){
	  return new Promise(function(resolve, reject) {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', url, true);

	    xhr.onload = function() {
	      if (this.status == 200) {
	        resolve(this.response);
	      } else {
	        var error = new Error(this.statusText);
	        error.code = this.status;
	        reject(error);
	      }
	    };
	    xhr.onerror = function() {
	      reject(new Error("Network Error"));
	    };
	    xhr.send();
	  });
	}

	//ПРИМЕР ПРОМИСА ДЛЯ ТЕСТОВ С ЗАДАВАНМЫМ ИНТЕРВАЛОМ
	exports.getPromise = (n) => {
	    return new Promise(function(resolve, reject) {
	        setTimeout(() => {
	            resolve('Promise ФУНКЦИЯ getPromise'+ n +'() ОТРАБОТАЛА !');
	        }, n);
	    });
	};

	// process.stdout.write('| ajax ');

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 5;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {"use strict";

	// var log = require('logger')(module);
	// var args = [' - logger = ' + module.filename.substring(module.filename.indexOf('##log1Module\\dir') +17)].concat([].slice.call(arguments));
	global.accessLoger = true;

	module.exports = function (module) {
	  return function () /* ... */{

	    console.log.format = function (c) {
	      return c.getDate() + ": [" + c.filename + ":" + c.getLineNumber() + "] " + c.functionName;
	    };

	    var isDev = process.env.NODE_ENV;
	    var args = [' logger: ' + JSON.stringify(arguments) + ' || '];
	    if (accessLoger) {
	      console.log.apply(console, args);
	    }
	  };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMjRlMTVhMmJmYmU2M2M5ODAyMSIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy9mcm9udGVuZC9qcy9tZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaGVscC1mdW5jdGlvbnMvZnVuY3Rpb25zL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2hlbHAtZnVuY3Rpb25zL2Z1bmN0aW9ucy9hamF4LmpzIiwid2VicGFjazovLy8uL34vaGVscC1mdW5jdGlvbnMvZnVuY3Rpb25zICReIiwid2VicGFjazovLy9mcm9udGVuZC9qcy9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pXG4gXHRcdFx0XHRjYWxsYmFja3MucHVzaC5hcHBseShjYWxsYmFja3MsIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSk7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzKTtcbiBcdFx0d2hpbGUoY2FsbGJhY2tzLmxlbmd0aClcbiBcdFx0XHRjYWxsYmFja3Muc2hpZnQoKS5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHQvLyBBcnJheSBtZWFucyBcImxvYWRpbmdcIiwgYXJyYXkgY29udGFpbnMgY2FsbGJhY2tzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOjBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQsIGNhbGxiYWNrKSB7XG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApXG4gXHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gYW4gYXJyYXkgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXS5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW2NhbGxiYWNrXTtcbiBcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiBcdFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiO1xuIFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTI0ZTE1YTJiZmJlNjNjOTgwMjEiLCIndXNlIHN0cmljdCc7XG52YXIgaGYgPSByZXF1aXJlKCdoZWxwLWZ1bmN0aW9ucy9mdW5jdGlvbnMvZnVuY3Rpb25zJyk7XG52YXIgaGEgPSByZXF1aXJlKCdoZWxwLWZ1bmN0aW9ucy9mdW5jdGlvbnMvYWpheCcpO1xuXG52YXIgbG9nID0gcmVxdWlyZSgnLi9sb2dnZXInKShtb2R1bGUpO1xuXG52YXIgYSA9IDExMTExMTExMTExMTExMTtcblxuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcblxubmV3IE1lbnUoe1xuICBlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX2hlYWRlcicpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKCkge1xuICAgIHJlcXVpcmUoJy4vaGVhZGVyJyk7XG4gIH0pO1xufTtcblxuXG5sZXQgdGVzdCA9IGZ1bmN0aW9uKCl7XG5cdGxvZyhoZi5nZXRGdW5jdGlvbk5hbWUoKSArICfQotCV0JrQodCiINCb0J7Qk9CQICcgKyBhY2Nlc3NMb2dlcik7XG59O1xuXG50ZXN0KCk7XG5cbmxldCBwcm9tID0gaGEuZ2V0UHJvbWlzZSgxMDApXG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjb25zb2xlLmxvZyhwcm9tKX0sIDIwMCk7XG5jb25zb2xlLmxvZygnYWNjZXNzTG9nZXIgPSAnLCBhY2Nlc3NMb2dlciwgYSk7XG5cbi8vIGNvbnNvbGUubG9nKChuZXcgRXJyb3IoKSkuc3RhY2spO1xuXG5cbmxvZyhoZi5nZXRGdW5jdGlvbk5hbWUoKSArICfQotCV0JrQodCiINCb0J7Qk9CQICcgKyBhY2Nlc3NMb2dlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2pzL3BhZ2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHtlbGVtfSkge1xuICAgIGVsZW0ucXVlcnlTZWxlY3RvcignLm1lbnVfX3RpdGxlJykub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X29wZW4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvanMvbWVudS9pbmRleC5qcyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWh0bWxzcGVjaWFsY2hhcnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5leHBvcnRzLmVzY2FwZUh0bWwgPSBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgcmV0dXJuIHRleHRcclxuICAgICAgLnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKVxyXG4gICAgICAucmVwbGFjZSgvPC9nLCBcIiZsdDtcIilcclxuICAgICAgLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpXHJcbiAgICAgIC5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKVxyXG4gICAgICAucmVwbGFjZSgvJy9nLCBcIiYjMDM5O1wiKTtcclxufTtcclxuXHJcbmV4cG9ydHMuZXNjYXBlSHRtbF9kZWNvZGUgPSBmdW5jdGlvbihzdHJpbmcsIHF1b3RlX3N0eWxlKSB7XHJcbiAgdmFyIG9wdFRlbXAgPSAwLFxyXG4gICAgaSA9IDAsXHJcbiAgICBub3F1b3RlcyA9IGZhbHNlO1xyXG4gIGlmICh0eXBlb2YgcXVvdGVfc3R5bGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBxdW90ZV9zdHlsZSA9IDI7XHJcbiAgfVxyXG4gIHN0cmluZyA9IHN0cmluZy50b1N0cmluZygpXHJcbiAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXHJcbiAgICAucmVwbGFjZSgvJmd0Oy9nLCAnPicpO1xyXG4gIHZhciBPUFRTID0ge1xyXG4gICAgJ0VOVF9OT1FVT1RFUyc6IDAsXHJcbiAgICAnRU5UX0hUTUxfUVVPVEVfU0lOR0xFJzogMSxcclxuICAgICdFTlRfSFRNTF9RVU9URV9ET1VCTEUnOiAyLFxyXG4gICAgJ0VOVF9DT01QQVQnOiAyLFxyXG4gICAgJ0VOVF9RVU9URVMnOiAzLFxyXG4gICAgJ0VOVF9JR05PUkUnOiA0XHJcbiAgfTtcclxuICBpZiAocXVvdGVfc3R5bGUgPT09IDApIHtcclxuICAgIG5vcXVvdGVzID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBxdW90ZV9zdHlsZSAhPT0gJ251bWJlcicpIHsgLy8gQWxsb3cgZm9yIGEgc2luZ2xlIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmcgZmxhZ3NcclxuICAgIHF1b3RlX3N0eWxlID0gW10uY29uY2F0KHF1b3RlX3N0eWxlKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBxdW90ZV9zdHlsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyBSZXNvbHZlIHN0cmluZyBpbnB1dCB0byBiaXR3aXNlIGUuZy4gJ1BBVEhJTkZPX0VYVEVOU0lPTicgYmVjb21lcyA0XHJcbiAgICAgIGlmIChPUFRTW3F1b3RlX3N0eWxlW2ldXSA9PT0gMCkge1xyXG4gICAgICAgIG5vcXVvdGVzID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChPUFRTW3F1b3RlX3N0eWxlW2ldXSkge1xyXG4gICAgICAgIG9wdFRlbXAgPSBvcHRUZW1wIHwgT1BUU1txdW90ZV9zdHlsZVtpXV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHF1b3RlX3N0eWxlID0gb3B0VGVtcDtcclxuICB9XHJcbiAgaWYgKHF1b3RlX3N0eWxlICYgT1BUUy5FTlRfSFRNTF9RVU9URV9TSU5HTEUpIHtcclxuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC8mIzAqMzk7L2csIFwiJ1wiKTsgLy8gUEhQIGRvZXNuJ3QgY3VycmVudGx5IGVzY2FwZSBpZiBtb3JlIHRoYW4gb25lIDAsIGJ1dCBpdCBzaG91bGRcclxuICAgIC8vIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC8mYXBvczt8JiN4MCoyNzsvZywgXCInXCIpOyAvLyBUaGlzIHdvdWxkIGFsc28gYmUgdXNlZnVsIGhlcmUsIGJ1dCBub3QgYSBwYXJ0IG9mIFBIUFxyXG4gIH1cclxuICBpZiAoIW5vcXVvdGVzKSB7XHJcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpO1xyXG4gIH1cclxuICAvLyBQdXQgdGhpcyBpbiBsYXN0IHBsYWNlIHRvIGF2b2lkIGVzY2FwZSBiZWluZyBkb3VibGUtZGVjb2RlZFxyXG4gIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xyXG5cclxuICByZXR1cm4gc3RyaW5nO1xyXG59XHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWh0bWxzcGVjaWFsY2hhcnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSBmdW5jdGlvbihzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxufTtcclxuXHJcbmV4cG9ydHMudG9Mb3dlckZpcnN0TGV0dGVyID0gZnVuY3Rpb24oc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvTG93ZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbn07XHJcblxyXG5leHBvcnRzLnN1cHBvcnRzX2xvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93ICYmIHdpbmRvd1snbG9jYWxTdG9yYWdlJ10gIT09IG51bGw7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxubGV0IGdldEJyb3dzZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBiID0gXCJ1bmtub3duXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBlO1xyXG4gICAgICAgIHZhciBmID0gZS53aWR0aDtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB2YXIgZXJyID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmKGVyci5zZWFyY2goXCJub3QgYW4gb2JqZWN0XCIpICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcInNhZmFyaVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZihlcnIuc2VhcmNoKFwiQ2Fubm90IHJlYWRcIikgIT09IC0xKXtcclxuICAgICAgICAgICAgcmV0dXJuIFwiY2hyb21lXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKGVyci5zZWFyY2goXCJlIGlzIHVuZGVmaW5lZFwiKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJmaXJlZm94XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKGVyci5zZWFyY2goXCJVbmFibGUgdG8gZ2V0IHByb3BlcnR5ICd3aWR0aCcgb2YgdW5kZWZpbmVkIG9yIG51bGwgcmVmZXJlbmNlXCIpICE9PSAtMSl7XHJcbiAgICAgICAgICAgIGlmKCEoZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpICYmICEhd2luZG93LlN0eWxlTWVkaWEpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZWRnZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmKGVyci5zZWFyY2goXCJjYW5ub3QgY29udmVydCBlIGludG8gb2JqZWN0XCIpICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcIm9wZXJhXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKXtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSUVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0RnVuY3Rpb25OYW1lID0gZnVuY3Rpb24oKXtcclxuICBsZXQgZXJyID0gbmV3IEVycm9yKCkuc3RhY2ssIHR4dF9mdW4sZnVuLGVtcDtcclxuICBlbXAgPSAnIC0g0JDQndCe0J3QmNCc0J3QkNCvJztcclxuICBpZihnZXRCcm93c2VyKCkgPT0gXCJjaHJvbWVcIikge1xyXG4gICAgZnVuID0gZXJyLnNwbGl0KCdcXG4nKVsyXS5zcGxpdCgnICcpWzVdO1xyXG4gICAgaWYoZnVuICE9ICdPYmplY3QuPGFub255bW91cz4nKXsgdHh0X2Z1biA9IGVyci5zcGxpdCgnXFxuJylbMl0uc3BsaXQoJyAnKVs1XTt9ZWxzZXt0eHRfZnVuID0gZW1wfVxyXG4gICAgcmV0dXJuIGdldEJyb3dzZXIoKSArICcgfCDQpNCQ0JnQmyAnICsgKGVycikuc3BsaXQoJ1xcbicpWzJdLnNwbGl0KCcgJylbNl0uc3BsaXQoJy8nKVs0XS5zcGxpdCgnOicpWzBdICsgJyB8INCk0KPQndCa0KbQmNCvICcgKyB0eHRfZnVuICsgJyB8ICc7XHJcbiAgfWVsc2V7XHJcbiAgICBmdW4gPSBlcnIuc3BsaXQoJ1xcbicpWzFdLnNwbGl0KCdAJylbMF07XHJcbiAgICBpZihmdW4gIT0gJycpeyB0eHRfZnVuID0gZXJyLnNwbGl0KCdcXG4nKVsxXS5zcGxpdCgnQCcpWzBdfWVsc2V7dHh0X2Z1biA9IGVtcH1cclxuICAgIHJldHVybiBnZXRCcm93c2VyKCkgKyAnIHwg0KTQkNCZ0JsgJyArIChlcnIpLnNwbGl0KCdqcy8nKVsxXS5zcGxpdCgnOicpWzBdICsgJyB8INCk0KPQndCa0KbQmNCvICcgKyB0eHRfZnVuICsgJyB8ICc7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ9Ca0J7QndCi0JXQndCiINCY0JcgaGVscC1mdW5jdGlvbnM6JyArJ1xcbicgKyAnfCBmdW5jdGlvbnMgJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hlbHAtZnVuY3Rpb25zL2Z1bmN0aW9ucy9mdW5jdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5waHBDcmVhdGVGaWxlID0gZnVuY3Rpb24gKGZpbGVOYW1lLCBwKXsgLy8gZmlsZU5hbWUgPSAnZmlsZU5hbWUuanNvbicg0LjQu9C4ICdmaWxlTmFtZS4nXHJcbiAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBkYXRhLmFwcGVuZChcImRhdGFcIiAsIGZpbGVOYW1lKTtcclxuXHJcbiAgdmFyIHhociA9ICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QpID8gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgOiBuZXcgYWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO1xyXG4gIHhoci5vcGVuKCAnUE9TVCcsIHAsIHRydWUgKTtcclxuICB4aHIuc2VuZChkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0cy5waHBXcml0ZUZpbGUgPSBmdW5jdGlvbihmaWxlTmFtZSwgZmlsZUNvbnRlbnQsIHApeyAvLyBmaWxlTmFtZSA9ICdmaWxlTmFtZS5qc29uJyDQuNC70LggJ2ZpbGVOYW1lLidcclxuICB2YXIgZGF0YWYgPSBuZXcgRm9ybURhdGEoKTtcclxuICBkYXRhZi5hcHBlbmQoXCJuYW1lXCIgLCBmaWxlTmFtZSk7XHJcbiAgZGF0YWYuYXBwZW5kKFwiY29udFwiICwgZmlsZUNvbnRlbnQpO1xyXG5cclxuICB2YXIgeGhyID0gKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkgPyBuZXcgWE1MSHR0cFJlcXVlc3QoKSA6IG5ldyBhY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIik7XHJcbiAgeGhyLm9wZW4oICdQT1NUJywgcCwgdHJ1ZSApO1xyXG4gIHhoci5zZW5kKGRhdGFmKTtcclxufVxyXG5cclxubGV0IGdldFJlc3VsdEZyb21Kc29uTm9kZSA9IGZ1bmN0aW9uKHBhdGgpe1xyXG4gICB2YXIgbWVudUJ1dHRvbnMgPSByZXF1aXJlKHBhdGgpOy8vIHZhciBhID0gSlNPTi5wYXJzZShtZW51QnV0dG9ucyk7XHJcbiAgIHJldHVybiBtZW51QnV0dG9uczsgIFxyXG59O1xyXG5leHBvcnRzLmdldFJlc3VsdEZyb21Kc29uTm9kZSA9IGdldFJlc3VsdEZyb21Kc29uTm9kZTtcclxuXHJcbmV4cG9ydHMuZ2V0UmVzdWx0RnJvbUpzb24gPSBmdW5jdGlvbihwYXRoKXtcclxuICAvLyBwYXRoID0gJy4uLy4uLycgKyBwYXRoOyAvL2NvbnNvbGUubG9nKHBhdGgpO1xyXG5cclxuICB2YXIgcmVzdWx0RnJvbUpzb24gPSBudWxsO1xyXG4gIHRyeSB7IFxyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgIHhoci5vcGVuKCdHRVQnLCBwYXRoLCBmYWxzZSk7XHJcbiAgICB4aHIuc2VuZCgpO1xyXG5cclxuICAgIGlmICh4aHIuc3RhdHVzICE9IDIwMCkge1xyXG4gICAvLyDQvtCx0YDQsNCx0L7RgtCw0YLRjCDQvtGI0LjQsdC60YNcclxuICAgYWxlcnQoJ9Ce0YjQuNCx0LrQsCAnICsgeGhyLnN0YXR1cyArICc6ICcgKyB4aHIuc3RhdHVzVGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gIC8vINCy0YvQstC10YHRgtC4INGA0LXQt9GD0LvRjNGC0LDRglxyXG4gIC8vIGFsZXJ0KHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgfVxyXG4gICAgcmVzdWx0RnJvbUpzb24gPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdEZyb21Kc29uO1xyXG4gIH1cclxuICBjYXRjaChlcnIpIHtcclxuICAgIHJlc3VsdEZyb21Kc29uID0gZ2V0UmVzdWx0RnJvbUpzb25Ob2RlKHBhdGgpOyBcclxuICAgIHJldHVybiByZXN1bHRGcm9tSnNvbjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnRzLnByb21pc2VHZXREYXRhRnJvbVVybCA9IGZ1bmN0aW9uKHVybCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xyXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGpzb24uU2VhcmNoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCh4aHIuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0cy5odHRwR2V0UHJvbWlzZSA9IGZ1bmN0aW9uKHVybCl7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcblxyXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IodGhpcy5zdGF0dXNUZXh0KTtcclxuICAgICAgICBlcnJvci5jb2RlID0gdGhpcy5zdGF0dXM7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcclxuICAgIH07XHJcbiAgICB4aHIuc2VuZCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vL9Cf0KDQmNCc0JXQoCDQn9Cg0J7QnNCY0KHQkCDQlNCb0K8g0KLQldCh0KLQntCSINChINCX0JDQlNCQ0JLQkNCd0JzQq9CcINCY0J3QotCV0KDQktCQ0JvQntCcXHJcbmV4cG9ydHMuZ2V0UHJvbWlzZSA9IChuKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoJ1Byb21pc2Ug0KTQo9Cd0JrQptCY0K8gZ2V0UHJvbWlzZScrIG4gKycoKSDQntCi0KDQkNCR0J7QotCQ0JvQkCAhJyk7XHJcbiAgICAgICAgfSwgbik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCd8IGFqYXggJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hlbHAtZnVuY3Rpb25zL2Z1bmN0aW9ucy9hamF4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oZWxwLWZ1bmN0aW9ucy9mdW5jdGlvbnMgJF5cbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdmFyIGxvZyA9IHJlcXVpcmUoJ2xvZ2dlcicpKG1vZHVsZSk7XG4vLyB2YXIgYXJncyA9IFsnIC0gbG9nZ2VyID0gJyArIG1vZHVsZS5maWxlbmFtZS5zdWJzdHJpbmcobW9kdWxlLmZpbGVuYW1lLmluZGV4T2YoJyMjbG9nMU1vZHVsZVxcXFxkaXInKSArMTcpXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbmdsb2JhbC5hY2Nlc3NMb2dlciA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi4gKi8pIHtcblxuICBjb25zb2xlLmxvZy5mb3JtYXQgPSBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLmdldERhdGUoKSArIFwiOiBbXCIgKyBjLmZpbGVuYW1lICsgXCI6XCIgKyBjLmdldExpbmVOdW1iZXIoKSArIFwiXSBcIiArIGMuZnVuY3Rpb25OYW1lO1xuICB9O1xuXG4gIFx0Y29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICB2YXIgYXJncyA9IFsnIGxvZ2dlcjogJyArIEpTT04uc3RyaW5naWZ5KGFyZ3VtZW50cykgKyAnIHx8ICcgXTtcbiAgICBcdGlmKGFjY2Vzc0xvZ2VyKXtcbiAgICBcdFx0Y29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgXHR9IFxuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvanMvbG9nZ2VyLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNGQTtBQUNBO0FBT0E7QUFDQTs7Ozs7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=