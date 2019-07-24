module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("H9Hk");


/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);



var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossOrigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://kit.fontawesome.com/9607a2acfb.js"
  })), children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "H9Hk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: ./util/handler.js
var handler = __webpack_require__("nzay");

// CONCATENATED MODULE: ./components/View.js




var styleSheet = {
  container: {
    background: "black",
    height: "1000px",
    color: "white",
    textAlign: "center",
    fontSize: "4em"
  },
  title: {
    fontSize: "1em",
    textAlign: "left",
    background: "black",
    color: "white",
    paddingTop: "15px",
    paddingLeft: "15px"
  }
};

var View_View = function View(_ref) {
  var data = _ref.data,
      initData = _ref.initData;
  var targetRef = Object(external_react_["useRef"])();

  var _useState = Object(external_react_["useState"])(Object(handler["b" /* contentsHandler */])(data)),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      lyrics = _useState2[0],
      setLyrics = _useState2[1];

  var ls = Object(handler["a" /* arrayHandler */])(lyrics);

  var _useState3 = Object(external_react_["useState"])(ls.filter(function (e) {
    return e.id === initData;
  })[0]),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    keyDownHandler();

    window.community = function (id) {
      setList(ls.filter(function (e) {
        return e.id === id;
      })[0]);
    };
  }, []);

  var keyDownHandler = function keyDownHandler() {
    window.addEventListener("keydown", function (e) {
      e.keyCode !== 122 && e.preventDefault();

      switch (e.keyCode) {
        case 38:
          // 위
          backMove();
          break;

        case 40:
          // 아래
          frontMove();
          break;

        case 37:
          // 왼
          backMove();
          break;

        case 39:
          // 오
          frontMove();
          break;

        case 13:
          //엔터
          frontMove();
          break;

        case 32:
          //스페이스
          frontMove();
          break;

        case 27:
          // esc
          window.close();
          break;

        default:
          break;
      }
    });
  };

  var frontMove = function frontMove() {
    var idxs = ls.map(function (e, i) {
      if (e.id === targetRef.current.id) {
        return i;
      }
    });
    var idx = idxs.filter(function (e) {
      return e !== undefined;
    })[0];

    if (list && list.title && list.id && idx + 1 !== ls.length) {
      var li = ls[idx + 1];
      setList(li);
      window.opener.communityMove(li.id);
    } else {
      alert("마지막 페이지 입니다.");
    }
  };

  var backMove = function backMove() {
    var idxs = ls.map(function (e, i) {
      if (e.id === targetRef.current.id) {
        return i;
      }
    });
    var idx = idxs.filter(function (e) {
      return e !== undefined;
    })[0];

    if (list && list.title && list.id && idx - 1 !== -1) {
      var li = ls[idx - 1];
      setList(li);
      window.opener.communityMove(li.id);
    } else {
      alert("처음 페이지 입니다.");
    }
  };

  return external_react_default.a.createElement(Layout["a" /* default */], {
    title: "View"
  }, external_react_default.a.createElement("div", {
    style: styleSheet.title
  }, list.title), external_react_default.a.createElement("div", {
    style: styleSheet.container,
    id: list.id,
    ref: targetRef
  }, (list.contents + "").split("\n").map(function (it, i) {
    return external_react_default.a.createElement("span", {
      key: i
    }, it, external_react_default.a.createElement("br", null));
  })));
};

/* harmony default export */ var components_View = (View_View);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./util/hostname.js
var hostname = __webpack_require__("tb28");

// CONCATENATED MODULE: ./pages/lyrics_view.js







var lyrics_view_lyrics_view = function lyrics_view(props) {
  return external_react_default.a.createElement(components_View, {
    data: props.data,
    initData: props.initData
  });
}; // 들어온 쿼리 id를 가지고 데이터를 부분적으로 불러와서 component에 넘겨주기


lyrics_view_lyrics_view["getInitialProps"] =
/*#__PURE__*/
function () {
  var _ref = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(req) {
    var res, initData;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return external_axios_default.a.get("".concat(hostname["a" /* default */], "/api/choice?id=") + req.query.id);

          case 2:
            res = _context.sent;
            initData = req.query.init.replace(/%23/g, "#");
            return _context.abrupt("return", {
              data: res.data,
              initData: initData
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var pages_lyrics_view = __webpack_exports__["default"] = (lyrics_view_lyrics_view);

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Y4ji":
/***/ (function(module, exports) {

module.exports = require("pptxgenjs");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "nzay":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return contentsHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return onDownloadPpt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrayHandler; });
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XXOK");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Y4ji");
/* harmony import */ var pptxgenjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pptxgenjs__WEBPACK_IMPORTED_MODULE_1__);

//import

var contentsHandler = function contentsHandler(data) {
  var l_id = data.map(function (e) {
    return e.l_id;
  });
  var title = data.map(function (e) {
    return e.title;
  });
  var contents = data.map(function (e) {
    return e.contents;
  });
  var arrayFinal = [];
  contents.forEach(function (item, i) {
    var array = [];
    var statementArr = item.map(function (e) {
      return e.statement;
    });
    statementArr.forEach(function (item2, i2) {
      var arr = [];
      var str = "";
      var splitArr = item2.split("\n");
      splitArr.forEach(function (item3, i3) {
        str += item3 + "\n";

        if (i3 % 2 !== 0) {
          arr.push(str.substring(0, str.length - 1));
          str = "";
        } else if (i3 === splitArr.length - 1 && (splitArr.length - 1) % 2 === 0) {
          arr.push(str.substring(0, str.length - 1));
        }
      });
      array.push(arr);
      arr = [];
    });
    var obj = {
      id: l_id[i],
      title: title[i],
      contents: array
    };
    arrayFinal.push(obj);
  });
  arrayFinal.forEach(function (item) {
    var arr = [];
    item.contents.forEach(function (item2) {
      arr = arr.concat(item2);
    });
    item.contents = arr;
  });
  return arrayFinal;
}; // PPT 다운로드 함수

var onDownloadPpt = function onDownloadPpt(data) {
  // data 모양새는 [{id:'0#0#0', title:'요게뱃의 노래', contents:"동그란 눈으로\n엄말 보고 있는"},{},{}]
  var pptx = new pptxgenjs__WEBPACK_IMPORTED_MODULE_1___default.a();
  pptx.setTitle("Hello world Title");
  pptx.setLayout({
    name: "A3",
    width: 16.5,
    height: 11.7
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      var slide = pptx.addNewSlide("MASTER");
      slide.back = "000000";
      slide.color = "FFFFFF";
      slide.addText(item.title, {
        fontSize: 15,
        h: 0.5
      });
      slide.addText(item.contents, {
        fontSize: 65,
        align: "center",
        valign: "top",
        w: "80%",
        h: 2,
        y: 1,
        x: 1.5
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  pptx.save("\uAC00\uC0AC\uBAA8\uC74C" + new Date());
  return "다운로드 성공";
};
var arrayHandler = function arrayHandler(lyrics) {
  var arr = [];
  lyrics.forEach(function (item, i) {
    var arr2 = item.contents;
    arr2.forEach(function (item2, i2) {
      var obj = {
        title: item.title,
        id: i + "#" + i2 + "#" + item.id,
        contents: item2
      };
      arr.push(obj);
    });
  });
  return arr;
};

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "tb28":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("http://localhost:80");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });