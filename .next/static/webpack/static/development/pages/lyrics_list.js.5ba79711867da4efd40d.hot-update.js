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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_sagas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/sagas */ "./modules/sagas.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _util_hostname__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/hostname */ "./util/hostname.js");



var _jsxFileName = "C:\\React\\react-tutorial\\praise-project\\components\\LyricsList.js";









var LyricsList = function LyricsList(_ref) {
  var data = _ref.data,
      param = _ref.param;
  var select = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.select;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(data),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      lyrics = _useState2[0],
      setLyrics = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      checked = _useState4[0],
      setChecked = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      result = _useState6[0],
      setResult = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      isAllData = _useState8[0],
      setIsAllData = _useState8[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(); // init

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (result && select.length === 0) {
      alert("검색된 내용이 없습니다");
      param = false;
    } else if (result) {
      setLyrics(select);
      param = false;
    }

    if (param) inputRef.current.value = decodeURI(param);
  }, [select]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    window.addEventListener("scroll", handleScroll);
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, [lyrics]); // scroll event

  var handleScroll =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _window, innerHeight, scrollHeight, scrollTop, val, res;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _window = window, innerHeight = _window.innerHeight;
              scrollHeight = document.body.scrollHeight; // IE에서는 document.documentElement 를 사용.

              scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop; // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.

              if (!(scrollHeight - innerHeight - scrollTop < 100)) {
                _context.next = 10;
                break;
              }

              window.removeEventListener("scroll", handleScroll);
              val = inputRef.current.value;
              _context.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("".concat(_util_hostname__WEBPACK_IMPORTED_MODULE_10__["default"], "/api/scroll?info=").concat(val, "&first=").concat(lyrics.length - 1));

            case 8:
              res = _context.sent;
              setLyrics(lyrics.concat(res.data));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleScroll() {
      return _ref2.apply(this, arguments);
    };
  }(); // checkbox event


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
    axios__WEBPACK_IMPORTED_MODULE_9___default()({
      url: "".concat(_util_hostname__WEBPACK_IMPORTED_MODULE_10__["default"], "/uploads/").concat(name),
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

  var downloadFiles = function downloadFiles() {
    var li = checkedList().map(function (e) {
      return "id=".concat(e, "&");
    });

    if (!li || li.length === 0) {
      alert("다운로드 할 악보가 없습니다. 악보를 선택해 주세요");
      return;
    } //나중에는 zip파일로 다운받도록 만들어보자


    var files = checked.map(function (e) {
      return e.file;
    });
    files.forEach(function (name) {
      downloadFile(name);
    });
  };

  var createPpt = function createPpt() {
    var li = checkedList().map(function (e) {
      return "id=".concat(e, "&");
    });

    if (!li || li.length === 0) {
      alert("PPT를 생성할 악보가 없습니다. 악보를 선택해 주세요");
      return;
    }

    var str = li.join("");
    str = str.substring(0, str.length - 1);
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/lyrics_check_view?" + str);
  };

  var searching =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      var res, _res;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(e.keyCode === 13)) {
                _context2.next = 8;
                break;
              }

              _context2.next = 3;
              return dispatch(Object(_modules_sagas__WEBPACK_IMPORTED_MODULE_8__["selectData"])(encodeURI(e.target.value)));

            case 3:
              res = _context2.sent;
              param = "";
              setResult(res ? true : false);
              _context2.next = 14;
              break;

            case 8:
              if (e.keyCode) {
                _context2.next = 14;
                break;
              }

              _context2.next = 11;
              return dispatch(Object(_modules_sagas__WEBPACK_IMPORTED_MODULE_8__["selectData"])(encodeURI(e.target.value)));

            case 11:
              _res = _context2.sent;
              param = "";
              setResult(_res ? true : false);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function searching(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var updateLyrics = function updateLyrics(e) {
    console.log(e.target);
    alert("수정");
  };

  var removeLyrics = function removeLyrics(e) {
    alert("삭제");
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uAC00\uC0AC\uBAA9\uB85D\uD398\uC774\uC9C0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "container ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      margin: "20px 0px 0px 0px"
    },
    className: "jsx-3632274245" + " " + "input-group mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "text",
    placeholder: "\uC81C\uBAA9 \uB610\uB294 \uAC00\uC0AC\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694",
    onKeyDown: searching,
    ref: inputRef,
    className: "jsx-3632274245" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "input-group-append",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: searching,
    className: "jsx-3632274245" + " " + "input-group-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "jsx-3632274245" + " " + "fas fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "col-sm-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, lyrics.map(function (e, i) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: i,
      style: {
        width: "16rem",
        float: "left",
        margin: "0px 10px 10px 0px"
      },
      className: "jsx-3632274245" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      src: e.file ? "".concat(_util_hostname__WEBPACK_IMPORTED_MODULE_10__["default"], "/uploads/").concat(e.file) : "./static/no_img.gif",
      style: {
        maxHeight: "200px"
      },
      className: "jsx-3632274245" + " " + "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-3632274245" + " " + "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
      className: "jsx-3632274245" + " " + "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-3632274245",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      type: "checkbox",
      id: "title_".concat(e.l_id),
      value: e.title + "#" + e.code + "#" + e.file,
      onChange: checkboxHandler,
      style: {
        width: "20px",
        cursor: "pointer"
      },
      className: "jsx-3632274245",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      htmlFor: "title_".concat(e.l_id),
      style: {
        cursor: "pointer"
      },
      title: e.title + " " + (e.code ? "(".concat(e.code, ")") : ""),
      className: "jsx-3632274245" + " " + "txt_line_title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, e.title + " " + (e.code ? "(".concat(e.code, ")") : "")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "jsx-3632274245" + " " + "card-text txt_line_content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, e.contents[0].statement), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      style: {
        float: "left"
      },
      onClick: function onClick() {
        return downloadFile(e.file);
      },
      className: "jsx-3632274245" + " " + "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, "\uC545\uBCF4 \uB2E4\uC6B4\uB85C\uB4DC"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      onClick: updateLyrics,
      id: "update_".concat(e.l_id),
      className: "jsx-3632274245" + " " + "btn btn-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, "\uC218\uC815"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      onClick: removeLyrics,
      id: "remove_".concat(e.l_id),
      className: "jsx-3632274245" + " " + "btn btn-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, "\uC0AD\uC81C")));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      overflow: "auto"
    },
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      padding: "15px"
    },
    className: "jsx-3632274245" + " " + "col-sm-2 position-fixed border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
    className: "jsx-3632274245" + " " + "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "\uAC00\uC0AC \uC81C\uBAA9"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "jsx-3632274245" + " " + "list-group list-group-flush",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, checked.map(function (el, i) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      key: i,
      style: {
        padding: "5px",
        verticalAlign: "center",
        fontSize: "12px"
      },
      className: "jsx-3632274245" + " " + "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, el.title + " " + el.code, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      style: {
        color: "red",
        cursor: "pointer",
        float: "right",
        fontSize: "15px"
      },
      onClick: function onClick() {
        return removeChecked(el.id);
      },
      className: "jsx-3632274245" + " " + "fas fa-window-close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: createPpt,
    className: "jsx-3632274245" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, "PPT \uC0DD\uC131"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: downloadFiles,
    className: "jsx-3632274245" + " " + "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, "\uC545\uBCF4\uB2E4\uC6B4\uB85C\uB4DC")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      textAlign: "center"
    },
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, isAllData && "모든 악보가 다 나왔습니다."))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3632274245",
    __self: this
  }, ".txt_line_content.jsx-3632274245{width:14em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.txt_line_title.jsx-3632274245{width:9em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSZWFjdFxccmVhY3QtdHV0b3JpYWxcXHByYWlzZS1wcm9qZWN0XFxjb21wb25lbnRzXFxMeXJpY3NMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBSYSxBQUc0QixBQU1ELFVBQ00sQ0FOQSxlQU9PLENBTkEsc0JBT0osQ0FOQSxrQkFPRCxDQU5wQixpQkFPQSIsImZpbGUiOiJDOlxcUmVhY3RcXHJlYWN0LXR1dG9yaWFsXFxwcmFpc2UtcHJvamVjdFxcY29tcG9uZW50c1xcTHlyaWNzTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdERhdGEgfSBmcm9tIFwiLi4vbW9kdWxlcy9zYWdhc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBob3N0IGZyb20gXCIuLi91dGlsL2hvc3RuYW1lXCI7XHJcblxyXG5jb25zdCBMeXJpY3NMaXN0ID0gKHsgZGF0YSwgcGFyYW0gfSkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNlbGVjdCk7XHJcbiAgY29uc3QgW2x5cmljcywgc2V0THlyaWNzXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0FsbERhdGEsIHNldElzQWxsRGF0YV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgLy8gaW5pdFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocmVzdWx0ICYmIHNlbGVjdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgYWxlcnQoXCLqsoDsg4nrkJwg64K07Jqp7J20IOyXhuyKteuLiOuLpFwiKTtcclxuICAgICAgcGFyYW0gPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHNldEx5cmljcyhzZWxlY3QpO1xyXG4gICAgICBwYXJhbSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtKSBpbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gZGVjb2RlVVJJKHBhcmFtKTtcclxuICB9LCBbc2VsZWN0XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtseXJpY3NdKTtcclxuXHJcbiAgLy8gc2Nyb2xsIGV2ZW50XHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpbm5lckhlaWdodCB9ID0gd2luZG93O1xyXG4gICAgY29uc3QgeyBzY3JvbGxIZWlnaHQgfSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAvLyBJReyXkOyEnOuKlCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQg66W8IOyCrOyaqS5cclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9XHJcbiAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgfHxcclxuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICAvLyDsiqTtgazroaTrp4Eg7ZaI7J2E65WMLCDruIzrnbzsmrDsoIDsnZgg6rCA7J6lIOuwkeyXkOyEnCAxMDDsoJXrj4Qg64aS7J206rCAIOuCqOyVmOydhOuVjOyXkCDsi6TtlontlZjquLDsnITtlaguXHJcbiAgICBpZiAoc2Nyb2xsSGVpZ2h0IC0gaW5uZXJIZWlnaHQgLSBzY3JvbGxUb3AgPCAxMDApIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgbGV0IHZhbCA9IGlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtob3N0fS9hcGkvc2Nyb2xsP2luZm89JHt2YWx9JmZpcnN0PSR7bHlyaWNzLmxlbmd0aCAtIDF9YFxyXG4gICAgICApO1xyXG4gICAgICBzZXRMeXJpY3MobHlyaWNzLmNvbmNhdChyZXMuZGF0YSkpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gY2hlY2tib3ggZXZlbnRcclxuICBjb25zdCBjaGVja2JveEhhbmRsZXIgPSBlID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KFwiI1wiKTtcclxuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZDtcclxuICAgICAgc2V0Q2hlY2tlZChcclxuICAgICAgICBjaGVja2VkLmNvbmNhdCh7XHJcbiAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICB0aXRsZTogdmFsWzBdLFxyXG4gICAgICAgICAgY29kZTogdmFsWzFdICE9PSBcInVuZGVmaW5lZFwiID8gYCgke3ZhbFsxXX0pYCA6IGBgLFxyXG4gICAgICAgICAgZmlsZTogdmFsWzJdICE9PSBcInVuZGVmaW5lZFwiID8gdmFsWzJdIDogYGBcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZDtcclxuICAgICAgc2V0Q2hlY2tlZChjaGVja2VkLmZpbHRlcihlbCA9PiBlbC5pZCAhPT0gaWQpKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbW92ZUNoZWNrZWQgPSBpZCA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGVsLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIHNldENoZWNrZWQoY2hlY2tlZC5maWx0ZXIoZTIgPT4gZTIuaWQgIT09IGlkKSk7XHJcbiAgfTtcclxuICBjb25zdCBjaGVja2VkTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlkID0gY2hlY2tlZC5tYXAoZSA9PiBlLmlkLnNwbGl0KFwidGl0bGVfXCIpWzFdICogMSk7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfTtcclxuICBjb25zdCBkb3dubG9hZEZpbGUgPSBuYW1lID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgdXJsOiBgJHtob3N0fS91cGxvYWRzLyR7bmFtZX1gLFxyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHJlc3BvbnNlVHlwZTogXCJibG9iXCIgLy8gaW1wb3J0YW50XHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdKSk7XHJcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIG5hbWUpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGRvd25sb2FkRmlsZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGNoZWNrZWRMaXN0KCkubWFwKGUgPT4gYGlkPSR7ZX0mYCk7XHJcbiAgICBpZiAoIWxpIHx8IGxpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBhbGVydChcIuuLpOyatOuhnOuTnCDtlaAg7JWF67O06rCAIOyXhuyKteuLiOuLpC4g7JWF67O066W8IOyEoO2Dne2VtCDso7zshLjsmpRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8v64KY7KSR7JeQ64qUIHppcO2MjOydvOuhnCDri6TsmrTrsJvrj4TroZ0g66eM65Ok7Ja067O07J6QXHJcbiAgICBjb25zdCBmaWxlcyA9IGNoZWNrZWQubWFwKGUgPT4gZS5maWxlKTtcclxuICAgIGZpbGVzLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIGRvd25sb2FkRmlsZShuYW1lKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgY3JlYXRlUHB0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGkgPSBjaGVja2VkTGlzdCgpLm1hcChlID0+IGBpZD0ke2V9JmApO1xyXG4gICAgaWYgKCFsaSB8fCBsaS5sZW5ndGggPT09IDApIHtcclxuICAgICAgYWxlcnQoXCJQUFTrpbwg7IOd7ISx7ZWgIOyVheuztOqwgCDsl4bsirXri4jri6QuIOyVheuztOulvCDshKDtg53tlbQg7KO87IS47JqUXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgc3RyID0gbGkuam9pbihcIlwiKTtcclxuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xyXG4gICAgUm91dGVyLnB1c2goXCIvbHlyaWNzX2NoZWNrX3ZpZXc/XCIgKyBzdHIpO1xyXG4gIH07XHJcbiAgY29uc3Qgc2VhcmNoaW5nID0gYXN5bmMgZSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBkaXNwYXRjaChzZWxlY3REYXRhKGVuY29kZVVSSShlLnRhcmdldC52YWx1ZSkpKTtcclxuICAgICAgcGFyYW0gPSBcIlwiO1xyXG4gICAgICBzZXRSZXN1bHQocmVzID8gdHJ1ZSA6IGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAoIWUua2V5Q29kZSkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBkaXNwYXRjaChzZWxlY3REYXRhKGVuY29kZVVSSShlLnRhcmdldC52YWx1ZSkpKTtcclxuICAgICAgcGFyYW0gPSBcIlwiO1xyXG4gICAgICBzZXRSZXN1bHQocmVzID8gdHJ1ZSA6IGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHVwZGF0ZUx5cmljcyA9IGUgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgYWxlcnQoXCLsiJjsoJVcIik7XHJcbiAgfTtcclxuICBjb25zdCByZW1vdmVMeXJpY3MgPSBlID0+IHtcclxuICAgIGFsZXJ0KFwi7IKt7KCcXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9XCLqsIDsgqzrqqnroZ3tjpjsnbTsp4BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIyMHB4IDBweCAwcHggMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsoJzrqqkg65iQ64qUIOqwgOyCrOulvCDsnoXroKXtlbQg7KO87IS47JqUXCJcclxuICAgICAgICAgICAgICBvbktleURvd249e3NlYXJjaGluZ31cclxuICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIG9uQ2xpY2s9e3NlYXJjaGluZ30+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICB7bHlyaWNzLm1hcCgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTZyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggMTBweCAxMHB4IDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7aG9zdH0vdXBsb2Fkcy8ke2UuZmlsZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgLi9zdGF0aWMvbm9faW1nLmdpZmBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IFwiMjAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgdGl0bGVfJHtlLmxfaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLnRpdGxlICsgXCIjXCIgKyBlLmNvZGUgKyBcIiNcIiArIGUuZmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGVja2JveEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17YHRpdGxlXyR7ZS5sX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRfbGluZV90aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGl0bGUgKyBcIiBcIiArIChlLmNvZGUgPyBgKCR7ZS5jb2RlfSlgIDogYGApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2UudGl0bGUgKyBcIiBcIiArIChlLmNvZGUgPyBgKCR7ZS5jb2RlfSlgIDogYGApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgdHh0X2xpbmVfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZS5jb250ZW50c1swXS5zdGF0ZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZG93bmxvYWRGaWxlKGUuZmlsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOyVheuztCDri6TsmrTroZzrk5xcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt1cGRhdGVMeXJpY3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgdXBkYXRlXyR7ZS5sX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOyImOyglVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlTHlyaWNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YHJlbW92ZV8ke2UubF9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsgq3soJxcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiBcImF1dG9cIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc20tMiBwb3NpdGlvbi1maXhlZCBib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj7qsIDsgqwg7KCc66qpPC9oND5cclxuICAgICAgICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiDrsJjrs7Xsi5zsnpEgKi99XHJcbiAgICAgICAgICAgICAgICAgIHtjaGVja2VkLm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbC50aXRsZSArIFwiIFwiICsgZWwuY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtd2luZG93LWNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlQ2hlY2tlZChlbC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICB7Lyog67CY67O164GdICovfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17Y3JlYXRlUHB0fT5cclxuICAgICAgICAgICAgICAgICAgICBQUFQg7IOd7ISxXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2Rvd25sb2FkRmlsZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIOyVheuztOuLpOyatOuhnOuTnFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgPGgxPntpc0FsbERhdGEgJiYgXCLrqqjrk6Ag7JWF67O06rCAIOuLpCDrgpjsmZTsirXri4jri6QuXCJ9PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgLnR4dF9saW5lX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0ZW07XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudHh0X2xpbmVfdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDllbTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTHlyaWNzTGlzdDtcclxuIl19 */\n/*@ sourceURL=C:\\React\\react-tutorial\\praise-project\\components\\LyricsList.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LyricsList);

/***/ })

})
//# sourceMappingURL=lyrics_list.js.5ba79711867da4efd40d.hot-update.js.map