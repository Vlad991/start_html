const gulp = require('gulp');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const cache = require('gulp-cache');

function watchFiles() {
    gulp.watch('./**/*.css', browserReload);
    gulp.watch('./**/*.html', browserReload);
    gulp.watch('./**/*.php', browserReload);
    gulp.watch('./**/*.js', browserReload);
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 3000
    });
    done();
}

function browserReload(done) {
    cache.clearAll();
    browserSync.reload();
    done();
}

gulp.task('default', gulp.parallel(watchFiles, sync));
gulp.task('files', gulp.parallel(watchFiles));