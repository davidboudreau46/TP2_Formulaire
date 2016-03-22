'use strict';

angular.module('tp1FullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signIn', {
        templateUrl: 'app/signIn/signIn.html',
        controller: 'SignInCtrl'
      });
  });
