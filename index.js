// tooling
const parser  = require('postcss-selector-parser');
const postcss = require('postcss');

// selector matcher
const selectorMatch = /(.+?)~\^(['"])(.*?)\2/;

// plugin
module.exports = postcss.plugin('postcss-space-start-attrs', () => (css) => {
	// walk each matching rule
	css.walkRules(selectorMatch, (rule) => {
		rule.selector = parser((selectors) => {
			walk(selectors, (node) => {
				if (node.type === 'attribute' && selectorMatch.test(node.attribute)) {
					const m = node.attribute.match(selectorMatch);

					node.attribute = m[1];

					node.operator  = '*=';
					node.value     = `${ m[2] } ${ m[3] }${ m[2] }`;

					node.parent.parent.insertAfter(node.parent, node.parent.clone());

					node.operator  = '^=';
					node.value     = m[2] + m[3] + m[2];
				}
			});
		}).process(rule.selector).result;
	});
});

// override plugin#process
module.exports.process = function (cssString, pluginOptions, processOptions) {
	return postcss([
		0 in arguments ? module.exports(pluginOptions) : module.exports()
	]).process(cssString, processOptions);
};

const walk = (parent, fn) => {
	let index = -1;
	let child;

	while (child = parent.nodes[++index]) {
		fn(child, index);

		if (child.nodes) {
			walk(child, fn);
		}
	}
};
