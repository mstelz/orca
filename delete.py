#!/usr/bin/python

import sqlite3
import sys
import cgi
import cgitb

dbname='/var/www/templog.db'

#main
conn=sqlite3.connect(dbname)
curs=conn.cursor()
curs.execute("DELETE FROM temps WHERE temp > 80")
curs.execute("SELECT * FROM temps")
conn.commit()
rows=curs.fetchall()
print(rows)


conn.close()
