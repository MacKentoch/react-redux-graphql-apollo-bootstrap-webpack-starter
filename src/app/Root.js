// @flow weak

import React, {
  Component
}                               from 'react';
// static website: uncomment createHashHistory, otherwise uncomment createBrowserHistory
import {
  // BrowserRouter as Router,
  HashRouter as Router
}                               from 'react-router-dom';
// static website: uncomment createHashHistory, otherwise uncomment createBrowserHistory
import {
// createBrowserHistory as createHistory,
  createHashHistory as createHistory
}                               from 'history';
import {
  ApolloProvider
}                               from 'react-apollo'; // replace Provider from react-redux
import { apolloClient }         from './services/apollo';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore           from './redux/store/configureStore';
import App                      from './containers/app/App';
import ScrollToTop              from "./components/scrollToTop/ScrollToTop";

const store           = configureStore();
const history         = createHistory();
const syncedHistory   = syncHistoryWithStore(history, store);

const client = apolloClient;

class Root extends Component {
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <div>
          <Router history={syncedHistory}>
            <ScrollToTop>
              <App />
            </ScrollToTop>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default Root;
