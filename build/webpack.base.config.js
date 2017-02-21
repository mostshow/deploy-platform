'use strict';
const webpack = require('webpack');
const PATHS = require('./webpack.paths');
const path = require('path');
const chunks = Object.keys(PATHS.entries);
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var  plugins = (() => {
    let entryHtml = glob.sync(PATHS.app + '/*.html')
    let r = []

    entryHtml.forEach((filePath) => {
        let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        let conf = {
            template: 'html!' + filePath,
            filename: filename + '.html'
        }

        // if(filename in PATHS.entries) {
        //     conf.inject = 'body'
        //     conf.chunks = ['vender', 'common', filename]
        // }

        r.push(new HtmlWebpackPlugin(conf))

    })

    return r
})()
plugins.push(
    new CommonsChunkPlugin({
        name: 'vendors',
        chunks: chunks,
        minChunks: chunks.length
    })
)
var common = {
    resolve: {
        root: [PATHS.app, PATHS.nodeModule_dir],
        alias: PATHS.sourceMap,
        extensions: ['', '.js', '.css','.less', '.scss', '.tpl', '.png', '.jpg']
    },
    resolveLoader: {
        root: PATHS.nodeModule_dir
    },
    module: {
        noParse:[
            path.join(PATHS.nodeModule_dir,'./jquery/dist/jquery.min.js'),
        ],
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader?limit=10000"
            },
            {
                test: /\.(woff|eot|ttf)$/i,
                loader: "url-loader?limit=100000",
            },
            { test:"html", loader:"html-loader"},
            { test: /\.js$/, exclude:  /node_modules/ , loader:'babel-loader',query: {presets: ['react', 'es2015']}},
            // { test: /\.js$/, exclude: /(node_modules)/, loader: 'babel?optional[]=runtime&stage=0'},
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loaders: ['babel-loader']
            // }
        ],
        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         loader: 'eslint',
        //     }
        // ],
        plugins:plugins,
            // [
            // new webpack.ProvidePlugin({
            //     $: "jquery",
            //     jQuery: "jquery",
            //     "window.jQuery": "jquery"
            // }),
        // ],
        postcss: [
            require('autoprefixer')//调用autoprefixer插件
        ],
        externals:{
        }
    },
    eslint: {
        configFile: path.resolve(__dirname, '../.eslintrc'),
        failOnWarning: true,
        failOnError: true,
        cache: true,
    }
};
module.exports = common;






