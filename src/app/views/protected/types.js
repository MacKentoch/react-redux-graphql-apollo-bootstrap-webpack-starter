// @flow

// #region imports
import { type Match, type Location, type RouterHistory } from 'react-router';
// #endregion

// #region flow types
export type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  // views props:
  currentView: string,

  // errors:
  error: any,

  // views
  enterProtected: () => any,
  leaveProtected: () => any,

  ...any,
};

export type State = {
  viewEntersAnim: boolean,

  ...any,
};
// #endregion
