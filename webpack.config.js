var webpack = require('webpack');
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
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};