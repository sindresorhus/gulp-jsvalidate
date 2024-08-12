import {Buffer} from 'node:buffer';
import test from 'ava';
import Vinyl from 'vinyl';
import {pEvent} from 'p-event';
import gulpJsvalidate from './index.js';

test('main', async t => {
	const stream = gulpJsvalidate({module: false});
	const errorPromise = pEvent(stream);

	stream.end(new Vinyl({
		path: import.meta.url,
		contents: Buffer.from('const foo = \'bar;\nlet undefinedVariable;undefinedVariable ??= \'Hello\';'),
	}));

	await t.throwsAsync(errorPromise, {message: /Unterminated string constant/});
});

test('supports `import`', async t => {
	const stream = gulpJsvalidate();
	const errorPromise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		path: import.meta.url,
		contents: Buffer.from('import foo from \'foo\';'),
	}));

	await t.notThrowsAsync(errorPromise);
});
