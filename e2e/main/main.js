describe('Controller: MainCtrl', function () {

	it('should have a title', function() {
		browser.get('#/');
		expect( browser.getTitle() ).toEqual("DJ's Movies");
	});

  it('should have a button send for comments', function() {
    //element(by.id('signOutButton')).click();

    browser.get('#/');
    element(by.id('submitButton')).isDisplayed().then(function(visible) {
      expect(visible).toBeFalsy();
    });
    browser.get('#/signIn');

    element(by.model('signInEmail')).sendKeys('okok@ok.com');
    element(by.model('signInPassword')).sendKeys('okok');
    element(by.buttonText('Envoyer')).click();


    element(by.id('title')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });

    element(by.buttonText('Envoyer')  ).isDisplayed().then(function() {
      expect(element(by.buttonText('Envoyer')).isDisplayed()).toBeTruthy();
    });
  });

  it('should have a text area for comments', function() {
    //element(by.id('signOutButton')).click();

    browser.get('#/');
    element(by.id('submitButton')).isDisplayed().then(function(visible) {
      expect(visible).toBeFalsy();
    });
    browser.get('#/signIn');

    element(by.model('signInEmail')).sendKeys('okok@ok.com');
    element(by.model('signInPassword')).sendKeys('okok');
    element(by.buttonText('Envoyer')).click();


    element(by.id('title')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });

    element(by.id('commentTextArea')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });
  });

});
