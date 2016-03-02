var express = require('express');
var router = express.Router();
var FelanmModel = require('../../mongotest');
var dateHelper = require('../../helpers/helper').dater;
/* GET home page. */
router.get('/felanmalan', function(req, res, next) {
  res.render('./anvandare/felanmalan');
});

router.post('/felanmalan', function (req, res, next) {
  req.body.klar = false;
  req.body.skapad = dateHelper();

  FelanmModel.create(req.body, (err, savedFelanm) => {
    if (err) {
      next(err);
    } else {
      res.render('./anvandare/felanmalan', {thanks: true});
    }
  })

})
module.exports = router;
