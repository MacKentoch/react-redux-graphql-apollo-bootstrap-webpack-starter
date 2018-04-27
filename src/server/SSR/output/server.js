module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/Users/mackentoch/GitProjects/react-redux-graphql-apollo-bootstrap-webpack-starter/docs/assets";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["enterHome"] = enterHome;
/* harmony export (immutable) */ __webpack_exports__["leaveHome"] = leaveHome;
/* harmony export (immutable) */ __webpack_exports__["enterAbout"] = enterAbout;
/* harmony export (immutable) */ __webpack_exports__["leaveAbout"] = leaveAbout;
/* harmony export (immutable) */ __webpack_exports__["enterLogin"] = enterLogin;
/* harmony export (immutable) */ __webpack_exports__["leaveLogin"] = leaveLogin;
/* harmony export (immutable) */ __webpack_exports__["enterRegister"] = enterRegister;
/* harmony export (immutable) */ __webpack_exports__["leaveRegister"] = leaveRegister;
/* harmony export (immutable) */ __webpack_exports__["enterProtected"] = enterProtected;
/* harmony export (immutable) */ __webpack_exports__["leaveProtected"] = leaveProtected;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


var dateFormat = 'DD/MM/YYYY HH:mm';

var ENTER_HOME_VIEW = 'ENTER_HOME_VIEW';
var LEAVE_HOME_VIEW = 'LEAVE_HOME_VIEW';
var ENTER_ABOUT_VIEW = 'ENTER_ABOUT_VIEW';
var LEAVE_ABOUT_VIEW = 'LEAVE_ABOUT_VIEW';
var ENTER_LOGIN_VIEW = 'ENTER_LOGIN_VIEW';
var LEAVE_LOGIN_VIEW = 'LEAVE_LOGIN_VIEW';
var ENTER_REGISTER_VIEW = 'ENTER_REGISTER_VIEW';
var LEAVE_REGISTER_VIEW = 'LEAVE_REGISTER_VIEW';

var ENTER_PROTECTED_VIEW = 'ENTER_PROTECTED_VIEW';
var LEAVE_PROTECTED_VIEW = 'LEAVE_PROTECTED_VIEW';

var initialState = {
  currentView: 'not set',
  enterTime: null,
  leaveTime: null
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var currentTime = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["format"])(new Date(), dateFormat);

  switch (action.type) {
    case ENTER_HOME_VIEW:
    case ENTER_ABOUT_VIEW:
    case ENTER_LOGIN_VIEW:
    case ENTER_REGISTER_VIEW:
      if (state.currentView !== action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          enterTime: currentTime
        });
      }
      return state;
    case LEAVE_HOME_VIEW:
    case LEAVE_ABOUT_VIEW:
    case LEAVE_LOGIN_VIEW:
    case LEAVE_REGISTER_VIEW:
      if (state.currentView === action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          leaveTime: currentTime
        });
      }
      return state;

    case ENTER_PROTECTED_VIEW:
      if (state.currentView !== action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          enterTime: currentTime
        });
      }
      return state;
    case LEAVE_PROTECTED_VIEW:
      if (state.currentView === action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          leaveTime: currentTime
        });
      }
      return state;

    default:
      return state;
  }
});

function enterHome() {
  return {
    type: ENTER_HOME_VIEW,
    currentView: 'home'
  };
}
function leaveHome() {
  return {
    type: LEAVE_HOME_VIEW,
    currentView: 'home'
  };
}

function enterAbout() {
  return {
    type: ENTER_ABOUT_VIEW,
    currentView: 'about'
  };
}
function leaveAbout() {
  return {
    type: LEAVE_ABOUT_VIEW,
    currentView: 'about'
  };
}

function enterLogin() {
  return {
    type: ENTER_LOGIN_VIEW,
    currentView: 'login'
  };
}
function leaveLogin() {
  return {
    type: LEAVE_LOGIN_VIEW,
    currentView: 'login'
  };
}

function enterRegister() {
  return {
    type: ENTER_REGISTER_VIEW,
    currentView: 'register'
  };
}
function leaveRegister() {
  return {
    type: LEAVE_REGISTER_VIEW,
    currentView: 'register'
  };
}

function enterProtected() {
  return {
    type: ENTER_PROTECTED_VIEW,
    currentView: 'protected'
  };
}
function leaveProtected() {
  return {
    type: LEAVE_PROTECTED_VIEW,
    currentView: 'protected'
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("recompose/compose");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__withEnterAnimation__ = __webpack_require__(53);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__withEnterAnimation__["a" /* default */]);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["receivedUserLoggedIn"] = receivedUserLoggedIn;
/* harmony export (immutable) */ __webpack_exports__["errorUserLoggedIn"] = errorUserLoggedIn;
/* harmony export (immutable) */ __webpack_exports__["setLoadingStateForUserLogin"] = setLoadingStateForUserLogin;
/* harmony export (immutable) */ __webpack_exports__["unsetLoadingStateForUserLogin"] = unsetLoadingStateForUserLogin;
/* harmony export (immutable) */ __webpack_exports__["receivedUserRegister"] = receivedUserRegister;
/* harmony export (immutable) */ __webpack_exports__["errorUserRegister"] = errorUserRegister;
/* harmony export (immutable) */ __webpack_exports__["setLoadingStateForUserRegister"] = setLoadingStateForUserRegister;
/* harmony export (immutable) */ __webpack_exports__["unsetLoadingStateForUserRegister"] = unsetLoadingStateForUserRegister;
/* harmony export (immutable) */ __webpack_exports__["setUserLogout"] = setUserLogout;
/* harmony export (immutable) */ __webpack_exports__["checkIfUserIsAuthenticated"] = checkIfUserIsAuthenticated;
/* harmony export (immutable) */ __webpack_exports__["resetLogError"] = resetLogError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userAuth_types__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userAuth_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__userAuth_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var dateFormat = 'DD/MM/YYYY HH:mm';

var CHECK_IS_USER_IS_AUTHENTICATED = 'CHECK_IS_USER_IS_AUTHENTICATED';

var RECEIVED_USER_LOGGED_IN = 'RECEIVED_USER_LOGGED_IN';
var ERROR_USER_LOGGED_IN = 'ERROR_USER_LOGGED_IN';

var SET_LOADING_LOGGED_IN = 'SET_LOADING_LOGGED_IN';
var UNSET_LOADING_LOGGED_IN = 'UNSET_LOADING_LOGGED_IN';

var RECEIVED_USER_REGISTER = 'RECEIVED_USER_REGISTER';
var ERROR_USER_REGISTER = 'ERROR_USER_REGISTER';

var SET_LOADING_REGISTER = 'SET_LOADING_REGISTER';
var UNSET_LOADING_REGISTER = 'UNSET_LOADING_REGISTER';

var SET_USER_LOGOUT = 'SET_USER_LOGOUT';

var RESET_LOG_ERRORS = 'RESET_LOG_ERRORS';

var emptyUser = {
  id: '',
  username: '',
  lastLogin: '',
  createdAt: '',
  modifiedAt: ''
};

var initialState = _extends({
  isAuthenticated: false,
  lastActionTime: null,
  mutationLoading: false,
  errors: null
}, emptyUser);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case RECEIVED_USER_LOGGED_IN:
    case RECEIVED_USER_REGISTER:
      return _extends({}, state, {
        lastActionTime: action.time,
        isAuthenticated: action.isAuthenticated,
        id: action.user.id,
        username: action.user.username,
        lastLogin: action.user.lastLogin,
        createdAt: action.user.createdAt,
        modifiedAt: action.user.modifiedAt,
        lastRefreshTime: action.time,
        error: null
      });

    case ERROR_USER_LOGGED_IN:
    case ERROR_USER_REGISTER:
      return _extends({}, state, {
        lastActionTime: action.time,
        isAuthenticated: action.isAuthenticated,

        error: _extends({}, action.error),

        id: initialState.id,
        username: initialState.username,
        lastLogin: initialState.lastLogin,
        createdAt: initialState.createdAt,
        modifiedAt: initialState.modifiedAt
      });

    case SET_LOADING_LOGGED_IN:
    case SET_LOADING_REGISTER:
    case UNSET_LOADING_LOGGED_IN:
    case UNSET_LOADING_REGISTER:
      return _extends({}, state, {
        lastActionTime: action.time,
        mutationLoading: action.loading
      });

    case CHECK_IS_USER_IS_AUTHENTICATED:
      return _extends({}, state, {
        lastActionTime: action.time,
        isAuthenticated: action.isAuthenticated,

        id: action.user.id,
        username: action.user.username,
        lastLogin: action.user.lastLogin,
        createdAt: action.user.createdAt,
        modifiedAt: action.user.modifiedAt
      });

    case SET_USER_LOGOUT:
      return _extends({}, state, {
        lastActionTime: action.time,
        isAuthenticated: action.isAuthenticated,
        id: action.user.id,
        username: action.user.username,
        lastLogin: action.user.lastLogin,
        createdAt: action.user.createdAt,
        modifiedAt: action.user.modifiedAt
      });

    case RESET_LOG_ERRORS:
      return _extends({}, state, {
        error: null
      });

    default:
      return state;
  }
});

function receivedUserLoggedIn() {
  var userToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyUser;
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["format"])(new Date(), dateFormat);

  var isAuthenticated = userToken ? true : false;

  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].clearAllAppStorage();
  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].setToken(userToken);
  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].setUserInfo(user);

  return {
    type: RECEIVED_USER_LOGGED_IN,
    time: time,
    isAuthenticated: isAuthenticated,
    user: user
  };
}

function errorUserLoggedIn() {
  var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["format"])(new Date(), dateFormat);

  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].clearAllAppStorage();

  return {
    type: ERROR_USER_LOGGED_IN,
    time: time,
    error: error,
    isAuthenticated: false
  };
}

function setLoadingStateForUserLogin() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["format"])(new Date(), dateFormat);

  return {
    type: SET_LOADING_LOGGED_IN,
    time: time,
    loading: true
  };
}

function unsetLoadingStateForUserLogin() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["format"])(new Date(), dateFormat);

  return {
    type: UNSET_LOADING_LOGGED_IN,
    time: time,
    loading: false
  };
}

function receivedUserRegister() {
  var userToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyUser;
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["format"])(new Date(), dateFormat);

  var isAuthenticated = userToken ? true : false;

  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].clearAllAppStorage();
  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].setToken(userToken || '');
  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].setUserInfo(user);

  return {
    type: RECEIVED_USER_REGISTER,
    time: time,
    isAuthenticated: isAuthenticated,
    user: user
  };
}

function errorUserRegister() {
  var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["format"])(new Date(), dateFormat);

  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].clearAllAppStorage();

  return {
    type: ERROR_USER_REGISTER,
    time: time,
    error: error,
    isAuthenticated: false
  };
}

function setLoadingStateForUserRegister() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["format"])(new Date(), dateFormat);

  return {
    type: SET_LOADING_REGISTER,
    time: time,
    loading: true
  };
}

function unsetLoadingStateForUserRegister() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["format"])(new Date(), dateFormat);

  return {
    type: UNSET_LOADING_REGISTER,
    time: time,
    loading: false
  };
}

function setUserLogout() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["format"])(new Date(), dateFormat);

  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].clearAllAppStorage();
  return {
    type: SET_USER_LOGOUT,
    time: time,
    isAuthenticated: false,
    user: emptyUser
  };
}

function checkIfUserIsAuthenticated() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["format"])(new Date(), dateFormat);

  var user = __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].getUserInfo() ? __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].getUserInfo() : emptyUser;

  var isAuthenticated = __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].isAuthenticated() && checkUserHasId(user) ? true : false;

  return {
    type: CHECK_IS_USER_IS_AUTHENTICATED,
    time: time,
    isAuthenticated: isAuthenticated,
    user: user
  };
}

function checkUserHasId(user) {
  return user && user.id && user.id.length > 0;
}

function resetLogError() {
  return {
    type: RESET_LOG_ERRORS
  };
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var Jumbotron = function Jumbotron(_ref) {
  var children = _ref.children;
  return _jsx('div', {
    className: 'jumbotron'
  }, void 0, children);
};

Jumbotron.displayName = 'Jumbotron';


/* harmony default export */ __webpack_exports__["a"] = (Jumbotron);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {

var path = __webpack_require__(16);
var convict = __webpack_require__(79);

var config = convict({
  env: {
    doc: 'The application environment',
    format: ['development', 'production'],
    default: 'development',
    env: 'NODE_ENV'
  },
  debug: {
    doc: 'Global debug toggle',
    format: Boolean,
    default: false,
    env: 'DEBUG'
  },
  rateLimit: {
    windowMs: {
      doc: 'rate limit withing this window in milliseconds',
      format: Number,
      default: 15 * 60 * 1000 },
    max: {
      doc: 'Max number of request each API have access within windowMs time',
      format: Number,
      default: 200 },
    delayMs: {
      doc: 'A delay before rateLimit in milliseconds',
      format: Number,
      default: 0
    }
  },
  server: {
    host: {
      doc: 'The server url',
      format: 'url',
      default: 'localhost',
      env: 'SERVER_HOST'
    },
    port: {
      doc: 'The server port number',
      format: 'port',
      default: 3001,
      env: 'PORT'
    },
    externalUrl: {
      doc: 'The server external url',
      format: 'url',
      default: 'http://localhost:3001/',
      env: 'SERVER_EXT_URL'
    },
    assetsPath: {
      doc: 'assets path',
      format: String,
      default: '../../../../../docs/',
      env: 'SERVER_ASSETS_PATH'
    },
    bodyParser: {
      limit: {
        doc: 'bodyParser limit size',
        format: String,
        default: '16mb'
      }
    }
  }
});

var env = config.get('env');
config.loadFile(path.join(__dirname, './' + env + '.json'));
config.validate();

module.exports = config;
/* WEBPACK VAR INJECTION */}.call(exports, "src/server/config"))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jwt_decode__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);




var TOKEN_KEY = 'token';
var USER_INFO = 'userInfo';

var APP_PERSIST_STORES_TYPES = ['localStorage', 'sessionStorage'];

var parse = JSON.parse;
var stringify = JSON.stringify;

var auth = {
  getToken: function getToken() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return window && window.localStorage && window.localStorage.getItem(tokenKey) || null;
    }

    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return window && window.sessionStorage && window.sessionStorage.getItem(tokenKey) || null;
    }

    return null;
  },
  setToken: function setToken() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var toStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TOKEN_KEY;

    if (!value || value.length <= 0) {
      return;
    }

    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (window && window.localStorage) {
        window.localStorage.setItem(tokenKey, value);
      }
    }

    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (window && window.sessionStorage) {
        window.sessionStorage.setItem(tokenKey, value);
      }
    }
  },
  isAuthenticated: function isAuthenticated() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (window && window.localStorage && window.localStorage.getItem(tokenKey)) {
        return true;
      } else {
        return false;
      }
    }

    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (window && window.sessionStorage && window.sessionStorage.getItem(tokenKey)) {
        return true;
      } else {
        return false;
      }
    }

    return false;
  },
  clearToken: function clearToken() {
    var storage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    if (window && window.localStorage && window.localStorage[tokenKey]) {
      window.localStorage.removeItem(tokenKey);
      return true;
    }

    if (window && window.sessionStorage && window.sessionStorage[tokenKey]) {
      window.sessionStorage.removeItem(tokenKey);
      return true;
    }

    return false;
  },
  getTokenExpirationDate: function getTokenExpirationDate(encodedToken) {
    if (!encodedToken) {
      return new Date(0);
    }

    var token = __WEBPACK_IMPORTED_MODULE_0_jwt_decode___default()(encodedToken);
    if (!token.exp) {
      return new Date(0);
    }
    var expirationDate = new Date(token.exp * 1000);
    return expirationDate;
  },
  isExpiredToken: function isExpiredToken(encodedToken) {
    var expirationDate = this.getTokenExpirationDate(encodedToken);
    var rightNow = new Date();
    var isExpiredToken = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isAfter"])(rightNow, expirationDate);

    return isExpiredToken;
  },
  getUserInfo: function getUserInfo() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var userInfoKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : USER_INFO;

    if (!window) {
      return '';
    }

    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return window && window.localStorage && parse(window.localStorage.getItem(userInfoKey)) || null;
    }

    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return window && window.sessionStorage && parse(window.sessionStorage.getItem(userInfoKey)) || null;
    }

    return null;
  },
  setUserInfo: function setUserInfo(value) {
    var toStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_PERSIST_STORES_TYPES[0];
    var userInfoKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : USER_INFO;

    if (!value) {
      return;
    }

    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (window && window.localStorage) {
        window.localStorage.setItem(userInfoKey, stringify(value));
      }
    }

    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (window && window.sessionStorage) {
        window.sessionStorage.setItem(userInfoKey, stringify(value));
      }
    }
  },
  clearUserInfo: function clearUserInfo() {
    var userInfoKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_INFO;

    if (window && window.localStorage && window.localStorage[userInfoKey]) {
      window.localStorage.removeItem(userInfoKey);
    }

    if (window && window.sessionStorage && window.sessionStorage[userInfoKey]) {
      window.sessionStorage.removeItem(userInfoKey);
    }
  },
  clearAllAppStorage: function clearAllAppStorage() {
    if (window && window.localStorage) {
      window.localStorage.clear();
    }
    if (window && window.sessionStorage) {
      window.sessionStorage.clear();
    }
  }
};

/* harmony default export */ __webpack_exports__["b"] = (auth);

/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_modules_userAuth_types__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_modules_userAuth_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__redux_modules_userAuth_types__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin-left: 10px;\n'], ['\n  margin-left: 10px;\n']);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var RegisterButton = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.button(_templateObject);

var _ref3 = _jsx('legend', {}, void 0, 'Register');

var _ref4 = _jsx('label', {
  htmlFor: 'inputEmail',
  className: 'col-lg-2 control-label'
}, void 0, 'Email');

var _ref5 = _jsx('label', {
  htmlFor: 'inputPassword',
  className: 'col-lg-2 control-label'
}, void 0, 'Password');

var _ref6 = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"], {
  className: 'btn btn-default',
  to: '/'
}, void 0, 'Cancel');

var Register = function (_PureComponent) {
  _inherits(Register, _PureComponent);

  function Register() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Register);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Register.__proto__ || Object.getPrototypeOf(Register)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      viewEntersAnim: true,
      email: '',
      password: '',
      warning: null
    }, _this.handlesOnEmailChange = function (event) {
      if (event) {
        event.preventDefault();

        var _email = event.target.value;
        _this.setState({ email: _email });
      }
    }, _this.handlesOnPasswordChange = function (event) {
      if (event) {
        event.preventDefault();

        _this.setState({
          password: event.target.value
        });
      }
    }, _this.handlesOnRegister = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(event) {
        var _this$props, registerUser, history, _this$state, email, password, user;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                _this$props = _this.props, registerUser = _this$props.registerUser, history = _this$props.history;
                _this$state = _this.state, email = _this$state.email, password = _this$state.password;
                user = {
                  username: email,
                  password: password
                };

                _this.setState({ warning: null });

                if (_this.isValidEmail(email)) {
                  _context.next = 8;
                  break;
                }

                _this.setState({ warning: { message: 'Email is not valid.' } });
                return _context.abrupt('return');

              case 8:
                if (_this.isValidPassword(password)) {
                  _context.next = 11;
                  break;
                }

                _this.setState({
                  warning: { message: 'Password is empty or not valid.' }
                });
                return _context.abrupt('return');

              case 11:
                _context.prev = 11;
                _context.next = 14;
                return registerUser({ user: user });

              case 14:
                history.push({ pathname: '/protected' });
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context['catch'](11);

                console.log('register user went wrong..., error: ', _context.t0);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[11, 17]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.closeError = function (event) {
      if (event) {
        event.preventDefault();
      }
    }, _this.closeWarning = function (event) {
      if (event) {
        event.preventDefault();
      }
      _this.setState({ warning: null });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Register, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterRegister = this.props.enterRegister;

      enterRegister();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveRegister = this.props.leaveRegister;

      leaveRegister();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          email = _state.email,
          password = _state.password,
          warning = _state.warning;
      var _props = this.props,
          mutationLoading = _props.mutationLoading,
          error = _props.error;


      return _jsx('div', {}, void 0, _jsx('div', {
        className: 'row'
      }, void 0, _jsx('div', {
        className: 'col-md-4 col-md-offset-4'
      }, void 0, _jsx('form', {
        className: 'form-horizontal',
        noValidate: true
      }, void 0, _jsx('fieldset', {}, void 0, _ref3, _jsx('div', {
        className: 'form-group'
      }, void 0, _ref4, _jsx('div', {
        className: 'col-lg-10'
      }, void 0, _jsx('input', {
        type: 'text',
        className: 'form-control',
        id: 'inputEmail',
        placeholder: 'Email',
        value: email,
        onChange: this.handlesOnEmailChange
      }))), _jsx('div', {
        className: 'form-group'
      }, void 0, _ref5, _jsx('div', {
        className: 'col-lg-10'
      }, void 0, _jsx('input', {
        type: 'password',
        className: 'form-control',
        id: 'inputPassword',
        placeholder: 'Password',
        value: password,
        onChange: this.handlesOnPasswordChange
      }))), _jsx('div', {
        className: 'form-group'
      }, void 0, _jsx('div', {
        className: 'col-lg-10 col-lg-offset-2'
      }, void 0, _ref6, _jsx(RegisterButton, {
        className: 'btn btn-primary',
        disabled: mutationLoading,
        onClick: this.handlesOnRegister
      }, void 0, 'Register'))))), _jsx('div', {
        style: { height: '150px' }
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components__["d" /* WarningAlert */], {
        showAlert: !!warning,
        warningTitle: 'Warning',
        warningMessage: warning ? warning.message : '',
        onClose: this.closeWarning
      }), _jsx(__WEBPACK_IMPORTED_MODULE_3__components__["b" /* ErrorAlert */], {
        showAlert: !!error,
        errorTitle: 'Error',
        errorMessage: error ? error.message : '',
        onClose: this.closeError
      })))));
    }
  }, {
    key: 'isValidEmail',
    value: function isValidEmail() {
      var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (email && email.trim().length > 0) {
        return true;
      }
      return false;
    }
  }, {
    key: 'isValidPassword',
    value: function isValidPassword() {
      var password = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (password && password.trim().length > 0) {
        return true;
      }
      return false;
    }
  }]);

  return Register;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Register);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jumbotron_Jumbotron__ = __webpack_require__(13);
/* unused harmony reexport Jumbotron */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_NavigationBar__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__navigation_NavigationBar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backToTop_BackToTop__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__backToTop_BackToTop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_ErrorAlert__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__alert_ErrorAlert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_WarningAlert__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__alert_WarningAlert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_Alert__ = __webpack_require__(69);
/* unused harmony reexport Alert */









/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appConfig */


var appConfig = {
  apollo: {
    networkInterface: 'https://us-west-2.api.scaphold.io/graphql/flawless-basketball'
  },

  sw: {
    path: 'assets/sw.js'
  }
};

/* harmony default export */ __webpack_exports__["a"] = (appConfig);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
module.exports = __webpack_require__(27);


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pretty_error__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_expressServer__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);






var dev = __WEBPACK_IMPORTED_MODULE_3__config___default.a.get('env') !== 'production';
var pe = new __WEBPACK_IMPORTED_MODULE_1_pretty_error___default.a();


try {
  pe.start();

  var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_expressServer__["a" /* default */])(app, dev);
} catch (error) {
  console.log('server error: ', error);
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_serve_favicon__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middleware_ssr__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__middleware_errors__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__asyncWrap__ = __webpack_require__(80);










var expressServer = function expressServer() {
  var app = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var isDev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  try {
    if (!app) {
      console.log('Server application instance is undefined');
      throw new Error('Server application instance is undefined');
    }

    app.set('port', __WEBPACK_IMPORTED_MODULE_6__config___default.a.get('server.port'));
    app.set('ipAdress', __WEBPACK_IMPORTED_MODULE_6__config___default.a.get('server.host'));

    app.use(__WEBPACK_IMPORTED_MODULE_3_serve_favicon___default()(__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, '../../../../../docs/', 'statics/', 'favicon.ico')));
    app.use('/assets', __WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, '../../../../../docs/', 'assets/')));

    app.get('/*', Object(__WEBPACK_IMPORTED_MODULE_7__asyncWrap__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__middleware_ssr__["a" /* default */]));

    app.use(__WEBPACK_IMPORTED_MODULE_5__middleware_errors__["a" /* error404 */]);
    app.use(__WEBPACK_IMPORTED_MODULE_5__middleware_errors__["b" /* error500 */]);

    app.listen(__WEBPACK_IMPORTED_MODULE_6__config___default.a.get('server.port'), __WEBPACK_IMPORTED_MODULE_6__config___default.a.get('server.host'), function () {
      return console.log('\n          =====================================================\n          -> Server (' + __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.bgBlue('SSR') + ') \uD83C\uDFC3 (running) on ' + __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.green(__WEBPACK_IMPORTED_MODULE_6__config___default.a.get('server.host')) + ':' + __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.green(__WEBPACK_IMPORTED_MODULE_6__config___default.a.get('server.port')) + '\n          =====================================================\n        ');
    });


    return app;
  } catch (error) {
    console.log('server error: ', error);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (expressServer);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src/server/SSR/src/lib"))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serialize_javascript__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loadable_components_server__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loadable_components_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_loadable_components_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_link_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_apollo_link_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_apollo_client__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_node_fetch__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_apollo_cache_inmemory__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__front_redux_store_configureStore__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__front_redux_store_configureStore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__front_redux_store_configureStore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__front_containers_app_App__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__front_config__ = __webpack_require__(24);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

















var uri = __WEBPACK_IMPORTED_MODULE_15__front_config__["a" /* default */].apollo.networkInterface;

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_14__front_containers_app_App__["a" /* default */], {});

/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
    var location, apolloClient, context, store, sheet, _ref2, info, currentTime, currentState, preWarmedState, InitialView, html, styleTags, preloadedState, preloadedApolloState, loadableState;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            location = req.url;
            apolloClient = new __WEBPACK_IMPORTED_MODULE_10_apollo_client__["ApolloClient"]({
              ssrMode: true,
              link: new __WEBPACK_IMPORTED_MODULE_9_apollo_link_http__["HttpLink"]({ uri: uri, fetch: __WEBPACK_IMPORTED_MODULE_11_node_fetch___default.a }),
              cache: new __WEBPACK_IMPORTED_MODULE_12_apollo_cache_inmemory__["InMemoryCache"]()
            });
            context = {};
            store = __WEBPACK_IMPORTED_MODULE_13__front_redux_store_configureStore___default()();
            sheet = new __WEBPACK_IMPORTED_MODULE_3_styled_components__["ServerStyleSheet"]();


            console.log('serverRendering');

            _context.prev = 6;
            _context.next = 9;
            return fakeFetch();

          case 9:
            _ref2 = _context.sent;
            info = _ref2.info;
            currentTime = Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["format"])(new Date());
            currentState = store.getState();
            preWarmedState = _extends({}, currentState, {
              views: _extends({}, currentState.views, {
                somePropFromServer: info,
                serverTime: currentTime
              })
            });

            store = __WEBPACK_IMPORTED_MODULE_13__front_redux_store_configureStore___default()(preWarmedState);

            InitialView = _jsx(__WEBPACK_IMPORTED_MODULE_7_react_redux__["Provider"], {
              store: store
            }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["ApolloProvider"], {
              store: store,
              client: apolloClient
            }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5_react_router__["StaticRouter"], {
              location: location,
              context: context
            }, void 0, _ref3)));
            _context.next = 18;
            return Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["getDataFromTree"])(InitialView);

          case 18:
            html = '';
            styleTags = '';
            _context.prev = 20;

            html = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(sheet.collectStyles(InitialView));
            styleTags = sheet.getStyleTags();
            _context.next = 29;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context['catch'](20);

            console.log('server rendering error: ', _context.t0);
            throw _context.t0;

          case 29:
            if (!context.url) {
              _context.next = 32;
              break;
            }

            res.redirect(context.url);
            return _context.abrupt('return');

          case 32:
            preloadedState = __WEBPACK_IMPORTED_MODULE_0_serialize_javascript___default()(store.getState());
            preloadedApolloState = __WEBPACK_IMPORTED_MODULE_0_serialize_javascript___default()(apolloClient.cache.extract());
            _context.next = 36;
            return Object(__WEBPACK_IMPORTED_MODULE_6_loadable_components_server__["getLoadableState"])(InitialView);

          case 36:
            loadableState = _context.sent;
            return _context.abrupt('return', res.status(200).set('content-type', 'text/html').send(renderFullPage(html, preloadedState, preloadedApolloState, styleTags, loadableState)));

          case 40:
            _context.prev = 40;
            _context.t1 = _context['catch'](6);

            console.log('Internal server error: ', _context.t1);
            return _context.abrupt('return', res.status(500).end('Internal server error: ', _context.t1));

          case 44:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[6, 40], [20, 25]]);
  }));

  function serverRender(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return serverRender;
})());

function fakeFetch() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve({ info: 'whats up?' });
    }, 200);
  });
}

function renderFullPage(html) {
  var preloadedState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preloadedApolloState = arguments[2];
  var styleTags = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var loadableState = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

  var indexHtml = {
    template: '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>ReactJS Redux GraphQL Apollo Bootstrap Starter</title>\n        <meta charset="utf-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <meta name="description" content="ReactJS Redux GraphQL Apollo Bootstrap Starter">\n        <meta name="author" content="Erwan DATIN (MacKentoch)">\n        <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">\n        <link rel=\'stylesheet\' href=\'/assets/app.styles.css\'>\n        ' + styleTags + '\n      </head>\n      <body>\n        <section id="root"><div>' + html + '</div></section>\n        <script type="text/javascript">window.__PRELOADED_STATE__ = ' + preloadedState + '</script>\n        <script type="text/javascript">window.__APOLLO_STATE__ = ' + preloadedApolloState + '</script>\n        <script type="text/javascript" src="/assets/app.vendor.bundle.js"></script>\n        <script type="text/javascript" src="/assets/app.bundle.js"></script>\n        ' + loadableState.getScriptTag() + '\n      </body>\n    </html>\n  '
  };
  return indexHtml.template;
}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("loadable-components/server");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


if (true) {
  module.exports = __webpack_require__(41);
} else {
  module.exports = require('./configureStore.dev');
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (immutable) */ __webpack_exports__["default"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_reducers__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension__);









var histo = null;
if (typeof document !== 'undefined') {
  var createBrowserHistory = __webpack_require__(46).default;
  histo = createBrowserHistory();
}

var history = histo;

var enhancer = Object(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a, Object(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerMiddleware"])(history)));

function configureStore(initialState) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__modules_reducers__["a" /* default */], initialState, enhancer);
}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userAuth__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var appReducers = {
  views: __WEBPACK_IMPORTED_MODULE_2__views__["default"],
  userAuth: __WEBPACK_IMPORTED_MODULE_3__userAuth__["default"]
};

var reducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(_extends({}, appReducers, {
  routing: __WEBPACK_IMPORTED_MODULE_1_react_router_redux__["routerReducer"]
}));

/* harmony default export */ __webpack_exports__["a"] = (reducers);

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_modules_views__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_modules_userAuth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_MainRoutes__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_navigation_json__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_navigation_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__models_navigation_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_sw_registerServiceWorker__ = __webpack_require__(77);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var _ref2 = _jsx('h1', {});

var _ref3 = _jsx('div', {
  className: 'container-fluid'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_7__routes_MainRoutes__["a" /* default */], {}));

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_8__components__["a" /* BackToTop */], {
  minScrollY: 40,
  scrollTo: 'appContainer'
});

var App = function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      navModel: __WEBPACK_IMPORTED_MODULE_9__models_navigation_json___default.a
    }, _this.handleLeftNavItemClick = function (event, viewName) {
      if (viewName === 'logout') {
        var setUserLogout = _this.props.actions.setUserLogout;

        setUserLogout();
      }
    }, _this.handleRightNavItemClick = function (event, viewName) {
      if (viewName === 'logout') {
        var setUserLogout = _this.props.actions.setUserLogout;

        setUserLogout();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var checkIfUserIsAuthenticated = this.props.actions.checkIfUserIsAuthenticated;

      Object(__WEBPACK_IMPORTED_MODULE_10__services_sw_registerServiceWorker__["a" /* default */])();
      checkIfUserIsAuthenticated();
    }
  }, {
    key: 'render',
    value: function render() {
      var navModel = this.state.navModel;
      var userIsAuthenticated = this.props.userIsAuthenticated;


      return _jsx('div', {
        id: 'appContainer'
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8__components__["c" /* NavigationBar */], {
        brand: navModel.brand,
        navModel: navModel,
        userIsAuthenticated: userIsAuthenticated,
        handleLeftNavItemClick: this.handleLeftNavItemClick,
        handleRightNavItemClick: this.handleRightNavItemClick
      }), _ref2, _ref3, _ref4);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userIsAuthenticated: state.userAuth.isAuthenticated
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_5__redux_modules_views__, __WEBPACK_IMPORTED_MODULE_6__redux_modules_userAuth__), dispatch)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(App)));

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MainRoutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(49);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], {
  exact: true,
  path: '/',
  component: __WEBPACK_IMPORTED_MODULE_2__routes__["b" /* Home */]
});

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], {
  path: '/about',
  component: __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* About */]
});

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], {
  path: '/register',
  component: __WEBPACK_IMPORTED_MODULE_2__routes__["f" /* Register */]
});

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_2__routes__["d" /* PrivateRoute */], {
  path: '/protected',
  component: __WEBPACK_IMPORTED_MODULE_2__routes__["e" /* Protected */]
});

var _ref5 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], {
  path: '*',
  component: __WEBPACK_IMPORTED_MODULE_2__routes__["c" /* PageNotFound */]
});

var MainRoutes = function MainRoutes() {
  return _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router__["Switch"], {}, void 0, _ref, _ref2, _ref3, _ref4, _ref5);
};

/* harmony default export */ __webpack_exports__["a"] = (MainRoutes);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return About; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Protected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PrivateRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PageNotFound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_loadable_components__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_loadable_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_loadable_components__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Home = __WEBPACK_IMPORTED_MODULE_0_loadable_components___default()(function () {
  return Promise.resolve().then(function () {
    return __webpack_require__(51);
  });
}, _defineProperty({
  modules: ['../views/home']
}, 'modules', ['../views/home']));
var About = __WEBPACK_IMPORTED_MODULE_0_loadable_components___default()(function () {
  return Promise.resolve().then(function () {
    return __webpack_require__(55);
  });
}, _defineProperty({
  modules: ['../views/about']
}, 'modules', ['../views/about']));
var Register = __WEBPACK_IMPORTED_MODULE_0_loadable_components___default()(function () {
  return Promise.resolve().then(function () {
    return __webpack_require__(57);
  });
}, _defineProperty({
  modules: ['../views/register']
}, 'modules', ['../views/register']));
var Protected = __WEBPACK_IMPORTED_MODULE_0_loadable_components___default()(function () {
  return Promise.resolve().then(function () {
    return __webpack_require__(70);
  });
}, _defineProperty({
  modules: ['../views/protected']
}, 'modules', ['../views/protected']));
var PrivateRoute = __WEBPACK_IMPORTED_MODULE_0_loadable_components___default()(function () {
  return Promise.resolve().then(function () {
    return __webpack_require__(72);
  });
}, _defineProperty({
  modules: ['../components/privateRoute/PrivateRoute']
}, 'modules', ['../components/privateRoute/PrivateRoute']));
var PageNotFound = __WEBPACK_IMPORTED_MODULE_0_loadable_components___default()(function () {
  return Promise.resolve().then(function () {
    return __webpack_require__(74);
  });
}, _defineProperty({
  modules: ['../views/pageNotFound']
}, 'modules', ['../views/pageNotFound']));

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("loadable-components");

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose_compose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_modules_views__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hoc_withEnterAnimation__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  query GetUser($user: ID!) {\n    getUser(id: $user) {\n      id\n      username\n      createdAt\n      modifiedAt\n      lastLogin\n    }\n    getRole(id: $user) {\n      id\n      name\n      createdAt\n    }\n  }\n'], ['\n  query GetUser($user: ID!) {\n    getUser(id: $user) {\n      id\n      username\n      createdAt\n      modifiedAt\n      lastLogin\n    }\n    getRole(id: $user) {\n      id\n      name\n      createdAt\n    }\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView,
    userAuth: state.userAuth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_5__redux_modules_views__), dispatch);
};

var getUserQuery = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

var getUserQueryOptions = {
  options: function options(_ref) {
    var userAuth = _ref.userAuth;
    return {
      variables: {
        user: userAuth.id ? userAuth.id : ''
      }
    };
  },
  skip: function skip(_ref2) {
    var isAuthenticated = _ref2.isAuthenticated;
    return !isAuthenticated;
  },
  name: 'getCurrentUser',
  props: function props(_ref3) {
    var ownProps = _ref3.ownProps,
        _ref3$getCurrentUser = _ref3.getCurrentUser,
        loading = _ref3$getCurrentUser.loading,
        getUser = _ref3$getCurrentUser.getUser,
        getRole = _ref3$getCurrentUser.getRole,
        refetch = _ref3$getCurrentUser.refetch;

    return {
      userLoading: loading,
      user: _extends({}, getRole, getUser),
      refetchUser: refetch
    };
  }
};


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_7__hoc_withEnterAnimation__["a" /* default */])(), Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps), Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(getUserQuery, getUserQueryOptions))(__WEBPACK_IMPORTED_MODULE_6__Home__["a" /* default */]));

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_jumbotron_Jumbotron__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _ref = _jsx('div', {}, 'homeView', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_jumbotron_Jumbotron__["a" /* default */], {}, void 0, _jsx('h1', {}, void 0, 'Full ES2015 ReactJS + Redux + graphQL + Apollo + Bootstrap'), _jsx('h2', {}, void 0, 'with Hot Reload!!!'), _jsx('h2', {}, void 0, 'with React Router (Server Side rendered SPA)'), _jsx('h1', {}, void 0, 'Starter'), _jsx('p', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"], {
  className: 'btn btn-success btn-lg',
  to: '/about'
}, void 0, _jsx('i', {
  className: 'fa fa-info'
}), '\xA0 go to about'))));

var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterHome = this.props.enterHome;

      enterHome();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveHome = this.props.leaveHome;

      leaveHome();
    }
  }, {
    key: 'render',
    value: function render() {
      return _ref;
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_wrapDisplayName__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_wrapDisplayName___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose_wrapDisplayName__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n'], ['\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n      opacity: 0;\n      animation-name: ', ';\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    '], ['\n      opacity: 0;\n      animation-name: ', ';\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    ']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var fadeIn = Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["keyframes"])(_templateObject);

var AnimatedDiv = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject2, function (_ref) {
  var viewEnter = _ref.viewEnter;
  return viewEnter && Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(_templateObject3, fadeIn);
});


function withEnterAnimation() {
  return function (BaseComponent) {
    var WithEnterAnimation = function (_Component) {
      _inherits(WithEnterAnimation, _Component);

      function WithEnterAnimation() {
        _classCallCheck(this, WithEnterAnimation);

        return _possibleConstructorReturn(this, (WithEnterAnimation.__proto__ || Object.getPrototypeOf(WithEnterAnimation)).apply(this, arguments));
      }

      _createClass(WithEnterAnimation, [{
        key: 'render',
        value: function render() {
          var passProps = _objectWithoutProperties(this.props, []);

          return _jsx(AnimatedDiv, {
            viewEnter: true
          }, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BaseComponent, passProps));
        }
      }]);

      return WithEnterAnimation;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    if (false) {
      WithEnterAnimation.displayName = wrapDisplayName(BaseComponent, 'withEnterAnimation');
    }


    return WithEnterAnimation;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (withEnterAnimation);

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("recompose/wrapDisplayName");

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_modules_views__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__About__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hoc_withEnterAnimation__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_3__redux_modules_views__), dispatch);
};


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_2_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_5__hoc_withEnterAnimation__["a" /* default */])(), Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps))(__WEBPACK_IMPORTED_MODULE_4__About__["a" /* default */]));

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _ref = _jsx('div', {}, void 0, _jsx('h1', {}, void 0, 'About'));

var About = function (_PureComponent) {
  _inherits(About, _PureComponent);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterAbout = this.props.enterAbout;

      enterAbout();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveAbout = this.props.leaveAbout;

      leaveAbout();
    }
  }, {
    key: 'render',
    value: function render() {
      return _ref;
    }
  }]);

  return About;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (About);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose_compose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_modules_views__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_modules_userAuth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Register__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hoc_withEnterAnimation__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  mutation CreateUser($user: CreateUserInput!) {\n    createUser(input: $user) {\n      token\n    }\n  }\n'], ['\n  mutation CreateUser($user: CreateUserInput!) {\n    createUser(input: $user) {\n      token\n    }\n  }\n']);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView,

    userIsAuthenticated: state.userAuth.isAuthenticated,
    mutationLoading: state.userAuth.mutationLoading,

    error: state.userAuth.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_5__redux_modules_views__, __WEBPACK_IMPORTED_MODULE_6__redux_modules_userAuth__), dispatch);
};

var createUserMutation = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

var createUserMutationOptions = {
  props: function props(_ref) {
    var ownProps = _ref.ownProps,
        mutate = _ref.mutate;
    return {
      registerUser: function registerUser(user) {
        var _this = this;

        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var payload, _ref2, token;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  ownProps.setLoadingStateForUserRegister();

                  _context.prev = 1;
                  payload = { variables: _extends({}, user) };
                  _context.next = 5;
                  return mutate(payload);

                case 5:
                  _ref2 = _context.sent;
                  token = _ref2.data.createUser.token;

                  ownProps.receivedUserRegister(token, user);
                  ownProps.unsetLoadingStateForUserRegister();
                  return _context.abrupt('return', Promise.resolve());

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](1);

                  ownProps.errorUserRegister(_context.t0);
                  ownProps.unsetLoadingStateForUserRegister();
                  return _context.abrupt('return', Promise.reject(_context.t0));

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[1, 12]]);
        }))();
      }
    };
  }
};


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_8__hoc_withEnterAnimation__["a" /* default */])(), Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps), Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(createUserMutation, createUserMutationOptions))(__WEBPACK_IMPORTED_MODULE_7__Register__["a" /* default */]));

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__humburger_Humburger__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leftNav_LeftNav__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rightNav_RightNav__ = __webpack_require__(62);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding-left: 2%;\n  padding-right: 2%;\n'], ['\n  padding-left: 2%;\n  padding-right: 2%;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_2__humburger_Humburger__["a" /* default */], {});

var NavigationBar = function NavigationBar(_ref) {
  var brand = _ref.brand,
      navModel = _ref.navModel,
      handleLeftNavItemClick = _ref.handleLeftNavItemClick,
      handleRightNavItemClick = _ref.handleRightNavItemClick,
      userIsAuthenticated = _ref.userIsAuthenticated;

  return _jsx('nav', {
    className: 'navbar navbar-default'
  }, void 0, _jsx(Container, {}, void 0, _jsx('div', {
    className: 'navbar-header'
  }, void 0, _ref2, _jsx('a', {
    className: 'navbar-brand'
  }, void 0, brand)), _jsx('div', {
    className: 'collapse navbar-collapse',
    id: 'bs-example-navbar-collapse-1'
  }, void 0, _jsx('ul', {
    className: 'nav navbar-nav'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__leftNav_LeftNav__["a" /* default */], {
    leftLinks: navModel.leftLinks,
    onLeftNavButtonClick: handleLeftNavItemClick,
    userIsAuthenticated: userIsAuthenticated
  })), _jsx('ul', {
    className: 'nav navbar-nav navbar-right'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__rightNav_RightNav__["a" /* default */], {
    rightLinks: navModel.rightLinks,
    onRightNavButtonClick: handleRightNavItemClick,
    userIsAuthenticated: userIsAuthenticated
  })))));
};

NavigationBar.defaultProps = {
  brand: 'brand',
  userIsAuthenticated: false
};

NavigationBar.displayName = 'NavigationBar';


/* harmony default export */ __webpack_exports__["a"] = (NavigationBar);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref = _jsx("button", {
  className: "navbar-toggle collapsed",
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#bs-example-navbar-collapse-1"
}, void 0, _jsx("span", {
  className: "sr-only"
}, void 0, "Toggle navigation"), _jsx("span", {
  className: "icon-bar"
}), _jsx("span", {
  className: "icon-bar"
}), _jsx("span", {
  className: "icon-bar"
}));

var Humburger = function Humburger() {
  return _ref;
};

Humburger.displayName = 'Humburger';


/* harmony default export */ __webpack_exports__["a"] = (Humburger);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leftNavButton_LeftNavButton__ = __webpack_require__(61);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var LeftNav = function LeftNav(_ref) {
  var leftLinks = _ref.leftLinks,
      onLeftNavButtonClick = _ref.onLeftNavButtonClick;
  return _jsx('ul', {
    className: 'nav navbar-nav'
  }, void 0, leftLinks.map(function (_ref2, index) {
    var link = _ref2.link,
        label = _ref2.label,
        viewName = _ref2.viewName;

    return _jsx(__WEBPACK_IMPORTED_MODULE_1__leftNavButton_LeftNavButton__["a" /* default */], {
      link: link,
      label: label,
      viewName: viewName,
      onClick: onLeftNavButtonClick
    }, index);
  }));
};

LeftNav.displayName = 'LeftNav';


/* harmony default export */ __webpack_exports__["a"] = (LeftNav);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var LeftNavButton = function (_PureComponent) {
  _inherits(LeftNavButton, _PureComponent);

  function LeftNavButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LeftNavButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LeftNavButton.__proto__ || Object.getPrototypeOf(LeftNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleLeftNavItemClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          viewName = _this$props.viewName;

      onClick(event, viewName);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LeftNavButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          link = _props.link,
          label = _props.label;


      return _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], {
        to: link,
        onClick: this.handleLeftNavItemClick
      }, void 0, label));
    }
  }]);

  return LeftNavButton;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (LeftNavButton);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rightNavButton_RightNavButton__ = __webpack_require__(63);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var RightNav = function RightNav(_ref) {
  var rightLinks = _ref.rightLinks,
      onRightNavButtonClick = _ref.onRightNavButtonClick,
      userIsAuthenticated = _ref.userIsAuthenticated;
  return _jsx('ul', {
    className: 'nav navbar-nav navbar-right'
  }, void 0, userIsAuthenticated ? rightLinks.filter(function (btnLink) {
    return btnLink.showWhenUserAuth === true;
  }).map(function (aLinkBtn, index) {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1__rightNavButton_RightNavButton__["a" /* default */], {
      link: aLinkBtn.link,
      label: aLinkBtn.label,
      viewName: aLinkBtn.view,
      onClick: onRightNavButtonClick
    }, index);
  }) : rightLinks.filter(function (btnLink) {
    return btnLink.showWhenUserAuth === false || btnLink.alwaysShows === true;
  }).map(function (aLinkBtn, index) {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1__rightNavButton_RightNavButton__["a" /* default */], {
      link: aLinkBtn.link,
      label: aLinkBtn.label,
      viewName: aLinkBtn.view,
      onClick: onRightNavButtonClick
    }, index);
  }));
};

RightNav.displayName = 'RightNav';


/* harmony default export */ __webpack_exports__["a"] = (RightNav);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RightNavButton = function (_PureComponent) {
  _inherits(RightNavButton, _PureComponent);

  function RightNavButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RightNavButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RightNavButton.__proto__ || Object.getPrototypeOf(RightNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleRightNavItemClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          viewName = _this$props.viewName;

      onClick(event, viewName);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RightNavButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          link = _props.link,
          label = _props.label;


      return _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], {
        to: link,
        onClick: this.handleRightNavItemClick
      }, void 0, label));
    }
  }]);

  return RightNavButton;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (RightNavButton);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backToTopButton_BackToTopButton__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_motion__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_motion__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var BackToTop = function (_Component) {
  _inherits(BackToTop, _Component);

  function BackToTop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BackToTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BackToTop.__proto__ || Object.getPrototypeOf(BackToTop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      windowScrollY: 0,
      showBackButton: false,
      tickingScrollObserve: false
    }, _this.handleWindowScroll = function () {
      if (window) {
        var _this$state = _this.state,
            _windowScrollY = _this$state.windowScrollY,
            _tickingScrollObserve = _this$state.tickingScrollObserve;
        var _minScrollY = _this.props.minScrollY;

        var currentWindowScrollY = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scollTop;


        if (!_tickingScrollObserve) {
          window.requestAnimationFrame(function () {
            if (_windowScrollY !== currentWindowScrollY) {
              var shouldShowBackButton = currentWindowScrollY >= _minScrollY ? true : false;

              _this.setState({
                windowScrollY: currentWindowScrollY,
                showBackButton: shouldShowBackButton
              });
            }
            _this.setState({ tickingScrollObserve: false });
          });
        }
        _this.setState({ tickingScrollObserve: true });
      }
    }, _this.handlesOnBackButtonClick = function (event) {
      if (event) {
        event.preventDefault();
      }
      var minScrollY = _this.props.minScrollY;
      var windowScrollY = _this.state.windowScrollY;


      if (window && windowScrollY && windowScrollY > minScrollY) {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BackToTop, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', this.handleWindowScroll);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', this.handleWindowScroll);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var showBackButton = this.state.showBackButton;


      return _jsx(__WEBPACK_IMPORTED_MODULE_2_react_motion__["Motion"], {
        style: {
          interpolatedX: Object(__WEBPACK_IMPORTED_MODULE_2_react_motion__["spring"])(showBackButton ? 0 : 120, __WEBPACK_IMPORTED_MODULE_2_react_motion__["presets"].stiff)
        }
      }, void 0, function (_ref2) {
        var interpolatedX = _ref2.interpolatedX;
        return _jsx(__WEBPACK_IMPORTED_MODULE_1__backToTopButton_BackToTopButton__["a" /* default */], {
          position: 'bottom-right',
          onClick: _this2.handlesOnBackButtonClick,
          motionStyle: {
            WebkitTransform: 'translate3d(' + interpolatedX + 'px, 0, 0)',
            transform: 'translate3d(' + interpolatedX + 'px, 0, 0)'
          }
        });
      });
    }
  }]);

  return BackToTop;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

BackToTop.defaultProps = {
  minScrollY: 120
};


/* harmony default export */ __webpack_exports__["a"] = (BackToTop);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UpIcon__ = __webpack_require__(66);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var defaultBackGroundColor = '#4A4A4A';
var sideOffset = '-10px';
var bottomOffset = '40px';
var defaultWidth = '100px';
var defaultZindex = 10;
var defaultOpacity = 0.5;
var defaultStyle = {
  position: 'fixed',
  right: sideOffset,
  left: '',
  bottom: bottomOffset,
  width: defaultWidth,
  zIndex: defaultZindex,
  opacity: defaultOpacity,
  backgroundColor: defaultBackGroundColor
};

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_2__UpIcon__["a" /* default */], {
  color: '#F1F1F1'
});

var BackToTopButton = function BackToTopButton(_ref) {
  var onClick = _ref.onClick,
      position = _ref.position,
      children = _ref.children,
      motionStyle = _ref.motionStyle;

  var buttonStyle = setPosition(position, _extends({}, motionStyle, defaultStyle));

  return _jsx('button', {
    style: buttonStyle,
    className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ btn: true }),
    onClick: onClick
  }, void 0, !children && _jsx('div', {
    style: { marginRight: '10px' }
  }, void 0, _ref2), !!children && children);
};

BackToTopButton.defaultProps = {
  position: 'bottom-right'
};

BackToTopButton.displayName = 'BackToTopButton';

function setPosition() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bottom-right';
  var refStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultStyle;

  var style = _extends({}, refStyle);

  switch (position) {
    case 'bottom-right':
      style.right = sideOffset;
      style.left = '';
      return style;

    case 'bottom-left':
      style.right = '';
      style.left = sideOffset;
      return style;

    default:
      return refStyle;
  }
}


/* harmony default export */ __webpack_exports__["a"] = (BackToTopButton);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref2 = _jsx("path", {
  d: "M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1\n    c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z"
});

var UpIcon = function UpIcon(_ref) {
  var color = _ref.color;
  return _jsx("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 512 512",
    fill: "" + color
  }, void 0, _ref2);
};

UpIcon.defaultProps = {
  color: '#F1F1F1'
};

UpIcon.displayName = 'UpIcon';


/* harmony default export */ __webpack_exports__["a"] = (UpIcon);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_motion__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ErrorAlert = function (_PureComponent) {
  _inherits(ErrorAlert, _PureComponent);

  function ErrorAlert() {
    _classCallCheck(this, ErrorAlert);

    return _possibleConstructorReturn(this, (ErrorAlert.__proto__ || Object.getPrototypeOf(ErrorAlert)).apply(this, arguments));
  }

  _createClass(ErrorAlert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showAlert = _props.showAlert,
          errorTitle = _props.errorTitle,
          errorMessage = _props.errorMessage,
          onClose = _props.onClose;

      var _ref2 = _jsx('button', {
        type: 'button',
        className: 'close',
        onClick: onClose
      }, void 0, '\xD7');

      var _ref3 = _jsx('strong', {}, void 0, errorTitle);

      var _ref4 = _jsx('p', {}, void 0, errorMessage);

      return _jsx(__WEBPACK_IMPORTED_MODULE_1_react_motion__["Motion"], {
        style: {
          interpolatedScale: Object(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(showAlert ? 1 : 0, __WEBPACK_IMPORTED_MODULE_1_react_motion__["presets"].stiff)
        }
      }, void 0, function (_ref) {
        var interpolatedScale = _ref.interpolatedScale;
        return _jsx('div', {
          className: 'alert alert-dismissible alert-danger',
          style: {
            WebkitTransform: 'scale(' + interpolatedScale + ')',
            transform: 'scale(' + interpolatedScale + ')'
          }
        }, void 0, _ref2, errorTitle && errorTitle.length > 0 && _ref3, _ref4);
      });
    }
  }]);

  return ErrorAlert;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

ErrorAlert.defaultProps = {
  showAlert: false
};


/* harmony default export */ __webpack_exports__["a"] = (ErrorAlert);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_motion__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var WarningAlert = function (_PureComponent) {
  _inherits(WarningAlert, _PureComponent);

  function WarningAlert() {
    _classCallCheck(this, WarningAlert);

    return _possibleConstructorReturn(this, (WarningAlert.__proto__ || Object.getPrototypeOf(WarningAlert)).apply(this, arguments));
  }

  _createClass(WarningAlert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showAlert = _props.showAlert,
          warningTitle = _props.warningTitle,
          warningMessage = _props.warningMessage,
          onClose = _props.onClose;

      var _ref2 = _jsx('button', {
        type: 'button',
        className: 'close',
        onClick: onClose
      }, void 0, '\xD7');

      var _ref3 = _jsx('strong', {}, void 0, warningTitle);

      var _ref4 = _jsx('p', {}, void 0, warningMessage);

      return _jsx(__WEBPACK_IMPORTED_MODULE_1_react_motion__["Motion"], {
        style: {
          interpolatedScale: Object(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(showAlert ? 1 : 0, __WEBPACK_IMPORTED_MODULE_1_react_motion__["presets"].stiff)
        }
      }, void 0, function (_ref) {
        var interpolatedScale = _ref.interpolatedScale;
        return _jsx('div', {
          className: 'alert alert-dismissible alert-warning',
          style: {
            WebkitTransform: 'scale(' + interpolatedScale + ')',
            transform: 'scale(' + interpolatedScale + ')'
          }
        }, void 0, _ref2, warningTitle && warningTitle.length > 0 && _ref3, _ref4);
      });
    }
  }]);

  return WarningAlert;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

WarningAlert.defaultProps = {
  showAlert: false
};


/* harmony default export */ __webpack_exports__["a"] = (WarningAlert);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_motion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Alert = function (_PureComponent) {
  _inherits(Alert, _PureComponent);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          showAlert = _props.showAlert,
          errorTitle = _props.errorTitle,
          errorMessage = _props.errorMessage,
          onClose = _props.onClose;

      var _ref2 = _jsx('button', {
        type: 'button',
        className: 'close',
        onClick: onClose
      }, void 0, '\xD7');

      var _ref3 = _jsx('strong', {}, void 0, errorTitle);

      var _ref4 = _jsx('p', {}, void 0, errorMessage);

      return _jsx(__WEBPACK_IMPORTED_MODULE_1_react_motion__["Motion"], {
        style: {
          interpolatedScale: Object(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(showAlert ? 1 : 0, __WEBPACK_IMPORTED_MODULE_1_react_motion__["presets"].stiff)
        }
      }, void 0, function (_ref) {
        var interpolatedScale = _ref.interpolatedScale;
        return _jsx('div', {
          className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
            alert: true,
            'alert-dismissible': true,
            'alert-danger': type === 'error',
            'alert-warning': type === 'warning'
          }),
          style: {
            WebkitTransform: 'scale(' + interpolatedScale + ')',
            transform: 'scale(' + interpolatedScale + ')'
          }
        }, void 0, _ref2, errorTitle && errorTitle.length > 0 && _ref3, _ref4);
      });
    }
  }]);

  return Alert;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

Alert.defaultProps = {
  showAlert: false,
  type: 'warning'
};


/* unused harmony default export */ var _unused_webpack_default_export = (Alert);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hoc_withEnterAnimation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_modules_views__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Protected__ = __webpack_require__(71);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_4__redux_modules_views__), dispatch);
};


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_2_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_3__hoc_withEnterAnimation__["a" /* default */])(), Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps))(__WEBPACK_IMPORTED_MODULE_5__Protected__["a" /* default */]));

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _ref = _jsx('h1', {
  className: 'text-danger'
}, void 0, 'Here is a protected view!');

var Protected = function (_PureComponent) {
  _inherits(Protected, _PureComponent);

  function Protected() {
    _classCallCheck(this, Protected);

    return _possibleConstructorReturn(this, (Protected.__proto__ || Object.getPrototypeOf(Protected)).apply(this, arguments));
  }

  _createClass(Protected, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterProtected = this.props.enterProtected;

      enterProtected();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveProtected = this.props.leaveProtected;

      leaveProtected();
    }
  }, {
    key: 'render',
    value: function render() {
      return _jsx('div', {}, void 0, _ref, _jsx('h2', {
        className: 'text-danger'
      }, void 0, 'You\'ve just logged in to be able to enter this view.'));
    }
  }]);

  return Protected;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Protected);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PrivateRoute = function (_Component) {
  _inherits(PrivateRoute, _Component);

  function PrivateRoute() {
    _classCallCheck(this, PrivateRoute);

    return _possibleConstructorReturn(this, (PrivateRoute.__proto__ || Object.getPrototypeOf(PrivateRoute)).apply(this, arguments));
  }

  _createClass(PrivateRoute, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          BaseComponent = _props.component,
          rest = _objectWithoutProperties(_props, ['component']);

      var location = this.props.location;


      var isUserAuthenticated = this.isAuthenticated();
      var isTokenExpired = this.isExpired();

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], _extends({}, rest, {
        render: function render(props) {
          return !isTokenExpired && isUserAuthenticated ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BaseComponent, props) : _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Redirect"], {
            to: { pathname: '/login', state: { from: location } }
          });
        }
      }));
    }
  }, {
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      var checkUserHasId = function checkUserHasId(user) {
        return user && user.id && user.id.length > 0;
      };
      var user = __WEBPACK_IMPORTED_MODULE_3__services_auth__["b" /* default */].getUserInfo() ? __WEBPACK_IMPORTED_MODULE_3__services_auth__["b" /* default */].getUserInfo() : null;
      var isAuthenticated = __WEBPACK_IMPORTED_MODULE_3__services_auth__["b" /* default */].getToken() && checkUserHasId(user) ? true : false;

      return isAuthenticated;
    }
  }, {
    key: 'isExpired',
    value: function isExpired() {
      return __WEBPACK_IMPORTED_MODULE_3__services_auth__["b" /* default */].isExpiredToken(__WEBPACK_IMPORTED_MODULE_3__services_auth__["b" /* default */].getToken());
    }
  }]);

  return PrivateRoute;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["withRouter"])(PrivateRoute));

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_compose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hoc_withEnterAnimation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PageNotFound__ = __webpack_require__(75);






/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_1__hoc_withEnterAnimation__["a" /* default */])())(__WEBPACK_IMPORTED_MODULE_2__PageNotFound__["a" /* default */]));

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_jumbotron_Jumbotron__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _ref = _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_jumbotron_Jumbotron__["a" /* default */], {}, void 0, _jsx('h1', {}, void 0, 'Sorry this page does not exists...')));

var PageNotFound = function (_PureComponent) {
  _inherits(PageNotFound, _PureComponent);

  function PageNotFound() {
    _classCallCheck(this, PageNotFound);

    return _possibleConstructorReturn(this, (PageNotFound.__proto__ || Object.getPrototypeOf(PageNotFound)).apply(this, arguments));
  }

  _createClass(PageNotFound, [{
    key: 'render',
    value: function render() {
      return _ref;
    }
  }]);

  return PageNotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (PageNotFound);

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = {
	"brand": "React Redux Bootstrap Starter",
	"leftLinks": [],
	"rightLinks": [
		{
			"label": "Home",
			"link": "/",
			"view": "home",
			"isRouteBtn": true,
			"alwaysShows": true,
			"showWhenUserAuth": true,
			"hideWhenUserAuth": false
		},
		{
			"label": "Login",
			"link": "/login",
			"view": "login",
			"isRouteBtn": true,
			"alwaysShows": false,
			"showWhenUserAuth": false,
			"hideWhenUserAuth": true
		},
		{
			"label": "Register",
			"link": "/register",
			"view": "register",
			"isRouteBtn": true,
			"alwaysShows": false,
			"showWhenUserAuth": false,
			"hideWhenUserAuth": true
		},
		{
			"label": "Logout",
			"link": "/logout",
			"view": "logout",
			"isRouteBtn": true,
			"alwaysShows": false,
			"showWhenUserAuth": true,
			"hideWhenUserAuth": false
		},
		{
			"label": "About",
			"link": "/about",
			"view": "about",
			"isRouteBtn": true,
			"alwaysShows": true,
			"showWhenUserAuth": true,
			"hideWhenUserAuth": false
		},
		{
			"label": "Protected",
			"link": "/protected",
			"view": "protected",
			"isRouteBtn": true,
			"alwaysShows": true,
			"showWhenUserAuth": true,
			"hideWhenUserAuth": false
		}
	]
};

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_index__ = __webpack_require__(24);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


var swPath = __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* default */].sw.path;


function registerServiceWorker() {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register(swPath).then(function (registration) {
          console.log('SW registered: ', registration);
        }).catch(function (registrationError) {
          console.log('SW registration failed: ', registrationError);
        });
      });
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (registerServiceWorker);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return error404; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return error500; });

var error404 = function error404(req, res, next) {
  console.log('req.url: ', req.url);

  var err = new Error('Not found');

  err.status = 404;
  next(err);
};

var error500 = function error500(err, req, res, next) {
  if (err.status === 404) {
    res.status(404).send('Sorry nothing here for now...');
  }

  console.error(err);
  res.status(500).send('internal server error');
};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("convict");

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__config__);



var shouldLogErrors = __WEBPACK_IMPORTED_MODULE_0__config___default.a.get('debug');

/* harmony default export */ __webpack_exports__["a"] = (function (fn) {
  if (fn.length <= 3) {
    return function (req, res, next) {
      return fn(req, res, next).catch(function (error) {
        if (shouldLogErrors) {
          console.log('middleware error: ', error);
        }
        next();
      });
    };
  } else {
    return function (err, req, res, next) {
      return fn(err, req, res, next).catch(function (error) {
        if (shouldLogErrors) {
          console.log('middleware error: ', error);
        }
        next();
      });
    };
  }
});

/***/ })
/******/ ]);