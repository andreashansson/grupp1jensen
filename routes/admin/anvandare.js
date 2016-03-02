var express = require('express');
var router = express.Router();
var User = require('./nyanvmodul');

/* GET home page. */
router.get('/anvandare', function(req, res, next) {

	res.render('./admin/anvandare');
		
});


module.exports = router;
