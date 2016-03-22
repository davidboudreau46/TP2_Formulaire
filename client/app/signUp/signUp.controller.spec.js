'use strict';

describe('Controller: SignupCtrl', function () {

	// load the controller's module
	beforeEach(module('tp1FullstackApp'));

	var SignupCtrl,
    scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		SignupCtrl = $controller('SignupCtrl', {
			$scope: scope
			// place here mocked dependencies
		});
	}));
	
	it('compareTo should make sure that both passwords are the same', function() {
		
	});

});
