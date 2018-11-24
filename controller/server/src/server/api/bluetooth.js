const router = require('express').Router();
const db = require('../config/database');

router.get('/api/bluetooth/devices', async (req, res, next) => {
  const sql = 'SELECT * FROM bt_devices';
  try {
    const devices = await db.all(sql);
    res.send(devices);
  } catch (err) {
    next(err);
  }
});

router.get('/api/bluetooth/devices/:deviceId', async (req, res, next) => {
  const sql = `SELECT 
                devices.device_uuid, 
                devices.name, 
                services.service_uuid, 
                services.name as service_name,
                group_concat(chars.char_uuid) AS characteristics,
                group_concat(chars.name) AS charNames
              FROM bt_devices AS devices
              INNER JOIN bt_services AS services 
                ON devices.device_uuid = services.device_uuid 
              INNER JOIN bt_service_chars AS chars 
                ON services.service_uuid = chars.service_uuid 
                WHERE devices.device_uuid = ?
              GROUP BY devices.device_uuid, services.service_uuid`;
  try {
    const deviceInfo = await db.all(sql, req.params.deviceId);
    console.log(deviceInfo);
    deviceInfo.map((service) => {
      const charUuids = service.characteristics.split(',');
      const charNames = service.charNames.split(',');

      const chars = [];
      charUuids.forEach((val, index) => {
        chars.push({
          char_uuid: val,
          char_name: charNames[index]
        });
      });

      service.characteristics = chars;
    });
    res.send(deviceInfo);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
