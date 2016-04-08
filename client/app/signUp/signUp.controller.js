'use strict';

angular.module('tp1FullstackApp')
	.controller('SignUpCtrl', function ($scope, $http) {
		 
		$scope.sendForm= function(){
			$http({
				method: 'POST',
				url: 'https://crispesh.herokuapp.com/api/register',
				data: {
					'email': $scope.email,
					'firstname': $scope.name,
					'lastname': $scope.familyName,
					'password': $scope.password
				}
			}).then(function successCallback(response) {
				$scope.sentForm=true;
			}, function errorCallback() {
				$scope.invalidLogin=true;
			});
		};
	})
	.directive('compareTo', function() {
		return {
			require: 'ngModel',
			scope: {
				otherModelValue: '=compareTo'
			},
			link: function(scope, element, attributes, ngModel) {
             
				ngModel.$validators.compareTo = function(modelValue) {
					return modelValue === scope.otherModelValue;
				};
 
				scope.$watch('otherModelValue', function() {
					ngModel.$validate();
				}); 
			}
		};
	});
