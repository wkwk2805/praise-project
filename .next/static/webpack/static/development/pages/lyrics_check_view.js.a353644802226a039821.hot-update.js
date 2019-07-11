webpackHotUpdate("static\\development\\pages\\lyrics_check_view.js",{

/***/ "./util/handler.js":
/*!*************************!*\
  !*** ./util/handler.js ***!
  \*************************/
/*! exports provided: contentsHandler, onDownloadPpt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentsHandler", function() { return contentsHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDownloadPpt", function() { return onDownloadPpt; });
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pptxgenjs */ "./node_modules/pptxgenjs/dist/pptxgen.min.js");
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pptxgenjs__WEBPACK_IMPORTED_MODULE_0__);
//import

var contentsHandler = function contentsHandler(data) {
  var title = data.map(function (e) {
    return e.title;
  });
  var contents = data.map(function (e) {
    return e.contents;
  });
  var arrayFinal = [];
  contents.forEach(function (item, i) {
    var array = [];
    var statementArr = item.map(function (e) {
      return e.statement;
    });
    statementArr.forEach(function (item2, i2) {
      var arr = [];
      var str = "";
      var splitArr = item2.split("\n");
      splitArr.forEach(function (item3, i3) {
        str += item3 + "\n";

        if (i3 % 2 !== 0) {
          arr.push(str.substring(0, str.length - 1));
          str = "";
        }
      });
      array.push(arr);
      arr = [];
    });
    var obj = {
      title: title[i],
      contents: array
    };
    arrayFinal.push(obj);
  });
  arrayFinal.forEach(function (item) {
    var arr = [];
    item.contents.forEach(function (item2) {
      arr = arr.concat(item2);
    });
    item.contents = arr;
  });
  return arrayFinal;
}; // PPT 다운로드 함수

var onDownloadPpt = function onDownloadPpt() {
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
  return "다운로드 성공";
};

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.a353644802226a039821.hot-update.js.map