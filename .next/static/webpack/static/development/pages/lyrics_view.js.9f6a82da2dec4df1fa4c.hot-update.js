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
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);

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
  var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:3001");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_util_handler__WEBPACK_IMPORTED_MODULE_3__["contentsHandler"])(data)),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      lyrics = _useState2[0],
      setLyrics = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      mainNum = _useState4[0],
      setMainNum = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      subNum = _useState6[0],
      setSubNum = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      list = _useState8[0],
      setList = _useState8[1];

  socket.on("lyrics_info", function (info) {
    if (lyrics[info.main * 1].id * 1 === info.id * 1) {}
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setList(Object(_util_handler__WEBPACK_IMPORTED_MODULE_3__["arrayHandler"])(lyrics)[0]);
    test();
  }, []);

  var test = function test() {
    window.addEventListener("keydown", function (e) {
      switch (e.keyCode) {
        case 38:
          // 위
          setList(lyrics[0].contents[1]);
          break;

        case 40:
          // 아래
          break;

        case 37:
          // 왼
          break;

        case 39:
          // 오
          break;

        case 13:
          //엔터
          break;

        case 32:
          //스페이스
          break;

        case 27:
          // esc
          break;

        default:
          break;
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "View",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styleSheet.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, console.log(list.contents)));
};

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ })

})
//# sourceMappingURL=lyrics_view.js.9f6a82da2dec4df1fa4c.hot-update.js.map