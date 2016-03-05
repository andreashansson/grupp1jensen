var express = require('express');
var router = express.Router();
var User = require('./nyanvmodul');
var mongodb = require('mongodb');

var anvID = 0;

/* GET home page. */
router.get('/nyanvandare', function(req, res, next) {

	User.find( ).then(function(anvandare) {

		res.render('./admin/nyanvandare', {

			anvandare: anvandare

		});

	}, function(err) {

		console.log(err);

	});
});

router.post('/nyanvandare', function(req, res, next) {

	console.log(req.body.type);

  	if (req.body.password[0] === req.body.password[1]) {

	  	var correct_pwd = "";
	  	var type = null;

	  	if (req.body.type === "true") {
			type = true;
		}
		else {
			type = false;
		}

		correct_pwd = req.body.password[0];

		User.create({

			id: anvID++,
			name: req.body.anvnamn,
			pwd: correct_pwd,
			mobil: req.body.mobil,
			admin: type,
			email: req.body.email,
			timesPriate: 0

	    });

	   	res.end();

   	}

   	else {
   		
   		res.send("Lösenordet stämmer inte");
   	
   	}

});

module.exports = router;

//req.body.id/name

// promises