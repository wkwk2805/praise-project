webpackHotUpdate("static\\development\\pages\\lyrics_list.js",{

/***/ "./components/LyricsList.js":
/*!**********************************!*\
  !*** ./components/LyricsList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/sagas */ "./modules/sagas.js");

var _jsxFileName = "C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\LyricsList.js";





var lyrics = [{
  l_id: 1,
  title: "title",
  lyr_img: "no_img.gif",
  code: "E",
  tag: "",
  contents: [{
    c_id: 1,
    statement: "안녕하세요\n저는 박의 입니다"
  }, {
    c_id: 2,
    statement: "제 취미는요 코딩이에요"
  }]
}];

var LyricsList = function LyricsList() {
  var select = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.select;
  });

  var lyrics = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(select, []);

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    addEventListener("scroll", function (e) {
      console.log(window.outerHeight);
    });
    dispatch(Object(_modules_sagas__WEBPACK_IMPORTED_MODULE_5__["selectData"])());
    lyrics.push(select);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\uAC00\uC0AC\uBAA9\uB85D\uD398\uC774\uC9C0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-group mb-3",
    style: {
      margin: "20px 0px 0px 0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "\uC81C\uBAA9 \uB610\uB294 \uAC00\uC0AC\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-group-append",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "input-group-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, lyrics.map(function (e) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: e.l_id,
      className: "card",
      style: {
        width: "16rem",
        float: "left",
        margin: "0px 10px 10px 0px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: e.file ? "http://localhost:3001/uploads/".concat(e.file) : "./static/no_img.gif",
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      id: "title_".concat(e.l_id),
      style: {
        width: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "title_".concat(e.l_id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, e.title))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, e.contents[0].statement), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn btn-primary",
      style: {
        float: "left"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "\uC545\uBCF4 \uB2E4\uC6B4\uB85C\uB4DC")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "\uAC00\uC0AC \uC81C\uBAA9"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "list-group list-group-flush",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item",
    style: {
      verticalAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Cras justo odio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-window-close",
    style: {
      color: "red",
      cursor: "pointer",
      float: "right",
      fontSize: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item",
    style: {
      verticalAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Cras justo odio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-window-close",
    style: {
      color: "red",
      cursor: "pointer",
      float: "right",
      fontSize: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item",
    style: {
      verticalAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Cras justo odio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-window-close",
    style: {
      color: "red",
      cursor: "pointer",
      float: "right",
      fontSize: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item",
    style: {
      verticalAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Cras justo odio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-window-close",
    style: {
      color: "red",
      cursor: "pointer",
      float: "right",
      fontSize: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item",
    style: {
      verticalAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Cras justo odio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-window-close",
    style: {
      color: "red",
      cursor: "pointer",
      float: "right",
      fontSize: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item",
    style: {
      verticalAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Cras justo odio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-window-close",
    style: {
      color: "red",
      cursor: "pointer",
      float: "right",
      fontSize: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/lyrics_check_view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "PPT \uC0DD\uC131")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "PPT \uC81C\uAC70"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "\uC545\uBCF4\uB2E4\uC6B4\uB85C\uB4DC")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (LyricsList);

/***/ })

})
//# sourceMappingURL=lyrics_list.js.c50ebad60736d0b35bef.hot-update.js.map