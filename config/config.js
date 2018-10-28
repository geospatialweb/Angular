'use strict';

module.exports = {
	morgan: {
		flags: 'a',
		format: 'common',
		logfile: './logs/access.log'
	},
	routes: {
		data: '/data',
		dir: 'routes'
	},
	source: {
		root: 'src'
	}
};
