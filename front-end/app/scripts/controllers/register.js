'use strict';

angular.module('jwtDemoApp')
  .controller('RegisterCtrl', ['$http','$rootScope','alert','authToken',function ($http,$rootScope,alert,authToken) {
    var rc = this;
    rc.submit = function(email,password) {

    	var url = 'http://localhost:3000/register';
    	var user = {
            email: email,
            password: password
        };

    	$http.post(url,user)
    		.success(function(res) {
                console.log(res);
    			alert('success','Account Created!', 'Welcome, ' + res.email + '!');
                authToken.setToken(res.token);
    		})
    		.error(function(err) {
                console.log(err);
    			alert('warning','Opps!','could not register');
    		});

    };
  }]);
