# Controller
This README is to explain how to put together the physical components of the controller. While in development I will be using breadboards and converting them into a soldered pera-board once I feel comfortable with the layout. 

### Global Part List (Needed for all)
* [Raspberry-Pi Model 3B](https://www.amazon.com/gp/product/B01LPLPBS8/)
* [Arduino Uno R3](https://www.amazon.com/gp/product/B01EWOE0UU/)
* Jumper Wires
* Breadboards
* [Resistors](https://www.amazon.com/gp/product/B016NXK6QK)

---

## Temperature Sensor
### Parts List
* [DS18B20 Temperature Sensor](https://www.sparkfun.com/products/11050)
### Information
 Integrate with the power strip to achieve heater control based on temperature. More information to come.
### Schematic
![DS18B20 Wiring Schematic](schematics/DS18B20_Schematic.png "DS18B20 Wiring Schematic")  
### How To Setup
1. Enable 1-Wire Mode. 
  a. Via Raspberry-Pi Configuration: Go to Raspberry-Pi Configuration -> Interfaces -> and Enable **1-Wire**
  b. Manually: 
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

## Power Strip (v1)
### Parts List
 * [Two-Gang Deep Wallbox](https://www.homedepot.com/p/RACO-Two-Gang-Drawn-Handy-Box-2-1-8-in-Deep-with-1-2-and-3-4-in-KO-s-10-Pack-683SP/204855678)
 * [Two-Gang Wallplate](https://www.homedepot.com/p/Leviton-2-Gang-Midway-Duplex-Outlet-Nylon-Wall-Plate-White-R52-0PJ82-00W/202059881)
 * [Sainsmart 4 Channel Relay](https://www.amazon.com/gp/product/B0057OC5O8)
 * [16 Gauge Wire](https://www.lowes.com/pd/Southwire-25-ft-16-AWG-Stranded-Black-Gpt-Primary-Wire/3234599) (Multiple colors if possible)
 * [16 Gauge Power Cable](https://www.amazon.com/C2G-Cables-Go-25545-Universal/dp/B000068BU1/ref=sr_1_1?s=electronics&ie=UTF8&qid=1517252726&sr=1-1&keywords=C2G%2FCables+to+Go+25545+-+6ft+Universal+16AWG+Power+Cord+%28IEC320+C13+to+NEMA+5-15P%29)
 
--- 

## Wireless Power Strip (v2)
### Parts List
 * [Belkin 10-outlet Power Strip](https://www.amazon.com/gp/product/B000BVC0WO/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1)
 
--- 

## Auto Top Off System
### Parts List
 * [Aqueon QuietFlow Pump](https://www.amazon.com/gp/product/B008F40LFC)
 * [Vertical Float Switches](https://www.amazon.com/gp/product/B00FHAEBIA)
 * [A container for ATO Water](https://www.walmart.com/ip/Aqua-Culture-Aquarium-10-gal/144433503)

---- 

## Video Camera
### Parts List
 * [Raspberry Pi Camera V2](https://www.amazon.com/gp/product/B01ER2SKFS/ref=oh_aui_search_detailpage?ie=UTF8&psc=1)
 * [Camera Flex Cable 2 Meters](https://www.amazon.com/Adafruit-Flex-Cable-Raspberry-Camera/dp/B00XW2NCKS/ref=pd_sbs_147_2?_encoding=UTF8&pd_rd_i=B00XW2NCKS&pd_rd_r=T1REECBR3CZ4HXWPQH5S&pd_rd_w=iX93Y&pd_rd_wg=8EfAy&psc=1&refRID=T1REECBR3CZ4HXWPQH5S) (Use a length that works for you)
 * [Raspberry Pi Camera Case](https://www.amazon.com/gp/product/B00UEMHMZ0/ref=oh_aui_search_detailpage?ie=UTF8&psc=1) (Choose your own)

