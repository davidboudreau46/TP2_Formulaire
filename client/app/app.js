'use strict';

angular.module('tp1FullstackApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
	$httpProvider.interceptors.push('authInterceptor');
  })
  .factory('authInterceptor', function ($rootScope, $q, $cookies, $location, auth) {
    return {
		response: function(res) {
			if(res.config.url.indexOf("https://crispesh.herokuapp.com/api/login_check") === 0 && res.data.token) {
				auth.saveToken(res.data.token, res.data.data.username);
			}

			return res;
		},
		
		request: function(config) {
			var token = auth.getToken();
			if(config.url.indexOf("https://crispesh.herokuapp.com/api/favs") === 0 && token) {
				config.headers.Authorization = 'Bearer ' + token;
			}
			else if(config.url.indexOf("https://crispesh.herokuapp.com/api/comments") === 0 && token) {
				config.headers.Authorization = 'Bearer ' + token;
			}

			return config;
		}
    };
  });