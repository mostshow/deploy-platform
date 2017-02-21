
'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
const path = require('path');
const gutil = require('gulp-util');
const PATHS = require('./webpack.paths');
const webpackConf = require('./webpack.config');
const webpackDevConf = require('./webpack.dev.config');
const assets = path.resolve(__dirname,'../assets');

gulp.task('lint', function() {
    var eslint = require('gulp-eslint');
    return gulp.src([
            '!' + PATHS.app + '/js/lib/**/*.js',
            src + '/js/**/*.js'
        ])
        .pipe(eslint({
            rulePaths: [
                'custom-rules/'
            ],
            rules: {
                'my-custom-rule': 1,
                'strict': 2
            },
            globals: {
                'jQuery':false,
                '$':true
            },
            envs: [
                'browser'
            ]
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('clean', function() {
    var clean = require('gulp-clean');

    return gulp.src(PATHS.build, {read: true}).pipe(clean());
});

gulp.task('pack', function(done) {
    webpack(webpackConf, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({colors: true}));
        done();
    });
});


gulp.task('deploy', function() {
    var sftp = require('gulp-sftp');

    return gulp.src(assets + '/**')
        .pipe(sftp({
            host: '[remote server ip]',
            remotePath: '/www/app/',
            user: 'foo',
            pass: 'bar'
        }));
});
gulp.task('start', function() {
    nodemon({
        script: 'app.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development' }
    });
});
// @see http://webpack.github.io/docs/webpack-dev-server.html
gulp.task('default', function(done) {
    var WebpackDevServer = require('webpack-dev-server');
    var compiler = webpack(webpackDevConf);
    console.log( webpackDevConf.devServer)
    var devSvr = new WebpackDevServer(compiler, webpackDevConf.devServer);

    devSvr.listen(3000, 'localhost', function(err) {
        if(err) throw new gutil.PluginError('webpack-dev-server', err);

        gutil.log('[webpack-dev-server]',
            'http://localhost:3000/webpack-dev-server/index.html');
        // done();
    });
});
gulp.task('default', function () { console.log('Hello Gulp!') });
// gulp.task('default', ['pack'], function() {
//     var replace = require('gulp-replace');
//     var htmlmin = require('gulp-htmlmin');

//     return gulp
//         .src(assets + '/*.html')
//         .pipe(replace(/<script(.+)?data-debug([^>]+)?><\/script>/g, ''))
//         // @see https://github.com/kangax/html-minifier
//         .pipe(htmlmin({
//             collapseWhitespace: true,
//             removeComments: true
//         }))
//         .pipe(gulp.dest(assets));
// });
