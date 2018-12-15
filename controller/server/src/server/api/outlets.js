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

router.post('/api/outlets', (req, res, next) => {
  addOutlet(req.body)
    .then(response => {
      console.log(response);
      res.set('Content-Type', 'application/json');
      res.status(200).json(response);
      // res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// right now cascade delete is setup but should prolly clean up otherwise
router.delete('/api/outlets', (req, res, next) => {
  const sql = 'DELETE FROM outlets WHERE outlet_id = ?';
  const delGpioSql = 'DELETE FROM outlet_gpio WHERE outlet_id = ?';
  const delBtSql = 'DELETE FROM outlet_bt WHERE outlet_id = ?';
  db.run(sql, [req.query.id]);
  db.run(delGpioSql, [req.query.id]);
  db.run(delBtSql, [req.query.id]);

  res.sendStatus(200);
});

// TODO: need to look at adding transactions
const addOutlet = async outlet => {
  const outletSql =
    'INSERT INTO outlets (name, type, state, default_state) VALUES (?, ?, 0, ?);';
  const lastRow = await db.run(outletSql, [
    outlet.name,
    outlet.type,
    outlet.default_state,
  ]);
  if (outlet.type === 'GPIO') {
    const outletGpioSql =
      'INSERT INTO outlet_gpio (outlet_id, pin_num) VALUES (?, ?);';
    await db.all(outletGpioSql, [lastRow.id, outlet.pin]);
  } else {
    const outletBtSql =
      'INSERT INTO outlet_bt (outlet_id, device_uuid, service_uuid, char_uuid) VALUES (?, ?, ?,?)';
    await db.all(outletBtSql, [
      lastRow.id,
      outlet.deviceUuid,
      outlet.serviceUuid,
      outlet.charUuid,
    ]);
  }

  return lastRow;
};

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
