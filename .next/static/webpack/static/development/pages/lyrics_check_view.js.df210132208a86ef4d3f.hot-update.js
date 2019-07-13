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
  var openView;

  var open_view = function open_view() {
    openView = open("./lyrics_view?id=" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(id), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=1080,height=800");
    var html = "\n      <script>\n        function a(){\n          alert(\"Hello A\");\n        }\n      </script>\n    ";
    console.log(openView.body);
  };

  var loadScript = function loadScript(src) {
    var tag = document.createElement("script");
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName("body")[0].appendChild(tag);
  };

  var change_data = function change_data(e) {
    var id = e.target.id;
    openView.a(); // class에서 active 제거 후 다시 넣어주기

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
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371871912" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      marginTop: "10px"
    },
    className: "jsx-3371871912" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/lyrics_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "jsx-3371871912" + " " + "btn btn-info",
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
  }, "HOME"), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "jsx-3371871912" + " " + "fas fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: open_view,
    className: "jsx-3371871912" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3371871912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "SHOW VIEW"), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "jsx-3371871912" + " " + "fas fa-search-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "jsx-3371871912" + " " + "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3371871912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "DOWNLOAD PPT"), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "jsx-3371871912" + " " + "fas fa-download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371871912" + " " + "table-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
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
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          key: i,
          id: idx + "#" + i + "#" + e.id,
          className: "jsx-3371871912" + " " + "lyr-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, e.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          id: idx + "#" + i + "#" + e.id,
          className: "jsx-3371871912",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, item.split("\n").map(function (it, i2) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
            key: i2,
            id: idx + "#" + i + "#" + e.id,
            className: "jsx-3371871912",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          }, it, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
            className: "jsx-3371871912",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }));
        })));
      });
    }
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3371871912",
    __self: this
  }, ".table-container.jsx-3371871912{text-align:center;width:100%;}.col.jsx-3371871912{background:black;color:white;text-align:center;margin:10px 10px 0px 0px;width:20em;height:300px;cursor:pointer;float:left;}.lyr-title.jsx-3371871912{text-align:left;margin:10px 0px 10px 5px;font-size:10px;}.col.jsx-3371871912:hover{border:solid 5px yellow;}.active.jsx-3371871912{border:solid 5px yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR1MsQUFHK0IsQUFJRCxBQVVELEFBS1EsQUFHQSxnQkFQQyxDQVZiLENBSkQsTUFtQmIsQUFHQSxLQXJCQSxBQUlvQixZQVVILE1BVFUsU0FVM0IsZ0JBVGEsV0FDRSxhQUNFLGVBQ0osV0FDYiIsImZpbGUiOiJDOlxcVXNlcnNcXHdrd2syXFxPbmVEcml2ZVxc67CU7YOVIO2ZlOuptFxccmVhY3RcXHByYWlzZS1wcm9qZWN0XFxjb21wb25lbnRzXFxDaGVja1ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgY29udGVudHNIYW5kbGVyIH0gZnJvbSBcIi4uL3V0aWwvaGFuZGxlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY2hhbmdlRGF0YSB9IGZyb20gXCIuLi9tb2R1bGVzL2x5cmljc1wiO1xyXG5cclxuY29uc3QgQ2hlY2tWaWV3ID0gKHsgZGF0YSwgaWQgfSkgPT4ge1xyXG4gIGxldCBvcGVuVmlldztcclxuICBjb25zdCBvcGVuX3ZpZXcgPSAoKSA9PiB7XHJcbiAgICBvcGVuVmlldyA9IG9wZW4oXHJcbiAgICAgIFwiLi9seXJpY3Nfdmlldz9pZD1cIiArIEpTT04uc3RyaW5naWZ5KGlkKSxcclxuICAgICAgXCJfYmxhbmtcIixcclxuICAgICAgXCJ0b29sYmFyPXllcyxzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHdpZHRoPTEwODAsaGVpZ2h0PTgwMFwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgaHRtbCA9IGBcclxuICAgICAgPHNjcmlwdD5cclxuICAgICAgICBmdW5jdGlvbiBhKCl7XHJcbiAgICAgICAgICBhbGVydChcIkhlbGxvIEFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICA8L3NjcmlwdD5cclxuICAgIGA7XHJcbiAgICBjb25zb2xlLmxvZyhvcGVuVmlldy5ib2R5KTtcclxuICB9O1xyXG4gIGNvbnN0IGxvYWRTY3JpcHQgPSBzcmMgPT4ge1xyXG4gICAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICB0YWcuYXN5bmMgPSBmYWxzZTtcclxuICAgIHRhZy5zcmMgPSBzcmM7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQodGFnKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZV9kYXRhID0gZSA9PiB7XHJcbiAgICBsZXQgaWQgPSBlLnRhcmdldC5pZDtcclxuICAgIG9wZW5WaWV3LmEoKTtcclxuICAgIC8vIGNsYXNz7JeQ7IScIGFjdGl2ZSDsoJzqsbAg7ZuEIOuLpOyLnCDrhKPslrTso7zquLBcclxuICAgIGxldCBjb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbFwiKTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgY29scykge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC5pZCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIkNoZWNrIFZpZXcgUGFnZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2x5cmljc19saXN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+SE9NRTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXtvcGVuX3ZpZXd9PlxyXG4gICAgICAgICAgICA8c3Bhbj5TSE9XIFZJRVc8L3NwYW4+XHJcbiAgICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2gtcGx1c1wiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkRPV05MT0FEIFBQVDwvc3Bhbj5cclxuICAgICAgICAgICAge2AgYH1cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRvd25sb2FkXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7Y29udGVudHNIYW5kbGVyKGRhdGEpLm1hcCgoZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZS5jb250ZW50cy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lkeCA9PT0gMCAmJiBpID09PSAwID8gXCJjb2wgYWN0aXZlXCIgOiBcImNvbFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICBpZD17aWR4ICsgXCIjXCIgKyBpICsgXCIjXCIgKyBlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NoYW5nZV9kYXRhfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibHlyLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZHggKyBcIiNcIiArIGkgKyBcIiNcIiArIGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2UudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17aWR4ICsgXCIjXCIgKyBpICsgXCIjXCIgKyBlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnNwbGl0KFwiXFxuXCIpLm1hcCgoaXQsIGkyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aTJ9IGlkPXtpZHggKyBcIiNcIiArIGkgKyBcIiNcIiArIGUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAudGFibGUtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb2wge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMGVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmx5ci10aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHggMTBweCA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb2w6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDVweCB5ZWxsb3c7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCA1cHggeWVsbG93O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tWaWV3O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\CheckView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckView);

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.df210132208a86ef4d3f.hot-update.js.map