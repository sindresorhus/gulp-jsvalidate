'use strict';
const through = require('through2');
const esprima = require('esprima');
const PluginError = require('plugin-error');

module.exports = () => {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-jsvalidate', 'Streaming not supported'));
			return;
		}

		let errors;

		try {
			errors = esprima.parse(file.contents.toString(), {tolerant: true}).errors;
		} catch (err) {
			this.emit('error', new PluginError('gulp-jsvalidate', err, {fileName: file.path}));
		}

		if (errors && errors.length > 0) {
			this.emit('error', new PluginError('gulp-jsvalidate', '\n' + errors.join('\n'), {
				fileName: file.path,
				showStack: false
			}));
		}

		cb(null, file);
	});
};
