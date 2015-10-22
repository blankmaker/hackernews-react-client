var webpack = require('webpack');
var Promise = require('es6-promise').Promise;

module.exports = {
  entry: [
    './js/app.jsx'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};