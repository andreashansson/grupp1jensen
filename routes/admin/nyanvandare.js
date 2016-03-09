var express = require('express');
var router = express.Router();
var User = require('./nyanvmodul');
var mongodb = require('mongodb');

var anvID = null;

/* GET home page. */
router.get('/nyanvandare', function(req, res, next) {

	User.find( ).then(function(anvandare) {

		if (anvandare.length < 1) {

			anvID = anvandare.length;

		}
		
		else {

			anvID = anvandare[anvandare.length-1].id;
		
		}

		console.log(anvID);
		
		res.render('./admin/nyanvandare', {

			anvandare: anvandare

		});

	}, function(err) {

		console.log(err);

	});

});

router.post('/nyanvandare', function(req, res, next) {

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

			id: ++anvID,
			name: req.body.anvnamn,
			pwd: correct_pwd,
			mobil: req.body.mobil,
			avdelning: req.body.avdelning,
			admin: type,
			email: req.body.email,
			timesPrivate: 0

	    });

		res.redirect('/admin/nyanvandare');
	   	res.end();

   	}

   	else {
   		
   		res.send("Lösenordet stämmer inte");
   	
   	}

});

module.exports = router;