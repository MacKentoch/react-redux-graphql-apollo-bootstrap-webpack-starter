// @flow

// #region imports
import {
  type SetLoadingStateForUserRegister,
  type UnsetLoadingStateForUserRegister,
  type ReceivedUserRegister,
  type ErrorUserRegister,
} from '../../redux/modules/userAuth.types';
import { type Match, type Location, type RouterHistory } from 'react-router';
// #endregion

// #region flow types
export type CreateUserInput = {
  user: {
    username: string,
    password: string,
  },
};

export type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  // registerUser apollo mutation
  registerUser: ({
    user: {
      username: email,
      password: password,
    },
  }) => any,

  // views props:
  currentView: string,

  // user Auth props:
  userIsAuthenticated: boolean,
  mutationLoading: boolean,
  receivedUserRegister: ReceivedUserRegister,
  setLoadingStateForUserRegister: SetLoadingStateForUserRegister,
  unsetLoadingStateForUserRegister: UnsetLoadingStateForUserRegister,
  errorUserRegister: ErrorUserRegister,

  // errors:
  error: any,

  // views
  enterRegister: () => any,
  leaveRegister: () => any,

  ...any,
};

export type State = {
  viewEntersAnim: boolean,
  email: string,
  password: string,
  warning: any,

  ...any,
};
// #endregion
