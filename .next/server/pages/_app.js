"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageWrapperTemplate),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction App({ Component , pageProps , err  }) {\n    // Workaround for https://github.com/vercel/next.js/issues/8592\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, {\n        ...pageProps,\n        err: err\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\mycodes\\\\Code\\\\next-js-sentry-test\\\\pages\\\\_app.js\",\n        lineNumber: 3,\n        columnNumber: 10\n    }, this);\n}\n\nvar serverComponentModule = /*#__PURE__*/Object.freeze({\n    __proto__: null,\n    default: App\n});\n\n/*\n * This file is a template for the code which will be substituted when our webpack loader handles non-API files in the\n * `pages/` directory.\n *\n * We use `__SENTRY_WRAPPING_TARGET_FILE__.cjs` as a placeholder for the path to the file being wrapped. Because it's not a real package,\n * this causes both TS and ESLint to complain, hence the pragma comments below.\n */\n\n\nconst userPageModule = serverComponentModule ;\n\nconst pageComponent = userPageModule ? userPageModule.default : undefined;\n\nconst origGetInitialProps = pageComponent ? pageComponent.getInitialProps : undefined;\nconst origGetStaticProps = userPageModule ? userPageModule.getStaticProps : undefined;\nconst origGetServerSideProps = userPageModule ? userPageModule.getServerSideProps : undefined;\n\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nconst getInitialPropsWrappers = {\n  '/_app': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapAppGetInitialPropsWithSentry,\n  '/_document': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapDocumentGetInitialPropsWithSentry,\n  '/_error': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapErrorGetInitialPropsWithSentry,\n};\n\nconst getInitialPropsWrapper = getInitialPropsWrappers['/_app'] || _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapGetInitialPropsWithSentry;\n\nif (pageComponent && typeof origGetInitialProps === 'function') {\n  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;\n}\n\nconst getStaticProps =\n  typeof origGetStaticProps === 'function'\n    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapGetStaticPropsWithSentry(origGetStaticProps, '/_app')\n    : undefined;\nconst getServerSideProps =\n  typeof origGetServerSideProps === 'function'\n    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/_app')\n    : undefined;\n\nconst pageWrapperTemplate = pageComponent ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapPageComponentWithSentry(pageComponent ) : pageComponent;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxJQUFJLEVBQUVDLFNBQUFBLEdBQVdDLFNBQVMsR0FBRUMsR0FBRyxHQUFFLEVBQUU7O0FBRXpELHlCQUFPQyw2REFBQ0gsQ0FBQUEsU0FBQUEsRUFBQUE7QUFBVyxXQUFHQyxTQUFTO1FBQUVDLEdBQUtBLEVBQUFBLEdBQUFBOzs7Ozs7QUFDeEM7Ozs7Ozs7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGNBQWMsR0FBRyxxQkFBcUIsRUFBRTtBQUM5QztBQUNBLE1BQU0sYUFBYSxHQUFHLGNBQWMsR0FBRyxjQUFjLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUMxRTtBQUNBLE1BQU0sbUJBQW1CLEdBQUcsYUFBYSxHQUFHLGFBQWEsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0FBQ3RGLE1BQU0sa0JBQWtCLEdBQUcsY0FBYyxHQUFHLGNBQWMsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0FBQ3RGLE1BQU0sc0JBQXNCLEdBQUcsY0FBYyxHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7QUFDOUY7QUFDQTtBQUNBLE1BQU0sdUJBQXVCLEdBQUc7QUFDaEMsRUFBRSxPQUFPLEVBQUUsNEVBQXVDO0FBQ2xELEVBQUUsWUFBWSxFQUFFLGlGQUE0QztBQUM1RCxFQUFFLFNBQVMsRUFBRSw4RUFBeUM7QUFDdEQsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxNQUFNLHNCQUFzQixHQUFHLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxJQUFJLHlFQUFvQyxDQUFDO0FBQ3hHO0FBQ0EsSUFBSSxhQUFhLElBQUksT0FBTyxtQkFBbUIsS0FBSyxVQUFVLEVBQUU7QUFDaEUsRUFBRSxhQUFhLENBQUMsZUFBZSxHQUFHLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLEVBQUU7QUFDL0UsQ0FBQztBQUNEO0FBQ0ssTUFBQyxjQUFjO0FBQ3BCLEVBQUUsT0FBTyxrQkFBa0IsS0FBSyxVQUFVO0FBQzFDLE1BQU0sd0VBQW1DLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDO0FBQ3RFLE1BQU0sVUFBVTtBQUNYLE1BQUMsa0JBQWtCO0FBQ3hCLEVBQUUsT0FBTyxzQkFBc0IsS0FBSyxVQUFVO0FBQzlDLE1BQU0sNEVBQXVDLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDO0FBQzlFLE1BQU0sVUFBVTtBQUNoQjtBQUNLLE1BQUMsbUJBQW1CLEdBQUcsYUFBYSxHQUFHLHVFQUFrQyxDQUFDLGFBQWEsRUFBRSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3BhZ2VzL19hcHAuanM/MmE5ZCIsIndlYnBhY2s6Ly8vc2VudHJ5LXdyYXBwZXItbW9kdWxlPzZmOTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGVyciB9KSB7XHJcbiAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2lzc3Vlcy84NTkyXHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gZXJyPXtlcnJ9IC8+XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvbmV4dGpzJztcbmltcG9ydCAqIGFzIHNlcnZlckNvbXBvbmVudE1vZHVsZSBmcm9tICdfX1NFTlRSWV9XUkFQUElOR19UQVJHRVRfRklMRV9fLmNqcyc7XG5leHBvcnQgKiBmcm9tICdfX1NFTlRSWV9XUkFQUElOR19UQVJHRVRfRklMRV9fLmNqcyc7XG5cbi8qXG4gKiBUaGlzIGZpbGUgaXMgYSB0ZW1wbGF0ZSBmb3IgdGhlIGNvZGUgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aGVuIG91ciB3ZWJwYWNrIGxvYWRlciBoYW5kbGVzIG5vbi1BUEkgZmlsZXMgaW4gdGhlXG4gKiBgcGFnZXMvYCBkaXJlY3RvcnkuXG4gKlxuICogV2UgdXNlIGBfX1NFTlRSWV9XUkFQUElOR19UQVJHRVRfRklMRV9fLmNqc2AgYXMgYSBwbGFjZWhvbGRlciBmb3IgdGhlIHBhdGggdG8gdGhlIGZpbGUgYmVpbmcgd3JhcHBlZC4gQmVjYXVzZSBpdCdzIG5vdCBhIHJlYWwgcGFja2FnZSxcbiAqIHRoaXMgY2F1c2VzIGJvdGggVFMgYW5kIEVTTGludCB0byBjb21wbGFpbiwgaGVuY2UgdGhlIHByYWdtYSBjb21tZW50cyBiZWxvdy5cbiAqL1xuXG5cbmNvbnN0IHVzZXJQYWdlTW9kdWxlID0gc2VydmVyQ29tcG9uZW50TW9kdWxlIDtcblxuY29uc3QgcGFnZUNvbXBvbmVudCA9IHVzZXJQYWdlTW9kdWxlID8gdXNlclBhZ2VNb2R1bGUuZGVmYXVsdCA6IHVuZGVmaW5lZDtcblxuY29uc3Qgb3JpZ0dldEluaXRpYWxQcm9wcyA9IHBhZ2VDb21wb25lbnQgPyBwYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA6IHVuZGVmaW5lZDtcbmNvbnN0IG9yaWdHZXRTdGF0aWNQcm9wcyA9IHVzZXJQYWdlTW9kdWxlID8gdXNlclBhZ2VNb2R1bGUuZ2V0U3RhdGljUHJvcHMgOiB1bmRlZmluZWQ7XG5jb25zdCBvcmlnR2V0U2VydmVyU2lkZVByb3BzID0gdXNlclBhZ2VNb2R1bGUgPyB1c2VyUGFnZU1vZHVsZS5nZXRTZXJ2ZXJTaWRlUHJvcHMgOiB1bmRlZmluZWQ7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5jb25zdCBnZXRJbml0aWFsUHJvcHNXcmFwcGVycyA9IHtcbiAgJy9fYXBwJzogU2VudHJ5LndyYXBBcHBHZXRJbml0aWFsUHJvcHNXaXRoU2VudHJ5LFxuICAnL19kb2N1bWVudCc6IFNlbnRyeS53cmFwRG9jdW1lbnRHZXRJbml0aWFsUHJvcHNXaXRoU2VudHJ5LFxuICAnL19lcnJvcic6IFNlbnRyeS53cmFwRXJyb3JHZXRJbml0aWFsUHJvcHNXaXRoU2VudHJ5LFxufTtcblxuY29uc3QgZ2V0SW5pdGlhbFByb3BzV3JhcHBlciA9IGdldEluaXRpYWxQcm9wc1dyYXBwZXJzWycvX2FwcCddIHx8IFNlbnRyeS53cmFwR2V0SW5pdGlhbFByb3BzV2l0aFNlbnRyeTtcblxuaWYgKHBhZ2VDb21wb25lbnQgJiYgdHlwZW9mIG9yaWdHZXRJbml0aWFsUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgcGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPSBnZXRJbml0aWFsUHJvcHNXcmFwcGVyKG9yaWdHZXRJbml0aWFsUHJvcHMpIDtcbn1cblxuY29uc3QgZ2V0U3RhdGljUHJvcHMgPVxuICB0eXBlb2Ygb3JpZ0dldFN0YXRpY1Byb3BzID09PSAnZnVuY3Rpb24nXG4gICAgPyBTZW50cnkud3JhcEdldFN0YXRpY1Byb3BzV2l0aFNlbnRyeShvcmlnR2V0U3RhdGljUHJvcHMsICcvX2FwcCcpXG4gICAgOiB1bmRlZmluZWQ7XG5jb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPVxuICB0eXBlb2Ygb3JpZ0dldFNlcnZlclNpZGVQcm9wcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gU2VudHJ5LndyYXBHZXRTZXJ2ZXJTaWRlUHJvcHNXaXRoU2VudHJ5KG9yaWdHZXRTZXJ2ZXJTaWRlUHJvcHMsICcvX2FwcCcpXG4gICAgOiB1bmRlZmluZWQ7XG5cbmNvbnN0IHBhZ2VXcmFwcGVyVGVtcGxhdGUgPSBwYWdlQ29tcG9uZW50ID8gU2VudHJ5LndyYXBQYWdlQ29tcG9uZW50V2l0aFNlbnRyeShwYWdlQ29tcG9uZW50ICkgOiBwYWdlQ29tcG9uZW50O1xuXG5leHBvcnQgeyBwYWdlV3JhcHBlclRlbXBsYXRlIGFzIGRlZmF1bHQsIGdldFNlcnZlclNpZGVQcm9wcywgZ2V0U3RhdGljUHJvcHMgfTtcbiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJlcnIiLCJfanN4REVWIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@sentry/nextjs":
/*!*********************************!*\
  !*** external "@sentry/nextjs" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();