var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/andralosen', function(req, res, next) {
  res.render('./anvandare/andralosen');
});

module.exports = router;