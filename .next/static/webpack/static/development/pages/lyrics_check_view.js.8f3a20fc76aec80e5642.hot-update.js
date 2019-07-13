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
    open("./lyrics_view?id=" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(id), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=1080,height=800");
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
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371871912" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      marginTop: "10px"
    },
    className: "jsx-3371871912" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/lyrics_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "jsx-3371871912" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3371871912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "HOME"), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "jsx-3371871912" + " " + "fas fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/lyrics_view?id=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(id)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "jsx-3371871912" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3371871912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "SHOW VIEW"), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "jsx-3371871912" + " " + "fas fa-search-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "jsx-3371871912" + " " + "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3371871912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "DOWNLOAD PPT"), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "jsx-3371871912" + " " + "fas fa-download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371871912" + " " + "table-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
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
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          key: i,
          id: idx + "#" + i + "#" + e.id,
          className: "jsx-3371871912" + " " + "lyr-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, e.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          id: idx + "#" + i + "#" + e.id,
          className: "jsx-3371871912",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, item.split("\n").map(function (it, i2) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
            key: i2,
            id: idx + "#" + i + "#" + e.id,
            className: "jsx-3371871912",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, it, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
            className: "jsx-3371871912",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }));
        })));
      });
    }
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3371871912",
    __self: this
  }, ".table-container.jsx-3371871912{text-align:center;width:100%;}.col.jsx-3371871912{background:black;color:white;text-align:center;margin:10px 10px 0px 0px;width:20em;height:300px;cursor:pointer;float:left;}.lyr-title.jsx-3371871912{text-align:left;margin:10px 0px 10px 5px;font-size:10px;}.col.jsx-3371871912:hover{border:solid 5px yellow;}.active.jsx-3371871912{border:solid 5px yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRlMsQUFHK0IsQUFJRCxBQVVELEFBS1EsQUFHQSxnQkFQQyxDQVZiLENBSkQsTUFtQmIsQUFHQSxLQXJCQSxBQUlvQixZQVVILE1BVFUsU0FVM0IsZ0JBVGEsV0FDRSxhQUNFLGVBQ0osV0FDYiIsImZpbGUiOiJDOlxcVXNlcnNcXHdrd2syXFxPbmVEcml2ZVxc67CU7YOVIO2ZlOuptFxccmVhY3RcXHByYWlzZS1wcm9qZWN0XFxjb21wb25lbnRzXFxDaGVja1ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgY29udGVudHNIYW5kbGVyIH0gZnJvbSBcIi4uL3V0aWwvaGFuZGxlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY2hhbmdlRGF0YSB9IGZyb20gXCIuLi9tb2R1bGVzL2x5cmljc1wiO1xyXG5cclxuY29uc3QgQ2hlY2tWaWV3ID0gKHsgZGF0YSwgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IG9wZW5fdmlldyA9ICgpID0+IHtcclxuICAgIG9wZW4oXHJcbiAgICAgIFwiLi9seXJpY3Nfdmlldz9pZD1cIiArIEpTT04uc3RyaW5naWZ5KGlkKSxcclxuICAgICAgXCJfYmxhbmtcIixcclxuICAgICAgXCJ0b29sYmFyPXllcyxzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHdpZHRoPTEwODAsaGVpZ2h0PTgwMFwiXHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgY2hhbmdlX2RhdGEgPSBlID0+IHtcclxuICAgIGxldCBpZCA9IGUudGFyZ2V0LmlkO1xyXG4gICAgLy8gY2xhc3Psl5DshJwgYWN0aXZlIOygnOqxsCDtm4Qg64uk7IucIOuEo+yWtOyjvOq4sFxyXG4gICAgbGV0IGNvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29sXCIpO1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBjb2xzKSB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUudGFyZ2V0LmlkKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiQ2hlY2sgVmlldyBQYWdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbHlyaWNzX2xpc3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5IT01FPC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL2x5cmljc192aWV3P2lkPSR7SlNPTi5zdHJpbmdpZnkoaWQpfWB9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlNIT1cgVklFVzwvc3Bhbj5cclxuICAgICAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2gtcGx1c1wiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAge2AgYH1cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+RE9XTkxPQUQgUFBUPC9zcGFuPlxyXG4gICAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZG93bmxvYWRcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgIHtjb250ZW50c0hhbmRsZXIoZGF0YSkubWFwKChlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJldHVybiBlLmNvbnRlbnRzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aWR4ID09PSAwICYmIGkgPT09IDAgPyBcImNvbCBhY3RpdmVcIiA6IFwiY29sXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpZHggKyBcIiNcIiArIGkgKyBcIiNcIiArIGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlX2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJseXItdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkeCArIFwiI1wiICsgaSArIFwiI1wiICsgZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtpZHggKyBcIiNcIiArIGkgKyBcIiNcIiArIGUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3BsaXQoXCJcXG5cIikubWFwKChpdCwgaTIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpMn0gaWQ9e2lkeCArIFwiI1wiICsgaSArIFwiI1wiICsgZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubHlyLXRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgNXB4IHllbGxvdztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDVweCB5ZWxsb3c7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja1ZpZXc7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\CheckView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckView);

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.8f3a20fc76aec80e5642.hot-update.js.map