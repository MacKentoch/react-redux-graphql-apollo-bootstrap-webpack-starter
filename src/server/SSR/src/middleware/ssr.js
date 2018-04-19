// @flow

// #region imports
// import { promisify } from 'util';
import serialize from 'serialize-javascript';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import moment from 'moment';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import fetch from 'node-fetch';
import { InMemoryCache } from 'apollo-cache-inmemory';
import configureStore from '../../../../front/redux/store/configureStore';
import App from '../../../../front/containers/app/App';
import frontConfig from '../../../../front/config';
// #endregion

// #region constants
const { networkInterface: uri } = frontConfig.apollo;
// #endregion

// $FlowIgnore
export default async function serverRender(req, res) {
  const location = req.url;
  const apolloClient = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({ uri, fetch }),
    cache: new InMemoryCache(),
  });
  const context = {};
  let store = configureStore();
  const sheet = new ServerStyleSheet();

  console.log('serverRendering');

  // just for demo, replace with a "usefull" async. action to feed your state
  try {
    const { info } = await fakeFetch();
    const currentTime = moment().format();
    const currentState = store.getState();

    const preWarmedState = {
      ...currentState,
      views: {
        ...currentState.views,
        somePropFromServer: info,
        serverTime: currentTime,
      },
    };

    // update store to be preloaded:
    store = configureStore(preWarmedState);

    const InitialView = (
      <Provider store={store}>
        <ApolloProvider store={store} client={apolloClient}>
          <StaticRouter location={location} context={context}>
            <App />
          </StaticRouter>
        </ApolloProvider>
      </Provider>
    );

    await getDataFromTree(InitialView);

    let html = '';
    let styleTags = '';
    try {
      html = renderToString(sheet.collectStyles(InitialView));
      styleTags = sheet.getStyleTags();
    } catch (error) {
      console.log('error: ', error);
    }

    if (context.url) {
      return res.status.end({
        location: context.url,
      });
    }

    // serialize is better than JSON.stringify
    const preloadedState = serialize(store.getState());
    const preloadedApolloState = serialize(apolloClient.cache.extract());

    return res
      .status(200)
      .set('content-type', 'text/html')
      .send(
        renderFullPage(html, preloadedState, preloadedApolloState, styleTags),
      );
  } catch (error) {
    return res.status(500).end('Internal server error: ', error);
  }
}

function fakeFetch() {
  return new Promise(resolve =>
    setTimeout(() => resolve({ info: 'whats up?' }), 200),
  );
}

function renderFullPage(
  html,
  preloadedState = '',
  preloadedApolloState: '',
  styleTags = '',
) {
  // NOTE:
  // <section id="root">
  //   ${html}
  // </section>
  // will throw warning related to: https://stackoverflow.com/questions/34060968/react-warning-render
  //
  // so write this way to fix:
  // <section id="root">${html}</section>
  const indexHtml = {
    template: `
    <!DOCTYPE html>
    <html>
      <head>
        <title>ReactJS Redux GraphQL Apollo Bootstrap Starter</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="ReactJS Redux GraphQL Apollo Bootstrap Starter">
        <meta name="author" content="Erwan DATIN (MacKentoch)">
        <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
        <link rel='stylesheet' href='assets/app.styles.css'>
        ${styleTags}
      </head>
      <body>
        <section id="root"><div>${html}</div></section>
        <script type="text/javascript">window.__PRELOADED_STATE__ = ${preloadedState}</script>
        <script type="text/javascript">window.__APOLLO_STATE__ = ${preloadedApolloState}</script>
        <script type="text/javascript" src="assets/app.vendor.bundle.js"></script>
        <script type="text/javascript" src="assets/app.bundle.js"></script>
      </body>
    </html>
  `,
  };
  return indexHtml.template;
}
