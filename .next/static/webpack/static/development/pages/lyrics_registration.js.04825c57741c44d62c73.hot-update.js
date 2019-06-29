webpackHotUpdate("static\\development\\pages\\lyrics_registration.js",{

/***/ "./modules/lyrics.js":
/*!***************************!*\
  !*** ./modules/lyrics.js ***!
  \***************************/
/*! exports provided: axiosResult, axiosError, downloadPPT, changeHandler, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosResult", function() { return axiosResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosError", function() { return axiosError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadPPT", function() { return downloadPPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHandler", function() { return changeHandler; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pptxgenjs */ "./node_modules/pptxgenjs/dist/pptxgen.min.js");
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pptxgenjs__WEBPACK_IMPORTED_MODULE_2__);


//import
 // action

var DOWNLOAD_PPT = "lyrics/DOWNLOAD_PPT";
var AXIOS_RESULT = "lyrics/AXIOS_RESULT";
var AXIOS_ERROR = "lyrics/AXIOS_ERROR";
var CHANGE_HANDLER = "lyrics/CHANGE_HANDLER"; //action creator

var axiosResult = function axiosResult(res) {
  return {
    type: AXIOS_RESULT,
    res: res
  };
};
var axiosError = function axiosError() {
  return {
    type: AXIOS_ERROR
  };
};
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
}; // initialState

var initialState = {}; //Reducers

var lyrics = function lyrics() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case DOWNLOAD_PPT:
      return onDownloadPpt(state);

    case CHANGE_HANDLER:
      return onChangeHandler(state, action.e);

    case AXIOS_RESULT:
      return onAxiosResult(action.res);

    case AXIOS_ERROR:
      return onAxiosError();

    default:
      return state;
  }
}; // create functions
// PPT 다운로드 함수


var onDownloadPpt = function onDownloadPpt(state) {
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
  return "다운로드 성공";
}; // 값이 변경될 때마다 값에 대한 내용을 넣어줌


var onChangeHandler = function onChangeHandler(state, e) {
  e.target && (state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));

  if (e.target.value === "") {
    delete state[e.target.name];
  }

  return state;
}; // redux-saga를 위한 사전준비


var onAxiosResult = function onAxiosResult(data) {
  return data;
};

var onAxiosError = function onAxiosError() {
  return "에러가 발생하였습니다.";
};

/* harmony default export */ __webpack_exports__["default"] = (lyrics);

/***/ })

})
//# sourceMappingURL=lyrics_registration.js.04825c57741c44d62c73.hot-update.js.map