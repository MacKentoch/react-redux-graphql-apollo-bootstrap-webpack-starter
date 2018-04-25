// @flow

// #region imports
import React from 'react';
import { Route, Switch } from 'react-router';
import {
  Home,
  About,
  Protected,
  Register,
  PrivateRoute,
  PageNotFound,
} from './routes';
// #endregion

export const MainRoutes = () => {
  return (
    <Switch>
      {/* non protected views */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/register" component={Register} />
      {/* protected views */}
      <PrivateRoute path="/protected" component={Protected} />
      {/* page not found */}
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default MainRoutes;
