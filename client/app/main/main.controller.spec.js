'use strict';

describe('Controller: MainCtrl', function () {

  var $httpBackend, $rootScope, createController, authRequestHandler;
  beforeEach(module('tp1FullstackApp'));

  //var connector = function(){
  //  $window.localStorage['jwtToken'] = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJleHAiOjE0NjAxNTEzMjcsInVzZXJuYW1lIjoib2tva0Bvay5jb20iLCJpcCI6IjEwLjM1LjIyMi4zMSIsInVzZXJpZCI6MTQ0LCJpYXQiOiIxNDYwMDY0OTI3In0.GYh1pyFHTwc1aqQVJDZF6wLor-TMr50YlGDUz64iiJMkybIOujq7Aw4u9iafEYruEk5R-q48SgSINruexrmG1w1oNj5frTDV4yUYeFE-5SzgMcE4Ae-XX0btJwINWiBc_eq2zhQOsn93iIPEur4uxSJuC5bcb85pXKVi3exAu3qfGwm9wMBbYIjZ1eanwPSlyUKv5hkku3o_riMQO8dr5wcztpfWrJM9eTmn61qy2TdmAq0G8kmh97CWacmdPEmpK1i7-zKvv2VCj21Fj2v2QCgyBN5E-s2iZ-uSy5gmk9jfXVH1-6N_DQxmgt4u2NBX0NLrrxBSj-kKqNr1m7rOFF8eVJTRxbFTsTVAsQJkW9OQtM-5BJnrPPflG4yfmgwxFIolwc72kU6PBvtNUzQdeoSy0eIe-iuYZIrT-EM23ZnzcUQVYucUCy5dBDMlPNIv454bRvRnUBJ5v-64O8SdJNgHrFm9eYsIpGalmC5cL_5TY_5PDCKHc8VJbRat-REgkdFbFa9OALvG9Vz1RycuStMMCQYwyq9um0cmruTjWeevXEA6C3KfiVb4rFHKq42QUAP7s-ByAB188jWKvQM6VhLG1XYrXRDNamNs-_2RBAqfdMtMF82oG7z7M_CzlKLv4mgJzUIQ6yp3A5y4sVhvdm9IMKGdBztEa60v_6sz_4U";
  //  $window.localStorage['username'] = "test";
  //}

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    authRequestHandler = $httpBackend.when('GET', '/auth')
      .respond({userId: 'userX'}, {'A-Token': 'xxx'});
    $rootScope = $injector.get('$rootScope');
    var $controller = $injector.get('$controller');
    createController = function() {
      return $controller('MainCtrl', {'$scope' : $rootScope });
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should load movie of 2016 on startup', function () {
    var controller = createController();
    $httpBackend.when('GET', 'https://omdbapi.com/?s=the&type=movie&y=2016').respond('{"Search":[{"Title":"The 5th Wave","Year":"2016","imdbID":"tt2304933","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_SX300.jpg"},{"Title":"13 Hours: The Secret Soldiers of Benghazi","Year":"2016","imdbID":"tt4172430","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjU3OTQ5NDc3Ml5BMl5BanBnXkFtZTgwOTEwNTkxNzE@._V1_SX300.jpg"},{"Title":"The Boy","Year":"2016","imdbID":"tt3882082","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTc1MjcxNzcwMV5BMl5BanBnXkFtZTgwMTE0NTE2NzE@._V1_SX300.jpg"},{"Title":"The Forest","Year":"2016","imdbID":"tt3387542","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjAwMzQzNTc5OV5BMl5BanBnXkFtZTgwNDgyMTU2NzE@._V1_SX300.jpg"},{"Title":"The Brothers Grimsby","Year":"2016","imdbID":"tt3381008","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjE0NTE3MjMwNV5BMl5BanBnXkFtZTgwMDc5NjQxODE@._V1_SX300.jpg"},{"Title":"The Finest Hours","Year":"2016","imdbID":"tt2025690","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNTY1MDU1NzYzN15BMl5BanBnXkFtZTgwOTA0MDQyNzE@._V1_SX300.jpg"},{"Title":"Blue Mountain State: The Rise of Thadland","Year":"2016","imdbID":"tt3748440","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYyODE5MTUwNV5BMl5BanBnXkFtZTgwMjk2MjM4NzE@._V1_SX300.jpg"},{"Title":"The Veil","Year":"2016","imdbID":"tt3533916","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ1NDY4MzkxMl5BMl5BanBnXkFtZTgwODE1MzY3NzE@._V1_SX300.jpg"},{"Title":"Norm of the North","Year":"2016","imdbID":"tt1594972","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNTY4MDk4Mjc4NV5BMl5BanBnXkFtZTgwNzg4OTk0NzE@._V1_SX300.jpg"},{"Title":"Eddie the Eagle","Year":"2016","imdbID":"tt1083452","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTUxOTc5MTU1NF5BMl5BanBnXkFtZTgwODYyNTA1NzE@._V1_SX300.jpg"}],"totalResults":"4525","Response":"True"}');
    $httpBackend.expectGET('https://omdbapi.com/?s=the&type=movie&y=2016');
    $httpBackend.flush();
    expect($rootScope.movies).not.toBeNull(true);
  });

  it('should load movie of 2016 on startup', function () {
    connector();
    var controller = createController();
    $httpBackend.when('GET', 'https://omdbapi.com/?s=the&type=movie&y=2016').respond('{"Search":[{"Title":"The 5th Wave","Year":"2016","imdbID":"tt2304933","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_SX300.jpg"},{"Title":"13 Hours: The Secret Soldiers of Benghazi","Year":"2016","imdbID":"tt4172430","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjU3OTQ5NDc3Ml5BMl5BanBnXkFtZTgwOTEwNTkxNzE@._V1_SX300.jpg"},{"Title":"The Boy","Year":"2016","imdbID":"tt3882082","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTc1MjcxNzcwMV5BMl5BanBnXkFtZTgwMTE0NTE2NzE@._V1_SX300.jpg"},{"Title":"The Forest","Year":"2016","imdbID":"tt3387542","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjAwMzQzNTc5OV5BMl5BanBnXkFtZTgwNDgyMTU2NzE@._V1_SX300.jpg"},{"Title":"The Brothers Grimsby","Year":"2016","imdbID":"tt3381008","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjE0NTE3MjMwNV5BMl5BanBnXkFtZTgwMDc5NjQxODE@._V1_SX300.jpg"},{"Title":"The Finest Hours","Year":"2016","imdbID":"tt2025690","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNTY1MDU1NzYzN15BMl5BanBnXkFtZTgwOTA0MDQyNzE@._V1_SX300.jpg"},{"Title":"Blue Mountain State: The Rise of Thadland","Year":"2016","imdbID":"tt3748440","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYyODE5MTUwNV5BMl5BanBnXkFtZTgwMjk2MjM4NzE@._V1_SX300.jpg"},{"Title":"The Veil","Year":"2016","imdbID":"tt3533916","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ1NDY4MzkxMl5BMl5BanBnXkFtZTgwODE1MzY3NzE@._V1_SX300.jpg"},{"Title":"Norm of the North","Year":"2016","imdbID":"tt1594972","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNTY4MDk4Mjc4NV5BMl5BanBnXkFtZTgwNzg4OTk0NzE@._V1_SX300.jpg"},{"Title":"Eddie the Eagle","Year":"2016","imdbID":"tt1083452","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTUxOTc5MTU1NF5BMl5BanBnXkFtZTgwODYyNTA1NzE@._V1_SX300.jpg"}],"totalResults":"4525","Response":"True"}');
    $httpBackend.expectGET('https://omdbapi.com/?s=the&type=movie&y=2016');
    //$httpBackend.when('GET', 'https://crispesh.herokuapp.com/api/comments?movie_id=tt2304933').respond('{"Search":[{"Title":"The 5th Wave","Year":"2016","imdbID":"tt2304933","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_SX300.jpg"},{"Title":"13 Hours: The Secret Soldiers of Benghazi","Year":"2016","imdbID":"tt4172430","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjU3OTQ5NDc3Ml5BMl5BanBnXkFtZTgwOTEwNTkxNzE@._V1_SX300.jpg"},{"Title":"The Boy","Year":"2016","imdbID":"tt3882082","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTc1MjcxNzcwMV5BMl5BanBnXkFtZTgwMTE0NTE2NzE@._V1_SX300.jpg"},{"Title":"The Forest","Year":"2016","imdbID":"tt3387542","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjAwMzQzNTc5OV5BMl5BanBnXkFtZTgwNDgyMTU2NzE@._V1_SX300.jpg"},{"Title":"The Brothers Grimsby","Year":"2016","imdbID":"tt3381008","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjE0NTE3MjMwNV5BMl5BanBnXkFtZTgwMDc5NjQxODE@._V1_SX300.jpg"},{"Title":"The Finest Hours","Year":"2016","imdbID":"tt2025690","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNTY1MDU1NzYzN15BMl5BanBnXkFtZTgwOTA0MDQyNzE@._V1_SX300.jpg"},{"Title":"Blue Mountain State: The Rise of Thadland","Year":"2016","imdbID":"tt3748440","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYyODE5MTUwNV5BMl5BanBnXkFtZTgwMjk2MjM4NzE@._V1_SX300.jpg"},{"Title":"The Veil","Year":"2016","imdbID":"tt3533916","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ1NDY4MzkxMl5BMl5BanBnXkFtZTgwODE1MzY3NzE@._V1_SX300.jpg"},{"Title":"Norm of the North","Year":"2016","imdbID":"tt1594972","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNTY4MDk4Mjc4NV5BMl5BanBnXkFtZTgwNzg4OTk0NzE@._V1_SX300.jpg"},{"Title":"Eddie the Eagle","Year":"2016","imdbID":"tt1083452","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTUxOTc5MTU1NF5BMl5BanBnXkFtZTgwODYyNTA1NzE@._V1_SX300.jpg"}],"totalResults":"4525","Response":"True"}');
    //$httpBackend.expectGET('https://omdbapi.com/?s=the&type=movie&y=2016');
    $httpBackend.flush();
    expect(by.buttonText("Envoyer").isPresent).toBe(true);
  });

});
