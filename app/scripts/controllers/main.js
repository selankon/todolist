'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', [ '$scope', '$rootScope', 'authService', 'localSession',
  function ($scope, $rootScope ,authService, localSession) {



    $scope.localSession = localSession;

    // console.log("ROOT SCOPE" , $rootScope.localSession.userData.username);


    // $scope.register = function (data){
    //   authService.register (data);
    //   // data = {};
    // }
    // $scope.login = function (data){
    //   authService.login (data);
    //   // data = {};
    // }

  }]);
