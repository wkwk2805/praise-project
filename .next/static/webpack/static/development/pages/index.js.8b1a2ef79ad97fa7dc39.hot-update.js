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



var PPT = function PPT() {
  var save = function save() {
    var pptx = new pptxgenjs__WEBPACK_IMPORTED_MODULE_1___default.a();
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
    pptx.setRTL(true);
    pptx.addNewSlide("MASTER");
    pptx.save("Hello");
  };
};

/* harmony default export */ __webpack_exports__["default"] = (PPT);

/***/ })

})
//# sourceMappingURL=index.js.8b1a2ef79ad97fa7dc39.hot-update.js.map