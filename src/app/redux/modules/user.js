import moment from 'moment';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
const RECEIVED_USER_INFO  = 'RECEIVED_USER_INFO';
const ERROR_USER_INFO = 'ERROR_USER_INFO';


// /////////////////////
// reducer
// /////////////////////
const emptyUser = {
  id:  null,
  username: '',
  lastLogin: '',
  createdAt: '',
  modifiedAt: ''
};

const initialState = {
  ...emptyUser,
  lastRefreshTime: ''
};

export default function (state = initialState, action) {
  switch (action.type) {

  case RECEIVED_USER_INFO:
    return {
      ...state,
      id: action.user.id,
      username: action.user.username,
      lastLogin: action.user.lastLogin,
      createdAt: action.createdAt,
      modifiedAt: action.modifiedAt,
      lastRefreshTime: action.time
    };

  case ERROR_USER_INFO:
    return {
      ...state,
      id: initialState.id,
      username: initialState.username,
      lastLogin: initialState.lastLogin,
      createdAt: initialState.createdAt,
      modifiedAt: initialState.modifiedAt,
      lastRefreshTime: action.time
    };

  default:
    return state;
  }
}


// /////////////////////
// action creators
// /////////////////////
export function receivedUserInfo(user = emptyUser, time = moment().format(dateFormat)) {
  return {
    type: RECEIVED_USER_INFO,
    time,
    id: user.id,
    username: user.username,
    lastLogin: user.lastLogin,
    createdAt: user.createdAt,
    modifiedAt: user.modifiedAt
  };
}

export function errorUserInfo(time = moment().format(dateFormat)) {
  return {
    type: ERROR_USER_INFO,
    time
  };
}
