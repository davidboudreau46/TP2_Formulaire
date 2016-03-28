describe('signIn', function () {
	
	it('error messages should not be shown from start', function() {
		browser.get('#/signIn');
		
		element(by.model('form')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
		
		element(by.id('errorMessage')).isDisplayed().then(function(visible) {
			expect(visible).toBeFalsy();
		});
		
		element(by.id('emptyPasswordError')).isDisplayed().then(function(visible) {
			expect(visible).toBeFalsy();
		});
		
		element(by.id('invalidPasswordError')).isDisplayed().then(function(visible) {
			expect(visible).toBeFalsy();
		});
		
		element(by.id('emptyEmailError')).isDisplayed().then(function(visible) {
			expect(visible).toBeFalsy();
		});
		
		element(by.id('invalidEmailError')).isDisplayed().then(function(visible) {
			expect(visible).toBeFalsy();
		});
	});
	
	it('password error required should be shown if nothing is in password field', function() {
		browser.get('#/signIn');
		
		element(by.model('signInPassword')).sendKeys(1);
		element(by.model('signInPassword')).clear();
		
		element(by.model('signInEmail')).click();
		
		element(by.id('emptyPasswordError')).isDisplayed().then(function(visible) {
			expect(visible).toBeTruthy();
		});
	});
	
	it('password error invalid should be shown if password is invalid', function() {
		browser.get('#/signIn');
		
		element(by.model('signInPassword')).sendKeys(1);
		
		element(by.model('signInEmail')).click();
		
		element(by.id('invalidPasswordError')).isDisplayed().then(function(visible) {
			expect(visible).toBeTruthy();
		});
	});
	
	it('email error invalid should be shown if email is empty', function() {
		browser.get('#/signIn');
		
		element(by.model('signInEmail')).sendKeys(1);
		element(by.model('signInEmail')).clear();
		element(by.model('signInEmail')).click();
		
		
		element(by.id('emptyEmailError')).isDisplayed().then(function(visible) {
			expect(visible).toBeTruthy();
		});
	});
	
	it('email error invalid should be shown if email is empty', function() {
		browser.get('#/signIn');
		
		element(by.model('signInEmail')).sendKeys(1);
		element(by.model('signInEmail')).click();
		
		element(by.id('invalidEmailError')).isDisplayed().then(function(visible) {
			expect(visible).toBeTruthy();
		});
	});
	
	it('submit button should be disabled if there are errors', function() {
		browser.get('#/signIn');
		
		element(by.model('signInEmail')).sendKeys(1);
		element(by.model('signInPassword')).sendKeys(1);
		
		expect(element(by.id('submitButton')).isEnabled()).toBe(false);
	});
	
	it('submit button should not enabled if there are no errors', function() {
		browser.get('#/signIn');
		
		element(by.model('signInEmail')).sendKeys('tes@exaple.co');
		element(by.model('signInPassword')).sendKeys('test');
		
		expect(element(by.id('submitButton')).isEnabled()).toBe(true);
	});
	
});