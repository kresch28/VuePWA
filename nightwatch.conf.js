const chromedriver = require('chromedriver');
// const geckodriver = require('geckodriver');

module.exports = {
	src_folders: ['tests/nightwatch'],
	
	webdriver: {
		start_process: true,
		server_path: chromedriver.path,
		port: 4444,
		cli_args: ['--port=4444'],
	},
	
	test_settings: {
		default: {
			desiredCapabilities: {
				browserName: 'chrome',
				javascriptEnabled: true,
				acceptSslCerts: true,
			},
		},
		
		headless: {
			desiredCapabilities: {
				browserName: 'chrome',
				javascriptEnabled: true,
				acceptSslCerts: true,
				chromeOptions: {
					args: ['headless'],
				},
			},
		},
		
		// ... add GeckoDriver config
		// ... add Microsoft WebDriver config
		// ... add SafariDriver config
	},
};