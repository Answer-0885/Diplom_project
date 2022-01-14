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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('01:00 22 january 2022')\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst modal = () => {\n   const modalBtn = document.querySelector('.button');\n   const modalWindow = document.querySelector('.header-modal');\n   const modalClose = document.querySelector('.header-modal__close');\n   const overlay = document.querySelector('.overlay');\n\n\n   modalBtn.addEventListener('click', () => {\n      modalWindow.style.display = 'flex';\n      overlay.style.display = 'flex';\n   });\n\n   modalClose.addEventListener('click', () => {\n      modalWindow.style.display = 'none';\n      overlay.style.display = 'none';\n   });\n\n   overlay.addEventListener('click', (e) => {\n      if (!e.target.closest('.header-modal') || e.target.classList.contains('.header-modal__close')) {\n         modalWindow.style.display = 'none';\n         overlay.style.display = 'none';\n      }\n   });\n\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst timer = (deadLine) => {\n   const timerDays = document.querySelector('.count_1>span');\n   const timerHours = document.querySelector('.count_2>span');\n   const timerMinutes = document.querySelector('.count_3>span');\n   const timerSeconds = document.querySelector('.count_4>span');\n\n   console.log(timerHours)\n   console.log(timerMinutes)\n   console.log(timerSeconds)\n   console.log(timerDays)\n\n   const getTimeRemaining = () => {\n      let dateStop = new Date(deadLine).getTime();\n      let dateNow = new Date().getTime();\n      let timeRemaining = (dateStop - dateNow) / 1000;\n      let days = Math.floor(timeRemaining / 60 / 60 / 24);\n      let hours = Math.floor((timeRemaining / 60 / 60) % 24);\n      let minutes = Math.floor((timeRemaining / 60) % 60);\n      let seconds = Math.floor(timeRemaining % 60)\n\n      return {\n         timeRemaining,\n         days,\n         hours,\n         minutes,\n         seconds\n      }\n   };\n   const updateClock = () => {\n      let getTime = getTimeRemaining();\n      // Добавляем нули перед цифрами\n      function addZero(num) {\n         if (num <= 9) {\n            return '0' + num;\n         } else return num;\n      };\n      timerDays.textContent = addZero(getTime.days);\n      timerHours.textContent = addZero(getTime.hours);\n      timerMinutes.textContent = addZero(getTime.minutes);\n      timerSeconds.textContent = addZero(getTime.seconds);\n\n      if (getTime.timeRemaining <= 0) {\n         clearInterval(timer1);\n         timerDays.textContent = '00';\n         timerHours.textContent = '00';\n         timerMinutes.textContent = '00';\n         timerSeconds.textContent = '00';\n      }\n   };\n   const timer1 = setInterval(updateClock, 1000);\n   updateClock()\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;