'use strict';

angular.module('tp1FullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/playlist', {
        template: '<playlist></playlist>'
      });
  });
