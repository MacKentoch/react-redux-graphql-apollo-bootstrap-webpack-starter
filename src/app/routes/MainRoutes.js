// @flow weak

import React                 from 'react';
import {
 Route,
 Switch,
 Redirect
}                             from 'react-router-dom';
import {
  // app:
  App,
  // non protected views
  ConnectedHome,
  ConnectedAbout,
  ConnectedLogin,
  ConnectedRegister,
  // protected views
  ConnectedProtected
}                               from '../containers';
import {
  PageNotFound
}                               from '../views';
import { auth }                 from '../services/auth';
import PrivateRoute             from '../components/privateRoute/PrivateRoute';
import LogoutRoute              from '../components/logoutRoute/LogoutRoute';

export const MainRoutes = () => {
  return (
    <Switch>
      {/* non protected views */}
      <Route exact path="/" component={ConnectedHome} />
      <Route path="/about" component={ConnectedAbout} />
      <Route path="/login" component={ConnectedLogin} />
      <Route path="/register" component={ConnectedRegister} />
      {/* logout: just redirects to home (App will take care of removing the token) */}
      <LogoutRoute path="/logout" />
      {/* protected views */}
      <PrivateRoute path="/protected" component={ConnectedProtected} />
      {/* page not found */}
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default MainRoutes;
