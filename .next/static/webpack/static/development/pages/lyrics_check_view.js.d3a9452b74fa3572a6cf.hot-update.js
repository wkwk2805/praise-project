webpackHotUpdate("static\\development\\pages\\lyrics_check_view.js",{

/***/ "./components/CheckView.js":
/*!*********************************!*\
  !*** ./components/CheckView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\CheckView.js";





var CheckView = function CheckView(_ref) {
  var data = _ref.data;

  var contentsHandler = function contentsHandler(data) {
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
  };

  var open_view = function open_view() {
    open("./lyrics_view", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=1080,height=800");
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Check View Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-723008290" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: "10px"
    },
    className: "jsx-723008290" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/lyrics_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-723008290" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-723008290",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "HOME"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-723008290" + " " + "fas fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: open_view,
    className: "jsx-723008290" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-723008290",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "SHOW VIEW"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-723008290" + " " + "fas fa-search-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-723008290" + " " + "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-723008290",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "DOWNLOAD PPT"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-723008290" + " " + "fas fa-download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-723008290" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, contentsHandler(data).map(function (e) {
    {
      return e.contents.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-723008290" + " " + "col-sm",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-723008290" + " " + "lyr-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, e.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-723008290",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, item.replace(/\n/g, "<br/>")));
      });
    }
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "723008290",
    __self: this
  }, ".col-sm.jsx-723008290{background:black;color:white;text-align:center;margin:10px 10px 0px 0px;width:100px;height:300px;cursor:pointer;}.lyr-title.jsx-723008290{text-align:left;margin:10px 0px 0px 5px;}.col-sm.jsx-723008290:hover{border:solid 5px yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRlMsQUFHOEIsQUFTRCxBQUlRLGdCQUhBLENBVFosT0FhZCxLQVpvQixXQVNwQixPQVIyQix5QkFDYixZQUNDLGFBQ0UsZUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFx3a3drMlxcT25lRHJpdmVcXOuwlO2DlSDtmZTrqbRcXHJlYWN0XFxwcmFpc2UtcHJvamVjdFxcY29tcG9uZW50c1xcQ2hlY2tWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBDaGVja1ZpZXcgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBjb250ZW50c0hhbmRsZXIgPSBkYXRhID0+IHtcclxuICAgIGxldCB0aXRsZSA9IGRhdGEubWFwKGUgPT4gZS50aXRsZSk7XHJcbiAgICBsZXQgY29udGVudHMgPSBkYXRhLm1hcChlID0+IGUuY29udGVudHMpO1xyXG4gICAgbGV0IGFycmF5RmluYWwgPSBbXTtcclxuICAgIGNvbnRlbnRzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgbGV0IGFycmF5ID0gW107XHJcbiAgICAgIGxldCBzdGF0ZW1lbnRBcnIgPSBpdGVtLm1hcChlID0+IGUuc3RhdGVtZW50KTtcclxuICAgICAgc3RhdGVtZW50QXJyLmZvckVhY2goKGl0ZW0yLCBpMikgPT4ge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBsZXQgc3RyID0gXCJcIjtcclxuICAgICAgICBsZXQgc3BsaXRBcnIgPSBpdGVtMi5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBzcGxpdEFyci5mb3JFYWNoKChpdGVtMywgaTMpID0+IHtcclxuICAgICAgICAgIHN0ciArPSBpdGVtMyArIFwiXFxuXCI7XHJcbiAgICAgICAgICBpZiAoaTMgJSAyICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAgICAgc3RyID0gXCJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBhcnJheS5wdXNoKGFycik7XHJcbiAgICAgICAgYXJyID0gW107XHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgb2JqID0geyB0aXRsZTogdGl0bGVbaV0sIGNvbnRlbnRzOiBhcnJheSB9O1xyXG4gICAgICBhcnJheUZpbmFsLnB1c2gob2JqKTtcclxuICAgIH0pO1xyXG4gICAgYXJyYXlGaW5hbC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgIGl0ZW0uY29udGVudHMuZm9yRWFjaChpdGVtMiA9PiB7XHJcbiAgICAgICAgYXJyID0gYXJyLmNvbmNhdChpdGVtMik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpdGVtLmNvbnRlbnRzID0gYXJyO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXJyYXlGaW5hbDtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuX3ZpZXcgPSAoKSA9PiB7XHJcbiAgICBvcGVuKFxyXG4gICAgICBcIi4vbHlyaWNzX3ZpZXdcIixcclxuICAgICAgXCJfYmxhbmtcIixcclxuICAgICAgXCJ0b29sYmFyPXllcyxzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHdpZHRoPTEwODAsaGVpZ2h0PTgwMFwiXHJcbiAgICApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCJDaGVjayBWaWV3IFBhZ2VcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9seXJpY3NfbGlzdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkhPTUU8L3NwYW4+XHJcbiAgICAgICAgICAgICAge2AgYH1cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAge2AgYH1cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17b3Blbl92aWV3fT5cclxuICAgICAgICAgICAgPHNwYW4+U0hPVyBWSUVXPC9zcGFuPlxyXG4gICAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoLXBsdXNcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5ET1dOTE9BRCBQUFQ8L3NwYW4+XHJcbiAgICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kb3dubG9hZFwiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAge2NvbnRlbnRzSGFuZGxlcihkYXRhKS5tYXAoZSA9PiB7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZS5jb250ZW50cy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHlyLXRpdGxlXCI+e2UudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS5yZXBsYWNlKC9cXG4vZywgXCI8YnIvPlwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5jb2wtc20ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmx5ci10aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb2wtc206aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDVweCB5ZWxsb3c7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja1ZpZXc7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\CheckView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckView);

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.d3a9452b74fa3572a6cf.hot-update.js.map