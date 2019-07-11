webpackHotUpdate("static\\development\\pages\\lyrics_check_view.js",{

/***/ "./components/CheckView.js":
/*!*********************************!*\
  !*** ./components/CheckView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/handler */ "./util/handler.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_lyrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/lyrics */ "./modules/lyrics.js");

var _jsxFileName = "C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\CheckView.js";








var CheckView = function CheckView(_ref) {
  var data = _ref.data,
      id = _ref.id;
  var lyricsData = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.lyrics;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var open_view = function open_view() {
    open("./lyrics_view?id=" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(id), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=1080,height=800");
  };

  var change_data = function change_data(e) {
    e.target.className += " active";
    document.getElementsByClassName("col").className = "col";
    dispatch(Object(_modules_lyrics__WEBPACK_IMPORTED_MODULE_7__["changeData"])(e));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(lyricsData);
  }, [lyricsData]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Check View Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3371871912" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      marginTop: "10px"
    },
    className: "jsx-3371871912" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/lyrics_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "jsx-3371871912" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3371871912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "HOME"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "jsx-3371871912" + " " + "fas fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: open_view,
    className: "jsx-3371871912" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3371871912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "SHOW VIEW"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "jsx-3371871912" + " " + "fas fa-search-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "jsx-3371871912" + " " + "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3371871912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "DOWNLOAD PPT"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "jsx-3371871912" + " " + "fas fa-download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3371871912" + " " + "table-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, Object(_util_handler__WEBPACK_IMPORTED_MODULE_5__["contentsHandler"])(data).map(function (e, idx) {
    {
      return e.contents.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: i,
          id: idx + "#" + i,
          onClick: change_data,
          className: "jsx-3371871912" + " " + "col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: i,
          id: idx + "#" + i,
          className: "jsx-3371871912" + " " + "lyr-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, e.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          id: idx + "#" + i,
          className: "jsx-3371871912",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, item.split("\n").map(function (it, i2) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            key: i2,
            id: idx + "#" + i,
            className: "jsx-3371871912",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, it, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
            className: "jsx-3371871912",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          }));
        })));
      });
    }
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3371871912",
    __self: this
  }, ".table-container.jsx-3371871912{text-align:center;width:100%;}.col.jsx-3371871912{background:black;color:white;text-align:center;margin:10px 10px 0px 0px;width:20em;height:300px;cursor:pointer;float:left;}.lyr-title.jsx-3371871912{text-align:left;margin:10px 0px 10px 5px;font-size:10px;}.col.jsx-3371871912:hover{border:solid 5px yellow;}.active.jsx-3371871912{border:solid 5px yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRVMsQUFHK0IsQUFJRCxBQVVELEFBS1EsQUFHQSxnQkFQQyxDQVZiLENBSkQsTUFtQmIsQUFHQSxLQXJCQSxBQUlvQixZQVVILE1BVFUsU0FVM0IsZ0JBVGEsV0FDRSxhQUNFLGVBQ0osV0FDYiIsImZpbGUiOiJDOlxcVXNlcnNcXHdrd2syXFxPbmVEcml2ZVxc67CU7YOVIO2ZlOuptFxccmVhY3RcXHByYWlzZS1wcm9qZWN0XFxjb21wb25lbnRzXFxDaGVja1ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgY29udGVudHNIYW5kbGVyIH0gZnJvbSBcIi4uL3V0aWwvaGFuZGxlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY2hhbmdlRGF0YSB9IGZyb20gXCIuLi9tb2R1bGVzL2x5cmljc1wiO1xyXG5cclxuY29uc3QgQ2hlY2tWaWV3ID0gKHsgZGF0YSwgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IGx5cmljc0RhdGEgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5seXJpY3MpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBvcGVuX3ZpZXcgPSAoKSA9PiB7XHJcbiAgICBvcGVuKFxyXG4gICAgICBcIi4vbHlyaWNzX3ZpZXc/aWQ9XCIgKyBKU09OLnN0cmluZ2lmeShpZCksXHJcbiAgICAgIFwiX2JsYW5rXCIsXHJcbiAgICAgIFwidG9vbGJhcj15ZXMsc2Nyb2xsYmFycz15ZXMscmVzaXphYmxlPXllcyx3aWR0aD0xMDgwLGhlaWdodD04MDBcIlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZV9kYXRhID0gZSA9PiB7XHJcbiAgICBlLnRhcmdldC5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29sXCIpLmNsYXNzTmFtZSA9IFwiY29sXCI7XHJcbiAgICBkaXNwYXRjaChjaGFuZ2VEYXRhKGUpKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhseXJpY3NEYXRhKTtcclxuICB9LCBbbHlyaWNzRGF0YV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiQ2hlY2sgVmlldyBQYWdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbHlyaWNzX2xpc3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5IT01FPC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e29wZW5fdmlld30+XHJcbiAgICAgICAgICAgIDxzcGFuPlNIT1cgVklFVzwvc3Bhbj5cclxuICAgICAgICAgICAge2AgYH1cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaC1wbHVzXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAge2AgYH1cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+RE9XTkxPQUQgUFBUPC9zcGFuPlxyXG4gICAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZG93bmxvYWRcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgIHtjb250ZW50c0hhbmRsZXIoZGF0YSkubWFwKChlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJldHVybiBlLmNvbnRlbnRzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpZHggKyBcIiNcIiArIGl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlX2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx5ci10aXRsZVwiIGtleT17aX0gaWQ9e2lkeCArIFwiI1wiICsgaX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtpZHggKyBcIiNcIiArIGl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3BsaXQoXCJcXG5cIikubWFwKChpdCwgaTIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpMn0gaWQ9e2lkeCArIFwiI1wiICsgaX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubHlyLXRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgNXB4IHllbGxvdztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDVweCB5ZWxsb3c7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja1ZpZXc7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\CheckView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckView);

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.a9ea11d1389352e64bb2.hot-update.js.map