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


var pptx = new pptxgenjs__WEBPACK_IMPORTED_MODULE_1___default.a();

var PPT = function PPT() {
  var save = function save() {
    pptx.setAuthor("Hello world");
    pptx.setCompany("S.T.A.R");
    pptx.setRevision("15");
    pptx.setSubject("Ya-Ho");
    pptx.setTitle("Hello world Title");
    pptx.setLayout({
      name: "A3",
      width: 16.5,
      height: 11.7
    });
    pptx.save("Hello");
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "download pptx");
};

/* harmony default export */ __webpack_exports__["default"] = (PPT);

/***/ })

})
//# sourceMappingURL=index.js.ff1109c67efbf1f2687b.hot-update.js.map