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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/styles.css":
/*!************************!*\
  !*** ./css/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./css/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ "./css/styles.css");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);

// get all sections
const sections = document.querySelectorAll('section');
// get ul
const navBar = document.querySelector('#navbar__list');
// get back to top
const backToTop = document.getElementById('back-to-top');
// fixed section height
const FIXED_HEIGHT = 400;
// section position data
const sectionsPositionData = [];
// build nav
const fragment = document.createDocumentFragment();
for(let index =0; index < sections.length; index++) {
  const navItem = document.createElement('li');
  const currentSection = sections[index];
  sectionsPositionData.push({
    id: currentSection.id,
    top: currentSection.offsetTop,
    height: currentSection.offsetHeight
  });
  navItem.setAttribute('data-related-section', currentSection.id);
  const currentSectionTitle = currentSection.dataset.nav;
  navItem.innerText = currentSectionTitle;
  fragment.appendChild(navItem);
}

navBar.appendChild(fragment);

function resetActiveStyles() {
  for(let index = 0; index < navBar.children.length; index++) {
    navBar.children[index].classList.remove('active-item');
  }
}

// check if section is visible on the viewport
// do some calculations to find that section, and quit.
function getSectionOnViewport() {
  let foundSection = false;
  let sectionId = '';
  for(let index = 0; index < sectionsPositionData.length && !foundSection; index++) {
    const item = sectionsPositionData[index];
    if((window.scrollY + FIXED_HEIGHT) > item.top && (window.scrollY + FIXED_HEIGHT) < (item.height + item.top)) {
      foundSection = true;
      sectionId = item.id;
    }
  }

  return sectionId;
}

function resetActiveSectionStyle() {
  for(let index =0; index < sections.length; index++) {
    const currentSection = sections[index];
    currentSection.classList.remove('active-section');
  }
}
function handleOnScroll() {
  const sectionInViewport = getSectionOnViewport();
  if(sectionInViewport) {
    resetActiveSectionStyle();
    const currentSection = document.getElementById(sectionInViewport);
    currentSection.classList.add('active-section');
    // active menu
    resetActiveStyles();
    const relatedSectionNavItem = document.querySelector(`[data-related-section=${sectionInViewport}]`);
    if(relatedSectionNavItem) {
      relatedSectionNavItem .classList.add('active-item');
    }
  }
}

function handleOnClickMenuNav(event) {
  // add event to parent for event delegation
  // remove active elements from all items
  resetActiveStyles();
  event.target.classList.add('active-item');

  const relatedSectionId = event.target.dataset.relatedSection;
  const respectiveSection = document.getElementById(relatedSectionId);
  respectiveSection.scrollIntoView();
}

function handleOnclickButton() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// register events
navBar.addEventListener('click', handleOnClickMenuNav);
document.addEventListener('scroll', handleOnScroll);
backToTop.addEventListener('click', handleOnclickButton);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*\n *\n * CSS written based on SMACSS architecture.\n * To learn more, visit: http://smacss.com/\n *\n * For simplicity, no reset or normalize is added.\n * To learn more, visit: https://css-tricks.com/reboot-resets-reasoning/\n *\n*/\n\n\n/* ---- Base Rules ---- */\nhtml {\n    scroll-behavior: smooth;\n}\nbody {\n    background: rgb(136,203,171);\n    background: linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%);\n    margin: 0;\n    font-family: 'Merriweather', serif;\n    color: #fff;\n}\n\n\n/* Typeography General*/\nh1 {\n    font-family: 'Fira Sans', sans-serif;\n    font-size: 3em;\n    margin: 2em 1rem;\n}\n\n@media only screen and (min-width: 35em){\n    h1 {\n        font-size: 7em;\n        margin: 2em 4rem 1em;\n    }\n}\n\nh2 {\n    border-bottom: 1px solid #cc1;\n    font-family: 'Oxygen', Sans-Serif;\n    font-size: 3em;\n    color: #fff;\n}\n\np {\n    line-height: 1.6em;\n    color: #eee;\n}\n\n/* ---- Layout Rules ---- */\nmain {\n    margin: 10vh 1em 10vh;\n}\n\n.main-hero {\n    min-height: 40vh;\n    padding-top: 3em;\n}\n\nsection {\n    position: relative;\n    min-height: 80vh;\n}\n\n\n/* ---- Module Rules ---- */\n\n/* Navigation Styles*/\n.navbar__menu ul {\n    padding-left: 0;\n    margin: 0;\n    text-align: right;\n}\n\n.navbar__menu li {\n    display: inline-block;\n    color: black;\n}\n\n.navbar__menu .menu__link {\n    display: block;\n    padding: 1em;\n    font-weight: bold;\n    text-decoration: none;\n    color: #000;\n}\n\n.navbar__menu .menu__link:hover {\n    background: #333;\n    color: #fff;\n    transition: ease 0.3s all;\n}\n\n/* Header Styles */\n.page__header {\n    background: #fff;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 5;\n    height: 50px;\n}\n.page__header ul, nav{\n    height: 100%;\n    display: flex;\n    justify-content: end;\n}\n\n.page__header nav ul li {\n    height: 100%;\n    padding-right: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.page__header nav ul li.active-item {\n    border: 1px solid red;\n}\n\n/* Footer Styles */\n.page__footer {\n    background: #000;\n    padding: 3em;\n    color: #fff;\n}\n\n.page__footer p{\n    color: #fff;\n}\n.page__footer #back-to-top {\n    cursor: pointer;\n}\n\n\n/* ---- Theme Rules ---- */\n/* Landing Container Styles */\n.landing__container {\n    padding: 1em;\n    text-align: left;\n}\n\n@media only screen and (min-width: 35em){\n    .landing__container {\n        max-width: 50em;\n        padding: 4em;\n    }\n}\n\nsection.active-section {\n    border: 2px solid red;\n}\nsection:nth-of-type(even) .landing__container {\n    margin-right: 0;\n    margin-left: auto;\n    text-align: right;\n}\n\n/* Background Circles */\n/* Note that background circles are created with psuedo elements before and after */\n/* Circles appear to be random do to use of :nth-of-type psuedo class */\nsection:nth-of-type(odd) .landing__container::before {\n    content: '';\n    background: rgba(255, 255, 255, 0.187);\n    position: absolute;\n    z-index: -5;\n    width: 20vh;\n    height: 20vh;\n    border-radius: 50%;\n    opacity: 0;\n    transition: ease 0.5s all;\n}\n\nsection:nth-of-type(even) .landing__container::before {\n    content: '';\n    background: rgb(255,255,255);\n    background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);\n    position: absolute;\n    top: 3em;\n    right: 3em;\n    z-index: -5;\n    width: 10vh;\n    height: 10vh;\n    border-radius: 50%;\n    opacity: 0;\n    transition: ease 0.5s all;\n}\n\nsection:nth-of-type(3n) .landing__container::after {\n    content: '';\n    background: rgb(255,255,255);\n    background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    z-index: -5;\n    width: 10vh;\n    height: 10vh;\n    border-radius: 50%;\n    opacity: 0;\n    transition: ease 0.5s all;\n}\n\nsection:nth-of-type(3n + 1) .landing__container::after {\n    content: '';\n    background: rgb(255,255,255);\n    background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);\n    position: absolute;\n    right: 20vw;\n    bottom: -5em;\n    z-index: -5;\n    width: 15vh;\n    height: 15vh;\n    border-radius: 50%;\n    opacity: 0;\n    transition: ease 0.5s all;\n}\n\n\n/* ---- Theme State Rules ---- */\n/* Section Active Styles */\n/* Note: your-active-class class is applied through javascript. You should update the class here and in the index.html to what you set in your javascript file.  */\nsection.your-active-class {\n    background: rgb(0, 0, 0);\n    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);\n}\n\nsection.your-active-class .landing__container::before {\n    opacity: 1;\n    animation: rotate 4s linear 0s infinite forwards;\n}\n\nsection.your-active-class .landing__container::after {\n    opacity: 1;\n    animation: rotate 5s linear 0s infinite forwards reverse;\n}\n\n/* Section Active Styles Keyframe Animations */\n@keyframes rotate {\n\tfrom {\n\t\ttransform: rotate(0deg)\n\t\t           translate(-1em)\n\t\t           rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg)\n\t\t           translate(-1em)\n\t\t           rotate(-360deg);\n\t}\n}\n", "",{"version":3,"sources":["webpack://css/styles.css"],"names":[],"mappings":"AAAA;;;;;;;;CAQC;;;AAGD,yBAAyB;AACzB;IACI,uBAAuB;AAC3B;AACA;IACI,4BAA4B;IAC5B,+EAA+E;IAC/E,SAAS;IACT,kCAAkC;IAClC,WAAW;AACf;;;AAGA,uBAAuB;AACvB;IACI,oCAAoC;IACpC,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI;QACI,cAAc;QACd,oBAAoB;IACxB;AACJ;;AAEA;IACI,6BAA6B;IAC7B,iCAAiC;IACjC,cAAc;IACd,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA,2BAA2B;AAC3B;IACI,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;;AAGA,2BAA2B;;AAE3B,qBAAqB;AACrB;IACI,eAAe;IACf,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,yBAAyB;AAC7B;;AAEA,kBAAkB;AAClB;IACI,gBAAgB;IAChB,eAAe;IACf,MAAM;IACN,WAAW;IACX,UAAU;IACV,YAAY;AAChB;AACA;IACI,YAAY;IACZ,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA,kBAAkB;AAClB;IACI,gBAAgB;IAChB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;AACf;AACA;IACI,eAAe;AACnB;;;AAGA,0BAA0B;AAC1B,6BAA6B;AAC7B;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI;QACI,eAAe;QACf,YAAY;IAChB;AACJ;;AAEA;IACI,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA,uBAAuB;AACvB,mFAAmF;AACnF,uEAAuE;AACvE;IACI,WAAW;IACX,sCAAsC;IACtC,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,4BAA4B;IAC5B,qFAAqF;IACrF,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,WAAW;IACX,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,4BAA4B;IAC5B,qFAAqF;IACrF,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,4BAA4B;IAC5B,qFAAqF;IACrF,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,yBAAyB;AAC7B;;;AAGA,gCAAgC;AAChC,0BAA0B;AAC1B,kKAAkK;AAClK;IACI,wBAAwB;IACxB,+EAA+E;AACnF;;AAEA;IACI,UAAU;IACV,gDAAgD;AACpD;;AAEA;IACI,UAAU;IACV,wDAAwD;AAC5D;;AAEA,8CAA8C;AAC9C;CACC;EACC;;yBAEuB;CACxB;CACA;EACC;;4BAE0B;CAC3B;AACD","sourcesContent":["/*\n *\n * CSS written based on SMACSS architecture.\n * To learn more, visit: http://smacss.com/\n *\n * For simplicity, no reset or normalize is added.\n * To learn more, visit: https://css-tricks.com/reboot-resets-reasoning/\n *\n*/\n\n\n/* ---- Base Rules ---- */\nhtml {\n    scroll-behavior: smooth;\n}\nbody {\n    background: rgb(136,203,171);\n    background: linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%);\n    margin: 0;\n    font-family: 'Merriweather', serif;\n    color: #fff;\n}\n\n\n/* Typeography General*/\nh1 {\n    font-family: 'Fira Sans', sans-serif;\n    font-size: 3em;\n    margin: 2em 1rem;\n}\n\n@media only screen and (min-width: 35em){\n    h1 {\n        font-size: 7em;\n        margin: 2em 4rem 1em;\n    }\n}\n\nh2 {\n    border-bottom: 1px solid #cc1;\n    font-family: 'Oxygen', Sans-Serif;\n    font-size: 3em;\n    color: #fff;\n}\n\np {\n    line-height: 1.6em;\n    color: #eee;\n}\n\n/* ---- Layout Rules ---- */\nmain {\n    margin: 10vh 1em 10vh;\n}\n\n.main-hero {\n    min-height: 40vh;\n    padding-top: 3em;\n}\n\nsection {\n    position: relative;\n    min-height: 80vh;\n}\n\n\n/* ---- Module Rules ---- */\n\n/* Navigation Styles*/\n.navbar__menu ul {\n    padding-left: 0;\n    margin: 0;\n    text-align: right;\n}\n\n.navbar__menu li {\n    display: inline-block;\n    color: black;\n}\n\n.navbar__menu .menu__link {\n    display: block;\n    padding: 1em;\n    font-weight: bold;\n    text-decoration: none;\n    color: #000;\n}\n\n.navbar__menu .menu__link:hover {\n    background: #333;\n    color: #fff;\n    transition: ease 0.3s all;\n}\n\n/* Header Styles */\n.page__header {\n    background: #fff;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 5;\n    height: 50px;\n}\n.page__header ul, nav{\n    height: 100%;\n    display: flex;\n    justify-content: end;\n}\n\n.page__header nav ul li {\n    height: 100%;\n    padding-right: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.page__header nav ul li.active-item {\n    border: 1px solid red;\n}\n\n/* Footer Styles */\n.page__footer {\n    background: #000;\n    padding: 3em;\n    color: #fff;\n}\n\n.page__footer p{\n    color: #fff;\n}\n.page__footer #back-to-top {\n    cursor: pointer;\n}\n\n\n/* ---- Theme Rules ---- */\n/* Landing Container Styles */\n.landing__container {\n    padding: 1em;\n    text-align: left;\n}\n\n@media only screen and (min-width: 35em){\n    .landing__container {\n        max-width: 50em;\n        padding: 4em;\n    }\n}\n\nsection.active-section {\n    border: 2px solid red;\n}\nsection:nth-of-type(even) .landing__container {\n    margin-right: 0;\n    margin-left: auto;\n    text-align: right;\n}\n\n/* Background Circles */\n/* Note that background circles are created with psuedo elements before and after */\n/* Circles appear to be random do to use of :nth-of-type psuedo class */\nsection:nth-of-type(odd) .landing__container::before {\n    content: '';\n    background: rgba(255, 255, 255, 0.187);\n    position: absolute;\n    z-index: -5;\n    width: 20vh;\n    height: 20vh;\n    border-radius: 50%;\n    opacity: 0;\n    transition: ease 0.5s all;\n}\n\nsection:nth-of-type(even) .landing__container::before {\n    content: '';\n    background: rgb(255,255,255);\n    background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);\n    position: absolute;\n    top: 3em;\n    right: 3em;\n    z-index: -5;\n    width: 10vh;\n    height: 10vh;\n    border-radius: 50%;\n    opacity: 0;\n    transition: ease 0.5s all;\n}\n\nsection:nth-of-type(3n) .landing__container::after {\n    content: '';\n    background: rgb(255,255,255);\n    background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    z-index: -5;\n    width: 10vh;\n    height: 10vh;\n    border-radius: 50%;\n    opacity: 0;\n    transition: ease 0.5s all;\n}\n\nsection:nth-of-type(3n + 1) .landing__container::after {\n    content: '';\n    background: rgb(255,255,255);\n    background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);\n    position: absolute;\n    right: 20vw;\n    bottom: -5em;\n    z-index: -5;\n    width: 15vh;\n    height: 15vh;\n    border-radius: 50%;\n    opacity: 0;\n    transition: ease 0.5s all;\n}\n\n\n/* ---- Theme State Rules ---- */\n/* Section Active Styles */\n/* Note: your-active-class class is applied through javascript. You should update the class here and in the index.html to what you set in your javascript file.  */\nsection.your-active-class {\n    background: rgb(0, 0, 0);\n    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);\n}\n\nsection.your-active-class .landing__container::before {\n    opacity: 1;\n    animation: rotate 4s linear 0s infinite forwards;\n}\n\nsection.your-active-class .landing__container::after {\n    opacity: 1;\n    animation: rotate 5s linear 0s infinite forwards reverse;\n}\n\n/* Section Active Styles Keyframe Animations */\n@keyframes rotate {\n\tfrom {\n\t\ttransform: rotate(0deg)\n\t\t           translate(-1em)\n\t\t           rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg)\n\t\t           translate(-1em)\n\t\t           rotate(-360deg);\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

  if (sourceMap && typeof btoa !== 'undefined') {
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlcy5jc3M/ZTgxYSIsIndlYnBhY2s6Ly8vLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsb0hBQXVEOztBQUV6Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVB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QTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9hcHAuanNcIik7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGVzLmNzcyc7XG4vLyBnZXQgYWxsIHNlY3Rpb25zXG5jb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKTtcbi8vIGdldCB1bFxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhcl9fbGlzdCcpO1xuLy8gZ2V0IGJhY2sgdG8gdG9wXG5jb25zdCBiYWNrVG9Ub3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay10by10b3AnKTtcbi8vIGZpeGVkIHNlY3Rpb24gaGVpZ2h0XG5jb25zdCBGSVhFRF9IRUlHSFQgPSA0MDA7XG4vLyBzZWN0aW9uIHBvc2l0aW9uIGRhdGFcbmNvbnN0IHNlY3Rpb25zUG9zaXRpb25EYXRhID0gW107XG4vLyBidWlsZCBuYXZcbmNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuZm9yKGxldCBpbmRleCA9MDsgaW5kZXggPCBzZWN0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcbiAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gc2VjdGlvbnNbaW5kZXhdO1xuICBzZWN0aW9uc1Bvc2l0aW9uRGF0YS5wdXNoKHtcbiAgICBpZDogY3VycmVudFNlY3Rpb24uaWQsXG4gICAgdG9wOiBjdXJyZW50U2VjdGlvbi5vZmZzZXRUb3AsXG4gICAgaGVpZ2h0OiBjdXJyZW50U2VjdGlvbi5vZmZzZXRIZWlnaHRcbiAgfSk7XG4gIG5hdkl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXJlbGF0ZWQtc2VjdGlvbicsIGN1cnJlbnRTZWN0aW9uLmlkKTtcbiAgY29uc3QgY3VycmVudFNlY3Rpb25UaXRsZSA9IGN1cnJlbnRTZWN0aW9uLmRhdGFzZXQubmF2O1xuICBuYXZJdGVtLmlubmVyVGV4dCA9IGN1cnJlbnRTZWN0aW9uVGl0bGU7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKG5hdkl0ZW0pO1xufVxuXG5uYXZCYXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuXG5mdW5jdGlvbiByZXNldEFjdGl2ZVN0eWxlcygpIHtcbiAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbmF2QmFyLmNoaWxkcmVuLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIG5hdkJhci5jaGlsZHJlbltpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWl0ZW0nKTtcbiAgfVxufVxuXG4vLyBjaGVjayBpZiBzZWN0aW9uIGlzIHZpc2libGUgb24gdGhlIHZpZXdwb3J0XG4vLyBkbyBzb21lIGNhbGN1bGF0aW9ucyB0byBmaW5kIHRoYXQgc2VjdGlvbiwgYW5kIHF1aXQuXG5mdW5jdGlvbiBnZXRTZWN0aW9uT25WaWV3cG9ydCgpIHtcbiAgbGV0IGZvdW5kU2VjdGlvbiA9IGZhbHNlO1xuICBsZXQgc2VjdGlvbklkID0gJyc7XG4gIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlY3Rpb25zUG9zaXRpb25EYXRhLmxlbmd0aCAmJiAhZm91bmRTZWN0aW9uOyBpbmRleCsrKSB7XG4gICAgY29uc3QgaXRlbSA9IHNlY3Rpb25zUG9zaXRpb25EYXRhW2luZGV4XTtcbiAgICBpZigod2luZG93LnNjcm9sbFkgKyBGSVhFRF9IRUlHSFQpID4gaXRlbS50b3AgJiYgKHdpbmRvdy5zY3JvbGxZICsgRklYRURfSEVJR0hUKSA8IChpdGVtLmhlaWdodCArIGl0ZW0udG9wKSkge1xuICAgICAgZm91bmRTZWN0aW9uID0gdHJ1ZTtcbiAgICAgIHNlY3Rpb25JZCA9IGl0ZW0uaWQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlY3Rpb25JZDtcbn1cblxuZnVuY3Rpb24gcmVzZXRBY3RpdmVTZWN0aW9uU3R5bGUoKSB7XG4gIGZvcihsZXQgaW5kZXggPTA7IGluZGV4IDwgc2VjdGlvbnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSBzZWN0aW9uc1tpbmRleF07XG4gICAgY3VycmVudFNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXNlY3Rpb24nKTtcbiAgfVxufVxuZnVuY3Rpb24gaGFuZGxlT25TY3JvbGwoKSB7XG4gIGNvbnN0IHNlY3Rpb25JblZpZXdwb3J0ID0gZ2V0U2VjdGlvbk9uVmlld3BvcnQoKTtcbiAgaWYoc2VjdGlvbkluVmlld3BvcnQpIHtcbiAgICByZXNldEFjdGl2ZVNlY3Rpb25TdHlsZSgpO1xuICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbkluVmlld3BvcnQpO1xuICAgIGN1cnJlbnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1zZWN0aW9uJyk7XG4gICAgLy8gYWN0aXZlIG1lbnVcbiAgICByZXNldEFjdGl2ZVN0eWxlcygpO1xuICAgIGNvbnN0IHJlbGF0ZWRTZWN0aW9uTmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJlbGF0ZWQtc2VjdGlvbj0ke3NlY3Rpb25JblZpZXdwb3J0fV1gKTtcbiAgICBpZihyZWxhdGVkU2VjdGlvbk5hdkl0ZW0pIHtcbiAgICAgIHJlbGF0ZWRTZWN0aW9uTmF2SXRlbSAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWl0ZW0nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlT25DbGlja01lbnVOYXYoZXZlbnQpIHtcbiAgLy8gYWRkIGV2ZW50IHRvIHBhcmVudCBmb3IgZXZlbnQgZGVsZWdhdGlvblxuICAvLyByZW1vdmUgYWN0aXZlIGVsZW1lbnRzIGZyb20gYWxsIGl0ZW1zXG4gIHJlc2V0QWN0aXZlU3R5bGVzKCk7XG4gIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtaXRlbScpO1xuXG4gIGNvbnN0IHJlbGF0ZWRTZWN0aW9uSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5yZWxhdGVkU2VjdGlvbjtcbiAgY29uc3QgcmVzcGVjdGl2ZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZWxhdGVkU2VjdGlvbklkKTtcbiAgcmVzcGVjdGl2ZVNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlT25jbGlja0J1dHRvbigpIHtcbiAgd2luZG93LnNjcm9sbFRvKHt0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJ30pO1xufVxuXG4vLyByZWdpc3RlciBldmVudHNcbm5hdkJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU9uQ2xpY2tNZW51TmF2KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZU9uU2Nyb2xsKTtcbmJhY2tUb1RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU9uY2xpY2tCdXR0b24pO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4gKlxcbiAqIENTUyB3cml0dGVuIGJhc2VkIG9uIFNNQUNTUyBhcmNoaXRlY3R1cmUuXFxuICogVG8gbGVhcm4gbW9yZSwgdmlzaXQ6IGh0dHA6Ly9zbWFjc3MuY29tL1xcbiAqXFxuICogRm9yIHNpbXBsaWNpdHksIG5vIHJlc2V0IG9yIG5vcm1hbGl6ZSBpcyBhZGRlZC5cXG4gKiBUbyBsZWFybiBtb3JlLCB2aXNpdDogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9yZWJvb3QtcmVzZXRzLXJlYXNvbmluZy9cXG4gKlxcbiovXFxuXFxuXFxuLyogLS0tLSBCYXNlIFJ1bGVzIC0tLS0gKi9cXG5odG1sIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTM2LDIwMywxNzEpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxMzYsMjAzLDE3MSwxKSAwJSwgcmdiYSgwLDEzLDYwLDEpIDEwMCUpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5cXG4vKiBUeXBlb2dyYXBoeSBHZW5lcmFsKi9cXG5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIG1hcmdpbjogMmVtIDFyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzVlbSl7XFxuICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogN2VtO1xcbiAgICAgICAgbWFyZ2luOiAyZW0gNHJlbSAxZW07XFxuICAgIH1cXG59XFxuXFxuaDIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjMTtcXG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBTYW5zLVNlcmlmO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbnAge1xcbiAgICBsaW5lLWhlaWdodDogMS42ZW07XFxuICAgIGNvbG9yOiAjZWVlO1xcbn1cXG5cXG4vKiAtLS0tIExheW91dCBSdWxlcyAtLS0tICovXFxubWFpbiB7XFxuICAgIG1hcmdpbjogMTB2aCAxZW0gMTB2aDtcXG59XFxuXFxuLm1haW4taGVybyB7XFxuICAgIG1pbi1oZWlnaHQ6IDQwdmg7XFxuICAgIHBhZGRpbmctdG9wOiAzZW07XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XFxufVxcblxcblxcbi8qIC0tLS0gTW9kdWxlIFJ1bGVzIC0tLS0gKi9cXG5cXG4vKiBOYXZpZ2F0aW9uIFN0eWxlcyovXFxuLm5hdmJhcl9fbWVudSB1bCB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLm5hdmJhcl9fbWVudSBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubmF2YmFyX19tZW51IC5tZW51X19saW5rIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5uYXZiYXJfX21lbnUgLm1lbnVfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjNzIGFsbDtcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcbi5wYWdlX19oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuLnBhZ2VfX2hlYWRlciB1bCwgbmF2e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4ucGFnZV9faGVhZGVyIG5hdiB1bCBsaSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2VfX2hlYWRlciBuYXYgdWwgbGkuYWN0aXZlLWl0ZW0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi8qIEZvb3RlciBTdHlsZXMgKi9cXG4ucGFnZV9fZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXG4gICAgcGFkZGluZzogM2VtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnBhZ2VfX2Zvb3RlciBwe1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuLnBhZ2VfX2Zvb3RlciAjYmFjay10by10b3Age1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIC0tLS0gVGhlbWUgUnVsZXMgLS0tLSAqL1xcbi8qIExhbmRpbmcgQ29udGFpbmVyIFN0eWxlcyAqL1xcbi5sYW5kaW5nX19jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzVlbSl7XFxuICAgIC5sYW5kaW5nX19jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiA1MGVtO1xcbiAgICAgICAgcGFkZGluZzogNGVtO1xcbiAgICB9XFxufVxcblxcbnNlY3Rpb24uYWN0aXZlLXNlY3Rpb24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcbnNlY3Rpb246bnRoLW9mLXR5cGUoZXZlbikgLmxhbmRpbmdfX2NvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4vKiBCYWNrZ3JvdW5kIENpcmNsZXMgKi9cXG4vKiBOb3RlIHRoYXQgYmFja2dyb3VuZCBjaXJjbGVzIGFyZSBjcmVhdGVkIHdpdGggcHN1ZWRvIGVsZW1lbnRzIGJlZm9yZSBhbmQgYWZ0ZXIgKi9cXG4vKiBDaXJjbGVzIGFwcGVhciB0byBiZSByYW5kb20gZG8gdG8gdXNlIG9mIDpudGgtb2YtdHlwZSBwc3VlZG8gY2xhc3MgKi9cXG5zZWN0aW9uOm50aC1vZi10eXBlKG9kZCkgLmxhbmRpbmdfX2NvbnRhaW5lcjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xODcpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC01O1xcbiAgICB3aWR0aDogMjB2aDtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGVhc2UgMC41cyBhbGw7XFxufVxcblxcbnNlY3Rpb246bnRoLW9mLXR5cGUoZXZlbikgLmxhbmRpbmdfX2NvbnRhaW5lcjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LC4xKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwuMikgMTAwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzZW07XFxuICAgIHJpZ2h0OiAzZW07XFxuICAgIHotaW5kZXg6IC01O1xcbiAgICB3aWR0aDogMTB2aDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGVhc2UgMC41cyBhbGw7XFxufVxcblxcbnNlY3Rpb246bnRoLW9mLXR5cGUoM24pIC5sYW5kaW5nX19jb250YWluZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LC4xKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwuMikgMTAwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgei1pbmRleDogLTU7XFxuICAgIHdpZHRoOiAxMHZoO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjVzIGFsbDtcXG59XFxuXFxuc2VjdGlvbjpudGgtb2YtdHlwZSgzbiArIDEpIC5sYW5kaW5nX19jb250YWluZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LC4xKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwuMikgMTAwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDIwdnc7XFxuICAgIGJvdHRvbTogLTVlbTtcXG4gICAgei1pbmRleDogLTU7XFxuICAgIHdpZHRoOiAxNXZoO1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjVzIGFsbDtcXG59XFxuXFxuXFxuLyogLS0tLSBUaGVtZSBTdGF0ZSBSdWxlcyAtLS0tICovXFxuLyogU2VjdGlvbiBBY3RpdmUgU3R5bGVzICovXFxuLyogTm90ZTogeW91ci1hY3RpdmUtY2xhc3MgY2xhc3MgaXMgYXBwbGllZCB0aHJvdWdoIGphdmFzY3JpcHQuIFlvdSBzaG91bGQgdXBkYXRlIHRoZSBjbGFzcyBoZXJlIGFuZCBpbiB0aGUgaW5kZXguaHRtbCB0byB3aGF0IHlvdSBzZXQgaW4geW91ciBqYXZhc2NyaXB0IGZpbGUuICAqL1xcbnNlY3Rpb24ueW91ci1hY3RpdmUtY2xhc3Mge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMSkgMCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XFxufVxcblxcbnNlY3Rpb24ueW91ci1hY3RpdmUtY2xhc3MgLmxhbmRpbmdfX2NvbnRhaW5lcjo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgNHMgbGluZWFyIDBzIGluZmluaXRlIGZvcndhcmRzO1xcbn1cXG5cXG5zZWN0aW9uLnlvdXItYWN0aXZlLWNsYXNzIC5sYW5kaW5nX19jb250YWluZXI6OmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgNXMgbGluZWFyIDBzIGluZmluaXRlIGZvcndhcmRzIHJldmVyc2U7XFxufVxcblxcbi8qIFNlY3Rpb24gQWN0aXZlIFN0eWxlcyBLZXlmcmFtZSBBbmltYXRpb25zICovXFxuQGtleWZyYW1lcyByb3RhdGUge1xcblxcdGZyb20ge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXFxuXFx0XFx0ICAgICAgICAgICB0cmFuc2xhdGUoLTFlbSlcXG5cXHRcXHQgICAgICAgICAgIHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFx0dG8ge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcXG5cXHRcXHQgICAgICAgICAgIHRyYW5zbGF0ZSgtMWVtKVxcblxcdFxcdCAgICAgICAgICAgcm90YXRlKC0zNjBkZWcpO1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7OztDQVFDOzs7QUFHRCx5QkFBeUI7QUFDekI7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QiwrRUFBK0U7SUFDL0UsU0FBUztJQUNULGtDQUFrQztJQUNsQyxXQUFXO0FBQ2Y7OztBQUdBLHVCQUF1QjtBQUN2QjtJQUNJLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2Qsb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOzs7QUFHQSwyQkFBMkI7O0FBRTNCLHFCQUFxQjtBQUNyQjtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0EsMEJBQTBCO0FBQzFCLDZCQUE2QjtBQUM3QjtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBLHVCQUF1QjtBQUN2QixtRkFBbUY7QUFDbkYsdUVBQXVFO0FBQ3ZFO0lBQ0ksV0FBVztJQUNYLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLHFGQUFxRjtJQUNyRixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIscUZBQXFGO0lBQ3JGLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixxRkFBcUY7SUFDckYsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7OztBQUdBLGdDQUFnQztBQUNoQywwQkFBMEI7QUFDMUIsa0tBQWtLO0FBQ2xLO0lBQ0ksd0JBQXdCO0lBQ3hCLCtFQUErRTtBQUNuRjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysd0RBQXdEO0FBQzVEOztBQUVBLDhDQUE4QztBQUM5QztDQUNDO0VBQ0M7O3lCQUV1QjtDQUN4QjtDQUNBO0VBQ0M7OzRCQUUwQjtDQUMzQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuICpcXG4gKiBDU1Mgd3JpdHRlbiBiYXNlZCBvbiBTTUFDU1MgYXJjaGl0ZWN0dXJlLlxcbiAqIFRvIGxlYXJuIG1vcmUsIHZpc2l0OiBodHRwOi8vc21hY3NzLmNvbS9cXG4gKlxcbiAqIEZvciBzaW1wbGljaXR5LCBubyByZXNldCBvciBub3JtYWxpemUgaXMgYWRkZWQuXFxuICogVG8gbGVhcm4gbW9yZSwgdmlzaXQ6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vcmVib290LXJlc2V0cy1yZWFzb25pbmcvXFxuICpcXG4qL1xcblxcblxcbi8qIC0tLS0gQmFzZSBSdWxlcyAtLS0tICovXFxuaHRtbCB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDEzNiwyMDMsMTcxKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTM2LDIwMywxNzEsMSkgMCUsIHJnYmEoMCwxMyw2MCwxKSAxMDAlKTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuXFxuLyogVHlwZW9ncmFwaHkgR2VuZXJhbCovXFxuaDEge1xcbiAgICBmb250LWZhbWlseTogJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBtYXJnaW46IDJlbSAxcmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM1ZW0pe1xcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDdlbTtcXG4gICAgICAgIG1hcmdpbjogMmVtIDRyZW0gMWVtO1xcbiAgICB9XFxufVxcblxcbmgyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYzE7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgU2Fucy1TZXJpZjtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5wIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xcbiAgICBjb2xvcjogI2VlZTtcXG59XFxuXFxuLyogLS0tLSBMYXlvdXQgUnVsZXMgLS0tLSAqL1xcbm1haW4ge1xcbiAgICBtYXJnaW46IDEwdmggMWVtIDEwdmg7XFxufVxcblxcbi5tYWluLWhlcm8ge1xcbiAgICBtaW4taGVpZ2h0OiA0MHZoO1xcbiAgICBwYWRkaW5nLXRvcDogM2VtO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG5cXG4vKiAtLS0tIE1vZHVsZSBSdWxlcyAtLS0tICovXFxuXFxuLyogTmF2aWdhdGlvbiBTdHlsZXMqL1xcbi5uYXZiYXJfX21lbnUgdWwge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5uYXZiYXJfX21lbnUgbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLm5hdmJhcl9fbWVudSAubWVudV9fbGluayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubmF2YmFyX19tZW51IC5tZW51X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzMzMztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRyYW5zaXRpb246IGVhc2UgMC4zcyBhbGw7XFxufVxcblxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXG4ucGFnZV9faGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5wYWdlX19oZWFkZXIgdWwsIG5hdntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLnBhZ2VfX2hlYWRlciBuYXYgdWwgbGkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYWdlX19oZWFkZXIgbmF2IHVsIGxpLmFjdGl2ZS1pdGVtIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4vKiBGb290ZXIgU3R5bGVzICovXFxuLnBhZ2VfX2Zvb3RlciB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxuICAgIHBhZGRpbmc6IDNlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5wYWdlX19mb290ZXIgcHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcbi5wYWdlX19mb290ZXIgI2JhY2stdG8tdG9wIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKiAtLS0tIFRoZW1lIFJ1bGVzIC0tLS0gKi9cXG4vKiBMYW5kaW5nIENvbnRhaW5lciBTdHlsZXMgKi9cXG4ubGFuZGluZ19fY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM1ZW0pe1xcbiAgICAubGFuZGluZ19fY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogNTBlbTtcXG4gICAgICAgIHBhZGRpbmc6IDRlbTtcXG4gICAgfVxcbn1cXG5cXG5zZWN0aW9uLmFjdGl2ZS1zZWN0aW9uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG5zZWN0aW9uOm50aC1vZi10eXBlKGV2ZW4pIC5sYW5kaW5nX19jb250YWluZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLyogQmFja2dyb3VuZCBDaXJjbGVzICovXFxuLyogTm90ZSB0aGF0IGJhY2tncm91bmQgY2lyY2xlcyBhcmUgY3JlYXRlZCB3aXRoIHBzdWVkbyBlbGVtZW50cyBiZWZvcmUgYW5kIGFmdGVyICovXFxuLyogQ2lyY2xlcyBhcHBlYXIgdG8gYmUgcmFuZG9tIGRvIHRvIHVzZSBvZiA6bnRoLW9mLXR5cGUgcHN1ZWRvIGNsYXNzICovXFxuc2VjdGlvbjpudGgtb2YtdHlwZShvZGQpIC5sYW5kaW5nX19jb250YWluZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTg3KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtNTtcXG4gICAgd2lkdGg6IDIwdmg7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuNXMgYWxsO1xcbn1cXG5cXG5zZWN0aW9uOm50aC1vZi10eXBlKGV2ZW4pIC5sYW5kaW5nX19jb250YWluZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwuMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsLjIpIDEwMCUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogM2VtO1xcbiAgICByaWdodDogM2VtO1xcbiAgICB6LWluZGV4OiAtNTtcXG4gICAgd2lkdGg6IDEwdmg7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuNXMgYWxsO1xcbn1cXG5cXG5zZWN0aW9uOm50aC1vZi10eXBlKDNuKSAubGFuZGluZ19fY29udGFpbmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwuMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsLjIpIDEwMCUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHotaW5kZXg6IC01O1xcbiAgICB3aWR0aDogMTB2aDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGVhc2UgMC41cyBhbGw7XFxufVxcblxcbnNlY3Rpb246bnRoLW9mLXR5cGUoM24gKyAxKSAubGFuZGluZ19fY29udGFpbmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwuMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsLjIpIDEwMCUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAyMHZ3O1xcbiAgICBib3R0b206IC01ZW07XFxuICAgIHotaW5kZXg6IC01O1xcbiAgICB3aWR0aDogMTV2aDtcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGVhc2UgMC41cyBhbGw7XFxufVxcblxcblxcbi8qIC0tLS0gVGhlbWUgU3RhdGUgUnVsZXMgLS0tLSAqL1xcbi8qIFNlY3Rpb24gQWN0aXZlIFN0eWxlcyAqL1xcbi8qIE5vdGU6IHlvdXItYWN0aXZlLWNsYXNzIGNsYXNzIGlzIGFwcGxpZWQgdGhyb3VnaCBqYXZhc2NyaXB0LiBZb3Ugc2hvdWxkIHVwZGF0ZSB0aGUgY2xhc3MgaGVyZSBhbmQgaW4gdGhlIGluZGV4Lmh0bWwgdG8gd2hhdCB5b3Ugc2V0IGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLiAgKi9cXG5zZWN0aW9uLnlvdXItYWN0aXZlLWNsYXNzIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjEpIDAlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xcbn1cXG5cXG5zZWN0aW9uLnlvdXItYWN0aXZlLWNsYXNzIC5sYW5kaW5nX19jb250YWluZXI6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGFuaW1hdGlvbjogcm90YXRlIDRzIGxpbmVhciAwcyBpbmZpbml0ZSBmb3J3YXJkcztcXG59XFxuXFxuc2VjdGlvbi55b3VyLWFjdGl2ZS1jbGFzcyAubGFuZGluZ19fY29udGFpbmVyOjphZnRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGFuaW1hdGlvbjogcm90YXRlIDVzIGxpbmVhciAwcyBpbmZpbml0ZSBmb3J3YXJkcyByZXZlcnNlO1xcbn1cXG5cXG4vKiBTZWN0aW9uIEFjdGl2ZSBTdHlsZXMgS2V5ZnJhbWUgQW5pbWF0aW9ucyAqL1xcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG5cXHRmcm9tIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVxcblxcdFxcdCAgICAgICAgICAgdHJhbnNsYXRlKC0xZW0pXFxuXFx0XFx0ICAgICAgICAgICByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcdHRvIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpXFxuXFx0XFx0ICAgICAgICAgICB0cmFuc2xhdGUoLTFlbSlcXG5cXHRcXHQgICAgICAgICAgIHJvdGF0ZSgtMzYwZGVnKTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=