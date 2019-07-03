webpackHotUpdate("static\\development\\pages\\lyrics_registration.js",{

/***/ "./modules/select.js":
/*!***************************!*\
  !*** ./modules/select.js ***!
  \***************************/
/*! exports provided: getData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 // action

var GET_DATA = "select/GET_DATA"; // action creator

var getData = function getData(res) {
  return {
    type: GET_DATA,
    res: res
  };
}; // initalState

var initalState = [];
axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost:3001/api").then(function (res) {
  console.log(res.data);
  initalState = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("initalState"), res.data);
}); // reducer

var select = function select() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_DATA:
      return action.res;

    default:
      return state;
  }
}; // functions
// export


/* harmony default export */ __webpack_exports__["default"] = (select);

/***/ })

})
//# sourceMappingURL=lyrics_registration.js.3892dda59496589f6f13.hot-update.js.map