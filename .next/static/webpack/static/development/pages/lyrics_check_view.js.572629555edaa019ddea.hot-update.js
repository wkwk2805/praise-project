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
    className: "jsx-4078145839" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: "10px"
    },
    className: "jsx-4078145839" + " " + "text-right",
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
    className: "jsx-4078145839" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4078145839",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "HOME"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-4078145839" + " " + "fas fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: open_view,
    className: "jsx-4078145839" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4078145839",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "SHOW VIEW"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-4078145839" + " " + "fas fa-search-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-4078145839" + " " + "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4078145839",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "DOWNLOAD PPT"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-4078145839" + " " + "fas fa-download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4078145839" + " " + "table-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, contentsHandler(data).map(function (e) {
    {
      return e.contents.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: i,
          className: "jsx-4078145839" + " " + "col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: i,
          className: "jsx-4078145839" + " " + "lyr-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, e.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-4078145839",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, item.split("\n").map(function (it) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            key: i,
            className: "jsx-4078145839",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, it, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            className: "jsx-4078145839",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }));
        })));
      });
    }
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4078145839",
    __self: this
  }, ".table-container.jsx-4078145839{text-align:center;width:100%;}.col.jsx-4078145839{background:black;color:white;text-align:center;margin:10px 10px 0px 0px;width:20em;height:300px;cursor:pointer;float:left;}.lyr-title.jsx-4078145839{text-align:left;margin:10px 0px 10px 5px;font-size:10px;}.col.jsx-4078145839:hover{border:solid 5px yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRlMsQUFHK0IsQUFJRCxBQVVELEFBS1EsZ0JBSkMsQ0FWYixDQUpELE1BbUJiLEtBbEJBLEFBSW9CLFlBVUgsTUFUVSxTQVUzQixnQkFUYSxXQUNFLGFBQ0UsZUFDSixXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgQ2hlY2tWaWV3ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgY29udGVudHNIYW5kbGVyID0gZGF0YSA9PiB7XHJcbiAgICBsZXQgdGl0bGUgPSBkYXRhLm1hcChlID0+IGUudGl0bGUpO1xyXG4gICAgbGV0IGNvbnRlbnRzID0gZGF0YS5tYXAoZSA9PiBlLmNvbnRlbnRzKTtcclxuICAgIGxldCBhcnJheUZpbmFsID0gW107XHJcbiAgICBjb250ZW50cy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICBsZXQgc3RhdGVtZW50QXJyID0gaXRlbS5tYXAoZSA9PiBlLnN0YXRlbWVudCk7XHJcbiAgICAgIHN0YXRlbWVudEFyci5mb3JFYWNoKChpdGVtMiwgaTIpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHNwbGl0QXJyID0gaXRlbTIuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgc3BsaXRBcnIuZm9yRWFjaCgoaXRlbTMsIGkzKSA9PiB7XHJcbiAgICAgICAgICBzdHIgKz0gaXRlbTMgKyBcIlxcblwiO1xyXG4gICAgICAgICAgaWYgKGkzICUgMiAhPT0gMCkge1xyXG4gICAgICAgICAgICBhcnIucHVzaChzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgIHN0ciA9IFwiXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXJyYXkucHVzaChhcnIpO1xyXG4gICAgICAgIGFyciA9IFtdO1xyXG4gICAgICB9KTtcclxuICAgICAgbGV0IG9iaiA9IHsgdGl0bGU6IHRpdGxlW2ldLCBjb250ZW50czogYXJyYXkgfTtcclxuICAgICAgYXJyYXlGaW5hbC5wdXNoKG9iaik7XHJcbiAgICB9KTtcclxuICAgIGFycmF5RmluYWwuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICBpdGVtLmNvbnRlbnRzLmZvckVhY2goaXRlbTIgPT4ge1xyXG4gICAgICAgIGFyciA9IGFyci5jb25jYXQoaXRlbTIpO1xyXG4gICAgICB9KTtcclxuICAgICAgaXRlbS5jb250ZW50cyA9IGFycjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFycmF5RmluYWw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbl92aWV3ID0gKCkgPT4ge1xyXG4gICAgb3BlbihcclxuICAgICAgXCIuL2x5cmljc192aWV3XCIsXHJcbiAgICAgIFwiX2JsYW5rXCIsXHJcbiAgICAgIFwidG9vbGJhcj15ZXMsc2Nyb2xsYmFycz15ZXMscmVzaXphYmxlPXllcyx3aWR0aD0xMDgwLGhlaWdodD04MDBcIlxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiQ2hlY2sgVmlldyBQYWdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbHlyaWNzX2xpc3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5IT01FPC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e29wZW5fdmlld30+XHJcbiAgICAgICAgICAgIDxzcGFuPlNIT1cgVklFVzwvc3Bhbj5cclxuICAgICAgICAgICAge2AgYH1cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaC1wbHVzXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAge2AgYH1cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+RE9XTkxPQUQgUFBUPC9zcGFuPlxyXG4gICAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZG93bmxvYWRcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgIHtjb250ZW50c0hhbmRsZXIoZGF0YSkubWFwKGUgPT4ge1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGUuY29udGVudHMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJseXItdGl0bGVcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2UudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnNwbGl0KFwiXFxuXCIpLm1hcChpdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubHlyLXRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgNXB4IHllbGxvdztcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrVmlldztcclxuIl19 */\n/*@ sourceURL=C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\CheckView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckView);

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.572629555edaa019ddea.hot-update.js.map