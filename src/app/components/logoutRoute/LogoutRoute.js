// @flow

// #region imports
import React, { PureComponent } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import auth from '../../services/auth';
import * as CTypes from './types';
// #endregion

class LogoutRoute extends PureComponent<CTypes.Props, CTypes.State> {
  // #region lifecycle
  componentDidMount() {
    auth.clearAllAppStorage();
  }

  render() {
    return (
      <Route {...this.props}>
        <Redirect to={{ pathname: '/login' }} />
      </Route>
    );
  }
  // #endregion
}

export default withRouter(LogoutRoute);
