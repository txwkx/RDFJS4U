var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        include: [new RegExp(path.join(__dirname, 'src'))],
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: /img/,
        loader: 'url'
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "bundle.js"
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: debug ? [
    new DashboardPlugin(dashboard.setData),
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  devServer: {
    quiet: true,
    historyApiFallback: true,
    port: 3333,
    contentBase: "src"
  },
};
