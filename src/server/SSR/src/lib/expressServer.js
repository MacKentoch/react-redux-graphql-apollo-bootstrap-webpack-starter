// @flow

// #region imports
import express from 'express';
import path from 'path';
import chalk from 'chalk';
import favicon from 'serve-favicon';
import ssr from '../middleware/ssr';
import { error404, error500 } from '../middleware/errors';
import config from '../../../config';
import asyncWrap from './asyncWrap';
// #endregion

// $FlowIgnore
const expressServer = (app = null, isDev = false) => {
  try {
    if (!app) {
      console.log('Server application instance is undefined');
      throw new Error('Server application instance is undefined');
    }

    app.set('port', config.get('server.port'));
    app.set('ipAdress', config.get('server.host'));

    app.use(
      favicon(
        path.join(__dirname, '../../../../../docs/', 'statics/', 'favicon.ico'),
      ),
    );
    app.use(
      '/assets',
      express.static(path.join(__dirname, '../../../../../docs/', 'assets/')),
    );

    app.get('/*', asyncWrap(ssr));

    app.use(error404);
    app.use(error500);

    /* eslint-disable no-console */
    app.listen(config.get('server.port'), config.get('server.host'), () =>
      console.log(`
          =====================================================
          -> Server (${chalk.bgBlue('SSR')}) 🏃 (running) on ${chalk.green(
        config.get('server.host'),
      )}:${chalk.green(config.get('server.port'))}
          =====================================================
        `),
    );
    /* eslint-enable no-console */

    return app;
  } catch (error) {
    console.log('server error: ', error);
  }
};

export default expressServer;
