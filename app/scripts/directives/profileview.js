'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:profileView
 * @description
 * # profileView
 */
angular.module('todoApp')
  .directive('profileview', function () {
    return {
      templateUrl: 'scripts/directives/templates/profileview.html',
      restrict: 'A',
      scope: {
        user : '=',
        temp : '='
      }
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the profileView directive');
      // }
    };
  });
