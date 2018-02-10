// @flow

// #region imports
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../views/home';
import About from '../views/about';
import Register from '../views/register';
import Protected from '../views/protected';
import PrivateRoute from '../components/privateRoute/PrivateRoute';
import PageNotFound from '../views/pageNotFound';
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
