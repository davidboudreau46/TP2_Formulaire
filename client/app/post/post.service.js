'use strict';

var myApp = angular.module('tp1FullstackApp');
myApp.service('Post', function($resource)
{
  var restAPIUrl = 'http://localhost:3000';
  return $resource(restAPIUrl + '/users/:id', { id: '@id' } );
});

  
