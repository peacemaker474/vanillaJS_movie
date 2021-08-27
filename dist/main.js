/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://vanillaJS_movie/./src/css/main.css?");

/***/ }),

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAPI\": () => (/* binding */ getAPI)\n/* harmony export */ });\nconst API_KEY = \"a9dc1bd31af50bb46c99983404356308\";\r\n\r\nconst api = axios.create({\r\n    baseURL: \"https://api.themoviedb.org/3/\",\r\n    params: {\r\n        api_key: API_KEY,\r\n        language: \"ko-KR\"\r\n    }\r\n});\r\n\r\nconst getAPI = {\r\n    upcoming: () => api.get(\"movie/upcoming\"),\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://vanillaJS_movie/./src/api/api.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.js\");\n\r\n\r\nconst body = document.body;\r\nconst { navList } = _store_store__WEBPACK_IMPORTED_MODULE_0__.default;\r\n\r\nconst createElementTag = () => {\r\n    const header = document.createElement(\"header\");\r\n    const nav = document.createElement(\"nav\");\r\n    const ul = document.createElement(\"ul\");\r\n    const li = document.createElement(\"li\");\r\n    const logoBox = document.createElement(\"div\");\r\n\r\n    navList.map(item => {\r\n        const li = document.createElement(\"li\");\r\n        const a = document.createElement(\"a\");\r\n        a.textContent = item.ko;\r\n        a.href = `\"./${item.ko}\"`;\r\n        li.className = `main-nav__list main-nav__${item.en}`;\r\n        li.append(a);\r\n        ul.append(li);\r\n    });\r\n\r\n    nav.className = `main_nav`;\r\n    ul.className = `main-nav__lists`;\r\n    li.className = `main-nav__main-logo`;\r\n    logoBox.className = `main-logo__container`;\r\n\r\n    li.prepend(logoBox);\r\n    ul.prepend(li);\r\n    nav.append(ul);\r\n    header.append(nav);\r\n    body.append(header);\r\n\r\n}\r\n\r\nconst render = () => {\r\n    createElementTag();\r\n    const header = document.querySelector(\"header\");\r\n    const mainNav = document.querySelector(\".main_nav\");\r\n\r\n    console.log(header, mainNav);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://vanillaJS_movie/./src/components/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api.js */ \"./src/api/api.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n\r\n\r\n\r\n\r\n(0,_components_header__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n\r\nconsole.log(_api_api_js__WEBPACK_IMPORTED_MODULE_0__.getAPI.upcoming());\n\n//# sourceURL=webpack://vanillaJS_movie/./src/index.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerList = {\r\n    navList: [\r\n        {\r\n            ko: \"영화\",\r\n            en: \"movie\"\r\n        },\r\n        {\r\n            ko: \"TV 프로그램\",\r\n            en: \"TV-show\"\r\n        },\r\n        {\r\n            ko: \"개발중\",\r\n            en: \"develop-ing\"\r\n        }\r\n    ],\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerList);\n\n//# sourceURL=webpack://vanillaJS_movie/./src/store/store.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;