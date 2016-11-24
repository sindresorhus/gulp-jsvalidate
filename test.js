import test from 'ava';
import gutil from 'gulp-util';
import m from './';

test.cb(t => {
	t.plan(1);

	const stream = m();

	stream.on('error', () => {
		t.pass();
		t.end();
	});

	stream.write(new gutil.File({
		contents: new Buffer('const foo = \'bar;')
	}));
});
