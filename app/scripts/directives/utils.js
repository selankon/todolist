'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:utils
 * @description
 * # utils
 */


// Directive used for show another image when a img-url is broken on, for example, the image input on sign up form
angular.module('todoApp')
  .directive('onError', function () {
    return {
      restrict:'A',
      link: function(scope, element, attr) {
        element.on('error', function() {
          element.attr('src', attr.onError);
        })
      }
    }
  });
