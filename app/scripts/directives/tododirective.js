'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:todoDirective
 * @description
 * # todoDirective
 */
angular.module('todoApp')
  .directive('todoviewdirective', function () {
    return {
      templateUrl: 'scripts/directives/templates/todoView.html',
      restrict: 'A',
      scope: {
        data : '='
      },
      // link: function postLink(scope, element, attrs) {
      //   // element.text('this is the todoDirective directive');
      // }
    };
  });
