var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(require('./bilar'));
router.use(require('./anvandare'));
router.use(require('./besiktning'));
router.use(require('./bokningar'));
router.use(require('./felanmalningar'));
router.use(require('./service'));

module.exports = router;
