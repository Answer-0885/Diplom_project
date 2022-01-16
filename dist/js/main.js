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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/swiper */ \"./modules/swiper.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n/* harmony import */ var _modules_sliderServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sliderServices */ \"./modules/sliderServices.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('sertificate-document', 'img-modal__close', 'img-modal');\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'header-modal__close', 'header-modal');\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('btn2', 'services-modal__close', 'services-modal');\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('01:00 22 january 2022');\r\n(0,_modules_swiper__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_sliderServices__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\n\r\nfunction animate({\r\n   timing,\r\n   draw,\r\n   duration\r\n}) {\r\n\r\n   let start = performance.now();\r\n\r\n   requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n\r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n\r\n      draw(progress); // отрисовать её\r\n\r\n      if (timeFraction < 1) {\r\n         requestAnimationFrame(animate);\r\n      }\r\n\r\n   });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\n;\nconst modal = (open, close, popUp) => {\n   //Верхняя кнопка заказать звонок\n   //const modalBtn = document.querySelector('.button');\n   //const modalWindow = document.querySelector('.header-modal');\n   const overlay = document.querySelector('.overlay');\n   const body = document.querySelector('body');\n   // Наши услуги\n   //const serviceModal = document.querySelector('.services-modal');\n   //const serviceBtn = document.querySelectorAll('.btn2');\n   // Сертификаты\n   const certificateOpen = document.querySelectorAll(`.${open}`);\n   const certificateModal = document.querySelector(`.${popUp}`);\n\n   //Открываем сертификаты\n   certificateOpen.forEach(btn => {\n      console.log(btn);\n      btn.addEventListener('click', (e) => {\n         e.preventDefault();\n         certificateModal.style.display = 'block';\n         body.style.overflow = 'hidden';\n         overlay.style.display = 'block';\n         (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\n            duration: 1000,\n            timing(timeFraction) {\n               return timeFraction;\n            },\n            draw(progress) {\n               certificateModal.style.opacity = progress;\n               overlay.style.opacity = progress;\n            }\n         });\n      });\n   });\n   //Закрываем сертификаты\n   window.addEventListener('click', (e) => {\n      if (e.target.closest('.overlay') || e.target.classList.contains(`${close}`)) {\n         certificateModal.style.display = 'none';\n         body.style.overflow = 'auto';\n         overlay.style.display = 'none';\n      }\n   });\n\n\n   // // Открытие модального окна Вызвать замерщика с анимацией\n   // serviceBtn.forEach((btn) => {\n   //    btn.addEventListener('click', () => {\n   //       serviceModal.style.display = 'block';\n   //       overlay.style.display = 'flex';\n   //       body.style.overflow = 'hidden';\n   //       animate({\n   //          duration: 1000,\n   //          timing(timeFraction) {\n   //             return timeFraction;\n   //          },\n   //          draw(progress) {\n   //             serviceModal.style.opacity = progress;\n   //             overlay.style.opacity = progress;\n   //          }\n   //       });\n   //    })\n   // });\n\n   // // При нажатии на крестик или мимо окна Вызвать замерщика - окно закрывается\n   // window.addEventListener('click', (e) => {\n   //    if (e.target.closest('.overlay') || e.target.classList.contains('services-modal__close')) {\n   //       serviceModal.style.display = 'none';\n   //       overlay.style.display = 'none';\n   //       body.style.overflow = 'auto';\n   //    }\n   // });\n\n   // // При нажатии на кнопку Заказать звонок появляется модальное окно сверху с анимацией\n   // modalBtn.addEventListener('click', () => {\n   //    modalWindow.style.display = 'flex';\n   //    overlay.style.display = 'flex';\n   //    body.style.overflow = 'hidden';\n   //    modalWindow.style.opacity = '0';\n   //    overlay.style.opacity = '0';\n   //    animate({\n   //       duration: 1000,\n   //       timing(timeFraction) {\n   //          return timeFraction;\n   //       },\n   //       draw(progress) {\n   //          modalWindow.style.opacity = progress;\n   //          overlay.style.opacity = progress;\n   //       }\n   //    });\n   // });\n\n   // // При нажатии на крестик или мимо окна - окно закрывается\n   // window.addEventListener('click', (e) => {\n   //    if (e.target.closest('.overlay') || e.target.classList.contains('header-modal__close')) {\n   //       modalWindow.style.display = 'none';\n   //       overlay.style.display = 'none';\n   //       body.style.overflow = 'auto';\n   //    }\n   // });\n\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sliderServices.js":
/*!***********************************!*\
  !*** ./modules/sliderServices.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst sliderServices = () => {\r\n   const swiper = new Swiper('.swiper-service', {\r\n      navigation: {\r\n         nextEl: '.services__arrow--right',\r\n         prevEl: '.services__arrow--left',\r\n      },\r\n      loop: true,\r\n      autoplay: {\r\n         delay: 4000,\r\n         disableOnInteraction: false,\r\n      },\r\n      breakpoints: {\r\n\r\n         // Если ширина окна больше или ровна 576px\r\n         576: {\r\n            slidesPerView: 2,\r\n            spaceBetween: 40\r\n         }\r\n      }\r\n   });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderServices);\n\n//# sourceURL=webpack:///./modules/sliderServices.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst smoothScroll = () => {\r\n   let smoothScrollUp = document.querySelector('.smooth');\r\n   let benefits = document.getElementById('benefits').getBoundingClientRect();\r\n\r\n   // плавная прокрутка scrollа\r\n   smoothScrollUp.addEventListener('click', (e) => {\r\n      e.preventDefault()\r\n\r\n      if (e.target.closest('.smooth')) {\r\n         const blockId = e.target.closest('a[href*=\"#\"]').getAttribute('href');\r\n         document.querySelector(blockId).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n         });\r\n      }\r\n   })\r\n   // при прокрутке до самого верха scroll исчезает\r\n   function scrollInvis() {\r\n      console.log(benefits.top)\r\n      if (window.pageYOffset > benefits.top) {\r\n         smoothScrollUp.style.opacity = 1;\r\n      } else {\r\n         smoothScrollUp.style.opacity = 0;\r\n      }\r\n   }\r\n\r\n   window.addEventListener('scroll', () => {\r\n      scrollInvis()\r\n   });\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

/***/ }),

/***/ "./modules/swiper.js":
/*!***************************!*\
  !*** ./modules/swiper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst swiper = () => {\r\n   const swiper = new Swiper('.swiper', {\r\n      navigation: {\r\n         nextEl: '.benefits__arrow--right',\r\n         prevEl: '.benefits__arrow--left',\r\n      },\r\n      loop: true,\r\n      autoplay: {\r\n         delay: 2500,\r\n         disableOnInteraction: false,\r\n      },\r\n      breakpoints: {\r\n\r\n         // Если ширина окна больше или ровна 576px\r\n         576: {\r\n            slidesPerView: 3,\r\n            spaceBetween: 40\r\n         }\r\n      }\r\n   });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper);\n\n//# sourceURL=webpack:///./modules/swiper.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst timer = (deadLine) => {\n   const timerDays = document.querySelector('.count_1>span');\n   const timerHours = document.querySelector('.count_2>span');\n   const timerMinutes = document.querySelector('.count_3>span');\n   const timerSeconds = document.querySelector('.count_4>span');\n\n\n   const getTimeRemaining = () => {\n      let dateStop = new Date(deadLine).getTime();\n      let dateNow = new Date().getTime();\n      let timeRemaining = (dateStop - dateNow) / 1000;\n      let days = Math.floor(timeRemaining / 60 / 60 / 24);\n      let hours = Math.floor((timeRemaining / 60 / 60) % 24);\n      let minutes = Math.floor((timeRemaining / 60) % 60);\n      let seconds = Math.floor(timeRemaining % 60)\n\n      return {\n         timeRemaining,\n         days,\n         hours,\n         minutes,\n         seconds\n      }\n   };\n   const updateClock = () => {\n      let getTime = getTimeRemaining();\n      // Добавляем нули перед цифрами\n      function addZero(num) {\n         if (num <= 9) {\n            return '0' + num;\n         } else return num;\n      };\n      timerDays.textContent = addZero(getTime.days);\n      timerHours.textContent = addZero(getTime.hours);\n      timerMinutes.textContent = addZero(getTime.minutes);\n      timerSeconds.textContent = addZero(getTime.seconds);\n\n      if (getTime.timeRemaining <= 0) {\n         clearInterval(timer1);\n         timerDays.textContent = '00';\n         timerHours.textContent = '00';\n         timerMinutes.textContent = '00';\n         timerSeconds.textContent = '00';\n      }\n   };\n   const timer1 = setInterval(updateClock, 1000);\n   updateClock()\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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