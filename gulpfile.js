var gulp = require('gulp'),
    traceur = require('gulp-traceur');

gulp.task('default', function () {
    return gulp.src('mediator.js')
        .pipe(traceur())
        .pipe(gulp.dest('dist'));
});