# [gulp](http://gulpjs.com)-jsvalidate [![Build Status](https://travis-ci.org/sindresorhus/gulp-jsvalidate.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-jsvalidate)

> Validate JavaScript code and report possible syntax errors

![](screenshot.png)

The earlier you find syntax errors, the earlier you can fix them.


## Install

```bash
$ npm install --save-dev gulp-jsvalidate
```


## Usage

```js
var gulp = require('gulp');
var jsValidate = require('gulp-jsvalidate');

gulp.task('default', function () {
	return gulp.src('app.js')
		.pipe(jsValidate());
});
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
