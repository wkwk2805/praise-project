webpackHotUpdate("static\\development\\pages\\lyrics_registration.js",{

/***/ "./modules/lyrics.js":
/*!***************************!*\
  !*** ./modules/lyrics.js ***!
  \***************************/
/*! exports provided: downloadPPT, changeHandler, submitHandler, resultState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadPPT", function() { return downloadPPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHandler", function() { return changeHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitHandler", function() { return submitHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultState", function() { return resultState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pptxgenjs */ "./node_modules/pptxgenjs/dist/pptxgen.min.js");
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pptxgenjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


//import

 // action

var DOWNLOAD_PPT = "lyrics/DOWNLOAD_PPT";
var CHANGE_HANDLER = "lyrics/CHANGE_HANDLER";
var SUBMIT_HANDLER = "lyrics/SUBMIT_HANDLER";
var RESULT_STATE = "lyrics/STATE";
var downloadPPT = function downloadPPT() {
  return {
    type: DOWNLOAD_PPT
  };
};
var changeHandler = function changeHandler(e) {
  return {
    type: CHANGE_HANDLER,
    e: e
  };
};
var submitHandler = function submitHandler(data) {
  return {
    type: SUBMIT_HANDLER,
    data: data
  };
};
var resultState = function resultState(res) {
  return {
    type: RESULT_STATE,
    res: res
  };
}; // initialState

var initialState = {}; //Reducers

var lyrics = function lyrics() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case DOWNLOAD_PPT:
      download_ppt(state);
      return state;

    case CHANGE_HANDLER:
      return onChangeHandler(state, action.e);

    case SUBMIT_HANDLER:
      return onSubmitHandler(action.data);

    case RESULT_STATE:
      console.log("RESULT");
      return onResult(action.res);

    default:
      return state;
  }
}; // create functions
// PPT 다운로드 함수


var download_ppt = function download_ppt(state) {
  var pptx = new pptxgenjs__WEBPACK_IMPORTED_MODULE_2___default.a();
  pptx.setTitle("Hello world Title");
  pptx.setLayout({
    name: "A3",
    width: 16.5,
    height: 11.7
  });
  var slide = pptx.addNewSlide("MASTER");
  slide.back = "000000";
  slide.color = "FFFFFF";
  pptx.save("\uAC00\uC0AC\uBAA8\uC74C_20190619");
}; // 값이 변경될 때마다 값에 대한 내용을 넣어줌


var onChangeHandler = function onChangeHandler(state, e) {
  e.target && (state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));

  if (e.target.value === "") {
    delete state[e.target.name];
  }

  return state;
};

var onSubmitHandler = function onSubmitHandler(data) {
  console.log(data);
  /* return axios
    .put("http://localhost:3001/api/insert", data)
    .then(res => {
      resultState(res);
    })
    .catch(e => console.log(e)); */
}; // 값이 변경된 것을 저장해주는 로직


var onResult = function onResult(result) {
  return result.data;
};

/* harmony default export */ __webpack_exports__["default"] = (lyrics);

/***/ })

})
//# sourceMappingURL=lyrics_registration.js.b6330196ff4d71f95328.hot-update.js.map