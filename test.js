import test from 'ava';
import Vinyl from 'vinyl';
import pEvent from 'p-event';
import gulpJsvalidate from '.';

test('main', async t => {
	const stream = gulpJsvalidate({module: false});
	const errorPromise = pEvent(stream);

	stream.end(new Vinyl({
		contents: Buffer.from('const foo = \'bar;')
	}));

	await t.throwsAsync(errorPromise, {message: /Unexpected token/});
});

test('supports `import`', async t => {
	const stream = gulpJsvalidate();
	const errorPromise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		contents: Buffer.from('import foo from \'foo\';')
	}));

	await t.notThrowsAsync(errorPromise);
});
