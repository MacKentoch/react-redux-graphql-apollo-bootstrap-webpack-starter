// @flow

// #region imports
import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedProtected } from '../containers';
import { PageNotFound } from '../views';
import Home from '../views/home';
import About from '../views/about';
import Register from '../views/register';
import PrivateRoute from '../components/privateRoute/PrivateRoute';
// #endregion

export const MainRoutes = () => {
  return (
    <Switch>
      {/* non protected views */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/register" component={Register} />
      {/* protected views */}
      <PrivateRoute path="/protected" component={ConnectedProtected} />
      {/* page not found */}
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default MainRoutes;
