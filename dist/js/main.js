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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/check */ \"./modules/check.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('31 december 2021');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_check__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/check.js":
/*!**************************!*\
  !*** ./modules/check.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst check = () => {\r\n   const calcType = document.querySelector('.calc-type');\r\n   const calcSquare = document.querySelector('.calc-square');\r\n   const calcCount = document.querySelector('.calc-count');\r\n   const calcDay = document.querySelector('.calc-day');\r\n\r\n   const form1Name = document.querySelector('#form1-name');\r\n   const form1Email = document.querySelector('#form1-email');\r\n   const form1Phone = document.querySelector('#form1-phone');\r\n\r\n   const form2Name = document.querySelector('#form2-name');\r\n   const form2Email = document.querySelector('#form2-email');\r\n   const form2Phone = document.querySelector('#form2-phone');\r\n   const form2Message = document.querySelector('#form2-message');\r\n\r\n   const form3Name = document.querySelector('#form3-name');\r\n   const form3Email = document.querySelector('#form3-email');\r\n   const form3Phone = document.querySelector('#form3-phone');\r\n\r\n   //Проверяем чтобы введены были только  цифры, круглые скобки и дефис\r\n   form1Phone.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^0-9()\\-]/, \"\");\r\n   });\r\n   form2Phone.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\d/, \"\");\r\n   });\r\n   form3Phone.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\d/, \"\");\r\n   });\r\n\r\n   // Проверяем чтобы введена была только латиница, цифры и спец.символы \r\n   form1Email.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^A-Za-z0-9@\\-_.!~*']/, \"\");\r\n   });\r\n   form2Email.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^A-Za-z0-9@\\-_.!~*']/, \"\");\r\n   });\r\n   form3Email.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^A-Za-z0-9@\\-_.!~*']/, \"\");\r\n   });\r\n\r\n   // Проверям чтобы введено было только кириллица в любом регистре, дефис и пробел.\r\n   form1Name.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\w+/, \"\")\r\n   });\r\n   form2Name.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\w+/, \"\")\r\n   });\r\n   form2Message.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\w+/, \"\")\r\n   });\r\n   form3Name.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\w+/, \"\")\r\n   });\r\n\r\n   //Проверяем калькулятор на введённые значения\r\n   calcSquare.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\")\r\n   });\r\n   calcCount.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\")\r\n   });\r\n   calcDay.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\")\r\n   });\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);\n\n//# sourceURL=webpack:///./modules/check.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n   const menuBtn = document.querySelector('.menu');\r\n   const menu = document.querySelector('menu');\r\n   const closeBtn = menu.querySelector('.close-btn');\r\n   const menuItems = menu.querySelectorAll('ul>li>a');\r\n   // const main = document.querySelector('main');\r\n   const mainBtn = document.querySelector('main>a');\r\n\r\n   console.log(mainBtn);\r\n\r\n   const handleMenu = () => {\r\n\r\n      menu.classList.toggle('active-menu');\r\n   }\r\n   //открытие бургер меню\r\n   menuBtn.addEventListener('click', handleMenu);\r\n   //Закрытие бургер меню\r\n   closeBtn.addEventListener('click', handleMenu)\r\n   // Находим каждый элемент меню и его атрибут href \r\n   menuItems.forEach(menuItem => menuItem.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      const block = menuItem.getAttribute('href');\r\n      document.querySelector(block).scrollIntoView({\r\n         behavior: 'smooth',\r\n         block: 'start'\r\n      });\r\n      handleMenu();\r\n   }));\r\n   // При нажатии на кнопку mainBtn мы плавно перемещаемся на следующий слайд\r\n   mainBtn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      const block = mainBtn.getAttribute('href')\r\n      document.querySelector(block).scrollIntoView({\r\n         behavior: 'smooth',\r\n         block: 'start'\r\n      });\r\n   })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n   const modal = document.querySelector('.popup');\r\n   const buttons = document.querySelectorAll('.popup-btn');\r\n   const closeBtn = modal.querySelector('.popup-close');\r\n   const body = document.querySelector('body');\r\n   const popupContent = document.querySelector('.popup-content');\r\n\r\n   //Переменные для анимации\r\n   let end = 0,\r\n      step = 0.01,\r\n      popUpInterval = 0;\r\n\r\n   function popUpAnimation() {\r\n      end += step;\r\n      if (end >= 1) {\r\n         end = 1;\r\n         cancelAnimationFrame(popUpInterval);\r\n      }\r\n      modal.style.opacity = end;\r\n      popUpInterval = requestAnimationFrame(popUpAnimation);\r\n   }\r\n\r\n   buttons.forEach(btn => {\r\n      btn.addEventListener('click', () => {\r\n\r\n         //Проверка размера экрана\r\n         if (window.screen.width < 768) {\r\n            modal.style.display = 'block';\r\n            body.style.overflow = 'hidden'; /*запрещаем прокручивание страницы при открытом меню*/\r\n         } else {\r\n            modal.style.display = 'block';\r\n            body.style.overflow = 'hidden'; /*запрещаем прокручивание страницы при открытом меню*/\r\n            modal.style.opacity = '0';\r\n            popUpInterval = requestAnimationFrame(popUpAnimation);\r\n         }\r\n      })\r\n   });\r\n   closeBtn.addEventListener('click', () => {\r\n\r\n      //Проверка размера экрана\r\n      if (window.screen.width < 768) {\r\n         modal.style.display = 'none'\r\n         body.style.overflow = 'auto'; /*запрещаем прокручивание страницы при открытом меню*/\r\n      } else {\r\n         modal.style.display = 'none'\r\n         body.style.overflow = 'auto'; /*запрещаем прокручивание страницы при открытом меню*/\r\n         end = 0;\r\n         cancelAnimationFrame(popUpInterval);\r\n      }\r\n   })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine) => {\r\n   const timerHours = document.getElementById('timer-hours');\r\n   const timerMinutes = document.getElementById('timer-minutes');\r\n   const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n   const getTimeRemaining = () => {\r\n      let dateStop = new Date(deadLine).getTime();\r\n      let dateNow = new Date().getTime();\r\n      let timeRemaining = (dateStop - dateNow) / 1000;\r\n      let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n      let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n      let minutes = Math.floor((timeRemaining / 60) % 60);\r\n      let seconds = Math.floor(timeRemaining % 60)\r\n\r\n      return {\r\n         timeRemaining,\r\n         hours,\r\n         minutes,\r\n         seconds\r\n      }\r\n   };\r\n   const updateClock = () => {\r\n      let getTime = getTimeRemaining();\r\n      // Добавляем нули перед цифрами\r\n      function addZero(num) {\r\n         if (num <= 9) {\r\n            return '0' + num;\r\n         } else return num;\r\n      };\r\n\r\n      timerHours.textContent = addZero(getTime.hours);\r\n      timerMinutes.textContent = addZero(getTime.minutes);\r\n      timerSeconds.textContent = addZero(getTime.seconds);\r\n\r\n      if (getTime.timeRemaining <= 0) {\r\n         clearInterval(timer);\r\n         timerHours.textContent = '00';\r\n         timerMinutes.textContent = '00';\r\n         timerSeconds.textContent = '00';\r\n      }\r\n      console.log(getTime.seconds);\r\n   }\r\n   updateClock()\r\n   const timer = setInterval(updateClock, 1000);\r\n\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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