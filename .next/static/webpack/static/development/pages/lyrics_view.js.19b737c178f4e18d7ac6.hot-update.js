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

var _jsxFileName = "C:\\React\\praise-project\\components\\View.js";



var styleSheet = {
  container: {
    background: "black",
    height: "800px",
    color: "white",
    textAlign: "center",
    fontSize: "3.5em"
  },
  title: {
    fontSize: "1em",
    textAlign: "left",
    background: "black",
    color: "white",
    padding: "15px 0px 65px 15px"
  }
};

var View = function View(_ref) {
  var data = _ref.data,
      initData = _ref.initData;
  var targetRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_util_handler__WEBPACK_IMPORTED_MODULE_3__["contentsHandler"])(data)),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      lyrics = _useState2[0],
      setLyrics = _useState2[1];

  var ls = Object(_util_handler__WEBPACK_IMPORTED_MODULE_3__["arrayHandler"])(lyrics);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(ls.filter(function (e) {
    return e.id === initData;
  })[0]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    keyDownHandler();

    window.community = function (id) {
      setList(ls.filter(function (e) {
        return e.id === id;
      })[0]);
    };
  }, []);

  var keyDownHandler = function keyDownHandler() {
    window.addEventListener("keydown", function (e) {
      e.keyCode !== 122 && e.preventDefault();

      switch (e.keyCode) {
        case 38:
          // 위
          backMove();
          break;

        case 40:
          // 아래
          frontMove();
          break;

        case 37:
          // 왼
          backMove();
          break;

        case 39:
          // 오
          frontMove();
          break;

        case 13:
          //엔터
          frontMove();
          break;

        case 32:
          //스페이스
          frontMove();
          break;

        case 27:
          // esc
          window.close();
          break;

        default:
          break;
      }
    });
  };

  var frontMove = function frontMove() {
    var idxs = ls.map(function (e, i) {
      if (e.id === targetRef.current.id) {
        return i;
      }
    });
    var idx = idxs.filter(function (e) {
      return e !== undefined;
    })[0];

    if (list && list.title && list.id && idx + 1 !== ls.length) {
      var li = ls[idx + 1];
      setList(li);
      window.opener.communityMove(li.id);
    } else {
      alert("마지막 페이지 입니다.");
    }
  };

  var backMove = function backMove() {
    var idxs = ls.map(function (e, i) {
      if (e.id === targetRef.current.id) {
        return i;
      }
    });
    var idx = idxs.filter(function (e) {
      return e !== undefined;
    })[0];

    if (list && list.title && list.id && idx - 1 !== -1) {
      var li = ls[idx - 1];
      setList(li);
      window.opener.communityMove(li.id);
    } else {
      alert("처음 페이지 입니다.");
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "View",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styleSheet.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, list.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styleSheet.container,
    id: list.id,
    ref: targetRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, (list.contents + "").split("\n").map(function (it, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, it, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ })

})
//# sourceMappingURL=lyrics_view.js.19b737c178f4e18d7ac6.hot-update.js.map