import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.config.base';

export default merge(baseConfig, {
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
    extensions: ['.js', '.jsx', '.json'], // Adicionado .jsx
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Troquei para aceitar .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
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
  },
});
