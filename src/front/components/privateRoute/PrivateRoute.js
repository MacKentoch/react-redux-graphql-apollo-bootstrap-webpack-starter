// @flow

// #region imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import auth from '../../services/auth';
// #endregion

// #region flow types
export type State = { ...any };
export type Props = {
  match: any,
  location: any,
  history: any,

  component: any,
  path: string,
  ...any,
};
// #ednregino

class PrivateRoute extends Component<Props, State> {
  static propTypes = {
    // react-router 4:
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    component: PropTypes.any.isRequired,
    path: PropTypes.string,
  };

  render() {
    const { component: BaseComponent, ...rest } = this.props;
    const { location } = this.props;

    const isUserAuthenticated = this.isAuthenticated();
    const isTokenExpired = this.isExpired();

    return (
      <Route
        {...rest}
        render={props =>
          !isTokenExpired && isUserAuthenticated ? (
            <BaseComponent {...props} />
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    );
  }

  isAuthenticated() {
    const checkUserHasId = user => user && user.id && user.id.length > 0;
    const user = auth.getUserInfo() ? auth.getUserInfo() : null;
    const isAuthenticated =
      auth.getToken() && checkUserHasId(user) ? true : false;

    return isAuthenticated;
  }

  isExpired() {
    return auth.isExpiredToken(auth.getToken());
  }
}

export default withRouter(PrivateRoute);
