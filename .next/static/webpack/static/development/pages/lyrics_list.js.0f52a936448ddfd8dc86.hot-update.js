webpackHotUpdate("static\\development\\pages\\lyrics_list.js",{

/***/ "./pages/lyrics_list.js":
/*!******************************!*\
  !*** ./pages/lyrics_list.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LyricsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LyricsList */ "./components/LyricsList.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_hostname__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/hostname */ "./util/hostname.js");


var _jsxFileName = "C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\pages\\lyrics_list.js";





var lyrics_list = function lyrics_list(_ref) {
  var data = _ref.data;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (data.length === 0) {
      alert("검색된 내용이 없습니다.");
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_LyricsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  });
}; // init


lyrics_list["getInitialProps"] =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {
    var param, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            param = encodeURI(req.query.value);
            _context.next = 3;
            return req.query.value ? axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_util_hostname__WEBPACK_IMPORTED_MODULE_5__["default"] + "/api/search?info=" + param) : axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_util_hostname__WEBPACK_IMPORTED_MODULE_5__["default"] + "/api");

          case 3:
            res = _context.sent;
            return _context.abrupt("return", {
              data: res.data,
              param: param
            });

          case 5:
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

/* harmony default export */ __webpack_exports__["default"] = (lyrics_list);

/***/ })

})
//# sourceMappingURL=lyrics_list.js.0f52a936448ddfd8dc86.hot-update.js.map