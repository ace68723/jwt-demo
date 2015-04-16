'use strict';

/**
 * @ngdoc function
 * @name jwtDemoApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the jwtDemoApp
 */
angular.module('jwtDemoApp')
  	.controller('LogoutCtrl', function (authToken, $state) {
   		authToken.removeToken();
   		$state.go('main');

  	});
