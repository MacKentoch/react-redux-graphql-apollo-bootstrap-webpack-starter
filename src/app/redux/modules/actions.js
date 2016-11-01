// views actions creators
import {
  // home:
  enterHome,
  leaveHome,
  // about:
  enterAbout,
  leaveAbout,
  // register:
  enterRegister,
  leaveRegister,
  // login:
  enterLogin,
  leaveLogin
} from './views';

// userAuth action creators:
import {
  receivedUserLoggedIn,
  errorUserLoggedIn,
  setLoadingStateForUserLogin,
  unsetLoadingStateForUserLogin,

  receivedUserRegister,
  errorUserRegister,
  setLoadingStateForUserRegister,
  unsetLoadingStateForUserRegister,

  setUserLogout
} from './userAuth';


export {
  /* -------------------
    views
   ------------------- */
  // home:
  enterHome,
  leaveHome,
  // about:
  enterAbout,
  leaveAbout,
  // register:
  enterRegister,
  leaveRegister,
  // login:
  enterLogin,
  leaveLogin,

  /* -------------------
    userAuth
   ------------------- */
   receivedUserLoggedIn,
   errorUserLoggedIn,
   setLoadingStateForUserLogin,
   unsetLoadingStateForUserLogin,

   receivedUserRegister,
   errorUserRegister,
   setLoadingStateForUserRegister,
   unsetLoadingStateForUserRegister,
   setUserLogout
};
