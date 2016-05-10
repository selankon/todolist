'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:forms
 * @description
 * # forms
 */
angular.module('todoApp')
  .directive('createtodo', function () {
    return {
      template: `
      <div  layout='row'>
        <div>
            <md-input-container class="md-icon-float md-block" flex-gt-sm>
              <label>List name</label>
              <md-icon md-font-icon="fa-list" class="fa fa-lg"></md-icon>
              <form ng-submit="" >
                <input ng-model="todo">
              </form>
            </md-input-container>

        </div>
        <md-button ng-click="" class="md-fab md-mini md-primary"  aria-label="createTodo">
          <md-icon  md-font-icon="fa-pencil" class="fa fa-lg"  style="color:white;height: auto;" ></md-icon>
        </md-button>
      </div>

      `,
      restrict: 'A',
      scope: {
        val : '=',
        type : '='
      },
      // link: function (scope, element, attrs) {
      //   // element.text('this is the forms directive');
      //   // scope.formin= "sgdbdsfb";
      // }

    };
  })
  .directive('modificabletext', function () {
    return {
      templateUrl: 'scripts/directives/templates/inputs/modificabletext.html',
      restrict: 'A',
      scope: {
        val : '=',
        type : '='
      },
      link: function (scope, element, attrs) {
        // element.text('this is the forms directive');
        // scope.formin= "sgdbdsfb";
      }

    };
  })
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
  .directive('imginput', function () {
    return {
      templateUrl: 'scripts/directives/templates/inputs/img-input.html',
      restrict: 'A',
      scope: {
        form : '=',
        res : '='
      }
    };
  })
  .directive('loginform', function (authService, $state) {
    return {
      // template: '<div>ragiuhilsdfblbdsflhbcdsfxcsdzc</div>',
      templateUrl: 'scripts/directives/templates/loginform.html',
      restrict: 'A',
      scope: {
        callback : '='
      },
      link: function ($scope, element, attrs) {
        $scope.login = function (data) {
          authService.login (data, function (){
            $state.go('profile');
          } , function (message) {
            $scope.showAlert( "Login failed!" , message, "doh!" )
          });
        }
      }

    };
  })
  .directive('registerform', function (authService) {
    return {
      // template: '<div>ragiuhilsdfblbdsflhbcdsfxcsdzc</div>',
      templateUrl: 'scripts/directives/templates/registerform.html',
      restrict: 'A',
      scope: {
        callback : '='
      },
      link: function ($scope, element, attrs) {

        $scope.register = function (data){
          authService.register (data, {} , function (message) {
              $scope.showAlert( "Register failed!" , message, "doh!" )
          });
        }

      }
    };
  })
