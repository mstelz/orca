<html>
  <head>
   <title>PiVid</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
	<script type="text/javascript">
		function on(){
			document.getElementById('video').src="http://www.mikesfishtank.com:8080/stream/video.mjpeg";
		}
		function off(){
			document.getElementById('video').src="";
		}
	</script>
  </head>		
  <body>
	<h1>Mike's Fish Tank</h1>
	<button onclick="on()">On</button>
	<button onclick="off()">Off</button
	<br /><br/>
   	<img id="video" src="">
<?php 
	$command = escapeshellcmd('/usr/lib/cgi-bin/webgui.py');
	$output = shell_exec($command);
	echo $output;
?>	

  </body>
</html>