/**
 * Wrap gulp streams into fail-safe function for better error reporting
 * Usage:
 * gulp.task('less', wrapPipe(function(success, error) {
 *   return gulp.src('less/*.less')
 *      .pipe(less().on('error', error))
 *      .pipe(gulp.dest('app/css'));
 * }));
 *
 * @author just-boris
 * @url    https://gist.github.com/just-boris/89ee7c1829e87e2db04c
 *
 * @param taskFn
 * @returns {Function}
 */
function wrapPipe(taskFn) {
    return async function(done) {
        var onSuccess = function() {
            done();
        };
        var onError = function(err) {
            done(err);
        }
        var outStream = taskFn(onSuccess, onError);
        if (outStream && typeof outStream.on === 'function') {
            outStream.on('end', onSuccess);
        }
    }
}

/**
 * @url http://markgoodyear.com/2014/01/getting-started-with-gulp/
 * @type {*|Gulp}
 */
var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    replace      = require('gulp-string-replace'),
    // jshint       = require('gulp-jshint'),
    uglify       = require('gulp-uglify'),
    jsValidate   = require('gulp-jsvalidate');

/**
 * watch task
 */
gulp.task('watch', wrapPipe(function(success, error) {
    gulp.watch('./src/host/**/*.js*', gulp.series('host')).on('error', error);
}));

gulp.task('host', wrapPipe(function(success, error) {

    var hostjs = [
        '!host/host.bundle.jsx',

        // Core files
        './src/host/Host.jsx',
        './src/host/index.jsx'
    ];

    return gulp.src(hostjs)
        .pipe(concat('host.bundle.jsx').on('error', error))
        .pipe(jsValidate().on('error', error))
        // .pipe(uglify()).on('error', error)
        .pipe(gulp.dest('./dist/host'));

}));

/**
 * default task
 */
gulp.task('default', gulp.series('watch'));

/**
 * Build all task
 */
gulp.task('build', gulp.series(['host']));
