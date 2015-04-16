var Q = require('q');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var userLogin = require('./models/userLogin')

var app = express();

// dataRef.set("hello world!");





app.use(cors());
app.use(bodyParser.json());

app.post('/register',function(req,res) {
	var user = req.body;
	// console.log(user);
	var newUser = {
		email: user.email,
		password: user.password
	}
	var loginID = '1234561' 

	
	userLogin.register(newUser)
		.then(function(token) {
			res.status(200).send({
				token: token,
				loginID: loginID,
				email: newUser.email
			});
		})
		.catch(function(error) {
			console.log('call register fail',error)
			res.status(401).send({
				error: error,
				loginID: loginID
			});
		})

})

var jobs = [
	'Cook',
	'SuperHero',
	'Unicorn Wisperer',
	'Toast Inspector'
];

app.get('/jobs',function(req,res) {
	if(!req.headers.authorization){
		return res.status(401).send({message: 'You are not authorized'})
	}//check if the request has a authorization header
	res.json(jobs);
})

app.listen(3000,function() {
	console.log('api listening on 3000');
})