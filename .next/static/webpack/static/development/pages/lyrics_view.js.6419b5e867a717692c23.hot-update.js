webpackHotUpdate("static\\development\\pages\\lyrics_view.js",{

/***/ "./components/View.js":
/*!****************************!*\
  !*** ./components/View.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pptxgenjs */ "./node_modules/pptxgenjs/dist/pptxgen.min.js");
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pptxgenjs__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\React\\react-tutorial\\praise-project\\components\\View.js";



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

var View = function View() {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])("");

  var download = function download() {
    var pptx = new pptxgenjs__WEBPACK_IMPORTED_MODULE_2___default.a();
    pptx.addSlidesForTable(ref.current.id);
    pptx.save();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "View",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styleSheet.container,
    ref: ref,
    id: "H",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: download,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Hello"));
};

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ })

})
//# sourceMappingURL=lyrics_view.js.6419b5e867a717692c23.hot-update.js.map