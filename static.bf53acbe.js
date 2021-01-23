(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://winsailconsulting.com/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("grid-styled/emotion");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-svg-inline");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGa = __webpack_require__(50);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import gaService from "./GAservices";
// import { settings } from '../config'

var _gaInitialised = false;

function getInitialised() {
  return _gaInitialised;
}

function setInitialised() {
  _gaInitialised = true;
}

var settings = {};
settings.GOOGLE_ANALYTICS_KEY = 'UA-101733489-1';
settings.GOOGLE_ANALYTICS_DEBUG = true;
settings.GOOGLE_ANALYTICS_ENABLED = true;

var withGA = function withGA(WrappedComponent) {
  var trackPage = function trackPage(page) {
    _reactGa2.default.set({
      page: page
    });
    _reactGa2.default.pageview(page);
  };

  var HOC = function HOC(props) {
    if (typeof window !== 'undefined') {
      if (settings.GOOGLE_ANALYTICS_ENABLED) {
        if (!getInitialised()) {
          setInitialised();
          _reactGa2.default.initialize(settings.GOOGLE_ANALYTICS_KEY, {
            debug: settings.GOOGLE_ANALYTICS_DEBUG
          });
        }
        if (props.history.location) {
          var page = props.history.location.pathname;
          trackPage(page);
        }
      }
    }
    return _react2.default.createElement(WrappedComponent, props);
  };

  return HOC;
};

exports.default = withGA;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path fill=\"none\" d=\"M0 0h24v24H0V0zm0 0h24v24H0V0z\"/>\n    <path d=\"M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>\n</svg>"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABHCAMAAADSvU5aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjQ0MEFBMTAwNjk3MTFFN0FFOERCODhDQzQ4OTdGODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjQ0MEFBMTEwNjk3MTFFN0FFOERCODhDQzQ4OTdGODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNDQwQUEwRTA2OTcxMUU3QUU4REI4OENDNDg5N0Y4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNDQwQUEwRjA2OTcxMUU3QUU4REI4OENDNDg5N0Y4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlrE+AIAAAMAUExURQA0aOUZN//SBL/M2X+Zs0Bnju/y9hBBcZ+zxmCAoc/Z4zBahCBNe9/m7PjFzfKMm+xTaa+/0I+mvVB0l3CNqv/ogf/0wP/dQ/3x8u9wgucnRPWotOpEXeg2UP/jYvSap/rU2eclNPzi5v/54PB+j//YI//30Pe3wPy7Cv/VFP/87/mkEeo8LfqvDu1hdv/uoexHKvJ2Hv/rkfBqIf3GB/SBGveYFP/aM+9eJOgwMf/mcv/xsO1TJ/WNF//gU/BtMfi9nf3YZvmsQO9tcv3KF/q+XP3r0/ivUPSEKv///0pKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///81JxWoAAABKdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////8AWiu/GwAACetJREFUeNrsWVtzFMcV7jDXnZmVdi5CKy0gRQgEAgQGbCrCUqii4qT/YX5D3lN5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"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("emotion");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAACVBMVEXh5Obe4ODT0tClScFGAAAAGklEQVQI12OYwMDAkALEkkDM5sDAwIgh0AAAOygDKTXGU44AAAAASUVORK5CYII="

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emotion = __webpack_require__(9);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _emotion2 = __webpack_require__(2);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactSvgInline = __webpack_require__(4);

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

var _baselineAssignment24px = __webpack_require__(45);

var _baselineAssignment24px2 = _interopRequireDefault(_baselineAssignment24px);

var _baselineFace24px = __webpack_require__(14);

var _baselineFace24px2 = _interopRequireDefault(_baselineFace24px);

var _baselineLive_help24px = __webpack_require__(46);

var _baselineLive_help24px2 = _interopRequireDefault(_baselineLive_help24px);

var _baselineSchool24px = __webpack_require__(47);

var _baselineSchool24px2 = _interopRequireDefault(_baselineSchool24px);

var _hr_sectionbg = __webpack_require__(10);

var _hr_sectionbg2 = _interopRequireDefault(_hr_sectionbg);

var _baselineCheck_circle_outline24px = __webpack_require__(6);

var _baselineCheck_circle_outline24px2 = _interopRequireDefault(_baselineCheck_circle_outline24px);

var _HomeTabs = __webpack_require__(48);

var _HomeTabs2 = _interopRequireDefault(_HomeTabs);

var _withGA = __webpack_require__(5);

var _withGA2 = _interopRequireDefault(_withGA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var panel = /*#__PURE__*/(0, _reactEmotion.css)('h3{text-align:center;font-size:1.3rem;margin:10px 0;}p{text-align:justify;font-weight:400;font-size:14px;}');
var iconStyle = /*#__PURE__*/(0, _reactEmotion.css)('text-align:center;svg{fill:#db3a1b;height:100px;width:100px;}');
var checkStyle = /*#__PURE__*/(0, _reactEmotion.css)('svg{fill:rgba(0,0,0,0.54);height:20px;width:20px;align-self:flex-start;flex-shrink:0 margin-right:0px;}');
var grayBox = /*#__PURE__*/(0, _reactEmotion.css)('background-image:url(', _hr_sectionbg2.default, ');background-repeat:repeat;background-position:center;text-align:justify;p{font-weight:500;}');

var redButton = /*#__PURE__*/(0, _reactEmotion.css)('background-color:#db3a1b;padding:8px 15px;border-radius:15px;color:white;font-weight:500;text-decoration:none;box-shadow:3px 3px 3px #ccc;');

var checkPanel = /*#__PURE__*/(0, _reactEmotion.css)('z-index:1;h2{text-align:center;font-weight:300;font-size:2.2rem;margin:20px 0;}ul{list-style:none;padding:0px;}li{display:flex;position:relative;text-align:left;justify-content:flex-start;padding:10px 20px;}ul li div{flex:1 1 auto;padding-left:20px;}');

var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _emotion2.Flex,
        { flexWrap: 'wrap' },
        _react2.default.createElement(
          _emotion2.Box,
          { width: 1 },
          _react2.default.createElement(
            'h1',
            null,
            'Accelerate Success'
          )
        ),
        _react2.default.createElement(
          _emotion2.Box,
          { width: [1, 1 / 2, 1 / 4], p: 3, className: panel },
          _react2.default.createElement(_reactSvgInline2.default, { className: iconStyle, svg: _baselineAssignment24px2.default, component: 'div' }),
          _react2.default.createElement(
            'h3',
            null,
            'Application Selection'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Research proves when a person fails in their career in more than 90% of the time that failure is directly attributed to some aspect of human behavior. The Winslow Pre-employment Selection Profiles & Reports compare the applicant\'s behavior to the behavioral requirements of your positions, enabling you to select the best applicant for every position.'
          )
        ),
        _react2.default.createElement(
          _emotion2.Box,
          { width: [1, 1 / 2, 1 / 4], p: 3, className: panel },
          _react2.default.createElement(_reactSvgInline2.default, { className: iconStyle, svg: _baselineFace24px2.default, component: 'div' }),
          _react2.default.createElement(
            'h3',
            null,
            'Employee Development'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Winslow personality testing for employment provide valuable insight into why some employees are functioning successfully and why others are performing unsatisfactorily. The Reports enable employees to capitalize on their personality assets and control negative behaviors that are limiting success. They enable management to most effectively manage, motivate and develop their employees.'
          )
        ),
        _react2.default.createElement(
          _emotion2.Box,
          { width: [1, 1 / 2, 1 / 4], p: 3, className: panel },
          _react2.default.createElement(_reactSvgInline2.default, { className: iconStyle, svg: _baselineLive_help24px2.default, component: 'div' }),
          _react2.default.createElement(
            'h3',
            null,
            'Pre-employment Assessments'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Pre-employment personality testing and reports enables organizations to hire the best job applicants for every position. The Winslow applicant screening and selection Profiles measure the personality, behavior and attitudes of applicants and identify the best. The Winslow employment tests and Personality Reports enhance an organization\u2019s employee selection process.'
          )
        ),
        _react2.default.createElement(
          _emotion2.Box,
          { width: [1, 1 / 2, 1 / 4], p: 3, className: panel },
          _react2.default.createElement(_reactSvgInline2.default, { className: iconStyle, svg: _baselineSchool24px2.default, component: 'div' }),
          _react2.default.createElement(
            'h3',
            null,
            'Personnel Development'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Assessments, profiles, and tests are different names for pre-employment personality testing that measure the personality of employees participating in personnel development programs. The Winslow Profile is the most comprehensive personality profile utilized for personnel development. The Winslow Reports are the most comprehensive feedback provided by any assessment.'
          )
        ),
        _react2.default.createElement(
          _emotion2.Flex,
          { flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', className: grayBox },
          _react2.default.createElement(
            _emotion2.Box,
            { p: [3, 5], width: [1, 2 / 3] },
            _react2.default.createElement(
              'p',
              null,
              'At Winsail Consulting we know how to help you select the best available candidates for every position in your organization. We work closely with you and your hiring team and recruiters to identify employees that match the requirements of the positions you are filling. Every company has their own work culture and environment, and we strive to help you identify employees who will excel in your company\u2019s unique atmosphere.'
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Winsail Consulting\u2019s goal is to help you, and your leadership team, select and develop a workforce you will have confidence in.'
            )
          ),
          _react2.default.createElement(
            _emotion2.Box,
            { p: 2, pb: [4, 2], width: [1, 1 / 3], className: (0, _emotion.css)({ textAlign: 'center' })
            },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/sign-up', className: redButton },
              'Get Started Now'
            )
          )
        ),
        _react2.default.createElement(
          _emotion2.Flex,
          null,
          _react2.default.createElement(
            _emotion2.Box,
            { className: checkPanel },
            _react2.default.createElement(
              'h2',
              null,
              'Winslow Behavioral Assessment'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Recognized by experts as one of the world\u2019s premier employee selection development programs.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Assessments are taken over the internet with results immediately available.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Generate a comprehensive Participant\u2019s Report, Manager\u2019s Report and Executive Report.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Feature a Position Compatibility Summary (PCS), which indicates a participant\u2019s probability of success in a specific position based on his or her behavioral traits.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Access to creating Group Profiles which allow you to compare groups of candidates or employees-position specific.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'We can also provide \u2018customized analysis\u2019 of positions when needed.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'May be taken in English, Spanish, French and German.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Available at discounts when ordered in bulk.'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _emotion2.Flex,
          null,
          _react2.default.createElement(
            _emotion2.Box,
            null,
            _react2.default.createElement(_HomeTabs2.default, null)
          )
        )
      );
    }
  }]);

  return Home;
}(_react.PureComponent);

exports.default = (0, _withGA2.default)(Home);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z\"/>\n    <path fill=\"none\" d=\"M0 0h24v24H0z\"/>\n</svg>\n"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel/lib/styles/carousel.min.css");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _withGA = __webpack_require__(5);

var _withGA2 = _interopRequireDefault(_withGA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var headline = /*#__PURE__*/(0, _reactEmotion.css)({
  backgroundColor: 'rgb(243, 244, 244)',
  padding: '20px',
  textAlign: 'center',
  h1: {
    fontSize: '1.5rem',
    fontWeight: 400
  }
});

var Testimonials = function (_PureComponent) {
  _inherits(Testimonials, _PureComponent);

  function Testimonials() {
    _classCallCheck(this, Testimonials);

    return _possibleConstructorReturn(this, (Testimonials.__proto__ || Object.getPrototypeOf(Testimonials)).apply(this, arguments));
  }

  _createClass(Testimonials, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _emotion.Flex,
        { flexWrap: 'wrap' },
        _react2.default.createElement(
          _emotion.Box,
          { p: 1, width: 1, className: headline },
          _react2.default.createElement(
            'h1',
            null,
            'What participants have to say about their Winslow Report . . .'
          )
        ),
        _react2.default.createElement(
          _emotion.Box,
          { p: 3, width: [1, 1 / 2] },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Managing Partner, Major U.S. Accounting Firm'
            ),
            ' ',
            _react2.default.createElement(
              'i',
              null,
              '"I will not make a Partner selection decision without seeing their Winslow Success Profile."'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'T.B.'
            ),
            ' ',
            _react2.default.createElement(
              'i',
              null,
              'After digesting my Winslow Profile, I know how fortunate I am to have stumbled upon this opportunity and chalk it up to destiny. I\u2019m glad I didn\u2019t follow several inclinations over the past seven years such as go back to college for a degree in psychology or counseling, as I was inclined to do. Instead I waited (not a strong suit for me) and it is now apparent to me that I have been waiting for this. Watching your training videos, I am inspired by the demeanor and complete confidence through which you communicate. You are answering questions and completing thoughts that have been hanging in thin air. Not just this, but I genuinely like the person I see on the film!'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Michael'
            ),
            ' ',
            _react2.default.createElement(
              'i',
              null,
              'While I am handing out praise, and knowing I am the umpteenth person this week to tell you this, you and your remarkable program have earned our highest respect. I\'ll forever be grateful to Todd for introducing us to this evaluation tool. It\'s a stunningly great service and value! I\'ve recommended The Winslow Profile to several friends. Hoping this finds you in good health and Spirits.',
              ' '
            ),
            ' '
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Lee C. (Personal Coach):'
            ),
            _react2.default.createElement(
              'i',
              null,
              ' ',
              '"Thank you, Bill Winslow, for your great contributions to us individually and as a coaching organization. Your assessment has favorably impacted lots and lots of lives just from my personal observation, including my own. Merry Christmas and Happy New Year to you and yours!"'
            )
          ),
          ' ',
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Arlette Sisnett:'
            ),
            ' ',
            _react2.default.createElement(
              'i',
              null,
              '"The Winslow Programme helped me to improve my assertiveness and gave me greater self-confidence. The additional Winner\'s Edge training has left me with very good information which I can continue to use from day to day."'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Shawn E.'
            ),
            _react2.default.createElement(
              'i',
              null,
              ' ',
              'A year ago I went to a peer group meeting, several of those members where using your services and spoke very highly of it, so I gave it a try. Although I believed them, I truly didn\u2019t buy into it. First, I gave it to my staff, was surprised on some things but most where right on. I had one younger manger that was not working out and we were going to end up doing something different with he scored very highly, so I called you and you said it was our company holding him back and we needed to work with him. I wanted to prove you wrong, so I followed your advice. After a year, he is a star manager for us just like you said he would be. Also, I was hiring two sales people and I had the list down to five people. Number five had a lot of knowledge and experience and I really liked her. Number one was very young and full of himself, again to prove you wrong I hired number one guy you said would be good, thinking he would fail. I hired number five person knowing she was going to kill it, even scoring much lower then you recommended to hiring. Well again, to my surprise the guy I would have never hired broke the record for most sales in a first year and my superstar number five person you told me not to hire could not sell hot chocolate to an Eskimo. There are other stories I could tell you, but I sure your head is big enough already! I\u2019M A BELEIVER!!!! I\u2019ve being in business over 28yrs in multiple company\u2019s this system works, and you have turned me into a believer and a strong supporter of your methods.',
              ' '
            )
          ),
          ' ',
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Pamela Blackman:'
            ),
            _react2.default.createElement(
              'i',
              null,
              ' ',
              '"Winslow is an objective assessment tool, and through the Personality Trait Groups, I have come to understand how these traits relate to each other, and to realize that one has the ability to change the weaker characteristics. It has highlighted those areas where I am both strong and weak. This provided the opportunity for me to conduct a self-examination and build my determination to develop those weaker areas."'
            )
          )
        ),
        _react2.default.createElement(
          _emotion.Box,
          { p: 3, width: [1, 1 / 2] },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Keith B'
            ),
            '.',
            ' ',
            _react2.default.createElement(
              'i',
              null,
              'I happened to find an assessment (The Championship Profile) that I took February 1996! I\'m amazed at how accurate it still describes me. Just wanted to say thank you for a great assessment!'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            ' ',
            _react2.default.createElement(
              'b',
              null,
              'Vlad'
            ),
            _react2.default.createElement(
              'i',
              null,
              ' ',
              'I have been exposed to the world of the Winslow Report since 2006 (where a coach recommended for me to take it) and then again in 2008-2009 when I worked with a winslow consultant and got some coaching session for me and explanation on my report. I actually was amazed how insightful the Winslow Profile was and I\'d like to see what I can do for you if you need any help. I know a few startups that are in HR / Executive Search.'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            ' ',
            _react2.default.createElement(
              'b',
              null,
              'M.K.'
            ),
            _react2.default.createElement(
              'i',
              null,
              ' ',
              '"One word regarding the Overview of the WINSLOW DYNAMICS ASSESSMENT!!! WOW!! You nailed me...my strengths...my weaknesses (Ok Challenges)...my need to be part of a team...all my sensitivities and my insecurities...wow!! I mean WOW!! Thank you so much...much of this I have learned, unfortunately the hard way. But you putting it in one document is very comforting. Your ability to point out the positive and the Alerts on how to keep things in control is very helpful and I will use as my coach moving forward in all my endeavors. I will keep this document close and review often to keep myself in check."'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            ' ',
            _react2.default.createElement(
              'b',
              null,
              'Nigel Harris'
            ),
            ':',
            ' ',
            _react2.default.createElement(
              'i',
              null,
              '"The Winslow experience has strengthened my faith in my ability to achieve - to free myself from the shackles of limi tations. My philosophy is: what someone thinks about me does not define who I am."'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Rodney Doffin: '
            ),
            _react2.default.createElement(
              'i',
              null,
              '"The Winslow Programme helped me to identify those traits that are most likely to restrain me from reaching my goals and those that are most likely to help me achieve them. It provided a mechanism for me to recognize opportunities for im provement and guided me through the stages of personal change and development. I have grown as a result of the Winslow Assessment Profile and the coaching sessions. That growth is reflected in my personal and work relationships, (so my friends and colleagues tell me). I feel a sense of achievement as I reflect on the progress I have made. My goal is to be \'Unconsciously Competent\' (permanent personality change - high performance by reflex)."'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Hal Hunte:'
            ),
            ' ',
            _react2.default.createElement(
              'i',
              null,
              '"As a Winslow participant I have learned about the personality traits which I have that can assist me in working to my personal potential in my job. I have also learned about those that could hold me back from achieving my goals. As a coach I have learned How to communicate more effectively and have acquired those skills which could assist me in motivating my proteges to set and achieve realistic goals for themselves."',
              ' '
            )
          ),
          ' ',
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Peter Williams:'
            ),
            _react2.default.createElement(
              'i',
              null,
              ' ',
              '"It is very difficult to look at yourself objectively and see your own faults. Seeing faults in others is by far the easier task, Through Winslow I have been able to look at myself with an objective eye. I admit that I was a little anxious about what it would say. I am working on those aspects of my personality which need improving and, while I still have my faults, I have changed and will continue to change and be able to contribute more to my family, my friends and to this Company."'
            )
          )
        )
      );
    }
  }]);

  return Testimonials;
}(_react.PureComponent);

exports.default = (0, _withGA2.default)(Testimonials);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactStatic = __webpack_require__(3);

var _emotion = __webpack_require__(2);

var _signUpPen = __webpack_require__(51);

var _signUpPen2 = _interopRequireDefault(_signUpPen);

var _winslow_how_it_works_ = __webpack_require__(52);

var _winslow_how_it_works_2 = _interopRequireDefault(_winslow_how_it_works_);

var _winslow_how_it_works_3 = __webpack_require__(53);

var _winslow_how_it_works_4 = _interopRequireDefault(_winslow_how_it_works_3);

var _winslow_how_it_works_5 = __webpack_require__(54);

var _winslow_how_it_works_6 = _interopRequireDefault(_winslow_how_it_works_5);

var _withGA = __webpack_require__(5);

var _withGA2 = _interopRequireDefault(_withGA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var h1Class = /*#__PURE__*/(0, _reactEmotion.css)('font-size:25px;font-weight:400;padding:50px 20px;margin:0;');

var h2Class = /*#__PURE__*/(0, _reactEmotion.css)('font-weight:400;font-size:2rem;');
var grey = /*#__PURE__*/(0, _reactEmotion.css)('background-color:rgb(243,244,244);text-align:center;img{margin-bottom:-130px;}');

var forYouContainer = /*#__PURE__*/(0, _reactEmotion.css)('padding-left:40px;padding-right:50px;padding-bottom:30px;@media (max-width:800px){padding-right:40px;div{text-align:center;}}img{float:right;padding-right:20px;@media (max-width:800px){padding-right:0px;float:none;text-align:center;}}h2{margin:0;text-align:center;padding-right:50px;@media (max-width:800px){padding-right:0px;}}p{font-size:14px;padding-right:50px;@media (max-width:800px){padding-right:0px;text-align:justify;}}');

var for1 = /*#__PURE__*/(0, _reactEmotion.css)('padding-top:100px;');

var redButton = /*#__PURE__*/(0, _reactEmotion.css)('background-color:#db3a1b;padding:8px 15px;border-radius:15px;color:white;font-weight:500;text-decoration:none;box-shadow:3px 3px 3px #ccc;');

var spacedDiv1 = /*#__PURE__*/(0, _reactEmotion.css)('margin-left:200px;padding-right:10px;@media (max-width:800px){margin-left:0px;}');

var ForYou = function (_PureComponent) {
  _inherits(ForYou, _PureComponent);

  function ForYou() {
    _classCallCheck(this, ForYou);

    return _possibleConstructorReturn(this, (ForYou.__proto__ || Object.getPrototypeOf(ForYou)).apply(this, arguments));
  }

  _createClass(ForYou, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _emotion.Box,
          { className: grey, width: 1 },
          _react2.default.createElement(
            'h1',
            { className: h1Class },
            'Capitalize on your personality assets, control your behavior, and modify your personality.'
          )
        ),
        _react2.default.createElement(
          _emotion.Box,
          { className: grey, width: 1 },
          _react2.default.createElement('img', { src: _signUpPen2.default })
        ),
        _react2.default.createElement(
          _emotion.Flex,
          { flexWrap: 'wrap', justifyContent: 'flex-start', className: (0, _reactEmotion.cx)(for1, forYouContainer), alignItems: 'flex-start' },
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 1 / 3] },
            _react2.default.createElement('img', { src: _winslow_how_it_works_2.default })
          ),
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 3 / 5] },
            _react2.default.createElement(
              'h2',
              { className: h2Class },
              ' The Job Market is Tough'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Why are some people still stuck in a job which provides few rewards? Why are some still looking for employment? Interviewers are looking for anything that gives one candidate an edge over another. They can\u2019t afford to make mistakes, and neither can you. That\u2019s frustrating when you have a lot to offer and no one seems to notice. You need an edge, something that differentiates and strengthens you, and you need it NOW!'
            )
          )
        ),
        _react2.default.createElement(
          _emotion.Flex,
          { flexWrap: 'wrap', alignItems: 'flex-start', className: (0, _reactEmotion.cx)(forYouContainer, spacedDiv1) },
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 1 / 3] },
            ' ',
            _react2.default.createElement('img', { src: _winslow_how_it_works_4.default })
          ),
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 3 / 5] },
            _react2.default.createElement(
              'h2',
              { className: h2Class },
              'What the Winslow Report Can Do For You'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Your Winslow Report is prepared from the results of the Winslow Dynamics Profile, a validated personality assessment instrument that measures personality traits. This comprehensive Profile measures the 24 personality characteristics related to career success and personal contentment. The Profile is Internet based, user-friendly, and enables you to complete the Profile at your location and convenience.'
            )
          )
        ),
        _react2.default.createElement(
          _emotion.Flex,
          { flexWrap: 'wrap', alignItems: 'flex-start', className: forYouContainer },
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 1 / 3] },
            ' ',
            _react2.default.createElement('img', { src: _winslow_how_it_works_6.default })
          ),
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 3 / 5] },
            _react2.default.createElement(
              'h2',
              { className: h2Class },
              'The profile used by professional sports teams'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We all realize that multi-million dollar contracts to play sports are handed out to the best athletes available. Skill on the field is essential. But, did you know that psychological factors are heavily considered when draft choices are made? Winslow Research has profiled tens of thousands of players and draftees for Major League Baseball, the NBA, and selected teams in the NFL and Pro Hockey as well as dozens of colleges and high schools. Results of these specialized Profiles are taken very seriously when offering scholarships or contracts to prospective athletes.'
            )
          )
        ),
        _react2.default.createElement(
          _emotion.Flex,
          { flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-around' },
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 2 / 3] },
            _react2.default.createElement(
              'p',
              {
                className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('font-size:14px;font-weight:400;padding:0 100px;@media (max-width:800px){padding:0px 40px;}')
              },
              'The Profile takes less than one hour to complete, and your results are available on the Internet shortly after the Profile is complete. From the results of your Profile a 45 to 55 page Report will be created that presents objective information on your personality, behavior and attitudes. With this information, you can capitalize on your personality assets, modify your personality, and control your behavior. The results will help you achieve success in your career and contentment in your personal lifestyle. In addition to personal development, your Report can be used for pre-marital preparation, enhance marriage and family relations, and other applications.'
            )
          ),
          _react2.default.createElement(
            _emotion.Box,
            { px: 2, width: [1, 1, 1 / 3] },
            _react2.default.createElement(
              'div',
              {
                className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('margin-top:45px;@media (max-width:800px){margin-top:10px;text-align:center;margin-bottom:30px;}')
              },
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/sign-up', className: redButton },
                'Start Now'
              )
            )
          )
        )
      );
    }
  }]);

  return ForYou;
}(_react.PureComponent);

exports.default = (0, _withGA2.default)(ForYou);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emotion = __webpack_require__(9);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactStatic = __webpack_require__(3);

var _emotion2 = __webpack_require__(2);

var _reactResponsiveCarousel = __webpack_require__(15);

var _carouselMin = __webpack_require__(16);

var _carouselMin2 = _interopRequireDefault(_carouselMin);

var _withGA = __webpack_require__(5);

var _withGA2 = _interopRequireDefault(_withGA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var h1Class = /*#__PURE__*/(0, _reactEmotion.css)('font-size:25px;font-weight:400;padding:50px 20px;margin:0;');
var grey = /*#__PURE__*/(0, _reactEmotion.css)('background-color:rgb(243,244,244);');
var carouselClass = /*#__PURE__*/(0, _reactEmotion.css)('.carousel .slide{background:#e4edee;}.carousel.carousel-slider{}.carousel .control-dots{padding-left:0px;}.carousel .control-dots .dot{background-color:#db3a1b;}');

var carouselDiv = /*#__PURE__*/(0, _reactEmotion.css)('font-size:14px;padding:30px 40px;');

var redButton = /*#__PURE__*/(0, _reactEmotion.css)('text-align:center;background-color:#db3a1b;padding:8px 15px;border-radius:15px;color:white;font-weight:500;text-decoration:none;box-shadow:3px 3px 3px #ccc;');

var whitePanel = /*#__PURE__*/(0, _reactEmotion.css)('p{font-weight:400;font-size:14px;}');
var shadowBox = /*#__PURE__*/(0, _reactEmotion.css)('background-color:rgb(243,244,244);padding:10px 10px;text-decoration:none;a{text-decoration:none;color:inherit;}div{background-color:white;margin:20px;padding:30px;box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);&:hover{background-color:#ffed9b;}h3{font-size:2rem;font-weight:400;text-align:center;margin:0;padding:0;}h4{font-size:20px;font-weight:400;text-align:center;padding:0;margin:5px;}p{line-height:25px;text-align:justify;}}');

var ForYourCompany = function (_PureComponent) {
  _inherits(ForYourCompany, _PureComponent);

  function ForYourCompany() {
    _classCallCheck(this, ForYourCompany);

    return _possibleConstructorReturn(this, (ForYourCompany.__proto__ || Object.getPrototypeOf(ForYourCompany)).apply(this, arguments));
  }

  _createClass(ForYourCompany, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _emotion2.Box,
          { className: grey, width: 1 },
          _react2.default.createElement(
            'h1',
            { className: h1Class },
            'Enhance your organization\u2019s employee selection process.'
          )
        ),
        _react2.default.createElement(
          _emotion2.Box,
          { width: 1 },
          _react2.default.createElement(
            _reactResponsiveCarousel.Carousel,
            { showThumbs: false, showStatus: false, className: carouselClass, dynamicHeight: true },
            _react2.default.createElement(
              'div',
              { className: carouselDiv },
              'The Winslow Profiles and Development Reports provide exclusive features not available to your organization from any other known assessments and their reports.'
            ),
            _react2.default.createElement(
              'div',
              { className: carouselDiv },
              'Research proves when a person fails in their career in more than 90% of the time that failure is directly attributed to some aspect of human behavior. The Winslow Pre-employment Selection Profiles & Reports compare the applicant\'s behavior to the behavioral requirements of your positions, enabling you to select the best applicant for every position.'
            ),
            _react2.default.createElement(
              'div',
              { className: carouselDiv },
              'Winslow personality testing for employment provide valuable insight into why some employees are functioning successfully and why others are performing unsatisfactorily.',
              ' '
            )
          )
        ),
        _react2.default.createElement(
          _emotion2.Flex,
          { flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', className: whitePanel },
          _react2.default.createElement(
            _emotion2.Box,
            { p: [3, 5], width: [1, 2 / 3] },
            _react2.default.createElement(
              'p',
              null,
              'Make the best hiring decision for your company, your employees, and your candidates by using our proven Hiring Assessments. The ',
              _react2.default.createElement(
                'strong',
                null,
                'Winslow Behavioral'
              ),
              ' will help you evaluate those you are bringing into your organization before the hire. Assessment feedback used in the interview process lets you quickly identify areas of strength and areas of concern (position specific) so these areas can be explored before you bring the candidates into the organization.'
            )
          ),
          _react2.default.createElement(
            _emotion2.Box,
            { p: [2], width: [1, 1 / 3], className: (0, _emotion.css)({ textAlign: 'center' })
            },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/sign-up', className: redButton },
              'Get More Ifno'
            )
          )
        ),
        _react2.default.createElement(
          _emotion2.Box,
          { className: shadowBox },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/for-your-company/winslow-behavioral-assessment' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'Behavioral Hiring:'
              ),
              _react2.default.createElement(
                'h4',
                null,
                _react2.default.createElement(
                  'i',
                  null,
                  'Winslow Assessment'
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'The Winslow Assessment is a powerful adaptive performance based behavior assessment measuring a candidate\u2019s Interpersonal, Organizational, Dedication and Self-control traits. Winslow Assessments provide the ability to create ',
                _react2.default.createElement(
                  'b',
                  null,
                  ' Winslow Group Profile'
                ),
                ' s specific to the positions you are filling so you can quickly compare groups of candidates, employees or candidate fit to your current workforce. The Winslow is recognized by experts as one of the world\u2019s premier hiring and',
                ' ',
                _react2.default.createElement(
                  'b',
                  null,
                  'employee development tools.'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ForYourCompany;
}(_react.PureComponent);

exports.default = (0, _withGA2.default)(ForYourCompany);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactStatic = __webpack_require__(3);

var _emotion = __webpack_require__(2);

var _reactSvgInline = __webpack_require__(4);

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

var _roundArrow_left24px = __webpack_require__(55);

var _roundArrow_left24px2 = _interopRequireDefault(_roundArrow_left24px);

var _roundArrow_right24px = __webpack_require__(56);

var _roundArrow_right24px2 = _interopRequireDefault(_roundArrow_right24px);

var _baselineCheck_circle_outline24px = __webpack_require__(6);

var _baselineCheck_circle_outline24px2 = _interopRequireDefault(_baselineCheck_circle_outline24px);

var _baselineFace24px = __webpack_require__(14);

var _baselineFace24px2 = _interopRequireDefault(_baselineFace24px);

var _home_coaching_sectionbg = __webpack_require__(57);

var _home_coaching_sectionbg2 = _interopRequireDefault(_home_coaching_sectionbg);

var _withGA = __webpack_require__(5);

var _withGA2 = _interopRequireDefault(_withGA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var h1Class = /*#__PURE__*/(0, _reactEmotion.css)('font-size:3rem;font-weight:300;padding:50px 20px;margin:0;');
var grey = /*#__PURE__*/(0, _reactEmotion.css)('background-color:rgb(243,244,244);');

var iconStyle = /*#__PURE__*/(0, _reactEmotion.css)('text-align:center;svg{fill:#db3a1b;height:100px;width:100px;}');
var hirePanel = /*#__PURE__*/(0, _reactEmotion.css)('text-align:center;padding:20px 50px;h2{font-size:2.2rem;font-weight:300;}p{font-size:14px;}');

var shadowBox = /*#__PURE__*/(0, _reactEmotion.css)('opacity:0.9;background-color:rgb(243,244,244);margin:20px;padding:30px;box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);ul{opacity:1;list-style:none;padding:0px;}li{display:flex;position:relative;text-align:left;justify-content:flex-start;padding:10px 20px;}ul li div{flex:1 1 auto;padding-left:20px;opacity:1;}');
var checkStyle = /*#__PURE__*/(0, _reactEmotion.css)('svg{fill:rgba(0,0,0,0.54);height:20px;width:20px;align-self:flex-start;flex-shrink:0 margin-right:0px;}');

var checkPanel = /*#__PURE__*/(0, _reactEmotion.css)('z-index:1;h2{text-align:center;font-weight:300;font-size:2.2rem;margin:20px 0;}');

var traitsHeader = /*#__PURE__*/(0, _reactEmotion.css)('font-size:3rem;font-weight:300;padding:0;margin:0 0 30px 0;text-align:center;');
var traitsStyles = /*#__PURE__*/(0, _reactEmotion.css)('h3{font-size:2rem;font-weight:300;padding:0;margin:0;text-align:center;}ul{list-style:none;padding:0px;}li{display:flex;position:relative;text-align:left;justify-content:flex-start;padding:10px 20px;}ul li div{flex:1 1 auto;padding-left:20px;}');

var centerBorder = /*#__PURE__*/(0, _reactEmotion.css)('border-bottom:1px solid #db3a1b;text-align:center;margin-bottom:20px;');
var redBox = /*#__PURE__*/(0, _reactEmotion.css)('width:30px;height:30px;background-color:#db3a1b;display:block;color:white;line-height:30px;margin:0 auto;margin-bottom:-15px;');

var bgImage = /*#__PURE__*/(0, _reactEmotion.css)('background-image:url(', _home_coaching_sectionbg2.default, ');background-repeat:no-repeat;background-position:right bottom;');
var slideLeft = /*#__PURE__*/(0, _reactEmotion.keyframes)('0%{transform:translateX(-20px)}50%{transform:translateX(0px)}100%{transform:translateX(-20px)}');
var slideRight = /*#__PURE__*/(0, _reactEmotion.keyframes)('0%{transform:translateX(0px)}50%{transform:translateX(-20px)}100%{transform:translateX(0px)}');

var iconArrowStyleLeft = /*#__PURE__*/(0, _reactEmotion.css)('vertical-align:middle;transform-origin:center bottom;svg{animation:', slideLeft, ' 1.5s ease-in-out infinite;fill:#db3a1b;height:50px;width:50px;}');

var iconArrowStyleRight = /*#__PURE__*/(0, _reactEmotion.css)('vertical-align:middle;transform-origin:center bottom;svg{animation:', slideRight, ' 1.5s ease-in-out infinite;fill:#db3a1b;height:50px;width:50px;}');

var WinslowBehavioralAssessment = function (_PureComponent) {
  _inherits(WinslowBehavioralAssessment, _PureComponent);

  function WinslowBehavioralAssessment() {
    _classCallCheck(this, WinslowBehavioralAssessment);

    return _possibleConstructorReturn(this, (WinslowBehavioralAssessment.__proto__ || Object.getPrototypeOf(WinslowBehavioralAssessment)).apply(this, arguments));
  }

  _createClass(WinslowBehavioralAssessment, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _emotion.Box,
          { className: grey, width: 1 },
          _react2.default.createElement(
            'h1',
            { className: h1Class },
            'Winslow Behavioral Assessment'
          )
        ),
        _react2.default.createElement(
          _emotion.Box,
          { width: 1, className: hirePanel },
          _react2.default.createElement(_reactSvgInline2.default, { className: iconStyle, svg: _baselineFace24px2.default, component: 'div' }),
          _react2.default.createElement(
            'h2',
            null,
            'Hire the best applicant at every level.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Hire the best available applicant for every level and every position within your organization. Using the Winslow Assessment feedback in combination with your interview process will enable you to clearly identify the strongest candidates and make smart, educated hiring decisions. By assessing your current workforce (all levels) the Winslow test will give them the behavioral feedback they need to develop themselves to their fullest potential.'
          )
        ),
        _react2.default.createElement(
          _emotion.Flex,
          { className: bgImage },
          _react2.default.createElement(
            _emotion.Box,
            { className: shadowBox, width: [1, 1, 1 / 2] },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Recognized by experts as one of the world\u2019s premier employee selection development programs.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Assessments are taken over the internet with results immediately available.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Generate a comprehensive Participant\u2019s Report, Manager\u2019s Report and Executive Report.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Feature a Position Compatibility Summary (PCS), which indicates a participant\u2019s probability of success in a specific position based on his or her behavioral traits.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Access to creating Group Profiles which allow you to compare groups of candidates or employees-position specific.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'We can also provide \u2018customized analysis\u2019 of positions when needed.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'May be taken in English, Spanish, French and German.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Available at discounts when ordered in bulk.'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _emotion.Box,
          { width: 1 },
          _react2.default.createElement(
            'h2',
            { className: traitsHeader },
            _react2.default.createElement(_reactSvgInline2.default, { className: iconArrowStyleLeft, svg: _roundArrow_right24px2.default }),
            'Traits We Measure',
            _react2.default.createElement(_reactSvgInline2.default, { className: iconArrowStyleRight, svg: _roundArrow_left24px2.default })
          )
        ),
        _react2.default.createElement(
          _emotion.Flex,
          { flexWrap: 'wrap', className: traitsStyles, justifyContent: 'space-around' },
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 1 / 3], px: 4 },
            _react2.default.createElement(
              'div',
              { className: centerBorder },
              _react2.default.createElement(
                'span',
                { className: redBox },
                '1'
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              'The Dynamics Profile'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Hiring, executive, management, technical and sales staff'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Offers full-spectrum leadership development'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Tackles succession management and promotion'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Measures 24 Behavioral Traits'
                )
              )
            )
          ),
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 1 / 3], px: 4 },
            _react2.default.createElement(
              'div',
              { className: centerBorder },
              _react2.default.createElement(
                'span',
                { className: redBox },
                '2'
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              'The Discovery Profile'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Hiring mid-level employees'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Offers an extensive screening tool'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Uses training and staff development'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'A tool for career-pathing & Promotion'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Measures 16 Behavioral Traits'
                )
              )
            )
          ),
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 1 / 3], px: 4 },
            _react2.default.createElement(
              'div',
              { className: centerBorder },
              _react2.default.createElement(
                'span',
                { className: redBox },
                '3'
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              'The Success Profile'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Hiring front-line and hourly staff'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Emphasizes personal development'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Offers employee training'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Measures 11 Behavioral Traits'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
                _react2.default.createElement(
                  'div',
                  null,
                  'Compatibility analysis of all front-line positions'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return WinslowBehavioralAssessment;
}(_react.PureComponent);

exports.default = (0, _withGA2.default)(WinslowBehavioralAssessment);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emotion = __webpack_require__(9);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactStatic = __webpack_require__(3);

var _emotion2 = __webpack_require__(2);

var _reactSvgInline = __webpack_require__(4);

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

var _HowItWorksAccordion = __webpack_require__(58);

var _HowItWorksAccordion2 = _interopRequireDefault(_HowItWorksAccordion);

var _winslowTestTaker = __webpack_require__(61);

var _winslowTestTaker2 = _interopRequireDefault(_winslowTestTaker);

var _twotoneContact_support24px = __webpack_require__(62);

var _twotoneContact_support24px2 = _interopRequireDefault(_twotoneContact_support24px);

var _hr_sectionbg = __webpack_require__(10);

var _hr_sectionbg2 = _interopRequireDefault(_hr_sectionbg);

var _withGA = __webpack_require__(5);

var _withGA2 = _interopRequireDefault(_withGA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var h1Class = /*#__PURE__*/(0, _reactEmotion.css)('font-size:25px;font-weight:400;padding:50px 20px;margin:0;');

var h2Class = /*#__PURE__*/(0, _reactEmotion.css)('font-weight:400;font-size:2rem;');
var grey = /*#__PURE__*/(0, _reactEmotion.css)('background-color:rgb(243,244,244);text-align:center;img{margin-bottom:-130px;}');
var iconStyle = /*#__PURE__*/(0, _reactEmotion.css)('text-align:center;svg{fill:#db3a1b;height:100px;width:100px;}');

var redButton = /*#__PURE__*/(0, _reactEmotion.css)('background-color:#db3a1b;padding:8px 15px;border-radius:15px;color:white;font-weight:500;text-decoration:none;box-shadow:3px 3px 3px #ccc;');

var grayBox = /*#__PURE__*/(0, _reactEmotion.css)('background-image:url(', _hr_sectionbg2.default, ');background-repeat:repeat;background-position:center;text-align:justify;p{font-weight:400;}');

var HowItWorks = function (_PureComponent) {
  _inherits(HowItWorks, _PureComponent);

  function HowItWorks() {
    _classCallCheck(this, HowItWorks);

    return _possibleConstructorReturn(this, (HowItWorks.__proto__ || Object.getPrototypeOf(HowItWorks)).apply(this, arguments));
  }

  _createClass(HowItWorks, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _emotion2.Box,
          { className: grey, width: 1 },
          _react2.default.createElement(
            'h1',
            { className: h1Class },
            'Winslow personality testing for employment provide valuable insight into why some employees are functioning successfully and why others are performing unsatisfactorily.'
          )
        ),
        _react2.default.createElement(
          _emotion2.Flex,
          { flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start' },
          _react2.default.createElement(
            _emotion2.Box,
            { width: [1, 2 / 3], px: 4 },
            _react2.default.createElement(
              'p',
              {
                className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('font-weight:400;font-size:14px;text-align:justify;')
              },
              'Pre-employment personality testing is one of, if not the most, important aspects of building and maintaining a successful organization. Research proves when a person fails in their career in more than 90% of the time that failure is directly attributed to some aspect of human behavior. Individuals do not usually fail because of lack of education, experience, training, or skills. They fail because their personality is not compatible to the behavioral requirements of their career. An organization can invest significant amount of time and money creating products or services and a successful business. However, if the wrong applicants are hired it will fail or at best, never achieve its potential. The Winslow Applicant Selection Reports will significantly increase the probability that applicants you hire will be successful and achieve their maximum potential in your organization.'
            )
          ),
          _react2.default.createElement(
            _emotion2.Box,
            { width: [1, 1 / 3] },
            _react2.default.createElement('img', { src: _winslowTestTaker2.default })
          )
        ),
        _react2.default.createElement(
          _emotion2.Flex,
          { flexWrap: 'wrap' },
          _react2.default.createElement(
            _emotion2.Box,
            { px: 4, width: [1, 1 / 4] },
            _react2.default.createElement(_reactSvgInline2.default, { className: iconStyle, svg: _twotoneContact_support24px2.default, component: 'div' })
          ),
          _react2.default.createElement(
            _emotion2.Box,
            { px: [2, 5], width: [1, 3 / 4] },
            _react2.default.createElement(
              'h2',
              null,
              'Questions the Pre-Employment Personality Reports Answer'
            ),
            _react2.default.createElement(
              'p',
              {
                className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('font-size:14px;font-weight:400;text-align:justify;')
              },
              'Our Pre-Employment Testing Reports prepared on the behavior and attitudes of applicants will predict their probability of success in their position. The Winslow Profile measures the 24 personality traits related to success and the Winslow Reports present the assessment results in an easy to understand format. The scores the applicant receives on the Winslow Traits will provide answers to the following primary questions employers want answered:'
            )
          )
        ),
        _react2.default.createElement(
          _emotion2.Box,
          {
            px: '40px',
            pb: '20px',
            className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('font-size:14px;')
          },
          _react2.default.createElement(_HowItWorksAccordion2.default, null)
        ),
        _react2.default.createElement(
          _emotion2.Flex,
          { flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', className: grayBox },
          _react2.default.createElement(
            _emotion2.Box,
            { pl: [3, 6], pr: 3, width: [1, 2 / 3] },
            _react2.default.createElement(
              'p',
              null,
              'Our unique Pre-Employment Testing Applicant Selection Programs eliminate guesswork from the hiring process. Winslow Reports will assist you in selecting the best available applicant for every position in your organization, and reduce the risks and costs of hiring..'
            )
          ),
          _react2.default.createElement(
            _emotion2.Box,
            { p: 2, width: [1, 1 / 3], className: (0, _emotion.css)({ textAlign: 'center' })
            },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/sign-up', className: redButton },
              'Start Now'
            )
          )
        )
      );
    }
  }]);

  return HowItWorks;
}(_react.PureComponent);

exports.default = (0, _withGA2.default)(HowItWorks);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionHeader = function (_Component) {
  _inherits(AccordionHeader, _Component);

  function AccordionHeader() {
    _classCallCheck(this, AccordionHeader);

    return _possibleConstructorReturn(this, (AccordionHeader.__proto__ || Object.getPrototypeOf(AccordionHeader)).apply(this, arguments));
  }

  _createClass(AccordionHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          expandAll = _props.expandAll,
          collapseAll = _props.collapseAll,
          render = _props.render;

      return render ? render({ expandAll: expandAll, collapseAll: collapseAll }) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: expandAll },
          'Expand All'
        ),
        _react2.default.createElement(
          'button',
          { onClick: collapseAll },
          'Collapse All'
        )
      );
    }
  }]);

  return AccordionHeader;
}(_react.Component);

exports.default = AccordionHeader;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _roundKeyboard_arrow_down24px = __webpack_require__(60);

var _roundKeyboard_arrow_down24px2 = _interopRequireDefault(_roundKeyboard_arrow_down24px);

var _reactSvgInline = __webpack_require__(4);

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Collapse from 'react-collapse';


var Collapse = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e63omw50'
})(function (props) {
  return {
    maxHeight: props.isOpened ? '700px' : '0',
    height: 'auto',
    overflow: 'hidden',
    transition: 'max-height .3s linear'
  };
});

var AccordionItem = function (_Component) {
  _inherits(AccordionItem, _Component);

  function AccordionItem() {
    _classCallCheck(this, AccordionItem);

    return _possibleConstructorReturn(this, (AccordionItem.__proto__ || Object.getPrototypeOf(AccordionItem)).apply(this, arguments));
  }

  _createClass(AccordionItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          expanded = _props.expanded,
          caption = _props.caption,
          onToggle = _props.onToggle,
          name = _props.name,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        {
          className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)({
            margin: expanded ? '20px 0px' : '0px',
            border: '1px solid #ddd',
            borderBottom: expanded ? 'none' : '1px solid #ddd',
            boxShadow: expanded ? '0px 5px 5px #ddd' : 'none',
            transition: 'margin .3s linear',
            cursor: 'pointer'
          })
        },
        _react2.default.createElement(
          'div',
          {
            className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)({
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 10px 8px 20px'
            }),
            onClick: function onClick() {
              return onToggle(name);
            }
          },
          _react2.default.createElement(
            'span',
            null,
            caption
          ),
          _react2.default.createElement(
            'span',
            {
              className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)({
                svg: {
                  transition: 'transform 0.3s linear',
                  transform: expanded ? 'scale(1.5) rotate(-180deg)' : 'scale(1.5) rotate(0deg)',
                  fill: '#db3a1b',
                  marginBottom: '-5px'
                }
              })
            },
            _react2.default.createElement(_reactSvgInline2.default, { svg: _roundKeyboard_arrow_down24px2.default })
          )
        ),
        _react2.default.createElement(
          Collapse,
          { isOpened: expanded },
          children
        )
      );
    }
  }]);

  return AccordionItem;
}(_react.Component);

exports.default = AccordionItem;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _emotion = __webpack_require__(2);

var _reactStatic = __webpack_require__(3);

var _reactSvgInline = __webpack_require__(4);

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

var _hr_sectionbg = __webpack_require__(10);

var _hr_sectionbg2 = _interopRequireDefault(_hr_sectionbg);

var _baselineCheck_circle_outline24px = __webpack_require__(6);

var _baselineCheck_circle_outline24px2 = _interopRequireDefault(_baselineCheck_circle_outline24px);

var _withGA = __webpack_require__(5);

var _withGA2 = _interopRequireDefault(_withGA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var h1Class = /*#__PURE__*/(0, _reactEmotion.css)('font-size:2rem;font-weight:400;padding:50px 20px;margin:0;');

var h2Class = /*#__PURE__*/(0, _reactEmotion.css)('font-weight:400;font-size:2rem;text-align:center;');
var grey = /*#__PURE__*/(0, _reactEmotion.css)('background-color:rgb(243,244,244);text-align:center;img{margin-bottom:-130px;}');
var iconStyle = /*#__PURE__*/(0, _reactEmotion.css)('text-align:center;svg{fill:#db3a1b;height:100px;width:100px;}');

var redButton = /*#__PURE__*/(0, _reactEmotion.css)('background-color:#db3a1b;padding:8px 15px;border-radius:15px;color:white;font-weight:500;text-decoration:none;box-shadow:3px 3px 3px #ccc;');

var grayBox = /*#__PURE__*/(0, _reactEmotion.css)('background-image:url(', _hr_sectionbg2.default, ');background-repeat:repeat;background-position:center;text-align:justify;p{font-weight:400;}');

var checkStyle = /*#__PURE__*/(0, _reactEmotion.css)('svg{fill:rgba(0,0,0,0.54);height:20px;width:20px;align-self:flex-start;flex-shrink:0 margin-right:0px;}');

var checkPanel = /*#__PURE__*/(0, _reactEmotion.css)('background-color:#f5f8f8;ul{list-style:none;padding:0px;}li{display:flex;position:relative;text-align:left;justify-content:flex-start;padding:10px 20px;}ul li div{flex:1 1 auto;padding-left:20px;}');

var traitsStyles = /*#__PURE__*/(0, _reactEmotion.css)('h3{font-size:1.5rem;font-weight:300;padding:0;margin:0;text-align:center;}p{font-size:14px;text-align:justify;}');

var centerBorder = /*#__PURE__*/(0, _reactEmotion.css)('border-bottom:1px solid #db3a1b;text-align:center;margin-bottom:20px;');
var redBox = /*#__PURE__*/(0, _reactEmotion.css)('width:30px;height:30px;background-color:#db3a1b;display:block;color:white;line-height:30px;margin:0 auto;margin-bottom:-15px;');

var WinslowInternetAssessment = function (_PureComponent) {
  _inherits(WinslowInternetAssessment, _PureComponent);

  function WinslowInternetAssessment() {
    _classCallCheck(this, WinslowInternetAssessment);

    return _possibleConstructorReturn(this, (WinslowInternetAssessment.__proto__ || Object.getPrototypeOf(WinslowInternetAssessment)).apply(this, arguments));
  }

  _createClass(WinslowInternetAssessment, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _emotion.Box,
          { className: grey, width: 1 },
          _react2.default.createElement(
            'h1',
            { className: h1Class },
            'The Winslow Internet Assessment System'
          )
        ),
        _react2.default.createElement(
          _emotion.Box,
          null,
          _react2.default.createElement(
            'p',
            {
              className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('text-align:justify;padding:20px 50px;line-height:1.5rem;')
            },
            'The ',
            _react2.default.createElement(
              'i',
              null,
              'Winslow Pre-Employment Testing Program'
            ),
            ' is an Internet-based system to measure the personality, behavior and attitudes of applicants for positions and provide feedback to organizations on the applicant\'s probability of success in a specific position. The user-friendly system enables organizations to administer their assessment activity and have total control over the process. Winslow Research will train one or preferably two employees of the organization to be the Winslow Reports Administrator. In just a few hours, these individuals will be competent to serve as the Internet Webmaster for the organization. Following are the procedures, features, functions and components of the System.'
          )
        ),
        _react2.default.createElement(
          _emotion.Box,
          { mx: '10%', className: checkPanel },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              ' ',
              _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Private Winslow Website:'
                ),
                ' at no fee to your organization, a secure Internet Website will be created to manage your assessment activity.'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
              _react2.default.createElement(
                'div',
                null,
                ' ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Position Analysis:'
                ),
                ' the first step is a formal or informal position analysis conducted by Winslow Research, at no fee to the client, to determine the behavioral requirements for each of your applicants positions.'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: checkStyle, svg: _baselineCheck_circle_outline24px2.default }),
              _react2.default.createElement(
                'div',
                null,
                ' ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'The Assessment System and Process:'
                ),
                ' the applicant selection assessment process is a user-friendly four step procedure.'
              )
            )
          )
        ),
        _react2.default.createElement(
          _emotion.Flex,
          { flexWrap: 'wrap', className: traitsStyles, justifyContent: 'space-around' },
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 1 / 4], px: 4 },
            _react2.default.createElement(
              'div',
              { className: centerBorder },
              _react2.default.createElement(
                'span',
                { className: redBox },
                '1'
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Purchase Assessment Passwords'
            ),
            _react2.default.createElement(
              'p',
              null,
              ' ',
              'The Winslow Internet System enables you to purchase Profile Passwords electronically using a bank account or any credit/debit card. Discounts are offered when quantities of Passwords are purchased. When purchases are made, the Passwords are immediately placed in your "Available Passwords" account.'
            )
          ),
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 1 / 4], px: 4 },
            _react2.default.createElement(
              'div',
              { className: centerBorder },
              _react2.default.createElement(
                'span',
                { className: redBox },
                '2'
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Profile Password Activated for the Applicant'
            ),
            _react2.default.createElement(
              'p',
              null,
              'When you want to assess an applicant you go to the "Activate Assessment Password" function on your Winslow Website. Basic information is entered to identify the Participant. The PCS Position of the applicant is selected. The System sends a form to the printer with the participant\'s name, password and directions for completing the Profile. An email with this information can be sent to the applicant.'
            )
          ),
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 1 / 4], px: 4 },
            _react2.default.createElement(
              'div',
              { className: centerBorder },
              _react2.default.createElement(
                'span',
                { className: redBox },
                '3'
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Applicant Completes The Assessment Profile'
            ),
            _react2.default.createElement(
              'p',
              null,
              'To make certain the applicant is the person who completes the Profile, applicants should be monitored in the client\'s offices. The Profile takes less than one hour to complete and contains special control question to determine if the participant\'s answers are both accurate and objective. The System will not produce a Report when results are invalid. Approximately 30% of the applicants will have invalid results on their first assessment and must retake the Profile. This happens because some applicants give answers they think will provide desirable results. Others unintentionally exaggerate their answers because of a strong ego.'
            )
          ),
          _react2.default.createElement(
            _emotion.Box,
            { width: [1, 1, 1 / 4], px: 4 },
            _react2.default.createElement(
              'div',
              { className: centerBorder },
              _react2.default.createElement(
                'span',
                { className: redBox },
                '4'
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              ' Profiles Processed and Winslow Reports Prepared'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Reports are available immediately to management when the applicant has accurate and objective assessment results. There are four versions of the Winslow Reports. The Executive Report contains a Personality Profile displaying the 24 trait scores and a Position Compatibility Form. When applicants are hired, the Manager\'s Report is given to the manager of the employee and the Participant\'s Report is given to your new employee. The PCS Summary Form is placed in the applicants file. (Please refer to all versions of the Winslow Reports).'
            )
          )
        ),
        _react2.default.createElement(
          _emotion.Box,
          { px: 4 },
          _react2.default.createElement(
            'h2',
            { className: h2Class },
            ' Decision to Hire an Applicant '
          ),
          _react2.default.createElement(
            'p',
            null,
            ' ',
            'The Position Compatibility Summary (PCS) Form presents the assessment data and behavioral requirements for each applicant on one color-coded page. The PCS Form compiles the results of a comprehensive, sophisticated assessment system into an easy to interpret document that simplifies the selection process. Management can then establish the cut-off" point on qualifying scores to determine whether applicants should be offered a position. The four major considerations are the "Participant\'s Net PCS Score," the number of "Concern Trait Scores," any negative "Trait Group Scores," and the "Key Characteristics" score.'
          )
        ),
        _react2.default.createElement(
          _emotion.Box,
          {
            className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('background-color:rgba(243,244,244,1);padding:30px 50px;')
          },
          _react2.default.createElement(
            'h2',
            { className: h2Class },
            'To schedule a demonstration of the Winslow Profiles System, click here.'
          ),
          _react2.default.createElement(
            _emotion.Box,
            {
              p: 2,
              className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('text-align:center;padding:10px 0 0 0;')
            },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/sign-up', className: redButton },
              'Get Started Now'
            )
          )
        )
      );
    }
  }]);

  return WinslowInternetAssessment;
}(_react.PureComponent);

exports.default = (0, _withGA2.default)(WinslowInternetAssessment);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _emotion = __webpack_require__(2);

var _reactStatic = __webpack_require__(3);

var _formInput = __webpack_require__(63);

var _formInput2 = _interopRequireDefault(_formInput);

var _formTextArea = __webpack_require__(64);

var _formTextArea2 = _interopRequireDefault(_formTextArea);

var _reactRecaptcha = __webpack_require__(65);

var _reactRecaptcha2 = _interopRequireDefault(_reactRecaptcha);

var _axios = __webpack_require__(66);

var _axios2 = _interopRequireDefault(_axios);

var _qs = __webpack_require__(67);

var _qs2 = _interopRequireDefault(_qs);

var _Spinner = __webpack_require__(68);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _withGA = __webpack_require__(5);

var _withGA2 = _interopRequireDefault(_withGA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_axios2.default.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var h1Class = /*#__PURE__*/(0, _reactEmotion.css)('font-size:2.5rem;font-weight:300;padding:50px 20px 0px 20px;margin:0;');

var h2Class = /*#__PURE__*/(0, _reactEmotion.css)('font-weight:400;font-size:1.8rem;text-align:center;');

var RedButton = /*#__PURE__*/(0, _reactEmotion2.default)('button', {
  target: 'e1wie0tu0'
})(function (props) {
  return {
    backgroundColor: props.disabled === 'disabled' ? 'gray' : '#db3a1b',
    padding: '8px 15px',
    borderRadius: '15px',
    color: 'white',
    fontWeight: 500,
    textDecoration: 'none',
    boxShadow: '3px 3px 3px #ccc'
  };
});

var formButtons = /*#__PURE__*/(0, _reactEmotion.css)('margin-bottom:50px;@media (max-width:800px){div{padding-bottom:30px;}}');
var recaptchaInstance = void 0;

// create a reset function
var resetRecaptcha = function resetRecaptcha() {
  recaptchaInstance.reset();
};

var SignUp = function (_PureComponent) {
  _inherits(SignUp, _PureComponent);

  function SignUp(props) {
    _classCallCheck(this, SignUp);

    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      // const self = this;
      _this.setState({ loading: true });
      _axios2.default.post('https://lynnkindlercoaching.com/ftools/process.php', _qs2.default.stringify(_this.state.values)).then(function (res) {
        _this.setState({ submitted: true, loading: false });
        setTimeout(function () {
          return _this.handleReset();
        }, 5000);
      }).catch(function (error) {
        console.log('AXIOS ERROR:', error);
        _this.setState({ submitted: true, loading: false });
        setTimeout(function () {
          return _this.handleReset();
        }, 5000);
      });
    };

    _this.verifyCallback = function (response) {
      // console.log('recaptcha', response);
      _this.setState({ recaptcha: true });
      _this.validate();
    };

    _this.handleChange = function (e) {
      var key = e.target.id;
      var value = e.target.value;
      if (key === 'email') {
        var testValue = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
        _this.setState({
          emailValid: testValue
        });
      }
      _this.setState({
        values: _extends({}, _this.state.values, _defineProperty({}, key, value))
      });
      // console.log(this.state);
      _this.validate();
    };

    _this.validate = function () {
      var _this$state = _this.state,
          values = _this$state.values,
          emailValid = _this$state.emailValid,
          recaptcha = _this$state.recaptcha;

      if (emailValid && values.name.length > 1 && values.subject.length > 1 && recaptcha) {
        _this.setState({ isSubmitting: true });
      } else {
        _this.setState({ isSubmitting: false });
      }
    };

    _this.handleReset = function () {
      resetRecaptcha();
      _this.setState({
        values: { email: '', name: '', subject: '', form_tools_form_id: 1 },
        isSubmitting: false,
        isValid: false,
        emailValid: false,
        recaptcha: false,
        submitted: false,
        loading: false
      });
    };

    _this.state = {
      values: { email: '', name: '', subject: '', form_tools_form_id: 1 },
      errors: null,
      isDirty: false,
      isSubmitting: false,
      submitted: false,
      isValid: false,
      emailValid: false,
      recaptcha: false,
      loading: false
    };
    // this.handleBlur = this.handleBlur.bind(this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.verifyCallback = _this.verifyCallback.bind(_this);
    return _this;
  }

  _createClass(SignUp, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state$values = this.state.values,
          email = _state$values.email,
          name = _state$values.name,
          subject = _state$values.subject;
      // const { errors, submitted } = this.state;

      var _state = this.state,
          isDirty = _state.isDirty,
          isSubmitting = _state.isSubmitting,
          isValid = _state.isValid,
          emailValid = _state.emailValid,
          submitted = _state.submitted,
          loading = _state.loading;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { className: h1Class },
          'Find out more about Winslow Reports'
        ),
        _react2.default.createElement(
          'h2',
          { className: h2Class },
          'Schedule a demo now.'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { type: 'hidden', name: 'form_tools_form_id', value: '2' }),
          _react2.default.createElement(
            _emotion.Flex,
            { flexDirection: 'column' },
            _react2.default.createElement(_formInput2.default, { label: 'name', valid: name.length > 1, handleChange: this.handleChange, value: name }),
            _react2.default.createElement(_formInput2.default, { label: 'email', valid: emailValid, handleChange: this.handleChange, value: email }),
            _react2.default.createElement(_formTextArea2.default, { label: 'subject', valid: subject.length > 1, handleChange: this.handleChange, value: subject })
          ),
          submitted ? _react2.default.createElement(DisplayThankYouMessage, null) : null,
          loading ? _react2.default.createElement(SubmittedMessage, null) : null,
          _react2.default.createElement(
            _emotion.Flex,
            { flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', className: formButtons },
            _react2.default.createElement(
              _emotion.Box,
              null,
              _react2.default.createElement(
                RedButton,
                {
                  onClick: function onClick() {
                    _this2.handleReset();
                  }
                },
                'Reset'
              )
            ),
            _react2.default.createElement(
              _emotion.Box,
              null,
              _react2.default.createElement(
                RedButton,
                { type: 'submit', disabled: isSubmitting === true ? null : 'disabled' },
                'Submit'
              )
            ),
            _react2.default.createElement(
              _emotion.Box,
              null,
              _react2.default.createElement(_reactRecaptcha2.default, {
                sitekey: '6LcbiBgUAAAAAGDFg5mVa7aB9zF1t-kldKal0Vj5',
                render: 'explicit',
                verifyCallback: this.verifyCallback,
                ref: function ref(e) {
                  return recaptchaInstance = e;
                }
              })
            )
          )
        )
      );
    }
  }]);

  return SignUp;
}(_react.PureComponent);

exports.default = (0, _withGA2.default)(SignUp);


var SubmittedMessage = function SubmittedMessage(props) {
  return _react2.default.createElement(
    _emotion.Box,
    {
      className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('text-align:center;')
    },
    _react2.default.createElement(_Spinner2.default, null)
  );
};
var DisplayThankYouMessage = function DisplayThankYouMessage(props) {
  return _react2.default.createElement(
    _emotion.Box,
    {
      className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('text-align:center;')
    },
    _react2.default.createElement(
      'p',
      {
        className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('font-size:20px;font-weight:700;')
      },
      'Thank you for contacting us. Someone will respond to your request soon.'
    )
  );
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withGA = __webpack_require__(5);

var _withGA2 = _interopRequireDefault(_withGA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// import Typography from 'material-ui/Typography';
// import SadIcon2 from '@material-ui/icons/SentimentDissatisfied';
// import Grid from '@material-ui/core/Grid';

var FourOhFour = function FourOhFour() {
  return _react2.default.createElement(
    'h1',
    null,
    '404 Page'
  )
  //   <Grid container  align="center">
  // <Grid item xs={12}>
  //       <Typography variant="display4" align="center"><SadIcon2  style={{
  //     fontSize: '2em'
  //   }}/></Typography>
  // </Grid>
  // <Grid item xs={12}>
  //     <Typography variant="display4" align="center">
  //       404
  //     </Typography>
  //     <Typography variant="display2" align="center" >
  //     Page not found </Typography>
  //     <Typography variant="body1" align="center" >
  // The page you are looking for is doesn't exist or an error occurred. <br/>
  // Go back, or head to home page to choose a new direction.
  //     </Typography>
  //   </Grid>
  //   </Grid>
  ;
};

exports.default = (0, _withGA2.default)(FourOhFour);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(29);

var _App = __webpack_require__(30);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const App = () => <div>App</div>;

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      return render(require('./App').default);
    });
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _emotion = __webpack_require__(2);

var _Header = __webpack_require__(31);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(34);

var _Footer2 = _interopRequireDefault(_Footer);

var _reactStaticRoutes = __webpack_require__(36);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _Menu = __webpack_require__(69);

var _Menu2 = _interopRequireDefault(_Menu);

var _reactScrollUpButton = __webpack_require__(76);

var _reactScrollUpButton2 = _interopRequireDefault(_reactScrollUpButton);

__webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactEmotion.injectGlobal)('*{box-sizing:border-box;}body{font-family:"Montserrat",Helvetica,Arial,sans-serif;font-size:16px;margin:0;padding:0;color:#272727;background-color:#e4edee;padding:30px 20px;}h1{font-size:3rem;font-weight:300;padding:20px 0;text-align:center;color:#003468;}');

var StyledContainer = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e1uy9uuw0'
})('max-width:1000px;margin:0 auto;border-radius:10px;background-color:white;');

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      _reactStatic.Loading,
      null,
      function (_ref) {
        var loading = _ref.loading;

        if (loading) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              null,
              'Loading...'
            )
          );
        } else {
          return _react2.default.createElement(
            StyledContainer,
            null,
            _react2.default.createElement(
              _emotion.Box,
              null,
              _react2.default.createElement(
                _emotion.Box,
                { m: 'auto' },
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(_Menu2.default, null)
              ),
              _react2.default.createElement(
                _emotion.Box,
                null,
                _react2.default.createElement(_reactStaticRoutes2.default, null)
              ),
              _react2.default.createElement(_reactScrollUpButton2.default, null),
              _react2.default.createElement(_Footer2.default, null)
            )
          );
        }
      }
    )
  );
};

exports.default = App;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _outlinePhone24px = __webpack_require__(32);

var _outlinePhone24px2 = _interopRequireDefault(_outlinePhone24px);

var _outlineEmail24px = __webpack_require__(33);

var _outlineEmail24px2 = _interopRequireDefault(_outlineEmail24px);

var _reactSvgInline = __webpack_require__(4);

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledBox = /*#__PURE__*/(0, _reactEmotion2.default)(_emotion.Box, {
  target: 'e456i4h0'
})('background-color:white;font-size:0.8em;border-top-left-radius:10px;border-top-right-radius:10px;color:rgba(0,0,0,0.87);a{color:#db3a1b;vertical-align:top;text-decoration:none;padding-top:10px;padding-left:10px;}@media (min-width:800px){background-color:#003468;color:rgba(255,255,255,0.5);a{color:white;padding-left:8px;}}');

var HideMobile = /*#__PURE__*/(0, _reactEmotion2.default)(_emotion.Box, {
  target: 'e456i4h1'
})('@media (max-width:800px){display:none;}');
var iconStyle = /*#__PURE__*/(0, _reactEmotion.css)('svg{fill:white;height:17px;width:17px;}@media (max-width:800px){svg{fill:#db3a1b;}}');

var Header = function (_PureComponent) {
  _inherits(Header, _PureComponent);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;

      return (
        // <Box>foo</Box>
        _react2.default.createElement(
          StyledBox,
          { p: 3, is: 'header', className: className },
          _react2.default.createElement(
            _emotion.Flex,
            { justifyContent: 'space-evenly', flexWrap: 'wrap' },
            _react2.default.createElement(
              HideMobile,
              null,
              'Empowering You to Hire and Develop the Best!'
            ),
            _react2.default.createElement(
              _emotion.Box,
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: iconStyle, svg: _outlinePhone24px2.default }),
              '  ',
              _react2.default.createElement(
                'a',
                { href: 'tel:512-775-4260' },
                '512-775-4250'
              )
            ),
            _react2.default.createElement(
              _emotion.Box,
              null,
              _react2.default.createElement(_reactSvgInline2.default, { svg: _outlineEmail24px2.default, className: iconStyle }),
              '  ',
              _react2.default.createElement(
                'a',
                { href: 'mailto:info@winsailconsulting.com' },
                'info@winsailconsulting.com'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.PureComponent);

exports.default = Header;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "    <svg\n      version=\"1.1\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      x=\"0px\"\n      y=\"0px\"\n      width=\"24px\"\n      {...props}\n      height=\"24px\"\n      viewBox=\"0 0 24 24\"\n      enable-background=\"new 0 0 24 24\"\n      xml:space=\"preserve\"\n    >\n      <g id=\"Bounding_Boxes\">\n        <g id=\"ui_x5F_spec_x5F_header_copy_2\" />\n        <path fill=\"none\" d=\"M0,0h24v24H0V0z\" />\n      </g>\n      <g id=\"Outline\">\n        <g id=\"ui_x5F_spec_x5F_header\" />\n        <path\n          d=\"M6.54,5C6.6,5.89,6.75,6.76,6.99,7.59l-1.2,1.2C5.38,7.59,5.12,6.32,5.03,5H6.54 M16.4,17.02c0.85,0.24,1.72,0.39,2.6,0.45\n\t\tv1.49c-1.32-0.09-2.59-0.35-3.8-0.75L16.4,17.02 M7.5,3H4C3.45,3,3,3.45,3,4c0,9.39,7.61,17,17,17c0.55,0,1-0.45,1-1v-3.49\n\t\tc0-0.55-0.45-1-1-1c-1.24,0-2.45-0.2-3.57-0.57c-0.1-0.04-0.21-0.05-0.31-0.05c-0.26,0-0.51,0.1-0.71,0.29l-2.2,2.2\n\t\tc-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2C9.1,8.31,9.18,7.92,9.07,7.57C8.7,6.45,8.5,5.25,8.5,4C8.5,3.45,8.05,3,7.5,3L7.5,3z\"\n        />\n      </g>\n    </svg>\n"

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 20010904//EN\"\n \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"24px\"\n\t height=\"24px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n<g id=\"Bounding_Boxes\">\n\t<g id=\"ui_x5F_spec_x5F_header_copy_2\">\n\t</g>\n\t<path fill=\"none\" d=\"M0,0h24v24H0V0z\"/>\n</g>\n<g id=\"Outline\">\n\t<g id=\"ui_x5F_spec_x5F_header\">\n\t</g>\n\t<path id=\"XMLID_497_\" d=\"M22,6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6z M20,6l-8,5L4,6H20z\n\t\t M20,18L4,18V8l8,5l8-5V18z\"/>\n</g>\n</svg>"

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _logo = __webpack_require__(7);

var _logo2 = _interopRequireDefault(_logo);

var _emotion = __webpack_require__(2);

var _LogoWinslowCertifiedConsultant = __webpack_require__(35);

var _LogoWinslowCertifiedConsultant2 = _interopRequireDefault(_LogoWinslowCertifiedConsultant);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CopyRight = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e1dmvlby0'
})(function (props) {
  return {
    margin: '0 auto',
    fontSize: '.7em',
    paddingBottom: '10px'
  };
});

var Footer = function (_PureComponent) {
  _inherits(Footer, _PureComponent);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var year = new Date().getFullYear();
      return _react2.default.createElement(
        _emotion.Flex,
        {
          flexWrap: 'wrap',
          className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)({
            borderTop: '5px solid #e4edee'
          })
        },
        _react2.default.createElement(
          _emotion.Box,
          { p: 3, width: [1, 1 / 2] },
          _react2.default.createElement('img', { src: _logo2.default })
        ),
        _react2.default.createElement(
          _emotion.Box,
          { p: 3, width: [1, 1 / 2] },
          _react2.default.createElement('img', { src: _LogoWinslowCertifiedConsultant2.default })
        ),
        _react2.default.createElement(
          CopyRight,
          null,
          '\xA9 ',
          year,
          ' Winsail Consulting. All Rights Reserved.'
        )
      );
    }
  }]);

  return Footer;
}(_react.PureComponent);

exports.default = Footer;

// const styles = theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500
//   },
//   footer: {
//     backgroundColor: 'white',
//     padding: '20px',
//     marginTop: '5px',
//     // borderRadius: 25,
//     borderBottomLeftRadius: 25,
//     borderBottomRightRadius: 25
//   },
//   copyright: {
//     textAlign: 'center',
//     fontSize: '.5em',
//     marginTop: '15px'
//   }
// });

// const Footer = props => {
//   const { classes } = props;
//   const year = new Date().getFullYear();
//   return (
//     <div className={classes.footer}>
//       <Grid container>
//         <Grid item xs={6}>
//           <img src={logoImg} />
//         </Grid>
//         <Grid item xs={6}>
//           <img src={winslowLogo} />
//         </Grid>
//       </Grid>
//       <Grid container align="center" className={classes.copyright}>
//         <Grid item xs={12}>
//           <Typography variant="caption" gutterBottom align="center">
//             © {year} Winsail Consulting. All Rights Reserved.
//           </Typography>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default withStyles(styles)(Footer);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Logo-WinslowCertifiedConsultant.fdec7c2d.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(37);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(38);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(39);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(40);

var _reactUniversalComponent = __webpack_require__(41);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: 'C:/Users/nxa14621/Sites/davidkindler.com/winsail/emotion/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Testimonials',
  file: 'C:/Users/nxa14621/Sites/davidkindler.com/winsail/emotion/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/pages/Testimonials', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Testimonials');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/pages/Testimonials';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/ForYou',
  file: 'C:/Users/nxa14621/Sites/davidkindler.com/winsail/emotion/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/pages/ForYou', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/ForYou');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/pages/ForYou';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/ForYourCompany',
  file: 'C:/Users/nxa14621/Sites/davidkindler.com/winsail/emotion/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/pages/ForYourCompany', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/ForYourCompany');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/pages/ForYourCompany';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/WinslowBehavioralAssessment',
  file: 'C:/Users/nxa14621/Sites/davidkindler.com/winsail/emotion/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 20)), (0, _importCss3.default)('src/pages/WinslowBehavioralAssessment', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/WinslowBehavioralAssessment');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return 'src/pages/WinslowBehavioralAssessment';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/HowItWorks',
  file: 'C:/Users/nxa14621/Sites/davidkindler.com/winsail/emotion/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/pages/HowItWorks', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/HowItWorks');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/pages/HowItWorks';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/WinslowInternetAssessment',
  file: 'C:/Users/nxa14621/Sites/davidkindler.com/winsail/emotion/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 24)), (0, _importCss3.default)('src/pages/WinslowInternetAssessment', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/WinslowInternetAssessment');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return 'src/pages/WinslowInternetAssessment';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/SignUp',
  file: 'C:/Users/nxa14621/Sites/davidkindler.com/winsail/emotion/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 25)), (0, _importCss3.default)('src/pages/SignUp', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/SignUp');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return 'src/pages/SignUp';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/404',
  file: 'C:/Users/nxa14621/Sites/davidkindler.com/winsail/emotion/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 26)), (0, _importCss3.default)('src/pages/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return 'src/pages/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 8

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(42);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(43);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(44);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(12);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z\"/>\n</svg>\n"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <path d=\"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z\"/>\n</svg>"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\"/>\n</svg>"

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactSvgInline = __webpack_require__(4);

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

var _baselineAdjust24px = __webpack_require__(49);

var _baselineAdjust24px2 = _interopRequireDefault(_baselineAdjust24px);

var _reactResponsiveCarousel = __webpack_require__(15);

var _emotion = __webpack_require__(2);

var _carouselMin = __webpack_require__(16);

var _carouselMin2 = _interopRequireDefault(_carouselMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bulletStyle = /*#__PURE__*/(0, _reactEmotion.css)('vertical-align:sub;padding-right:10px;svg{fill:rgba(0,0,0,0.54);height:20px;width:20px;align-self:flex-start;flex-shrink:0 margin-right:0px;}');
var TabPanels = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e1oyupb80'
})('padding:0px;@media (min-width:800px){padding:20px;}');

// const Tabs = styled.div`
//   display: flex;
//   justify-content: space-evenly;
// `;
var Tab = /*#__PURE__*/(0, _reactEmotion2.default)('span', {
  target: 'e1oyupb81'
})(function (props) {
  return {
    borderBottom: props.active ? '1px solid #db3a1b' : 'none',
    color: props.active ? '#db3a1b' : 'default',
    cursor: 'pointer',
    textAlign: 'center'
  };
});

var Panels = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e1oyupb82'
})('display:block;position:relative;');
var Panel = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e1oyupb83'
})(function (props) {
  return {
    // display: props.active ? 'block' : 'none',
    opacity: props.active ? 1 : 0,
    transition: 'opacity 0.3s ease-in'
  };
});

var carouselClass = /*#__PURE__*/(0, _reactEmotion.css)('word-break:break-word;@media (maxs-width:799px){font-size:0.9rem;}.carousel .slide{background:white;text-align:left;}.carousel .slide.selected{}.carousel.carousel-slider{padding-left:10px;}@media (min-width:800px){.carousel.carousel-slider{padding-left:40px;}}ul{padding-top:20px;}@media (max-width:800px){ul{padding:10px;}}ul li{display:block;padding:0px;line-height:1.5rem;}ul li div{display:inline;}');

var HomeTabs = function (_PureComponent) {
  _inherits(HomeTabs, _PureComponent);

  function HomeTabs(props) {
    _classCallCheck(this, HomeTabs);

    var _this = _possibleConstructorReturn(this, (HomeTabs.__proto__ || Object.getPrototypeOf(HomeTabs)).call(this, props));

    _this._tabHandler = function (target) {
      _this.setState({ activeTab: target });
    };

    _this.state = { activeTab: 0 };
    _this._tabHandler = _this._tabHandler.bind(_this);
    return _this;
  }

  _createClass(HomeTabs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        TabPanels,
        null,
        _react2.default.createElement(
          _emotion.Flex,
          { flexWrap: 'wrap' },
          _react2.default.createElement(
            _emotion.Box,
            {
              width: [1, 1 / 3],
              p: 2,
              className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('text-align:center;')
            },
            _react2.default.createElement(
              Tab,
              { onClick: function onClick() {
                  return _this2._tabHandler(0);
                }, active: this.state.activeTab === 0 },
              'The Dynamic Profile'
            )
          ),
          _react2.default.createElement(
            _emotion.Box,
            {
              width: [1, 1 / 3],
              p: 2,
              className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('text-align:center;')
            },
            _react2.default.createElement(
              Tab,
              { onClick: function onClick() {
                  return _this2._tabHandler(1);
                }, active: this.state.activeTab === 1 },
              'The Discovery Profile'
            )
          ),
          _react2.default.createElement(
            _emotion.Box,
            {
              width: [1, 1 / 3],
              p: 2,
              className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('text-align:center;')
            },
            _react2.default.createElement(
              Tab,
              { onClick: function onClick() {
                  return _this2._tabHandler(2);
                }, active: this.state.activeTab === 2 },
              'The Sucesss Profile'
            )
          )
        ),
        _react2.default.createElement(
          _reactResponsiveCarousel.Carousel,
          {
            showThumbs: false,
            className: carouselClass,
            selectedItem: this.state.activeTab,
            showIndicators: false,
            showStatus: false,
            showArrows: false
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: bulletStyle, svg: _baselineAdjust24px2.default }),
              'Hiring, executive, management, technical and sales staff'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: bulletStyle, svg: _baselineAdjust24px2.default }),
              'Offers full-spectrum leadership development'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: bulletStyle, svg: _baselineAdjust24px2.default }),
              'Tackles succession management and promotion'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: bulletStyle, svg: _baselineAdjust24px2.default }),
              'Measures 24 Behavioral Traits'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: bulletStyle, svg: _baselineAdjust24px2.default }),
              'Hiring mid-level employees'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: bulletStyle, svg: _baselineAdjust24px2.default }),
              'Offers an extensive screening tool'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: bulletStyle, svg: _baselineAdjust24px2.default }),
              'Uses training and staff development'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: bulletStyle, svg: _baselineAdjust24px2.default }),
              'A tool for career-pathing & Promotion'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: bulletStyle, svg: _baselineAdjust24px2.default }),
              'Hiring front-line and hourly staff'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: bulletStyle, svg: _baselineAdjust24px2.default }),
              'Emphasizes personal development'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: bulletStyle, svg: _baselineAdjust24px2.default }),
              'Offers employee training'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: bulletStyle, svg: _baselineAdjust24px2.default }),
              'Measures 11 Behavioral Traits'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_reactSvgInline2.default, { className: bulletStyle, svg: _baselineAdjust24px2.default }),
              'Compatibility analysis of all front-line positions'
            )
          )
        )
      );
    }
  }]);

  return HomeTabs;
}(_react.PureComponent);

exports.default = HomeTabs;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z\"/>\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n</svg>\n"

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/sign-up-pen.1b9e521e.png";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"24px\"\n\t height=\"24px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n<g id=\"Bounding_Boxes\">\n\t<path opacity=\"0.87\" fill=\"none\" d=\"M24,0v24H0V0H24z\"/>\n</g>\n<g id=\"Rounded\">\n\t<path d=\"M12.29,8.71l-2.59,2.59c-0.39,0.39-0.39,1.02,0,1.41l2.59,2.59c0.63,0.63,1.71,0.18,1.71-0.71V9.41\n\t\tC14,8.52,12.92,8.08,12.29,8.71z\"/>\n</g>\n</svg>\n"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"24px\"\n\t height=\"24px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n<g id=\"Bounding_Boxes\">\n\t<path fill=\"none\" d=\"M0,0h24v24H0V0z\"/>\n</g>\n<g id=\"Rounded\">\n\t<path d=\"M11.71,15.29l2.59-2.59c0.39-0.39,0.39-1.02,0-1.41l-2.59-2.59C11.08,8.08,10,8.52,10,9.41v5.17\n\t\tC10,15.48,11.08,15.92,11.71,15.29z\"/>\n</g>\n</svg>\n"

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/home_coaching_sectionbg.f7b117a3.jpg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Accordion = __webpack_require__(59);

var _Accordion2 = _interopRequireDefault(_Accordion);

var _AccordionItem = __webpack_require__(23);

var _AccordionItem2 = _interopRequireDefault(_AccordionItem);

var _AccordionHeader = __webpack_require__(22);

var _AccordionHeader2 = _interopRequireDefault(_AccordionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RunAccordion = function (_Component) {
  _inherits(RunAccordion, _Component);

  function RunAccordion() {
    _classCallCheck(this, RunAccordion);

    return _possibleConstructorReturn(this, (RunAccordion.__proto__ || Object.getPrototypeOf(RunAccordion)).apply(this, arguments));
  }

  _createClass(RunAccordion, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Accordion2.default,
          null,
          _react2.default.createElement(
            _AccordionItem2.default,
            { name: 'a', caption: 'Is this applicant a success orientated individual?' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Ambition:'
                ),
                ' this trait score tells you if this person is a competitive, goal oriented person who has a strong desire to successful.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Self-confidence:'
                ),
                ' tells you if the applicant has supreme confidence in him or herself and truly believes they have what it takes to be successful.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Conscientiousness:'
                ),
                ' tells you if this person places the welfare of management and the organization before their own personal self-interest.'
              )
            )
          ),
          _react2.default.createElement(
            _AccordionItem2.default,
            { name: 'b', caption: 'Will this person be a dedicated and cooperative employee?' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Coachability:'
                ),
                ' will tell you if this person respects authority figures (their managers) and willingly accepts their leadership and direction.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Recognition:'
                ),
                ' indicates if this person has an internal motivation to be seen as a desirable person and will act appropriately to receive recognition.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Trust:'
                ),
                ' trusting individuals are not suspicious and defensive. They openly communicate and believe others are deserving of their trusting nature.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Flexibility:'
                ),
                ' tells you if this applicant will readily adapt to the company\'s methods of operation and decisions or be resistant and insist on their own.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Contentment:'
                ),
                ' lets you know if this is a happy person with a positive disposition, rather than someone who is disenchanted with their life.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Responsibility:'
                ),
                ' will this individual accept responsibility for the consequences of his or her words and actions or blame others instead.'
              )
            )
          ),
          _react2.default.createElement(
            _AccordionItem2.default,
            { name: 'c', caption: 'What is this individual\'s interpersonal orientation?' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Leadership:'
                ),
                ' tells you if this individual believes they are a leader and if they enjoy managing, motivating and being responsible for others.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Sociability:'
                ),
                ' discloses whether the applicant is a people-oriented extrovert or an introvert who focuses on "things" and avoids contact with others.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Exhibition:'
                ),
                ' reveals if this person enjoys being the center of attention, someone who is entertaining, demonstrative and a pleasure to be with.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Nurturance:'
                ),
                ' nurturing individuals are keenly aware of and sensitive to the emotional needs of others and readily respond with sympathy and support.'
              )
            )
          ),
          _react2.default.createElement(
            _AccordionItem2.default,
            { name: 'd', caption: 'Does this applicant meet the intellectual requirements for an employee?' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Alertness:'
                ),
                ' measures the applicant\'s inherent ability to learn quickly, understand complex situations and successfully solve problems.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Structure:'
                ),
                ' indicates how organized their thinking, planning and actions will be. They will be highly mentally structured and disciplined.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Order:'
                ),
                ' tells you if they will keep their physical surroundings, neat and orderly. They will have a place for everything and everything in its place.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Control:'
                ),
                ' will determine if they are impulsive and talk or act without thinking, or someone who will control their impulsive behavior.'
              )
            )
          ),
          _react2.default.createElement(
            _AccordionItem2.default,
            { name: 'e', caption: 'Does this applicant have the required emotional maturity and discipline?' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Sociability:'
                ),
                ' will determine if they enjoy interacting with others and will be perceived as a warm and friendly person others enjoy being with.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Endurance:'
                ),
                ' tells you if they have the inherent physical energy and persistence required to prospect, make presentations and close sales.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Assertiveness:'
                ),
                ' enables individuals to persuade others to do what they want and to accept their recommendations; they make things happen.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Tough-mindedness:'
                ),
                ' equips those who must sell to accept the rejection, disappointments and setbacks that are inevitable in sales situations.'
              )
            )
          ),
          _react2.default.createElement(
            _AccordionItem2.default,
            { name: 'f', caption: 'Does this applicant have an inherent sales personality?' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Sociability:'
                ),
                ' will determine if they enjoy interacting with others and will be perceived as a warm and friendly person others enjoy being with.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Endurance:'
                ),
                ' tells you if they have the inherent physical energy and persistence required to prospect, make presentations and close sales.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Assertiveness:'
                ),
                ' enables individuals to persuade others to do what they want and to accept their recommendations; they make things happen.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Tough-mindedness: '
                ),
                'equips those who must sell to accept the rejection, disappointments and setbacks that are inevitable in sales situations.'
              )
            )
          )
        )
      );
    }
  }]);

  return RunAccordion;
}(_react.Component);

exports.default = RunAccordion;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AccordionHeader = __webpack_require__(22);

var _AccordionHeader2 = _interopRequireDefault(_AccordionHeader);

var _AccordionItem = __webpack_require__(23);

var _AccordionItem2 = _interopRequireDefault(_AccordionItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    var _this = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this, props));

    _this.onToggle = function (name) {
      var openedHash = _this.state.openedHash;
      _this.setState({
        openedHash: _extends({}, openedHash, _defineProperty({}, name, { opened: !openedHash[name].opened, checked: openedHash[name].checked }))
      });
    };

    _this.onCheck = function (name) {
      var openedHash = _this.state.openedHash;
      _this.setState({
        openedHash: _extends({}, openedHash, _defineProperty({}, name, { checked: !openedHash[name].checked, opened: openedHash[name].opened }))
      });
    };

    var state = { openedHash: {} };

    _react.Children.toArray(props.children).forEach(function (child) {
      if (child) {
        state.openedHash[child.props.name] = { opened: !!child.props.defaultOpen, checked: !!child.props.defaultCheck };
      }
    });

    _this.state = state;
    return _this;
  }

  _createClass(Accordion, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var openedHash = this.state.openedHash;
      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        null,
        _react.Children.toArray(children).filter(function (c) {
          return c;
        }).map(function (child) {
          return (0, _react.cloneElement)(child, {
            key: child.props.name,
            expanded: openedHash[child.props.name].opened,
            checked: openedHash[child.props.name].checked,
            onToggle: _this2.onToggle
          });
        })
      );
    }
  }]);

  return Accordion;
}(_react.Component);

exports.default = Accordion;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"24px\"\n\t height=\"24px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n<g id=\"Bounding_Boxes\" display=\"none\">\n\t<g id=\"ui_x5F_spec_x5F_header_copy_3\" display=\"inline\">\n\t</g>\n\t<path display=\"inline\" fill=\"none\" d=\"M0,0h24v24H0V0z\"/>\n</g>\n<g id=\"Rounded\">\n\t<g id=\"ui_x5F_spec_x5F_header_copy_6\">\n\t</g>\n\t<path d=\"M8.12,9.29L12,13.17l3.88-3.88c0.39-0.39,1.02-0.39,1.41,0l0,0c0.39,0.39,0.39,1.02,0,1.41l-4.59,4.59\n\t\tc-0.39,0.39-1.02,0.39-1.41,0l-4.59-4.59c-0.39-0.39-0.39-1.02,0-1.41l0,0C7.09,8.91,7.73,8.9,8.12,9.29z\"/>\n</g>\n</svg>\n"

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/winslow-test-taker.a2f988ab.png";

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"24px\"\n\t height=\"24px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n<g id=\"Header_x2F_BG\" display=\"none\">\n\t<rect x=\"-50\" y=\"-270\" display=\"inline\" fill=\"#F1F1F2\" width=\"520\" height=\"520\"/>\n</g>\n<g id=\"Bounding_Boxes\">\n\t<g id=\"ui_x5F_spec_x5F_header_copy_3\">\n\t</g>\n\t<path fill=\"none\" d=\"M0,0h24v24H0V0z\"/>\n</g>\n<g id=\"Rounded\" display=\"none\">\n\t<g id=\"ui_x5F_spec_x5F_header_copy_5\" display=\"inline\">\n\t</g>\n\t<path display=\"inline\" d=\"M11.5,2C6.81,2,3,5.81,3,10.5S6.81,19,11.5,19H12v3c4.86-2.34,8-7,8-11.5C20,5.81,16.19,2,11.5,2z\n\t\t M12.5,16.5h-2v-2h2V16.5z M12.9,11.72c-0.01,0.01-0.02,0.03-0.03,0.05c-0.05,0.08-0.1,0.16-0.14,0.24\n\t\tc-0.02,0.03-0.03,0.07-0.04,0.11c-0.03,0.07-0.06,0.14-0.08,0.21c-0.07,0.21-0.1,0.43-0.1,0.68h-0.87h0H10.5\n\t\tc0-0.51,0.08-0.94,0.2-1.3c0-0.01,0-0.02,0.01-0.03c0.01-0.04,0.04-0.06,0.05-0.1c0.06-0.16,0.13-0.3,0.22-0.44\n\t\tc0.03-0.05,0.07-0.1,0.1-0.15c0.03-0.04,0.05-0.09,0.08-0.12l0.01,0.01c0.84-1.1,2.21-1.44,2.32-2.68\n\t\tc0.09-0.98-0.61-1.93-1.57-2.13c-1.04-0.22-1.98,0.39-2.3,1.28C9.48,7.71,9.15,8,8.74,8h-0.2C7.94,8,7.5,7.41,7.67,6.83\n\t\tc0.55-1.82,2.37-3.09,4.43-2.79c1.69,0.25,3.04,1.64,3.33,3.33C15.87,9.81,13.8,10.4,12.9,11.72z\"/>\n</g>\n<g id=\"Sharp\" display=\"none\">\n\t<g id=\"ui_x5F_spec_x5F_header_copy_4\" display=\"inline\">\n\t</g>\n\t<path display=\"inline\" d=\"M11.5,2C6.81,2,3,5.81,3,10.5S6.81,19,11.5,19H12v3c4.86-2.34,8-7,8-11.5C20,5.81,16.19,2,11.5,2z\n\t\t M12.5,16.5h-2v-2h2V16.5z M12.5,13h-2c0-3.25,3-3,3-5c0-1.1-0.9-2-2-2s-2,0.9-2,2h-2c0-2.21,1.79-4,4-4s4,1.79,4,4\n\t\tC15.5,10.5,12.5,10.75,12.5,13z\"/>\n</g>\n<g id=\"Outline\" display=\"none\">\n\t<g id=\"ui_x5F_spec_x5F_header\" display=\"inline\">\n\t</g>\n\t<g display=\"inline\">\n\t\t<path d=\"M11,23.59v-3.6c-5.01-0.26-9-4.42-9-9.49C2,5.26,6.26,1,11.5,1S21,5.26,21,10.5c0,4.95-3.44,9.93-8.57,12.4L11,23.59z\n\t\t\t M11.5,3C7.36,3,4,6.36,4,10.5S7.36,18,11.5,18H13v2.3c3.64-2.3,6-6.08,6-9.8C19,6.36,15.64,3,11.5,3z\"/>\n\t\t<rect x=\"10.5\" y=\"14.5\" width=\"2\" height=\"2\"/>\n\t\t<path d=\"M12.5,13h-2c0-3.25,3-3,3-5c0-1.1-0.9-2-2-2s-2,0.9-2,2h-2c0-2.21,1.79-4,4-4s4,1.79,4,4C15.5,10.5,12.5,10.75,12.5,13z\"\n\t\t\t/>\n\t</g>\n</g>\n<g id=\"Duotone\">\n\t<g id=\"ui_x5F_spec_x5F_header_copy_2\">\n\t</g>\n\t<g>\n\t\t<path opacity=\"0.3\" d=\"M11.5,3C7.36,3,4,6.36,4,10.5S7.36,18,11.5,18H13v2.3c3.64-2.3,6-6.08,6-9.8C19,6.36,15.64,3,11.5,3z\n\t\t\t M12.5,16.5h-2v-2h2V16.5z M12.5,13h-2c0-3.25,3-3,3-5c0-1.1-0.9-2-2-2s-2,0.9-2,2h-2c0-2.21,1.79-4,4-4s4,1.79,4,4\n\t\t\tC15.5,10.5,12.5,10.75,12.5,13z\"/>\n\t\t<g>\n\t\t\t<path d=\"M11.5,1C6.26,1,2,5.26,2,10.5c0,5.07,3.99,9.23,9,9.49v3.6l1.43-0.69C17.56,20.43,21,15.45,21,10.5\n\t\t\t\tC21,5.26,16.74,1,11.5,1z M13,20.3V18h-1.5C7.36,18,4,14.64,4,10.5S7.36,3,11.5,3S19,6.36,19,10.5C19,14.23,16.64,18.01,13,20.3z\n\t\t\t\t\"/>\n\t\t\t<rect x=\"10.5\" y=\"14.5\" width=\"2\" height=\"2\"/>\n\t\t\t<path d=\"M11.5,4c-2.21,0-4,1.79-4,4h2c0-1.1,0.9-2,2-2s2,0.9,2,2c0,2-3,1.75-3,5h2c0-2.25,3-2.5,3-5C15.5,5.79,13.71,4,11.5,4z\"\n\t\t\t\t/>\n\t\t</g>\n\t</g>\n</g>\n<g id=\"Fill\" display=\"none\">\n\t<g id=\"ui_x5F_spec_x5F_header_copy\" display=\"inline\">\n\t</g>\n\t<path display=\"inline\" d=\"M11.5,2C6.81,2,3,5.81,3,10.5S6.81,19,11.5,19H12v3c4.86-2.34,8-7,8-11.5C20,5.81,16.19,2,11.5,2z\n\t\t M12.5,16.5h-2v-2h2V16.5z M12.5,13h-2c0-3.25,3-3,3-5c0-1.1-0.9-2-2-2s-2,0.9-2,2h-2c0-2.21,1.79-4,4-4s4,1.79,4,4\n\t\tC15.5,10.5,12.5,10.75,12.5,13z\"/>\n</g>\n<g id=\"nyt_x5F_exporter_x5F_info\" display=\"none\">\n</g>\n</svg>\n"

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _emotion = __webpack_require__(2);

var _baselineCheck_circle_outline24px = __webpack_require__(6);

var _baselineCheck_circle_outline24px2 = _interopRequireDefault(_baselineCheck_circle_outline24px);

var _reactSvgInline = __webpack_require__(4);

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckStyled = /*#__PURE__*/(0, _reactEmotion2.default)(_reactSvgInline2.default, {
  target: 'e1yxxnid0'
})(function (props) {
  return {
    visibility: props.valid === 'true' ? 'visible' : 'hidden',
    paddingLeft: '5px',
    float: 'right',
    svg: {
      fill: 'rgba(0, 0, 0, 0.54)',
      height: '20px',
      width: '20px',
      alignSelf: 'flex-end',
      flexShrink: 0,
      marginRight: '0px',
      verticalAlign: 'bottom'
    }
  };
});

// const checkStyle = css`
//   svg {
//     fill: rgba(0, 0, 0, 0.54);
//     height: 20px;
//     width: 20px;
//     align-self: flex-start;
//     flex-shrink: 0
//     margin-right: 0px;
//   }
// `;

var inputBox = /*#__PURE__*/(0, _reactEmotion.css)('margin:10px 10%;padding:20px 0;position:relative;');

var InputStyled = /*#__PURE__*/(0, _reactEmotion2.default)('input', {
  target: 'e1yxxnid1'
})(function (props) {
  return {
    padding: '10px',
    border: 'none',
    borderBottom: props.valid ? '2px solid black' : '1px solid #db3a1b',
    outline: 'none',
    color: props.valid ? 'black' : 'red',
    width: '100%'
  };
});

var LabelStyled = /*#__PURE__*/(0, _reactEmotion2.default)('label', {
  target: 'e1yxxnid2'
})(function (props) {
  return {
    position: 'absolute',
    top: props.blur ? '0px' : '28px',
    left: props.blur ? '0px' : '10px',
    fontSize: props.blur ? '0.7rem' : '1rem',
    transition: 'all 0.3s ease-in-out 0s',
    width: '100%'
  };
});

var FormInput = function (_PureComponent) {
  _inherits(FormInput, _PureComponent);

  function FormInput(props) {
    _classCallCheck(this, FormInput);

    var _this = _possibleConstructorReturn(this, (FormInput.__proto__ || Object.getPrototypeOf(FormInput)).call(this, props));

    _this.handleBlur = function (e) {
      if (_this.props.value.length === 0) {
        _this.setState({ isBlurred: false });
      }
    };

    _this.handleFocus = function (e) {
      _this.setState({ isBlurred: true });
    };

    _this.state = {
      isDirty: false,
      isSubmitting: false,
      isValid: false,
      isBlurred: false
    };
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    // this.handleChange = this.handleChange.bind(this);
    return _this;
  }

  _createClass(FormInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          handleChange = _props.handleChange,
          value = _props.value,
          valid = _props.valid;
      var isBlurred = this.state.isBlurred;

      return _react2.default.createElement(
        _emotion.Box,
        { className: inputBox },
        _react2.default.createElement(
          LabelStyled,
          { blur: isBlurred, htmlFor: label },
          label.replace(/^\w/, function (c) {
            return c.toUpperCase();
          }),
          _react2.default.createElement(CheckStyled, { svg: _baselineCheck_circle_outline24px2.default, valid: '' + valid })
        ),
        _react2.default.createElement(InputStyled, {
          valid: valid,
          id: label,
          label: label,
          value: value,
          onChange: handleChange,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus
        })
      );
    }
  }]);

  return FormInput;
}(_react.PureComponent);

exports.default = FormInput;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _emotion = __webpack_require__(2);

var _baselineCheck_circle_outline24px = __webpack_require__(6);

var _baselineCheck_circle_outline24px2 = _interopRequireDefault(_baselineCheck_circle_outline24px);

var _reactSvgInline = __webpack_require__(4);

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckStyled = /*#__PURE__*/(0, _reactEmotion2.default)(_reactSvgInline2.default, {
  target: 'e1pf07t0'
})(function (props) {
  return {
    visibility: props.valid === 'true' ? 'visible' : 'hidden',
    paddingLeft: '5px',
    float: 'right',
    svg: {
      fill: 'rgba(0, 0, 0, 0.54)',
      height: '20px',
      width: '20px',
      alignSelf: 'flex-end',
      flexShrink: 0,
      marginRight: '0px',
      verticalAlign: 'bottom'
    }
  };
});

var inputBox = /*#__PURE__*/(0, _reactEmotion.css)('margin:10px 10%;padding:20px 0;position:relative;');

// const inputStyle = css`
//   padding: 10px;
//   border: none;
//   border-bottom: 1px solid #db3a1b;
//   outline: none;
//   color: black;
//   width: 100%;
// `;

var TextAreaStyled = /*#__PURE__*/(0, _reactEmotion2.default)('textarea', {
  target: 'e1pf07t1'
})(function (props) {
  return {
    padding: '10px',
    border: 'none',
    borderBottom: props.valid ? '2px solid black' : '1px solid #db3a1b',
    outline: 'none',
    color: 'black',
    width: '100%'
  };
});

var LabelStyled = /*#__PURE__*/(0, _reactEmotion2.default)('label', {
  target: 'e1pf07t2'
})(function (props) {
  return {
    position: 'absolute',
    top: props.blur ? '0px' : '28px',
    left: props.blur ? '0px' : '10px',
    fontSize: props.blur ? '0.7rem' : '1rem',
    transition: 'all 0.3s ease-in-out 0s',
    width: '100%'
  };
});

var FormTextArea = function (_PureComponent) {
  _inherits(FormTextArea, _PureComponent);

  function FormTextArea(props) {
    _classCallCheck(this, FormTextArea);

    var _this = _possibleConstructorReturn(this, (FormTextArea.__proto__ || Object.getPrototypeOf(FormTextArea)).call(this, props));

    _this.handleBlur = function (e) {
      if (_this.props.value.length === 0) {
        _this.setState({ isBlurred: false });
      }
    };

    _this.handleFocus = function (e) {
      _this.setState({ isBlurred: true });
    };

    _this.state = {
      isDirty: false,
      isSubmitting: false,
      isValid: false,
      isBlurred: false
    };
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    return _this;
  }

  _createClass(FormTextArea, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          handleChange = _props.handleChange,
          value = _props.value,
          valid = _props.valid;
      var isBlurred = this.state.isBlurred;

      return _react2.default.createElement(
        _emotion.Box,
        { className: inputBox },
        _react2.default.createElement(
          LabelStyled,
          { blur: isBlurred, htmlFor: label },
          label.replace(/^\w/, function (c) {
            return c.toUpperCase();
          }),
          _react2.default.createElement(CheckStyled, { svg: _baselineCheck_circle_outline24px2.default, valid: '' + valid })
        ),
        _react2.default.createElement(TextAreaStyled, {
          rows: '5',
          valid: valid,
          id: label,
          label: label,
          value: value,
          onChange: handleChange,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus
        })
      );
    }
  }]);

  return FormTextArea;
}(_react.PureComponent);

exports.default = FormTextArea;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("react-recaptcha");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner() {
  return _react2.default.createElement(
    StyledSpinner,
    { viewBox: '0 0 50 50' },
    _react2.default.createElement('circle', { className: 'path', cx: '25', cy: '25', r: '20', fill: 'none', strokeWidth: '4' })
  );
};

var StyledSpinner = /*#__PURE__*/(0, _reactEmotion2.default)('svg', {
  target: 'eqk8tw0'
})('animation:rotate 2s linear infinite;margin:-25px 0 0 -25px;width:50px;height:50px;& .path{stroke:#5652bf;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite;}@keyframes rotate{100%{transform:rotate(360deg);}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0;}50%{stroke-dasharray:90,150;stroke-dashoffset:-35;}100%{stroke-dasharray:90,150;stroke-dashoffset:-124;}}');

exports.default = Spinner;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DesktopMenu = __webpack_require__(70);

var _DesktopMenu2 = _interopRequireDefault(_DesktopMenu);

var _MobileMenu = __webpack_require__(72);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

var _reactWindowSize = __webpack_require__(75);

var _reactWindowSize2 = _interopRequireDefault(_reactWindowSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import React, { PureComponent } from 'react';
var LoadMenu = function LoadMenu(props) {
  return props.windowWidth > 800 ? _react2.default.createElement(_DesktopMenu2.default, null) : _react2.default.createElement(_MobileMenu2.default, null);
};

exports.default = (0, _reactWindowSize2.default)(LoadMenu);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _emotion = __webpack_require__(2);

var _AffixWrapper = __webpack_require__(71);

var _AffixWrapper2 = _interopRequireDefault(_AffixWrapper);

var _logo = __webpack_require__(7);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledNav = /*#__PURE__*/(0, _reactEmotion2.default)('nav', {
  target: 'e17l7x2c0'
})('width:100%;background:white;ul{list-style:none;margin:0;padding:0;position:relative;}li{float:left;position:relative;}ul li{float:left;position:relative;}ul li:hover{}ul li ul{visibility:hidden;opacity:0;float:left;margin:0;position:absolute;top:75px;left:0px;background-color:white;border:1px solid #ccc;transform:translateY(-20px);transition:all 0.3s ease-in-out 0s;}ul li ul li{text-align:center;min-width:225px;height:70px;}ul li ul li:hover{}ul li:hover ul{visibility:visible;transform:translateY(0%);transition-delay:0s;opacity:1;z-index:999;}a{color:black;font-size:0.9rem;display:inline-block;text-decoration:none;}');

var StyledAffix = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e17l7x2c1'
})('box-shadow:0px 1px 10px #ccc;background-color:white;.affix{position:fixed;top:0;left:0;width:100%;box-shadow:0px 2px 5px #ccc;z-index:5;}');

var StyledLink = /*#__PURE__*/(0, _reactEmotion.css)('padding:20px 30px;padding:27px 8px;margin:0;height:70px;width:100%;&:hover{background-color:#ffd204;border-bottom:3px solid #e51937;}');

var DesktopMenu = function (_PureComponent) {
  _inherits(DesktopMenu, _PureComponent);

  function DesktopMenu() {
    _classCallCheck(this, DesktopMenu);

    var _this = _possibleConstructorReturn(this, (DesktopMenu.__proto__ || Object.getPrototypeOf(DesktopMenu)).call(this));

    _this.state = {
      affix: false
    };
    return _this;
  }

  _createClass(DesktopMenu, [{
    key: 'render',
    value: function render() {
      // const { className } = this.props;
      return _react2.default.createElement(
        StyledAffix,
        null,
        _react2.default.createElement(
          _AffixWrapper2.default,
          { offset: 80 },
          _react2.default.createElement(
            StyledNav,
            null,
            _react2.default.createElement(
              _emotion.Flex,
              { alignItems: 'center' },
              _react2.default.createElement(
                _emotion.Box,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { exact: true, to: '/' },
                  _react2.default.createElement('img', {
                    className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('width:120px;padding-left:10px;'),
                    src: _logo2.default
                  })
                )
              ),
              _react2.default.createElement(
                _emotion.Box,
                { ml: 'auto' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactStatic.Link,
                      { to: '/', className: StyledLink },
                      'Home'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactStatic.Link,
                      { to: '/for-your-company', className: StyledLink },
                      'For Your Company'
                    ),
                    _react2.default.createElement(
                      'ul',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          _reactStatic.Link,
                          { to: '/for-your-company/winslow-behavioral-assessment', className: StyledLink },
                          'Winslow Behavioral Assessment'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactStatic.Link,
                      { to: '/for-you', className: StyledLink },
                      'For You'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactStatic.Link,
                      { to: '/how-it-works', className: StyledLink },
                      'How It Works'
                    ),
                    _react2.default.createElement(
                      'ul',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          _reactStatic.Link,
                          { to: '/the-winslow-internet-assessment-system', className: StyledLink },
                          'The Winslow Internet Assessment Aystem'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactStatic.Link,
                      { to: '/testimonials', className: StyledLink },
                      'Testimonials'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#', style: { cursor: 'default' }, className: StyledLink },
                      'Client Login'
                    ),
                    _react2.default.createElement(
                      'ul',
                      { style: { left: '-124px', right: '5px' } },
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          {
                            href: 'http://winslowprofilesandreports.com/login-for-clients.html?reseller=6525-0&CONSULTANT_ID=6525-0',
                            className: StyledLink
                          },
                          'Winslow Login'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          {
                            href: 'http://winslowprofilesandreports.com/take-a-winslow-profile.html',
                            className: StyledLink
                          },
                          'Take a Winslow Assessment'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: 'http://winslowprofilesandreports.com/access-your-report.html', className: StyledLink },
                          'Winslow Profile Reports'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return DesktopMenu;
}(_react.PureComponent);

exports.default = DesktopMenu;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Affix = function (_Component) {
  _inherits(Affix, _Component);

  function Affix() {
    _classCallCheck(this, Affix);

    var _this = _possibleConstructorReturn(this, (Affix.__proto__ || Object.getPrototypeOf(Affix)).call(this));

    _this.handleScroll = function () {
      var affix = _this.state.affix;
      var offset = _this.props.offset;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (!affix && scrollTop >= offset) {
        _this.setState({
          affix: true
        });
      }

      if (affix && scrollTop < offset) {
        _this.setState({
          affix: false
        });
      }
    };

    _this.state = {
      affix: false
    };
    return _this;
  }

  _createClass(Affix, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var affix = this.state.affix ? 'affix' : '';

      var _props = this.props,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['className']);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: (className || '') + ' ' + affix }),
        this.props.children
      );
    }
  }]);

  return Affix;
}(_react.Component);

Affix.propTypes = {
  offset: _propTypes2.default.number,
  setAffix: _propTypes2.default.func
};
Affix.defaultProps = {
  offset: 0
};
exports.default = Affix;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _emotion = __webpack_require__(2);

var _logo = __webpack_require__(7);

var _logo2 = _interopRequireDefault(_logo);

var _roundMenu24px = __webpack_require__(73);

var _roundMenu24px2 = _interopRequireDefault(_roundMenu24px);

var _BackDrop = __webpack_require__(74);

var _BackDrop2 = _interopRequireDefault(_BackDrop);

var _reactSvgInline = __webpack_require__(4);

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledNav = /*#__PURE__*/(0, _reactEmotion2.default)('nav', {
  target: 'ezjnrxb0'
})('width:100%;ul{list-style:none;position:relative;padding-left:0px;}ul li{position:relative;margin:0;padding:0px;border-top:1px solid #ccc;}ul ul a{padding-left:20px;}a{color:black;font-size:0.9rem;display:block;text-decoration:none;padding:10px;}');
var submenu = /*#__PURE__*/(0, _reactEmotion.css)('padding-left:20px;li{border-top:1px solid #ccc !important;}a{padding-left:30px;}');

var mmenu = /*#__PURE__*/(0, _reactEmotion.css)('border-top:0px;list-style:none;position:relative;li:first-child{border-top:0px;}');

var iconStyle = /*#__PURE__*/(0, _reactEmotion.css)('svg{fill:#003468;height:30px;width:30px;}');
var SideBar = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'ezjnrxb1'
})(function (props) {
  return {
    backgroundColor: 'linen',
    width: props.open ? '40%' : '0px',
    maxWidth: '90%',
    position: 'fixed',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 100,
    transition: '0.5s',
    overflowY: 'auto',
    ul: {
      visibility: props.open ? 'visible' : 'hidden',
      opacity: props.open ? 1 : 0,
      transition: '0.3s'
    }
  };
});

var MobileMenu = function (_PureComponent) {
  _inherits(MobileMenu, _PureComponent);

  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    var _this = _possibleConstructorReturn(this, (MobileMenu.__proto__ || Object.getPrototypeOf(MobileMenu)).call(this));

    _this.state = {
      sidebarOpen: false
    };
    _this.onSetSidebarOpen = _this.onSetSidebarOpen.bind(_this);
    return _this;
  }

  _createClass(MobileMenu, [{
    key: 'onSetSidebarOpen',
    value: function onSetSidebarOpen() {
      this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var mobileMenu = _react2.default.createElement(
        StyledNav,
        null,
        _react2.default.createElement(
          'ul',
          { className: mmenu },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/' },
              'Home'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/for-your-company' },
              'For Your Company'
            ),
            _react2.default.createElement(
              'ul',
              { className: submenu },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/for-your-company/winslow-behavioral-assessment' },
                  'Winslow Behavioral Assessment'
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/for-you' },
              'For You'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/how-it-works' },
              'How It Works'
            ),
            _react2.default.createElement(
              'ul',
              { className: submenu },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/the-winslow-internet-assessment-system' },
                  'The Winslow Internet Assessment Aystem'
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/testimonials' },
              'Testimonials'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#', style: { cursor: 'default' } },
              'Client Login'
            ),
            _react2.default.createElement(
              'ul',
              { className: submenu },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://winslowprofilesandreports.com/login-for-clients.html?reseller=6525-0&CONSULTANT_ID=6525-0' },
                  'Winslow Login'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://winslowprofilesandreports.com/take-a-winslow-profile.html' },
                  'Take a Winslow Assessment'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://winslowprofilesandreports.com/access-your-report.html' },
                  'Winslow Profile Reports'
                )
              )
            )
          )
        )
      );
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_BackDrop2.default, { clicked: this.onSetSidebarOpen, show: this.state.sidebarOpen }),
        _react2.default.createElement(
          SideBar,
          { open: this.state.sidebarOpen, onClick: this.onSetSidebarOpen },
          mobileMenu
        ),
        _react2.default.createElement(
          _emotion.Flex,
          null,
          _react2.default.createElement(
            _emotion.Box,
            { p: 2 },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/' },
              _react2.default.createElement('img', {
                className: /*#__PURE__*/ /*#__PURE__*/(0, _reactEmotion.css)('width:80px;'),
                src: _logo2.default
              })
            )
          ),
          _react2.default.createElement(
            _emotion.Box,
            { p: 2, ml: 'auto', onClick: this.onSetSidebarOpen },
            _react2.default.createElement(_reactSvgInline2.default, { className: iconStyle, svg: _roundMenu24px2.default })
          )
        )
      );
    }
  }]);

  return MobileMenu;
}(_react.PureComponent);

exports.default = MobileMenu;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 20010904//EN\"\n \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"24px\"\n\t height=\"24px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n<g id=\"Bounding_Boxes\">\n\t<path fill=\"none\" d=\"M0,0h24v24H0V0z\"/>\n</g>\n<g id=\"Rounded\">\n\t<path d=\"M4,18h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,17.55,3.45,18,4,18z M4,13h16c0.55,0,1-0.45,1-1\n\t\tv0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,12.55,3.45,13,4,13z M3,7L3,7c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1v0\n\t\tc0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z\"/>\n</g>\n</svg>\n"

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var backdrop = function backdrop(props) {
  return props.show ? _react2.default.createElement('div', {
    style: {
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: 99,
      left: 0,
      top: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    onClick: props.clicked
  }) : null;
};

exports.default = backdrop;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("react-window-size");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-up-button");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("typeface-montserrat");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.bf53acbe.js.map