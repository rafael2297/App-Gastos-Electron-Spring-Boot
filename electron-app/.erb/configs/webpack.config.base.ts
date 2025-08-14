/**
 * Base webpack config used across other specific configs
 */

import webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
const webpackPaths = require('./webpack.paths.js');
// Importa package.json de forma compatível com CommonJS
const { dependencies: externals } = require('../../release/app/package.json');

const configuration: webpack.Configuration = {
  externals: [...Object.keys(externals || {})],

  stats: 'errors-only',

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true, // sem type-check no webpack
            compilerOptions: {
              module: 'commonjs',
              moduleResolution: 'node',
            },
          },
        },
      },
    ],
  },

  output: {
    path: webpackPaths.srcPath,
    library: { type: 'commonjs2' },
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [webpackPaths.srcPath, 'node_modules'],
    plugins: [new TsconfigPathsPlugin()],
  },

  plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: 'production' })],
};

export default configuration;
