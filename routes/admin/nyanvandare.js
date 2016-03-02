var express = require('express');
var router = express.Router();
var User = require('./nyanvmodul');
var mongodb = require('mongodb');



/* GET home page. */
router.get('/nyanvandare', function(req, res, next) {

	User.create({

		name: "Andreas",
		pwd: "kallegroda"
		//mobil: "0736547028",
		//admin: true,
		//email: "andenwee@gmail.com",
		//times: 0

	});

	res.render('./admin/nyanvandare', {

	});

});

module.exports = router;

//req.body.id/name

// promises