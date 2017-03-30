<?php 
	$command = escapeshellcmd('/usr/lib/cgi-bin/webgui.py');
	$output = shell_exec($command);
	echo $output;
?>