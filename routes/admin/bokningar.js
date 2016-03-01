var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bokningar', function(req, res, next) {
  res.render('./anvandare/bokningar');
});

module.exports = router;