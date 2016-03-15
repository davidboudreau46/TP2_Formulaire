describe('Controller: ContactCtrl', function () {
	
	it('success message should not be shown from start', function() {
		browser.get('#/contact');
		
		element(by.model('form')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
		
		element(by.id('successMessage')).isDisplayed().then(function(visible) {
			expect(visible).toBeFalsy();
		});
	});
	
	it('invalid email should show message', function() {
		browser.get('#/contact');
		
		element(by.model('contact.email')).sendKeys('IamNotAnEmail');
		
		element(by.model('contact.name')).click();
		
		element(by.id('invalidEmailError')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
	});
	
	it('empty email should show message', function() {
		browser.get('#/contact');
		
		element(by.model('contact.email')).click();
		
		element(by.model('contact.name')).click();
		
		element(by.id('emptyEmailError')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
	});
	
	it('empty user name should show error', function() {
		browser.get('#/contact');
		
		element(by.model('contact.name')).click();
		
		element(by.model('contact.email')).click();
		
		element(by.id('emptyNameError')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
	});
	
	it('empty user name should show error', function() {
		browser.get('#/contact');
		
		element(by.model('contact.message')).click();
		
		element(by.model('contact.email')).click();
		
		element(by.id('emptyMessageError')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
	});
});
