'use strict';

/**
 * @ngdoc service
 * @name todoApp.listsService
 * @description
 * # listsService
 * Service in the todoApp.
 */
angular.module('todoApp')
  .service('listsService', [ 'listsRemote' , 'todoLists',
  function (listsRemote, todoLists) {

    this.get = function (){
      listsRemote.get().$promise
        .then (
          function (data){
            console.log("Received Lists! " , data.results);
            todoLists.takeAll(data.results);
          }
        )

    }


  }])
  .service('listsRemote', ['$resource', 'config',
    function($resource, config){
      var base = config.API;
        return $resource (base+config.GETLISTS, {}, {
          get: {method:'GET'}
        })



  }])
