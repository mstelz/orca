<?php
  header('Access-Control-Allow-Origin: *');
  require('creds/sql.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$interval = $_GET['interval'];

$sql = '';

try{
  if($interval == 'last'){
    $sql = "SELECT * FROM temperature ORDER BY _timestamp DESC LIMIT 1";
  } elseif (is_numeric($interval)){
    $sql = "SELECT tank_id, temperature, _timestamp FROM temperature WHERE _timestamp >= DATE_SUB(NOW(), INTERVAL {$interval} HOUR) AND _timestamp <= NOW()";
  } else {
    throw new \Exception("Error Processing Request", 1);
  }

  if(!empty($sql)){
    $result = $conn->query($sql);

    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }

    $conn->close();
    print json_encode($rows);
  }
}
catch(Exception $e){
  $conn->close();
  print $e;
}
?>
