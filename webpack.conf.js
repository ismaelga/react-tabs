var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './lib/main.js',
  output: {
    path: './dist',
    filename: 'react-tabs.min.js',
    libraryTarget: 'umd',
    library: 'ReactTabs',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  externals: {
    react: 'react',
    'react/addons': 'react/addons'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
