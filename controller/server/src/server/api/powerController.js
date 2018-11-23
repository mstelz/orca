const express = require('express');
const router = express.Router();
const noble = require('noble');
const db = require('../config/database');

// TODO: NEED TO ADD MULTI DEVICE SERVICE SUPPORT
// And refactor class to separate power controller out from 
// basic Bluetooth low energy functionality
var customService;
var connectedDevices = [];
var serviceChars = {};
var devices = [];

// On statechange get registered devices from db then start scanning
noble.on('stateChange', function(state) {
	if (state === 'poweredOn') {
		console.log('Powered on!');

		getDevices().then((d) => {
			devices = d;

			if(devices.length > 0) {
				noble.startScanning();
			}
		});
	}
});

noble.on('discover', function(device) {
	console.log('Found device: ' + device.address);
	
	device.disconnect((error) => {});
	
	if(devices.some((d) => { return d.auto_connect == 1 && d.device_uuid == device.address.toUpperCase() })) {
		console.log('Found matching device...');
		connectedDevices.push(device);
		connect(device);
		
		//device.once('connect', function() {
		//	noble.stopScanning();
		//	console.log('Stop Scanning');
		//});
		
		device.once('connect', () => {
			console.log('Scanning for services...');

			//TODO: Refactor for multi service support based on database entry
			device.discoverServices(['8000'], function(error, services) {
				if(error) {console.log(error);}
				customService = services[0];
				console.log('Connecting to Service with uuid: ' + customService.uuid);
				
				if(customService) {			
					customService.discoverCharacteristics(null, function(error, chars) {
						if(error) { console.log(error); }
						
						connectedDevices.find(d => d === device).services.characteristics == chars;		
					});	
				}
			});
		});
		
		// TODO: Refactor to be more friendly to multiple devices
		setTimeout(() => {
			device.on('disconnect', function() {
				console.log('Device ' + device.uuid + ' disconnected');
				setTimeout(() => { noble.startScanning(); }, 1000);
				return;
			})}, 3000);
	}
});

// On Control-C (Interupt Signal) disconnect devices before exit
process.on('SIGINT', function() {
    console.log("Caught interrupt signal");

		const promises = [];
		connectedDevices.forEach((device) => {
			promises.push(disconnect(device));
		});

		Promise.all(promises).then(process.exit(0));
});

function toggle(deviceId, serviceId, charId, state) { 	
	if(state == 'on') {
		write(deviceId, serviceId, charId, Buffer.from([0x01]));
	} else if(state == 'off') {
		write(deviceId, serviceId, charId, Buffer.from([0x00]));
	} else {
		// FIXME: remove serviceChars
		serviceChars[charId].read(function(error, data) {
			if(data.toString('hex') == '01') {
				write(deviceId, serviceId, charId, Buffer.from([0x00]));
			} else {
				write(deviceId, serviceId, charId, Buffer.from([0x01]));
			}
		});
	}
}

function write(deviceAddress, serviceUuid, charUuid, buffer) {
	getChar(deviceAddress, serviceUuid, charUuid).catch(err => console.log(err)).then((char) => {
		console.log(char);

		if(char) {		
			char.write(buffer, true, function (error) {
				console.log('Wrote ' + buffer.toString('hex') + ' to ' + char.uuid);
				if (error) {
					console.log(error);
				}
			});
		}
	});
}

// TODO: Should most likely make this an async call
function read(deviceAddress, serviceUuid, charUuid) {
	getChar(deviceAddress, serviceUuid, charUuid).catch(err => console.log(err)).then((char) => {
		console.log(char);

		if(char) {		
			char.read(function(error, data) {
				console.log(data.toString('hex'));
			});
		}
	});
}

async function getChar(deviceAddress, serviceUuid, charUuid) {
	return await new Promise((resolve, reject) => {
		let char; 

		connectedDevices.forEach((d) => {
			if(d.address.toUpperCase() == deviceAddress.toUpperCase()) {
				d.services.forEach((s) => {
					if(s.uuid.toUpperCase() == serviceUuid.toUpperCase()) {
						s.characteristics.forEach((c) => {
							if(c.uuid.toUpperCase() == charUuid.toUpperCase()){
								char = c;
							}
						})
					}
				})
			}
		})

		if(char) {
			resolve(char);
		} else {
			reject('No Characteristic Found');
		}
	});
}

async function getDevices() {
	return await db.all('SELECT * FROM bt_devices');
}

function connect(device) {
	device.connect(function(error) {
		if(error) { console.log(error) };
		console.log('Connected to: ' + device.uuid);		
	});
}

async function disconnect(device) {
	return new Promise((resolve, reject) => {
		device.disconnect((err) => {
			if (err) {
				console.log('Error disconnecting: ' + device.uuid);
				console.log(err);
				reject(err);
			} else {
				console.log('Disconnecting: ' + device.uuid);
				resolve(true);
			}
		})
	})
}

router.get('/api/ble/toggle/:deviceId/:serviceId/:charId', function(req, res, next) {
  toggle(req.params.deviceId, req.params.serviceId, req.params.charId, req.query.state);
  res.send(req.params.charId);
});

module.exports = router;
