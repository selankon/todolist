'use strict';


angular.module('todoApp')
  .controller('todoslistsCntrl', [ '$scope', 'listsService', 'todoLists',
  function ($scope, listsService, todoLists) {

    $scope.cosas = todoLists;
    $scope.get = function () {
      listsService.get();
    }


}]);
