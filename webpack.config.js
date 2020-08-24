/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Try the environment variable, otherwise use root.
const ASSET_PATH = '/';
const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: resolve(__dirname, 'src', 'index.ts'),
  plugins: [
    new CleanWebpackPlugin({
      verbose: false,
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      filename: resolve(__dirname, 'dist', 'index.html'),
      title: 'mithril-template',
      favicon: resolve(__dirname, 'static', 'favicon.ico'),
    }),
    new MiniCssExtractPlugin({
      filename: 'static/[name].[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, 'static', 'healthcheck.html'),
          to: 'static/',
        },
        {
          from: resolve(
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
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname),
    },
  },
  output: {
    path: resolve(__dirname, 'dist'),
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
    contentBase: resolve(__dirname, 'dist'),
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
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
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
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
