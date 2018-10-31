# Controller
This README is to explain how to put together the physical components of the controller. While in development I will be using breadboards and converting them into a soldered pera-board once I feel comfortable with the layout. 

## Upgrade NodeJS on Pi
1. `sudo apt-get update`
2. `sudo apt-get dist-upgrade`
3. `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`
4. `sudo apt-get install -y nodejs`
5. `node -v` to verify you have the correct version
6. If you get `/usr/local/bin/node` not found:
  - `ln -s /usr/bin/node /user/local/bin/node`

----

### Global Part List (Needed for all)
* [Raspberry-Pi Model 3B](https://www.amazon.com/gp/product/B01LPLPBS8/)
* [Arduino Uno R3](https://www.amazon.com/gp/product/B01EWOE0UU/)
* Jumper Wires
* Breadboards
* Proto-boards
* [Resistors](https://www.amazon.com/gp/product/B016NXK6QK)

---

## Temperature Sensor
### Information
 Integrate with the power strip to achieve heater control based on temperature. More information to come.
### Parts List
* [DS18B20 Temperature Sensor](https://www.sparkfun.com/products/11050)
* 4.7k ohms resistor
### Schematic
![DS18B20 Wiring Schematic](schematics/DS18B20_Schematic.png "DS18B20 Wiring Schematic")  
### Setup
1. Enable 1-Wire Mode. 
    1. Via Raspberry-Pi Configuration: 
        - Go to Raspberry-Pi Configuration -> Interfaces -> and Enable **1-Wire**
    2. Manually: 
        - `sudo apt-get update`
        - `sudo apt-get upgrade`
        - `sudo nano /boot/config.txt`
        - Add `dtoverlay=w1-gpio` on the bottom line
        - `CTRL-X` then `Y` then `RETURN`
        - `sudo reboot`
2. Find your 1-Wire Device running `ls /sys/bus/w1/devices/` in shell	
3. Copy /controller/rasperry-pi/piMonitor to your rasberry-pi
4. Setup a cron task to automatically run at the time interval you want
  * \*/15 \* \* \* \* python /var/www/piMonitor.py (this runs every 15 minutes)

---

## Atlas Scientific Conductivity Sensor
### Parts List
 * [Tentacle T3 for Raspberry Pi](https://www.atlas-scientific.com/product_pages/components/tentacle-t3.html)
 * [EZO E.C. Circuit](https://www.atlas-scientific.com/product_pages/circuits/ezo_ec.html)
 * [E.C. K 1.0 Probe](https://www.atlas-scientific.com/product_pages/probes/ec_k1-0.html)
### Setup
 1. #### Change EZO Circuit from UART to I2C
     This procedure toggles the protocol between UART and I2C. If the EZO Circuit is in UART mode, this procedure will switch it to I2C. If it is in I2C mode, it will switch it to UART.
       - If Circuit is blinking `Green` and `Cyan` then the circuit is configured in UART mode
       - If Circuit is blinking `Blue` and `Cyan` then the circuit is configured in I2C mode  
     _Before starting the procedure, remove the EZO Circuit from the Tentacle (or other carrier boards). Remove power and all connections._

    This procedure is easiest using a breadboard and a set of jumper wires

      1. Connect (shortcut) these two pins:
        * PGND pin to the TX pin
      2. Power the EZO Circuit (GND, +5V)
      3. Wait for LED to change from green to blue (UART->I2C) or from blue to green (I2C->UART). 
      4. Remove the jumper wire from the PGND (or PRB respectively) pin to the TX pin
      5. Remove power (GND, 5V)

2. #### [Calibrate your sensor](https://www.atlas-scientific.com/_files/_datasheets/_circuit/EC_EZO_Datasheet.pdf)

3. #### [Setup your PI](https://www.whiteboxes.ch/docs/tentacle/t3/#/quickstart)
    1. Do not plugin your Tentacle T3 to the PI yet, boot the PI
    2. `sudo raspi-config`
    3. Enable `I2C`
    4. Reboot your PI
    5. Upgrade PI with `sudo apt-get update` & `sudo apt-get upgrade`
    6. Install I2C Tools with `sudo apt-get install python-smbus` & `sudo apt-get install i2c-tools`
    7. Reboot the PI
    8. Test I2C `sudo i2cdetect -y 1`
    9. You should see `64` in the table

---

## Power Strip (v1)
### Parts List
 * [Two-Gang Deep Wallbox](https://www.homedepot.com/p/RACO-Two-Gang-Drawn-Handy-Box-2-1-8-in-Deep-with-1-2-and-3-4-in-KO-s-10-Pack-683SP/204855678)
 * [Two-Gang Wallplate](https://www.homedepot.com/p/Leviton-2-Gang-Midway-Duplex-Outlet-Nylon-Wall-Plate-White-R52-0PJ82-00W/202059881)
 * [Sainsmart 4 Channel Relay](https://www.amazon.com/gp/product/B0057OC5O8)
 * [16 Gauge Wire](https://www.lowes.com/pd/Southwire-25-ft-16-AWG-Stranded-Black-Gpt-Primary-Wire/3234599) (Multiple colors if possible)
 * [16 Gauge Power Cable](https://www.amazon.com/C2G-Cables-Go-25545-Universal/dp/B000068BU1/ref=sr_1_1?s=electronics&ie=UTF8&qid=1517252726&sr=1-1&keywords=C2G%2FCables+to+Go+25545+-+6ft+Universal+16AWG+Power+Cord+%28IEC320+C13+to+NEMA+5-15P%29)
 
--- 

## Wireless Power Strip (v2)
### Information
 The purpose of this powerstrip is to increase the number of controllable outlets and to incorporate all of the components necessary for control within a standard looking powerstrip. This will be controlled via Bluetooth Low Energy or WIFI
### Parts List
 * [Belkin 10-outlet Power Strip](https://www.amazon.com/gp/product/B000BVC0WO/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1)
 * 2x [Sainsmart 4 Channel Relay](https://www.amazon.com/gp/product/B0057OC5O8)
 * [8-10 Screw Busbar](https://www.amazon.com/gp/product/B0091VHLW4/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1)
 * [Adafruit Feather 32u4 Bluefruit LE](https://www.adafruit.com/product/2829) to control via Bluetooth Low Energy
 * 14 gauge solid copper wire (black/red)
 * Acrylic (optional)
### Setup
 1. Open the power unit carefully by drilling out the rivets using a bit slightly larger than the hole in the rivet
 2. Remove the outlet on the far end from the power switch
 3. Remove the power switch board, reset, and protected LED carefully keeping the main wires in tact
     * Be sure to cut the black and white wire as close to the board as possible
 4. Remove the black & white wire connections between each outlet (Save these pieces of wire)
     * Leave all the green (ground) connections as is since they are nicely soldered already
 5. Unscrew the front of the outlets to allow you to move them around a little
 6. Use pliers to break the gold connection tab on the hot side. Leave the white side in tact
 7. Use a wire nut to connect the incoming white wire to a short piece of wire to reach the first outlet (white side)
 8. Cut 2 small pieces of acrylic to cover the missing outlet and power switch holes
     * Glue in place using standard super glue
 9. Mount the busbar where ever you think it will best fit
 10 . 
 
--- 

## Auto Top Off System
### Information
  - The ATO has two water sensors (my setup uses 2 float valves) one in the ATO resevior and one in the sump
  - The ATO pump will only run for a maximum of 60 seconds before pausing for 30 minutes (Just a simple failsafe)
### Parts List
 * [Arduino Uno](https://www.amazon.com/gp/product/B01EWOE0UU/ref=oh_aui_search_detailpage?ie=UTF8&psc=1) or similar
     * Going to replace with the [ItsyBitsy 32uv 5V](https://www.adafruit.com/product/3677) to control over serial
     * or [Adafruit Feather 32u4 Bluefruit LE](https://www.adafruit.com/product/2829) to control via Bluetooth Low Energy
 * [Aqueon QuietFlow Pump](https://www.amazon.com/gp/product/B008F40LFC)
 * [Vertical Float Switches](https://www.amazon.com/gp/product/B00FHAEBIA)
 * [A container for ATO Water](https://www.walmart.com/ip/Aqua-Culture-Aquarium-10-gal/144433503)
 * Small plastic tubing that fits into Pump head
 * Acrylic Pieces for mounting floats (optional)
 * Heat Gun for bending acrylic pieces (optional)

---- 

## Video Camera
### Parts List
 * [Raspberry Pi Camera V2](https://www.amazon.com/gp/product/B01ER2SKFS/ref=oh_aui_search_detailpage?ie=UTF8&psc=1)
 * [Camera Flex Cable 2 Meters](https://www.amazon.com/Adafruit-Flex-Cable-Raspberry-Camera/dp/B00XW2NCKS/ref=pd_sbs_147_2?_encoding=UTF8&pd_rd_i=B00XW2NCKS&pd_rd_r=T1REECBR3CZ4HXWPQH5S&pd_rd_w=iX93Y&pd_rd_wg=8EfAy&psc=1&refRID=T1REECBR3CZ4HXWPQH5S) (Use a length that works for you)
 * [Raspberry Pi Camera Case](https://www.amazon.com/gp/product/B00UEMHMZ0/ref=oh_aui_search_detailpage?ie=UTF8&psc=1) (Choose your own)
### Setup
1. Follow the instructions at: https://www.linux-projects.org/uv4l/installation/ to install UV4L

