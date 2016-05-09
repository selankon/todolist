'use strict';

/**
 * @ngdoc service
 * @name todoApp.session
 * @description
 * # session
 * Factory in the todoApp.
 */
angular.module('todoApp')
  .factory('localSession',  function ($localStorage) {

    // Decode the JWT
    function urlBase64Decode(str) {
           var output = str.replace('-', '+').replace('_', '/');
           switch (output.length % 4) {
               case 0:
                   break;
               case 2:
                   output += '==';
                   break;
               case 3:
                   output += '=';
                   break;
               default:
                   throw 'Illegal base64url string!';
           }
           return window.atob(output);
     }

    // Get claims of JWT
    function getClaimsFromToken(token) {
        // var token = $localStorage.token;
        var user = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            user = JSON.parse(urlBase64Decode(encoded));
        }
        return user;
    }

    this.tokenData = {};
    this.userData = {};
    return {
      tokenData : this.tokenData,
      userData :this.userData,
      createSession : function (token) {
        if (!$localStorage.token){
          console.log("Adding token to local storage");
          $localStorage.token = token;
        }
        this.tokenData = getClaimsFromToken(token);
        this.userData = this.tokenData.opts;
      },
      destroySession : function (){
        console.log("LOGOUT");
        this.tokenData = {};
        this.userData = {};
        delete $localStorage.token;
        // success();
      }

    };
  })

  // .value ('sessionData', function sessionData(data) {
  //   this.username = data.username;
  //   this.password = data.password;
  //   this.token    = data.token;
  //   this.mail     = data.mail;
  //   this.img      = data.img;
  //   this.creation = fata.creation;
  // });
