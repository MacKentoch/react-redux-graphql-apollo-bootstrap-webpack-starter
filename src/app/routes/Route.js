/* eslint-disable no-process-env */

import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  // hashHistory,
  browserHistory
 }                              from 'react-router';
// import { Provider }             from 'react-redux';
import { ApolloProvider }       from 'react-apollo'; // replace Provider from react-redux
import { syncHistoryWithStore } from 'react-router-redux';
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
import configureStore, {
  client
}                               from '../redux/store/configureStore';
import DevTools                 from '../redux/devTools/DevTools.jsx';
import { auth }                 from '../services/auth';


const store         = configureStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);

export const Routes = () => {
  return (
    <ApolloProvider store={store} client={client}>
      <div>
        <Router history={syncedHistory}>
          <Route path="/" component={App} >
            {/* non protected */}
            <IndexRoute component={ConnectedHome} />
            <Route path="/about" component={ConnectedAbout} />
            <Route path="/login" component={ConnectedLogin} />
            <Route path="/register" component={ConnectedRegister} />
            {/* logout: just removes token and redirects to home */}
            <Route path="/logout" onEnter={logOutUser} />
            {/* protected */}
            <Route path="/protected" component={ConnectedProtected}  onEnter={requireAuth} />
            {/* page not found */}
            <Route path="*" component={PageNotFound} />
          </Route>
        </Router>
        { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
      </div>
    </ApolloProvider>
  );
};

// authentication check to access protected routes
function requireAuth(nextState, replace) {
  if (!auth.isAuthenticated()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

function logOutUser(nextState, replace) {
  auth.clearToken();

  replace({
    pathname: '/',
    state: { nextPathname: nextState.location.pathname }
  });
}
