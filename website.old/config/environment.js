/* eslint-env node */
'use strict';

module.exports = function(environment) {
	let ENV = {
		firebase: {
			apiKey: "AIzaSyBmEBDOXXe3zFPoAvKhK_zDxxNSbZHKzO4",
			authDomain: "opex-2480b.firebaseapp.com",
			databaseURL: "https://opex-2480b.firebaseio.com",
			projectId: "opex-2480b",
			storageBucket: "opex-2480b.appspot.com",
			messagingSenderId: "599836582610"
		},
		torii: {  
			sessionServiceName: 'session'
		},
		modulePrefix: 'opex',
		environment,
		rootURL: '/',
		locationType: 'auto',
		contentSecurityPolicy: {
			'default-src': "'*'",
			'script-src': "'self'",
			'font-src': "'self'",
			'connect-src': "'self' *",
			'img-src': "'self'",
			'style-src': "'self' *",
			'media-src': "'self'"
		},
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false
			}
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		}
	};

	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {
		// here you can enable a production-specific feature
	}

	return ENV;
};