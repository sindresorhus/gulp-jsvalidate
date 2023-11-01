import esprima from 'esprima';
import {gulpPlugin} from 'gulp-plugin-extras';

export default function gulpJsValidate({module: useModule = true} = {}) {
	const parse = useModule ? esprima.parseModule : esprima.parseScript;

	return gulpPlugin('gulp-jsvalidate', file => {
		const {errors} = parse(file.contents.toString(), {tolerant: true});

		if (errors.length > 0) {
			const error = new Error(`\n${errors.join('\n')}`);
			error.isPresentable = true;
			throw error;
		}

		return file;
	});
}
