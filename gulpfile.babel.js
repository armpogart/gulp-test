import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('default', () =>
    gulp.src('./index.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
);