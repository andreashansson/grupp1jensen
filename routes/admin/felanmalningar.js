var express = require('express');
var router = express.Router();
var FelanmModel = require('../../mongotest');



/* GET home page. */
router.get('/felanmalningar', function(req, res, next) {
  FelanmModel.find({klar: false}).then((felanmalningar) => {

    res.render('./admin/felanmalningar', {felanmalningar: felanmalningar});
  }, (err) => {});

});

router.post('/felanmalningar/:id', function (req, res, next) {
  FelanmModel.findByIdAndUpdate(req.params.id, {klar: true}, (err, updated) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/admin/felanmalningar')
    }
  })
})

module.exports = router;
