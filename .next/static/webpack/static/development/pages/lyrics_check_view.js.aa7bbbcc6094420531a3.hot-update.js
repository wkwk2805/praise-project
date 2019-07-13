webpackHotUpdate("static\\development\\pages\\lyrics_check_view.js",{

/***/ "./components/CheckView.js":
/*!*********************************!*\
  !*** ./components/CheckView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/handler */ "./util/handler.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_lyrics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/lyrics */ "./modules/lyrics.js");


var _jsxFileName = "C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\CheckView.js";








var CheckView = function CheckView(_ref) {
  var data = _ref.data,
      id = _ref.id;

  var open_view = function open_view() {
    var a = open("./lyrics_view?id=" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(id), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=1080,height=800");

    a.hello = function () {
      this.alert("Hello world");
    };
  };

  var change_data = function change_data(e) {
    var id = e.target.id; // class에서 active 제거 후 다시 넣어주기

    var cols = document.getElementsByClassName("col");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(cols), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        item.classList.remove("active");
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    document.getElementById(e.target.id).classList.add("active");
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Check View Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371871912" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      marginTop: "10px"
    },
    className: "jsx-3371871912" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/lyrics_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "jsx-3371871912" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3371871912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "HOME"), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "jsx-3371871912" + " " + "fas fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: open_view,
    className: "jsx-3371871912" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3371871912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "SHOW VIEW"), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "jsx-3371871912" + " " + "fas fa-search-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "jsx-3371871912" + " " + "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3371871912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "DOWNLOAD PPT"), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "jsx-3371871912" + " " + "fas fa-download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371871912" + " " + "table-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, Object(_util_handler__WEBPACK_IMPORTED_MODULE_6__["contentsHandler"])(data).map(function (e, idx) {
    {
      return e.contents.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          key: i,
          id: idx + "#" + i + "#" + e.id,
          onClick: change_data,
          className: "jsx-3371871912" + " " + ((idx === 0 && i === 0 ? "col active" : "col") || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          key: i,
          id: idx + "#" + i + "#" + e.id,
          className: "jsx-3371871912" + " " + "lyr-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, e.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          id: idx + "#" + i + "#" + e.id,
          className: "jsx-3371871912",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, item.split("\n").map(function (it, i2) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
            key: i2,
            id: idx + "#" + i + "#" + e.id,
            className: "jsx-3371871912",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, it, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
            className: "jsx-3371871912",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          }));
        })));
      });
    }
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3371871912",
    __self: this
  }, ".table-container.jsx-3371871912{text-align:center;width:100%;}.col.jsx-3371871912{background:black;color:white;text-align:center;margin:10px 10px 0px 0px;width:20em;height:300px;cursor:pointer;float:left;}.lyr-title.jsx-3371871912{text-align:left;margin:10px 0px 10px 5px;font-size:10px;}.col.jsx-3371871912:hover{border:solid 5px yellow;}.active.jsx-3371871912{border:solid 5px yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRlMsQUFHK0IsQUFJRCxBQVVELEFBS1EsQUFHQSxnQkFQQyxDQVZiLENBSkQsTUFtQmIsQUFHQSxLQXJCQSxBQUlvQixZQVVILE1BVFUsU0FVM0IsZ0JBVGEsV0FDRSxhQUNFLGVBQ0osV0FDYiIsImZpbGUiOiJDOlxcVXNlcnNcXHdrd2syXFxPbmVEcml2ZVxc67CU7YOVIO2ZlOuptFxccmVhY3RcXHByYWlzZS1wcm9qZWN0XFxjb21wb25lbnRzXFxDaGVja1ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgY29udGVudHNIYW5kbGVyIH0gZnJvbSBcIi4uL3V0aWwvaGFuZGxlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY2hhbmdlRGF0YSB9IGZyb20gXCIuLi9tb2R1bGVzL2x5cmljc1wiO1xyXG5cclxuY29uc3QgQ2hlY2tWaWV3ID0gKHsgZGF0YSwgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IG9wZW5fdmlldyA9ICgpID0+IHtcclxuICAgIGxldCBhID0gb3BlbihcclxuICAgICAgXCIuL2x5cmljc192aWV3P2lkPVwiICsgSlNPTi5zdHJpbmdpZnkoaWQpLFxyXG4gICAgICBcIl9ibGFua1wiLFxyXG4gICAgICBcInRvb2xiYXI9eWVzLHNjcm9sbGJhcnM9eWVzLHJlc2l6YWJsZT15ZXMsd2lkdGg9MTA4MCxoZWlnaHQ9ODAwXCJcclxuICAgICk7XHJcbiAgICBhLmhlbGxvID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuYWxlcnQoXCJIZWxsbyB3b3JsZFwiKTtcclxuICAgIH07XHJcbiAgfTtcclxuICBjb25zdCBjaGFuZ2VfZGF0YSA9IGUgPT4ge1xyXG4gICAgbGV0IGlkID0gZS50YXJnZXQuaWQ7XHJcbiAgICAvLyBjbGFzc+yXkOyEnCBhY3RpdmUg7KCc6rGwIO2bhCDri6Tsi5wg64Sj7Ja07KO86riwXHJcbiAgICBsZXQgY29scyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb2xcIik7XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGNvbHMpIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS50YXJnZXQuaWQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCJDaGVjayBWaWV3IFBhZ2VcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9seXJpY3NfbGlzdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkhPTUU8L3NwYW4+XHJcbiAgICAgICAgICAgICAge2AgYH1cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAge2AgYH1cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17b3Blbl92aWV3fT5cclxuICAgICAgICAgICAgPHNwYW4+U0hPVyBWSUVXPC9zcGFuPlxyXG4gICAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoLXBsdXNcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5ET1dOTE9BRCBQUFQ8L3NwYW4+XHJcbiAgICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kb3dubG9hZFwiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge2NvbnRlbnRzSGFuZGxlcihkYXRhKS5tYXAoKGUsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGUuY29udGVudHMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpZHggPT09IDAgJiYgaSA9PT0gMCA/IFwiY29sIGFjdGl2ZVwiIDogXCJjb2xcIn1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkeCArIFwiI1wiICsgaSArIFwiI1wiICsgZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGFuZ2VfZGF0YX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImx5ci10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17aWR4ICsgXCIjXCIgKyBpICsgXCIjXCIgKyBlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2lkeCArIFwiI1wiICsgaSArIFwiI1wiICsgZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zcGxpdChcIlxcblwiKS5tYXAoKGl0LCBpMikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2kyfSBpZD17aWR4ICsgXCIjXCIgKyBpICsgXCIjXCIgKyBlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5seXItdGl0bGUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29sOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCA1cHggeWVsbG93O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgNXB4IHllbGxvdztcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrVmlldztcclxuIl19 */\n/*@ sourceURL=C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\CheckView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckView);

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.aa7bbbcc6094420531a3.hot-update.js.map