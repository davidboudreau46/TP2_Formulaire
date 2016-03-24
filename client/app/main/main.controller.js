'use strict';

angular.module('tp1FullstackApp')
  .controller('MainCtrl', function ($scope, $http) {
    var possibleConsonants = 'bcdfghjklmnpqrstvwxz';
    var possibleVowels = 'aeiouy';
    $http({
		method: 'GET',
		url: 'http://omdbapi.com/?s=' + possibleConsonants.charAt(Math.floor(Math.random() * possibleConsonants.length)) + possibleVowels.charAt(Math.floor(Math.random() * possibleVowels.length)) + '*&type=movie&y=2016'
    }).then(function successCallback(response) {
		$scope.movies = response.data.Search;
		for(var i = 0; i < $scope.movies.length; i++){
			if($scope.movies[i].Poster === 'N/A'){
				$scope.movies[i].Poster = 'assets/images/posterNotAvailable.jpg';
			}
		}
    }, function errorCallback() {
		$scope.movies = [{Title : 'Erreur', Year : 'Erreur' }];
    });
  });
