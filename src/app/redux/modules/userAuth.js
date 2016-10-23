import moment from 'moment';
import { auth } from '../../services/auth';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////

const RECEIVED_USER_LOGGED_IN  = 'RECEIVED_USER_LOGGED_IN';
const ERROR_USER_LOGGED_IN = 'ERROR_USER_LOGGED_IN';


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
    return {
      ...state,
      lastActionTime: action.time,
      isAuthenticated: action.isAuthenticated
    };

  case ERROR_USER_LOGGED_IN:
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

export function errorUserLoggedIn(errors = null, time = moment().format(dateFormat)) {
  auth.clearToken(); // clear previous token

  return {
    type: ERROR_USER_LOGGED_IN,
    time,
    errors,
    isAuthenticated: false
  };
}
