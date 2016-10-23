import ApolloClient, {
  createNetworkInterface,
  addTypename
}                       from 'apollo-client';
import { appConfig }    from '../../config';

// networkInterface:
const networkInterface = createNetworkInterface(appConfig.apollo.networkInterface);

// when need token based authentication:
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    req.options.headers.authorization = `Bearer ${localStorage.getItem('token') || null}`;
    next();
  }
}]);


export const apolloClient = new ApolloClient({
  networkInterface: networkInterface,
  queryTransformer: addTypename
});
