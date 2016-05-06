'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', [ '$scope', 'config',
  function ($scope,config) {

    console.log("Loading constants " , config.API);

    $scope.register = function (data){
      console.log("Register CALLBACK! " , data);

    }
    $scope.login = function (data){
      console.log("Login CALLBACK! " , data);
    }
  }]);
