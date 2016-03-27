'use strict';

var module = angular.module('tp1FullstackApp');


module.service('auth', function ($window) {

	var userName = '';
	
	this.isLogged = function() {
		var token = this.getToken();
		if(token) {
			var params = this.parseJwt(token);
			return Math.round(new Date().getTime() / 1000) <= params.exp;
		} else {
			return false;
		}
	};
	
	this.parseJwt = function(token) {
		var base64Url = token.split('.')[1];
		var base64 = base64Url.replace('-', '+').replace('_', '/');
		return JSON.parse($window.atob(base64));
		return token;
	};

	this.saveToken = function(token, name) {
		$window.localStorage['jwtToken'] = token;
		userName= name;
	};			

	this.getToken = function() {
		return $window.localStorage['jwtToken'];
	};
	
	this.logOut = function() {
		$window.localStorage.removeItem('jwtToken');
		userName = '';
	};
	
	this.getUserName = function() {
		return userName;
	};
 
});