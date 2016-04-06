'use strict';

angular.module('tp1FullstackApp')
	.controller('MainCtrl', function ($scope, $http, auth) {
		$http({
			method: 'GET',
			url: 'https://omdbapi.com/?s=' + 'the' + '&type=movie&y=2016'
		}).then(function successCallback(response) {
			$scope.isSearch=true;
			$scope.movies = response.data.Search;
			for(var i = 0; i < $scope.movies.length; i++){
				if($scope.movies[i].Poster === 'N/A'){
					$scope.movies[i].Poster = 'assets/images/posterNotAvailable.jpg';
				}
			}
		}, function errorCallback() {
				$scope.movies = [{Title : 'Erreur de connection'}];
		});
		$scope.isLogged= function(){
			return auth.isLogged();
		};
	})
	.directive('appxComment', function ($http, $route, auth) {
		return {
			templateUrl: 'components/comment/comment.html',
			restrict: 'EA',
			scope: { 
				omdbid: '=omdbid'
			},
			link: function (scope, element, attrs) {
				if(auth.isLogged()){
					scope.$watch('omdbid', function(value) {
						if(value !== undefined){
							$http({
							method: 'GET',
							url: 'https://crispesh.herokuapp.com/api/comments?movie_id='+value,
							timeout: 5000, 
							}).then(function successCallback(response) {
								scope.comments = response.data;
							}, function errorCallback(response) {

							}
							);
						}
					});
				}

				scope.deleteComment= function(id){
					$http({
						method: 'DELETE',
						url: 'https://crispesh.herokuapp.com/api/comments/' +id
					}).then(function successCallback(response) {
						$route.reload();
					}, function errorCallback(response) {
						
					});
				}
				
				scope.editComment= function(id, body, omdbid){
					$http({
						method: 'PUT',
						url: 'https://crispesh.herokuapp.com/api/comments/' +id,
						data: {
							'body' : body,
							'movie_id' : omdbid, 
							'status' : false
						}
					}).then(function successCallback(response) {
						$route.reload();
					}, function errorCallback(response) {
						
					});
				}
				
				scope.showEditComment= false;
				scope.commentToEdit="";
				scope.showEdit= function(id){
					if(scope.showEditComment== false){
						scope.showEditComment= true;
						scope.showDeleteComment= false;
						scope.commentToEdit= id;
						scope.commentToDelete= "";
					}
					else{
						scope.showEditComment= false;
						scope.commentToEdit= "";
						scope.commentToDelete= "";
					}
				}
				
				scope.showDeleteComment=false;
				scope.commentToDelete="";
				scope.showDelete= function(id){
					if(scope.showDeleteComment== false){
						scope.showDeleteComment= true;
						scope.showEditComment= false;
						scope.commentToDelete= id;
						scope.commentToEdit= "";
					}
					else{
						scope.showDeleteComment= false;
						scope.commentToDelete= "";
						scope.commentToEdit= "";
					}
				}

				scope.isMyComment= function(username){
					if(username== auth.getUserName()){
						return true;
					}
					return false;
				}
				
				scope.isEditComment= function(id){
					if(id==scope.commentToEdit){
						return true;
					}
					return false;
				}
				
				scope.isDeleteComment= function(id){
					if(id==scope.commentToDelete){
						return true;
					}
					return false;
				}
				
				scope.getDayComment= function(completeTime){
					return completeTime.substring(0,8);
				}
				
			}
		};
	})
	.directive('appxCommentCreate', function ($http, $route) {
		return {
			templateUrl: 'components/comment/commentCreate.html',
			restrict: 'EA',
			scope: {
				omdbid: '=omdbid'
			},
			link: function (scope, element, attrs) {
				scope.sendForm= function(body, omdbid){
					$http({
						method: 'POST',
						url: 'https://crispesh.herokuapp.com/api/comments',
						data: {
							'body' : body,
							'movie_id' : omdbid 
						}
					}).then(function successCallback(response) {
						$route.reload(); 
					}, function errorCallback(response) {
						
					});
				}
			}
		};
	});
