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
const httplink = createHttpLink({
  uri,
});

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

const authMiddleware = setContext(async (operation, { headers }) => {
  const currentUsertoken = await getUserToken();
  const authorization = currentUsertoken ? `Bearer ${currentUsertoken}` : null;
  return {
    headers: {
      ...headers,
      authorization,
    },
  };
});
// #endregion

// #region cache
const cache = new InMemoryCache();
// #endregion

// #region afterware (lanage token expiration for exmaple)
const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log('error afterware, graphQLErrors: ', graphQLErrors);
  console.log('error afterware, networkError: ', networkError);

  if (networkError && networkError.statusCode === 401) {
    throw new Error('Unauthorized');
  }
});
// #endregion

const link = from([authMiddleware, errorLink, httplink]);
// #region apollo client instanciation
const client = new ApolloClient({
  link,
  cache,
  queryDeduplication: true,
});
// #endregion

export default client;
