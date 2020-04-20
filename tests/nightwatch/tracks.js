module.exports = {
	'Start Tracking functionality': (client) => {
		client
			.url('https://vuetimetracker.netlify.app/')
			.pause(1000);
		
		client.expect.element('body').to.be.present.before(1000);
		
		client.expect.element('#ButtonStartTracking').to.be.present;
		client.expect.element('#ButtonStartTracking').to.be.an('p');
		//client.expect.element('#ButtonStartTracking').to.have.css('button');
		client.expect.element('#ButtonStartTracking').to.be.visible;
		
		let countBefore = client.elements('css selector', '.TrackWrapper', (result) => { return result.value.length; });
		
		client
			.click('#ButtonStartTracking')
			.pause(1000)
			.setValue('#Category', "Automated Nightwatch Test")
			.pause(1000)
			.submitForm('form')
			.pause(1000)
			.click('#ButtonStopTracking')
			;
		
		client.expect.elements('.TrackWrapper').count.to.be(countBefore + 2);
		// TODO: check, if there is one more entry in the tracks list
		// client.expect.element('#links').text.to.contain('Informatik, Kommunikation, Medien');
		
		client.end();
	},
};