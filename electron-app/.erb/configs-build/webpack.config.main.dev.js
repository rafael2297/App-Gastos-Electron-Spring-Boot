"use strict";
/**
 * Webpack config for development electron main process
 */
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var webpack_1 = require("webpack");
var webpack_bundle_analyzer_1 = require("webpack-bundle-analyzer");
var webpack_merge_1 = require("webpack-merge");
// Mantemos o checkNodeEnv como está
var check_node_env_js_1 = require("../scripts/check-node-env.js");
var webpack_config_base_1 = require("./webpack.config.base");
var webpackPaths = require('./webpack.paths.js');
var packageJson = require('../../release/app/package.json');
// Garante que não rodemos o config de dev em produção
if (process.env.NODE_ENV === 'production') {
    (0, check_node_env_js_1.default)('development');
}
var configuration = {
    devtool: 'inline-source-map',
    mode: 'development',
    target: 'electron-main',
    entry: {
        main: path_1.default.join(webpackPaths.srcMainPath, 'main.ts'),
        preload: path_1.default.join(webpackPaths.srcMainPath, 'preload.ts'),
    },
    output: {
        path: webpackPaths.dllPath,
        filename: '[name].bundle.dev.js',
        library: {
            type: 'umd',
        },
    },
    plugins: [
        new webpack_bundle_analyzer_1.BundleAnalyzerPlugin({
            analyzerMode: process.env.ANALYZE === 'true' ? 'server' : 'disabled',
            analyzerPort: 8888,
        }),
        new webpack_1.default.DefinePlugin({
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
exports.default = (0, webpack_merge_1.merge)(webpack_config_base_1.default, configuration);
