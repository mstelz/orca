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

# store the temperature in the database
def log_temperature(temp):

    conn=sqlite3.connect(dbname)
    curs=conn.cursor()

    curs.execute("INSERT INTO temps values(datetime('now'), (?))", (temp,))

    # commit the changes
    conn.commit()

    conn.close()


# display the contents of the database
def display_data():

    conn=sqlite3.connect(dbname)
    curs=conn.cursor()

    for row in curs.execute("SELECT * FROM temps"):
        print(str(row[0])+"	"+str(row[1]))

    conn.close()



# get temerature
# returns None on error, or the temperature as a float
def get_temp():
  ser = serial.Serial('/dev/ttyACM0', 9600)
  temp = ""
  while "Temperature is:" not in temp:
      temp = ser.readline()
      #print("serial line", temp)
      numberTemp = re.findall("\d+\.\d+", temp)
      #print("sliced:", numberTemp)

  return numberTemp[0]

# main function
# This is where the program starts 
def main():
  #    while True:

    # get the temperature from the device file
    temperature = get_temp()
    print("temperature="+str(temperature))

    # Store the temperature in the database
    log_temperature(temperature)

    # display the contents of the database
    #display_data()

#        time.sleep(speriod)


if __name__=="__main__":
    main()



