describe('Controller: SignupCtrl', function () {
	
	it('success message should not be shown from start', function() {
		browser.get('#/signUp');
		
		element(by.model('form')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
		
		element(by.id('successMessage')).isDisplayed().then(function(visible) {
			expect(visible).toBeFalsy();
		});
	});
	
	it('submit button should be disabled if form is empty', function() {
		browser.get('#/signUp');
		submitButton=element(by.id('submitButton'));
		expect(submitButton.isEnabled()).toBe(false);
	});
	
	it('invalid password should show message', function() {
		browser.get('#/signUp');
		
		element(by.model('user.password')).sendKeys(1);
		
		element(by.model('user.name')).click();
		
		element(by.id('invalidPasswordError')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
	});
	
	it('empty password should show error', function() {
		browser.get('#/signUp');
		
		element(by.model('user.password')).click();
		
		element(by.model('user.name')).click();
		
		element(by.id('emptyPasswordError')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
	});
	
	it('empty user name should show error', function() {
		browser.get('#/signUp');
		
		element(by.model('user.name')).click();
		
		element(by.model('user.password')).click();
		
		element(by.id('emptyNameError')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
	});
	
	it('empty user familyName should show error', function() {
		browser.get('#/signUp');
		
		element(by.model('user.familyName')).click();
		
		element(by.model('user.password')).click();
		
		element(by.id('emptyFamilyNameError')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
	});
	
	it('invalid email should show message', function() {
		browser.get('#/signUp');
		
		element(by.model('user.email')).sendKeys('IamNotAnEmail');
		
		element(by.model('user.name')).click();
		
		element(by.id('invalidEmailError')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
	});
	
	it('empty email should show message', function() {
		browser.get('#/signUp');
		
		element(by.model('user.email')).click();
		
		element(by.model('user.name')).click();
		
		element(by.id('emptyEmailError')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
	});
	
	it('if confirm password not match password show error', function() {
		browser.get('#/signUp');
		
		element(by.model('user.passwordConfirm')).sendKeys('Hello darkness my old friend.');
		
		element(by.model('user.password')).sendKeys('I have come to talk with you again');
		
		element(by.model('user.name')).click();
		
		element(by.id('passwordNotMatchError')).isDisplayed().then(function(visible){
			expect(visible).toBeTruthy();
		});
	});
	
	it('if confirm password match password do not show error', function() {
		browser.get('#/signUp');
		
		element(by.model('user.passwordConfirm')).sendKeys('Within the sound of silence.');
		
		element(by.model('user.password')).sendKeys('Within the sound of silence.');
		
		element(by.model('user.name')).click();
		
		element(by.id('passwordNotMatchError')).isDisplayed().then(function(visible){
			expect(visible).toBeFalsy();
		});
	});
	
});
