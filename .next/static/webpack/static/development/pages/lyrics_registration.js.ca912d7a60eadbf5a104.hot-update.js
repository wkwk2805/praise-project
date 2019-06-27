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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");


var _jsxFileName = "C:\\React\\react-tutorial\\praise-project\\components\\Registration.js";

 // 가사 등록 컴포넌트

var Registration = function Registration() {
  var _React$createElement;

  var initialState = {}; // 나중에 능력 될때 처리하자

  var tapEvent = function tapEvent(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
    }
  }; // 들어온 값을 데이터 베이스로 넘기기


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      insertData = _useState2[0],
      setInsertData = _useState2[1];

  var register = function register(e) {
    console.log(e.currentTarget);
    e.preventDefault();
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "\uAC00\uC0AC\uB4F1\uB85D \uD398\uC774\uC9C0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "text-center",
    style: {
      margin: "20px 0px 0px 0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\uAC00\uC0AC\uB97C \uCD94\uAC00\uD574 \uC8FC\uC138\uC694"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    placeholder: "\uC81C\uBAA9",
    className: "form-control",
    name: "title",
    style: {
      margin: "20px 0px 15px 0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    className: "form-control",
    name: "code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    selected: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\uC545\uBCF4\uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "C \uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "D \uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "E",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "E \uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "F \uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "G",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "G \uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "A \uCF54\uB4DC"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "B \uCF54\uB4DC")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", (_React$createElement = {
    name: "",
    id: "",
    cols: "30",
    rows: "10",
    placeholder: "\uAC00\uC0AC",
    className: "form-control"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "name", "contents"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 45
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    class: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    class: "form-control",
    placeholder: "\uD0ED\uC73C\uB85C TAG\uB97C \uAD6C\uBD84 \uD574\uC8FC\uC138\uC694",
    name: "tag",
    onKeyDown: tapEvent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    id: "uploadFile",
    style: {
      display: "none"
    },
    name: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "btn btn-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "uploadFile",
    style: {
      cursor: "pointer",
      margin: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-upload",
    style: {
      fontSize: "30px",
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "upload"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: "inline-block",
      marginLeft: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    class: "form-control form-control-lg",
    readOnly: true,
    style: {
      backgroundColor: "white"
    },
    placeholder: "\uD30C\uC77C\uC774\uB984",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "\uB4F1\uB85D"), " ", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-plus-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Registration);

/***/ })

})
//# sourceMappingURL=lyrics_registration.js.ca912d7a60eadbf5a104.hot-update.js.map