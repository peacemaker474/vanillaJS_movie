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

/***/ "./src/js/api/api.js":
/*!***************************!*\
  !*** ./src/js/api/api.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAPI\": () => (/* binding */ getAPI)\n/* harmony export */ });\nconst API_KEY = \"a9dc1bd31af50bb46c99983404356308\";\nconst BOX_API = \"766ffd1db8655b81fd4eccd8075e8123\";\n\nconst getYDate = () => {\n    let year = new Date().getFullYear();\n    let month = new Date().getMonth() + 1;\n    let day = new Date().getDate() - 1;\n    month = month < 10 ? `0${month}` : month;\n    day = day < 10 ? `0${day}` : day;\n\n    let yesterday = `${year}${month}${day}`;\n\n    return yesterday;\n}\n\n\nconst api = axios.create({\n    baseURL: \"https://api.themoviedb.org/3/\",\n    params: {\n        api_key: API_KEY,\n        language: \"ko-KR\"\n    }\n});\n\nconst boxOfficeAPI = axios.create({\n    baseURL: \"https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?\",\n    params: {\n        key: BOX_API,\n        targetDt: `${getYDate()}`,\n    }\n})\n\n\nconst getAPI = {\n    upcoming: () => api.get(\"movie/upcoming\"),\n    boxOffice: () => boxOfficeAPI.get(),\n    searchMain: title => api.get(`search/movie`, {\n        params: {\n            query: decodeURIComponent(title),\n        }\n    }),\n}\n\n\n\n\n\n//# sourceURL=webpack://vanillaJS_movie/./src/js/api/api.js?");

/***/ }),

/***/ "./src/js/api/getTitle.js":
/*!********************************!*\
  !*** ./src/js/api/getTitle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/js/api/api.js\");\n\n\nconst getEncodeTitle = (mainTitle, query) => {\n    const MAX_COUNT = 3;\n    query.map(item => {\n        if(+item.rank <= MAX_COUNT) {\n            let obj = {\n                movieNm: encodeURIComponent(item.movieNm),\n                openDt: item.openDt,\n\n            };\n            mainTitle.queryTitle.push(obj);\n        }\n    });\n}\n\nconst getMainTitle = async (query) => {\n    let mainTitle = {\n        loading : true,\n        queryTitle : [],\n        maindata : [],\n    }\n\n    getEncodeTitle(mainTitle, query);\n\n    try {\n        if (mainTitle.loading === true) {\n            for (let i = 0; i < mainTitle.queryTitle.length; i++) {\n                let {\n                    data : {\n                        results : searchTitle\n                    }\n                } = await _api__WEBPACK_IMPORTED_MODULE_0__.getAPI.searchMain(mainTitle.queryTitle[i].movieNm);\n                searchTitle.map(item => {\n                    if(item.release_date === mainTitle.queryTitle[i].openDt) {\n                        mainTitle.maindata.push(item);\n                    }\n                });\n                // for(let search of searchTitle){\n                //     if (search.release_date === mainTitle.queryTitle[i].openDt) mainTitle.maindata.push(search);\n                // }\n            }\n        } else {\n            throw Error(\"페이지를 새로고침 하세요!\");\n        }\n    } catch (e) {\n        console.log(e);\n    } finally {\n        mainTitle.loading = false;\n    }\n}\n\nconst getTitle = async () => {\n    let titleState = {\n        loading : true,\n        titledata : [],\n    }\n\n    try {\n        if (titleState.loading === true) {\n            const {\n                data : {\n                    boxOfficeResult : {\n                        dailyBoxOfficeList : titledata\n                    }\n                }\n            } = await _api__WEBPACK_IMPORTED_MODULE_0__.getAPI.boxOffice();\n            titleState.titledata = [...titledata];\n        } else {\n            throw Error(\"페이지를 새로고침 해주세요.\");\n        }\n    } catch (e) {\n        console.log(e);\n    } finally {\n        titleState.loading = false;\n        getMainTitle(titleState.titledata);\n    }\n}\n\nconst getMainData = () => {\n    const data = getTitle();\n    console.log(data);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMainData);\n\n//# sourceURL=webpack://vanillaJS_movie/./src/js/api/getTitle.js?");

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/store */ \"./src/js/store/store.js\");\n/* harmony import */ var _mainPoster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPoster */ \"./src/js/components/mainPoster.js\");\n;\n\n\nconst root = document.getElementById(\"root\");\nconst { navList } = _store_store__WEBPACK_IMPORTED_MODULE_0__.default;\n\n// 검색 Modal 영역\n\nconst modalSearchForm = () => {\n    const searchForm = document.querySelector(\".modal-search\");\n    const searchLabel = document.querySelector(\".modal-label\");\n\n    searchLabel.addEventListener(\"click\", () => {\n        searchForm.classList.toggle(\"modal-search\");\n    });\n}\n\n\n// 메인 NavList 영역\n\nconst handleNavList = (li, a, item) => {\n    if (typeof item.ko !== \"undefined\") {\n        a.textContent = item.ko;\n        a.href = `\"./${item.en}\"`;\n        li.append(a);\n    } else {\n        const form = document.createElement(\"form\");\n        const input = document.createElement(\"input\");\n        const label = document.createElement(\"label\");\n\n        form.className = \"search-form modal-search\";\n        input.className = \"search-form__input\";\n        label.className = \"seacrh-form__label modal-label\";\n\n        input.type = \"text\";\n        input.placeholder = `영화 제목을 입력하세요.`;\n\n        form.append(input);\n        form.append(label);\n        li.append(form);\n    }\n}\n\n// Header 영역\n\nconst createElementHeader = () => {\n    const header = document.createElement(\"header\");\n    const nav = document.createElement(\"nav\");\n    const ul = document.createElement(\"ul\");\n    const li = document.createElement(\"li\");\n    const logoBox = document.createElement(\"div\");\n\n    nav.className = `main_nav`;\n    ul.className = `main-nav__lists`;\n    li.className = `main-nav__main-logo`;\n    logoBox.className = `main-logo__container`;\n\n    logoBox.textContent = `1405`;\n\n    navList.map(item => {\n        const li = document.createElement(\"li\");\n        const a = document.createElement(\"a\");\n        handleNavList(li, a, item);\n        li.className = `main-nav__list main-nav__${item.en}`;\n        ul.append(li);\n    });\n\n    li.prepend(logoBox);\n    ul.prepend(li);\n    nav.append(ul);\n    header.append(nav);\n    root.append(header);\n\n}\n\n// 추가적으로 제어하는 영역\n\nconst headerRender = () => {\n    createElementHeader();\n    modalSearchForm();\n    (0,_mainPoster__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerRender);\n\n//# sourceURL=webpack://vanillaJS_movie/./src/js/components/header.js?");

/***/ }),

/***/ "./src/js/components/main.js":
/*!***********************************!*\
  !*** ./src/js/components/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _upcoming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upcoming */ \"./src/js/components/upcoming.js\");\n\n\nconst root = document.getElementById(\"root\");\n\nconst createElementMain = () => {\n    const main = document.createElement(\"main\");\n    root.append(main);\n\n    (0,_upcoming__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElementMain);\n\n//# sourceURL=webpack://vanillaJS_movie/./src/js/components/main.js?");

/***/ }),

/***/ "./src/js/components/mainPoster.js":
/*!*****************************************!*\
  !*** ./src/js/components/mainPoster.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_getTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/getTitle */ \"./src/js/api/getTitle.js\");\n\n\nconst createrElementMainPoster = () => {\n    console.log((0,_api_getTitle__WEBPACK_IMPORTED_MODULE_0__.default)());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createrElementMainPoster);\n\n//# sourceURL=webpack://vanillaJS_movie/./src/js/components/mainPoster.js?");

/***/ }),

/***/ "./src/js/components/upcoming.js":
/*!***************************************!*\
  !*** ./src/js/components/upcoming.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ \"./src/js/api/api.js\");\n\n\nconst createElementUpcoming = (data) => {\n    const main = document.querySelector(\"main\");\n\n    const section = document.createElement(\"section\");\n    const h2 = document.createElement(\"h2\");\n    const container = document.createElement(\"div\");\n\n    section.className = `upcoming`;\n    h2.className = `upcoming__title`;\n    container.className = `upcoming__lists`;\n\n    h2.textContent = `곧 개봉할 영화`;\n\n    data.map(item => {\n        const movieList = document.createElement(\"div\");\n        const movieContent = document.createElement(\"div\");\n        const movieTitle = document.createElement(\"h3\");\n        const openDateMovie = document.createElement(\"span\");\n        const movieRating = document.createElement(\"span\");\n        const image = new Image();\n\n        movieList.id = item.id;\n        movieList.className = `upcoming-list__content`;\n        movieContent.className = `content__movie-information`;\n        movieTitle.className = `content__movie-title`;\n        openDateMovie.className = `content__movie-data`;\n        movieRating.className = `content__movie-rating`;\n\n        image.src = item.backdrop_path && `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;\n        movieTitle.textContent = item.title;\n        openDateMovie.textContent = `${item.release_date && item.release_date.slice(0, 4)}`;\n        movieRating.textContent = `평점 ⭐ ${item.vote_average && item.vote_average}`;\n\n        movieContent.append(movieTitle);\n        movieContent.append(openDateMovie);\n        movieContent.append(movieRating);\n        movieList.append(image);\n        movieList.append(movieContent);\n        container.append(movieList);\n    });\n\n    section.append(h2);\n    section.append(container);\n    main.append(section);\n\n}\n\nconst getUpcomingAPI = async () => {\n    let upcomingState = {\n        loading: true,\n        upcoming: [],\n    }\n\n    try {\n        if (upcomingState.loading === true) {\n            const {\n                data: { results: upcoming }\n            } = await _api_api__WEBPACK_IMPORTED_MODULE_0__.getAPI.upcoming();\n            upcomingState.upcoming = [...upcoming];\n        } else {\n            throw Error(\"페이지를 새로고침 해주세요.\");\n        }\n    } catch (e) {\n        console.log(e);\n    } finally {\n        upcomingState.loading = false;\n        createElementUpcoming(upcomingState.upcoming);\n    }\n}\n\n\nconst upcomingRender = () => {\n    getUpcomingAPI();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upcomingRender);\n\n//# sourceURL=webpack://vanillaJS_movie/./src/js/components/upcoming.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/js/components/header.js\");\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main */ \"./src/js/components/main.js\");\n/* harmony import */ var _api_getTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/getTitle */ \"./src/js/api/getTitle.js\");\n\n\n\n\n\n(0,_components_header__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_components_main__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n//# sourceURL=webpack://vanillaJS_movie/./src/js/index.js?");

/***/ }),

/***/ "./src/js/store/store.js":
/*!*******************************!*\
  !*** ./src/js/store/store.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerList = {\n    navList: [\n        {\n            ko: \"영화\",\n            en: \"movie\"\n        },\n        {\n            ko: \"TV 프로그램\",\n            en: \"TV-show\"\n        },\n        {\n            ko: \"개발중\",\n            en: \"develop-ing\"\n        },\n        {\n            en: \"search\"\n        }\n    ],\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerList);\n\n//# sourceURL=webpack://vanillaJS_movie/./src/js/store/store.js?");

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