const cron = require('node-cron');
const router = require('express').Router();
// const fs = require('fs');

cron.schedule('* * * * *', () => {
  console.log('running scheduled task');
})

module.exports = router;

