var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/minabokningar', function(req, res, next) {
  res.render('./anvandare/minabokningar');
});

module.exports = router;