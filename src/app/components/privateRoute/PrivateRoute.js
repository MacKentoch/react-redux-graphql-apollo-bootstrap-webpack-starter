// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import {
  Route,
  Redirect,
  withRouter
}                         from "react-router-dom";
import auth               from '../../services/auth';

class PrivateRoute extends PureComponent {
  static propTypes = {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    component:  PropTypes.any.isRequired,
    path:       PropTypes.string
  };

  render() {
    const { component, ...rest } = this.props;
    const { location } = this.props;

    const isUserAuthenticated = this.isAuthenticated();

    return (
      <Route {...rest}>
        {isUserAuthenticated
          ? <component {...this.props} />
          : <Redirect to={{ pathname: "/login", state: { from: location } }} />}
      </Route>
    );
  }

  isAuthenticated() {
    const checkUserHasId = user => user && user.id && user.id.length > 0;
    const user = auth.getUserInfo() ? auth.getUserInfo() : null;
    const isAuthenticated =
      auth.getToken() && checkUserHasId(user) ? true : false;

    return isAuthenticated;
  }
}

export default withRouter(PrivateRoute);
