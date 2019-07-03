webpackHotUpdate("static\\development\\pages\\_app.js",{

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

var getData = function getData(res) {
  return {
    type: GET_DATA,
    res: res
  };
}; // initalState

var initalState = []; // reducer

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
//# sourceMappingURL=_app.js.06f2eb0ba338552cc1b2.hot-update.js.map