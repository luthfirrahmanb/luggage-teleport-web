const ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack');
module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: [/\.sass$/, /\.css$/, /\.less$/],
        loader: ['style-loader', 'css-loader', 'less-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'app.css', allChunks: true })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
