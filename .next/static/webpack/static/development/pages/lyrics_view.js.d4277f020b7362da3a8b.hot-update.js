webpackHotUpdate("static\\development\\pages\\lyrics_view.js",{

/***/ "./components/View.js":
/*!****************************!*\
  !*** ./components/View.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var _util_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/handler */ "./util/handler.js");

var _jsxFileName = "C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\View.js";



var styleSheet = {
  container: {
    background: "black",
    height: "1000px",
    color: "white",
    textAlign: "center",
    paddingTop: "30px",
    fontSize: "4em"
  }
};

var View = function View(_ref) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_util_handler__WEBPACK_IMPORTED_MODULE_3__["contentsHandler"])(data)),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      lyrics = _useState2[0],
      setLyrics = _useState2[1];

  var dataHandler = function dataHandler() {
    console.log(lyrics[0].contents[0]);
    return lyrics[0].contents[0];
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "View",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styleSheet.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, dataHandler()));
};

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ })

})
//# sourceMappingURL=lyrics_view.js.d4277f020b7362da3a8b.hot-update.js.map