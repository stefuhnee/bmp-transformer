const gulp = require('gulp');
const mocha = require('gulp-mocha');
const lint = require('gulp-eslint');

gulp.task('linter', () => {
  return gulp.src(['./*.js', './model/*.js', './test/*.js', './lib/*.js'])
    .pipe(lint())
    .pipe(lint.format());
});

gulp.task('tests', () => {
  return gulp.src(['./test/*.js'], {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', () => {
  gulp.watch(['./*.js', './model/*.js', './test/*.js', './lib/*.js'], ['linter']);
});

gulp.task('default', ['linter', 'tests'], () => {
});
