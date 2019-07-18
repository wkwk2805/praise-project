webpackHotUpdate("static\\development\\pages\\lyrics_list.js",{

/***/ "./components/LyricsList.js":
/*!**********************************!*\
  !*** ./components/LyricsList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_sagas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/sagas */ "./modules/sagas.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\React\\react-tutorial\\praise-project\\components\\LyricsList.js";







var LyricsList = function LyricsList(_ref) {
  var data = _ref.data;
  var select = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.select;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      lyrics = _useState2[0],
      setLyrics = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      checked = _useState4[0],
      setChecked = _useState4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])(); // init

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    addEventListener("scroll", scrollHandler);
    select.forEach(function (e) {
      setLyrics(lyrics.concat(e));
    });
  }, [select]); // scroll event

  var scrollHandler = function scrollHandler() {
    var _window = window,
        innerHeight = _window.innerHeight;
    var scrollHeight = document.body.scrollHeight; // IE에서는 document.documentElement 를 사용.

    var scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop; // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.

    if (scrollHeight - innerHeight - scrollTop < 100) {
      dispatch(Object(_modules_sagas__WEBPACK_IMPORTED_MODULE_7__["selectData"])()); // 넣어준 값으로 다시 뿌려줄 준비하기
    }
  }; // checkbox event


  var checkboxHandler = function checkboxHandler(e) {
    if (e.target.checked) {
      var val = e.target.value.split("#");
      var id = e.target.id;
      setChecked(checked.concat({
        id: id,
        title: val[0],
        code: val[1] !== "undefined" ? "(".concat(val[1], ")") : "",
        file: val[2] !== "undefined" ? val[2] : ""
      }));
    } else {
      var _id = e.target.id;
      setChecked(checked.filter(function (el) {
        return el.id !== _id;
      }));
    }
  };

  var removeChecked = function removeChecked(id) {
    var el = document.getElementById(id);
    el.checked = false;
    setChecked(checked.filter(function (e2) {
      return e2.id !== id;
    }));
  };

  var checkedList = function checkedList() {
    var id = checked.map(function (e) {
      return e.id.split("title_")[1] * 1;
    });
    return id;
  };

  var downloadFile = function downloadFile(name) {
    axios__WEBPACK_IMPORTED_MODULE_8___default()({
      url: "http://localhost:3001/uploads/".concat(name),
      method: "GET",
      responseType: "blob" // important

    }).then(function (response) {
      var url = window.URL.createObjectURL(new Blob([response.data]));
      var link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", name);
      document.body.appendChild(link);
      link.click();
    });
  };

  var downloadFiles =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var files;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //나중에는 zip파일로 다운받도록 만들어보자
              files = checked.map(function (e) {
                return e.file;
              });
              files.forEach(function (name) {
                downloadFile(name);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function downloadFiles() {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "\uAC00\uC0AC\uBAA9\uB85D\uD398\uC774\uC9C0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "input-group mb-3",
    style: {
      margin: "20px 0px 0px 0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "\uC81C\uBAA9 \uB610\uB294 \uAC00\uC0AC\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "input-group-append",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "input-group-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "fas fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-sm-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, lyrics.map(function (e) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: e.l_id,
      className: "card",
      style: {
        width: "16rem",
        float: "left",
        margin: "0px 10px 10px 0px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      src: e.file ? "http://localhost:3001/uploads/".concat(e.file) : "./static/no_img.gif",
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
      type: "checkbox",
      id: "title_".concat(e.l_id),
      value: e.title + "#" + e.code + "#" + e.file,
      onChange: checkboxHandler,
      style: {
        width: "20px",
        cursor: "pointer"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
      htmlFor: "title_".concat(e.l_id),
      style: {
        cursor: "pointer"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, e.title + " " + (e.code ? "(".concat(e.code, ")") : "")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, e.contents[0].statement), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      className: "btn btn-primary",
      style: {
        float: "left"
      },
      onClick: function onClick() {
        return downloadFile(e.file);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, "\uC545\uBCF4 \uB2E4\uC6B4\uB85C\uB4DC")));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      overflow: "auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-sm-3 position-fixed border",
    style: {
      padding: "15px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "\uAC00\uC0AC \uC81C\uBAA9"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "list-group list-group-flush",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, checked.map(function (el, i) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: i,
      className: "list-group-item",
      style: {
        verticalAlign: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
      type: "checkbox",
      id: "check",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
      htmlFor: "check",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, el.title + " " + el.code), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "fas fa-window-close",
      style: {
        color: "red",
        cursor: "pointer",
        float: "right",
        fontSize: "20px"
      },
      onClick: function onClick() {
        return removeChecked(el.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: {
      pathname: "/lyrics_check_view",
      query: {
        id: checkedList()
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "PPT \uC0DD\uC131")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: downloadFiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "\uC545\uBCF4\uB2E4\uC6B4\uB85C\uB4DC"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (LyricsList);

/***/ })

})
//# sourceMappingURL=lyrics_list.js.66e321407e48e190b3b4.hot-update.js.map