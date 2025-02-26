/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n\r\n  const checkbox = document.querySelector('.form-checkbox')\r\n\r\n  if (checkbox) {\r\n    checkbox.addEventListener('click', () => {\r\n      const input = checkbox.querySelector('input')\r\n      const formButton = checkbox.nextElementSibling\r\n\r\n      let isChecked = input.checked\r\n\r\n      if (isChecked) {\r\n        input.removeAttribute('checked')\r\n        formButton.setAttribute('disabled', 'disabled')\r\n      } else {\r\n        input.setAttribute('checked', 'checked')\r\n        formButton.removeAttribute('disabled')\r\n      }\r\n    })\r\n  }\r\n\r\n  const burger = document.querySelector('.burger')\r\n  const navLinks = document.querySelectorAll('.header__nav-menu .nav-menu__link, .header-logo')\r\n  const nav = document.querySelector('.header__nav-menu')\r\n  const body = document.querySelector('body')\r\n\r\n  burger.addEventListener('click', ()=>{\r\n    burger.classList.toggle('burger-rotate')\r\n    nav.classList.toggle('nav-hidden')\r\n    body.classList.toggle('hidden')\r\n  })\r\n\r\n  navLinks.forEach(link => {\r\n    link.addEventListener('click', ()=>{\r\n      burger.classList.remove('burger-rotate')\r\n      nav.classList.remove('nav-hidden')\r\n      body.classList.remove('hidden')\r\n    })\r\n  })\r\n\r\n  const header = document.querySelector(\".header\");\r\n\r\n  function checkScroll() {\r\n    if (window.scrollY > 0) {\r\n      header.classList.add(\"header-scroll\");\r\n    } else {\r\n      header.classList.remove(\"header-scroll\");\r\n    }\r\n  }\r\n\r\n  checkScroll();\r\n\r\n  window.addEventListener(\"scroll\", checkScroll);\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXN0XzEvLi9zcmMvc2NyaXB0LmpzPzY4YjAiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNoZWNrYm94JylcclxuXHJcbiAgaWYgKGNoZWNrYm94KSB7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgaW5wdXQgPSBjaGVja2JveC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXHJcbiAgICAgIGNvbnN0IGZvcm1CdXR0b24gPSBjaGVja2JveC5uZXh0RWxlbWVudFNpYmxpbmdcclxuXHJcbiAgICAgIGxldCBpc0NoZWNrZWQgPSBpbnB1dC5jaGVja2VkXHJcblxyXG4gICAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJylcclxuICAgICAgICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJylcclxuICAgICAgICBmb3JtQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpXHJcbiAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtbWVudSAubmF2LW1lbnVfX2xpbmssIC5oZWFkZXItbG9nbycpXHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LW1lbnUnKVxyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuXHJcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItcm90YXRlJylcclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtaGlkZGVuJylcclxuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxuICB9KVxyXG5cclxuICBuYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXItcm90YXRlJylcclxuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1oaWRkZW4nKVxyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG5cclxuICBmdW5jdGlvbiBjaGVja1Njcm9sbCgpIHtcclxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDApIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItc2Nyb2xsXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXItc2Nyb2xsXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tTY3JvbGwoKTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hlY2tTY3JvbGwpO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/script.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;