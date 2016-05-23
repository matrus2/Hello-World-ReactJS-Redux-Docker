var webpack = require('webpack'),
    path = require('path');

module.exports = {
  entry: {
    app: [
      "./app/client.js"
    ]
  },
  output: {
    path: path.resolve(__dirname,'./web/'),
    publicPath: '/web/',
    filename: 'bundle.js'
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  module: {
     loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /.scss?$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']       }
    ]
  }
};

