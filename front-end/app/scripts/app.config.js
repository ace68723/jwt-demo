'use strict';

angular.module('jwtDemoApp').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	
	$stateProvider

	.state('main',{
		url:'/main',
		templateUrl:'/views/main.html'
	})
	
	.state('register',{
		url:'/register',
		templateUrl:'/views/register.html',
		controller:'RegisterCtrl as rc'
	});

	$urlRouterProvider.otherwise('/main');


}]);
