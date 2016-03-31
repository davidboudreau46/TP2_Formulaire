'use strict';

angular.module('tp1FullstackApp')
  .controller('PlaylistCtrl', function ($scope, $http, $route) {
    $scope.apiMoviesInPlaylist = [];

    $http({
      method: 'GET',
      url: 'https://crispesh.herokuapp.com/api/favs/me'
    }).then(function successCallback(response) {
      console.log(response);
      $scope.apiMoviesInPlaylist = response.data;
      $scope.moviesInPlaylist = [];
      var k = 0;
      for(var i = 0; i < $scope.apiMoviesInPlaylist.length; i++){
        var url = 'https://omdbapi.com/?i=' + $scope.apiMoviesInPlaylist[i].movie_id;
        $http({
          method: 'GET',
          url: url
        }).then(function successCallback(response){
          if(response.data.Poster === 'N/A'){
            response.data.Poster = 'assets/images/posterNotAvailable.jpg';
          }
          response.data.id = $scope.apiMoviesInPlaylist[k].id;
          response.data.status = $scope.apiMoviesInPlaylist[k].status;
          if(response.data.status == 0){
            response.data.checkColor = "green";
          }
          else{
            response.data.checkColor = "darkgray";
          }
          k++;
          $scope.moviesInPlaylist.push(response.data);
        }, function errorCallback() {
          console.log("God Dammit");
        });
      }
      console.log($scope.moviesInPlaylist);
    }, function errorCallback() {
      console.log("Erreur");
    });

    $scope.Search = function(){
      $http({
        method: 'GET',
        url: 'https://omdbapi.com/?s=' + $scope.filter + '&type=movie'
      }).then(function successCallback(response) {
        $scope.isSearch=true;
        $scope.movies = response.data.Search;
        for(var i = 0; i < $scope.movies.length; i++){
          if($scope.movies[i].Poster === 'N/A'){
            $scope.movies[i].Poster = 'assets/images/posterNotAvailable.jpg';
          }
        }
      }, function errorCallback() {
        $scope.movies = [{Title : 'Erreur de connection'}];
      });
    };

    $scope.addMovie = function(movie){
      var url= 'https://crispesh.herokuapp.com/api/favs';
      var movieID = movie.imdbID;
      var data= {movie_id: movieID, status: 0};
      $http({
        method: 'POST',
        url: url,
        data: data
      }).then(function successCallback(response) {
        console.log(response);
        $route.reload();
      }, function errorCallback() {
        console.log("Dammit");
      });
    }

    $scope.deleteMovie = function(movie) {
      var id = movie.id;
      var url= 'https://crispesh.herokuapp.com/api/favs/' + id;
      $http({
        method: 'DELETE',
        url: url,
        data: id
      }).then(function successCallback(response) {
        console.log(response);
        $route.reload();
      }, function errorCallback() {
        console.log("Dammit");
      });
    }

    $scope.updateMovie = function (movie){
      console.log("--------------------CHECKBOX------------");
      console.log(movie);
      var watched = 0;
      if(movie.checkColor == "green"){
        watched = 1;
      }
      var url= 'https://crispesh.herokuapp.com/api/favs/' + movie.id;
      var data = {movie_id: movie.id, status: watched};
      $http({
        method: 'PUT',
        url: url,
        data: data
      }).then(function successCallback(response) {
        console.log(response);
        $route.reload();
      }, function errorCallback() {
        console.log("Dammit");
      });
    }
  });
