'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('ProfileCtrl',  [ '$scope', 'localSession', 'todoLists', 'listsService',
  function ($scope, localSession, todoLists, listsService) {
    $scope.user = localSession.userData;
    $scope.temp = $scope.user; //Used for save the modifications before saving

    $scope.cosas = todoLists;
    $scope.get = function () {
      listsService.get();
    }
  }]);
