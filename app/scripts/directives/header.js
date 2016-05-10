'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:header
 * @description
 * # header
 */
angular.module('todoApp')
  .directive('header', function (localSession, $mdDialog) {
    return {
      templateUrl: 'scripts/directives/templates/header.html',
      restrict: 'A',
      link: function postLink($scope, element, attrs) {
        // element.text('this is the header directive');
        $scope.openMenu = function($mdOpenMenu, ev) {
          // originatorEv = ev;
          $mdOpenMenu();
        };
      }
    };
  });
