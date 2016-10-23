const TOKEN_KEY = 'token';

const APP_PERSIST_STORES_TYPES = ['localStorage', 'sessionStorage'];

/*
  auth object
  -> store "TOKEN_KEY"
  - default storage is "localStorage"
  - default token key is 'token'
 */
export const auth = {

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

  isAthenticated(fromStorage = APP_PERSIST_STORES_TYPES[0], tokenKey = TOKEN_KEY) {
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

  clearAllAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }
    if (sessionStorage) {
      sessionStorage.clear();
    }
  }
};
