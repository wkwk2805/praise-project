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



var _jsxFileName = "C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\LyricsList.js";








var LyricsList = function LyricsList(_ref) {
  var data = _ref.data;
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

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])(); // init

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    addEventListener("scroll", scrollHandler);

    if (result && select.length === 0) {
      alert("검색된 내용이 없습니다");
    }

    setLyrics(select);
  }, [select]); // scroll event

  var scrollHandler =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _window, innerHeight, scrollHeight, scrollTop, res;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _window = window, innerHeight = _window.innerHeight;
              scrollHeight = document.body.scrollHeight; // IE에서는 document.documentElement 를 사용.

              scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop; // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.

              if (!(scrollHeight - innerHeight - scrollTop < 100)) {
                _context.next = 11;
                break;
              }

              if (!(lyrics.length === 0)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              _context.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("http://localhost:3001/api/scroll?first=" + (lyrics.length - 1));

            case 8:
              res = _context.sent;
              console.log(res.data);
              setLyrics(lyrics.concat(res.data));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function scrollHandler() {
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
                _context2.next = 7;
                break;
              }

              _context2.next = 3;
              return dispatch(Object(_modules_sagas__WEBPACK_IMPORTED_MODULE_8__["selectData"])(encodeURI(e.target.value)));

            case 3:
              res = _context2.sent;
              setResult(res ? true : false);
              _context2.next = 12;
              break;

            case 7:
              if (e.keyCode) {
                _context2.next = 12;
                break;
              }

              _context2.next = 10;
              return dispatch(Object(_modules_sagas__WEBPACK_IMPORTED_MODULE_8__["selectData"])(encodeURI(e.target.value)));

            case 10:
              _res = _context2.sent;
              setResult(_res ? true : false);

            case 12:
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
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "container ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      margin: "20px 0px 0px 0px"
    },
    className: "jsx-3632274245" + " " + "input-group mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "text",
    placeholder: "\uC81C\uBAA9 \uB610\uB294 \uAC00\uC0AC\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694",
    onKeyDown: searching,
    className: "jsx-3632274245" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "input-group-append",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: searching,
    className: "jsx-3632274245" + " " + "input-group-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "jsx-3632274245" + " " + "fas fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "col-sm-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, lyrics.map(function (e) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: e.l_id,
      style: {
        width: "16rem",
        float: "left",
        margin: "0px 10px 10px 0px"
      },
      className: "jsx-3632274245" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      src: e.file ? "http://localhost:3001/uploads/".concat(e.file) : "./static/no_img.gif",
      style: {
        maxHeight: "200px"
      },
      className: "jsx-3632274245" + " " + "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-3632274245" + " " + "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
      className: "jsx-3632274245" + " " + "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-3632274245",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
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
        lineNumber: 157
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
        lineNumber: 164
      },
      __self: this
    }, e.title + " " + (e.code ? "(".concat(e.code, ")") : "")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "jsx-3632274245" + " " + "card-text txt_line_content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
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
        lineNumber: 180
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
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      padding: "15px"
    },
    className: "jsx-3632274245" + " " + "col-sm-2 position-fixed border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
    className: "jsx-3632274245" + " " + "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "\uAC00\uC0AC \uC81C\uBAA9"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "jsx-3632274245" + " " + "list-group list-group-flush",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
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
        lineNumber: 203
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
        lineNumber: 213
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3632274245" + " " + "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: createPpt,
    className: "jsx-3632274245" + " " + "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "PPT \uC0DD\uC131"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3632274245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: downloadFiles,
    className: "jsx-3632274245" + " " + "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "\uC545\uBCF4\uB2E4\uC6B4\uB85C\uB4DC"))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3632274245",
    __self: this
  }, ".txt_line_content.jsx-3632274245{width:14em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.txt_line_title.jsx-3632274245{width:9em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXEx5cmljc0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaVBhLEFBRzRCLEFBTUQsVUFDTSxDQU5BLGVBT08sQ0FOQSxzQkFPSixDQU5BLGtCQU9ELENBTnBCLGlCQU9BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcd2t3azJcXE9uZURyaXZlXFzrsJTtg5Ug7ZmU66m0XFxyZWFjdFxccHJhaXNlLXByb2plY3RcXGNvbXBvbmVudHNcXEx5cmljc0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0RGF0YSwgc2Nyb2xsRGF0YSB9IGZyb20gXCIuLi9tb2R1bGVzL3NhZ2FzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEx5cmljc0xpc3QgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBzZWxlY3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zZWxlY3QpO1xyXG4gIGNvbnN0IFtseXJpY3MsIHNldEx5cmljc10gPSB1c2VTdGF0ZShkYXRhKTtcclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgLy8gaW5pdFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgaWYgKHJlc3VsdCAmJiBzZWxlY3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGFsZXJ0KFwi6rKA7IOJ65CcIOuCtOyaqeydtCDsl4bsirXri4jri6RcIik7XHJcbiAgICB9XHJcbiAgICBzZXRMeXJpY3Moc2VsZWN0KTtcclxuICB9LCBbc2VsZWN0XSk7XHJcbiAgLy8gc2Nyb2xsIGV2ZW50XHJcbiAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW5uZXJIZWlnaHQgfSA9IHdpbmRvdztcclxuICAgIGNvbnN0IHsgc2Nyb2xsSGVpZ2h0IH0gPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgLy8gSUXsl5DshJzripQgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IOulvCDsgqzsmqkuXHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPVxyXG4gICAgICAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHx8XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG4gICAgLy8g7Iqk7YGs66Gk66eBIO2WiOydhOuVjCwg67iM65287Jqw7KCA7J2YIOqwgOyepSDrsJHsl5DshJwgMTAw7KCV64+EIOuGkuydtOqwgCDrgqjslZjsnYTrlYzsl5Ag7Iuk7ZaJ7ZWY6riw7JyE7ZWoLlxyXG4gICAgaWYgKHNjcm9sbEhlaWdodCAtIGlubmVySGVpZ2h0IC0gc2Nyb2xsVG9wIDwgMTAwKSB7XHJcbiAgICAgIGlmIChseXJpY3MubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvc2Nyb2xsP2ZpcnN0PVwiICsgKGx5cmljcy5sZW5ndGggLSAxKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIHNldEx5cmljcyhseXJpY3MuY29uY2F0KHJlcy5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyBjaGVja2JveCBldmVudFxyXG4gIGNvbnN0IGNoZWNrYm94SGFuZGxlciA9IGUgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWUuc3BsaXQoXCIjXCIpO1xyXG4gICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xyXG4gICAgICBzZXRDaGVja2VkKFxyXG4gICAgICAgIGNoZWNrZWQuY29uY2F0KHtcclxuICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgIHRpdGxlOiB2YWxbMF0sXHJcbiAgICAgICAgICBjb2RlOiB2YWxbMV0gIT09IFwidW5kZWZpbmVkXCIgPyBgKCR7dmFsWzFdfSlgIDogYGAsXHJcbiAgICAgICAgICBmaWxlOiB2YWxbMl0gIT09IFwidW5kZWZpbmVkXCIgPyB2YWxbMl0gOiBgYFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xyXG4gICAgICBzZXRDaGVja2VkKGNoZWNrZWQuZmlsdGVyKGVsID0+IGVsLmlkICE9PSBpZCkpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVtb3ZlQ2hlY2tlZCA9IGlkID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgZWwuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgc2V0Q2hlY2tlZChjaGVja2VkLmZpbHRlcihlMiA9PiBlMi5pZCAhPT0gaWQpKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoZWNrZWRMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBjaGVja2VkLm1hcChlID0+IGUuaWQuc3BsaXQoXCJ0aXRsZV9cIilbMV0gKiAxKTtcclxuICAgIHJldHVybiBpZDtcclxuICB9O1xyXG4gIGNvbnN0IGRvd25sb2FkRmlsZSA9IG5hbWUgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdXBsb2Fkcy8ke25hbWV9YCxcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICByZXNwb25zZVR5cGU6IFwiYmxvYlwiIC8vIGltcG9ydGFudFxyXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSkpO1xyXG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIGxpbmsuaHJlZiA9IHVybDtcclxuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBuYW1lKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgbGluay5jbGljaygpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBkb3dubG9hZEZpbGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGkgPSBjaGVja2VkTGlzdCgpLm1hcChlID0+IGBpZD0ke2V9JmApO1xyXG4gICAgaWYgKCFsaSB8fCBsaS5sZW5ndGggPT09IDApIHtcclxuICAgICAgYWxlcnQoXCLri6TsmrTroZzrk5wg7ZWgIOyVheuztOqwgCDsl4bsirXri4jri6QuIOyVheuztOulvCDshKDtg53tlbQg7KO87IS47JqUXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvL+uCmOykkeyXkOuKlCB6aXDtjIzsnbzroZwg64uk7Jq067Cb64+E66GdIOunjOuTpOyWtOuztOyekFxyXG4gICAgY29uc3QgZmlsZXMgPSBjaGVja2VkLm1hcChlID0+IGUuZmlsZSk7XHJcbiAgICBmaWxlcy5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICBkb3dubG9hZEZpbGUobmFtZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGNyZWF0ZVBwdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpID0gY2hlY2tlZExpc3QoKS5tYXAoZSA9PiBgaWQ9JHtlfSZgKTtcclxuICAgIGlmICghbGkgfHwgbGkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGFsZXJ0KFwiUFBU66W8IOyDneyEse2VoCDslYXrs7TqsIAg7JeG7Iq164uI64ukLiDslYXrs7Trpbwg7ISg7YOd7ZW0IOyjvOyEuOyalFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHN0ciA9IGxpLmpvaW4oXCJcIik7XHJcbiAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKTtcclxuICAgIFJvdXRlci5wdXNoKFwiL2x5cmljc19jaGVja192aWV3P1wiICsgc3RyKTtcclxuICB9O1xyXG4gIGNvbnN0IHNlYXJjaGluZyA9IGFzeW5jIGUgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGlzcGF0Y2goc2VsZWN0RGF0YShlbmNvZGVVUkkoZS50YXJnZXQudmFsdWUpKSk7XHJcbiAgICAgIHNldFJlc3VsdChyZXMgPyB0cnVlIDogZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICghZS5rZXlDb2RlKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRpc3BhdGNoKHNlbGVjdERhdGEoZW5jb2RlVVJJKGUudGFyZ2V0LnZhbHVlKSkpO1xyXG4gICAgICBzZXRSZXN1bHQocmVzID8gdHJ1ZSA6IGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0IHRpdGxlPVwi6rCA7IKs66qp66Gd7Y6Y7J207KeAXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMjBweCAwcHggMHB4IDBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7KCc66qpIOuYkOuKlCDqsIDsgqzrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgb25LZXlEb3duPXtzZWFyY2hpbmd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgb25DbGljaz17c2VhcmNoaW5nfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgIHtseXJpY3MubWFwKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17ZS5sX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNnJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAxMHB4IDEwcHggMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgaHR0cDovL2xvY2FsaG9zdDozMDAxL3VwbG9hZHMvJHtlLmZpbGV9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogYC4vc3RhdGljL25vX2ltZy5naWZgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiBcIjIwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHRpdGxlXyR7ZS5sX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS50aXRsZSArIFwiI1wiICsgZS5jb2RlICsgXCIjXCIgKyBlLmZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tib3hIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2B0aXRsZV8ke2UubF9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0X2xpbmVfdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRpdGxlICsgXCIgXCIgKyAoZS5jb2RlID8gYCgke2UuY29kZX0pYCA6IGBgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLnRpdGxlICsgXCIgXCIgKyAoZS5jb2RlID8gYCgke2UuY29kZX0pYCA6IGBgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IHR4dF9saW5lX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2UuY29udGVudHNbMF0uc3RhdGVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkRmlsZShlLmZpbGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDslYXrs7Qg64uk7Jq066Gc65OcXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogXCJhdXRvXCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNtLTIgcG9zaXRpb24tZml4ZWQgYm9yZGVyXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+6rCA7IKsIOygnOuqqTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICB7Lyog67CY67O17Iuc7J6RICovfVxyXG4gICAgICAgICAgICAgICAgICB7Y2hlY2tlZC5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWwudGl0bGUgKyBcIiBcIiArIGVsLmNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRvdy1jbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoZWNrZWQoZWwuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgey8qIOuwmOuzteuBnSAqL31cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e2NyZWF0ZVBwdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgUFBUIOyDneyEsVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPHAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtkb3dubG9hZEZpbGVzfT5cclxuICAgICAgICAgICAgICAgICAgICDslYXrs7Tri6TsmrTroZzrk5xcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgLnR4dF9saW5lX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0ZW07XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudHh0X2xpbmVfdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDllbTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTHlyaWNzTGlzdDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\LyricsList.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LyricsList);

/***/ })

})
//# sourceMappingURL=lyrics_list.js.829afb2bdd0c74c13721.hot-update.js.map