// @flow

// #region imports
import * as UserAuthTypes from '../../redux/modules/userAuth.types';
// #endregion

export type LoginUserPayload = {
  user: {
    username: string,
    password: string,
  },
};

export type Props = {
  // react-router 4:
  match: any,
  location: any,
  history: any,

  // views props:
  currentView: string,
  enterLogin: () => any,
  leaveLogin: () => any,

  // user Auth props:
  userIsAuthenticated: boolean,
  mutationLoading: boolean,
  receivedUserLoggedIn: UserAuthTypes.ReceivedUserLoggedIn,
  errorUserLoggedIn: UserAuthTypes.ErrorUserLoggedIn,
  resetLogError: UserAuthTypes.ResetLogError,
  setLoadingStateForUserLogin: UserAuthTypes.SetLoadingStateForUserLogin,
  unsetLoadingStateForUserLogin: UserAuthTypes.UnsetLoadingStateForUserLogin,

  // errors:
  error: any,

  // grpahql loginUser mutation
  loginUser: (user: LoginUserPayload) => Promise<any>,

  ...any,
};

export type State = {
  email: string,
  password: string,

  ...any,
};
