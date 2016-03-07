var express = require('express');
var router = express.Router();
var User = require('./nyanvmodul');

/* GET home page. */
router.get('/anvandare', function(req, res, next) {

	User.find( ).then(function(anvandare) {

		/*
		for (i in anvandare) {
			console.log(anvandare[i].id);
		}
		*/

		res.render('./admin/anvandare', {

			anvandare: anvandare,
			anvID: 0

		});

	}, function(err) {

		console.log(err);

	});


});

router.get('/anvandare/:id', function(req, res, next) {

	User.find( ).then(function(anvandare) {

		/*
		for (i in anvandare) {
			console.log(anvandare[i].id);
		}
		*/

		res.render('./admin/anvandare', {

			anvandare: anvandare,
			anvID: req.params.id

		});

	}, function(err) {

		console.log(err);

	});
	
});

module.exports = router;
