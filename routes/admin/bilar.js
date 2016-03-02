var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bilar', function(req, res, next) {
  res.render('./admin/bilar');
});

module.exports = router;
