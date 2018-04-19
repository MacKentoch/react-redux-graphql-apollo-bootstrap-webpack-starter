// @flow

// #region imports
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { from } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { appConfig } from '../../config';
// #endregion

// #region link, middleware
const { networkInterface: uri } = appConfig.apollo;
const httplink = createHttpLink({ uri });

// #region get user token from localStorage
let token; // cached token to access localStorage just once
async function getUserToken() {
  if (token) {
    return token;
  }

  return new Promise((resolve, reject) => {
    const storedToken = window.localStorage.getItem('token');
    resolve(storedToken);
  });
}
// #endregion

const authLink = setContext(async (operation, { headers }) => {
  const currentUsertoken = await getUserToken();
  return currentUsertoken
    ? { headers: { ...headers, Authorization: `Bearer ${token}` } }
    : { headers: { ...headers } };
});
// #endregion

// #region cache
const cache = new InMemoryCache();
// #endregion

// #region afterware (lanage token expiration for exmaple)
const errorLink = onError(
  ({ graphQLErrors, networkError, response, operation }) => {
    console.log('error afterware, graphQLErrors: ', graphQLErrors);
    console.log('error afterware, networkError: ', networkError);

    if (networkError && networkError.statusCode === 401) {
      // redirect to home
      return global.window.location.replace('/');
    }

    // example: add code to a specific operation
    if (operation.operationName === 'getCurrentUser') {
      console.log('just getting current user (getCurrentUser query)');
    }
  },
);
// #endregion

// #region environment flag
/* eslint-disable no-process-env */
const isDevEnv = process.env.NODE_ENV !== 'production';
/* eslint-enable no-process-env */
// #endregion

const link = from([authLink, errorLink, httplink]);

// #region apollo client instanciation
const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: isDevEnv,
  queryDeduplication: true,
});
// #endregion

export default client;
