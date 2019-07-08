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
    className: "jsx-1627228942" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: "10px"
    },
    className: "jsx-1627228942" + " " + "text-right",
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
    className: "jsx-1627228942" + " " + "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1627228942",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "HOME"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1627228942" + " " + "fas fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: open_view,
    className: "jsx-1627228942" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1627228942",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "SHOW VIEW"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1627228942" + " " + "fas fa-search-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-1627228942" + " " + "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1627228942",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "DOWNLOAD PPT"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1627228942" + " " + "fas fa-download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1627228942" + " " + "table-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, contentsHandler(data).map(function (e) {
    {
      return e.contents.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1627228942" + " " + "col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1627228942" + " " + "lyr-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, e.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1627228942",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, item.split("\n").map(function (it) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            className: "jsx-1627228942",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, it, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            className: "jsx-1627228942",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }));
        })));
      });
    }
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1627228942",
    __self: this
  }, ".col.jsx-1627228942{background:black;color:white;text-align:center;margin:10px 10px 0px 0px;width:20em;height:300px;cursor:pointer;float:left;}.lyr-title.jsx-1627228942{text-align:left;margin:10px 0px 10px 5px;font-size:10px;}.col.jsx-1627228942:hover{border:solid 5px yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXENoZWNrVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RlMsQUFHOEIsQUFVRCxBQUtRLGdCQUpDLENBVmIsT0FlZCxLQWRvQixZQVVILE1BVFUsU0FVM0IsZ0JBVGEsV0FDRSxhQUNFLGVBQ0osV0FDYiIsImZpbGUiOiJDOlxcVXNlcnNcXHdrd2syXFxPbmVEcml2ZVxc67CU7YOVIO2ZlOuptFxccmVhY3RcXHByYWlzZS1wcm9qZWN0XFxjb21wb25lbnRzXFxDaGVja1ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IENoZWNrVmlldyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnRzSGFuZGxlciA9IGRhdGEgPT4ge1xyXG4gICAgbGV0IHRpdGxlID0gZGF0YS5tYXAoZSA9PiBlLnRpdGxlKTtcclxuICAgIGxldCBjb250ZW50cyA9IGRhdGEubWFwKGUgPT4gZS5jb250ZW50cyk7XHJcbiAgICBsZXQgYXJyYXlGaW5hbCA9IFtdO1xyXG4gICAgY29udGVudHMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgICAgbGV0IHN0YXRlbWVudEFyciA9IGl0ZW0ubWFwKGUgPT4gZS5zdGF0ZW1lbnQpO1xyXG4gICAgICBzdGF0ZW1lbnRBcnIuZm9yRWFjaCgoaXRlbTIsIGkyKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xyXG4gICAgICAgIGxldCBzcGxpdEFyciA9IGl0ZW0yLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIHNwbGl0QXJyLmZvckVhY2goKGl0ZW0zLCBpMykgPT4ge1xyXG4gICAgICAgICAgc3RyICs9IGl0ZW0zICsgXCJcXG5cIjtcclxuICAgICAgICAgIGlmIChpMyAlIDIgIT09IDApIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICBzdHIgPSBcIlwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFycmF5LnB1c2goYXJyKTtcclxuICAgICAgICBhcnIgPSBbXTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBvYmogPSB7IHRpdGxlOiB0aXRsZVtpXSwgY29udGVudHM6IGFycmF5IH07XHJcbiAgICAgIGFycmF5RmluYWwucHVzaChvYmopO1xyXG4gICAgfSk7XHJcbiAgICBhcnJheUZpbmFsLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgaXRlbS5jb250ZW50cy5mb3JFYWNoKGl0ZW0yID0+IHtcclxuICAgICAgICBhcnIgPSBhcnIuY29uY2F0KGl0ZW0yKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGl0ZW0uY29udGVudHMgPSBhcnI7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcnJheUZpbmFsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5fdmlldyA9ICgpID0+IHtcclxuICAgIG9wZW4oXHJcbiAgICAgIFwiLi9seXJpY3Nfdmlld1wiLFxyXG4gICAgICBcIl9ibGFua1wiLFxyXG4gICAgICBcInRvb2xiYXI9eWVzLHNjcm9sbGJhcnM9eWVzLHJlc2l6YWJsZT15ZXMsd2lkdGg9MTA4MCxoZWlnaHQ9ODAwXCJcclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIkNoZWNrIFZpZXcgUGFnZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2x5cmljc19saXN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+SE9NRTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB7YCBgfVxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXtvcGVuX3ZpZXd9PlxyXG4gICAgICAgICAgICA8c3Bhbj5TSE9XIFZJRVc8L3NwYW4+XHJcbiAgICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2gtcGx1c1wiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIHtgIGB9XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkRPV05MT0FEIFBQVDwvc3Bhbj5cclxuICAgICAgICAgICAge2AgYH1cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRvd25sb2FkXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7Y29udGVudHNIYW5kbGVyKGRhdGEpLm1hcChlID0+IHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJldHVybiBlLmNvbnRlbnRzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx5ci10aXRsZVwiPntlLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zcGxpdChcIlxcblwiKS5tYXAoaXQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmNvbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubHlyLXRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgNXB4IHllbGxvdztcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrVmlldztcclxuIl19 */\n/*@ sourceURL=C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\CheckView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckView);

/***/ })

})
//# sourceMappingURL=lyrics_check_view.js.27dba073eaad3d9354fd.hot-update.js.map