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


var download_ppt = function download_ppt(obj) {
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

/* harmony default export */ __webpack_exports__["default"] = (download_ppt);

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.2b50be44008c97d08896.hot-update.js.map