'use strict';

/**
 * @ngdoc service
 * @name todoApp.authService
 * @description
 * # authService
 * Service in the todoApp.
 */
angular.module('todoApp')
  .service('authService', ['$resource', 'config',
  function($resource, config){
    var base = config.API;
    return $resource(base+config.AUTH, {}, {
      login: {method:'POST', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
