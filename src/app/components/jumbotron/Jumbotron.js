// @flow

// #region imports
import React from 'react';
// #endregion

// #region flow types
type Props = { children: React$Node, ...any };
// #endregion

const Jumbotron = ({ children }: Props) => (
  <div className="jumbotron">{children}</div>
);

// #region static props
Jumbotron.displayName = 'Jumbotron';
// #endregion

export default Jumbotron;
