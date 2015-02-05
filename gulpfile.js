var gulp = require('gulp'),
    traceur = require('gulp-traceur'),
    jshint = require('gulp-jshint'),
    watch = require('gulp-watch');

gulp.task('copy', function(){

    gulp.src('bower_components/traceur-runtime/traceur-runtime.min.js').
        pipe(gulp.dest('dist/scripts'));

    gulp.src('bower_components/traceur-runtime/traceur-runtime.min.map').
        pipe(gulp.dest('dist/scripts'));

    return gulp.src('*.html').
        pipe(gulp.dest('dist'));
});

gulp.task('es6', function () {
    return gulp.src('mediator.js')
        .pipe(traceur())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('lint', function() {
    return gulp.src('mediator.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('build', ['lint', 'copy', 'es6']);

gulp.task('default', function () {
    gulp.watch('*.{js,html}', ['build']);
});