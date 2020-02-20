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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/style.css":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/style.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#modalWindow {\n  width: 100%;\n  height: 100%;\n  display: none;\n  position: fixed;\n  z-index: 1;\n  overflow: auto;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8); }\n\n#modalWrapper {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  width: 30%;\n  background-color: white;\n  border: 2px solid #838282;\n  border-radius: 5px; }\n\n#openModalBtn {\n  width: 100px;\n  height: 20px;\n  position: absolute;\n  cursor: pointer;\n  margin-left: 40px;\n  border-radius: 5px; }\n\n#modalClose {\n  cursor: pointer;\n  position: absolute;\n  right: 5px;\n  top: 2px;\n  width: 15px;\n  height: 15px;\n  opacity: 0.3; }\n\n#modalClose:before, #modalClose:after {\n  position: absolute;\n  left: 7px;\n  content: '';\n  height: 15px;\n  width: 2px;\n  background-color: #333; }\n\n#modalClose:before {\n  transform: rotate(45deg); }\n\n#modalClose:after {\n  transform: rotate(-45deg); }\n\n#modalClose:hover {\n  transform: scale(1.1); }\n\n#modalBtnAdd {\n  border: none;\n  color: #6d6d6d;\n  margin-left: 25px;\n  margin-right: 25px;\n  width: 50px;\n  background-color: rgba(131, 130, 130, 0.199);\n  border: solid 1px rgba(255, 255, 255, 0.541);\n  cursor: pointer;\n  outline: none; }\n\n#modalBtnAdd:hover {\n  background-color: #d6d6d6; }\n\n#modalBtnAdd:active {\n  background-color: rgba(221, 220, 220, 0.692); }\n\n#modalInputText {\n  border: none;\n  height: 20px;\n  width: 180px;\n  outline: none;\n  text-align: center; }\n\n#table {\n  padding-top: 25px; }\n\n#table li {\n  display: flex;\n  align-items: center; }\n\n#table i {\n  color: #575757;\n  width: 20px;\n  height: 20px;\n  font-size: 14px;\n  margin-left: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n#changeWindow {\n  width: 240px;\n  height: 25px;\n  margin-left: 5px;\n  margin-top: 3px;\n  margin-bottom: 3px;\n  border: 1px solid #8f8f8f;\n  border-radius: 4px; }\n\n#changeWindowWrapper {\n  height: 100%;\n  justify-content: space-between;\n  align-items: center; }\n\n#btnsWrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  height: 20px; }\n\n.changeWindowBtns {\n  width: 60px;\n  background-color: rgba(131, 130, 130, 0.199);\n  border: 1px solid rgba(100, 100, 100, 0.507);\n  border-radius: 2px;\n  cursor: pointer;\n  outline: none;\n  color: #6d6d6d; }\n\n.changeWindowBtns:hover {\n  background-color: #d6d6d6; }\n\n.changeWindowBtns:active {\n  background-color: rgba(221, 220, 220, 0.692); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./createHtmlElement.js":
/*!******************************!*\
  !*** ./createHtmlElement.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createHtmlElement; });
function createHtmlElement(objOfAttributes = undefined, tagName) {
    const htmlElement = document.createElement(tagName);
    if (objOfAttributes !== undefined) {
        for (let key in objOfAttributes) {
            htmlElement[key] = objOfAttributes[key];
        }
    }
    return htmlElement;
}

/***/ }),

/***/ "./createList.js":
/*!***********************!*\
  !*** ./createList.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createList; });
/* harmony import */ var _createHtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHtmlElement */ "./createHtmlElement.js");

function createList(objOfAttributes = undefined, arrayOfData) {
    const ul = Object(_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])(objOfAttributes, 'ul');
    let borderId = 0;
    for (let i = 0; i < arrayOfData.length; i++) {
        const li = Object(_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            id: arrayOfData[i].id
        }, 'li');
        const liInnerText = Object(_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            className: 'liInnerText'
        }, 'span');
        if (arrayOfData[i].id > borderId) {
            borderId = arrayOfData[i].id;
        }
        liInnerText.innerText = arrayOfData[i].title;
        li.appendChild(liInnerText);
        ul.appendChild(li);
    }
    sessionStorage.setItem('borderId', borderId);
    return ul;
}

/***/ }),

/***/ "./getListFromUrl.js":
/*!***************************!*\
  !*** ./getListFromUrl.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getListFromUrl; });
async function getListFromUrl(url) {
    const response = await fetch(url);
    return await response.json();
}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHtmlElement.js */ "./createHtmlElement.js");
/* harmony import */ var _getListFromUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getListFromUrl.js */ "./getListFromUrl.js");
/* harmony import */ var _createList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createList.js */ "./createList.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_3__);




//import './libs/Fonts-awesome/css/all.css'

const url = 'https://jsonplaceholder.typicode.com/todos';

(async () => {
    const list = await Object(_getListFromUrl_js__WEBPACK_IMPORTED_MODULE_1__["default"])(url);
    const ul = Object(_createList_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
        id: 'table'
    }, list);
    for (let child of ul.querySelectorAll('li')) {
        const openChangeWindowBtn = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
            className: 'fas fa-ellipsis-h'
        }, 'i');
        child.isOpen = false;
        child.isChanged = false;
        child.appendChild(openChangeWindowBtn);
    }
    document.body.appendChild(ul);

    document.getElementById('table').addEventListener('click', (event) => {
        if (event.target.tagName === 'I') {
            const openChangeWindowBtn = event.target;
            const elemOfTable = openChangeWindowBtn.parentNode;
            if (elemOfTable.isOpen === false) {
                openChangeWindowBtn.style.transform = 'rotate(90deg)';
                const changeWindow = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    id: 'changeWindow'
                }, 'div');
                const changeWindowWrapper = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    id: 'changeWindowWrapper',
                }, 'div')
                const btnSave = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    id: 'saveChangeBtn',
                    className: 'changeWindowBtns',
                    innerText: 'Save',
                    disabled: 'disabled'
                }, 'button');
                const btnChange = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    id: 'changeElemBtn',
                    className: 'changeWindowBtns',
                    innerText: 'Change'
                }, 'button');
                const btnDelete = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    id: 'deleteElemBtn',
                    className: 'changeWindowBtns',
                    innerText: 'Delete'
                }, 'button');
                const changeWindowBtns = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    id: 'btnsWrapper'
                }, 'div');
                elemOfTable.appendChild(changeWindow);
                changeWindow.appendChild(changeWindowWrapper);
                changeWindowWrapper.appendChild(changeWindowBtns);
                changeWindowBtns.appendChild(btnChange);
                changeWindowBtns.appendChild(btnDelete);
                changeWindowBtns.appendChild(btnSave);
                changeWindowWrapper.style.display = 'flex';
                elemOfTable.isOpen = true;
                btnDelete.addEventListener('click', () => {
                    elemOfTable.remove();
                })
                btnChange.addEventListener('click', () => {
                    if (!elemOfTable.isChanged) {
                        btnChange.setAttribute('disabled', 'disabled');
                        btnSave.removeAttribute('disabled');
                        elemOfTable.isChanged = true;
                        const changingText = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                            id: 'changingText',
                            value: elemOfTable.querySelector('span').innerText
                        }, 'input');
                        sessionStorage.setItem('oldText', changingText.value);
                        elemOfTable.querySelector('span').innerText = '';
                        elemOfTable.prepend(changingText);
                    }
                })
                btnSave.addEventListener('click', () => {
                    if (elemOfTable.isChanged) {
                        elemOfTable.querySelector('span').innerText = elemOfTable.querySelector('#changingText').value;
                        sessionStorage.removeItem('oldText');
                        changingText.remove();
                        elemOfTable.isChanged = false;
                        btnSave.setAttribute('disabled', 'disabled');
                        btnChange.removeAttribute('disabled');
                    }
                })
            } else {
                if (elemOfTable.isChanged) {
                    elemOfTable.querySelector('span').innerText = sessionStorage.getItem('oldText');
                    sessionStorage.removeItem('oldText');
                    changingText.remove();
                    elemOfTable.isChanged = false;
                }
                openChangeWindowBtn.nextSibling.remove();
                elemOfTable.isOpen = false;
                openChangeWindowBtn.style.transform = 'rotate(0deg)';
            }
        }
    })
})();

// ----------------Дальше идёт создание модального окошка---------------

const modalWindow = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: 'modalWindow'
}, 'div');
const wrapper = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: 'modalWrapper'
}, 'div');
const inputText = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: 'modalInputText',
    placeholder: 'Enter your string'
}, 'input');
const btnAdd = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: 'modalBtnAdd',
    innerText: 'Add'
}, 'button');
const btnOpenModalWindow = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: 'openModalBtn',
    innerText: 'Add'
}, 'button');
const btnClose = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: 'modalClose'
}, 'span');

document.body.appendChild(btnOpenModalWindow);
document.body.appendChild(modalWindow);
modalWindow.appendChild(wrapper);
wrapper.appendChild(inputText);
wrapper.appendChild(btnAdd);
wrapper.appendChild(btnClose);

btnOpenModalWindow.addEventListener('click', function () {
    modalWindow.style.display = 'flex';
})
btnClose.addEventListener('click', function () {
    modalWindow.style.display = 'none';
    inputText.value = '';
})
btnAdd.addEventListener('click', function () {
    let borderId = Number(sessionStorage.getItem('borderId'));
    if (inputText.value != '') {
        sessionStorage.setItem('borderId', ++borderId);
        const li = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
            id: sessionStorage.getItem('borderId')
        }, 'li');
        const openChangeWindowBtn = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
            className: 'fas fa-ellipsis-h'
        }, 'i');
        const liInnerText = Object(_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
            className: 'liInnerText'
        }, 'span');
        liInnerText.innerText = inputText.value;
        li.isOpen = false;
        li.isChanged = false;
        li.appendChild(liInnerText);
        li.appendChild(openChangeWindowBtn);
        document.getElementById('table').appendChild(li);
        inputText.value = '';
    }
})

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9jcmVhdGVIdG1sRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9jcmVhdGVMaXN0LmpzIiwid2VicGFjazovLy8uL2dldExpc3RGcm9tVXJsLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zdHlsZS5jc3M/MmU3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNtb2RhbFdpbmRvdyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7IH1cXG5cXG4jbW9kYWxXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAzMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MzgyODI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4jb3Blbk1vZGFsQnRuIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuI21vZGFsQ2xvc2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG4gIHRvcDogMnB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBvcGFjaXR5OiAwLjM7IH1cXG5cXG4jbW9kYWxDbG9zZTpiZWZvcmUsICNtb2RhbENsb3NlOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDdweDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IH1cXG5cXG4jbW9kYWxDbG9zZTpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuXFxuI21vZGFsQ2xvc2U6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcblxcbiNtb2RhbENsb3NlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcblxcbiNtb2RhbEJ0bkFkZCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogIzZkNmQ2ZDtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMSwgMTMwLCAxMzAsIDAuMTk5KTtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbiNtb2RhbEJ0bkFkZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2OyB9XFxuXFxuI21vZGFsQnRuQWRkOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjIwLCAyMjAsIDAuNjkyKTsgfVxcblxcbiNtb2RhbElucHV0VGV4dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTgwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuI3RhYmxlIHtcXG4gIHBhZGRpbmctdG9wOiAyNXB4OyB9XFxuXFxuI3RhYmxlIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuI3RhYmxlIGkge1xcbiAgY29sb3I6ICM1NzU3NTc7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuI2NoYW5nZVdpbmRvdyB7XFxuICB3aWR0aDogMjQwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzhmOGY4ZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcblxcbiNjaGFuZ2VXaW5kb3dXcmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4jYnRuc1dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMHB4OyB9XFxuXFxuLmNoYW5nZVdpbmRvd0J0bnMge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMSwgMTMwLCAxMzAsIDAuMTk5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgMC41MDcpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAjNmQ2ZDZkOyB9XFxuXFxuLmNoYW5nZVdpbmRvd0J0bnM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjsgfVxcblxcbi5jaGFuZ2VXaW5kb3dCdG5zOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjIwLCAyMjAsIDAuNjkyKTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIdG1sRWxlbWVudChvYmpPZkF0dHJpYnV0ZXMgPSB1bmRlZmluZWQsIHRhZ05hbWUpIHtcclxuICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIGlmIChvYmpPZkF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvYmpPZkF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgaHRtbEVsZW1lbnRba2V5XSA9IG9iak9mQXR0cmlidXRlc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBodG1sRWxlbWVudDtcclxufSIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuL2NyZWF0ZUh0bWxFbGVtZW50J1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMaXN0KG9iak9mQXR0cmlidXRlcyA9IHVuZGVmaW5lZCwgYXJyYXlPZkRhdGEpIHtcclxuICAgIGNvbnN0IHVsID0gY3JlYXRlSHRtbEVsZW1lbnQob2JqT2ZBdHRyaWJ1dGVzLCAndWwnKTtcclxuICAgIGxldCBib3JkZXJJZCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2ZEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBjcmVhdGVIdG1sRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGlkOiBhcnJheU9mRGF0YVtpXS5pZFxyXG4gICAgICAgIH0sICdsaScpO1xyXG4gICAgICAgIGNvbnN0IGxpSW5uZXJUZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoe1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsaUlubmVyVGV4dCdcclxuICAgICAgICB9LCAnc3BhbicpO1xyXG4gICAgICAgIGlmIChhcnJheU9mRGF0YVtpXS5pZCA+IGJvcmRlcklkKSB7XHJcbiAgICAgICAgICAgIGJvcmRlcklkID0gYXJyYXlPZkRhdGFbaV0uaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpSW5uZXJUZXh0LmlubmVyVGV4dCA9IGFycmF5T2ZEYXRhW2ldLnRpdGxlO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGxpSW5uZXJUZXh0KTtcclxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdib3JkZXJJZCcsIGJvcmRlcklkKTtcclxuICAgIHJldHVybiB1bDtcclxufSIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldExpc3RGcm9tVXJsKHVybCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufSIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuL2NyZWF0ZUh0bWxFbGVtZW50LmpzJ1xyXG5pbXBvcnQgZ2V0TGlzdEZyb21VcmwgZnJvbSAnLi9nZXRMaXN0RnJvbVVybC5qcydcclxuaW1wb3J0IGNyZWF0ZUxpc3QgZnJvbSAnLi9jcmVhdGVMaXN0LmpzJ1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcydcclxuLy9pbXBvcnQgJy4vbGlicy9Gb250cy1hd2Vzb21lL2Nzcy9hbGwuY3NzJ1xyXG5cclxuY29uc3QgdXJsID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcyc7XHJcblxyXG4oYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IGdldExpc3RGcm9tVXJsKHVybCk7XHJcbiAgICBjb25zdCB1bCA9IGNyZWF0ZUxpc3Qoe1xyXG4gICAgICAgIGlkOiAndGFibGUnXHJcbiAgICB9LCBsaXN0KTtcclxuICAgIGZvciAobGV0IGNoaWxkIG9mIHVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykpIHtcclxuICAgICAgICBjb25zdCBvcGVuQ2hhbmdlV2luZG93QnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoe1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmYXMgZmEtZWxsaXBzaXMtaCdcclxuICAgICAgICB9LCAnaScpO1xyXG4gICAgICAgIGNoaWxkLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIGNoaWxkLmlzQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKG9wZW5DaGFuZ2VXaW5kb3dCdG4pO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdJJykge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVuQ2hhbmdlV2luZG93QnRuID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtT2ZUYWJsZSA9IG9wZW5DaGFuZ2VXaW5kb3dCdG4ucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgaWYgKGVsZW1PZlRhYmxlLmlzT3BlbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5DaGFuZ2VXaW5kb3dCdG4uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlV2luZG93ID0gY3JlYXRlSHRtbEVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAnY2hhbmdlV2luZG93J1xyXG4gICAgICAgICAgICAgICAgfSwgJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlV2luZG93V3JhcHBlciA9IGNyZWF0ZUh0bWxFbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2NoYW5nZVdpbmRvd1dyYXBwZXInLFxyXG4gICAgICAgICAgICAgICAgfSwgJ2RpdicpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBidG5TYXZlID0gY3JlYXRlSHRtbEVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc2F2ZUNoYW5nZUJ0bicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2hhbmdlV2luZG93QnRucycsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiAnU2F2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICdkaXNhYmxlZCdcclxuICAgICAgICAgICAgICAgIH0sICdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ0bkNoYW5nZSA9IGNyZWF0ZUh0bWxFbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2NoYW5nZUVsZW1CdG4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NoYW5nZVdpbmRvd0J0bnMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogJ0NoYW5nZSdcclxuICAgICAgICAgICAgICAgIH0sICdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ0bkRlbGV0ZSA9IGNyZWF0ZUh0bWxFbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2RlbGV0ZUVsZW1CdG4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NoYW5nZVdpbmRvd0J0bnMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogJ0RlbGV0ZSdcclxuICAgICAgICAgICAgICAgIH0sICdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZVdpbmRvd0J0bnMgPSBjcmVhdGVIdG1sRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdidG5zV3JhcHBlcidcclxuICAgICAgICAgICAgICAgIH0sICdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1PZlRhYmxlLmFwcGVuZENoaWxkKGNoYW5nZVdpbmRvdyk7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VXaW5kb3cuYXBwZW5kQ2hpbGQoY2hhbmdlV2luZG93V3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VXaW5kb3dXcmFwcGVyLmFwcGVuZENoaWxkKGNoYW5nZVdpbmRvd0J0bnMpO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlV2luZG93QnRucy5hcHBlbmRDaGlsZChidG5DaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlV2luZG93QnRucy5hcHBlbmRDaGlsZChidG5EZWxldGUpO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlV2luZG93QnRucy5hcHBlbmRDaGlsZChidG5TYXZlKTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZVdpbmRvd1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgICAgIGVsZW1PZlRhYmxlLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBidG5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbU9mVGFibGUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnRuQ2hhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbU9mVGFibGUuaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNoYW5nZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blNhdmUucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtT2ZUYWJsZS5pc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2luZ1RleHQgPSBjcmVhdGVIdG1sRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2NoYW5naW5nVGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZWxlbU9mVGFibGUucXVlcnlTZWxlY3Rvcignc3BhbicpLmlubmVyVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnb2xkVGV4dCcsIGNoYW5naW5nVGV4dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1PZlRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbU9mVGFibGUucHJlcGVuZChjaGFuZ2luZ1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBidG5TYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtT2ZUYWJsZS5pc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbU9mVGFibGUucXVlcnlTZWxlY3Rvcignc3BhbicpLmlubmVyVGV4dCA9IGVsZW1PZlRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNjaGFuZ2luZ1RleHQnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnb2xkVGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2luZ1RleHQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1PZlRhYmxlLmlzQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG5TYXZlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuQ2hhbmdlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1PZlRhYmxlLmlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1PZlRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5pbm5lclRleHQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdvbGRUZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnb2xkVGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5naW5nVGV4dC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtT2ZUYWJsZS5pc0NoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9wZW5DaGFuZ2VXaW5kb3dCdG4ubmV4dFNpYmxpbmcucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtT2ZUYWJsZS5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG9wZW5DaGFuZ2VXaW5kb3dCdG4uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KSgpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLdCU0LDQu9GM0YjQtSDQuNC00ZHRgiDRgdC+0LfQtNCw0L3QuNC1INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvtGI0LrQsC0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgbW9kYWxXaW5kb3cgPSBjcmVhdGVIdG1sRWxlbWVudCh7XHJcbiAgICBpZDogJ21vZGFsV2luZG93J1xyXG59LCAnZGl2Jyk7XHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVIdG1sRWxlbWVudCh7XHJcbiAgICBpZDogJ21vZGFsV3JhcHBlcidcclxufSwgJ2RpdicpO1xyXG5jb25zdCBpbnB1dFRleHQgPSBjcmVhdGVIdG1sRWxlbWVudCh7XHJcbiAgICBpZDogJ21vZGFsSW5wdXRUZXh0JyxcclxuICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBzdHJpbmcnXHJcbn0sICdpbnB1dCcpO1xyXG5jb25zdCBidG5BZGQgPSBjcmVhdGVIdG1sRWxlbWVudCh7XHJcbiAgICBpZDogJ21vZGFsQnRuQWRkJyxcclxuICAgIGlubmVyVGV4dDogJ0FkZCdcclxufSwgJ2J1dHRvbicpO1xyXG5jb25zdCBidG5PcGVuTW9kYWxXaW5kb3cgPSBjcmVhdGVIdG1sRWxlbWVudCh7XHJcbiAgICBpZDogJ29wZW5Nb2RhbEJ0bicsXHJcbiAgICBpbm5lclRleHQ6ICdBZGQnXHJcbn0sICdidXR0b24nKTtcclxuY29uc3QgYnRuQ2xvc2UgPSBjcmVhdGVIdG1sRWxlbWVudCh7XHJcbiAgICBpZDogJ21vZGFsQ2xvc2UnXHJcbn0sICdzcGFuJyk7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ0bk9wZW5Nb2RhbFdpbmRvdyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxXaW5kb3cpO1xyXG5tb2RhbFdpbmRvdy5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxud3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dFRleHQpO1xyXG53cmFwcGVyLmFwcGVuZENoaWxkKGJ0bkFkZCk7XHJcbndyYXBwZXIuYXBwZW5kQ2hpbGQoYnRuQ2xvc2UpO1xyXG5cclxuYnRuT3Blbk1vZGFsV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxufSlcclxuYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgaW5wdXRUZXh0LnZhbHVlID0gJyc7XHJcbn0pXHJcbmJ0bkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBib3JkZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdib3JkZXJJZCcpKTtcclxuICAgIGlmIChpbnB1dFRleHQudmFsdWUgIT0gJycpIHtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdib3JkZXJJZCcsICsrYm9yZGVySWQpO1xyXG4gICAgICAgIGNvbnN0IGxpID0gY3JlYXRlSHRtbEVsZW1lbnQoe1xyXG4gICAgICAgICAgICBpZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYm9yZGVySWQnKVxyXG4gICAgICAgIH0sICdsaScpO1xyXG4gICAgICAgIGNvbnN0IG9wZW5DaGFuZ2VXaW5kb3dCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2ZhcyBmYS1lbGxpcHNpcy1oJ1xyXG4gICAgICAgIH0sICdpJyk7XHJcbiAgICAgICAgY29uc3QgbGlJbm5lclRleHQgPSBjcmVhdGVIdG1sRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xpSW5uZXJUZXh0J1xyXG4gICAgICAgIH0sICdzcGFuJyk7XHJcbiAgICAgICAgbGlJbm5lclRleHQuaW5uZXJUZXh0ID0gaW5wdXRUZXh0LnZhbHVlO1xyXG4gICAgICAgIGxpLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIGxpLmlzQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGxpSW5uZXJUZXh0KTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChvcGVuQ2hhbmdlV2luZG93QnRuKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUnKS5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgaW5wdXRUZXh0LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbn0pIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1UUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==