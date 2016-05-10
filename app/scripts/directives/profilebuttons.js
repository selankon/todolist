'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:logout
 * @description
 * # logout
 */
angular.module('todoApp')
  // Logout directive calls logout function
  .directive('logout', function (authService, $state) {
    return {
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
        <md-icon  md-font-icon="fa-sign-out " class="fa fa-lg" ></md-icon>
      LOGOUT
      </md-button`,
      restrict: 'AEC'
    };
  })
  // Logout with rounded button
  .directive('logoutbtnsm', function ( localSession, $state) {
    return {
      template: `
        <md-button  logout ng-click="logout()" class="md-fab md-mini md-primary"  aria-label="logOut">
            <md-icon md-font-icon="fa-sign-out" class="fa fa-lg"  ></md-icon>
        </md-button>
      `,
      restrict: 'AEC',
      link: function postLink($scope, element, attrs) {
        $scope.localSession = localSession;
      }
    };
  })

  // Go to profile state
  .directive('profile', function ( $state) {
    return {
      restrict: 'AEC',
      link: function postLink($scope, element, attrs) {
        $scope.profile = function (){
          $state.go('profile');
        }
      }
    };
  })

  // Go to profile as md-button
  .directive('profilebtn', function ( $state) {
    return {
      template: `<md-button class="md-raised md-primary" profile ng-click="profile()" >
        <md-icon  md-font-icon="fa-user " class="fa fa-lg" ></md-icon>
      PROFILE
      </md-button`,
      restrict: 'AEC'
    };
  })
  // Go to profile as rounded button with profile img
  .directive('profilebtnrounded', function ( localSession, $state) {
    return {
      template: `
      <div class="avatar-cont-round-xxsm"  profile ng-click="profile()">
        <img src="{{localSession.userData.img}}" />
      </div>
      `,
      restrict: 'AEC',
      link: function postLink($scope, element, attrs) {
        $scope.localSession = localSession;
      }
    };
  })
