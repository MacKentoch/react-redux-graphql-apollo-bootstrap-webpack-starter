// @flow

// #region imports
import * as UserAuthTypes from '../../redux/modules/userAuth.types';
// #endregion

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

  // errors:
  error: any,

  // grpahql loginUser mutation
  loginUser: () => Promise<any>,

  ...any,
};

export type State = {
  ...any,
};
