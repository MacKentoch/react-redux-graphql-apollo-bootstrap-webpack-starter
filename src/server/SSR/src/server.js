// @flow

// #region imports
import express from 'express';
import PrettyError from 'pretty-error';
import expressServer from './lib/expressServer';
import config from '../../config';
// #endregion

// #region constants
const dev = config.get('env') !== 'production';
const pe = new PrettyError();
// #endregion

try {
  pe.start();

  const app = express();
  expressServer(app, dev);
} catch (error) {
  console.log('server error: ', error);
}
