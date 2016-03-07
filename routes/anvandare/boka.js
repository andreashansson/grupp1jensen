var express = require('express');
var router = express.Router();
var BokningModel = require('../../model/BokningModel');
var BilarModel = require('../../model/BilarModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./anvandare/boka');
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  var sokObj = {};

  if (req.body.biltyp != '-Välj-') {
     sokObj.biltyp = req.body.biltyp;
   }

  if(req.body.dragkrok) {
    sokObj.dragkrok = true;
  }

  if (req.body.drivmedel != '-Välj-' ) {
    sokObj.drivmedel = req.body.drivmedel;
  }

  if (req.body.vaxellada != '-Välj-') {
    sokObj.vaxellada = req.body.vaxellada;
  }

  if (req.body.drivhjul != '-Välj-') {
    sokObj.drivhjul = req.body.drivhjul;
  }
  console.log(sokObj);
  // Hämta alla bilar som matchar sökningen.
  BilarModel.find(sokObj).then((bilar) => {
    BokningModel.find().then( function (bokningar) {
      
    })
  }, (err) => {})
    // Efter det hämta alla bokningar. Som filtrerar så att bara de som krockar med den ansatta tiden.
      // Kolla om någon konfliktande bokningar är på bilar som matchar sökningen.

  // console.log(typeof(req.body.from) + ' ' + typeof(req.body.tom) );
})
module.exports = router;
