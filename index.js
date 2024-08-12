import {parse} from '@babel/parser';
import {gulpPlugin} from 'gulp-plugin-extras';

export default function gulpJsValidate({module: useModule = true} = {}) {
	return gulpPlugin('gulp-jsvalidate', file => {
		try {
			parse(file.contents.toString(), {
				sourceType: useModule ? 'module' : 'script',
				sourceFilename: file.basename,
			});
		} catch (error) {
			if (error instanceof SyntaxError) {
				const formattedError = new Error(`\n${error.message}`);
				formattedError.isPresentable = true;
				throw formattedError;
			}

			throw error;
		}

		return file;
	});
}
