'use strict';

/**
 * @ngdoc service
 * @name jwtDemoApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the jwtDemoApp.
 */
angular.module('jwtDemoApp')
  .factory('authInterceptor', function (authToken) {
    
    return {
      request: function (config) {
        var token = authToken.getToken();

        if(token){
          config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
      },
      reponse: function(reponse) {
        return reponse;

      }
    };
  });
