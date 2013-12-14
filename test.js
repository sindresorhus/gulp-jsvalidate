'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var jsValidate = require('./index');

it('should log error on syntax errors', function (cb) {
	gutil.log = function () {
		var str = [].slice.call(arguments).join(' ');

		if (/Line 1: Unexpected token let/.test(str)) {
			assert(true);
			cb();
		}
	};

	jsValidate().write(new gutil.File({contents: 'var let = "foo";'}));
});
