sudo crontab -u www-data -e 	(not currently working)
sudo crontab -u root -e 	(currently working)

to see crons run use: grep 'CRON' .*\(www-data\) /var/log/syslog

/usr/lib/cgi-bin/webgui.py 	(cgi-bin for python)
/var/www/ 			(apache files)