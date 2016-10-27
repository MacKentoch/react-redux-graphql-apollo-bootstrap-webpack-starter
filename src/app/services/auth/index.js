const TOKEN_KEY = 'token';
const USER_INFO = 'userInfo';

const APP_PERSIST_STORES_TYPES = ['localStorage', 'sessionStorage'];

const parse = JSON.parse;
const stringify = JSON.stringify;
/*
  auth object
  -> store "TOKEN_KEY"
  - default storage is "localStorage"
  - default token key is 'token'
 */
export const auth = {
  // -------------------------
  // token
  // -------------------------
  getToken(fromStorage = APP_PERSIST_STORES_TYPES[0], tokenKey = TOKEN_KEY) {
    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return (localStorage && localStorage.getItem(tokenKey)) || null;
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return (sessionStorage && sessionStorage.getItem(tokenKey)) || null;
    }
    // default:
    return null;
  },

  setToken(value = '', toStorage = APP_PERSIST_STORES_TYPES[0], tokenKey = TOKEN_KEY) {
    if (!value || value.length <= 0) {
      return;
    }
    // localStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(tokenKey, value);
      }
    }
    // sessionStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(tokenKey, value);
      }
    }
  },
  /*
      Note: 'isAuthenticated' just checks 'tokenKey' on store (localStorage by default or sessionStorage)

      You may think: 'ok I just put an empty token key and I have access to protected routes?''
          -> answer is:  YES^^
       BUT
       -> : your backend will not recognize a wrong token so private data or safe and you protected view could be a bit ugly without any data.

       => ON CONCLUSION: this aim of 'isAuthenticated'
          -> is to help for a better "user experience"  (= better than displaying a view with no data since server did not accept the user).
          -> it is not a security purpose (security comes from backend, since frontend is easily hackable => user has access to all your frontend)
   */
  isAuthenticated(fromStorage = APP_PERSIST_STORES_TYPES[0], tokenKey = TOKEN_KEY) {
    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      if ((localStorage && localStorage.getItem(tokenKey))) {
        return true;
      } else {
        return false;
      }
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      if ((sessionStorage && sessionStorage.getItem(tokenKey))) {
        return true;
      } else {
        return false;
      }
    }
    // default:
    return false;
  },

  clearToken(tokenKey = TOKEN_KEY) {
    // localStorage:
    if (localStorage && localStorage[tokenKey]) {
      localStorage.removeItem(tokenKey);
    }
    // sessionStorage:
    if (sessionStorage && sessionStorage[tokenKey]) {
      sessionStorage.removeItem(tokenKey);
    }
  },


  // -------------------------
  // USER_INFO
  // -------------------------
  getUserInfo(fromStorage = APP_PERSIST_STORES_TYPES[0], userInfoKey = USER_INFO) {
    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return (localStorage && parse(localStorage.getItem(userInfoKey))) || null;
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return (sessionStorage && parse(sessionStorage.getItem(userInfoKey))) || null;
    }
    // default:
    return null;
  },

  setUserInfo(value = '', toStorage = APP_PERSIST_STORES_TYPES[0], userInfoKey = USER_INFO) {
    if (!value || value.length <= 0) {
      return;
    }
    // localStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(userInfoKey, stringify(value));
      }
    }
    // sessionStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(userInfoKey, stringify(value));
      }
    }
  },

  clearUserInfo(userInfoKey = USER_INFO) {
    // localStorage:
    if (localStorage && localStorage[userInfoKey]) {
      localStorage.removeItem(userInfoKey);
    }
    // sessionStorage:
    if (sessionStorage && sessionStorage[userInfoKey]) {
      sessionStorage.removeItem(userInfoKey);
    }
  },


  // ---------------------------
  // common
  // ---------------------------
  clearAllAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }
    if (sessionStorage) {
      sessionStorage.clear();
    }
  }
};
