'use strict';
var es = require('event-stream');
var gutil = require('gulp-util');
var esprima = require('esprima');

function error(str) {
	gutil.log('gulp-jsvalidate:', gutil.colors.red(str));
}

module.exports = function () {
	return es.map(function (file, cb) {
		try {
			esprima.parse(String(file.contents), {tolerant: true}).errors.forEach(function (err) {
				error(err.message);
			});
		} catch (err) {
			error(err.message);
		}

		cb(null, file);
	});
};
