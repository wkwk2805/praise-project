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
    console.log(arrayFinal);
    return arrayFinal;
  };

  var open_view = function open_view() {
    open("./lyrics_view", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=1080,height=800");
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Check View Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-723008290" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: "10px"
    },
    className: "jsx-723008290" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/lyrics_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-723008290" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-723008290",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "HOME"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-723008290" + " " + "fas fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: open_view,
    className: "jsx-723008290" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-723008290",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "SHOW VIEW"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-723008290" + " " + "fas fa-search-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-723008290" + " " + "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-723008290",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "DOWNLOAD PPT"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-723008290" + " " + "fas fa-download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }))), contentsHandler(data).map(function (e) {
    {
      console.log("e", e);
      e.contents.forEach(function (item) {
        console.log("item", item);
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-723008290" + " " + "col-sm",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-723008290" + " " + "lyr-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, e.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-723008290",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, item));
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "723008290",
    __self: this
  }, ".col-sm.jsx-723008290{background:black;color:white;text-align:center;margin:10px 10px 0px 0px;width:100px;height:300px;cursor:pointer;}.lyr-title.jsx-723008290{text-align:left;margin:10px 0px 0px 5px;}.col-sm.jsx-723008290:hover{border:solid 5px yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRlMsQUFHOEIsQUFTRCxBQUlRLGdCQUhBLENBVFosT0FhZCxLQVpvQixXQVNwQixPQVIyQix5QkFDYixZQUNDLGFBQ0UsZUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFx3a3drMlxcT25lRHJpdmVcXOuwlO2DlSDtmZTrqbRcXHJlYWN0XFxwcmFpc2UtcHJvamVjdFxcY29tcG9uZW50c1xcQ2hlY2tWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBDaGVja1ZpZXcgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBjb250ZW50c0hhbmRsZXIgPSBkYXRhID0+IHtcclxuICAgIGxldCB0aXRsZSA9IGRhdGEubWFwKGUgPT4gZS50aXRsZSk7XHJcbiAgICBsZXQgY29udGVudHMgPSBkYXRhLm1hcChlID0+IGUuY29udGVudHMpO1xyXG4gICAgbGV0IGFycmF5RmluYWwgPSBbXTtcclxuICAgIGNvbnRlbnRzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgbGV0IGFycmF5ID0gW107XHJcbiAgICAgIGxldCBzdGF0ZW1lbnRBcnIgPSBpdGVtLm1hcChlID0+IGUuc3RhdGVtZW50KTtcclxuICAgICAgc3RhdGVtZW50QXJyLmZvckVhY2goKGl0ZW0yLCBpMikgPT4ge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBsZXQgc3RyID0gXCJcIjtcclxuICAgICAgICBsZXQgc3BsaXRBcnIgPSBpdGVtMi5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBzcGxpdEFyci5mb3JFYWNoKChpdGVtMywgaTMpID0+IHtcclxuICAgICAgICAgIHN0ciArPSBpdGVtMyArIFwiXFxuXCI7XHJcbiAgICAgICAgICBpZiAoaTMgJSAyICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAgICAgc3RyID0gXCJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBhcnJheS5wdXNoKGFycik7XHJcbiAgICAgICAgYXJyID0gW107XHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgb2JqID0geyB0aXRsZTogdGl0bGVbaV0sIGNvbnRlbnRzOiBhcnJheSB9O1xyXG4gICAgICBhcnJheUZpbmFsLnB1c2gob2JqKTtcclxuICAgIH0pO1xyXG4gICAgYXJyYXlGaW5hbC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgIGl0ZW0uY29udGVudHMuZm9yRWFjaChpdGVtMiA9PiB7XHJcbiAgICAgICAgYXJyID0gYXJyLmNvbmNhdChpdGVtMik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpdGVtLmNvbnRlbnRzID0gYXJyO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhhcnJheUZpbmFsKTtcclxuICAgIHJldHVybiBhcnJheUZpbmFsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5fdmlldyA9ICgpID0+IHtcclxuICAgIG9wZW4oXHJcbiAgICAgIFwiLi9seXJpY3Nfdmlld1wiLFxyXG4gICAgICBcIl9ibGFua1wiLFxyXG4gICAgICBcInRvb2xiYXI9eWVzLHNjcm9sbGJhcnM9eWVzLHJlc2l6YWJsZT15ZXMsd2lkdGg9MTA4MCxoZWlnaHQ9ODAwXCJcclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIkNoZWNrIFZpZXcgUGFnZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2x5cmljc19saXN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+SE9NRTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXtvcGVuX3ZpZXd9PlxyXG4gICAgICAgICAgICA8c3Bhbj5TSE9XIFZJRVc8L3NwYW4+XHJcbiAgICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2gtcGx1c1wiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkRPV05MT0FEIFBQVDwvc3Bhbj5cclxuICAgICAgICAgICAge2AgYH1cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRvd25sb2FkXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtjb250ZW50c0hhbmRsZXIoZGF0YSkubWFwKGUgPT4ge1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVcIiwgZSk7XHJcbiAgICAgICAgICAgIGUuY29udGVudHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW1cIiwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHlyLXRpdGxlXCI+e2UudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntpdGVtfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY29sLXNtIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5seXItdGl0bGUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweCA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29sLXNtOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCA1cHggeWVsbG93O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tWaWV3O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\CheckView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckView);

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.b2a29be8860ea30034bd.hot-update.js.map