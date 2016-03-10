'use strict';

angular.module('tp1FullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signUp', {
        templateUrl: 'app/signUp/signUp.html',
        controller: 'SignUpCtrl'
      });
  });
