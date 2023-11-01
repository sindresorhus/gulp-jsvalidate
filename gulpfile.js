import gulp from 'gulp';
import jsValidate from './index.js';

export default function main() {
	return gulp.src('fixture.js')
		.pipe(jsValidate());
}
