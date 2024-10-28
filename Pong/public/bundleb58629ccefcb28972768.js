/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
    color: white;
    font-family: 'Press Start 2P', system-ui;
    font-weight: 400;
    font-style: normal;  
    user-select: none;
}

body {
    overflow: hidden;
}

#game-canvas {
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    z-index: -1;
}

main {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    width: 100vw;
    height: 100vh;
    z-index: 0;
}

#main-section {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 5fr 20fr 1fr;
}

#main-section header {
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 10rem;
}

#button-section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 80%;
}

#button-section button {
    top: -100px;
    background-color: transparent;
    border: 5px solid white;
    padding: 30px 20px;
    color: white;
    font-size: 3rem;
    transition: background-color 0.3s, color 0.3s;
}

#button-section button:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
    cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,eAAe;IACf,YAAY;IACZ,wCAAwC;IACxC,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,oCAAoC;IACpC,2BAA2B;IAC3B,YAAY;IACZ,aAAa;IACb,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,6BAA6B;IAC7B,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,6CAA6C;AACjD;;AAEA;IACI,0CAA0C;IAC1C,YAAY;IACZ,eAAe;AACnB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-size: 10px;\r\n    color: white;\r\n    font-family: 'Press Start 2P', system-ui;\r\n    font-weight: 400;\r\n    font-style: normal;  \r\n    user-select: none;\r\n}\r\n\r\nbody {\r\n    overflow: hidden;\r\n}\r\n\r\n#game-canvas {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: black;\r\n    z-index: -1;\r\n}\r\n\r\nmain {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    backdrop-filter: blur(10px);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 0;\r\n}\r\n\r\n#main-section {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows: 5fr 20fr 1fr;\r\n}\r\n\r\n#main-section header {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nh1 {\r\n    font-size: 10rem;\r\n}\r\n\r\n#button-section {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    height: 80%;\r\n}\r\n\r\n#button-section button {\r\n    top: -100px;\r\n    background-color: transparent;\r\n    border: 5px solid white;\r\n    padding: 30px 20px;\r\n    color: white;\r\n    font-size: 3rem;\r\n    transition: background-color 0.3s, color 0.3s;\r\n}\r\n\r\n#button-section button:hover {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    color: black;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/setting.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/setting.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
#setting-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    color: white;
    z-index: 1000;
    background-color: transparent;
    border: none;
    transition: transform 0.3s;
    box-sizing: border-box;
}

#setting-button:hover {
    transform: rotate(90deg);
    cursor: pointer;
}

footer {
    display: flex;
    justify-content: center;
    align-items: center;
}

#setting-icon {
    font-size: 4rem;
}

#setting-section {
    width: 80%;
    height: 80%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-rows: 1fr 5fr;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    border: 5px solid white;
}

#setting-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid white;
    margin: 0 20px;
}

#setting-title {
    font-size: 4rem;
}

#setting-section h2 {
    font-size: 3rem;
}

#setting-content {
    display: grid;
    grid-template-rows: 2fr 3fr;
    gap: 20px;
    padding: 20px;
}

#difficulty-section header,
#color-section header,
#obstacle-section header {
    display: flex;
    align-items: center;
}

#difficulty-section {
    display: grid;
    grid-template-rows: 1fr 5fr;
    border-bottom: 3px solid white;
}

#difficulty-option {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.difficulty-button {
    background-color: transparent;
    border: 5px solid white;
    padding: 20px 10px;
    color: white;
    font-size: 2rem;
    transition: background-color 0.3s, color 0.3s;
}

#easy-button:hover, .easy-enabled {
    background-color: rgba(0, 255, 72, 0.8);
    color: black;
    cursor: pointer;
}

#medium-button:hover, .medium-enabled {
    background-color: rgba(255, 255, 0, 0.8);
    color: black;
    cursor: pointer;
}

#hard-button:hover, .hard-enabled {
    background-color: rgba(255, 0, 0, 0.8);
    color: black;
    cursor: pointer;
}

#other-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

#color-section,
#obstacle-section {
    display: grid;
    grid-template-rows: 1fr 5fr;
}

#color-section {
    border-right: 3px solid white;
}

#color-section header,
#obstacle-section header {
    display: flex;
    align-items: center;
    justify-content: center;
}

#color-option-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

#color-option-container button {
    width: 50%;
    background-color: transparent;
    border: 5px solid white;
    padding: 20px 10px;
    color: white;
    font-size: 2rem;
    transition: background-color 0.3s, color 0.3s;
}

#color-option-container #red-option:hover, .red-enabled {
    background-color: red;
    color: black;
    cursor: pointer;
}

#color-option-container #green-option:hover, .blue-enabled {
    background-color: green;
    color: black;
    cursor: pointer;
}

#color-option-container #blue-option:hover, .green-enabled {
    background-color: blue;
    color: black;
    cursor: pointer;
}



#obstacle-option-container {
    display: grid;
    grid-template-rows: 3fr 2fr;
}

#obstacle-presence-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

#obstacle-presence-section button {
    width: 30%;
    background-color: transparent;
    border: 5px solid white;
    padding: 20px 10px;
    color: white;
    font-size: 2rem;
    transition: background-color 0.3s, color 0.3s;
}

#obstacle-presence-section #obstacle-on-button:hover {
    background-color: rgba(0, 255, 72, 0.8);
    color: black;
    cursor: pointer;
}

#obstacle-presence-section #obstacle-off-button:hover {
    background-color: rgba(255, 0, 0, 0.8);
    color: black;
    cursor: pointer;
}

#obstacle-quantity-section {
    position: relative;
    width: 80%;
    margin: auto;
}

#obstacle-quantity-section div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#obstacle-quantity-section label, #obstacle-quantity-section span {
    font-size: 2rem;
    padding-bottom: 10px;
}

#obstacle-quantity-input {
    width: 100%;
}

.active {
    background-color: white;
    color: black;
}`, "",{"version":3,"sources":["webpack://./src/styles/setting.css"],"names":[],"mappings":";AACA;IACI,eAAe;IACf,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,YAAY;IACZ,0BAA0B;IAC1B,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,aAAa;IACb,2BAA2B;IAC3B,aAAa;IACb,oCAAoC;IACpC,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,SAAS;IACT,aAAa;AACjB;;AAEA;;;IAGI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;IAC7B,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,6CAA6C;AACjD;;AAEA;IACI,uCAAuC;IACvC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,wCAAwC;IACxC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;IAEI,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,6BAA6B;IAC7B,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,6CAA6C;AACjD;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,eAAe;AACnB;;;;AAIA;IACI,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,6BAA6B;IAC7B,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,6CAA6C;AACjD;;AAEA;IACI,uCAAuC;IACvC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB","sourcesContent":["\r\n#setting-button {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    left: 20px;\r\n    color: white;\r\n    z-index: 1000;\r\n    background-color: transparent;\r\n    border: none;\r\n    transition: transform 0.3s;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#setting-button:hover {\r\n    transform: rotate(90deg);\r\n    cursor: pointer;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#setting-icon {\r\n    font-size: 4rem;\r\n}\r\n\r\n#setting-section {\r\n    width: 80%;\r\n    height: 80%;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    display: grid;\r\n    grid-template-rows: 1fr 5fr;\r\n    z-index: 1000;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    backdrop-filter: blur(10px);\r\n    border: 5px solid white;\r\n}\r\n\r\n#setting-header {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-bottom: 3px solid white;\r\n    margin: 0 20px;\r\n}\r\n\r\n#setting-title {\r\n    font-size: 4rem;\r\n}\r\n\r\n#setting-section h2 {\r\n    font-size: 3rem;\r\n}\r\n\r\n#setting-content {\r\n    display: grid;\r\n    grid-template-rows: 2fr 3fr;\r\n    gap: 20px;\r\n    padding: 20px;\r\n}\r\n\r\n#difficulty-section header,\r\n#color-section header,\r\n#obstacle-section header {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#difficulty-section {\r\n    display: grid;\r\n    grid-template-rows: 1fr 5fr;\r\n    border-bottom: 3px solid white;\r\n}\r\n\r\n#difficulty-option {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n.difficulty-button {\r\n    background-color: transparent;\r\n    border: 5px solid white;\r\n    padding: 20px 10px;\r\n    color: white;\r\n    font-size: 2rem;\r\n    transition: background-color 0.3s, color 0.3s;\r\n}\r\n\r\n#easy-button:hover, .easy-enabled {\r\n    background-color: rgba(0, 255, 72, 0.8);\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n#medium-button:hover, .medium-enabled {\r\n    background-color: rgba(255, 255, 0, 0.8);\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n#hard-button:hover, .hard-enabled {\r\n    background-color: rgba(255, 0, 0, 0.8);\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n#other-section {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n#color-section,\r\n#obstacle-section {\r\n    display: grid;\r\n    grid-template-rows: 1fr 5fr;\r\n}\r\n\r\n#color-section {\r\n    border-right: 3px solid white;\r\n}\r\n\r\n#color-section header,\r\n#obstacle-section header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#color-option-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n#color-option-container button {\r\n    width: 50%;\r\n    background-color: transparent;\r\n    border: 5px solid white;\r\n    padding: 20px 10px;\r\n    color: white;\r\n    font-size: 2rem;\r\n    transition: background-color 0.3s, color 0.3s;\r\n}\r\n\r\n#color-option-container #red-option:hover, .red-enabled {\r\n    background-color: red;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n#color-option-container #green-option:hover, .blue-enabled {\r\n    background-color: green;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n#color-option-container #blue-option:hover, .green-enabled {\r\n    background-color: blue;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n#obstacle-option-container {\r\n    display: grid;\r\n    grid-template-rows: 3fr 2fr;\r\n}\r\n\r\n#obstacle-presence-section {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n#obstacle-presence-section button {\r\n    width: 30%;\r\n    background-color: transparent;\r\n    border: 5px solid white;\r\n    padding: 20px 10px;\r\n    color: white;\r\n    font-size: 2rem;\r\n    transition: background-color 0.3s, color 0.3s;\r\n}\r\n\r\n#obstacle-presence-section #obstacle-on-button:hover {\r\n    background-color: rgba(0, 255, 72, 0.8);\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n#obstacle-presence-section #obstacle-off-button:hover {\r\n    background-color: rgba(255, 0, 0, 0.8);\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n#obstacle-quantity-section {\r\n    position: relative;\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n\r\n#obstacle-quantity-section div {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n#obstacle-quantity-section label, #obstacle-quantity-section span {\r\n    font-size: 2rem;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n#obstacle-quantity-input {\r\n    width: 100%;\r\n}\r\n\r\n.active {\r\n    background-color: white;\r\n    color: black;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/setting.css":
/*!********************************!*\
  !*** ./src/styles/setting.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./setting.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/setting.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/setting.js":
/*!***************************!*\
  !*** ./src/js/setting.js ***!
  \***************************/
/***/ (() => {

const defaultSettings = {
    difficulty: 'medium',
    color: 'red',
    obstacle: 'on',
    obstacleNumber: 5,
};

const easyButton = document.getElementById('easy-button');
const mediumButton = document.getElementById('medium-button');
const hardButton = document.getElementById('hard-button');

const difficultyButtons = {
    easy: document.getElementById('easy-button'),
    medium: document.getElementById('medium-button'),
    hard: document.getElementById('hard-button'),
}

function setDefaultSettings() {
    console.log('setting default settings');
    localStorage.setItem('pongSettings', JSON.stringify(defaultSettings));
    loadSettings();
}

function enableDifficulty(difficulty) {
    for (const key in difficultyButtons) {
        difficultyButtons[key].classList.toggle(`${key}-enabled`, key === difficulty);
    }
}

function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('pongSettings'));
    console.log('loading settings', settings);
    enableDifficulty(settings.difficulty);
}

window.onload = () => {
    localStorage.getItem('pongSettings') ? loadSettings() : setDefaultSettings();
}



/***/ }),

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ball: () => (/* binding */ Ball),
/* harmony export */   Obstacle: () => (/* binding */ Obstacle),
/* harmony export */   Paddle: () => (/* binding */ Paddle),
/* harmony export */   clearCanvas: () => (/* binding */ clearCanvas),
/* harmony export */   getDistance: () => (/* binding */ getDistance),
/* harmony export */   getRandomIntegerFromRange: () => (/* binding */ getRandomIntegerFromRange)
/* harmony export */ });
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

class Ball {
    constructor(x, y, radius, dx = 0, dy = 0) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = 'white';
        this.dx = dx;
        this.dy = dy;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // Update ball position
    update(playerPaddle, aiPaddle, obstacles) {
        // Check if the ball is colliding with the top or bottom of the canvas
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy *= -1; // Reverse direction
        }

        // Check if the ball is colliding with a paddle
        if (checkCollision(this, playerPaddle) || checkCollision(this, aiPaddle)) {
            this.dx *= -1; // Reverse direction
        }

        // Check if the ball is colliding with an obstacle
        for (const obstacle of obstacles) {
            if (getDistance(this, obstacle) < this.radius + obstacle.radius) {
                resolveObstacleCollision(this, obstacle);
            }
        }

        // Change ball position and draw
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

function checkCollision(ball, paddle) {
    const withinVerticalBounds = ball.y > paddle.y && ball.y < paddle.y + paddle.height;
    const horizontalCollision = ball.x + ball.radius > paddle.x && ball.x - ball.radius < paddle.x + paddle.width;

    return withinVerticalBounds && horizontalCollision;
}

function resolveObstacleCollision(ball, obstacle) {
    // Calculate velocity differences and position differences
    const xVelocityDiff = ball.dx;
    const yVelocityDiff = ball.dy - obstacle.dy;
    const xPositionDiff = obstacle.x - ball.x;
    const yPositionDiff = obstacle.y - ball.y;

    // Check if the ball is moving towards the obstacle
    if (xVelocityDiff * xPositionDiff + yVelocityDiff * yPositionDiff >= 0) {
        // Calculate angle between the ball and obstacle
        const angle = Math.atan2((obstacle.y - ball.y), (obstacle.x - ball.x));

        // Velocity before collision
        const u1 = rotateVector(ball, -angle);

        // Solve collision (ball bounce off the obstacle with the same speed)
        const v1 = { dx: -u1.dx, dy: u1.dy };

        // Velocity after collision
        const finalV1 = rotateVector(v1, angle);

        // Update ball velocity
        ball.dx = finalV1.dx;
        ball.dy = finalV1.dy;
    }
}

// Rotate Vector function
function rotateVector(object, angle) {
    return {
        dx: (Math.cos(angle) * object.dx) - (Math.sin(angle) * object.dy),
        dy: (Math.sin(angle) * object.dx) + (Math.cos(angle) * object.dy)
    }
}

// Get distance function
function getDistance(object1, object2) {
    const dx = object2.x - object1.x;
    const dy = object2.y - object1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

class Paddle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = 'white';
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update(value) {
        this.y += value;   
        this.draw();
    }
}

class Obstacle {
    constructor(x, y, radius, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = 'white';
        this.dy = dy;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy *= -1;
        }
        this.y += this.dy;
        this.draw();
    }
}

function clearCanvas() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

function getRandomIntegerFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_setting_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/setting.css */ "./src/styles/setting.css");
/* harmony import */ var _setting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.js */ "./src/js/setting.js");
/* harmony import */ var _setting_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_setting_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.js */ "./src/js/utility.js");





const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Initialize canvas size
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();

// Game variables
let playerPaddle, aiPaddle, ball;
let points = { player: 0, ai: 0 };
let playerInput = { up: false, down: false };

// Player input event listeners
window.addEventListener('keydown', (event) => {
    if (event.key === 'w') playerInput.up = true;
    else if (event.key === 's') playerInput.down = true;
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'w') playerInput.up = false;
    else if (event.key === 's') playerInput.down = false;
});

// Paddle updates
function updateUserPaddle(targetPaddle) { // Player paddle
    let paddleDy = 0;
    const velocity = 10;

    if (playerInput.up && targetPaddle.y > 0) paddleDy = -velocity;
    else if (playerInput.down && targetPaddle.y + targetPaddle.height < canvas.height) paddleDy = velocity;

    targetPaddle.update(paddleDy);
}

function updateAiPaddle() { // AI paddle
    let paddleDy = 0;

    if (aiPaddle.y + aiPaddle.height / 2 < ball.y && aiPaddle.y + aiPaddle.height < canvas.height) {
        paddleDy = 7;
    } else if (aiPaddle.y + aiPaddle.height / 2 > ball.y && aiPaddle.y > 0) {
        paddleDy = -7;
    }

    aiPaddle.update(paddleDy);
}

// Ball and game state management
function checkGoal() {
    if (ball.x < 0) {
        // console.log('AI scores: ' + points.ai);
        restartRound(false);
    } else if (ball.x > canvas.width) {
        // console.log('Player scores: ' + points.player);
        restartRound(true);
    }
}

function restartRound(playerWin) {
    if (playerWin) points.player++;
    else points.ai++;

    setBall();
}

// Set ball properties
function setBall() {
    const ballRadius = 20;
    let ballDx, ballDy;

    do {
        ballDx = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.getRandomIntegerFromRange)(-15, 15);
    } while (Math.abs(ballDx) < 10);
    
    do {
        ballDy = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.getRandomIntegerFromRange)(-10, 10);
    } while (Math.abs(ballDy) < 5);

    ball = new _utility_js__WEBPACK_IMPORTED_MODULE_3__.Ball(window.innerWidth / 2, window.innerHeight / 2, ballRadius, ballDx, ballDy);
}

// Set paddle properties
function setPaddle() {
    const paddleWidth = 30;
    const paddleHeight = 150;
    const playerX = 20;
    const aiX = window.innerWidth - paddleWidth - 20;
    const y = window.innerHeight / 2 - paddleHeight / 2;

    playerPaddle = new _utility_js__WEBPACK_IMPORTED_MODULE_3__.Paddle(playerX, y, paddleWidth, paddleHeight);
    aiPaddle = new _utility_js__WEBPACK_IMPORTED_MODULE_3__.Paddle(aiX, y, paddleWidth, paddleHeight);
}

// Obstacle
let obstacles = [];
function setObstacle() {
    obstacles = [];
    const obstacleRadius = 30;
    const canvasPadding = 200;
    const maxObstacles = 5;

    while (obstacles.length < maxObstacles) {
        let x = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.getRandomIntegerFromRange)(obstacleRadius + canvasPadding, canvas.width - obstacleRadius - canvasPadding);
        let y = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.getRandomIntegerFromRange)(obstacleRadius + canvasPadding, canvas.height - obstacleRadius - canvasPadding);
        let dy = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.getRandomIntegerFromRange)(-3, 3);

        const isOverlapping = obstacles.some(obstacle => (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.getDistance)({ x, y }, obstacle) < obstacleRadius * 2);
        const dyIsZero = dy === 0;
        if (!isOverlapping && !dyIsZero) {
            obstacles.push(new _utility_js__WEBPACK_IMPORTED_MODULE_3__.Obstacle(x, y, obstacleRadius, dy));
        }
    }
}

// Game loop
function animate() {
    requestAnimationFrame(animate);
    (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.clearCanvas)();
    updateUserPaddle(playerPaddle);
    updateAiPaddle();
    ball.update(playerPaddle, aiPaddle, obstacles);
    obstacles.forEach(obstacle => obstacle.update());
    checkGoal();
}

// Initialize game
function startGame() {
    setCanvasSize();
    setPaddle();
    setBall();
    setObstacle();
}

// Event listeners
window.onload = () => { // Start game when window is loaded
    startGame();
    animate();
};

window.addEventListener('resize', () => { // Resize canvas when window is resized
    setCanvasSize();
    startGame();
});

})();

/******/ })()
;
//# sourceMappingURL=bundleb58629ccefcb28972768.js.map