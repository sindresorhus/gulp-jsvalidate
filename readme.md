# gulp-jsvalidate

> Validate JavaScript code and report possible syntax errors

![](screenshot.png)

The earlier you find syntax errors, the earlier you can fix them.

## Install

```
$ npm install --save-dev gulp-jsvalidate
```

## Usage

```js
const gulp = require('gulp');
const jsValidate = require('gulp-jsvalidate');

exports.default = () => (
	gulp.src('app.js')
		.pipe(jsValidate())
);
```

## API

### gulpJsValidate(options?)

#### options

Type: `object`

##### module

Type: `boolean`\
Default: `true`

Parse the JavaScript code as a [ES2015 module](https://exploringjs.com/impatient-js/ch_modules.html) instead of a script.
