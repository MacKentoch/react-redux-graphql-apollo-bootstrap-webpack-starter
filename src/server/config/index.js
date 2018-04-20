// @flow

const path = require('path');
const convict = require('convict');

const config = convict({
  env: {
    doc: 'The application environment',
    format: ['development', 'production'],
    default: 'development',
    env: 'NODE_ENV',
  },
  debug: {
    doc: 'Global debug toggle',
    format: Boolean,
    default: false,
    env: 'DEBUG',
  },
  rateLimit: {
    windowMs: {
      doc: 'rate limit withing this window in milliseconds',
      format: Number,
      default: 15 * 60 * 1000, // 15 minutes
    },
    max: {
      doc: 'Max number of request each API have access within windowMs time',
      format: Number,
      default: 200, // each API will have max access to 200 request within windowMs time
    },
    delayMs: {
      doc: 'A delay before rateLimit in milliseconds',
      format: Number,
      default: 0,
    },
  },
  server: {
    host: {
      doc: 'The server url',
      format: 'url',
      default: 'localhost',
      env: 'SERVER_HOST',
    },
    port: {
      doc: 'The server port number',
      format: 'port',
      default: 3001,
      env: 'PORT',
    },
    externalUrl: {
      doc: 'The server external url',
      format: 'url',
      default: 'http://localhost:3001/',
      env: 'SERVER_EXT_URL',
    },
    assetsPath: {
      doc: 'assets path',
      format: String,
      default: '../../../docs/',
      env: 'SERVER_ASSETS_PATH',
    },
    bodyParser: {
      limit: {
        doc: 'bodyParser limit size',
        format: String,
        default: '16mb',
      },
    },
  },
});

const env = config.get('env');
config.loadFile(path.join(__dirname, `./${env}.json`));
config.validate();

module.exports = config;
