import moment from 'moment';
import { auth } from '../../services/auth';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////

const RECEIVED_USER_LOGGED_IN  = 'RECEIVED_USER_LOGGED_IN';
const ERROR_USER_LOGGED_IN = 'ERROR_USER_LOGGED_IN';

const RECEIVED_USER_REGISTER  = 'RECEIVED_USER_REGISTER';
const ERROR_USER_REGISTER = 'ERROR_USER_REGISTER';

// /////////////////////
// reducer
// /////////////////////
const initialState = {
  isAuthenticated: false,
  lastActionTime: null
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
