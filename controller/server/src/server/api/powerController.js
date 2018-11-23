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
			noble.startScanning();
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
						let outlet1;
						for(var i in chars) {
							console.log(' ' + i + ' uuid: ' + chars[i].uuid);
							
							serviceChars[chars[i].uuid] = chars[i];
						}				
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

function toggle(num, state) { 
	let buffer;
	
	if(state == 'on') {
		write(num, Buffer.from([0x01]));
	} else if(state == 'off') {
		write(num, Buffer.from([0x00]));
	} else {
		serviceChars[num].read(function(error, data) {
			if(data.toString('hex') == '01') {
				write(num, Buffer.from([0x00]));
			} else {
				write(num, Buffer.from([0x01]));
			}
		});
	}
}

function write(num, buffer) {
	serviceChars[num].write(buffer, true, function (error) {
		console.log('Wrote ' + buffer.toString('hex') + ' to ' + serviceChars[num].uuid);
	  if (error) {
		console.log(error);
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
				resolve(true);
			}
		})
	})
}

router.get('/api/power/:charId', function(req, res, next) {
  toggle(req.params.charId, req.query.state);
  res.send(req.params.charId);
});

module.exports = router;
