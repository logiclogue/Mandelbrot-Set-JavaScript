var gulp = require('gulp');
var inject = require('gulp-inject');


gulp.task('default', function () {
	return gulp.src('./index.html')
		.pipe(inject(gulp.src('./js/*.js', {read: false}), {relative: true}))
		.pipe(gulp.dest('./'));
});