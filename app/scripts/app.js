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
    'ngStorage',

    'ui.router',
    'ngMaterial'

  ])
  //Establishing routes
  .constant ( "config", {
    'API' : "http://localhost:3000/api/",
    'LOGIN' : "auth",
    'REGISTER' : "user",
  })
  // Enabling CORS
  .config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ])
  // Set state routes
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
        controllerAs: 'profile',
        resolve: { authenticate: authenticate }
      })
      $urlRouterProvider.otherwise('/');

      //Function for make pages protected by log-in
      function authenticate($q, localSession, $state, $timeout) {
      if (localSession.userData.username) {
        // Resolve the promise successfully
        return $q.when()
      } else {
        // The next bit of code is asynchronously tricky.
        $timeout(function() {
          // This code runs after the authentication promise has been rejected.
          // Go to the log-in page
          $state.go('/')
        })

        // Reject the authentication promise to prevent the state from loading
        return $q.reject()
      }
    };

  })
  // Enabling rootscope
  .run(function($rootScope, localSession, $localStorage) {
    // $rootScope.api = "http://localhost:3000/api/";
    if ($localStorage.token) {
      // console.log("HABIA UN TOKEN");
      localSession.createSession($localStorage.token)
    }

    $rootScope.localSession = localSession;

  })

    // .use(allowCrossDomain);


  // var allowCrossDomain = function(req, res, next) {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  //   if ('OPTIONS' === req.method) {
  //     res.send(200);
  //   } else {
  //     next();
  //   }
  // };
// angular.module('todoApp')
