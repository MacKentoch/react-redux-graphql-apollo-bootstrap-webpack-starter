// @flow weak

const webpack           = require('webpack');
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsDir       = path.resolve(__dirname, 'docs/assets');
const nodeModulesDir  = path.resolve(__dirname, 'node_modules');
const indexFile       = path.resolve(__dirname, 'src/app/index.js');

const SPLIT_STYLE = true;

const config = {
  devtool: '#source-map',
  entry: {
    app: [
      'babel-polyfill',
      indexFile
    ],
    vendor: [
      'apollo-client',
      'babel-polyfill',
      'bootstrap',
      'classnames',
      'graphql-tag',
      'jquery',
      'js-base64',
      'moment',
      'react',
      'react-apollo',
      'react-bootstrap',
      'react-dom',
      'react-motion',
      'react-notification',
      'react-redux',
      'react-router-dom',
      'history',
      'react-router',
      'react-router-redux',
      'react-tap-event-plugin',
      'redux',
      // 'redux-devtools-extension',
      'redux-thunk'
    ]
  },
  output: {
    path:     assetsDir,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test:     /\.jsx?$/,
        exclude:  [nodeModulesDir],
        loader:   'babel-loader'
      },
      {
        test: /\.css$/,
        use:  SPLIT_STYLE
          ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {loader: 'css-loader', options: { importLoaders: 1 }},
              'postcss-loader'
            ]
          })
          : [
            'style-loader',
            {loader: 'css-loader', options: { importLoaders: 1 }},
            'postcss-loader'
          ]
      },
      {
        test: /\.scss$/,
        use:  SPLIT_STYLE
        ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: { importLoaders: 1 }},
            'postcss-loader',
            'sass-loader'
          ]
        })
        : [
          'style-loader',
          {loader: 'css-loader', options: { importLoaders: 1 }},
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: [
          {
            loader:  'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    getImplicitGlobals(),
    setNodeEnv(),
    new ExtractTextPlugin({
      filename: 'app.styles.css'
      // disable: false,
      // allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:     'vendor',
      filename: 'app.vendor.bundle.js'
    })
  ]
};

/*
* here using hoisting so don't use `var NAME = function()...`
*/
function getImplicitGlobals() {
  return new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  });
}

function setNodeEnv() {
  return new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('dev')
    }
  });
}

module.exports = config;
