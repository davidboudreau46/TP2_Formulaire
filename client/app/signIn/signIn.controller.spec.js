'use strict';

describe('Controller: SignInCtrl', function () {

	var $httpBackend, $rootScope, createController, authRequestHandler, location;

	// load the controller's module
	beforeEach(module('tp1FullstackApp'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($injector, $location) {
		location = $location;
		$httpBackend = $injector.get('$httpBackend');
		authRequestHandler = $httpBackend.when('GET', '/auth')
		.respond({userId: 'userX'}, {'A-Token': 'xxx'});
		$rootScope = $injector.get('$rootScope');
		var $controller = $injector.get('$controller');
		createController = function() {
			return $controller('SignInCtrl', {'$scope' : $rootScope });
		};
	}));

	it('with valid credentials should send user to main page', function () {
		var controller = createController();
		$httpBackend.expectPOST('https://crispesh.herokuapp.com/api/login_check').respond(201, '');
		$httpBackend.when('GET', 'app/main/main.html').respond('');
		$httpBackend.expectGET('app/main/main.html');
		
		$rootScope.signInEmail="test@example.com";
		$rootScope.signInPassword="test";
		$rootScope.sendForm();
		$httpBackend.flush();
		
		expect(location.path()).toBe('/');
	});
	
	it('with invalid credentials should show errors', function () {
		var controller = createController();
		$httpBackend.expectPOST('https://crispesh.herokuapp.com/api/login_check').respond(500, '');
		$httpBackend.when('GET', 'app/main/main.html').respond('');
		$httpBackend.expectGET('app/main/main.html');
		$rootScope.signInEmail="test@example.com";
		$rootScope.signInPassword="test2";
		$rootScope.sendForm();
		$httpBackend.flush();
		
		expect($rootScope.invalidLogin).toBe(true);
	});
});
