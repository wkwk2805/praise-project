webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./modules/lyrics.js":
/*!***************************!*\
  !*** ./modules/lyrics.js ***!
  \***************************/
/*! exports provided: changeHandler, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHandler", function() { return changeHandler; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


// action
var CHANGE_HANDLER = "lyrics/CHANGE_HANDLER";
var LOGIN_HANDLER = "lyrics/LOGIN_HANDLER"; //action creator

var changeHandler = function changeHandler(e) {
  return {
    type: CHANGE_HANDLER,
    e: e
  };
}; // initialState

var initialState = {}; //Reducers

var lyrics = function lyrics() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case CHANGE_HANDLER:
      return onChangeHandler(state, action.e);

    case LOGIN_HANDLER:
      return onLoginHandler(state);

    default:
      return state;
  }
}; // create functions
// 값이 변경될 때마다 값에 대한 내용을 넣어줌 // 사용안할듯


var onChangeHandler = function onChangeHandler(state, e) {
  e.target && (state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));

  if (e.target.value === "") {
    delete state[e.target.name];
  }

  if (e.target.name === "file") {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      formData: formData
    });
  }

  return state;
};

var onLoginHandler = function onLoginHandler(state) {
  console.log("onLoginHandler");
};

/* harmony default export */ __webpack_exports__["default"] = (lyrics);

/***/ })

})
//# sourceMappingURL=_app.js.3c55b0fd070690f7289a.hot-update.js.map