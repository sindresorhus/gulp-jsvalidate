import test from 'ava';
import Vinyl from 'vinyl';
import m from '.';

test.cb(t => {
	t.plan(1);

	const stream = m();

	stream.on('error', () => {
		t.pass();
		t.end();
	});

	stream.end(new Vinyl({
		contents: Buffer.from('const foo = \'bar;')
	}));
});
