'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var esprima = require('esprima');

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-jsvalidate', 'Streaming not supported'));
			return cb();
		}

		var errors;

		try {
			errors = esprima.parse(file.contents.toString(), {tolerant: true}).errors;
		} catch (err) {
			err.message = 'gulp-jsvalidate: ' + err.message;
			this.emit('error', new gutil.PluginError('gulp-jsvalidate', err));
		}

		if (errors && errors.length > 0) {
			this.emit('error', new gutil.PluginError('gulp-jsvalidate', '\n' + errors.join('\n')));
		}

		this.push(file);
		cb();
	});
};
