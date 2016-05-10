'use strict';

/**
 * @ngdoc service
 * @name todoApp.authService
 * @description
 * # authService
 * Service in the todoApp.
 */
angular.module('todoApp')
  .service('authService', ['authRemote', 'localSession',
  function(authRemote, localSession){

    this.login = function (login, cb, err){
      authRemote.login().login(login).$promise
        .then (
          function (data) {
            console.log("LOGIN authService DATA RECEIVED" , data);
            if (data.success){
              localSession.createSession (data.token);
              cb(data);
              
            } else {
              err (data.message);

            }
         }, function(error) {
            //you can add anything else you want inside this function
         });
    }
    this.logout = function (){
      localSession.destroySession ();
    }

    this.register = function (register, cb, err){
      console.log("Register FROM " , register);
      authRemote.register().register(register).$promise
        .then (
          function (data) {
            console.log("REGISTER authService DATA RECEIVED" , data);
            if (data.success){
              cb(data);
              // console.log("data success");
              // localSession.createSession (data.token);

            } else {
              // console.log("data NO success");

              err (data.message);
            }
         }, function(error) {
            //you can add anything else you want inside this function
         });
    }


  }])
  .service('authRemote', ['$resource', 'config',
    function($resource, config){
      var base = config.API;
      return  {
        login : function (){
          return $resource (base+config.LOGIN, {}, {
            login: {method:'POST'}
            })
          },
        register : function (){
          return $resource (base+config.REGISTER, {}, {
            register: {method:'POST'}
            })
          },
        }
        // login : function (data){
        //   console.log("Auth remote login " , base+config.LOGIN);
        //   console.log("with data " , data);
        //   return $resource (base+config.LOGIN, {}, {
        //     login: {
        //       method:'POST',
        //       // headers : {
        //       //   'username': data.username,
        //       //   'password': data.password
        //       // }
        //     }
        //   })
        // }



  }]);
