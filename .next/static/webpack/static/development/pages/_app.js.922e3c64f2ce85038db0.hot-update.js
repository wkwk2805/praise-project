webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./modules/index.js":
/*!**************************!*\
  !*** ./modules/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _lyrics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lyrics */ "./modules/lyrics.js");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./async */ "./modules/async.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select */ "./modules/select.js");




var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  lyrics: _lyrics__WEBPACK_IMPORTED_MODULE_1__["default"],
  async: _async__WEBPACK_IMPORTED_MODULE_2__["default"],
  select: _select__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./modules/select.js":
/*!***************************!*\
  !*** ./modules/select.js ***!
  \***************************/
/*! exports provided: getData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
// action
var GET_DATA = "select/GET_DATA"; // action creator

var getData = function getData() {
  return {
    type: GET_DATA
  };
}; // initalState

var initalState = []; // reducer

var select = function select() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_DATA:
      return state;

    default:
      return state;
  }
}; // functions
// export


/* harmony default export */ __webpack_exports__["default"] = (select);

/***/ })

})
//# sourceMappingURL=_app.js.922e3c64f2ce85038db0.hot-update.js.map