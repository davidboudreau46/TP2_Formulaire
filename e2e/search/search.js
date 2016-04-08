describe('search', function () {
	
	it('if nothing has been searched the search box should not be visible', function() {
		browser.get('#/search');
		
		element(by.model('searchResult')).isDisplayed().then(function(visible) {
			expect(visible).toBeFalsy();
		});
	});
	
	it('if something has been searched the search box should be visible', function() {
		browser.get('#/search');
		
		element(by.model('filter')).sendKeys('Deadpool');
		
		element(by.model('searchResult')).isDisplayed().then(function(visible) {
			expect(visible).toBeTruthy();
		});
	});
	
});