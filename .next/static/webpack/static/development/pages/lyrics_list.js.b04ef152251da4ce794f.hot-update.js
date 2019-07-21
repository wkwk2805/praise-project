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



var _jsxFileName = "C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\LyricsList.js";









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
  }, [select, lyrics]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    window.addEventListener("scroll", handleScroll);
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []); // scroll event

  var handleScroll =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _window, innerHeight, scrollHeight, scrollTop, val, res, timer;

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

              val = inputRef.current.value;
              _context.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("".concat(_util_hostname__WEBPACK_IMPORTED_MODULE_10__["default"], "/api/scroll?info=").concat(val, "&first=").concat(lyrics.length - 1));

            case 7:
              res = _context.sent;
              timer = setTimeout(function () {
                alert("Hello");
                setLyrics(lyrics.concat(res.data));
              }, 1000);
              clearInterval(timer);

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

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uAC00\uC0AC\uBAA9\uB85D\uD398\uC774\uC9C0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "container ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      margin: "20px 0px 0px 0px"
    },
    className: "jsx-3632274245" + " " + "input-group mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
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
      lineNumber: 138
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "input-group-append",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: searching,
    className: "jsx-3632274245" + " " + "input-group-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "jsx-3632274245" + " " + "fas fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "col-sm-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
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
        lineNumber: 155
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
        lineNumber: 164
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-3632274245" + " " + "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
      className: "jsx-3632274245" + " " + "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-3632274245",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
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
        lineNumber: 176
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
        lineNumber: 183
      },
      __self: this
    }, e.title + " " + (e.code ? "(".concat(e.code, ")") : "")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "jsx-3632274245" + " " + "card-text txt_line_content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
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
        lineNumber: 199
      },
      __self: this
    }, "\uC545\uBCF4 \uB2E4\uC6B4\uB85C\uB4DC")));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      overflow: "auto"
    },
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      padding: "15px"
    },
    className: "jsx-3632274245" + " " + "col-sm-2 position-fixed border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
    className: "jsx-3632274245" + " " + "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "\uAC00\uC0AC \uC81C\uBAA9"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "jsx-3632274245" + " " + "list-group list-group-flush",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
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
        lineNumber: 222
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
        lineNumber: 232
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: createPpt,
    className: "jsx-3632274245" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "PPT \uC0DD\uC131"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: downloadFiles,
    className: "jsx-3632274245" + " " + "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "\uC545\uBCF4\uB2E4\uC6B4\uB85C\uB4DC")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      textAlign: "center"
    },
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, isAllData && "모든 악보가 다 나왔습니다."))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3632274245",
    __self: this
  }, ".txt_line_content.jsx-3632274245{width:14em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.txt_line_title.jsx-3632274245{width:9em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXEx5cmljc0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdVFhLEFBRzRCLEFBTUQsVUFDTSxDQU5BLGVBT08sQ0FOQSxzQkFPSixDQU5BLGtCQU9ELENBTnBCLGlCQU9BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXEx5cmljc0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3REYXRhIH0gZnJvbSBcIi4uL21vZHVsZXMvc2FnYXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vdXRpbC9ob3N0bmFtZVwiO1xyXG5cclxuY29uc3QgTHlyaWNzTGlzdCA9ICh7IGRhdGEsIHBhcmFtIH0pID0+IHtcclxuICBjb25zdCBzZWxlY3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zZWxlY3QpO1xyXG4gIGNvbnN0IFtseXJpY3MsIHNldEx5cmljc10gPSB1c2VTdGF0ZShkYXRhKTtcclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNBbGxEYXRhLCBzZXRJc0FsbERhdGFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIC8vIGluaXRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdCAmJiBzZWxlY3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGFsZXJ0KFwi6rKA7IOJ65CcIOuCtOyaqeydtCDsl4bsirXri4jri6RcIik7XHJcbiAgICAgIHBhcmFtID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCkge1xyXG4gICAgICBzZXRMeXJpY3Moc2VsZWN0KTtcclxuICAgICAgcGFyYW0gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChwYXJhbSkgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IGRlY29kZVVSSShwYXJhbSk7XHJcbiAgfSwgW3NlbGVjdCwgbHlyaWNzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICAvLyBzY3JvbGwgZXZlbnRcclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlubmVySGVpZ2h0IH0gPSB3aW5kb3c7XHJcbiAgICBjb25zdCB7IHNjcm9sbEhlaWdodCB9ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIC8vIElF7JeQ7ISc64qUIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCDrpbwg7IKs7JqpLlxyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID1cclxuICAgICAgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSB8fFxyXG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuICAgIC8vIOyKpO2BrOuhpOungSDtlojsnYTrlYwsIOu4jOudvOyasOyggOydmCDqsIDsnqUg67CR7JeQ7IScIDEwMOygleuPhCDrhpLsnbTqsIAg64Ko7JWY7J2E65WM7JeQIOyLpO2Wie2VmOq4sOychO2VqC5cclxuICAgIGlmIChzY3JvbGxIZWlnaHQgLSBpbm5lckhlaWdodCAtIHNjcm9sbFRvcCA8IDEwMCkge1xyXG4gICAgICBsZXQgdmFsID0gaW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke2hvc3R9L2FwaS9zY3JvbGw/aW5mbz0ke3ZhbH0mZmlyc3Q9JHtseXJpY3MubGVuZ3RoIC0gMX1gXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiSGVsbG9cIik7XHJcbiAgICAgICAgc2V0THlyaWNzKGx5cmljcy5jb25jYXQocmVzLmRhdGEpKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gY2hlY2tib3ggZXZlbnRcclxuICBjb25zdCBjaGVja2JveEhhbmRsZXIgPSBlID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KFwiI1wiKTtcclxuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZDtcclxuICAgICAgc2V0Q2hlY2tlZChcclxuICAgICAgICBjaGVja2VkLmNvbmNhdCh7XHJcbiAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICB0aXRsZTogdmFsWzBdLFxyXG4gICAgICAgICAgY29kZTogdmFsWzFdICE9PSBcInVuZGVmaW5lZFwiID8gYCgke3ZhbFsxXX0pYCA6IGBgLFxyXG4gICAgICAgICAgZmlsZTogdmFsWzJdICE9PSBcInVuZGVmaW5lZFwiID8gdmFsWzJdIDogYGBcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZDtcclxuICAgICAgc2V0Q2hlY2tlZChjaGVja2VkLmZpbHRlcihlbCA9PiBlbC5pZCAhPT0gaWQpKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbW92ZUNoZWNrZWQgPSBpZCA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGVsLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIHNldENoZWNrZWQoY2hlY2tlZC5maWx0ZXIoZTIgPT4gZTIuaWQgIT09IGlkKSk7XHJcbiAgfTtcclxuICBjb25zdCBjaGVja2VkTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlkID0gY2hlY2tlZC5tYXAoZSA9PiBlLmlkLnNwbGl0KFwidGl0bGVfXCIpWzFdICogMSk7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfTtcclxuICBjb25zdCBkb3dubG9hZEZpbGUgPSBuYW1lID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgdXJsOiBgJHtob3N0fS91cGxvYWRzLyR7bmFtZX1gLFxyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHJlc3BvbnNlVHlwZTogXCJibG9iXCIgLy8gaW1wb3J0YW50XHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdKSk7XHJcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIG5hbWUpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGRvd25sb2FkRmlsZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGNoZWNrZWRMaXN0KCkubWFwKGUgPT4gYGlkPSR7ZX0mYCk7XHJcbiAgICBpZiAoIWxpIHx8IGxpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBhbGVydChcIuuLpOyatOuhnOuTnCDtlaAg7JWF67O06rCAIOyXhuyKteuLiOuLpC4g7JWF67O066W8IOyEoO2Dne2VtCDso7zshLjsmpRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8v64KY7KSR7JeQ64qUIHppcO2MjOydvOuhnCDri6TsmrTrsJvrj4TroZ0g66eM65Ok7Ja067O07J6QXHJcbiAgICBjb25zdCBmaWxlcyA9IGNoZWNrZWQubWFwKGUgPT4gZS5maWxlKTtcclxuICAgIGZpbGVzLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIGRvd25sb2FkRmlsZShuYW1lKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgY3JlYXRlUHB0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGkgPSBjaGVja2VkTGlzdCgpLm1hcChlID0+IGBpZD0ke2V9JmApO1xyXG4gICAgaWYgKCFsaSB8fCBsaS5sZW5ndGggPT09IDApIHtcclxuICAgICAgYWxlcnQoXCJQUFTrpbwg7IOd7ISx7ZWgIOyVheuztOqwgCDsl4bsirXri4jri6QuIOyVheuztOulvCDshKDtg53tlbQg7KO87IS47JqUXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgc3RyID0gbGkuam9pbihcIlwiKTtcclxuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xyXG4gICAgUm91dGVyLnB1c2goXCIvbHlyaWNzX2NoZWNrX3ZpZXc/XCIgKyBzdHIpO1xyXG4gIH07XHJcbiAgY29uc3Qgc2VhcmNoaW5nID0gYXN5bmMgZSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBkaXNwYXRjaChzZWxlY3REYXRhKGVuY29kZVVSSShlLnRhcmdldC52YWx1ZSkpKTtcclxuICAgICAgcGFyYW0gPSBcIlwiO1xyXG4gICAgICBzZXRSZXN1bHQocmVzID8gdHJ1ZSA6IGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAoIWUua2V5Q29kZSkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBkaXNwYXRjaChzZWxlY3REYXRhKGVuY29kZVVSSShlLnRhcmdldC52YWx1ZSkpKTtcclxuICAgICAgcGFyYW0gPSBcIlwiO1xyXG4gICAgICBzZXRSZXN1bHQocmVzID8gdHJ1ZSA6IGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0IHRpdGxlPVwi6rCA7IKs66qp66Gd7Y6Y7J207KeAXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMjBweCAwcHggMHB4IDBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7KCc66qpIOuYkOuKlCDqsIDsgqzrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgb25LZXlEb3duPXtzZWFyY2hpbmd9XHJcbiAgICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIiBvbkNsaWNrPXtzZWFyY2hpbmd9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAge2x5cmljcy5tYXAoKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE2cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDEwcHggMTBweCAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke2hvc3R9L3VwbG9hZHMvJHtlLmZpbGV9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogYC4vc3RhdGljL25vX2ltZy5naWZgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiBcIjIwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHRpdGxlXyR7ZS5sX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS50aXRsZSArIFwiI1wiICsgZS5jb2RlICsgXCIjXCIgKyBlLmZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tib3hIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2B0aXRsZV8ke2UubF9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0X2xpbmVfdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRpdGxlICsgXCIgXCIgKyAoZS5jb2RlID8gYCgke2UuY29kZX0pYCA6IGBgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLnRpdGxlICsgXCIgXCIgKyAoZS5jb2RlID8gYCgke2UuY29kZX0pYCA6IGBgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IHR4dF9saW5lX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2UuY29udGVudHNbMF0uc3RhdGVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkRmlsZShlLmZpbGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDslYXrs7Qg64uk7Jq066Gc65OcXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogXCJhdXRvXCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNtLTIgcG9zaXRpb24tZml4ZWQgYm9yZGVyXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+6rCA7IKsIOygnOuqqTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICB7Lyog67CY67O17Iuc7J6RICovfVxyXG4gICAgICAgICAgICAgICAgICB7Y2hlY2tlZC5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWwudGl0bGUgKyBcIiBcIiArIGVsLmNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRvdy1jbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoZWNrZWQoZWwuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgey8qIOuwmOuzteuBnSAqL31cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e2NyZWF0ZVBwdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgUFBUIOyDneyEsVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPHAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtkb3dubG9hZEZpbGVzfT5cclxuICAgICAgICAgICAgICAgICAgICDslYXrs7Tri6TsmrTroZzrk5xcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgIDxoMT57aXNBbGxEYXRhICYmIFwi66qo65OgIOyVheuztOqwgCDri6Qg64KY7JmU7Iq164uI64ukLlwifTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIC50eHRfbGluZV9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNGVtO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnR4dF9saW5lX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5ZW07XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEx5cmljc0xpc3Q7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\LyricsList.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LyricsList);

/***/ })

})
//# sourceMappingURL=lyrics_list.js.b04ef152251da4ce794f.hot-update.js.map