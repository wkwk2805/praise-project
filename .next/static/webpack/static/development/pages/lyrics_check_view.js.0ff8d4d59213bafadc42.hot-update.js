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
    className: "jsx-979369923" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: "10px"
    },
    className: "jsx-979369923" + " " + "text-right",
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
    className: "jsx-979369923" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-979369923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "HOME"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-979369923" + " " + "fas fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: open_view,
    className: "jsx-979369923" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-979369923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "SHOW VIEW"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-979369923" + " " + "fas fa-search-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-979369923" + " " + "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-979369923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "DOWNLOAD PPT"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-979369923" + " " + "fas fa-download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))), contentsHandler(data).map(function (e) {
    {
      return e.contents.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-979369923" + " " + "col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-979369923" + " " + "lyr-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, e.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-979369923",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, item.split("\n").map(function (it) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            className: "jsx-979369923",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }, it, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            className: "jsx-979369923",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }));
        })));
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "979369923",
    __self: this
  }, ".col.jsx-979369923{background:black;color:white;text-align:center;margin:10px 10px 0px 0px;width:10em;height:300px;cursor:pointer;float:left;}.lyr-title.jsx-979369923{text-align:left;margin:10px 0px 0px 5px;}.col-sm.jsx-979369923:hover{border:solid 5px yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRlMsQUFHOEIsQUFVRCxBQUlRLGdCQUhBLENBVlosT0FjZCxLQWJvQixXQVVwQixPQVQyQix5QkFDZCxXQUNFLGFBQ0UsZUFDSixXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgQ2hlY2tWaWV3ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgY29udGVudHNIYW5kbGVyID0gZGF0YSA9PiB7XHJcbiAgICBsZXQgdGl0bGUgPSBkYXRhLm1hcChlID0+IGUudGl0bGUpO1xyXG4gICAgbGV0IGNvbnRlbnRzID0gZGF0YS5tYXAoZSA9PiBlLmNvbnRlbnRzKTtcclxuICAgIGxldCBhcnJheUZpbmFsID0gW107XHJcbiAgICBjb250ZW50cy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICBsZXQgc3RhdGVtZW50QXJyID0gaXRlbS5tYXAoZSA9PiBlLnN0YXRlbWVudCk7XHJcbiAgICAgIHN0YXRlbWVudEFyci5mb3JFYWNoKChpdGVtMiwgaTIpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHNwbGl0QXJyID0gaXRlbTIuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgc3BsaXRBcnIuZm9yRWFjaCgoaXRlbTMsIGkzKSA9PiB7XHJcbiAgICAgICAgICBzdHIgKz0gaXRlbTMgKyBcIlxcblwiO1xyXG4gICAgICAgICAgaWYgKGkzICUgMiAhPT0gMCkge1xyXG4gICAgICAgICAgICBhcnIucHVzaChzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgIHN0ciA9IFwiXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXJyYXkucHVzaChhcnIpO1xyXG4gICAgICAgIGFyciA9IFtdO1xyXG4gICAgICB9KTtcclxuICAgICAgbGV0IG9iaiA9IHsgdGl0bGU6IHRpdGxlW2ldLCBjb250ZW50czogYXJyYXkgfTtcclxuICAgICAgYXJyYXlGaW5hbC5wdXNoKG9iaik7XHJcbiAgICB9KTtcclxuICAgIGFycmF5RmluYWwuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICBpdGVtLmNvbnRlbnRzLmZvckVhY2goaXRlbTIgPT4ge1xyXG4gICAgICAgIGFyciA9IGFyci5jb25jYXQoaXRlbTIpO1xyXG4gICAgICB9KTtcclxuICAgICAgaXRlbS5jb250ZW50cyA9IGFycjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFycmF5RmluYWw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbl92aWV3ID0gKCkgPT4ge1xyXG4gICAgb3BlbihcclxuICAgICAgXCIuL2x5cmljc192aWV3XCIsXHJcbiAgICAgIFwiX2JsYW5rXCIsXHJcbiAgICAgIFwidG9vbGJhcj15ZXMsc2Nyb2xsYmFycz15ZXMscmVzaXphYmxlPXllcyx3aWR0aD0xMDgwLGhlaWdodD04MDBcIlxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiQ2hlY2sgVmlldyBQYWdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbHlyaWNzX2xpc3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5IT01FPC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e29wZW5fdmlld30+XHJcbiAgICAgICAgICAgIDxzcGFuPlNIT1cgVklFVzwvc3Bhbj5cclxuICAgICAgICAgICAge2AgYH1cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaC1wbHVzXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAge2AgYH1cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+RE9XTkxPQUQgUFBUPC9zcGFuPlxyXG4gICAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZG93bmxvYWRcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2NvbnRlbnRzSGFuZGxlcihkYXRhKS5tYXAoZSA9PiB7XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLmNvbnRlbnRzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx5ci10aXRsZVwiPntlLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnNwbGl0KFwiXFxuXCIpLm1hcChpdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5jb2wge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmx5ci10aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb2wtc206aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDVweCB5ZWxsb3c7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja1ZpZXc7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\CheckView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckView);

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.0ff8d4d59213bafadc42.hot-update.js.map