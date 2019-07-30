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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/handler */ "./util/handler.js");



var _jsxFileName = "C:\\React\\praise-project\\components\\CheckView.js";






var CheckView = function CheckView(_ref) {
  var data = _ref.data,
      id = _ref.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Object(_util_handler__WEBPACK_IMPORTED_MODULE_7__["contentsHandler"])(data)),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      lists = _useState2[0],
      setLists = _useState2[1];

  var openView;

  var open_view = function open_view() {
    if (openView) openView.close();
    openView = open("./lyrics_view?id=" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(id) + "&init=" + document.getElementsByClassName("active")[0].id.replace(/#/g, "%23"), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=1080,height=800");

    window.communityMove = function (idx) {
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

      document.getElementById(idx).classList.add("active");
    };
  };

  var change_data = function change_data(e) {
    // class에서 active 제거 후 다시 넣어주기
    var cols = document.getElementsByClassName("col");
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(cols), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;
        item.classList.remove("active");
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    document.getElementById(e.target.id).classList.add("active");

    if (openView && openView.community) {
      openView.community(e.target.id);
    }
  };

  var downloadPpt = function downloadPpt() {
    Object(_util_handler__WEBPACK_IMPORTED_MODULE_7__["onDownloadPpt"])(Object(_util_handler__WEBPACK_IMPORTED_MODULE_7__["arrayHandler"])(lists));
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Check View Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2836200749" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      marginTop: "10px"
    },
    className: "jsx-2836200749" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/lyrics_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    className: "jsx-2836200749" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "jsx-2836200749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "HOME"), " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "jsx-2836200749" + " " + "fas fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: open_view,
    className: "jsx-2836200749" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "jsx-2836200749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "SHOW VIEW"), " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "jsx-2836200749" + " " + "fas fa-search-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: downloadPpt,
    className: "jsx-2836200749" + " " + "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "jsx-2836200749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "DOWNLOAD PPT"), " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "jsx-2836200749" + " " + "fas fa-download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2836200749" + " " + "table-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, lists.map(function (e, idx) {
    {
      return e.contents.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          key: i,
          id: idx + "#" + i + "#" + e.id,
          onClick: change_data,
          className: "jsx-2836200749" + " " + ((idx === 0 && i === 0 ? "col active" : "col") || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          key: i,
          id: idx + "#" + i + "#" + e.id,
          className: "jsx-2836200749" + " " + "lyr-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, e.title), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          id: idx + "#" + i + "#" + e.id,
          className: "jsx-2836200749" + " " + "lyr-contents",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, item.split("\n").map(function (it, i2) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
            key: i2,
            id: idx + "#" + i + "#" + e.id,
            className: "jsx-2836200749",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, it, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
            className: "jsx-2836200749",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }));
        })));
      });
    }
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2836200749",
    __self: this
  }, ".table-container.jsx-2836200749{text-align:center;width:100%;}.col.jsx-2836200749{background:black;color:white;text-align:center;margin:10px 10px 0px 0px;width:20em;height:300px;cursor:pointer;float:left;}.lyr-title.jsx-2836200749{text-align:left;margin:10px 0px 10px 5px;font-size:7px;}.lyr-contents.jsx-2836200749{font-size:13px;}.col.jsx-2836200749:hover{border:solid 5px yellow;}.active.jsx-2836200749{border:solid 5px yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR1MsQUFHK0IsQUFJRCxBQVVELEFBS0QsQUFHUyxBQUdBLGVBTDFCLENBTDJCLENBVmIsQ0FKRCxNQXNCYixBQUdBLEtBeEJBLEFBSW9CLFlBVUosTUFUVyxRQVUzQixpQkFUYSxXQUNFLGFBQ0UsZUFDSixXQUNiIiwiZmlsZSI6IkM6XFxSZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNvbnRlbnRzSGFuZGxlciwgb25Eb3dubG9hZFBwdCwgYXJyYXlIYW5kbGVyIH0gZnJvbSBcIi4uL3V0aWwvaGFuZGxlclwiO1xyXG5cclxuY29uc3QgQ2hlY2tWaWV3ID0gKHsgZGF0YSwgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IFtsaXN0cywgc2V0TGlzdHNdID0gdXNlU3RhdGUoY29udGVudHNIYW5kbGVyKGRhdGEpKTtcclxuICBsZXQgb3BlblZpZXc7XHJcbiAgY29uc3Qgb3Blbl92aWV3ID0gKCkgPT4ge1xyXG4gICAgaWYgKG9wZW5WaWV3KSBvcGVuVmlldy5jbG9zZSgpO1xyXG4gICAgb3BlblZpZXcgPSBvcGVuKFxyXG4gICAgICBcIi4vbHlyaWNzX3ZpZXc/aWQ9XCIgK1xyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGlkKSArXHJcbiAgICAgICAgXCImaW5pdD1cIiArXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZVwiKVswXS5pZC5yZXBsYWNlKC8jL2csIFwiJTIzXCIpLFxyXG4gICAgICBcIl9ibGFua1wiLFxyXG4gICAgICBcInRvb2xiYXI9eWVzLHNjcm9sbGJhcnM9eWVzLHJlc2l6YWJsZT15ZXMsd2lkdGg9MTA4MCxoZWlnaHQ9ODAwXCJcclxuICAgICk7XHJcbiAgICB3aW5kb3cuY29tbXVuaXR5TW92ZSA9IGZ1bmN0aW9uKGlkeCkge1xyXG4gICAgICBsZXQgY29scyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb2xcIik7XHJcbiAgICAgIGZvciAobGV0IGl0ZW0gb2YgY29scykge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZHgpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgY29uc3QgY2hhbmdlX2RhdGEgPSBlID0+IHtcclxuICAgIC8vIGNsYXNz7JeQ7IScIGFjdGl2ZSDsoJzqsbAg7ZuEIOuLpOyLnCDrhKPslrTso7zquLBcclxuICAgIGxldCBjb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbFwiKTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgY29scykge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC5pZCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGlmIChvcGVuVmlldyAmJiBvcGVuVmlldy5jb21tdW5pdHkpIHtcclxuICAgICAgb3BlblZpZXcuY29tbXVuaXR5KGUudGFyZ2V0LmlkKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGRvd25sb2FkUHB0ID0gKCkgPT4ge1xyXG4gICAgb25Eb3dubG9hZFBwdChhcnJheUhhbmRsZXIobGlzdHMpKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiQ2hlY2sgVmlldyBQYWdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbHlyaWNzX2xpc3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5IT01FPC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e29wZW5fdmlld30+XHJcbiAgICAgICAgICAgIDxzcGFuPlNIT1cgVklFVzwvc3Bhbj5cclxuICAgICAgICAgICAge2AgYH1cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaC1wbHVzXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAge2AgYH1cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXtkb3dubG9hZFBwdH0+XHJcbiAgICAgICAgICAgIDxzcGFuPkRPV05MT0FEIFBQVDwvc3Bhbj5cclxuICAgICAgICAgICAge2AgYH1cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRvd25sb2FkXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7bGlzdHMubWFwKChlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJldHVybiBlLmNvbnRlbnRzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aWR4ID09PSAwICYmIGkgPT09IDAgPyBcImNvbCBhY3RpdmVcIiA6IFwiY29sXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpZHggKyBcIiNcIiArIGkgKyBcIiNcIiArIGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlX2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJseXItdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkeCArIFwiI1wiICsgaSArIFwiI1wiICsgZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17aWR4ICsgXCIjXCIgKyBpICsgXCIjXCIgKyBlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibHlyLWNvbnRlbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zcGxpdChcIlxcblwiKS5tYXAoKGl0LCBpMikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2kyfSBpZD17aWR4ICsgXCIjXCIgKyBpICsgXCIjXCIgKyBlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5seXItdGl0bGUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDdweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5seXItY29udGVudHMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29sOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCA1cHggeWVsbG93O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgNXB4IHllbGxvdztcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrVmlldztcclxuIl19 */\n/*@ sourceURL=C:\\React\\praise-project\\components\\CheckView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckView);

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.065c424fb0d9903919ae.hot-update.js.map