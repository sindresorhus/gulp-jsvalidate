# [gulp](https://github.com/wearefractal/gulp)-jsvalidate [![Build Status](https://secure.travis-ci.org/sindresorhus/gulp-jsvalidate.png?branch=master)](http://travis-ci.org/sindresorhus/gulp-jsvalidate)

> Validate JavaScript code and report possible syntax errors

![](screenshot.png)

The earlier you find syntax errors, the earlier you can fix them.


## Install

Install with [npm](https://npmjs.org/package/gulp-jsvalidate)

```
npm install --save-dev gulp-jsvalidate
```


## Example

```js
var gulp = require('gulp');
var jsValidate = require('gulp-jsvalidate');

gulp.task('default', function () {
	gulp.src('app.js')
		.pipe(jsValidate());
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
