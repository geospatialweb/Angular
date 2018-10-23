'use strict';

module.exports = {
	morgan: {
		flags: 'a',
		format: 'common',
		logfile: './logs/access.log'
	},
	routes: {
		layers: '/layers',
		routes: 'routes'
	},
	source: {
		root: 'src/build'
	}
};
