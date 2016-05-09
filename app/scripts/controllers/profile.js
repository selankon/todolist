'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('ProfileCtrl',  [ '$scope', 'localSession',
  function ($scope, localSession) {
    // $scope.userdata= {};
    // $scope.user = {
    //   mail: 'super@user.com',
    //   username: 'super',
    //   password: 'super',
    //   // img : ' http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' ,
    //   img : 'http://vignette2.wikia.nocookie.net/assassinscreed/images/7/73/Trollface.png/revision/latest?cb=20110812045715' ,
    //   creation: new Date()
    // }
    $scope.user = localSession.userData;
    $scope.temp = $scope.user; //Used for save the modifications before saving
  }]);
