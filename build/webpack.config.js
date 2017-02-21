
'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs')
const webpack = require('webpack');
const webpackBase = require('./webpack.base.config')
const PATHS = require('./webpack.paths');
const path = require('path');
const merge = require('webpack-merge')


const cssLoader = {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css?minimize')
};
const sassLoader = {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style', 'css?minimize', 'sass')
};
const lessLoader ={
    test: /\.less$/,
    loader: ExtractTextPlugin.extract('style', 'css?minimize','autoprefixer', 'less')
}
var config = {
    entry:PATHS.entries,
    output:{
        path: PATHS.build,
        filename: 'js/[chunkhash:8].[name].min.js' ,
        chunkFilename: 'js/[chunkhash:8].chunk.min.js',
        publicPath: '/'
    },
    devtool:false,
    module:{
        loaders:[
            cssLoader,
            sassLoader,
            lessLoader
        ]
    },
    plugins:[
        new ExtractTextPlugin('css/[contenthash:8].[name].min.css', {
            allChunks: false
        })
    ]
}
const pages = fs.readdirSync(PATHS.app);
pages.forEach(function(filename) {
    var m = filename.match(/(.+)\.html$/);
    if(m) {
        var conf = {
            template: path.resolve(PATHS.app, filename),
            // minify: {
            //     //collapseWhitespace: true,
            //     //removeComments: true
            // },
            filename: filename
        };
        if(m[1] in config.entry) {
            conf.inject = 'body';
            conf.chunks = ['vendors', m[1]];
        }
        config.plugins.push(new HtmlWebpackPlugin(conf));
    }
});
module.exports = merge(config, webpackBase);
