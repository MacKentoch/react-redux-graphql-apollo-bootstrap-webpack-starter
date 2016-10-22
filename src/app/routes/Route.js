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
  App,
  ConnectedHome,
  ConnectedAbout,
  ConnectedLogin,
  ConnectedRegister
}                               from '../containers';
import {
  PageNotFound
}                               from '../views';
import configureStore, {
  client
}                               from '../redux/store/configureStore';
import DevTools                 from '../redux/devTools/DevTools.jsx';

const store         = configureStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);

export const Routes = () => {
  return (
    <ApolloProvider store={store} client={client}>
      <div>
        <Router history={syncedHistory}>
          <Route path="/" component={App} >
            <IndexRoute component={ConnectedHome} />
            <Route path="/about" component={ConnectedAbout} />
            <Route path="/login" component={ConnectedLogin} />
            <Route path="/register" component={ConnectedRegister} />
            <Route path="*" component={PageNotFound} />
          </Route>
        </Router>
        { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
      </div>
    </ApolloProvider>
  );
};
