const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

console.log(envKeys);

module.exports = {
  entry: ['whatwg-fetch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpeg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    }),

    new webpack.DefinePlugin(envKeys),
  ],

  devServer: {
    historyApiFallback: true,
    compress: true,
    public:
      '27adebdb87d747a089e96faabb0d57e0.vfs.cloud9.us-east-2.amazonaws.com', // That solved it
  },
};
