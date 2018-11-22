const router = require('express').Router();
const fs = require("fs");

router.use(require('./bluetooth'));
router.use(require('./powerController'));
router.use(require('./temperature'));

module.exports = router;
