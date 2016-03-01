var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mittkonto', function(req, res, next) {
  res.render('./anvandare/mittkonto');
});

module.exports = router;