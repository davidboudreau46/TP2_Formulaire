'use strict';

angular.module('tp1FullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: 'app/search/search.html',
        controller: 'SearchCtrl'
      });
  });
