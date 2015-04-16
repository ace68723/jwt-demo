'use strict';

/**
 * @ngdoc function
 * @name jwtDemoApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the jwtDemoApp
 */
angular.module('jwtDemoApp')
  .controller('HeaderCtrl', function (authToken) {
    	var hc = this;
    	hc.isAuthenticated = authToken.isAuthenticated;
  });
