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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      list = _useState8[0],
      setList = _useState8[1];

  socket.on("lyrics_info", function (info) {
    if (lyrics[info.main * 1].id * 1 === info.id * 1) {
      setList(lyrics[info.main * 1].contents[info.sub * 1]);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setList(lyrics[0].contents[0]);
    arrayHandler();
    test();
  }, []);

  var arrayHandler = function arrayHandler() {
    console.log(lyrics);
    var arr = [];
    lyrics.forEach(function (item, i) {
      var arr2 = item.contents;
      arr2.forEach(function (item2, i2) {
        var obj = {
          title: item.title,
          id: i + "#" + i2 + "#" + id,
          contents: item2
        };
        arr.push(obj);
      });
    });
    console.log(arr);
  };

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
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styleSheet.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, list.split("\n").map(function (it, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, it, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ })

})
//# sourceMappingURL=lyrics_view.js.9cbc547e0714a0163e22.hot-update.js.map