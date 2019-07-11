webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./modules/lyrics.js":
/*!***************************!*\
  !*** ./modules/lyrics.js ***!
  \***************************/
/*! exports provided: changeHandler, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHandler", function() { return changeHandler; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


// action
var CHANGE_HANDLER = "lyrics/CHANGE_HANDLER"; //action creator

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
    case CHANGE_HANDLER:
      return onChangeHandler(state, action.e);

    default:
      return state;
  }
}; // create functions
// 값이 변경될 때마다 값에 대한 내용을 넣어줌 // 사용안할듯


var onChangeHandler = function onChangeHandler(state, e) {
  e.target && (state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));

  if (e.target.value === "") {
    delete state[e.target.name];
  }

  if (e.target.name === "file") {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      formData: formData
    });
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (lyrics);

/***/ }),

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/buffer/index.js":
false,

/***/ "./node_modules/core-util-is/lib/util.js":
false,

/***/ "./node_modules/events/events.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/immediate/lib/browser.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/jquery/dist/jquery.js":
false,

/***/ "./node_modules/jszip/lib/base64.js":
false,

/***/ "./node_modules/jszip/lib/compressedObject.js":
false,

/***/ "./node_modules/jszip/lib/compressions.js":
false,

/***/ "./node_modules/jszip/lib/crc32.js":
false,

/***/ "./node_modules/jszip/lib/defaults.js":
false,

/***/ "./node_modules/jszip/lib/external.js":
false,

/***/ "./node_modules/jszip/lib/flate.js":
false,

/***/ "./node_modules/jszip/lib/generate/ZipFileWorker.js":
false,

/***/ "./node_modules/jszip/lib/generate/index.js":
false,

/***/ "./node_modules/jszip/lib/index.js":
false,

/***/ "./node_modules/jszip/lib/load.js":
false,

/***/ "./node_modules/jszip/lib/nodejs/NodejsStreamInputAdapter.js":
false,

/***/ "./node_modules/jszip/lib/nodejs/NodejsStreamOutputAdapter.js":
false,

/***/ "./node_modules/jszip/lib/nodejsUtils.js":
false,

/***/ "./node_modules/jszip/lib/object.js":
false,

/***/ "./node_modules/jszip/lib/readable-stream-browser.js":
false,

/***/ "./node_modules/jszip/lib/reader/ArrayReader.js":
false,

/***/ "./node_modules/jszip/lib/reader/DataReader.js":
false,

/***/ "./node_modules/jszip/lib/reader/NodeBufferReader.js":
false,

/***/ "./node_modules/jszip/lib/reader/StringReader.js":
false,

/***/ "./node_modules/jszip/lib/reader/Uint8ArrayReader.js":
false,

/***/ "./node_modules/jszip/lib/reader/readerFor.js":
false,

/***/ "./node_modules/jszip/lib/signature.js":
false,

/***/ "./node_modules/jszip/lib/stream/ConvertWorker.js":
false,

/***/ "./node_modules/jszip/lib/stream/Crc32Probe.js":
false,

/***/ "./node_modules/jszip/lib/stream/DataLengthProbe.js":
false,

/***/ "./node_modules/jszip/lib/stream/DataWorker.js":
false,

/***/ "./node_modules/jszip/lib/stream/GenericWorker.js":
false,

/***/ "./node_modules/jszip/lib/stream/StreamHelper.js":
false,

/***/ "./node_modules/jszip/lib/support.js":
false,

/***/ "./node_modules/jszip/lib/utf8.js":
false,

/***/ "./node_modules/jszip/lib/utils.js":
false,

/***/ "./node_modules/jszip/lib/zipEntries.js":
false,

/***/ "./node_modules/jszip/lib/zipEntry.js":
false,

/***/ "./node_modules/jszip/lib/zipObject.js":
false,

/***/ "./node_modules/lie/lib/browser.js":
false,

/***/ "./node_modules/pako/index.js":
false,

/***/ "./node_modules/pako/lib/deflate.js":
false,

/***/ "./node_modules/pako/lib/inflate.js":
false,

/***/ "./node_modules/pako/lib/utils/common.js":
false,

/***/ "./node_modules/pako/lib/utils/strings.js":
false,

/***/ "./node_modules/pako/lib/zlib/adler32.js":
false,

/***/ "./node_modules/pako/lib/zlib/constants.js":
false,

/***/ "./node_modules/pako/lib/zlib/crc32.js":
false,

/***/ "./node_modules/pako/lib/zlib/deflate.js":
false,

/***/ "./node_modules/pako/lib/zlib/gzheader.js":
false,

/***/ "./node_modules/pako/lib/zlib/inffast.js":
false,

/***/ "./node_modules/pako/lib/zlib/inflate.js":
false,

/***/ "./node_modules/pako/lib/zlib/inftrees.js":
false,

/***/ "./node_modules/pako/lib/zlib/messages.js":
false,

/***/ "./node_modules/pako/lib/zlib/trees.js":
false,

/***/ "./node_modules/pako/lib/zlib/zstream.js":
false,

/***/ "./node_modules/pptxgenjs/dist/pptxgen.colors.js":
false,

/***/ "./node_modules/pptxgenjs/dist/pptxgen.min.js":
false,

/***/ "./node_modules/pptxgenjs/dist/pptxgen.shapes.js":
false,

/***/ "./node_modules/process-nextick-args/index.js":
false,

/***/ "./node_modules/readable-stream/duplex-browser.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/readable-stream/passthrough.js":
false,

/***/ "./node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/readable-stream/transform.js":
false,

/***/ "./node_modules/readable-stream/writable-browser.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/set-immediate-shim/index.js":
false,

/***/ "./node_modules/setimmediate/setImmediate.js":
false,

/***/ "./node_modules/stream-browserify/index.js":
false,

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
false,

/***/ "./node_modules/timers-browserify/main.js":
false,

/***/ "./node_modules/util-deprecate/browser.js":
false,

/***/ 0:
false,

/***/ 1:
false,

/***/ 2:
false,

/***/ 3:
false,

/***/ 4:
false,

/***/ 5:
false

})
//# sourceMappingURL=_app.js.caef67fff818fba07802.hot-update.js.map