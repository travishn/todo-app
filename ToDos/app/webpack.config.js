// webpack.config.js
var path = require('path');

module.exports = {
  entry: './frontend/todo_redux.jsx',
  output: {
    filename: './app/assets/javascripts/bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
