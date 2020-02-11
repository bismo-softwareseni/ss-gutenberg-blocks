/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/customblock1/index.js":
/*!******************************************!*\
  !*** ./src/blocks/customblock1/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Internationalization 
 */
var __ = wp.i18n.__;
/**
 * Register block
 */

var registerBlockType = wp.blocks.registerBlockType;
/**
 * React var
 */

var el = wp.element.createElement;
registerBlockType('ss-gutenberg-blocks/customblock1', {
  title: __('Custom Bluock 1', 'ss-gutenberg-blocks'),
  description: __('Custom Gutenberg block for learning purposes.', 'ss-gutenberg-blocks'),
  category: 'layout',
  keywords: [__('Grid', 'ss-gutenberg-blocks'), __('Image', 'ss-gutenberg-blocks')],
  icon: {
    background: 'blue',
    foreground: 'red',
    src: 'image-filter'
  },
  edit: function edit() {
    return el('div', {
      'id': 'text-wrapper',
      'style': {
        'background': 'red',
        'color': 'white'
      }
    }, 'Editor View');
  },
  save: function save() {
    return el('div', {
      'id': 'text-wrapper',
      'style': {
        'background': 'red',
        'color': 'white'
      }
    }, 'Saved Content');
  }
});

/***/ }),

/***/ "./src/blocks/customblock2/index.js":
/*!******************************************!*\
  !*** ./src/blocks/customblock2/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/blocks/customblock2/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress_multisite\\wp-content\\plugins\\ss-gutenberg-blocks\\src\\blocks\\customblock2\\index.js";

/**
 * Import styling
 */

/**
 * Internationalization 
 */

var __ = wp.i18n.__;
/**
 * Register block
 */

var registerBlockType = wp.blocks.registerBlockType;
/**
 * React var
 */

var el = wp.element.createElement;
registerBlockType('ss-gutenberg-blocks/customblock2', {
  title: __('Custom Block 2', 'ss-gutenberg-blocks'),
  description: __('Custom Gutenberg block for learning purposes.', 'ss-gutenberg-blocks'),
  category: 'layout',
  keywords: [__('Grid', 'ss-gutenberg-blocks'), __('Image', 'ss-gutenberg-blocks')],
  icon: {
    background: 'red',
    foreground: 'blue',
    src: wp.element.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, wp.element.createElement("path", {
      d: "M24 0H0v24h24z",
      fill: "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }), wp.element.createElement("path", {
      d: "M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }))
  },
  edit: function edit(props) {
    return wp.element.createElement("div", {
      className: props.className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Editor 2");
  },
  save: function save() {
    return wp.element.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Saved 2");
  }
});

/***/ }),

/***/ "./src/blocks/customblock2/style.editor.scss":
/*!***************************************************!*\
  !*** ./src/blocks/customblock2/style.editor.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_customblock1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/customblock1 */ "./src/blocks/customblock1/index.js");
/* harmony import */ var _blocks_customblock1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_customblock1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_customblock2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/customblock2 */ "./src/blocks/customblock2/index.js");



/***/ })

/******/ });
//# sourceMappingURL=editor.js.map