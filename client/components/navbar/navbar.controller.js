'use strict';

angular.module('tp1FullstackApp')
	.controller('NavbarCtrl', function ($scope, $location, auth, $route) {
		$scope.menu = [{
		  'title': 'Home',
		  'link': '/'
		},
		{
		  'title': 'Recherche',
		  'link': '/search'
		},
		{
		  'title': 'Contact',
		  'link': '/contact'
		},
		{
		  'title': 'Inscription',
		  'link': '/signUp'
		}
		
		];

		$scope.isCollapsed = true;

		$scope.isActive = function(route) {
		  return route === $location.path();
		};
		
		$scope.isLogged= function(){
			return auth.isLogged();
		};
		
		$scope.getUserName= function(){
			return auth.getUserName();
		};
		
		$scope.logOut= function(){
			auth.logOut();
			$route.reload();
		};
	});