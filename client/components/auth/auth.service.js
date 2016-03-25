'use strict';

var module = angular.module('tp1FullstackApp');


module.service('auth', function () {

    var logged =false;
	var userName = "";
     
    this.logIn = function (name) {
		logged=true;
		userName=name;
    }
	
	this.getUserName = function() {
		return userName;
	}
	
	this.isLogged= function (){
		return logged;
	}
	
	this.logOut= function(){
		logged=false;
		userName="";
	}
 
});