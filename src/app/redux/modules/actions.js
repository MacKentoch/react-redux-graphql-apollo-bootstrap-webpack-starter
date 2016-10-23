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
  receivedUserLoggedIn
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
   receivedUserLoggedIn
};
