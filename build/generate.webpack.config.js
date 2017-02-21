'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge')

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const sourceMap = require('../src/sourcemap.json');

var pathMap = Object.assign({
    'jquery': path.join(nodeModule_dir, '/jquery/dist/jquery.min.js'),
}, sourceMap)
