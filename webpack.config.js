/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// Try the environment variable, otherwise use root.
const ASSET_PATH = '/';
const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index'),
  plugins: [
    new CleanWebpackPlugin({
      verbose: false,
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      title: 'mithril-template',
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      favicon: path.resolve(__dirname, 'static', 'favicon.ico'),
    }),
    new MiniCssExtractPlugin({
      filename: 'static/[name].[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'static', 'healthcheck.html'),
          to: 'static/',
        },
        {
          from: path.resolve(
            __dirname,
            '.storybook',
            'static',
            'mockServiceWorker.js',
          ),
          to: '',
        },
      ],
    }),
    new webpack.DefinePlugin({
      __API_SCHEME__: JSON.stringify('http'),
      __API_HOST__: JSON.stringify('localhost'),
      __API_PORT__: JSON.stringify(8080),
      __PRODUCTION__: JSON.stringify(!DEV),
      __VERSION__: JSON.stringify('1.0.0'),
      __MOCK_SERVER__: JSON.stringify(true),
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './**/*.{ts,tsx,js,jsx}',
      },
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/[name].[hash].js',
    sourceMapFilename: 'static/[name].[hash].js.map',
    publicPath: ASSET_PATH,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: DEV ? 'eval-cheap-module-source-map' : 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    port: 8080,
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
                mode: 'global',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },
    ],
  },
};
