import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('default', () =>
    gulp.src('./index.js')
    .pipe(gulp.dest('dist'))
);