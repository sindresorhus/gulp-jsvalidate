'use strict';
var gulp = require('gulp');
var jsValidate = require('./');

gulp.task('default', function () {
	return gulp.src('fixture.js')
		.pipe(jsValidate());
});
