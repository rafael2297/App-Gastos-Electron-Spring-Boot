"use strict";
/**
 * Base webpack config used across other specific configs
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var webpack_1 = require("webpack");
var tsconfig_paths_webpack_plugin_1 = require("tsconfig-paths-webpack-plugin");
var webpackPaths = require('./webpack.paths.js');
// Importa package.json de forma compatível com CommonJS
var externals = require('../../release/app/package.json').dependencies;
var configuration = {
    externals: __spreadArray([], Object.keys(externals || {}), true),
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
        plugins: [new tsconfig_paths_webpack_plugin_1.default()],
    },
    plugins: [new webpack_1.default.EnvironmentPlugin({ NODE_ENV: 'production' })],
};
exports.default = configuration;
