<?php	
	$shellCmd = '/usr/lib/cgi-bin/webgui.py';

	if (!empty($_GET['int'])){
		$shellCmd = $shellCmd . ' ' . $_GET['int'];
	}

	$command = escapeshellcmd($shellCmd);
	$output = shell_exec($command);
	echo $output;
?>
