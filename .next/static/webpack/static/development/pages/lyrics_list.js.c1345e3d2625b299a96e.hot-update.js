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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_sagas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/sagas */ "./modules/sagas.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util_hostname__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/hostname */ "./util/hostname.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Auth */ "./components/Auth.js");



var _jsxFileName = "C:\\React\\react-tutorial\\praise-project\\components\\LyricsList.js";











var LyricsList = function LyricsList(_ref) {
  var data = _ref.data,
      param = _ref.param;
  var lyricsSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.lyrics;
  });
  var select = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
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
      admin = _useState6[0],
      setAdmin = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      result = _useState8[0],
      setResult = _useState8[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    init();
  }, []);

  var init =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_10___default()({
                url: "".concat(_util_hostname__WEBPACK_IMPORTED_MODULE_11__["default"], "/api/login"),
                method: "post",
                withCredentials: true
              });

            case 2:
              res = _context.sent;
              console.log(res.data);
              res.data.success && setAdmin(true);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function init() {
      return _ref2.apply(this, arguments);
    };
  }(); // init


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
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _window, innerHeight, scrollHeight, scrollTop, val, res;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _window = window, innerHeight = _window.innerHeight;
              scrollHeight = document.body.scrollHeight; // IE에서는 document.documentElement 를 사용.

              scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop; // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.

              if (!(scrollHeight - innerHeight - scrollTop < 100)) {
                _context2.next = 10;
                break;
              }

              window.removeEventListener("scroll", handleScroll);
              val = inputRef.current.value;
              _context2.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("".concat(_util_hostname__WEBPACK_IMPORTED_MODULE_11__["default"], "/api/scroll?info=").concat(val, "&first=").concat(lyrics.length - 1));

            case 8:
              res = _context2.sent;
              setLyrics(lyrics.concat(res.data));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleScroll() {
      return _ref3.apply(this, arguments);
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
    axios__WEBPACK_IMPORTED_MODULE_10___default()({
      url: "".concat(_util_hostname__WEBPACK_IMPORTED_MODULE_11__["default"], "/uploads/").concat(name),
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
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {
      var res, _res;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(e.keyCode === 13)) {
                _context3.next = 8;
                break;
              }

              _context3.next = 3;
              return dispatch(Object(_modules_sagas__WEBPACK_IMPORTED_MODULE_9__["selectData"])(encodeURI(e.target.value)));

            case 3:
              res = _context3.sent;
              param = "";
              setResult(res ? true : false);
              _context3.next = 14;
              break;

            case 8:
              if (e.keyCode) {
                _context3.next = 14;
                break;
              }

              _context3.next = 11;
              return dispatch(Object(_modules_sagas__WEBPACK_IMPORTED_MODULE_9__["selectData"])(encodeURI(e.target.value)));

            case 11:
              _res = _context3.sent;
              param = "";
              setResult(_res ? true : false);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function searching(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  var removeLyrics = function removeLyrics(e) {
    var id = e.target.id.split("remove_")[1];
    axios__WEBPACK_IMPORTED_MODULE_10___default()({
      url: "".concat(_util_hostname__WEBPACK_IMPORTED_MODULE_11__["default"], "/api"),
      method: "delete",
      data: {
        id: id
      }
    }).then(function (res) {
      alert(res.data.message);

      if (res.data.result === "success") {
        inputRef.current.focus();
        setLyrics(lyrics.filter(function (e) {
          return e.l_id !== id * 1;
        }));
      } else {
        alert("삭제 실패");
      }
    }).catch(function (err) {
      return console.log(err);
    });
  };

  var insertPpt = function insertPpt() {
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/lyrics_registration");
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uAC00\uC0AC\uBAA9\uB85D\uD398\uC774\uC9C0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "container ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Auth__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      margin: "20px 0px 0px 0px"
    },
    className: "jsx-3632274245" + " " + "input-group mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
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
      lineNumber: 176
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "input-group-append",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: searching,
    className: "jsx-3632274245" + " " + "input-group-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "jsx-3632274245" + " " + "fas fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "col-sm-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
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
        lineNumber: 193
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      src: e.file ? "".concat(_util_hostname__WEBPACK_IMPORTED_MODULE_11__["default"], "/uploads/").concat(e.file) : "./static/no_img.gif",
      style: {
        maxHeight: "200px"
      },
      className: "jsx-3632274245" + " " + "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-3632274245" + " " + "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
      className: "jsx-3632274245" + " " + "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-3632274245",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
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
        lineNumber: 214
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
        lineNumber: 221
      },
      __self: this
    }, e.title + " " + (e.code ? "(".concat(e.code, ")") : "")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "jsx-3632274245" + " " + "card-text txt_line_content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, e.contents[0].statement), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      onClick: function onClick() {
        return downloadFile(e.file);
      },
      className: "jsx-3632274245" + " " + "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, "\uC545\uBCF4\uB2E4\uC6B4\uB85C\uB4DC"), admin && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: {
        marginTop: "10px",
        textAlign: "right"
      },
      className: "jsx-3632274245",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/lyrics_update_display?id=".concat(e.l_id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      style: {
        marginRight: "10px"
      },
      className: "jsx-3632274245" + " " + "btn btn-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, "\uC218\uC815")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      onClick: removeLyrics,
      id: "remove_".concat(e.l_id),
      className: "jsx-3632274245" + " " + "btn btn-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, "\uC0AD\uC81C"))));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      overflow: "auto"
    },
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      padding: "15px"
    },
    className: "jsx-3632274245" + " " + "col-sm-2 position-fixed border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
    className: "jsx-3632274245" + " " + "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, "\uAC00\uC0AC \uC81C\uBAA9"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "jsx-3632274245" + " " + "list-group list-group-flush",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
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
        lineNumber: 278
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
        lineNumber: 288
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: createPpt,
    className: "jsx-3632274245" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, "PPT \uC0DD\uC131"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: downloadFiles,
    className: "jsx-3632274245" + " " + "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "\uC545\uBCF4\uB2E4\uC6B4\uB85C\uB4DC"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }), admin && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: insertPpt,
    className: "jsx-3632274245" + " " + "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, "\uC545\uBCF4\uB123\uAE30"))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3632274245",
    __self: this
  }, ".txt_line_content.jsx-3632274245{width:14em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.txt_line_title.jsx-3632274245{width:9em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSZWFjdFxccmVhY3QtdHV0b3JpYWxcXHByYWlzZS1wcm9qZWN0XFxjb21wb25lbnRzXFxMeXJpY3NMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtVYSxBQUc0QixBQU1ELFVBQ00sQ0FOQSxlQU9PLENBTkEsc0JBT0osQ0FOQSxrQkFPRCxDQU5wQixpQkFPQSIsImZpbGUiOiJDOlxcUmVhY3RcXHJlYWN0LXR1dG9yaWFsXFxwcmFpc2UtcHJvamVjdFxcY29tcG9uZW50c1xcTHlyaWNzTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0RGF0YSB9IGZyb20gXCIuLi9tb2R1bGVzL3NhZ2FzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWwvaG9zdG5hbWVcIjtcclxuaW1wb3J0IEF1dGggZnJvbSBcIi4vQXV0aFwiO1xyXG5cclxuY29uc3QgTHlyaWNzTGlzdCA9ICh7IGRhdGEsIHBhcmFtIH0pID0+IHtcclxuICBjb25zdCBseXJpY3NTZWxlY3RvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmx5cmljcyk7XHJcbiAgY29uc3Qgc2VsZWN0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2VsZWN0KTtcclxuICBjb25zdCBbbHlyaWNzLCBzZXRMeXJpY3NdID0gdXNlU3RhdGUoZGF0YSk7XHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthZG1pbiwgc2V0QWRtaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgIHVybDogYCR7aG9zdH0vYXBpL2xvZ2luYCxcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgIHJlcy5kYXRhLnN1Y2Nlc3MgJiYgc2V0QWRtaW4odHJ1ZSk7XHJcbiAgfTtcclxuICAvLyBpbml0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZXN1bHQgJiYgc2VsZWN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBhbGVydChcIuqygOyDieuQnCDrgrTsmqnsnbQg7JeG7Iq164uI64ukXCIpO1xyXG4gICAgICBwYXJhbSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChyZXN1bHQpIHtcclxuICAgICAgc2V0THlyaWNzKHNlbGVjdCk7XHJcbiAgICAgIHBhcmFtID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW0pIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBkZWNvZGVVUkkocGFyYW0pO1xyXG4gIH0sIFtzZWxlY3RdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2x5cmljc10pO1xyXG5cclxuICAvLyBzY3JvbGwgZXZlbnRcclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlubmVySGVpZ2h0IH0gPSB3aW5kb3c7XHJcbiAgICBjb25zdCB7IHNjcm9sbEhlaWdodCB9ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIC8vIElF7JeQ7ISc64qUIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCDrpbwg7IKs7JqpLlxyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID1cclxuICAgICAgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSB8fFxyXG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuICAgIC8vIOyKpO2BrOuhpOungSDtlojsnYTrlYwsIOu4jOudvOyasOyggOydmCDqsIDsnqUg67CR7JeQ7IScIDEwMOygleuPhCDrhpLsnbTqsIAg64Ko7JWY7J2E65WM7JeQIOyLpO2Wie2VmOq4sOychO2VqC5cclxuICAgIGlmIChzY3JvbGxIZWlnaHQgLSBpbm5lckhlaWdodCAtIHNjcm9sbFRvcCA8IDEwMCkge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICBsZXQgdmFsID0gaW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke2hvc3R9L2FwaS9zY3JvbGw/aW5mbz0ke3ZhbH0mZmlyc3Q9JHtseXJpY3MubGVuZ3RoIC0gMX1gXHJcbiAgICAgICk7XHJcbiAgICAgIHNldEx5cmljcyhseXJpY3MuY29uY2F0KHJlcy5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyBjaGVja2JveCBldmVudFxyXG4gIGNvbnN0IGNoZWNrYm94SGFuZGxlciA9IGUgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWUuc3BsaXQoXCIjXCIpO1xyXG4gICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xyXG4gICAgICBzZXRDaGVja2VkKFxyXG4gICAgICAgIGNoZWNrZWQuY29uY2F0KHtcclxuICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgIHRpdGxlOiB2YWxbMF0sXHJcbiAgICAgICAgICBjb2RlOiB2YWxbMV0gIT09IFwidW5kZWZpbmVkXCIgPyBgKCR7dmFsWzFdfSlgIDogYGAsXHJcbiAgICAgICAgICBmaWxlOiB2YWxbMl0gIT09IFwidW5kZWZpbmVkXCIgPyB2YWxbMl0gOiBgYFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xyXG4gICAgICBzZXRDaGVja2VkKGNoZWNrZWQuZmlsdGVyKGVsID0+IGVsLmlkICE9PSBpZCkpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVtb3ZlQ2hlY2tlZCA9IGlkID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgZWwuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgc2V0Q2hlY2tlZChjaGVja2VkLmZpbHRlcihlMiA9PiBlMi5pZCAhPT0gaWQpKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoZWNrZWRMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBjaGVja2VkLm1hcChlID0+IGUuaWQuc3BsaXQoXCJ0aXRsZV9cIilbMV0gKiAxKTtcclxuICAgIHJldHVybiBpZDtcclxuICB9O1xyXG4gIGNvbnN0IGRvd25sb2FkRmlsZSA9IG5hbWUgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICB1cmw6IGAke2hvc3R9L3VwbG9hZHMvJHtuYW1lfWAsXHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgcmVzcG9uc2VUeXBlOiBcImJsb2JcIiAvLyBpbXBvcnRhbnRcclxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0pKTtcclxuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBsaW5rLmhyZWYgPSB1cmw7XHJcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgbmFtZSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgZG93bmxvYWRGaWxlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpID0gY2hlY2tlZExpc3QoKS5tYXAoZSA9PiBgaWQ9JHtlfSZgKTtcclxuICAgIGlmICghbGkgfHwgbGkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGFsZXJ0KFwi64uk7Jq066Gc65OcIO2VoCDslYXrs7TqsIAg7JeG7Iq164uI64ukLiDslYXrs7Trpbwg7ISg7YOd7ZW0IOyjvOyEuOyalFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy/rgpjspJHsl5DripQgemlw7YyM7J2866GcIOuLpOyatOuwm+uPhOuhnSDrp4zrk6TslrTrs7TsnpBcclxuICAgIGNvbnN0IGZpbGVzID0gY2hlY2tlZC5tYXAoZSA9PiBlLmZpbGUpO1xyXG4gICAgZmlsZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgZG93bmxvYWRGaWxlKG5hbWUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBjcmVhdGVQcHQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGNoZWNrZWRMaXN0KCkubWFwKGUgPT4gYGlkPSR7ZX0mYCk7XHJcbiAgICBpZiAoIWxpIHx8IGxpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBhbGVydChcIlBQVOulvCDsg53shLHtlaAg7JWF67O06rCAIOyXhuyKteuLiOuLpC4g7JWF67O066W8IOyEoO2Dne2VtCDso7zshLjsmpRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBzdHIgPSBsaS5qb2luKFwiXCIpO1xyXG4gICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSk7XHJcbiAgICBSb3V0ZXIucHVzaChcIi9seXJpY3NfY2hlY2tfdmlldz9cIiArIHN0cik7XHJcbiAgfTtcclxuICBjb25zdCBzZWFyY2hpbmcgPSBhc3luYyBlID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRpc3BhdGNoKHNlbGVjdERhdGEoZW5jb2RlVVJJKGUudGFyZ2V0LnZhbHVlKSkpO1xyXG4gICAgICBwYXJhbSA9IFwiXCI7XHJcbiAgICAgIHNldFJlc3VsdChyZXMgPyB0cnVlIDogZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICghZS5rZXlDb2RlKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRpc3BhdGNoKHNlbGVjdERhdGEoZW5jb2RlVVJJKGUudGFyZ2V0LnZhbHVlKSkpO1xyXG4gICAgICBwYXJhbSA9IFwiXCI7XHJcbiAgICAgIHNldFJlc3VsdChyZXMgPyB0cnVlIDogZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVtb3ZlTHlyaWNzID0gZSA9PiB7XHJcbiAgICBsZXQgaWQgPSBlLnRhcmdldC5pZC5zcGxpdChcInJlbW92ZV9cIilbMV07XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIHVybDogYCR7aG9zdH0vYXBpYCxcclxuICAgICAgbWV0aG9kOiBcImRlbGV0ZVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IGlkXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgYWxlcnQocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnJlc3VsdCA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgICAgIHNldEx5cmljcyhseXJpY3MuZmlsdGVyKGUgPT4gZS5sX2lkICE9PSBpZCAqIDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoXCLsgq3soJwg7Iuk7YyoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9O1xyXG4gIGNvbnN0IGluc2VydFBwdCA9ICgpID0+IHtcclxuICAgIFJvdXRlci5wdXNoKFwiL2x5cmljc19yZWdpc3RyYXRpb25cIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dCB0aXRsZT1cIuqwgOyCrOuqqeuhne2OmOydtOyngFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIFwiPlxyXG4gICAgICAgICAgPEF1dGggLz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIyMHB4IDBweCAwcHggMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsoJzrqqkg65iQ64qUIOqwgOyCrOulvCDsnoXroKXtlbQg7KO87IS47JqUXCJcclxuICAgICAgICAgICAgICBvbktleURvd249e3NlYXJjaGluZ31cclxuICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIG9uQ2xpY2s9e3NlYXJjaGluZ30+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICB7bHlyaWNzLm1hcCgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTZyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggMTBweCAxMHB4IDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7aG9zdH0vdXBsb2Fkcy8ke2UuZmlsZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgLi9zdGF0aWMvbm9faW1nLmdpZmBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IFwiMjAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgdGl0bGVfJHtlLmxfaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLnRpdGxlICsgXCIjXCIgKyBlLmNvZGUgKyBcIiNcIiArIGUuZmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGVja2JveEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17YHRpdGxlXyR7ZS5sX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRfbGluZV90aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGl0bGUgKyBcIiBcIiArIChlLmNvZGUgPyBgKCR7ZS5jb2RlfSlgIDogYGApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2UudGl0bGUgKyBcIiBcIiArIChlLmNvZGUgPyBgKCR7ZS5jb2RlfSlgIDogYGApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgdHh0X2xpbmVfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZS5jb250ZW50c1swXS5zdGF0ZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZEZpbGUoZS5maWxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7JWF67O064uk7Jq066Gc65OcXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHthZG1pbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiwgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9seXJpY3NfdXBkYXRlX2Rpc3BsYXk/aWQ9JHtlLmxfaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsiJjsoJVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVMeXJpY3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHJlbW92ZV8ke2UubF9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyCreygnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6IFwiYXV0b1wiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zbS0yIHBvc2l0aW9uLWZpeGVkIGJvcmRlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPuqwgOyCrCDsoJzrqqk8L2g0PlxyXG4gICAgICAgICAgICAgICAgPHAgLz5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIOuwmOuzteyLnOyekSAqL31cclxuICAgICAgICAgICAgICAgICAge2NoZWNrZWQubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsLnRpdGxlICsgXCIgXCIgKyBlbC5jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS13aW5kb3ctY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVDaGVja2VkKGVsLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHsvKiDrsJjrs7XrgZ0gKi99XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXtjcmVhdGVQcHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIFBQVCDsg53shLFcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17ZG93bmxvYWRGaWxlc30+XHJcbiAgICAgICAgICAgICAgICAgICAg7JWF67O064uk7Jq066Gc65OcXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICAgICAgICB7YWRtaW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXtpbnNlcnRQcHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAg7JWF67O064Sj6riwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgLnR4dF9saW5lX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0ZW07XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudHh0X2xpbmVfdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDllbTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTHlyaWNzTGlzdDtcclxuIl19 */\n/*@ sourceURL=C:\\React\\react-tutorial\\praise-project\\components\\LyricsList.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LyricsList);

/***/ })

})
//# sourceMappingURL=lyrics_list.js.c1345e3d2625b299a96e.hot-update.js.map