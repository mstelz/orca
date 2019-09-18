const express = require('express');
const noble = require('noble');
const db = require('../config/database');

const router = express.Router();

// TODO: NEED TO ADD MULTI DEVICE SERVICE SUPPORT
// And refactor class to separate power controller out from
// basic Bluetooth low energy functionality

// Have a true power controller wrap the usage of this more generic ble class
let customService;
const connectedDevices = [];
let devices = [];

const getChar = async (deviceAddress, serviceUuid, charUuid) =>
  new Promise((resolve, reject) => {
    let char;

    connectedDevices.forEach(d => {
      if (d.address.toUpperCase() === deviceAddress.toUpperCase()) {
        d.services.forEach(s => {
          if (s.uuid.toUpperCase() === serviceUuid.toUpperCase()) {
            s.characteristics.forEach(c => {
              if (c.uuid.toUpperCase() === charUuid.toUpperCase()) {
                char = c;
              }
            });
          }
        });
      }
    });

    if (char) {
      resolve(char);
    } else {
      reject('No Characteristic Found');
    }
  }).catch(err => console.log(err));

// TODO: Need to add a catch for the promise rejections
// I think write doesnt need to be blocking but may want to make it async to allow
// actions after the promise completes
const write = (deviceAddress, serviceUuid, charUuid, buffer) => {
  getChar(deviceAddress, serviceUuid, charUuid).then(char => {
    console.log(char);

    if (char) {
      char.write(buffer, true, error => {
        console.log(`Wrote ${buffer.toString('hex')} to ${char.uuid}`);
        if (error) {
          console.log(error);
        }
      });
    }
  });
};

const read = async (deviceAddress, serviceUuid, charUuid) =>
  getChar(deviceAddress, serviceUuid, charUuid).then(char => {
    if (char) {
      return new Promise((resolve, reject) => {
        char.read((error, data) => {
          if (error) {
            console.log(error);
          }
          resolve(data);
        });
      });
    }
  });

const getDevices = async () => db.all('SELECT * FROM bt_devices');

const connect = device => {
  device.connect(error => {
    if (error) {
      console.log(error);
    }
    console.log(`Connected to: ${device.uuid}`);
  });
};

// refactor to fix async by default returns a promise
const disconnect = async device => {
  await device.disconnect(err => {
    if (err) {
      throw new Error(err, device);
    }
  });
};

const toggle = (deviceId, serviceId, charId, state) => {
  if (state === 'on') {
    write(deviceId, serviceId, charId, Buffer.from([0x01]));
  } else if (state === 'off') {
    write(deviceId, serviceId, charId, Buffer.from([0x00]));
  } else {
    read(deviceId, serviceId, charId).then(data => {
      if (data.toString('hex') === '01') {
        write(deviceId, serviceId, charId, Buffer.from([0x00]));
      } else {
        write(deviceId, serviceId, charId, Buffer.from([0x01]));
      }
    });
  }
};

// On statechange get registered devices from db then start scanning
noble.on('stateChange', state => {
  if (state === 'poweredOn') {
    console.log('Powered on!');

    getDevices().then(d => {
      devices = d;

      if (devices.length > 0) {
        noble.startScanning();
      }
    });
  }
});

noble.on('discover', device => {
  console.log(`Found device: ${device.address}`);

  device.disconnect(error => {
    if (error) {
      console.log(error);
    }
  });

  if (
    devices.some(
      d =>
        d.auto_connect === 1 && d.device_uuid === device.address.toUpperCase()
    )
  ) {
    console.log('Found matching device...');
    connectedDevices.push(device);
    connect(device);

    // device.once('connect', function() {
    //	noble.stopScanning();
    //	console.log('Stop Scanning');
    // });

    device.once('connect', () => {
      console.log('Scanning for services...');

      // TODO: Refactor for multi service support based on database entry
      device.discoverServices(['8000'], (error, services) => {
        if (error) {
          console.log(error);
        }
        customService = services[0];
        console.log(`Connecting to Service with uuid: ${customService.uuid}`);

        if (customService) {
          customService.discoverCharacteristics(null, (err, chars) => {
            if (err) {
              console.log(err);
            }

            connectedDevices.find(d => d === device).services.characteristics ==
              chars;
          });
        }
      });
    });

    // TODO: Refactor to be more friendly to multiple devices
    setTimeout(() => {
      device.on('disconnect', () => {
        console.log(`Device ${device.uuid} disconnected`);
        setTimeout(() => {
          noble.startScanning();
        }, 1000);
      });
    }, 3000);
  }
});

// On Control-C (Interupt Signal) disconnect devices before exit
process.on('SIGINT', () => {
  console.log('Caught interrupt signal');

  const promises = [];
  connectedDevices.forEach(device => {
    promises.push(
      disconnect(device).catch((err, device) => {
        console.log(`Error disconnecting: ${device.uuid}`);
        console.log(err);
      })
    );
  });

  Promise.all(promises).then(process.exit(0));
});

router.get('/api/ble/toggle/:deviceId/:serviceId/:charId', (req, res, next) => {
  toggle(
    req.params.deviceId,
    req.params.serviceId,
    req.params.charId,
    req.query.state
  );
  res.send(req.params.charId);
});

module.exports = router;
