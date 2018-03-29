// @flow

// #region imports
import PrettyError from 'pretty-error';
// import { promisify } from 'util';
import serialize from 'serialize-javascript';
import React from 'react';
import { renderToString } from 'react-dom/server';
import moment from 'moment';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../../../app/redux/store/configureStore';
import App from '../../../app/containers/app/App';
// #endregion

export default function serverRender(req, res) {
  const location = req.url;
  const context = {};
  // const memoryHistory = createHistory(req.path);
  let store = configureStore();
  // const history       = syncHistoryWithStore(memoryHistory, store);

  // just for demo, replace with a "usefull" async. action to feed your state
  return fakeFetch()
    .then(({ info }) => {
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
          <StaticRouter location={location} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );

      let html = '';
      try {
        html = renderToString(InitialView);
      } catch (error) {
        console.log('error: ', error);
      }

      if (context.url) {
        return res.status.end({ location: context.url });
      }

      const preloadedState = serialize(store.getState()); // serialize is better than JSON.stringify

      return res
        .status(200)
        .set('content-type', 'text/html')
        .send(renderFullPage(html, preloadedState));
    })
    .catch(error => res.status(500).end('Internal server error: ', error));
}

function fakeFetch() {
  return new Promise(resolve =>
    setTimeout(() => resolve({ info: 'whats up?' }), 200),
  );
}

function renderFullPage(html, preloadedState = '') {
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
        <title>React redux router SSR Starter</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="react redux router SSR">
        <meta name="author" content="Erwan DATIN">
        <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/assets/app.styles.css">
      </head>
      <body class="skin-black" style="background-color:#f1f2f7">
        <section id="root"><div>${html}</div></section>
        <script type="text/javascript">window.__PRELOADED_STATE__ = ${preloadedState}</script>
        <script type="text/javascript" src="/assets/app.vendor.bundle.js"></script>
        <script type="text/javascript" src="/assets/app.bundle.js"></script>
      </body>
    </html>
  `,
  };
  return indexHtml.template;
}
