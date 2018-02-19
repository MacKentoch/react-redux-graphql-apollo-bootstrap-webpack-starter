// @flow

// #region imports
import React from 'react';
// #endregion

// #region flow types
export type Props = {
  // react-router 4:
  match: any,
  location: any,
  history: any,

  children: React$Node,

  ...any,
};

export type State = {};
// #endregion

const Jumbotron = ({ children }: Props) => (
  <div className="jumbotron">{children}</div>
);

// #region static props
Jumbotron.displayName = 'Jumbotron';
// #endregion

export default Jumbotron;
