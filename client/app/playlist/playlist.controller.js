'use strict';

angular.module('tp1FullstackApp')
  .controller('PlaylistCtrl', function ($scope, $http, $route) {
    $scope.apiMoviesInPlaylist = [];

    $http({
      method: 'GET',
      url: 'https://crispesh.herokuapp.com/api/favs/me'
    }).then(function successCallback(response) {
      $scope.apiMoviesInPlaylist = response.data;
      $scope.omdbMoviesInPlaylist = [];
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
          response.data.statusColor = $scope.getStatusColor(response.data.imdbID);
          response.data.isInTheList = "";
          $scope.omdbMoviesInPlaylist.push(response.data);
        }, function errorCallback() {
        });
      }
    }, function errorCallback() {
    });

    $scope.getID = function(imdbID){
      for(var index = 0; index < $scope.apiMoviesInPlaylist.length; index++){
        if($scope.apiMoviesInPlaylist[index].movie_id == imdbID){
          return $scope.apiMoviesInPlaylist[index].id;
        }
      }
    }

    $scope.getStatus = function(imdbID){
      for(var index = 0; index < $scope.apiMoviesInPlaylist.length; index++){
        if($scope.apiMoviesInPlaylist[index].movie_id == imdbID){
          return $scope.apiMoviesInPlaylist[index].status;
        }
      }
    }

    $scope.getStatusColor = function(imdbID){
      if($scope.getStatus(imdbID) == 1){
        return "darkgray";
      }
      else{
        return "green";
      }
    }

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
        $route.reload();
      }, function errorCallback() {
      });
    }

    $scope.deleteMovie = function(movie) {
      var id = $scope.getID(movie.imdbID);
      var url= 'https://crispesh.herokuapp.com/api/favs/' + id;
      $http({
        method: 'DELETE',
        url: url,
        data: id
      }).then(function successCallback(response) {
        movie.isInTheList = "none";
      }, function errorCallback() {
      });
    }

    $scope.updateMovie = function (movie){
      var watched = 0;
      if(movie.statusColor == "green"){
        watched = 1;
        movie.statusColor = "darkgray";
      }
      else {
        movie.statusColor = "green";
      }
      var url= 'https://crispesh.herokuapp.com/api/favs/' + $scope.getID(movie.imdbID);
      var data = {movie_id: movie.imdbID, status: watched};
      $http({
        method: 'PUT',
        url: url,
        data: data
      }).then(function successCallback(response) {
        if(watched == 0){
          movie.statusColor = "green";
        }
        else {
          movie.statusColor = "darkgray";
        }
      }, function errorCallback() {
      });
    }
  });
