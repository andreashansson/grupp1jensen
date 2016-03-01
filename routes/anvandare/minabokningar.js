var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/minabokningar', function(req, res, next) {
  res.render('./anvandare/minabokningar', 

  	{ 
  		model: 'Volvo XC60',
  		drivmedel: 'Diesel',
  		vaxellada: 'Automatic',
  		drivhjul: '4' 

  	});

});

module.exports = router;
