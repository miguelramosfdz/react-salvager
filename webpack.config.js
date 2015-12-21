/*eslint no-var: 0*/

var path = require('path');
var webpack = require('webpack');

module.exports = {

  devServer: {
    historyApiFallback: { index: 'example/index.html' },
    host: 'localhost',
    hot: true,
    port: 3000,
    publicPath: '/static/',
    stats: {
      colors: true,
      hash: false,
      version: false,
      assets: true,
      chunks: false
    }
  },

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './example/main.js'
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },

  output: {
    path: path.resolve('example'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

};
