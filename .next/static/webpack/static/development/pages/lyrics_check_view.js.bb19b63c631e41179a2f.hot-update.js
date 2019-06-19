webpackHotUpdate("static\\development\\pages\\lyrics_check_view.js",{

/***/ "./util/download_ppt.js":
/*!******************************!*\
  !*** ./util/download_ppt.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pptxgenjs */ "./node_modules/pptxgenjs/dist/pptxgen.min.js");
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pptxgenjs__WEBPACK_IMPORTED_MODULE_0__);


var PPT = function PPT(obj) {
  var pptx = new pptxgenjs__WEBPACK_IMPORTED_MODULE_0___default.a();
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

/* harmony default export */ __webpack_exports__["default"] = (PPT);

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.bb19b63c631e41179a2f.hot-update.js.map