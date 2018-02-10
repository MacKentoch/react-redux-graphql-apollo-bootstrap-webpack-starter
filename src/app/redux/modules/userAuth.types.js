// @flow

export type User = {
  id: string,
  username: string,
  lastLogin: string,
  createdAt: string,
  modifiedAt: string,
};

// #region action creators types
export type ReceivedUserLoggedIn = (
  userToken?: string,
  user?: User,
  time: string,
) => any;
export type ErrorUserLoggedIn = (error?: any, time: string) => any;
export type SetLoadingStateForUserLogin = (time: string) => any;
export type UnsetLoadingStateForUserLogin = (time: string) => any;

export type ReceivedUserRegister = (
  userToken?: string,
  user?: User,
  time: string,
) => any;
export type ErrorUserRegister = (error?: any, time: string) => any;
export type SetLoadingStateForUserRegister = (time: string) => any;
export type UnsetLoadingStateForUserRegister = (time: string) => any;

export type SetUserLogout = (time: string) => any;
export type CheckIfUserIsAuthenticated = (time: string) => any;

export type ResetLogError = () => any;
// #endregion
