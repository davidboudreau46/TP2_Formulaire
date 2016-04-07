'use strict';

describe('Controller: ContactCtrl', function () {

	var $httpBackend, $rootScope, createController, authRequestHandler;

	// load the controller's module
	beforeEach(module('tp1FullstackApp'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($injector) {
		$httpBackend = $injector.get('$httpBackend');
		authRequestHandler = $httpBackend.when('GET', '/auth')
		.respond({userId: 'userX'}, {'A-Token': 'xxx'});
		$rootScope = $injector.get('$rootScope');
		var $controller = $injector.get('$controller');
		createController = function() {
			return $controller('ContactCtrl', {'$scope' : $rootScope });
		};
	}));

	it('with invalid informations should show errors', function () {
		var controller = createController();
		$httpBackend.expectPOST('https://crispesh.herokuapp.com/api/contact').respond(500, '');

		$rootScope.email='thisIsNotAValidEmail';
		$rootScope.reason='test';
		$rootScope.message='lol';
		$rootScope.name='bob';
		$rootScope.sendForm();
		$httpBackend.flush();

		expect($rootScope.invalidMessage).toBe(true);
	});

	it('with valid informations should show not errors', function () {
		var controller = createController();
		$httpBackend.expectPOST('https://crispesh.herokuapp.com/api/contact').respond(201, '');

		$rootScope.email='test@test.test';
		$rootScope.reason='test';
		$rootScope.message='lol';
		$rootScope.name='bob';
		$rootScope.sendForm();
		$httpBackend.flush();

		expect($rootScope.sentForm).toBe(true);
	});

});
