'use strict';

/**
 * @ngdoc service
 * @name jwtDemoApp.alert
 * @description
 * # alert
 * Service in the jwtDemoApp.
 */
angular.module('jwtDemoApp')
  .service('alert',['$rootScope','$timeout', function ($rootScope, $timeout) {
  	var alertTimeout;
  	return function(type,title,message,timeout) {
  		$rootScope.alert = {
  			hasBeenShown: true,
  			show: true,
  			type: type,
  			message: message,
  			title: title
  		};
  		console.log($rootScope.alert);
  		$timeout.cancel(alertTimeout);
  		alertTimeout = $timeout(function() {
  			$rootScope.alert.show = false;
  			console.log($rootScope.alert);
  		},timeout || 2000);
  	};




  }]);
