'use strict';

describe('Component: PlaylistComponent', function () {

  // load the controller's module
  beforeEach(module('tp1FullstackApp'));

  var PlaylistComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PlaylistComponent = $componentController('PlaylistComponent', {
      $scope: scope
    });
  }));

});
