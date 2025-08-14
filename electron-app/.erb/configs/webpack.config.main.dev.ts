/**
 * Webpack config for development electron main process
 */

import path from 'path';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

// Mantemos o checkNodeEnv como está
import checkNodeEnv from '../scripts/check-node-env.js';
import baseConfig from './webpack.config.base';
const webpackPaths = require('./webpack.paths.js');


const packageJson = require('../../release/app/package.json');

// Garante que não rodemos o config de dev em produção
if (process.env.NODE_ENV === 'production') {
  checkNodeEnv('development');
}

const configuration: webpack.Configuration = {
  devtool: 'inline-source-map',

  mode: 'development',

  target: 'electron-main',

  entry: {
    main: path.join(webpackPaths.srcMainPath, 'main.ts'),
    preload: path.join(webpackPaths.srcMainPath, 'preload.ts'),
  },

  output: {
    path: webpackPaths.dllPath,
    filename: '[name].bundle.dev.js',
    library: {
      type: 'umd',
    },
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE === 'true' ? 'server' : 'disabled',
      analyzerPort: 8888,
    }),

    new webpack.DefinePlugin({
      'process.type': '"browser"',
      APP_VERSION: JSON.stringify(packageJson.version), // 👍 agora funciona sem erro
    }),
  ],

  // Configura o comportamento de __dirname e __filename para o Electron
  node: {
    __dirname: false,
    __filename: false,
  },
};

export default merge(baseConfig, configuration);
