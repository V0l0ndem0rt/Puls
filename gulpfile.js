'use strict';
const gulp        = require('gulp');
const browserSync = require("browser-sync").create();
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

gulp.task('server', function() {

    browserSync.init({
        server: {
            baseDir: "src"
        },
<<<<<<< HEAD
        tunnel: true
=======
        tunnel: true,
        host: 'localhost',
        port: 9000,
        logPrefix: "g_dogg"
>>>>>>> main
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});


gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
});

gulp.task('default', gulp.parallel('watch', 'styles', 'server'));