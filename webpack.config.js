
const path = require('path');

module.exports = {
  entry: './source/scripts/main.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/assets/',
    path: path.resolve(__dirname, 'source')
  },
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 9123,
    contentBase: 'source/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.css$/,
        loader: "style-loader!css-loader" 
      }
    ]
  }
}
