import path from 'path';
import { merge } from 'webpack-merge';

import baseConfig from './webpack.config.base.js';
import TerserPlugin from 'terser-webpack-plugin';

export default merge(baseConfig, {
  mode: 'production',

  target: ['web', 'electron-renderer'],

  entry: path.join(__dirname, '../../src/renderer/index.jsx'),

  output: {
    path: path.join(__dirname, '../../dist/renderer'),
    publicPath: './',
    filename: 'renderer.prod.js',
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

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
});
