# Space Start Attributes

<img align="right" width="135" height="95" src="http://postcss.github.io/postcss/logo-leftp.png" title="Philosopher’s stone, logo of PostCSS">

[![NPM Version][npm-img]][npm] [![Build Status][ci-img]][ci]

[Space Start Attributes] targets attributes beginning with a certain value in a space separated list.

```css
/* before */

div[data-thing^~"starts-with"] {
	background-color: red;
}

div:not([data-thing^~"starts-with"]) {
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
require('postcss-space-start-attrs').process(YOUR_CSS);
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [Space Start Attributes] as a PostCSS plugin:

```js
postcss([
    require('postcss-space-start-attrs')()
]);
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
    return gulp.src('./css/src/*.css').pipe(
        postcss([
            require('postcss-space-start-attrs')()
        ])
    ).pipe(
        gulp.dest('./css')
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
            processors: [
                require('postcss-space-start-attrs')()
            ]
        },
        dist: {
            src: 'css/*.css'
        }
    }
});
```

[ci]:      https://travis-ci.org/jonathantneal/postcss-space-start-attrs
[ci-img]:  https://img.shields.io/travis/jonathantneal/postcss-space-start-attrs.svg
[npm]:     https://www.npmjs.com/package/postcss-space-start-attrs
[npm-img]: https://img.shields.io/npm/v/postcss-space-start-attrs.svg

[Gulp PostCSS]:  https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]:       https://github.com/postcss/postcss

[Space Start Attributes]: https://github.com/postcss/postcss-selector-not
