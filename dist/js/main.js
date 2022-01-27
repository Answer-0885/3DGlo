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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/check */ \"./modules/check.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/swiper */ \"./modules/swiper.js\");\n/* harmony import */ var _modules_swiperSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/swiperSlide */ \"./modules/swiperSlide.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('31 january 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_check__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\r\n(0,_modules_swiper__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_swiperSlide__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n   formID: 'form1',\r\n   someElem: [{\r\n      type: 'block',\r\n      id: 'total'\r\n   }]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n   formID: 'form2',\r\n   someElem: [{\r\n      type: 'block',\r\n      id: 'total'\r\n   }]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n   formID: 'form3',\r\n   someElem: [{\r\n      type: 'block',\r\n      id: 'total'\r\n   }]\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\r\nconst calc = (price = 100) => {\r\n   const calcBlock = document.querySelector('.calc-block');\r\n   const calcType = document.querySelector('.calc-type');\r\n   const calcSquare = document.querySelector('.calc-square');\r\n   const calcCount = document.querySelector('.calc-count');\r\n   const calcDay = document.querySelector('.calc-day');\r\n   const total = document.querySelector('#total');\r\n   let totalValue = 0;\r\n   let checkValue = 0;\r\n\r\n   const countCalc = () => {\r\n      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n      const calcSquareValue = calcSquare.value;\r\n      let calcCountValue = 1;\r\n      let calcDayValue = 1;\r\n\r\n      if (calcCount.value > 1) {\r\n         calcCountValue += +calcCount.value / 10;\r\n      }\r\n\r\n      if (calcDay.value && calcDay.value < 5) {\r\n         calcDayValue = 2;\r\n      } else if (calcDay.value && calcDay.value < 10) {\r\n         calcDayValue = 1.5;\r\n      }\r\n\r\n      if (calcType.value && calcSquare.value) {\r\n         checkValue = totalValue;\r\n         totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n      } else {\r\n         totalValue = 0;\r\n         calcSquare.value = \"\";\r\n         calcCount.value = \"\";\r\n         calcDay.value = \"\";\r\n      }\r\n\r\n      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n         duration: 1000,\r\n         timing(timeFraction) {\r\n            return timeFraction;\r\n         },\r\n         draw(progress) {\r\n            total.textContent = Math.round(checkValue + progress * (totalValue - checkValue));\r\n         }\r\n      });\r\n   };\r\n\r\n   calcBlock.addEventListener('input', (e) => {\r\n      if (e.target === calcType || e.target === calcSquare ||\r\n         e.target === calcCount || e.target === calcDay) {\r\n         countCalc();\r\n      }\r\n   });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/check.js":
/*!**************************!*\
  !*** ./modules/check.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst check = () => {\r\n   const calcType = document.querySelector('.calc-type');\r\n   const calcSquare = document.querySelector('.calc-square');\r\n   const calcCount = document.querySelector('.calc-count');\r\n   const calcDay = document.querySelector('.calc-day');\r\n\r\n   const form1Name = document.querySelector('#form1-name');\r\n   const form1Email = document.querySelector('#form1-email');\r\n   const form1Phone = document.querySelector('#form1-phone');\r\n\r\n   const form2Name = document.querySelector('#form2-name');\r\n   const form2Email = document.querySelector('#form2-email');\r\n   const form2Phone = document.querySelector('#form2-phone');\r\n   const form2Message = document.querySelector('#form2-message');\r\n\r\n   const form3Name = document.querySelector('#form3-name');\r\n   const form3Email = document.querySelector('#form3-email');\r\n   const form3Phone = document.querySelector('#form3-phone');\r\n\r\n   //Проверяем чтобы введены были только  цифры, круглые скобки и дефис\r\n   form1Phone.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^0-9()+\\-]/, \"\");\r\n   });\r\n   form2Phone.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^0-9()+\\-]/, \"\");\r\n   });\r\n   form3Phone.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^0-9()+\\-]/, \"\");\r\n   });\r\n\r\n   // Проверяем чтобы введена была только латиница, цифры и спец.символы \r\n   form1Email.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^A-Za-z0-9@\\-_.!~*']/, \"\");\r\n   });\r\n   form2Email.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^A-Za-z0-9@\\-_.!~*']/, \"\");\r\n   });\r\n   form3Email.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^A-Za-z0-9@\\-_.!~*']/, \"\");\r\n   });\r\n\r\n   // Проверям чтобы введено было только кириллица в любом регистре, дефис и пробел.\r\n   form1Name.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^А-Яа-я]/, \"\")\r\n   });\r\n   form2Name.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^А-Яа-я]/, \"\")\r\n   });\r\n   form2Message.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^А-Яа-я\\.\\?\\,\\:\\!\\\"\\'\\-]/, \"\")\r\n   });\r\n   form3Name.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^А-Яа-я]/, \"\")\r\n   });\r\n\r\n   //Проверяем калькулятор на введённые значения\r\n   calcSquare.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\")\r\n   });\r\n   calcCount.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\")\r\n   });\r\n   calcDay.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\")\r\n   });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);\n\n//# sourceURL=webpack:///./modules/check.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({\r\n   timing,\r\n   draw,\r\n   duration\r\n}) {\r\n\r\n   let start = performance.now();\r\n\r\n   requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n\r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n\r\n      draw(progress); // отрисовать её\r\n\r\n      if (timeFraction < 1) {\r\n         requestAnimationFrame(animate);\r\n      }\r\n\r\n   });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n   const menu = document.querySelector('menu');\r\n   const main = document.querySelector('main');\r\n   const body = document.querySelector('body');\r\n\r\n\r\n\r\n   body.addEventListener('click', (e) => {\r\n      e.preventDefault()\r\n\r\n      const eTarget = e.target.closest('a[href*=\"#\"]');\r\n\r\n      const handleMenu = () => {\r\n         menu.classList.toggle('active-menu');\r\n      };\r\n      // Открытие меню при нажатии на бургер кнопку\r\n      if (e.target.closest('.menu')) {\r\n         handleMenu();\r\n         // Закрытие меню на крестик\r\n      } else if (e.target.closest('.close-btn')) {\r\n         handleMenu();\r\n         // Плавно перемещаемся к первому блоку при нажатии на кнопку \r\n      } else if (eTarget && main.contains(e.target)) {\r\n         e.preventDefault();\r\n         const block = eTarget.getAttribute('href');\r\n         document.querySelector(block).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n         });\r\n         // Плавно перемещаемся к выбранному блоку из списка меню\r\n      } else if (eTarget && menu.contains(e.target)) {\r\n         e.preventDefault();\r\n         const block = e.target.getAttribute('href');\r\n         document.querySelector(block).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n         });\r\n         handleMenu();\r\n         // Возможность закрыть окно меню нажатием на пустое поле в не меню.\r\n      } else if (!menu.contains(e.target) && menu.classList.contains('active-menu')) {\r\n         handleMenu();\r\n      }\r\n   });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\r\nconst modal = () => {\r\n   const buttons = document.querySelectorAll('.popup-btn');\r\n   const modal = document.querySelector('.popup');\r\n\r\n   buttons.forEach((btn) => {\r\n      btn.addEventListener('click', () => {\r\n         //Проверка размера экрана\r\n         if (window.screen.width < 768) {\r\n            modal.style.display = 'block';\r\n         } else {\r\n            modal.style.display = 'block';\r\n            modal.style.opacity = '0';\r\n            (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n               duration: 500,\r\n               timing(timeFraction) {\r\n                  return timeFraction;\r\n               },\r\n               draw(progress) {\r\n                  modal.style.opacity = progress;\r\n               }\r\n            });\r\n         }\r\n      });\r\n   });\r\n\r\n   modal.addEventListener('click', (e) => {\r\n      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n         modal.style.display = 'none';\r\n      }\r\n   });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({\r\n   formID,\r\n   someElem = []\r\n}) => {\r\n   const form = document.getElementById(formID);\r\n   console.log(form)\r\n   const statusBlock = document.createElement('div')\r\n   const loadText = 'Загрузка...'\r\n   const errorText = 'Ошибка...'\r\n   const successText = 'Спасибо!Наш менеджер с вами свяжется.'\r\n\r\n   const validate = (list) => {\r\n      let success = true;\r\n\r\n      list.forEach((item) => {\r\n         if (item.classList.contains('form-email')) {\r\n            if (!item.value.match(/.+@.+\\..+/gi)) {\r\n               success = false;\r\n               return false;\r\n            }\r\n         } else if (item.classList.contains('form-phone')) {\r\n            if (!item.value.match(/^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{6,}$/gi)) {\r\n               success = false;\r\n               return false;\r\n            }\r\n         } else if (item.classList.contains('form-name') || item.classList.contains('top-form')) {\r\n            if (!item.value.match(/^[а-яА-Я][а-яА-Я]+[а-яА-Я]?$/g)) {\r\n               success = false;\r\n               return false;\r\n            }\r\n         } else if (item.classList.contains('mess')) {\r\n            if (item.value.match(/[a-zA-Z'][a-zA-Z']+[a-zA-Z']?$/gi)) {\r\n               success = false;\r\n               console.log(item);\r\n               return false;\r\n            }\r\n         }\r\n\r\n      });\r\n\r\n      return success;\r\n   };\r\n\r\n   const sendData = (data) => {\r\n      return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n         method: 'POST',\r\n         body: JSON.stringify(data),\r\n         headers: {\r\n            \"Content-Type\": \"application/json\"\r\n         }\r\n      }).then(res => res.json())\r\n   }\r\n\r\n   const submitForm = () => {\r\n      const formElements = form.querySelectorAll('input')\r\n      const formData = new FormData(form)\r\n      const formBody = {}\r\n\r\n      statusBlock.textContent = loadText\r\n      form.append(statusBlock)\r\n\r\n      formData.forEach((val, key) => {\r\n         formBody[key] = val\r\n      })\r\n\r\n      someElem.forEach(elem => {\r\n         const element = document.getElementById(elem.id)\r\n         if (elem.type === 'block') {\r\n            formBody[elem.id] = element.textContent\r\n         } else if (elem.type === 'input') {\r\n            formBody[elem.id] = element.value\r\n         }\r\n      })\r\n\r\n      if (validate(formElements)) {\r\n         sendData(formBody)\r\n            .then(data => {\r\n               statusBlock.textContent = successText\r\n\r\n               formElements.forEach(input => {\r\n                  input.value = ''\r\n               });\r\n               setTimeout(() => {\r\n                  form.removeChild(statusBlock);\r\n               }, 5000);\r\n            })\r\n            .catch(error => {\r\n               statusBlock.textContent = errorText\r\n               setTimeout(() => {\r\n                  form.removeChild(statusBlock);\r\n               }, 5000);\r\n\r\n            })\r\n      } else {\r\n         alert('Данные не валидны!!!')\r\n      }\r\n\r\n   }\r\n\r\n   try {\r\n      if (!form) {\r\n         throw new Error('Верните форму на место, пожааааалуйста!')\r\n      }\r\n\r\n      form.addEventListener('submit', (event) => {\r\n         event.preventDefault()\r\n\r\n         submitForm()\r\n         console.log('Отправлено');\r\n      })\r\n   } catch (error) {\r\n      console.log(error.message);\r\n   }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n   const sliderBlock = document.querySelector('.portfolio-content');\r\n   const slides = document.querySelectorAll('.portfolio-item');\r\n   let ulDots = document.querySelector('.portfolio-dots');\r\n\r\n\r\n   let timeInterval = 2000;\r\n   let currentSlide = 0;\r\n   let interval;\r\n\r\n   const prevSlide = (elems, index, strClass) => {\r\n      elems[index].classList.remove(strClass);\r\n   }\r\n\r\n   const nextSlide = (elems, index, strClass) => {\r\n      elems[index].classList.add(strClass);\r\n   }\r\n\r\n   const autoSlide = () => {\r\n      let dots = document.querySelectorAll('.dot');\r\n\r\n      prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n      prevSlide(dots, currentSlide, 'dot-active');\r\n      currentSlide++;\r\n      if (currentSlide >= slides.length) {\r\n         currentSlide = 0;\r\n      }\r\n      nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n      nextSlide(dots, currentSlide, 'dot-active');\r\n   }\r\n\r\n   const startSlide = (timer = 1500) => {\r\n      interval = setInterval(autoSlide, timer);\r\n   }\r\n   const stopSlide = () => {\r\n      clearInterval(interval);\r\n   }\r\n\r\n   sliderBlock.addEventListener('click', (e) => {\r\n      e.preventDefault()\r\n      let dots = document.querySelectorAll('.dot');\r\n\r\n      if (!e.target.matches('.dot, .portfolio-btn')) {\r\n         return\r\n      }\r\n\r\n      prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n      prevSlide(dots, currentSlide, 'dot-active');\r\n\r\n      if (e.target.matches('#arrow-right')) {\r\n         currentSlide++;\r\n      } else if (e.target.matches('#arrow-left')) {\r\n         currentSlide--;\r\n      } else if (e.target.classList.contains('dot')) {\r\n         dots.forEach((dot, index) => {\r\n            if (e.target === dot) {\r\n               currentSlide = index;\r\n            }\r\n         })\r\n      }\r\n      if (currentSlide >= slides.length) {\r\n         currentSlide = 0;\r\n      }\r\n      if (currentSlide < 0) {\r\n         currentSlide = slides.length - 1;\r\n      }\r\n      nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n      nextSlide(dots, currentSlide, 'dot-active');\r\n   })\r\n   sliderBlock.addEventListener('mouseenter', (e) => {\r\n      if (e.target.matches('.dot, .portfolio-btn')) {\r\n         stopSlide();\r\n      }\r\n   }, true)\r\n   sliderBlock.addEventListener('mouseleave', (e) => {\r\n      if (e.target.matches('.dot, .portfolio-btn')) {\r\n         startSlide(timeInterval);\r\n      }\r\n   }, true)\r\n   // Добавляем точки для слайдера\r\n   const dotAdd = () => {\r\n      for (let i = 0; i < slides.length; i++) {\r\n         let dot = document.createElement('li');\r\n         dot.classList.add('dot');\r\n         ulDots.append(dot);\r\n      }\r\n\r\n      ulDots.children[0].classList.add('dot-active');\r\n   };\r\n\r\n   if (sliderBlock && slides && ulDots) {\r\n      dotAdd();\r\n      startSlide(timeInterval);\r\n   }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/swiper.js":
/*!***************************!*\
  !*** ./modules/swiper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst swiper = () => {\r\n   const swiper = new Swiper('.swiper', {\r\n      // navigation: {\r\n      //    nextEl: '.benefits__arrow--right',\r\n      //    prevEl: '.benefits__arrow--left',\r\n      // },\r\n      grabCursor: true,\r\n      loop: true,\r\n      autoplay: {\r\n         delay: 2500,\r\n         disableOnInteraction: false,\r\n      },\r\n      breakpoints: {\r\n\r\n         // Если ширина окна больше или равна 576px\r\n         576: {\r\n            slidesPerView: 3,\r\n            spaceBetween: 40\r\n         }\r\n      }\r\n   });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper);\n\n//# sourceURL=webpack:///./modules/swiper.js?");

/***/ }),

/***/ "./modules/swiperSlide.js":
/*!********************************!*\
  !*** ./modules/swiperSlide.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst swiperSlide = () => {\r\n   const swiper = new Swiper('.swiper-slide', {\r\n      // navigation: {\r\n      //    nextEl: '.benefits__arrow--right',\r\n      //    prevEl: '.benefits__arrow--left',\r\n      // },\r\n      grabCursor: true,\r\n      loop: true,\r\n      autoplay: {\r\n         delay: 2500,\r\n         disableOnInteraction: false,\r\n      },\r\n      breakpoints: {\r\n\r\n         // Если ширина окна больше или равна 576px\r\n         576: {\r\n            slidesPerView: 2,\r\n            spaceBetween: 5\r\n         }\r\n      }\r\n   });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiperSlide);\n\n//# sourceURL=webpack:///./modules/swiperSlide.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n   const tabPanel = document.querySelector('.service-header');\r\n   const tabs = document.querySelectorAll('.service-header-tab');\r\n   const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n   tabPanel.addEventListener('click', (e) => {\r\n\r\n      if (e.target.closest('.service-header-tab')) {\r\n         const tabBtn = e.target.closest('.service-header-tab');\r\n         tabs.forEach((tab, index) => {\r\n            if (tab === tabBtn) {\r\n               tab.classList.add('active');\r\n               tabContent[index].classList.remove('d-none');\r\n            } else {\r\n               tab.classList.remove('active');\r\n               tabContent[index].classList.add('d-none');\r\n            };\r\n         });\r\n      };\r\n   });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine) => {\r\n   const timerHours = document.getElementById('timer-hours');\r\n   const timerMinutes = document.getElementById('timer-minutes');\r\n   const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n   const getTimeRemaining = () => {\r\n      let dateStop = new Date(deadLine).getTime();\r\n      let dateNow = new Date().getTime();\r\n      let timeRemaining = (dateStop - dateNow) / 1000;\r\n      let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n      let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n      let minutes = Math.floor((timeRemaining / 60) % 60);\r\n      let seconds = Math.floor(timeRemaining % 60)\r\n\r\n      return {\r\n         timeRemaining,\r\n         hours,\r\n         minutes,\r\n         seconds\r\n      }\r\n   };\r\n   const updateClock = () => {\r\n      let getTime = getTimeRemaining();\r\n      // Добавляем нули перед цифрами\r\n      function addZero(num) {\r\n         if (num <= 9) {\r\n            return '0' + num;\r\n         } else return num;\r\n      };\r\n\r\n      timerHours.textContent = addZero(getTime.hours);\r\n      timerMinutes.textContent = addZero(getTime.minutes);\r\n      timerSeconds.textContent = addZero(getTime.seconds);\r\n\r\n      if (getTime.timeRemaining <= 0) {\r\n         clearInterval(timer1);\r\n         timerHours.textContent = '00';\r\n         timerMinutes.textContent = '00';\r\n         timerSeconds.textContent = '00';\r\n      }\r\n   };\r\n   const timer1 = setInterval(updateClock, 1000);\r\n   updateClock()\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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