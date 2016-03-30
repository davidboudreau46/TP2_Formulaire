'use strict';

angular.module('tp1FullstackApp')
	.controller('MainCtrl', function ($scope, $http) {
		$scope.movies=[{"Title":"Deadpool","Year":"2016","Rated":"R","Released":"12 Feb 2016","Runtime":"108 min","Genre":"Action, Adventure, Comedy","Director":"Tim Miller","Writer":"Rhett Reese, Paul Wernick, Fabian Nicieza (character), Rob Liefeld (character)","Actors":"Ryan Reynolds, Karan Soni, Ed Skrein, Michael Benyaer","Plot":"A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.","Language":"English","Country":"USA, Canada","Awards":"9 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQyODg5Njc4N15BMl5BanBnXkFtZTgwMzExMjE3NzE@._V1_SX300.jpg","Metascore":"65","imdbRating":"8.4","imdbVotes":"257,791","imdbID":"tt1431045","Type":"movie","Response":"True"},
		{"Title":"Batman v Superman: Dawn of Justice","Year":"2016","Rated":"PG-13","Released":"25 Mar 2016","Runtime":"151 min","Genre":"Action, Adventure, Fantasy","Director":"Zack Snyder","Writer":"Chris Terrio, David S. Goyer, Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by)","Actors":"Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg","Plot":"Fearing the actions of Superman are left unchecked, Batman takes on the man of steel, while the world wrestles with what kind of a hero it really needs. With Batman and Superman fighting each other, a new threat, Doomsday, is created by Lex Luthor. It's up to Superman and Batman to set aside their differences along with Wonder Woman to stop Lex Luthor and Doomsday from destroying Metropolis.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BNTE5NzU3MTYzOF5BMl5BanBnXkFtZTgwNTM5NjQxODE@._V1_SX300.jpg","Metascore":"44","imdbRating":"7.7","imdbVotes":"59,261","imdbID":"tt2975590","Type":"movie","Response":"True"},
		{"Title":"Captain America: Civil War","Year":"2016","Rated":"N/A","Released":"06 May 2016","Runtime":"146 min","Genre":"Action, Adventure, Sci-Fi","Director":"Anthony Russo, Joe Russo","Writer":"Christopher Markus (screenplay), Stephen McFeely (screenplay), Mark Millar (comic book), Joe Simon (characters), Jack Kirby (characters)","Actors":"Tom Holland, Elizabeth Olsen, Scarlett Johansson, Chris Evans","Plot":"Political interference in the Avengers' activities causes a rift between former allies Captain America and Iron Man.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt3498820","Type":"movie","Response":"True"},
		{"Title":"X-Men: Apocalypse","Year":"2016","Rated":"N/A","Released":"27 May 2016","Runtime":"N/A","Genre":"Action, Adventure, Fantasy","Director":"Bryan Singer","Writer":"Simon Kinberg (screenplay), Bryan Singer (story), Simon Kinberg (story), Michael Dougherty (story), Dan Harris (story)","Actors":"Jennifer Lawrence, Rose Byrne, Oscar Isaac, Olivia Munn","Plot":"With the emergence of the world's first mutant, Apocalypse, the X-Men must unite to defeat his extinction level plan.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTY0MDY0NjExN15BMl5BanBnXkFtZTgwOTU3OTYyODE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt3385516","Type":"movie","Response":"True"},
		{"Title":"Finding Dory","Year":"2016","Rated":"N/A","Released":"17 Jun 2016","Runtime":"N/A","Genre":"Animation, Adventure, Comedy","Director":"Andrew Stanton, Angus MacLane","Writer":"Andrew Stanton (screenplay), Andrew Stanton (story), Victoria Strouse (story), Bob Peterson (story), Andrew Stanton (based on characters created by)","Actors":"Idris Elba, Michael Sheen, Ellen DeGeneres, Kaitlin Olson","Plot":"The friendly-but-forgetful blue tang fish reunites with her loved ones, and everyone learns a few things about the real meaning of family along the way.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BNzg4MjM2NDQ4MV5BMl5BanBnXkFtZTgwMzk3MTgyODE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt2277860","Type":"movie","Response":"True"},
		{"Title":"Suicide Squad","Year":"2016","Rated":"N/A","Released":"05 Aug 2016","Runtime":"N/A","Genre":"Action, Adventure, Fantasy","Director":"David Ayer","Writer":"David Ayer, John Ostrander (comic book)","Actors":"Margot Robbie, Joel Kinnaman, Ben Affleck, Will Smith","Plot":"A secret government agency recruits imprisoned supervillains to execute dangerous black ops missions in exchange for clemency.","Language":"English","Country":"USA, Canada","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BOTY1MzU1MDQ1MF5BMl5BanBnXkFtZTgwNjAzMjY3NzE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt1386697","Type":"movie","Response":"True"}];
		for(var i = 0; i < $scope.movies.length; i++){
			if($scope.movies[i].Poster === 'N/A'){
				$scope.movies[i].Poster = 'assets/images/posterNotAvailable.jpg';
			}
		}
	})
	.directive('appxComment', function ($http, $route) {
		return {
			templateUrl: 'components/comment/comment.html',
			restrict: 'EA',
			scope: { 
				omdbid: '=omdbid'
			},
			link: function (scope, element, attrs) {
				scope.$watch('omdbid', function(value) {
					if(value !== undefined){
						$http({
						method: 'GET',
						url: 'https://crispesh.herokuapp.com/api/comments?movie_id='+value,
						timeout: 5000, 
						}).then(function successCallback(response) {
							scope.comments = response.data;
						}, function errorCallback(response) {
							console.log('Error loading comments');
						}
						);
					}
				});

				scope.deleteComment= function(id){
					$http({
						method: 'DELETE',
						url: 'https://crispesh.herokuapp.com/api/comments/' +id
					}).then(function successCallback(response) {
						$route.reload();
					}, function errorCallback(response) {
						
					});
				}
				
				scope.editComment= function(id, body, omdbid){
					$http({
						method: 'PUT',
						url: 'https://crispesh.herokuapp.com/api/comments/' +id,
						data: {
							'body' : body,
							'movie_id' : omdbid 
						}
					}).then(function successCallback(response) {
						console.log(response);
						$route.reload();
					}, function errorCallback(response) {
						console.log(response);
					});
				}

			}
		};
	})
	.directive('appxCommentCreate', function ($http, $route) {
		return {
			templateUrl: 'components/comment/commentCreate.html',
			restrict: 'EA',
			scope: {
				omdbid: '=omdbid'
			},
			link: function (scope, element, attrs) {
				scope.sendForm= function(body, omdbid){
					$http({
						method: 'POST',
						url: 'https://crispesh.herokuapp.com/api/comments',
						data: {
							'body' : body,
							'movie_id' : omdbid 
						}
					}).then(function successCallback(response) {
						$route.reload(); 
					}, function errorCallback(response) {
						
					});
				}
			}
		};
	});
