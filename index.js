'use strict';
const through = require('through2');
const esprima = require('esprima');
const PluginError = require('plugin-error');

module.exports = ({module: useModule = true} = {}) => {
	const parse = useModule ? esprima.parseModule : esprima.parseScript;

	return through.obj(function (file, encoding, callback) {
		if (file.isNull()) {
			callback(null, file);
			return;
		}

		if (file.isStream()) {
			callback(new PluginError('gulp-jsvalidate', 'Streaming not supported'));
			return;
		}

		let errors;

		try {
			errors = parse(file.contents.toString(), {tolerant: true}).errors;
		} catch (error_) { // eslint-disable-line unicorn/catch-error-name
			this.emit('error', new PluginError('gulp-jsvalidate', error_, {fileName: file.path}));
		}

		if (errors && errors.length > 0) {
			this.emit('error', new PluginError('gulp-jsvalidate', '\n' + errors.join('\n'), {
				fileName: file.path,
				showStack: false
			}));
		}

		callback(null, file);
	});
};
