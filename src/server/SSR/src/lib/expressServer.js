// @flow

// #region imports
const express = require('express');
const path = require('path');
const chalk = require('chalk');
const ssr = require('../middleware/ssr');
const { error404, error500 } = require('../middleware/errors');
const config = require('../../../config');
// #endregion

// $FlowIgnore
const expressServer = (app = null, isDev = false) => {
  if (!app) {
    throw new Error('Server application instance is undefined');
  }

  app.set('port', config.get('server.port'));
  app.set('ipAdress', config.get('server.host'));

  app.use(
    express.static(path.join(__dirname, config.get('server.assetsPath'))),
  );

  app.get('/*', ssr);

  app.use(error404);
  app.use(error500);

  /* eslint-disable no-console */
  app.listen(config.get('server.port'), config.get('server.host'), () =>
    console.log(`
      =====================================================
      -> Server (${chalk.bgBlue('SPA')}) 🏃 (running) on ${chalk.green(
      config.get('server.host'),
    )}:${chalk.green(config.get('server.port'))}
      =====================================================
    `),
  );
  /* eslint-enable no-console */

  return app;
};

module.exports = expressServer;
