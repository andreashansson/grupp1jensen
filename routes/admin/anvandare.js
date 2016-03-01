var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/anvandare', function(req, res, next) {
  res.render('./anvandare/anvandare');
});

module.exports = router;