describe('Controller: MainCtrl', function () {
	
	it('should have a title', function() {
		browser.get('#/');
		expect( browser.getTitle() ).toEqual("DJ's Movies");
	});
	
});
