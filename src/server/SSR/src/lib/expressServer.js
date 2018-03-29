// @flow

// #region imports
const express = require('express');
const path = require('path');
// const { promisify } = require('util');
const chalk = require('chalk');
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

  app.get('/', (req, res) =>
    res.sendFile(
      path.join(__dirname, config.get('server.assetsPath'), 'index.html'),
    ),
  );

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
