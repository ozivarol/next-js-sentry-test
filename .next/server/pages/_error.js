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
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageWrapperTemplate),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst CustomErrorComponent = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {\n        statusCode: props.statusCode\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\mycodes\\\\Code\\\\next-js-sentry-test\\\\pages\\\\_error.js\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\nCustomErrorComponent.getInitialProps = async (contextData)=>{\n    // In case this is running in a serverless function, await this in order to give Sentry\n    // time to send the error before the lambda exits\n    await _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.captureUnderscoreErrorException(contextData);\n    // This will contain the status code of the response\n    return next_error__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(contextData);\n};\n\nvar serverComponentModule = /*#__PURE__*/Object.freeze({\n    __proto__: null,\n    default: CustomErrorComponent\n});\n\n/*\n * This file is a template for the code which will be substituted when our webpack loader handles non-API files in the\n * `pages/` directory.\n *\n * We use `__SENTRY_WRAPPING_TARGET_FILE__.cjs` as a placeholder for the path to the file being wrapped. Because it's not a real package,\n * this causes both TS and ESLint to complain, hence the pragma comments below.\n */\n\n\nconst userPageModule = serverComponentModule ;\n\nconst pageComponent = userPageModule ? userPageModule.default : undefined;\n\nconst origGetInitialProps = pageComponent ? pageComponent.getInitialProps : undefined;\nconst origGetStaticProps = userPageModule ? userPageModule.getStaticProps : undefined;\nconst origGetServerSideProps = userPageModule ? userPageModule.getServerSideProps : undefined;\n\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nconst getInitialPropsWrappers = {\n  '/_app': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapAppGetInitialPropsWithSentry,\n  '/_document': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapDocumentGetInitialPropsWithSentry,\n  '/_error': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapErrorGetInitialPropsWithSentry,\n};\n\nconst getInitialPropsWrapper = getInitialPropsWrappers['/_error'] || _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapGetInitialPropsWithSentry;\n\nif (pageComponent && typeof origGetInitialProps === 'function') {\n  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;\n}\n\nconst getStaticProps =\n  typeof origGetStaticProps === 'function'\n    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapGetStaticPropsWithSentry(origGetStaticProps, '/_error')\n    : undefined;\nconst getServerSideProps =\n  typeof origGetServerSideProps === 'function'\n    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/_error')\n    : undefined;\n\nconst pageWrapperTemplate = pageComponent ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapPageComponentWithSentry(pageComponent ) : pageComponent;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZXJyb3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxNQUFNQSxvQkFBQUEsR0FBdUIsQ0FBQ0MsS0FBQUEsaUJBQzVCQyw2REFBQ0MsQ0FBQUEsbURBQUFBLEVBQUFBO0FBQW1CQyxRQUFBQSxVQUFBQSxFQUFZSCxNQUFNRyxVQUFVOzs7Ozs7QUFHbERKLG9CQUFxQkssQ0FBQUEsZUFBZSxHQUFHLE9BQU9DLFdBQWdCOzs7SUFHNUQsTUFBTUMsMkVBQXNDLENBQUNELFdBQUFBLENBQUFBLENBQUFBOztJQUc3QyxPQUFPSCxpRUFBa0MsQ0FBQ0csV0FBQUEsQ0FBQUEsQ0FBQUE7QUFDNUM7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxjQUFjLEdBQUcscUJBQXFCLEVBQUU7QUFDOUM7QUFDQSxNQUFNLGFBQWEsR0FBRyxjQUFjLEdBQUcsY0FBYyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7QUFDMUU7QUFDQSxNQUFNLG1CQUFtQixHQUFHLGFBQWEsR0FBRyxhQUFhLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztBQUN0RixNQUFNLGtCQUFrQixHQUFHLGNBQWMsR0FBRyxjQUFjLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztBQUN0RixNQUFNLHNCQUFzQixHQUFHLGNBQWMsR0FBRyxjQUFjLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0FBQzlGO0FBQ0E7QUFDQSxNQUFNLHVCQUF1QixHQUFHO0FBQ2hDLEVBQUUsT0FBTyxFQUFFLDRFQUF1QztBQUNsRCxFQUFFLFlBQVksRUFBRSxpRkFBNEM7QUFDNUQsRUFBRSxTQUFTLEVBQUUsOEVBQXlDO0FBQ3RELENBQUMsQ0FBQztBQUNGO0FBQ0EsTUFBTSxzQkFBc0IsR0FBRyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsSUFBSSx5RUFBb0MsQ0FBQztBQUMxRztBQUNBLElBQUksYUFBYSxJQUFJLE9BQU8sbUJBQW1CLEtBQUssVUFBVSxFQUFFO0FBQ2hFLEVBQUUsYUFBYSxDQUFDLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO0FBQy9FLENBQUM7QUFDRDtBQUNLLE1BQUMsY0FBYztBQUNwQixFQUFFLE9BQU8sa0JBQWtCLEtBQUssVUFBVTtBQUMxQyxNQUFNLHdFQUFtQyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQztBQUN4RSxNQUFNLFVBQVU7QUFDWCxNQUFDLGtCQUFrQjtBQUN4QixFQUFFLE9BQU8sc0JBQXNCLEtBQUssVUFBVTtBQUM5QyxNQUFNLDRFQUF1QyxDQUFDLHNCQUFzQixFQUFFLFNBQVMsQ0FBQztBQUNoRixNQUFNLFVBQVU7QUFDaEI7QUFDSyxNQUFDLG1CQUFtQixHQUFHLGFBQWEsR0FBRyx1RUFBa0MsQ0FBQyxhQUFhLEVBQUUsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wYWdlcy9fZXJyb3IuanM/MTgxYSIsIndlYnBhY2s6Ly8vc2VudHJ5LXdyYXBwZXItbW9kdWxlPzZmOTYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgcGFnZSBpcyBsb2FkZWQgYnkgTmV4dGpzOlxyXG4gKiAgLSBvbiB0aGUgc2VydmVyLCB3aGVuIGRhdGEtZmV0Y2hpbmcgbWV0aG9kcyB0aHJvdyBvciByZWplY3RcclxuICogIC0gb24gdGhlIGNsaWVudCwgd2hlbiBgZ2V0SW5pdGlhbFByb3BzYCB0aHJvd3Mgb3IgcmVqZWN0c1xyXG4gKiAgLSBvbiB0aGUgY2xpZW50LCB3aGVuIGEgUmVhY3QgbGlmZWN5Y2xlIG1ldGhvZCB0aHJvd3Mgb3IgcmVqZWN0cywgYW5kIGl0J3NcclxuICogICAgY2F1Z2h0IGJ5IHRoZSBidWlsdC1pbiBOZXh0anMgZXJyb3IgYm91bmRhcnlcclxuICpcclxuICogU2VlOlxyXG4gKiAgLSBodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9kYXRhLWZldGNoaW5nL292ZXJ2aWV3XHJcbiAqICAtIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yZWZlcmVuY2UvZGF0YS1mZXRjaGluZy9nZXQtaW5pdGlhbC1wcm9wc1xyXG4gKiAgLSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItYm91bmRhcmllcy5odG1sXHJcbiAqL1xyXG5cclxuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvbmV4dGpzJ1xyXG5pbXBvcnQgTmV4dEVycm9yQ29tcG9uZW50IGZyb20gJ25leHQvZXJyb3InXHJcblxyXG5jb25zdCBDdXN0b21FcnJvckNvbXBvbmVudCA9IChwcm9wcykgPT4gKFxyXG4gIDxOZXh0RXJyb3JDb21wb25lbnQgc3RhdHVzQ29kZT17cHJvcHMuc3RhdHVzQ29kZX0gLz5cclxuKVxyXG5cclxuQ3VzdG9tRXJyb3JDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHREYXRhKSA9PiB7XHJcbiAgLy8gSW4gY2FzZSB0aGlzIGlzIHJ1bm5pbmcgaW4gYSBzZXJ2ZXJsZXNzIGZ1bmN0aW9uLCBhd2FpdCB0aGlzIGluIG9yZGVyIHRvIGdpdmUgU2VudHJ5XHJcbiAgLy8gdGltZSB0byBzZW5kIHRoZSBlcnJvciBiZWZvcmUgdGhlIGxhbWJkYSBleGl0c1xyXG4gIGF3YWl0IFNlbnRyeS5jYXB0dXJlVW5kZXJzY29yZUVycm9yRXhjZXB0aW9uKGNvbnRleHREYXRhKVxyXG5cclxuICAvLyBUaGlzIHdpbGwgY29udGFpbiB0aGUgc3RhdHVzIGNvZGUgb2YgdGhlIHJlc3BvbnNlXHJcbiAgcmV0dXJuIE5leHRFcnJvckNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY29udGV4dERhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUVycm9yQ29tcG9uZW50XHJcbiIsImltcG9ydCAqIGFzIFNlbnRyeSBmcm9tICdAc2VudHJ5L25leHRqcyc7XG5pbXBvcnQgKiBhcyBzZXJ2ZXJDb21wb25lbnRNb2R1bGUgZnJvbSAnX19TRU5UUllfV1JBUFBJTkdfVEFSR0VUX0ZJTEVfXy5janMnO1xuZXhwb3J0ICogZnJvbSAnX19TRU5UUllfV1JBUFBJTkdfVEFSR0VUX0ZJTEVfXy5janMnO1xuXG4vKlxuICogVGhpcyBmaWxlIGlzIGEgdGVtcGxhdGUgZm9yIHRoZSBjb2RlIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2hlbiBvdXIgd2VicGFjayBsb2FkZXIgaGFuZGxlcyBub24tQVBJIGZpbGVzIGluIHRoZVxuICogYHBhZ2VzL2AgZGlyZWN0b3J5LlxuICpcbiAqIFdlIHVzZSBgX19TRU5UUllfV1JBUFBJTkdfVEFSR0VUX0ZJTEVfXy5janNgIGFzIGEgcGxhY2Vob2xkZXIgZm9yIHRoZSBwYXRoIHRvIHRoZSBmaWxlIGJlaW5nIHdyYXBwZWQuIEJlY2F1c2UgaXQncyBub3QgYSByZWFsIHBhY2thZ2UsXG4gKiB0aGlzIGNhdXNlcyBib3RoIFRTIGFuZCBFU0xpbnQgdG8gY29tcGxhaW4sIGhlbmNlIHRoZSBwcmFnbWEgY29tbWVudHMgYmVsb3cuXG4gKi9cblxuXG5jb25zdCB1c2VyUGFnZU1vZHVsZSA9IHNlcnZlckNvbXBvbmVudE1vZHVsZSA7XG5cbmNvbnN0IHBhZ2VDb21wb25lbnQgPSB1c2VyUGFnZU1vZHVsZSA/IHVzZXJQYWdlTW9kdWxlLmRlZmF1bHQgOiB1bmRlZmluZWQ7XG5cbmNvbnN0IG9yaWdHZXRJbml0aWFsUHJvcHMgPSBwYWdlQ29tcG9uZW50ID8gcGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgOiB1bmRlZmluZWQ7XG5jb25zdCBvcmlnR2V0U3RhdGljUHJvcHMgPSB1c2VyUGFnZU1vZHVsZSA/IHVzZXJQYWdlTW9kdWxlLmdldFN0YXRpY1Byb3BzIDogdW5kZWZpbmVkO1xuY29uc3Qgb3JpZ0dldFNlcnZlclNpZGVQcm9wcyA9IHVzZXJQYWdlTW9kdWxlID8gdXNlclBhZ2VNb2R1bGUuZ2V0U2VydmVyU2lkZVByb3BzIDogdW5kZWZpbmVkO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuY29uc3QgZ2V0SW5pdGlhbFByb3BzV3JhcHBlcnMgPSB7XG4gICcvX2FwcCc6IFNlbnRyeS53cmFwQXBwR2V0SW5pdGlhbFByb3BzV2l0aFNlbnRyeSxcbiAgJy9fZG9jdW1lbnQnOiBTZW50cnkud3JhcERvY3VtZW50R2V0SW5pdGlhbFByb3BzV2l0aFNlbnRyeSxcbiAgJy9fZXJyb3InOiBTZW50cnkud3JhcEVycm9yR2V0SW5pdGlhbFByb3BzV2l0aFNlbnRyeSxcbn07XG5cbmNvbnN0IGdldEluaXRpYWxQcm9wc1dyYXBwZXIgPSBnZXRJbml0aWFsUHJvcHNXcmFwcGVyc1snL19lcnJvciddIHx8IFNlbnRyeS53cmFwR2V0SW5pdGlhbFByb3BzV2l0aFNlbnRyeTtcblxuaWYgKHBhZ2VDb21wb25lbnQgJiYgdHlwZW9mIG9yaWdHZXRJbml0aWFsUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgcGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPSBnZXRJbml0aWFsUHJvcHNXcmFwcGVyKG9yaWdHZXRJbml0aWFsUHJvcHMpIDtcbn1cblxuY29uc3QgZ2V0U3RhdGljUHJvcHMgPVxuICB0eXBlb2Ygb3JpZ0dldFN0YXRpY1Byb3BzID09PSAnZnVuY3Rpb24nXG4gICAgPyBTZW50cnkud3JhcEdldFN0YXRpY1Byb3BzV2l0aFNlbnRyeShvcmlnR2V0U3RhdGljUHJvcHMsICcvX2Vycm9yJylcbiAgICA6IHVuZGVmaW5lZDtcbmNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9XG4gIHR5cGVvZiBvcmlnR2V0U2VydmVyU2lkZVByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgPyBTZW50cnkud3JhcEdldFNlcnZlclNpZGVQcm9wc1dpdGhTZW50cnkob3JpZ0dldFNlcnZlclNpZGVQcm9wcywgJy9fZXJyb3InKVxuICAgIDogdW5kZWZpbmVkO1xuXG5jb25zdCBwYWdlV3JhcHBlclRlbXBsYXRlID0gcGFnZUNvbXBvbmVudCA/IFNlbnRyeS53cmFwUGFnZUNvbXBvbmVudFdpdGhTZW50cnkocGFnZUNvbXBvbmVudCApIDogcGFnZUNvbXBvbmVudDtcblxuZXhwb3J0IHsgcGFnZVdyYXBwZXJUZW1wbGF0ZSBhcyBkZWZhdWx0LCBnZXRTZXJ2ZXJTaWRlUHJvcHMsIGdldFN0YXRpY1Byb3BzIH07XG4iXSwibmFtZXMiOlsiQ3VzdG9tRXJyb3JDb21wb25lbnQiLCJwcm9wcyIsIl9qc3hERVYiLCJOZXh0RXJyb3JDb21wb25lbnQiLCJzdGF0dXNDb2RlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dERhdGEiLCJTZW50cnkiLCJjYXB0dXJlVW5kZXJzY29yZUVycm9yRXhjZXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_error.js\n");

/***/ }),

/***/ "@sentry/nextjs":
/*!*********************************!*\
  !*** external "@sentry/nextjs" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("next/error");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_error.js"));
module.exports = __webpack_exports__;

})();