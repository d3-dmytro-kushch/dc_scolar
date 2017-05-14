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
var del = require('del');
var runSequence = require('run-sequence');

var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var iconfontTemplate = require('gulp-iconfont-template');

var fontName = 'iconsfont';

gulp.task('iconfont', function () {
    gulp.src(['icons/*.svg'])
        .pipe(iconfontTemplate({
            fontName: fontName,
            prependUnicode: true,
            path: '../examples/index-template.html',
            targetPath: '../../../examples/index.html',
            fontPath: './icons/fonts/'
        }))
        .pipe(iconfontCss({
            fontName: fontName,
            fixedCodepoints: true,
            path: 'icons/template-less/_icons.less',
            targetPath: '../generated-less/' + fontName + '.less',
            fontPath: 'icons/fonts/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            startUnicode: 0xE001,
            prependUnicode: true,
            appendCodepoints: true,
            normalize: true,
            fontHeight: 1001,
            centerHorizontally: true,
            formats: ['svg', 'ttf', 'eot', 'woff', 'woff2']
        }))
        .pipe(gulp.dest('icons/fonts/'));
});

gulp.task('clean-icons', function(){
    return del(['./icons/fonts/', './icons/generated-less/']);
});

gulp.task('icons', function(){
    runSequence('clean-icons', ['iconfont']);
});
//
// gulp.task('watch', function() {
//     gulp.watch(['/','./icons/'], ['icons']);
// });