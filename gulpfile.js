var gulp = require('gulp'),
    traceur = require('gulp-traceur');

gulp.task('copy', function(){

    gulp.src('bower_components/traceur-runtime/traceur-runtime.min.js').
        pipe(gulp.dest('dist'));

    gulp.src('bower_components/traceur-runtime/traceur-runtime.min.map').
        pipe(gulp.dest('dist'));

    return gulp.src('*.html').
        pipe(gulp.dest('dist'));
});

gulp.task('es6', function () {
    return gulp.src('mediator.js')
        .pipe(traceur())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy', 'es6']);