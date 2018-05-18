var Gpio = require('onoff').Gpio;
var relay1 = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var relay2 = new Gpio(17, 'out');
var relay3 = new Gpio(27, 'out');
var relay4 = new Gpio(22, 'out');

function createPin(pinNum, pinType) {
    var gpio = new Gpio(pinNum, pinType);

    return gpio;
}

module.exports = createPin;
