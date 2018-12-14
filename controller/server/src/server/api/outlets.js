const router = require('express').Router();
const db = require('../config/database');

router.get('/api/outlets', async (req, res, next) => {
  const sql = 'SELECT * FROM outlets';
  try {
    const outlets = await db.all(sql);
    res.send(outlets);
  } catch (err) {
    next(err);
  }
});

router.post('/api/outlets', async (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
});

// router.get('/api/oulets', async (req, res, next) => {
//   const sql = `SELECT
//                 *
//               FROM outlets`;
//   try {
//     const deviceInfo = await db.all(sql, req.params.deviceId);
//     console.log(deviceInfo);
//     deviceInfo.map(service => {
//       const charUuids = service.characteristics.split(',');
//       const charNames = service.charNames.split(',');

//       const chars = [];
//       charUuids.forEach((val, index) => {
//         chars.push({
//           char_uuid: val,
//           char_name: charNames[index],
//         });
//       });

//       service.characteristics = chars;
//     });
//     res.send(deviceInfo);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
