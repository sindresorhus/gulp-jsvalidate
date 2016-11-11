'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var jsValidate = require('./');

it('should log error on syntax errors', function (cb) {
	var stream = jsValidate();

	stream.on('error', function (err) {
		assert(true);
		cb();
	});

	stream.write(new gutil.File({
		contents: new Buffer('var foo = \'bar;')
	}));
});
