'use strict';

angular.module('tp1FullstackApp')
	.controller('SignUpCtrl', function ($scope, Post) {
		 
		$scope.sendForm= function(){
			
			$scope.sentForm=true;
			
			// GET : Récupère tous les Posts
			$scope.users = Post.query();
			 
			// SAVE : Crée un nouveau Post
			var myPostObj= {userName: $scope.user.userName, name:$scope.user.name, familyName:$scope.user.familyName, email: $scope.user.email , userPassword:$scope.user.password};
			Post.save(myPostObj);
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
