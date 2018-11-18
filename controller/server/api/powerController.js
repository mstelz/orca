var express = require('express');
var router = express.Router();
var noble = require('noble');

var customService;
var powerDevice;
var serviceChars = {};

noble.on('stateChange', function(state) {
	if (state === 'poweredOn') {
		console.log('Powered on!');
		noble.startScanning();
	}
});

noble.on('discover', function(device) {
	console.log('Found device: ' + device.address);
	//console.log(device);
	
	device.disconnect((error) => {});
	
	if (device.address.toUpperCase() === 'EF:04:6F:54:36:A9') {
		console.log('Found it!');
		powerDevice = device;
		connect(device);
		
		//device.once('connect', function() {
		//	noble.stopScanning();
		//	console.log('Stop Scanning');
		//});
		
		device.once('connect', () => {
			console.log('Scanning for services');

			device.discoverServices(['8000'], function(error, services) {
				if(error) {console.log(error);}
				customService = services[0];
				console.log('Connecting to Service with uuid: ' + customService.uuid);
				
				if(customService) {			
					customService.discoverCharacteristics(null, function(error, chars) {
						if(error) { console.log(error); }
						var outlet1;
						for(var i in chars) {
							console.log(' ' + i + ' uuid: ' + chars[i].uuid);
							
							serviceChars[chars[i].uuid] = chars[i];
						}				
					});	
				}
			});
		});
		
		setTimeout(() => {
			device.on('disconnect', function() {
				console.log('Device ' + device.uuid + ' disconnected');
				setTimeout(() => { noble.startScanning(); }, 1000);
				return;
			})}, 3000);
	}
});

function toggle(num, state) { 
	var buffer;
	
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

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");

    powerDevice.disconnect((error) => {
			console.log(error);
			console.log('Disconnected ' + powerDevice);
			
			process.exit(0);
		});
});

function connect(device) {
	device.connect(function(error) {
		console.log(error);
		console.log('Connected to: ' + device.uuid);		
	});
}

router.get('/api/power/:charId', function(req, res, next) {
  toggle(req.params.charId, req.query.state);
  res.send(req.params.charId);
});

module.exports = router;
