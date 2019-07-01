webpackHotUpdate("static\\development\\pages\\lyrics_registration.js",{

/***/ "./modules/sagas.js":
/*!**************************!*\
  !*** ./modules/sagas.js ***!
  \**************************/
/*! exports provided: insertData, updateData, deleteData, uploadFile, rootSaga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertData", function() { return insertData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateData", function() { return updateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteData", function() { return deleteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootSaga", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./async */ "./modules/async.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onAxiosData),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(axiosSaga),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);




var INSERT_DATA = "sagas/INSERT_DATA"; // 이 액션으로 체킹해서 호출

var UPDATE_DATA = "sagas/UPDATE_DATA";
var DELETE_DATA = "sagas/DELETE_DATA";
var UPLOAD_FILE = "sagas/UPLOAD_FILE";
var insertData = function insertData(param) {
  return {
    type: INSERT_DATA,
    payload: "put",
    param: param
  };
};
var updateData = function updateData(param) {
  return {
    type: UPDATE_DATA,
    payload: "patch",
    param: param
  };
};
var deleteData = function deleteData(param) {
  return {
    type: DELETE_DATA,
    payload: "delete",
    param: param
  };
};
var uploadFile = function uploadFile(param) {
  return {
    type: UPLOAD_FILE,
    param: param
  };
};

var axiosData = function axiosData(payload, param) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a[payload]("http://localhost:3001/api", param);
};

var onUploadFile = function onUploadFile(param) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("http://localhost:3001/api/upload", param);
}; // dispatch => checking =>


function onAxiosData(action) {
  var res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onAxiosData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axiosData(action.payload, action.param);

        case 3:
          res = _context.sent;
          _context.next = 6;
          return onUploadFile(action.param);

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_async__WEBPACK_IMPORTED_MODULE_3__["axiosResult"])(res));

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_async__WEBPACK_IMPORTED_MODULE_3__["axiosError"])());

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function axiosSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function axiosSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(INSERT_DATA, onAxiosData);

        case 2:
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(UPDATE_DATA, onAxiosData);

        case 4:
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(DELETE_DATA, onAxiosData);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function rootSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([axiosSaga()]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ })

})
//# sourceMappingURL=lyrics_registration.js.82dbcc932fc24eda7a6a.hot-update.js.map