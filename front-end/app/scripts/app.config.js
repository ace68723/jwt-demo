'use strict';

angular.module('jwtDemoApp').config(['$stateProvider','$urlRouterProvider','$httpProvider',
	function($stateProvider,$urlRouterProvider,$httpProvider) {
	
	$stateProvider

	.state('main',{
		url:'/main',
		templateUrl:'/views/main.html'
	})
	
	.state('register',{
		url:'/register',
		templateUrl:'/views/register.html',
		controller:'RegisterCtrl as rc'
	})

	.state('jobs',{
		url:'/jobs',
		templateUrl:'/views/jobs.html',
		controller:'JobsCtrl as jc'
	})

	.state('logout',{
		url:'/logout',
		 controller:'LogoutCtrl as lc'
	});

	$httpProvider.interceptors.push('authInterceptor');


	$urlRouterProvider.otherwise('/main');


}])

.constant('API_URL', 'http://localhost:3000/');//api url constant