describe('Controller: PlaylistCtrl', function () {

  it('should have a button view in movie in playlist', function() {
    browser.get('#/signIn');

    element(by.model('signInEmail')).sendKeys('okok@ok.com');
    element(by.model('signInPassword')).sendKeys('okok');
    element(by.buttonText('Envoyer')).click();

    browser.get('#/playlist');

    element(by.id('WatchedButton')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });
  });

  it('should have a button delete in movie in playlist', function() {
    browser.get('#/signIn');

    element(by.model('signInEmail')).sendKeys('okok@ok.com');
    element(by.model('signInPassword')).sendKeys('okok');
    element(by.buttonText('Envoyer')).click();

    browser.get('#/playlist');

    element(by.id('deleteButton')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });
  });

  it('if something has been searched in playlist the search box should be visible', function() {
    browser.get('#/playlist');

    element(by.model('filter')).sendKeys('Deadpool');

    element(by.model('searchResult')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });
  });

  it('should have a buttun add for a searched movie', function() {
    browser.get('#/playlist');

    element(by.model('filter')).sendKeys('Deadpool');

    element(by.id('addButton')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });
  });



});
