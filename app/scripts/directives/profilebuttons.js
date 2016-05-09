'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:logout
 * @description
 * # logout
 */
angular.module('todoApp')
  // Logout directive for Logout
  .directive('logout', function (authService, $state) {
    return {
      // template: '<md-button ng-click="logout()" class="md-raised md-primary" >LOGOUT</md-button>',
      restrict: 'AEC',
      link: function postLink($scope, element, attrs) {
        // element.text('this is the logout directive');
        $scope.logout = function (){
          // console.log("DIRECTIVE LOGOUT");
          authService.logout ();
          $state.go('/');
        }
      }
    };
  })
  // Logout button as md-button
  .directive('logoutbtn', function (authService) {
    return {
      template: `<md-button class="md-raised md-primary" logout ng-click="logout()" >
        <md-icon  md-font-icon="fa-sign-out " class="fa fa-lg"  style="color:white;height: auto;" ></md-icon>
      LOGOUT
      </md-button`,
      restrict: 'AEC',
      // link: function postLink($scope, $stateProvider, element, attrs) {
      //   // element.text('this is the logout directive');
      //   $scope.logout = function (){
      //     console.log("DIRECTIVE LOGOUT");
      //     authService.logout ();
      //     $state.go('/');
      //   }
      // }
    };
  });
