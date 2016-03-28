'use strict';
(function(){

function PlaylistComponent($scope) {
  $scope.message = 'Hello';
}

angular.module('tp1FullstackApp')
  .component('playlist', {
    templateUrl: 'app/playlist/playlist.html',
    controller: PlaylistComponent
  });

})();
