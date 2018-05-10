var express = require('express');
var router = express.Router();
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var relay1 = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var relay2 = new Gpio(17, 'out');
var relay3 = new Gpio(27, 'out');
var relay4 = new Gpio(22, 'out');

function toggle(num) { 
  switch(num){
    case '1':
      t(relay1);
      console.log('case1');
      break;
    case '2': 
      t(relay2);
      console.log('case2');
      break;
    case '3':
      t(relay3);
      console.log('case3');
      break;
    case '4':
      t(relay4);
      break;
    default:
      t(relay1);
      t(relay2);
      t(relay3);
      t(relay4);
  }
}

function t(relay) {
  if (relay.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    relay.writeSync(1); //set pin state to 1 (turn relay on)
  } else {
    relay.writeSync(0); //set pin state to 0 (turn relay off)
  }
}

router.get('/', function(req, res, next) {
  toggle(req.query.relayNum);
  res.send(req.query.relayNum);
});

module.exports = router;
