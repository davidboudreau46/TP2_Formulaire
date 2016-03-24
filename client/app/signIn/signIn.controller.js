'use strict';

angular.module('tp1FullstackApp')
	.controller('SignInCtrl', function ($scope, $http, $location) {
		
		$scope.sendForm= function(){
			var url= 'https://crispesh.herokuapp.com/api/login_check';
			var data= {username: $scope.signIn.email, password: $scope.signIn.password};
			$http({
				method: 'POST',
				url: url,
				data: data,
			}).then(function successCallback(response) {
				$location.path('/');
				$scope.loggedIn=true;
			}, function errorCallback(response) {
				console.log(response);
				$scope.invalidLogin=true;
			});
		};
	});
