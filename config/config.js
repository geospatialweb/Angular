'use strict';

module.exports = {
	morgan: {
		flags: 'a',
		format: 'common',
		logfile: './logs/access.log'
	},
	socket: {
		event: 'layers'
	},
	source: {
		path: 'src'
	}
};
