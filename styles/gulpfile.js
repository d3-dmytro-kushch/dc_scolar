/**
 * @category  Tallium
 * @author      Tallium Inc (https://tallium.com)
 * @copyright   Copyright (C) 2017 Tallium Inc. All rights reserved.
 * @version    1
 * @link        https://tallium.com
 *
 * Created by DimaK on 10.05.17.
 */

// Include gulp
var gulp = require('gulp');

var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var iconfontTemplate = require('gulp-iconfont-template');

var fontName = 'iconsfont';

gulp.task('iconfont', function () {
    gulp.src(['icons/*.svg'])
        .pipe(iconfontTemplate({
            fontName: fontName,
            path: '../index-template.html',
            targetPath: '../../../index.html',
            fontPath: './icons/fonts/'
        }))
        .pipe(iconfontCss({
            fontName: fontName,
            normalize: true,
            fontHeight: 300,
            path: 'icons/template-less/_icons.less',
            targetPath: '../generated-less/' + fontName + '.less',
            fontPath: 'icons/fonts/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            prependUnicode: true,
            normalize: true,
            formats: ['svg', 'ttf', 'eot', 'woff', 'woff2']
        }))
        .pipe(gulp.dest('icons/fonts/'));
});