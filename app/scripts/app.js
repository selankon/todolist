'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',


    'ui.router',
    'LocalStorageModule',
    'ngMaterial'

  ])

  .constant ( "config", {
    'API' : "http://localhost:3000/api/",
    'LOGIN' : "auth",
  })

  .config(function ( $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      $urlRouterProvider.otherwise('/');
  })
  .run (function($rootScope) {
    $rootScope.api = "http://localhost:3000/api/";
  });
