// @flow

import { ApolloClient } from 'apollo-client';
// import { SchemaLink } from 'apollo-link-schema';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const createApolloClient = () =>
  new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
  });
