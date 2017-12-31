'use strict';
const gulp = require('gulp');
const jsValidate = require('.');

gulp.task('default', () =>
	gulp.src('fixture.js')
		.pipe(jsValidate())
);
