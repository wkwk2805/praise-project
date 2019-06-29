webpackHotUpdate("static\\development\\pages\\lyrics_registration.js",{

/***/ "./components/Registration.js":
/*!************************************!*\
  !*** ./components/Registration.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_lyrics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/lyrics */ "./modules/lyrics.js");
/* harmony import */ var _modules_sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/sagas */ "./modules/sagas.js");

var _jsxFileName = "C:\\Users\\wkwk2\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react\\praise-project\\components\\Registration.js";




 // 가사 등록 컴포넌트

var Registration = function Registration() {
  var _React$createElement;

  var datas = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.lyrics;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(datas.axiosData);
    datas.axiosData && alert(datas.axiosData.data);
  }, [datas]); // 나중에 능력 될때 처리하자

  var tapEvent = function tapEvent(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
    }
  }; // 값이 변경될 때마다 값에 대한 내용을 넣어줌


  var onChangeHandler = function onChangeHandler(e) {
    dispatch(Object(_modules_lyrics__WEBPACK_IMPORTED_MODULE_4__["changeHandler"])(e));
  };

  var _onSubmit = function _onSubmit() {
    dispatch(Object(_modules_sagas__WEBPACK_IMPORTED_MODULE_5__["insertData"])(datas));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\uAC00\uC0AC\uB4F1\uB85D \uD398\uC774\uC9C0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "text-center",
    style: {
      margin: "20px 0px 0px 0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\uAC00\uC0AC\uB97C \uCD94\uAC00\uD574 \uC8FC\uC138\uC694"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "\uC81C\uBAA9",
    className: "form-control",
    name: "title",
    onChange: onChangeHandler,
    style: {
      margin: "20px 0px 15px 0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    className: "form-control",
    onChange: onChangeHandler,
    name: "code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\uC545\uBCF4\uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "C \uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "D \uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "E",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "E \uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "F \uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "G",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "G \uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "A \uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "B \uCF54\uB4DC")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", (_React$createElement = {
    name: "",
    id: "",
    cols: "30",
    rows: "10",
    placeholder: "\uAC00\uC0AC",
    className: "form-control"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "name", "contents"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "onChange", onChangeHandler), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 61
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "\uD0ED\uC73C\uB85C TAG\uB97C \uAD6C\uBD84 \uD574\uC8FC\uC138\uC694",
    name: "tag",
    onKeyDown: tapEvent,
    onChange: onChangeHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "file",
    id: "uploadFile",
    style: {
      display: "none"
    },
    name: "img",
    onChange: onChangeHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "uploadFile",
    style: {
      cursor: "pointer",
      margin: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-upload",
    style: {
      fontSize: "30px",
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "upload"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "inline-block",
      marginLeft: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control form-control-lg",
    readOnly: true,
    style: {
      backgroundColor: "white"
    },
    placeholder: "\uD30C\uC77C\uC774\uB984",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: _onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "\uB4F1\uB85D"), " ", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-plus-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Registration);

/***/ })

})
//# sourceMappingURL=lyrics_registration.js.31dfa1ffd09780d72e6a.hot-update.js.map