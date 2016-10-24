import moment from 'moment';
import { auth } from '../../services/auth';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////

const CHECK_IS_USER_IS_AUTHENTICATED = 'CHECK_IS_USER_IS_AUTHENTICATED';

const RECEIVED_USER_LOGGED_IN  = 'RECEIVED_USER_LOGGED_IN';
const ERROR_USER_LOGGED_IN = 'ERROR_USER_LOGGED_IN';

const SET_LOADING_LOGGED_IN = 'SET_LOADING_LOGGED_IN';
const UNSET_LOADING_LOGGED_IN = 'UNSET_LOADING_LOGGED_IN';

const RECEIVED_USER_REGISTER  = 'RECEIVED_USER_REGISTER';
const ERROR_USER_REGISTER = 'ERROR_USER_REGISTER';

const SET_LOADING_REGISTER = 'SET_LOADING_REGISTER';
const UNSET_LOADING_REGISTER = 'UNSET_LOADING_REGISTER';

// /////////////////////
// reducer
// /////////////////////
const initialState = {
  isAuthenticated: false,
  lastActionTime: null,
  mutationLoading: false
};

export default function (state = initialState, action) {
  switch (action.type) {

  case RECEIVED_USER_LOGGED_IN:
  case RECEIVED_USER_REGISTER:
    return {
      ...state,
      lastActionTime: action.time,
      isAuthenticated: action.isAuthenticated
    };

  case ERROR_USER_LOGGED_IN:
  case ERROR_USER_REGISTER:
    return {
      ...state,
      lastActionTime: action.time,
      isAuthenticated: action.isAuthenticated
    };

  case SET_LOADING_LOGGED_IN:
  case SET_LOADING_REGISTER:
  case UNSET_LOADING_LOGGED_IN:
  case UNSET_LOADING_REGISTER:
    return {
      ...state,
      lastActionTime: action.time,
      mutationLoading: action.loading
    };

  case CHECK_IS_USER_IS_AUTHENTICATED:
    return {
      ...state,
      lastActionTime: action.time,
      isAuthenticated: action.isAuthenticated
    };

  default:
    return state;
  }
}

// /////////////////////
// action creators
// /////////////////////

// login sucess:
export function receivedUserLoggedIn(userToken = null, time = moment().format(dateFormat)) {
  const isAuthenticated = userToken ? true : false;

  auth.clearToken(); // clear previous token
  auth.setToken(userToken); // set token to default store = localStorage and to default token key = 'token'

  return {
    type: RECEIVED_USER_LOGGED_IN,
    time,
    isAuthenticated
  };
}
// login error:
export function errorUserLoggedIn(errors = null, time = moment().format(dateFormat)) {
  auth.clearToken(); // clear previous token

  return {
    type: ERROR_USER_LOGGED_IN,
    time,
    errors,
    isAuthenticated: false
  };
}
export function setLoadingStateForUserLogin(time = moment().format(dateFormat)) {
  return {
    type: SET_LOADING_LOGGED_IN,
    time,
    loading: true
  };
}
export function unsetLoadingStateForUserLogin(time = moment().format(dateFormat)) {
  return {
    type: UNSET_LOADING_LOGGED_IN,
    time,
    loading: false
  };
}
// register sucess:
export function receivedUserRegister(userToken = null, time = moment().format(dateFormat)) {
  const isAuthenticated = userToken ? true : false;

  auth.clearToken(); // clear previous token
  auth.setToken(userToken); // set token to default store = localStorage and to default token key = 'token'

  return {
    type: RECEIVED_USER_REGISTER,
    time,
    isAuthenticated
  };
}
// register error:
export function errorUserRegister(errors = null, time = moment().format(dateFormat)) {
  auth.clearToken(); // clear previous token

  return {
    type: ERROR_USER_REGISTER,
    time,
    errors,
    isAuthenticated: false
  };
}
export function setLoadingStateForUserRegister(time = moment().format(dateFormat)) {
  return {
    type: SET_LOADING_REGISTER,
    time,
    loading: true
  };
}
export function unsetLoadingStateForUserRegister(time = moment().format(dateFormat)) {
  return {
    type: UNSET_LOADING_REGISTER,
    time,
    loading: false
  };
}

// check user auth (check token)
export function checkIfUserIsAuthenticated(time = moment().format(dateFormat)) {
  const isAuthenticated = auth.getToken() ? true : false;
  return {
    type: CHECK_IS_USER_IS_AUTHENTICATED,
    time,
    isAuthenticated: isAuthenticated
  };
}
