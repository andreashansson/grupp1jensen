var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/besiktning', function(req, res, next) {
  res.render('./anvandare/besiktning');
});

module.exports = router;