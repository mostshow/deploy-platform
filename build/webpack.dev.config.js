
'use strict';
const PATHS = require('./webpack.paths');
const path = require('path');
const webpack = require('webpack');
const webpackBase = require('./webpack.base.config')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob');

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
const cssLoader = {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
};
// var cssLoader = {
//     test: /\.css$/, loader: ExtractTextPlugin.extract(
//         "style-loader",
//         "css-loader?sourceMap",
//         {
//             publicPath: "/__build/"
//         }
//     )
// };
const sassLoader = {
    test: /\.scss$/,
    loader: 'style!css!sass'
};
const lessLoader = {
    test: /\.less$/,
    loader: 'style!css!less'
};
var config = {
    entry:((entry) => {
        for (let key of Object.keys(entry)) {
            if (! Array.isArray(entry[key])) {
                entry[key] = Array.of(entry[key])
            }
            entry[key].push(hotMiddlewareScript);
        }
        return PATHS.entries;
    })(PATHS.entries),
    output:{
        path: path.resolve(process.cwd(),'/src/'),
        filename:  '[name].js' ,
        chunkFilename: 'vender.js' ,
        publicPath: '/'
    },
    devServer: {
        hot: true,
        noInfo: false,
        inline: true,
        publicPath: '/',
        stats: {
            cached: false,
            colors: true
        }
    },
    devtool:'cheap-module-eval-source-map',
    module:{
        loaders:[
            //new ExtractTextPlugin('css/[name].css?[contenthash]')
            cssLoader,
            sassLoader,
            lessLoader
        ]
    },
    plugins:[
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]

}
var  plugins = (() => {
    let entryHtml = glob.sync(PATHS.app + '/*.html')

    entryHtml.forEach((filePath) => {
        let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        let conf = {
            template: 'html!' + filePath,
            filename: filename + '.html'
        }

        if(filename in PATHS.entries) {
            conf.inject = 'body'
            conf.chunks = ['vender', 'common', filename]
            config.plugins.push(new HtmlWebpackPlugin(conf))
        }


    })
})()
module.exports = merge(config, webpackBase);
