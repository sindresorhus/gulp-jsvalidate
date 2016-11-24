'use strict';
const gutil = require('gulp-util');
const through = require('through2');
const esprima = require('esprima');

module.exports = () => {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-jsvalidate', 'Streaming not supported'));
			return;
		}

		let errors;

		try {
			errors = esprima.parse(file.contents.toString(), {tolerant: true}).errors;
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-jsvalidate', err, {fileName: file.path}));
		}

		if (errors && errors.length > 0) {
			this.emit('error', new gutil.PluginError('gulp-jsvalidate', '\n' + errors.join('\n'), {
				fileName: file.path,
				showStack: false
			}));
		}

		cb(null, file);
	});
};
