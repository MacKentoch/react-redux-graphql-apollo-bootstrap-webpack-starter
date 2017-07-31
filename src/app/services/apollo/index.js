// @flow weak


import {
  ApolloClient,
  createNetworkInterface,
  addTypename
}                         from 'react-apollo';
import { appConfig }      from '../../config';

const networkInterface = createNetworkInterface({
  uri: appConfig.apollo.networkInterface
  // connectToDevTools: true
  // transportBatching: true
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    if (token) {
      req.options.headers.authorization = token ? `Bearer ${token}` : null;
    }
    next();
  }
}]);

export const apolloClient = new ApolloClient({
  networkInterface
});

export default apolloClient;
