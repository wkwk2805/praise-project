webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./modules/sagas.js":
/*!**************************!*\
  !*** ./modules/sagas.js ***!
  \**************************/
/*! exports provided: onGetAsyncData, rootSaga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGetAsyncData", function() { return onGetAsyncData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootSaga", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lyrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lyrics */ "./modules/lyrics.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getAsyncData),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(testSaga),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);




var GET_ASYNCDATA = "TEST"; // 이 액션으로 체킹해서 호출

var onGetAsyncData = function onGetAsyncData() {
  return {
    type: GET_ASYNCDATA
  };
}; // dispatch => checking =>

function getAsyncData(action) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getAsyncData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("호출성공", action);
          _context.prev = 1;

          /*  const { res, e } = yield call(
            axios
              .put("http://localhost:3001/api/insert")
              .then(res => res)
              .catch(e => e)
          ); */
          console.log("여기호출");
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_lyrics__WEBPACK_IMPORTED_MODULE_3__["success"]);

        case 5:
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          _context.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_lyrics__WEBPACK_IMPORTED_MODULE_3__["failed"]);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 7]]);
}

function testSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function testSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(GET_ASYNCDATA, getAsyncData);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function rootSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([testSaga()]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ })

})
//# sourceMappingURL=_app.js.d8d81da152dfc83b67e0.hot-update.js.map