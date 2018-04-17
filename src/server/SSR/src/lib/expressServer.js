// @flow

// #region imports
import express from 'express';
import path from 'path';
import chalk from 'chalk';
import ssr from '../middleware/ssr';
import { error404, error500 } from '../middleware/errors';
import config from '../../../config';
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

export default expressServer;
