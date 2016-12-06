# Space Start Attributes <a href="https://github.com/postcss/postcss"><img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right"></a>

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-image]][lic-url]
[![Changelog][log-image]][log-url]
[![Gitter Chat][git-image]][git-url]

[Space Start Attributes] targets attributes beginning with a certain value in a space separated list in CSS.

```css
/* before */

div[data-thing~^"starts-with"] {
	background-color: red;
}

div:not([data-thing~^"starts-with"]) {
	background-color: blue;
}

/* after */

div[class^="starts-with"],div[class*=" starts-with"] {
	background-color: red;
}

div:not([class^="starts-with"],[class*=" starts-with"]) {
	background-color: blue;
}
```

Note: The above example generates a [W3C CSS level 4](https://drafts.csswg.org/selectors-4/#negation) `:not()` selector. I recommend using [Selector Not](https://github.com/postcss/postcss-selector-not) to transpile this to a more compatible CSS level 3 selector.

## Usage

Add [Space Start Attributes] to your build tool:

```bash
npm install postcss-space-start-attrs --save-dev
```

#### Node

```js
require('postcss-space-start-attrs').process(YOUR_CSS, { /* options */ });
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [Space Start Attributes] as a PostCSS plugin:

```js
postcss([
	require('postcss-space-start-attrs')({ /* options */ })
]).process(YOUR_CSS, /* options */);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [Space Start Attributes] within your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
	return gulp.src('./src/*.css').pipe(
		postcss([
			require('postcss-space-start-attrs')({ /* options */ })
		])
	).pipe(
		gulp.dest('.')
	);
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Enable [Space Start Attributes] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			use: [
				require('postcss-space-start-attrs')({ /* options */ })
			]
		},
		dist: {
			src: '*.css'
		}
	}
});
```

[npm-url]: https://www.npmjs.com/package/postcss-space-start-attrs
[npm-img]: https://img.shields.io/npm/v/postcss-space-start-attrs.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-space-start-attrs
[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-space-start-attrs.svg
[lic-url]: LICENSE.md
[lic-image]: https://img.shields.io/npm/l/postcss-space-start-attrs.svg
[log-url]: CHANGELOG.md
[log-image]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-image]: https://img.shields.io/badge/chat-gitter-blue.svg

[Space Start Attributes]: https://github.com/jonathantneal/postcss-space-start-attrs
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
