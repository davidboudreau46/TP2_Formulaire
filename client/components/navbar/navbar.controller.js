'use strict';

angular.module('tp1FullstackApp')
  .controller('NavbarCtrl', function ($scope, $location) {
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
  });