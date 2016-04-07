'use strict';

describe('Controller: PlaylistCtrl', function () {

  var $httpBackend, $rootScope, createController, authRequestHandler;
  beforeEach(module('tp1FullstackApp'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    authRequestHandler = $httpBackend.when('GET', '/auth')
      .respond({userId: 'userX'}, {'A-Token': 'xxx'});
    $rootScope = $injector.get('$rootScope');
    var $controller = $injector.get('$controller');
    createController = function() {
      return $controller('PlaylistCtrl', {'$scope' : $rootScope });
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should show movies in playlist on load', function () {
    var controller = createController();
    $httpBackend.when('GET', 'https://crispesh.herokuapp.com/api/favs/me').respond('{"data":[{"id":119,"movie_id":"tt0104409","user_id":144,"status":0,"created_at":"2016-03-29T19:27:48+0000","updated_at":"2016-04-05T19:46:06+0000"}],"status":200,"config":{"method":"GET","transformRequest":[null],"transformResponse":[null],"url":"https://crispesh.herokuapp.com/api/favs/me","headers":{"Accept":"application/json, text/plain, */*","Authorization":"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJleHAiOjE0NjAxMjQxMjUsInVzZXJuYW1lIjoib2tva0Bvay5jb20iLCJpcCI6IjEwLjIwMy4yMTYuOTEiLCJ1c2VyaWQiOjE0NCwiaWF0IjoiMTQ2MDAzNzcyNSJ9.FfiHodDjfrmFTNH9BzHBzp98vopkljvujm6Ys6V1bTNpZA3mj-Is8IW9c9s7iGyhENL-AMoRtFg9ZVsTmR3gTOV2VhEJaHWehWbibcsf3vLvVGI5xZTS2K3QgGF13O9ag9DJS2-2yl5HJht936tqi7P2iGE0peXYaE5XIcplFBw0Epu3JKsbFg49xVMVVE-xqY30TRopidFu_NJ7FMVHmIkaAAvTQl4QLWe74hHqYEgs4nfHTHSGTs0Pqwr3jjVK_ZGUvetsXWbFxD7Kt-XYmNhRDAqJmd4qRJlwU3_RhUHoDvJeA-k9-MDF_n0c4S5X7OqVpNU3QqxUO6SR_Gr10YlTBTTl-vdKCvw7xHSE3Z60yeS2EW9_RDJgxONnitbz2wDl9mCA1cxcNCMz_kK0OFeNE2keJGxUzBBd18HHUXUikxv0bcKCK-Q2J3Z_Mtq0MWMFgGbYq8i3R-Aqsuev8yjlDD_Fd2yfNP-woZBXerIbokZIqSuLmZYSyWHMf7c_U1QGzFVeHO3KMcF0GHsGa9gNpj82N0QPIltesMHzIXVuzqrNQakMMcCiRl11veNV6nCajTvXAuALNswsPNq5cCxWcxaWHKH2hRCSuLyUWu-wMrq2858z_MB0RsAycQRBegoJmkU7tT2UbxI9VkulsmtRWKcJK0sPOhri-IlvM18"}},"statusText":"OK"}');
    $httpBackend.expectGET('https://crispesh.herokuapp.com/api/favs/me');
    $httpBackend.when('GET', 'app/main/main.html').respond('');
    $httpBackend.expectGET('app/main/main.html');
    $httpBackend.flush();
    expect($rootScope.apiMoviesInPlaylist.data[0].id == 119).toBe(true);
  });

  it('when deadpool is searched change search value', function() {
    var controller = createController();
    $httpBackend.when('GET', 'https://crispesh.herokuapp.com/api/favs/me').respond('{"data":[{"id":119,"movie_id":"tt0104409","user_id":144,"status":0,"created_at":"2016-03-29T19:27:48+0000","updated_at":"2016-04-05T19:46:06+0000"}],"status":200,"config":{"method":"GET","transformRequest":[null],"transformResponse":[null],"url":"https://crispesh.herokuapp.com/api/favs/me","headers":{"Accept":"application/json, text/plain, */*","Authorization":"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJleHAiOjE0NjAxMjQxMjUsInVzZXJuYW1lIjoib2tva0Bvay5jb20iLCJpcCI6IjEwLjIwMy4yMTYuOTEiLCJ1c2VyaWQiOjE0NCwiaWF0IjoiMTQ2MDAzNzcyNSJ9.FfiHodDjfrmFTNH9BzHBzp98vopkljvujm6Ys6V1bTNpZA3mj-Is8IW9c9s7iGyhENL-AMoRtFg9ZVsTmR3gTOV2VhEJaHWehWbibcsf3vLvVGI5xZTS2K3QgGF13O9ag9DJS2-2yl5HJht936tqi7P2iGE0peXYaE5XIcplFBw0Epu3JKsbFg49xVMVVE-xqY30TRopidFu_NJ7FMVHmIkaAAvTQl4QLWe74hHqYEgs4nfHTHSGTs0Pqwr3jjVK_ZGUvetsXWbFxD7Kt-XYmNhRDAqJmd4qRJlwU3_RhUHoDvJeA-k9-MDF_n0c4S5X7OqVpNU3QqxUO6SR_Gr10YlTBTTl-vdKCvw7xHSE3Z60yeS2EW9_RDJgxONnitbz2wDl9mCA1cxcNCMz_kK0OFeNE2keJGxUzBBd18HHUXUikxv0bcKCK-Q2J3Z_Mtq0MWMFgGbYq8i3R-Aqsuev8yjlDD_Fd2yfNP-woZBXerIbokZIqSuLmZYSyWHMf7c_U1QGzFVeHO3KMcF0GHsGa9gNpj82N0QPIltesMHzIXVuzqrNQakMMcCiRl11veNV6nCajTvXAuALNswsPNq5cCxWcxaWHKH2hRCSuLyUWu-wMrq2858z_MB0RsAycQRBegoJmkU7tT2UbxI9VkulsmtRWKcJK0sPOhri-IlvM18"}},"statusText":"OK"}');
    $httpBackend.expectGET('https://crispesh.herokuapp.com/api/favs/me');
    $httpBackend.when('GET', 'https://omdbapi.com/?s=Deadpool&type=movie').respond('{"Search":[{"Title":"Deadpool","Year":"2016","imdbID":"tt1431045","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQyODg5Njc4N15BMl5BanBnXkFtZTgwMzExMjE3NzE@._V1_SX300.jpg"},{"Title":"Deadpool: A Typical Tuesday","Year":"2012","imdbID":"tt2153366","Type":"movie","Poster":"N/A"},{"Title":"DeadPool Black Panther Back in Red & Black","Year":"2014","imdbID":"tt4063610","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjA0OTg1NDEyMV5BMl5BanBnXkFtZTgwNzY4NjU2MzE@._V1_SX300.jpg"},{"Title":"Roast of Deadpool","Year":"2015","imdbID":"tt4345262","Type":"movie","Poster":"N/A"},{"Title":"DeadPool: The Merc with the Mouth","Year":"2015","imdbID":"tt4485182","Type":"movie","Poster":"N/A"},{"Title":"DeadPool Black Panther the Gauntlet","Year":"2015","imdbID":"tt4529214","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTg2MTI1ODMzNl5BMl5BanBnXkFtZTgwNTgxMjY4NjE@._V1_SX300.jpg"},{"Title":"The Deadpool","Year":"2006","imdbID":"tt4785560","Type":"movie","Poster":"N/A"},{"Title":"This Can\'t Be Deadpool XXX+X","Year":"2015","imdbID":"tt5049520","Type":"movie","Poster":"N/A"},{"Title":"Deadpool 2","Year":"2017","imdbID":"tt5463162","Type":"movie","Poster":"N/A"},{"Title":"Deadpool: The Merc with a Mouth Does Comic-Con","Year":"2012","imdbID":"tt2501372","Type":"movie","Poster":"N/A"}],"totalResults":"10","Response":"True"}');
    $httpBackend.expectGET('https://omdbapi.com/?s=Deadpool&type=movie');
    $httpBackend.when('GET', 'app/main/main.html').respond('');
    $httpBackend.expectGET('app/main/main.html');

    $rootScope.filter="Deadpool";
    $rootScope.Search();
    $httpBackend.flush();

    expect($rootScope.isSearch).toBe(true);
  });

});
