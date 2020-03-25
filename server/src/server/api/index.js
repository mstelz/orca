const router = require('express').Router();
// const fs = require('fs');

router.use(require('./bluetooth'));
router.use(require('./outlets'));
router.use(require('./powerController'));
router.use(require('./temperature'));
// router.use(require('./camera'));
router.use(require('./schedulers'));

module.exports = router;
