'use strict';

angular.module('tp1FullstackApp')
	.controller('SignInCtrl', function ($scope, $http, $location, auth) {

		$scope.sendForm= function(){
			var url= 'https://crispesh.herokuapp.com/api/login_check';
			var data= {username: $scope.signInEmail, password: $scope.signInPassword};
			$http({
				method: 'POST',
				url: url,
				data: data,
			}).then(function successCallback() {
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
