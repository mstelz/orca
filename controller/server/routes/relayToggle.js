var express = require('express');
var router = express.Router();
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var relay = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output

router.get('/', function(req, res, next) {
  toggle();
  res.send('respond with a resource');
});

function toggle() { 
  if (relay.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    relay.writeSync(1); //set pin state to 1 (turn relay on)
  } else {
    relay.writeSync(0); //set pin state to 0 (turn relay off)
  }
}

module.exports = router;
