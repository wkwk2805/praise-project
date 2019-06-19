webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PPT.js":
/*!***************************!*\
  !*** ./components/PPT.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pptxgenjs */ "./node_modules/pptxgenjs/dist/pptxgen.min.js");
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pptxgenjs__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\React\\react-tutorial\\praise-project\\components\\PPT.js";



var PPT = function PPT() {
  var save = function save() {
    var pptx = new pptxgenjs__WEBPACK_IMPORTED_MODULE_1___default.a();
    pptx.setTitle("Hello world Title");
    pptx.setLayout({
      name: "A3",
      width: 16.5,
      height: 11.7
    });
    var slide = pptx.addNewSlide("MASTER");
    slide.back = "000000";
    slide.color = "FFFFFF";
    pptx.save("\uAC00\uC0AC\uBAA8\uC74C_20190619");
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "download ppt");
};

/* harmony default export */ __webpack_exports__["default"] = (PPT);

/***/ })

})
//# sourceMappingURL=index.js.bbfff15f15c33c1a6afe.hot-update.js.map