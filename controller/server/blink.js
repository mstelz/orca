var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(17, 'out'); //use GPIO pin 4, and specify that it is output
var LED2 = new Gpio(4, 'out');
var blinkInterval = setInterval(blinkLED, 5000); //run the blinkLED function every 250ms

function blinkLED() { //function to start blinking
  if (LED2.readSync() === 0) {
    LED2.writeSync(1);
  } else {
    LED2.writeSync(0);
  }

  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
}

setTimeout(endBlink, 25000); //stop blinking after 5 seconds
