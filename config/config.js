'use strict';

module.exports = {
	favicon: './assets/favicon.ico',
	morgan: {
		flags: 'a',
		format: 'common',
		logfile: './logs/access.log'
	},
	routes: {
		layers: '/layers'
	}
};
