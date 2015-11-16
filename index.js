var parser  = require('postcss-selector-parser');
var postcss = require('postcss');
var attrRE  = /(.+?)\^~(['"])(.*?)\2/;

module.exports = postcss.plugin('postcss-space-start-attrs', function () {
	return function (css) {
		css.walkRules(function (rule) {
			rule.selector = parser(function (selectors) {
				walk(selectors, function (node) {
					var m;

					if (m = node.type === 'attribute' && node.attribute.match(attrRE)) {
						node.attribute = m[1];

						node.operator  = '*=';
						node.value     = m[2] + ' ' + m[3] + m[2];

						node.parent.parent.insertAfter(node.parent, node.parent.clone());

						node.operator  = '^=';
						node.value     = m[2] + m[3] + m[2];
					}
				});
			}).process(rule.selector).result;
		});
	};
});

function walk(parent, callback) {
	var index = -1;
	var child;

	while (child = parent.nodes[++index]) {
		callback(child, index);

		if (child.nodes) walk(child, callback);
	}
}
