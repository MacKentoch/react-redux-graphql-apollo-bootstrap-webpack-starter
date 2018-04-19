// @flow

// #region imports
import React, { PureComponent } from 'react';
import { type Match, type Location, type RouterHistory } from 'react-router';
// #endregion

// #region flow types
type Props = {
  match: Match,
  location: Location,
  history: RouterHistory,

  currentView: string,
  enterAbout: () => any,
  leaveAbout: () => any,

  ...any,
};

type State = any;
// #endregion

class About extends PureComponent<Props, State> {
  // #region lifecycle
  componentDidMount() {
    const { enterAbout } = this.props;
    enterAbout();
  }

  componentWillUnmount() {
    const { leaveAbout } = this.props;
    leaveAbout();
  }

  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
  // #endregion
}

export default About;
