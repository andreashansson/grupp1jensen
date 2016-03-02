var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/felanmalningar', function(req, res, next) {
  res.render('./admin/felanmalningar');
});

module.exports = router;
