var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'dist')
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },
});
