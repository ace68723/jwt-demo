'use strict';

/**
 * @ngdoc function
 * @name jwtDemoApp.controller:JobsCtrl
 * @description
 * # JobsCtrl
 * Controller of the jwtDemoApp
 */
angular.module('jwtDemoApp')
  .controller('JobsCtrl', function ($http,API_URL, alert) {

  	var jc = this;
  	$http.get(API_URL + 'jobs')
  		.success(function(jobs) {
  			jc.jobs = jobs;
  		})
  		.error(function(err) {
  			alert('warning', 'Unable to get jobs', err.message);

  		});
    
  });
