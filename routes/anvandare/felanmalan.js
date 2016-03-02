var express = require('express');
var router = express.Router();
var FelanmModel = require('../../mongotest')
/* GET home page. */
router.get('/felanmalan', function(req, res, next) {
  res.render('./anvandare/felanmalan');
});

router.post('/felanmalan', function (req, res, next) {
  req.body.klar = false;

  FelanmModel.create(req.body, (err, savedFelanm) => {
    if (err) {
      next(err);
    } else {
      console.log(savedFelanm);
    }
  })

})
module.exports = router;
