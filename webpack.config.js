
const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname)
  },
  devServer: {
    inline: true,
    port: 9123
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}