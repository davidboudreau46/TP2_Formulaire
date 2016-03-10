'use strict';

angular.module('tp1FullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      });
  });
