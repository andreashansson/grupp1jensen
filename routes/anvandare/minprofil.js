var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/minprofil', function(req, res, next) {
  res.render('./anvandare/minprofil', { title: 'Express' });
});

module.exports = router;
