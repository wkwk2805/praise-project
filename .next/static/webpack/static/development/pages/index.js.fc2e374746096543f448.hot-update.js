webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./modules/lyrics.js":
/*!***************************!*\
  !*** ./modules/lyrics.js ***!
  \***************************/
/*! exports provided: downloadPPT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadPPT", function() { return downloadPPT; });
/* harmony import */ var _action_function_download_ppt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_function/download_ppt */ "./modules/action_function/download_ppt.js");
 // action

var DOWNLOAD_PPT = "lyrics/DOWNLOAD_PPT";
var downloadPPT = function downloadPPT() {
  return {
    type: DOWNLOAD_PPT
  };
}; // initialState

var initialState = {}; //Reducers

var lyrics = function lyrics() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case DOWNLOAD_PPT:
      alert("Hello");
      return state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (lyrics);

/***/ })

})
//# sourceMappingURL=index.js.fc2e374746096543f448.hot-update.js.map