'use strict';

angular.module('jwtDemoApp')
	//confirm password
  .directive('validateEquals', function () {
    return {
	    require: 'ngModel',
	    link: function(scope,element, attrs, ngModelCtrl) {
	    	function validateEqual (value) {
	    		// console.log(value)
	    		// console.log( scope.$eval(attrs.validateEquals))
	    		var valid = (value === scope.$eval(attrs.validateEquals));
	    		// console.log( valid)

	    		ngModelCtrl.$setValidity('equal', valid);
	    		return valid ? value: undefined;
	    	}

	    		ngModelCtrl.$parsers.push(validateEqual);
	    		ngModelCtrl.$formatters.push(validateEqual);

	    		scope.$watch(attrs.validateEquals, function() {
	    			ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);

	    		});
	    }
    };
  });
