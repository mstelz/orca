#include <Arduino.h>
#include <SPI.h>
#include "Adafruit_BLE.h"
#include "Adafruit_BluefruitLE_SPI.h"
#include "Adafruit_BluefruitLE_UART.h"

#include "BluefruitConfig.h"

#if SOFTWARE_SERIAL_AVAILABLE
  #include <SoftwareSerial.h>
#endif

/* ...hardware SPI, using SCK/MOSI/MISO hardware SPI pins and then user selected CS/IRQ/RST */
Adafruit_BluefruitLE_SPI ble(BLUEFRUIT_SPI_CS, BLUEFRUIT_SPI_IRQ, BLUEFRUIT_SPI_RST);

// A small helper
void error(const __FlashStringHelper*err) {
  Serial.println(err);
  while (1);
}

/* The service information */

int32_t serviceId;
int32_t charsLoc[8];
int pins[8] = {0, 1, 2, 3, 5, 6, 9, 10};
/**************************************************************************/
/*!
    @brief  Sets up the HW an the BLE module (this function is called
            automatically on startup)
*/
/**************************************************************************/
void setup(void)
{
  for(int i=0; i < 8; i++) {
    pinMode(pins[i], OUTPUT);
  }

  boolean success;

  Serial.begin(115200);
  Serial.println(F("Setup for Power Controller"));
  Serial.println(F("---------------------------------------------------"));

  randomSeed(micros());

  /* Initialise the module */
  Serial.print(F("Initialising the Bluefruit LE module: "));

  if ( !ble.begin(VERBOSE_MODE) )
  {
    error(F("Couldn't find Bluefruit, make sure it's in CoMmanD mode & check wiring?"));
  }
  Serial.println( F("OK!") );

  /* Perform a factory reset to make sure everything is in a known state */
  Serial.println(F("Performing a factory reset: "));
  if (! ble.factoryReset() ){
       error(F("Couldn't factory reset"));
  }

  /* Disable command echo from Bluefruit */
  ble.echo(false);

  Serial.println("Requesting Bluefruit info:");
  /* Print Bluefruit information */
  ble.info();

  /* Change the device name to make it easier to find */
  Serial.println(F("Setting device name to 'Power Strip v1': "));

  if (! ble.sendCommandCheckOK(F("AT+GAPDEVNAME=Power Strip v1")) ) {
    error(F("Could not set device name?"));
  }

  /* Add the Heart Rate Service definition */
  /* Service ID should be 1 */
  Serial.println(F("Adding the power control service definition (UUID = 0x8000): "));
  success = ble.sendCommandWithIntReply( F("AT+GATTADDSERVICE=UUID=0x8000"), &serviceId);
  if (! success) {
    error(F("Could not add Power service"));
  }

  /* Add the Outlet 1 characteristic */
  Serial.println(F("Adding the Outlet 1 status characteristic (UUID = 0x8001): "));
  success = ble.sendCommandWithIntReply( F("AT+GATTADDCHAR=UUID=0x8001, PROPERTIES=0x0A, MIN_LEN=1, DATATYPE=AUTO, VALUE=on, DESCRIPTION=Outlet 1 Status"), &charsLoc[0]);
    if (! success) {
    error(F("Could not add OUT1 characteristic"));
  }

  /* Add the Heart Rate Measurement characteristic */
  Serial.println(F("Adding the Outlet 2 status characteristic (UUID = 0x8002): "));
  success = ble.sendCommandWithIntReply( F("AT+GATTADDCHAR=UUID=0x8002, PROPERTIES=0x0A, MIN_LEN=1, DATATYPE=AUTO, VALUE=0, DESCRIPTION=Outlet 2 Status"), &charsLoc[1]);
    if (! success) {
    error(F("Could not add OUT2 characteristic"));
  }

  /* Add the Heart Rate Measurement characteristic */
  Serial.println(F("Adding the Outlet 3 status characteristic (UUID = 0x8003): "));
  success = ble.sendCommandWithIntReply( F("AT+GATTADDCHAR=UUID=0x8003, PROPERTIES=0x0A, MIN_LEN=1, DATATYPE=AUTO, VALUE=0, DESCRIPTION=Outlet 3 Status"), &charsLoc[2]);
    if (! success) {
    error(F("Could not add OUT3 characteristic"));
  }

  /* Add the Heart Rate Measurement characteristic */
  Serial.println(F("Adding the Outlet 4 status characteristic (UUID = 0x8004): "));
  success = ble.sendCommandWithIntReply( F("AT+GATTADDCHAR=UUID=0x8004, PROPERTIES=0x0A, MIN_LEN=1, DATATYPE=AUTO, VALUE=0, DESCRIPTION=Outlet 4 Status"), &charsLoc[3]);
    if (! success) {
    error(F("Could not add OUT4 characteristic"));
  }

  /* Add the Heart Rate Measurement characteristic */
  Serial.println(F("Adding the Outlet 5 status characteristic (UUID = 0x8005): "));
  success = ble.sendCommandWithIntReply( F("AT+GATTADDCHAR=UUID=0x8005, PROPERTIES=0x0A, MIN_LEN=1, DATATYPE=AUTO, VALUE=0, DESCRIPTION=Outlet 5 Status"), &charsLoc[4]);
    if (! success) {
    error(F("Could not add OUT5 characteristic"));
  }

  /* Add the Heart Rate Measurement characteristic */
  Serial.println(F("Adding the Outlet 6 status characteristic (UUID = 0x8006): "));
  success = ble.sendCommandWithIntReply( F("AT+GATTADDCHAR=UUID=0x8006, PROPERTIES=0x0A, MIN_LEN=1, DATATYPE=AUTO, VALUE=0, DESCRIPTION=Outlet 6 Status"), &charsLoc[5]);
    if (! success) {
    error(F("Could not add OUT6 characteristic"));
  }

  /* Add the Heart Rate Measurement characteristic */
  Serial.println(F("Adding the Outlet 7 status characteristic (UUID = 0x8007): "));
  success = ble.sendCommandWithIntReply( F("AT+GATTADDCHAR=UUID=0x8007, PROPERTIES=0x0A, MIN_LEN=1, DATATYPE=AUTO, VALUE=0, DESCRIPTION=Outlet 7 Status"), &charsLoc[6]);
    if (! success) {
    error(F("Could not add OUT7 characteristic"));
  }

  /* Add the Heart Rate Measurement characteristic */
  Serial.println(F("Adding the Outlet 8 status characteristic (UUID = 0x8008): "));
  success = ble.sendCommandWithIntReply( F("AT+GATTADDCHAR=UUID=0x8008, PROPERTIES=0x0A, MIN_LEN=1, DATATYPE=AUTO, VALUE=0, DESCRIPTION=Outlet 8 Status"), &charsLoc[7]);
    if (! success) {
    error(F("Could not add OUT8 characteristic"));
  }

  

  /* Add the Heart Rate Service to the advertising data (needed for Nordic apps to detect the service) */
  Serial.print(F("Adding Power Control Service UUID to the advertising payload: "));
  ble.sendCommandCheckOK( F("AT+GAPSETADVDATA=02-01-06-05-02-0d-18-0a-18") );

  /* Reset the device for the new service setting changes to take effect */
  Serial.print(F("Performing a SW reset (service changes require a reset): "));
  ble.reset();

  Serial.println();
}

/** Send randomized heart rate data continuously **/
void loop(void)
{
 /* Command is sent when \n (\r) or println is called */
 /* AT+GATTCHAR=CharacteristicID,value */

 for(int i=0; i < 8; i++) {
    int32_t response;
    String command = "AT+GATTCHAR=" + String(charsLoc[i]);
    ble.sendCommandWithIntReply(command.c_str(), &response);
  
    if(response == 1) {
      digitalWrite(pins[i], LOW);   // turn the LED on (HIGH is the voltage level)  
    } else {
      digitalWrite(pins[i], HIGH);    // turn the LED off by making the voltage LOW  
    }
 }

//  /* Check if command executed OK */
//  if ( !ble.waitForOK() )
//  {
//    Serial.println(F("Failed to get response!"));
//  }


  /* Delay before next measurement update */
  delay(100);
}
