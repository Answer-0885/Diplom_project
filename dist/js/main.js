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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/swiper */ \"./modules/swiper.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n/* harmony import */ var _modules_sliderServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sliderServices */ \"./modules/sliderServices.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'header-modal__close', 'header-modal'); //\"Заказать звонок\"\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('btn2', 'services-modal__close', 'services-modal'); //\"Наши услуги\"\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('sertificate-document', 'img-modal__close', 'img-modal'); //\"Сертификаты\"\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('01:00 22 january 2022');\r\n(0,_modules_swiper__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_sliderServices__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n   formID: 'form1',\r\n   someElem: [{\r\n      type: 'input',\r\n      id: 'calc-total'\r\n   }]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n   formID: 'form2',\r\n   someElem: [{\r\n      type: 'input',\r\n      id: 'calc-total'\r\n   }]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n   formID: 'form3',\r\n   someElem: [{\r\n      type: 'input',\r\n      id: 'calc-total'\r\n   }]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n   formID: 'form4',\r\n   someElem: [{\r\n      type: 'input',\r\n      id: 'calc-total'\r\n   }]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n   formID: 'form5',\r\n   someElem: [{\r\n      type: 'input',\r\n      id: 'calc-total'\r\n   }]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n   formID: 'form6',\r\n   someElem: [{\r\n      type: 'input',\r\n      id: 'calc-total'\r\n   }]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n   formID: 'form7',\r\n   someElem: [{\r\n      type: 'input',\r\n      id: 'calc-total'\r\n   }]\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\n\r\nfunction animate({\r\n   timing,\r\n   draw,\r\n   duration\r\n}) {\r\n   let start = performance.now();\r\n   requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n      draw(progress); // отрисовать её\r\n      if (timeFraction < 1) {\r\n         requestAnimationFrame(animate);\r\n      }\r\n   });\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\n;\nconst modal = (open, close, popUp) => {\n   const body = document.querySelector('body');\n   //Подложка - задний фон модалок\n   const overlay = document.querySelector('.overlay');\n   //Кнопки открытия всех модальных окон\n   const modalOpen = document.querySelectorAll(`.${open}`);\n   // Модальные окна\n   const modal = document.querySelector(`.${popUp}`);\n\n   //Открываем модальные окна\n   modalOpen.forEach(btn => {\n\n      btn.addEventListener('click', (e) => {\n         e.preventDefault();\n         modal.style.display = 'block';\n         body.style.overflow = 'hidden';\n         overlay.style.display = 'block';\n         (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\n            duration: 1000,\n            timing(timeFraction) {\n               return timeFraction;\n            },\n            draw(progress) {\n               modal.style.opacity = progress;\n               overlay.style.opacity = progress;\n            }\n         });\n      });\n   });\n   //Закрываем модальные окна на крестик или кликнув мимо окна\n   window.addEventListener('click', (e) => {\n      if (e.target.closest('.overlay') || e.target.classList.contains(`${close}`)) {\n         modal.style.display = 'none';\n         body.style.overflow = 'auto';\n         overlay.style.display = 'none';\n      };\n   });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst sendForm = ({\r\n   formId,\r\n   someElem = []\r\n}) => {\r\n\r\n   const form = document.getElementById(formId);\r\n\r\n\r\n   const validate = (list) => {\r\n      let success = true;\r\n\r\n      list.forEach((item) => {\r\n         if (item.classList.contains('form-name')) {\r\n            if (!item.value.match(/^[а-яА-Я][а-яА-Я]+[а-яА-Я]?$/g)) {\r\n               success = false;\r\n               return false;\r\n            }\r\n         } else if (item.classList.contains('form-phone')) {\r\n            if (!item.value.match(/^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{6,}$/gi)) {\r\n               success = false;\r\n               return false;\r\n            }\r\n         }\r\n      });\r\n\r\n      return success;\r\n   };\r\n   const sendData = (data) => {\r\n      return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n         method: 'POST',\r\n         body: JSON.stringify(data),\r\n         headers: {\r\n            \"Content-Type\": \"application/json\"\r\n         }\r\n      }).then(res => res.json())\r\n   }\r\n\r\n   const submitForm = () => {\r\n      const formElements = form.querySelectorAll('input')\r\n      const formData = new FormData(form)\r\n      const formBody = {}\r\n\r\n      statusBlock.textContent = loadText\r\n      form.append(statusBlock)\r\n\r\n      formData.forEach((val, key) => {\r\n         formBody[key] = val\r\n      })\r\n\r\n      someElem.forEach(elem => {\r\n         const element = document.getElementById(elem.id)\r\n         if (elem.type === 'block') {\r\n            formBody[elem.id] = element.textContent\r\n         } else if (elem.type === 'input') {\r\n            formBody[elem.id] = element.value\r\n         }\r\n      })\r\n\r\n      if (validate(formElements)) {\r\n         sendData(formBody)\r\n            .then(data => {\r\n               statusBlock.textContent = successText\r\n\r\n               formElements.forEach(input => {\r\n                  input.value = ''\r\n               });\r\n               setTimeout(() => {\r\n                  form.removeChild(statusBlock);\r\n               }, 5000);\r\n            })\r\n            .catch(error => {\r\n               statusBlock.textContent = errorText\r\n               setTimeout(() => {\r\n                  form.removeChild(statusBlock);\r\n               }, 5000);\r\n\r\n            })\r\n      } else {\r\n         alert('Данные не валидны!!!')\r\n      }\r\n   }\r\n\r\n   try {\r\n      if (!form) {\r\n         throw new Error('Верните форму на место, пожааааалуйста!')\r\n      }\r\n\r\n      form.addEventListener('submit', (event) => {\r\n         event.preventDefault()\r\n\r\n         submitForm()\r\n\r\n      })\r\n   } catch (error) {\r\n      console.log(error.message);\r\n   }\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/sliderServices.js":
/*!***********************************!*\
  !*** ./modules/sliderServices.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst sliderServices = () => {\r\n   const swiper = new Swiper('.swiper-service', {\r\n      navigation: {\r\n         nextEl: '.services__arrow--right',\r\n         prevEl: '.services__arrow--left',\r\n      },\r\n      loop: true,\r\n      autoplay: {\r\n         delay: 3000,\r\n         disableOnInteraction: false,\r\n      },\r\n      breakpoints: {\r\n\r\n         // Если ширина окна больше или равна 576px\r\n         576: {\r\n            slidesPerView: 2,\r\n            spaceBetween: 40\r\n         }\r\n      }\r\n   });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderServices);\n\n//# sourceURL=webpack:///./modules/sliderServices.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst smoothScroll = () => {\r\n   const smoothScrollUp = document.querySelector('.smooth');\r\n   let benefits = document.getElementById('benefits').getBoundingClientRect(); // Вычисляем координаты\r\n\r\n   // плавная прокрутка scrollа\r\n   smoothScrollUp.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n\r\n      if (e.target.closest('.smooth')) {\r\n         const blockId = e.target.closest('a[href*=\"#\"]').getAttribute('href');\r\n         document.querySelector(blockId).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n         });\r\n      };\r\n   });\r\n   // при прокрутке до самого верха scroll исчезает\r\n   function scrollInvis() {\r\n      if (window.pageYOffset > benefits.top) {\r\n         smoothScrollUp.style.opacity = 1;\r\n      } else {\r\n         smoothScrollUp.style.opacity = 0;\r\n      }\r\n   };\r\n\r\n   window.addEventListener('scroll', () => {\r\n      scrollInvis()\r\n   });\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

/***/ }),

/***/ "./modules/swiper.js":
/*!***************************!*\
  !*** ./modules/swiper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst swiper = () => {\r\n   const swiper = new Swiper('.swiper', {\r\n      navigation: {\r\n         nextEl: '.benefits__arrow--right',\r\n         prevEl: '.benefits__arrow--left',\r\n      },\r\n      loop: true,\r\n      autoplay: {\r\n         delay: 2500,\r\n         disableOnInteraction: false,\r\n      },\r\n      breakpoints: {\r\n\r\n         // Если ширина окна больше или равна 576px\r\n         576: {\r\n            slidesPerView: 3,\r\n            spaceBetween: 40\r\n         }\r\n      }\r\n   });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper);\n\n//# sourceURL=webpack:///./modules/swiper.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst timer = (deadLine) => {\n   const timerDays = document.querySelectorAll('.count_1>span');\n   const timerHours = document.querySelectorAll('.count_2>span');\n   const timerMinutes = document.querySelectorAll('.count_3>span');\n   const timerSeconds = document.querySelectorAll('.count_4>span');\n\n   const getTimeRemaining = () => {\n      let dateStop = new Date(deadLine).getTime();\n      let dateNow = new Date().getTime();\n      let timeRemaining = (dateStop - dateNow) / 1000;\n      let days = Math.floor(timeRemaining / 60 / 60 / 24);\n      let hours = Math.floor((timeRemaining / 60 / 60) % 24);\n      let minutes = Math.floor((timeRemaining / 60) % 60);\n      let seconds = Math.floor(timeRemaining % 60)\n\n      return {\n         timeRemaining,\n         days,\n         hours,\n         minutes,\n         seconds\n      }\n   };\n\n   const updateClock = () => {\n      let getTime = getTimeRemaining();\n      // Добавляем нули перед цифрами\n      function addZero(num) {\n         if (num <= 9) {\n            return '0' + num;\n         } else return num;\n      };\n\n      timerDays.forEach(day => {\n         day.textContent = addZero(getTime.days)\n      });\n\n      timerHours.forEach(hour => {\n         hour.textContent = addZero(getTime.hours)\n      });\n\n      timerMinutes.forEach(minute => (\n         minute.textContent = addZero(getTime.minutes)\n      ));\n\n      timerSeconds.forEach(second => {\n         second.textContent = addZero(getTime.seconds)\n      });\n\n      // Если время закончится то высветятся везде нули.\n      if (getTime.timeRemaining <= 0) {\n         clearInterval(timer1);\n         timerDays.textContent = '00';\n         timerHours.textContent = '00';\n         timerMinutes.textContent = '00';\n         timerSeconds.textContent = '00';\n      }\n   };\n   const timer1 = setInterval(updateClock, 1000);\n   updateClock()\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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