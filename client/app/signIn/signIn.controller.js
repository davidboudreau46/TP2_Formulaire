'use strict';

angular.module('tp1FullstackApp')
	.controller('SignInCtrl', function ($scope, $http) {
		
		$scope.sendForm= function(){
			$http({
				method: 'POST',
				url: 'https://crispesh.herokuapp.com/api/login_check',
				data: {
					email: $scope.user.email,
					password: $scope.user.password
				}
			}).then(function successCallback(response) {
				$location.path('/');
			}, function errorCallback(response) {
				console.log(response);
				$scope.invalidLogin=true;
			});
		};
	});
