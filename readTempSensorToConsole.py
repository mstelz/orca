#!/usr/bin/python3

import sqlite3

import os
import time
import glob
import serial
import re

# global variables
speriod=(15*60)-1
dbname='/var/www/templog.db'

# get temerature
# returns None on error, or the temperature as a float
def get_temp():
  ser = serial.Serial('/dev/ttyACM0', 9600)
  temp = ""
  while True:
      temp = ser.readline()
      print("serial line", temp)
      numberTemp = re.decode('utf-8').findall("\d+].\d+", temp)
      print("sliced:", numberTemp)

  return numberTemp[0]

# main function
# This is where the program starts 
def main():
  #    while True:

    # get the temperature from the device file
    temperature = get_temp()
    print("temperature="+str(temperature))


if __name__=="__main__":
    main()



