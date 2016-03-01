var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/felanmalan', function(req, res, next) {
  res.render('./anvandare/felanmalan');
});

module.exports = router;