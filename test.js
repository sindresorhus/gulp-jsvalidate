import test from 'ava';
import Vinyl from 'vinyl';
import pEvent from 'p-event';
import gulpJsvalidate from '.';

test('main', async t => {
	const stream = gulpJsvalidate();
	const errorPromise = pEvent(stream);

	stream.end(new Vinyl({
		contents: Buffer.from('const foo = \'bar;')
	}));

	await t.throwsAsync(errorPromise, {message: /Unexpected token/});
});
