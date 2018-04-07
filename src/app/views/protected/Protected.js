// @flow
/* eslint-disable quotes */

// #region imports
import React, { PureComponent } from 'react';
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

class Protected extends PureComponent<Props, State> {
  // #region lifecycle
  componentDidMount() {
    const { enterProtected } = this.props;
    enterProtected();
  }

  componentWillUnmount() {
    const { leaveProtected } = this.props;
    leaveProtected();
  }

  render() {
    return (
      <div>
        <h1 className="text-danger">Here is a protected view!</h1>
        <h2 className="text-danger">
          {`You've just logged in to be able to enter this view.`}
        </h2>
      </div>
    );
  }
  // #endregion
}

export default Protected;
