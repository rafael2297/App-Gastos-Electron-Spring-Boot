import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';

import baseConfig from './webpack.config.base.ts';
import type { Configuration as WebpackConfiguration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
  devServer?: DevServerConfiguration;
}

const config: Configuration = merge(baseConfig, {
  mode: 'development',
  target: ['web', 'electron-renderer'],
  devtool: 'inline-source-map',

  entry: path.join(__dirname, '../../src/renderer/index.jsx'),

  output: {
    path: path.join(__dirname, '../../dist/renderer'),
    publicPath: '/',
    filename: 'renderer.dev.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  devServer: {
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../../assets'),
    },
    port: 8080, // 🔹 Porta fixa para evitar conflito com Electron
  },
});

export default config;
