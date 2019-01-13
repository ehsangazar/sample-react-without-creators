require('dotenv').config();
const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'production';
const END_POINT = process.env.END_POINT || "!";
const DEV_PORT = process.env.DEV_PORT || 9000;

module.exports = {
  mode: NODE_ENV,
  entry: [
    "@babel/polyfill",
    './src/App.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './../public')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './../public'),
    port: DEV_PORT
  },
  resolve: {
    extensions: [".js"],
    modules: ['src', 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV),
        END_POINT: JSON.stringify(END_POINT)
      }
    }),
  ]
};