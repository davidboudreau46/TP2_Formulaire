'use strict';

describe('Controller: SignupCtrl', function () {

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
			return $controller('SignUpCtrl', {'$scope' : $rootScope });
		};
	}));

	it('with invalid informations should show errors', function () {
		var controller = createController();
		$httpBackend.expectPOST('https://crispesh.herokuapp.com/api/register').respond(500, '');


		$rootScope.email='thisIsNotAValidEmail';
		$rootScope.name='test';
		$rootScope.familyName='lol';
		$rootScope.password='bob';
		$rootScope.sendForm();
		$httpBackend.flush();

		expect($rootScope.invalidLogin).toBe(true);
	});

	it('with valid informations should show not errors', function () {
		var controller = createController();
		$httpBackend.expectPOST('https://crispesh.herokuapp.com/api/register').respond(201, '');


		$rootScope.email='test@test.test';
		$rootScope.name='test';
		$rootScope.familyName='lol';
		$rootScope.password='bob';
		$rootScope.sendForm();
		$httpBackend.flush();

		expect($rootScope.sentForm).toBe(true);
	});

});
