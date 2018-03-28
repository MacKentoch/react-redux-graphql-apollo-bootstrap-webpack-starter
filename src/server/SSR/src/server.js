// @flow

// #region imports
const express = require('express');
const expressServer = require('./lib/expressServer');
const config = require('../../config');
// #endregion

// #region constants
const dev = config.get('env') !== 'production';
// #endregion

try {
  const app = express();
  expressServer(app, dev);
} catch (error) {}
