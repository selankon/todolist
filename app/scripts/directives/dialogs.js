'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:dialogs
 * @description
 * # dialogs
 */
angular.module('todoApp')
  .directive('dialogs', function ($mdDialog) {
    return {
      // template: '<div></div>',
      restrict: 'AEC',
      link: function postLink($scope, element, attrs) {
        $scope.showAlert = function(title, content, ok ) {
           // Appending dialog to document.body to cover sidenav in docs app
           // Modal dialogs should fully cover application
           // to prevent interaction outside of dialog
           $mdDialog.show(
             $mdDialog.alert()
               .parent(angular.element(document.querySelector('#popupContainer')))
               .clickOutsideToClose(true)
               .title(title)
               .textContent(content)
               .ariaLabel('Alert Dialog Demo')
               .ok(ok)
              //  .targetEvent(ev)
           );
         };
      }
    };
  });
