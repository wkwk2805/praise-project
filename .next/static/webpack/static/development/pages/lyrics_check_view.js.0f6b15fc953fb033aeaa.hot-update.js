webpackHotUpdate("static\\development\\pages\\lyrics_check_view.js",{

/***/ "./util/handler.js":
/*!*************************!*\
  !*** ./util/handler.js ***!
  \*************************/
/*! exports provided: contentsHandler, onDownloadPpt, arrayHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentsHandler", function() { return contentsHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDownloadPpt", function() { return onDownloadPpt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayHandler", function() { return arrayHandler; });
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pptxgenjs */ "./node_modules/pptxgenjs/dist/pptxgen.min.js");
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pptxgenjs__WEBPACK_IMPORTED_MODULE_0__);
//import

var contentsHandler = function contentsHandler(data) {
  var l_id = data.map(function (e) {
    return e.l_id;
  });
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
      id: l_id[i],
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

var onDownloadPpt = function onDownloadPpt(data) {
  // data 모양새는 [{id:'0#0#0', title:'요게뱃의 노래', contents:"동그란 눈으로\n엄말 보고 있는"}]
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
var arrayHandler = function arrayHandler(lyrics) {
  var arr = [];
  lyrics.forEach(function (item, i) {
    var arr2 = item.contents;
    arr2.forEach(function (item2, i2) {
      var obj = {
        title: item.title,
        id: i + "#" + i2 + "#" + item.id,
        contents: item2
      };
      arr.push(obj);
    });
  });
  return arr;
};

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.0f6b15fc953fb033aeaa.hot-update.js.map