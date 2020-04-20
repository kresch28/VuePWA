module.exports = {
	'DuckDuckGo Search': (client) => {
		client
			.url('https://vuetimetracker.netlify.app/')
			.pause(1000);
		
		client.expect.element('body').to.be.present.before(1000);
		
		client.expect.to.have.element('#ButtonStartTracking');
		client.expect.element('#ButtonStartTracking').to.be.an('button');
		client.expect.element('#ButtonStartTracking').to.be.visible;
		
		client
			.click('#ButtonStartTracking')
			.pause(1000);
		
		// client.expect.element('#links').text.to.contain('Informatik, Kommunikation, Medien');
		
		client.end();
	},
};