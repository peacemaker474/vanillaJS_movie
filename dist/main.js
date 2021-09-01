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

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://vanillajs_movie/./src/css/main.css?");

/***/ }),

/***/ "./src/js/api/api.js":
/*!***************************!*\
  !*** ./src/js/api/api.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAPI\": () => (/* binding */ getAPI)\n/* harmony export */ });\nconst API_KEY = \"a9dc1bd31af50bb46c99983404356308\";\r\nconst BOX_API = \"766ffd1db8655b81fd4eccd8075e8123\";\r\n\r\nconst getYDate = () => {\r\n    let year = new Date().getFullYear();\r\n    let month = new Date().getMonth() + 1;\r\n    let day = new Date().getDate() - 1;\r\n    month = month < 10 ? `0${month}` : month;\r\n    day = day < 10 ? `0${day}` : day;\r\n\r\n    let yesterday = `${year}${month}${day}`;\r\n\r\n    return yesterday;\r\n}\r\n\r\n\r\nconst api = axios.create({\r\n    baseURL: \"https://api.themoviedb.org/3/\",\r\n    params: {\r\n        api_key: API_KEY,\r\n        language: \"ko-KR\"\r\n    }\r\n});\r\n\r\nconst boxOfficeAPI = axios.create({\r\n    baseURL: \"https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?\",\r\n    params: {\r\n        key: BOX_API,\r\n        targetDt: `${getYDate()}`,\r\n    }\r\n})\r\n\r\n\r\nconst getAPI = {\r\n    upcoming: () => api.get(\"movie/upcoming\"),\r\n    boxOffice: () => boxOfficeAPI.get(),\r\n    searchMain: title => api.get(`search/movie`, {\r\n        params: {\r\n            query: decodeURIComponent(title),\r\n        }\r\n    }),\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://vanillajs_movie/./src/js/api/api.js?");

/***/ }),

/***/ "./src/js/api/getTitle.js":
/*!********************************!*\
  !*** ./src/js/api/getTitle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/js/api/api.js\");\n/* harmony import */ var _components_mainPoster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/mainPoster */ \"./src/js/components/mainPoster.js\");\n\r\n\r\n\r\nconst getEncodeTitle = (mainTitle, query) => {\r\n    const MAX_COUNT = 3;\r\n    query.map(item => {\r\n        if (+item.rank <= MAX_COUNT) {\r\n            let obj = {\r\n                movieNm: encodeURIComponent(item.movieNm),\r\n                openDt: item.openDt,\r\n            };\r\n            mainTitle.queryTitle.push(obj);\r\n        }\r\n    });\r\n}\r\n\r\nconst getMainTitle = async (query) => {\r\n    let mainTitle = {\r\n        loading: true,\r\n        queryTitle: [],\r\n        maindata: [],\r\n    }\r\n\r\n    getEncodeTitle(mainTitle, query);\r\n\r\n    try {\r\n        if (mainTitle.loading === true) {\r\n            for (let i = 0; i < mainTitle.queryTitle.length; i++) {\r\n                let {\r\n                    data: {\r\n                        results: searchTitle\r\n                    }\r\n                } = await _api__WEBPACK_IMPORTED_MODULE_0__.getAPI.searchMain(mainTitle.queryTitle[i].movieNm);\r\n                searchTitle.map(item => {\r\n                    if (item.release_date === mainTitle.queryTitle[i].openDt) {\r\n                        mainTitle.maindata.push(item);\r\n                    }\r\n                });\r\n                // for(let search of searchTitle){\r\n                //     if (search.release_date === mainTitle.queryTitle[i].openDt) mainTitle.maindata.push(search);\r\n                // }\r\n            }\r\n        } else {\r\n            throw Error(\"페이지를 새로고침 하세요!\");\r\n        }\r\n    } catch (e) {\r\n        console.log(e);\r\n    } finally {\r\n        mainTitle.loading = false;\r\n        (0,_components_mainPoster__WEBPACK_IMPORTED_MODULE_1__.default)(mainTitle.maindata);\r\n    }\r\n}\r\n\r\nconst getTitle = async () => {\r\n    let titleState = {\r\n        loading: true,\r\n        titledata: [],\r\n    }\r\n\r\n    try {\r\n        if (titleState.loading === true) {\r\n            const {\r\n                data: {\r\n                    boxOfficeResult: {\r\n                        dailyBoxOfficeList: titledata\r\n                    }\r\n                }\r\n            } = await _api__WEBPACK_IMPORTED_MODULE_0__.getAPI.boxOffice();\r\n            titleState.titledata = [...titledata];\r\n        } else {\r\n            throw Error(\"페이지를 새로고침 해주세요.\");\r\n        }\r\n    } catch (e) {\r\n        console.log(e);\r\n    } finally {\r\n        titleState.loading = false;\r\n        getMainTitle(titleState.titledata);\r\n    }\r\n}\r\n\r\ngetTitle();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMainTitle);\n\n//# sourceURL=webpack://vanillajs_movie/./src/js/api/getTitle.js?");

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/store */ \"./src/js/store/store.js\");\n/* harmony import */ var _mainPoster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPoster */ \"./src/js/components/mainPoster.js\");\n;\r\n\r\n\r\nconst root = document.getElementById(\"root\");\r\nconst { navList } = _store_store__WEBPACK_IMPORTED_MODULE_0__.default;\r\n\r\n// 검색 Modal 영역\r\n\r\nconst modalSearchForm = () => {\r\n    const searchForm = document.querySelector(\".modal-search\");\r\n    const searchLabel = document.querySelector(\".modal-label\");\r\n\r\n    searchLabel.addEventListener(\"click\", () => {\r\n        searchForm.classList.toggle(\"modal-search\");\r\n    });\r\n}\r\n\r\n\r\n// 메인 NavList 영역\r\n\r\nconst handleNavList = (li, a, item) => {\r\n    if (typeof item.ko !== \"undefined\") {\r\n        a.textContent = item.ko;\r\n        a.href = `\"./${item.en}\"`;\r\n        li.append(a);\r\n    } else {\r\n        const form = document.createElement(\"form\");\r\n        const input = document.createElement(\"input\");\r\n        const label = document.createElement(\"label\");\r\n\r\n        form.className = \"search-form modal-search\";\r\n        input.className = \"search-form__input\";\r\n        label.className = \"seacrh-form__label modal-label\";\r\n\r\n        input.type = \"text\";\r\n        input.placeholder = `영화 제목을 입력하세요.`;\r\n\r\n        form.append(input);\r\n        form.append(label);\r\n        li.append(form);\r\n    }\r\n}\r\n\r\n// Header 영역\r\n\r\nconst createElementHeader = () => {\r\n    const header = document.createElement(\"header\");\r\n    const nav = document.createElement(\"nav\");\r\n    const ul = document.createElement(\"ul\");\r\n    const li = document.createElement(\"li\");\r\n    const logoBox = document.createElement(\"div\");\r\n\r\n    nav.className = `main_nav`;\r\n    ul.className = `main-nav__lists`;\r\n    li.className = `main-nav__main-logo`;\r\n    logoBox.className = `main-logo__container`;\r\n\r\n    logoBox.textContent = `1405`;\r\n\r\n    navList.map(item => {\r\n        const li = document.createElement(\"li\");\r\n        const a = document.createElement(\"a\");\r\n        handleNavList(li, a, item);\r\n        li.className = `main-nav__list main-nav__${item.en}`;\r\n        ul.append(li);\r\n    });\r\n\r\n    li.prepend(logoBox);\r\n    ul.prepend(li);\r\n    nav.append(ul);\r\n    header.append(nav);\r\n    root.append(header);\r\n\r\n}\r\n\r\n// 추가적으로 제어하는 영역\r\n\r\nconst headerRender = () => {\r\n    const checkRequestAPI = document.querySelector(\".upcoming-list__content\");\r\n    createElementHeader();\r\n    modalSearchForm();\r\n    if (checkRequestAPI !== null) {\r\n        (0,_mainPoster__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerRender);\n\n//# sourceURL=webpack://vanillajs_movie/./src/js/components/header.js?");

/***/ }),

/***/ "./src/js/components/main.js":
/*!***********************************!*\
  !*** ./src/js/components/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _upcoming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upcoming */ \"./src/js/components/upcoming.js\");\n\r\n\r\nconst root = document.getElementById(\"root\");\r\n\r\nconst createElementMain = () => {\r\n    const main = document.createElement(\"main\");\r\n    root.append(main);\r\n\r\n    (0,_upcoming__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElementMain);\n\n//# sourceURL=webpack://vanillajs_movie/./src/js/components/main.js?");

/***/ }),

/***/ "./src/js/components/mainPoster.js":
/*!*****************************************!*\
  !*** ./src/js/components/mainPoster.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet rememberBox;\r\n\r\nconst createrElementMainPoster = (data) => {\r\n    const header = document.querySelector(\"header\");\r\n    const posterDiv = document.createElement(\"div\");\r\n    const posterTitle = document.createElement(\"h2\");\r\n    const buttonDiv = document.createElement(\"div\");\r\n\r\n    posterDiv.className = `header__main-poster`;\r\n    posterTitle.className = `header__main-title`;\r\n    buttonDiv.className = `header__main-buttonBox`;\r\n\r\n    for (let i = 1; i < data.length + 1; i++) {\r\n        const posterBtn = document.createElement(\"button\");\r\n        posterBtn.id = i;\r\n        posterBtn.className = `header__main-button`;\r\n        buttonDiv.append(posterBtn);\r\n    }\r\n\r\n    posterDiv.append(posterTitle);\r\n    posterDiv.append(buttonDiv);\r\n    header.append(posterDiv);\r\n}\r\n\r\nconst changeMainPoster = (data, item, posterDiv, posterTitle) => () => {\r\n    posterTitle.textContent = data.title;\r\n    posterDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`;\r\n\r\n    if (rememberBox !== undefined) {\r\n        rememberBox.style.backgroundColor = \"rgb(127, 127, 127)\";\r\n    }\r\n    item.style.backgroundColor = \"white\";\r\n    rememberBox = item;\r\n}\r\n\r\nconst handleMainPoster = async (data) => {\r\n    const getData = await data;\r\n    createrElementMainPoster(getData);\r\n    const posterDiv = document.querySelector(\".header__main-poster\");\r\n    const posterTitle = document.querySelector(\".header__main-title\");\r\n    const button = document.querySelectorAll(\".header__main-button\");\r\n\r\n    posterTitle.textContent = data[0].title;\r\n    posterDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data[0].backdrop_path})`;\r\n    posterDiv.style.backgroundSize = \"cover\";\r\n    posterDiv.style.backgroundRepeat = \"no-repeat\";\r\n    button[0].style.backgroundColor = \"white\";\r\n    rememberBox = button[0];\r\n\r\n    button.forEach((item, index) => {\r\n        item.addEventListener(\"click\", changeMainPoster(getData[index], item, posterDiv, posterTitle))\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleMainPoster);\n\n//# sourceURL=webpack://vanillajs_movie/./src/js/components/mainPoster.js?");

/***/ }),

/***/ "./src/js/components/upcoming.js":
/*!***************************************!*\
  !*** ./src/js/components/upcoming.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ \"./src/js/api/api.js\");\n\r\n\r\nconst createElementUpcoming = (data) => {\r\n    const main = document.querySelector(\"main\");\r\n\r\n    const section = document.createElement(\"section\");\r\n    const h2 = document.createElement(\"h2\");\r\n    const container = document.createElement(\"div\");\r\n\r\n    section.className = `upcoming`;\r\n    h2.className = `upcoming__title`;\r\n    container.className = `upcoming__lists`;\r\n\r\n    h2.textContent = `곧 개봉할 영화`;\r\n\r\n    data.map(item => {\r\n        const movieList = document.createElement(\"div\");\r\n        const movieContent = document.createElement(\"div\");\r\n        const movieTitle = document.createElement(\"h3\");\r\n        const openDateMovie = document.createElement(\"span\");\r\n        const movieRating = document.createElement(\"span\");\r\n        const image = new Image();\r\n\r\n        movieList.id = item.id;\r\n        movieList.className = `upcoming-list__content`;\r\n        movieContent.className = `content__movie-information`;\r\n        movieTitle.className = `content__movie-title`;\r\n        openDateMovie.className = `content__movie-data`;\r\n        movieRating.className = `content__movie-rating`;\r\n\r\n        image.src = item.backdrop_path && `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;\r\n        movieTitle.textContent = item.title;\r\n        openDateMovie.textContent = `${item.release_date && item.release_date.slice(0, 4)}`;\r\n        movieRating.textContent = `평점 ⭐ ${item.vote_average && item.vote_average}`;\r\n\r\n        movieContent.append(movieTitle);\r\n        movieContent.append(openDateMovie);\r\n        movieContent.append(movieRating);\r\n        movieList.append(image);\r\n        movieList.append(movieContent);\r\n        container.append(movieList);\r\n    });\r\n\r\n    section.append(h2);\r\n    section.append(container);\r\n    main.append(section);\r\n\r\n}\r\n\r\nconst getUpcomingAPI = async () => {\r\n    let upcomingState = {\r\n        loading: true,\r\n        upcoming: [],\r\n    }\r\n\r\n    try {\r\n        if (upcomingState.loading === true) {\r\n            const {\r\n                data: { results: upcoming }\r\n            } = await _api_api__WEBPACK_IMPORTED_MODULE_0__.getAPI.upcoming();\r\n            upcomingState.upcoming = [...upcoming];\r\n        } else {\r\n            throw Error(\"페이지를 새로고침 해주세요.\");\r\n        }\r\n    } catch (e) {\r\n        console.log(e);\r\n    } finally {\r\n        upcomingState.loading = false;\r\n        createElementUpcoming(upcomingState.upcoming);\r\n    }\r\n}\r\n\r\n\r\nconst upcomingRender = () => {\r\n    getUpcomingAPI();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upcomingRender);\n\n//# sourceURL=webpack://vanillajs_movie/./src/js/components/upcoming.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/js/components/header.js\");\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main */ \"./src/js/components/main.js\");\n/* harmony import */ var _api_getTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/getTitle */ \"./src/js/api/getTitle.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_components_header__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n(0,_components_main__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n//# sourceURL=webpack://vanillajs_movie/./src/js/index.js?");

/***/ }),

/***/ "./src/js/store/store.js":
/*!*******************************!*\
  !*** ./src/js/store/store.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerList = {\r\n    navList: [\r\n        {\r\n            ko: \"영화\",\r\n            en: \"movie\"\r\n        },\r\n        {\r\n            ko: \"TV 프로그램\",\r\n            en: \"TV-show\"\r\n        },\r\n        {\r\n            ko: \"개발중\",\r\n            en: \"develop-ing\"\r\n        },\r\n        {\r\n            en: \"search\"\r\n        }\r\n    ],\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerList);\n\n//# sourceURL=webpack://vanillajs_movie/./src/js/store/store.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;