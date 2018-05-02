#!/usr/bin/python3

import MySQLdb as mysql
import smtplib
from email.mime.text import MIMEText

import os
import time
import glob
import serial
import re

# global variables
speriod=(15*60)-1

#Sets up the device on the system and returns the filename
def find_ds18b20():
        # sets up the sensor with Raspbian's built in driver
        os.system('modprobe w1-gpio')
        os.system('modprobe w1-therm')

        #find the file that was created throught the setup above
        base_dir = '/sys/bus/w1/devices/'
        device_folder = glob.glob(base_dir + '28*')[0]
        device_file = device_folder + '/w1_slave'
        return device_file

# store the temperature in the database
def log_temperature(temp):

    conn=mysql.connect("DB-HOST", "USER", "PASS", "DB")
    curs=conn.cursor()

    curs.execute("INSERT INTO temperature(tank_id, temperature) values(1, %s)", (float(temp),))

    # commit the changes
    conn.commit()

    conn.close()

# send a text alert email if the temp is outside of set bounds
def send_alert(temp):
    msg = MIMEText('Temperature is %s F' % temp)
    msg['Subject'] = 'Tank Warning'
    msg['From'] = 'monitor@mikesfishtank.com'
    msg['To'] = '555555555@txt.att.net'

    conn = smtplib.SMTP('SMTP-HOST', 587)
    conn.login('email-login', 'email-pass')

    try:
        conn.sendmail('monitor@mikesfishtank.com', '5555555555@txt.att.net', msg.as_string())
    finally:
        conn.quit()

# display the contents of the database
def display_data():

    conn=sqlite3.connect(dbname)
    curs=conn.cursor()

    for row in curs.execute("SELECT * FROM temps"):
        print(str(row[0])+"	"+str(row[1]))

    conn.close()



# get temerature
# returns None on error, or the temperature as a float
def get_temp(sensorName):
    f = open(sensorName, 'r')
    lines = f.readlines()
    f.close()

    if lines[0].strip()[-3:] != 'YES':
        return None
    temperature_start_pos = lines[1].find('t=')

    if temperature_start_pos == -1:
        return None

    temp_string = lines[1][temperature_start_pos+2:]
    temp_c = float(temp_string) / 1000.0

    if temp_c != None:
        temp_f = convert_c_to_f(temp_c)
        print("%.1f C, %.1f F" % (temp_c, temp_f))

    return temp_f

def convert_c_to_f(temp_c):
        return temp_c * 9.0 / 5.0 + 32.0

# main function
# This is where the program starts 
def main():
    #while True:

    sensorName = find_ds18b20()

    # get the temperature from the device file
    temperature = get_temp(sensorName)
    print("temperature="+str(temperature))

    # Store the temperature in the database
    log_temperature(temperature)

    if temperature > 80 or temperature < 77:
        send_alert(temperature)

    # display the contents of the database
    #display_data()

#        time.sleep(speriod)


if __name__=="__main__":
    main()



