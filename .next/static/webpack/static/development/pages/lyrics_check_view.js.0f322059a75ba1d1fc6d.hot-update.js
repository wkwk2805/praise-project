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

  var changeData = function changeData(e) {
    console.log(e.target.id);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Check View Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4078145839" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      marginTop: "10px"
    },
    className: "jsx-4078145839" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/lyrics_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "jsx-4078145839" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-4078145839",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "HOME"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "jsx-4078145839" + " " + "fas fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: open_view,
    className: "jsx-4078145839" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-4078145839",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "SHOW VIEW"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "jsx-4078145839" + " " + "fas fa-search-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "jsx-4078145839" + " " + "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-4078145839",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "DOWNLOAD PPT"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "jsx-4078145839" + " " + "fas fa-download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4078145839" + " " + "table-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, Object(_util_handler__WEBPACK_IMPORTED_MODULE_5__["contentsHandler"])(data).map(function (e, idx) {
    {
      return e.contents.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: i,
          id: idx + "#" + i,
          onClick: changeData,
          className: "jsx-4078145839" + " " + "col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: i,
          className: "jsx-4078145839" + " " + "lyr-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, e.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-4078145839",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, item.split("\n").map(function (it, i2) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            key: i2,
            className: "jsx-4078145839",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, it, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
            className: "jsx-4078145839",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }));
        })));
      });
    }
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4078145839",
    __self: this
  }, ".table-container.jsx-4078145839{text-align:center;width:100%;}.col.jsx-4078145839{background:black;color:white;text-align:center;margin:10px 10px 0px 0px;width:20em;height:300px;cursor:pointer;float:left;}.lyr-title.jsx-4078145839{text-align:left;margin:10px 0px 10px 5px;font-size:10px;}.col.jsx-4078145839:hover{border:solid 5px yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RVMsQUFHK0IsQUFJRCxBQVVELEFBS1EsZ0JBSkMsQ0FWYixDQUpELE1BbUJiLEtBbEJBLEFBSW9CLFlBVUgsTUFUVSxTQVUzQixnQkFUYSxXQUNFLGFBQ0UsZUFDSixXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBjb250ZW50c0hhbmRsZXIgfSBmcm9tIFwiLi4vdXRpbC9oYW5kbGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgQ2hlY2tWaWV3ID0gKHsgZGF0YSwgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IGx5cmljc0RhdGEgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5seXJpY3MpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBvcGVuX3ZpZXcgPSAoKSA9PiB7XHJcbiAgICBvcGVuKFxyXG4gICAgICBcIi4vbHlyaWNzX3ZpZXc/aWQ9XCIgKyBKU09OLnN0cmluZ2lmeShpZCksXHJcbiAgICAgIFwiX2JsYW5rXCIsXHJcbiAgICAgIFwidG9vbGJhcj15ZXMsc2Nyb2xsYmFycz15ZXMscmVzaXphYmxlPXllcyx3aWR0aD0xMDgwLGhlaWdodD04MDBcIlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZURhdGEgPSBlID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiQ2hlY2sgVmlldyBQYWdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbHlyaWNzX2xpc3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5IT01FPC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e29wZW5fdmlld30+XHJcbiAgICAgICAgICAgIDxzcGFuPlNIT1cgVklFVzwvc3Bhbj5cclxuICAgICAgICAgICAge2AgYH1cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaC1wbHVzXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAge2AgYH1cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+RE9XTkxPQUQgUFBUPC9zcGFuPlxyXG4gICAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZG93bmxvYWRcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgIHtjb250ZW50c0hhbmRsZXIoZGF0YSkubWFwKChlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJldHVybiBlLmNvbnRlbnRzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpZHggKyBcIiNcIiArIGl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlRGF0YX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHlyLXRpdGxlXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zcGxpdChcIlxcblwiKS5tYXAoKGl0LCBpMikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2kyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5seXItdGl0bGUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29sOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCA1cHggeWVsbG93O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tWaWV3O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\CheckView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckView);

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.0f322059a75ba1d1fc6d.hot-update.js.map