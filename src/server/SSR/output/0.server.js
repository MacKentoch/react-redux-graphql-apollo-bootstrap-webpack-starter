exports.ids = [0];
exports.modules = {

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose_compose__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_modules_views__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_modules_userAuth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Register__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hoc_withEnterAnimation__ = __webpack_require__(73);
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

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__withEnterAnimation__ = __webpack_require__(74);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__withEnterAnimation__["a" /* default */]);

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_wrapDisplayName__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_wrapDisplayName___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose_wrapDisplayName__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(7);
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

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(3);
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

/***/ })

};;