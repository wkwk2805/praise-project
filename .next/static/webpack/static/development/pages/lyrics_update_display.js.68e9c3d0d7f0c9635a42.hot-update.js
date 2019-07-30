webpackHotUpdate("static\\development\\pages\\lyrics_update_display.js",{

/***/ "./pages/lyrics_update_display.js":
/*!****************************************!*\
  !*** ./pages/lyrics_update_display.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_UpdateDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UpdateDisplay */ "./components/UpdateDisplay.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_hostname__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/hostname */ "./util/hostname.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");



var _jsxFileName = "C:\\React\\react-tutorial\\praise-project\\pages\\lyrics_update_display.js";







var lyrics_update_display = function lyrics_update_display(_ref) {
  var lyrics = _ref.lyrics;
  var setting = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.lyrics;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setAdmin(setting.result || false);
  }, [setting]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      admin = _useState2[0],
      setAdmin = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, true ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_UpdateDisplay__WEBPACK_IMPORTED_MODULE_5__["default"], {
    lyrics: lyrics,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }) : undefined);
}; // 들어온 쿼리 id를 가지고 데이터를 부분적으로 불러와서 component에 넘겨주기


lyrics_update_display["getInitialProps"] =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {
    var res, lyrics;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_6___default()({
              url: "".concat(_util_hostname__WEBPACK_IMPORTED_MODULE_7__["default"], "/api/pre"),
              method: "patch",
              data: {
                id: req.query.id
              }
            });

          case 2:
            res = _context.sent;
            lyrics = res.data;
            lyrics["preFile"] = res.data.file;
            return _context.abrupt("return", {
              lyrics: lyrics
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (lyrics_update_display);

/***/ })

})
//# sourceMappingURL=lyrics_update_display.js.68e9c3d0d7f0c9635a42.hot-update.js.map