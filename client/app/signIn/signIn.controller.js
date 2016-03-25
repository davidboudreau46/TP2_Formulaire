'use strict';

angular.module('tp1FullstackApp')
	.controller('SignInCtrl', function ($scope, $http, $location, auth) {
		
		$scope.sendForm= function(){
			var url= 'https://crispesh.herokuapp.com/api/login_check';
			var data= {username: $scope.signIn.email, password: $scope.signIn.password};
			$http({
				method: 'POST',
				url: url,
				data: data,
			}).then(function successCallback(data) {
				console.log(data);
				auth.logIn($scope.signIn.email);
				$location.path('/');
			}, function errorCallback() {
				$scope.invalidLogin=true;
			});
		};
	})
	.directive('autofocus', ['$timeout', function($timeout) {
		return {
			restrict: 'A',
			link : function($scope, $element) {
			  $timeout(function() {
				$element[0].focus();
			  });
			}
		};
	}]);
