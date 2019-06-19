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



var PPT = function PPT(obj) {
  var pptx = new pptxgenjs__WEBPACK_IMPORTED_MODULE_1___default.a();
  pptx.setTitle("Hello world Title");
  pptx.setLayout({
    name: "A3",
    width: 16.5,
    height: 11.7
  });
  var slide = pptx.addNewSlide("MASTER", {
    bkgd: "black",
    color: "white"
  });
  slide.addText("Hello", {
    x: 0.5,
    y: 0.7,
    w: 3,
    color: "white",
    fontSize: 64
  });
  slide.addText("Hello", {
    x: 2.7,
    y: 1.0,
    w: 5,
    color: "white",
    fontSize: 90
  });
  slide.pptx.save("\uAC00\uC0AC\uBAA8\uC74C_20190619");
};

/* harmony default export */ __webpack_exports__["default"] = (PPT);

/***/ })

})
//# sourceMappingURL=index.js.67edad0564d5ea22609e.hot-update.js.map