'use strict';
const gulp = require('gulp');
const jsValidate = require('.');

exports.default = () => (
	gulp.src('fixture.js')
		.pipe(jsValidate())
);
