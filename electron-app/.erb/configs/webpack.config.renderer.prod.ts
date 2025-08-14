import path from 'path';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.config.base';

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
    extensions: ['.js', '.jsx', '.json'], // Adicionado .jsx
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Aceita .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
});
