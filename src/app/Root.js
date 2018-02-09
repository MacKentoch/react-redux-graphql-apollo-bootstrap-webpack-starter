// @flow

// #region imports
import React, { Component } from 'react';
// Router, // using now ConnectedRouter from react-router-redux v5.x (the only one compatible react-router 4)
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import { history } from './redux/store/configureStore';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './services/apollo';
import App from './containers/app/App';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Login from './views/login';
import PageNotFound from './views/pageNotFound'; // not connected to redux (no index.js)
import LogoutRoute from './components/logoutRoute/LogoutRoute';
// #endregion

// #region flow types
type Props = any;
type State = any;
// #endregion

// #region constants
const store = configureStore();
// #endregion

class Root extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <div>
            <ConnectedRouter history={history}>
              <ScrollToTop>
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <App />
                  {/* logout: just redirects to login (App will take care of removing the token) */}
                  <LogoutRoute path="/logout" />
                  <Route component={PageNotFound} />
                </Switch>
              </ScrollToTop>
            </ConnectedRouter>
          </div>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default Root;
