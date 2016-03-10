'use strict';

angular.module('tp1FullstackApp')
  .controller('SignUpCtrl', function ($scope) {
		$scope.sendForm= function(){
			$scope.sentForm=true;
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
	})
	.directive('popover', function(){
		return{
			scope: {
				textToPopUp: '@text',
				iconToShow: '@icon'
			},
			templateUrl: '/scripts/controllers/popover.html'
		};
		
	});
