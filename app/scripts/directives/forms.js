'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:forms
 * @description
 * # forms
 */
angular.module('todoApp')
  .directive('userinput', function () {
    return {
      templateUrl: 'scripts/directives/templates/inputs/user-input.html',
      restrict: 'A',
      scope: {
        form : '=',
        res : '=',
        val : '='
      },
      link: function (scope, element, attrs) {
        // element.text('this is the forms directive');
        // scope.formin= "sgdbdsfb";
      }

    };
  })
  .directive('passwordinput', function () {
    return {
      templateUrl: 'scripts/directives/templates/inputs/password-input.html',
      restrict: 'A',
      scope: {
        form : '=',
        res : '='
      }
    };
  })
  .directive('mailinput', function () {
    return {
      templateUrl: 'scripts/directives/templates/inputs/mail-input.html',
      restrict: 'A',
      scope: {
        form : '=',
        res : '='
      }
    };
  })
  .directive('loginform', function () {
    return {
      // template: '<div>ragiuhilsdfblbdsflhbcdsfxcsdzc</div>',
      templateUrl: 'scripts/directives/templates/loginform.html',
      restrict: 'A',
      // link: function (scope, element, attrs) {
      //
      //     //  var name = scope.tableconfig.name;
      // }
    };
  })
  .directive('registerform', function () {
    return {
      // template: '<div>ragiuhilsdfblbdsflhbcdsfxcsdzc</div>',
      templateUrl: 'scripts/directives/templates/registerform.html',
      restrict: 'A',
      // link: function (scope, element, attrs) {
      //
      //     //  var name = scope.tableconfig.name;
      // }
    };
  });
