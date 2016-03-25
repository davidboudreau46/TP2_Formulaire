'use strict';

describe('Controller: SearchCtrl', function () {

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
			return $controller('SearchCtrl', {'$scope' : $rootScope });
		};
	}));

	it('when deadpool is searched change search value', function() {
		var controller = createController();
		$httpBackend.when('GET', 'https://omdbapi.com/?s=Deadpool&type=movie').respond('{"Search":[{"Title":"Deadpool","Year":"2016","imdbID":"tt1431045","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQyODg5Njc4N15BMl5BanBnXkFtZTgwMzExMjE3NzE@._V1_SX300.jpg"},{"Title":"Deadpool: A Typical Tuesday","Year":"2012","imdbID":"tt2153366","Type":"movie","Poster":"N/A"},{"Title":"DeadPool Black Panther Back in Red & Black","Year":"2014","imdbID":"tt4063610","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjA0OTg1NDEyMV5BMl5BanBnXkFtZTgwNzY4NjU2MzE@._V1_SX300.jpg"},{"Title":"Roast of Deadpool","Year":"2015","imdbID":"tt4345262","Type":"movie","Poster":"N/A"},{"Title":"DeadPool: The Merc with the Mouth","Year":"2015","imdbID":"tt4485182","Type":"movie","Poster":"N/A"},{"Title":"DeadPool Black Panther the Gauntlet","Year":"2015","imdbID":"tt4529214","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTg2MTI1ODMzNl5BMl5BanBnXkFtZTgwNTgxMjY4NjE@._V1_SX300.jpg"},{"Title":"The Deadpool","Year":"2006","imdbID":"tt4785560","Type":"movie","Poster":"N/A"},{"Title":"This Can\'t Be Deadpool XXX+X","Year":"2015","imdbID":"tt5049520","Type":"movie","Poster":"N/A"},{"Title":"Deadpool 2","Year":"2017","imdbID":"tt5463162","Type":"movie","Poster":"N/A"},{"Title":"Deadpool: The Merc with a Mouth Does Comic-Con","Year":"2012","imdbID":"tt2501372","Type":"movie","Poster":"N/A"}],"totalResults":"10","Response":"True"}');
		$httpBackend.expectGET('https://omdbapi.com/?s=Deadpool&type=movie');
		$rootScope.filter="Deadpool";
		$rootScope.Search();
		$httpBackend.flush();
		
		expect($rootScope.isSearch).toBe(true);
	});
	
	it('when server answer error, movies list should have connection error', function() {
		var controller = createController();
		$httpBackend.when('GET', 'https://omdbapi.com/?s=Deadpool&type=movie').respond(500, '{"Search":[{"Title":"Deadpool","Year":"2016","imdbID":"tt1431045","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQyODg5Njc4N15BMl5BanBnXkFtZTgwMzExMjE3NzE@._V1_SX300.jpg"},{"Title":"Deadpool: A Typical Tuesday","Year":"2012","imdbID":"tt2153366","Type":"movie","Poster":"N/A"},{"Title":"DeadPool Black Panther Back in Red & Black","Year":"2014","imdbID":"tt4063610","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjA0OTg1NDEyMV5BMl5BanBnXkFtZTgwNzY4NjU2MzE@._V1_SX300.jpg"},{"Title":"Roast of Deadpool","Year":"2015","imdbID":"tt4345262","Type":"movie","Poster":"N/A"},{"Title":"DeadPool: The Merc with the Mouth","Year":"2015","imdbID":"tt4485182","Type":"movie","Poster":"N/A"},{"Title":"DeadPool Black Panther the Gauntlet","Year":"2015","imdbID":"tt4529214","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTg2MTI1ODMzNl5BMl5BanBnXkFtZTgwNTgxMjY4NjE@._V1_SX300.jpg"},{"Title":"The Deadpool","Year":"2006","imdbID":"tt4785560","Type":"movie","Poster":"N/A"},{"Title":"This Can\'t Be Deadpool XXX+X","Year":"2015","imdbID":"tt5049520","Type":"movie","Poster":"N/A"},{"Title":"Deadpool 2","Year":"2017","imdbID":"tt5463162","Type":"movie","Poster":"N/A"},{"Title":"Deadpool: The Merc with a Mouth Does Comic-Con","Year":"2012","imdbID":"tt2501372","Type":"movie","Poster":"N/A"}],"totalResults":"10","Response":"True"}');
		$httpBackend.expectGET('https://omdbapi.com/?s=Deadpool&type=movie');
		$rootScope.filter="Deadpool";
		$rootScope.Search();
		$httpBackend.flush();
		
		expect($rootScope.movies[0]).toEqual(Object({ Title: 'Erreur de connection' }));
	});
});