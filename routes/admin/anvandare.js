var express = require('express');
var router = express.Router();
var User = require('./nyanvmodul');

/* GET home page. */
router.get('/anvandare', function(req, res, next) {

	User.find( ).then(function(anvandare) {

		for (i in anvandare) {
			console.log(anvandare[i].id);
		}

		res.render('./admin/anvandare', {

			anvandare: anvandare

		});

	}, function(err) {

		console.log(err);

	});
});

module.exports = router;