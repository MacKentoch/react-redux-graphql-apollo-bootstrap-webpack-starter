// @flow

// #region imports
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import { loadComponents } from 'loadable-components';
import injectTpEventPlugin from 'react-tap-event-plugin';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import injectGlobalStyle from './style/injectGlobalStyle';
import Root from './Root';
// #endregion

// #region smoothscroll polyfill
smoothScrollPolyfill.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;
// #endregion

// #region constants
const ELEMENT_TO_BOOTSTRAP = 'root';
const BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
// #endregion

injectTpEventPlugin();
injectGlobalStyle();

const renderApp = RootComponent => {
  render(
    <AppContainer warnings={false}>
      <RootComponent />
    </AppContainer>,
    // $FlowIgnore
    BootstrapedElement,
  );
};

// When SSR:
// loadComponents().then(() => renderApp(Root));

// when SPA:
renderApp(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}
