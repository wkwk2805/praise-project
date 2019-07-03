webpackHotUpdate("static\\development\\pages\\lyrics_list.js",{

/***/ "./components/LyricsList.js":
/*!**********************************!*\
  !*** ./components/LyricsList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/sagas */ "./modules/sagas.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\LyricsList.js";







var LyricsList = function LyricsList() {
  var select = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.select;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      lyrics = _useState2[0],
      setLyrics = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(); // init

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    addEventListener("scroll", scrollHandler);

    if (lyrics.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("http://localhost:3001/api").then(function (res) {
        setLyrics(res.data);
      }).catch(function (e) {
        console.log(e);
      });
    } else {
      select.map(function (e) {
        return setLyrics(lyrics.concat(e));
      });
    }
  }, [select]);

  var scrollHandler = function scrollHandler() {
    var _window = window,
        innerHeight = _window.innerHeight;
    var scrollHeight = document.body.scrollHeight; // IE에서는 document.documentElement 를 사용.

    var scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop; // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.

    if (scrollHeight - innerHeight - scrollTop < 100) {
      var param = {
        first: select[0].l_id,
        last: select[select.length - 1].l_id
      };
      dispatch(Object(_modules_sagas__WEBPACK_IMPORTED_MODULE_5__["selectData"])(param)); // 넣어준 값으로 다시 뿌려줄 준비하기
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\uAC00\uC0AC\uBAA9\uB85D\uD398\uC774\uC9C0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-group mb-3",
    style: {
      margin: "20px 0px 0px 0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "\uC81C\uBAA9 \uB610\uB294 \uAC00\uC0AC\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-group-append",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "input-group-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
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
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: e.file ? "http://localhost:3001/uploads/".concat(e.file) : "./static/no_img.gif",
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
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
        lineNumber: 87
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "title_".concat(e.l_id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, e.title))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, e.contents[0].statement), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn btn-primary",
      style: {
        float: "left"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "\uC545\uBCF4 \uB2E4\uC6B4\uB85C\uB4DC")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-3 position-fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "\uAC00\uC0AC \uC81C\uBAA9"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "list-group list-group-flush",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item",
    style: {
      verticalAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
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
      lineNumber: 119
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item",
    style: {
      verticalAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
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
      lineNumber: 136
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item",
    style: {
      verticalAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
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
      lineNumber: 153
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item",
    style: {
      verticalAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
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
      lineNumber: 170
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item",
    style: {
      verticalAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
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
      lineNumber: 187
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item",
    style: {
      verticalAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
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
      lineNumber: 204
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/lyrics_check_view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "PPT \uC0DD\uC131")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "PPT \uC81C\uAC70"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "\uC545\uBCF4\uB2E4\uC6B4\uB85C\uB4DC")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (LyricsList);

/***/ })

})
//# sourceMappingURL=lyrics_list.js.23810a27e3547f2e11c9.hot-update.js.map