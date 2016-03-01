var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(require('./besiktning'));
router.use(require('./bilar'));

module.exports = router;