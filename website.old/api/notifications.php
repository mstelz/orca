<?php
  header('Access-Control-Allow-Origin: *');

  require('creds/sql.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = '';

try {
  $sql = "SELECT type FROM alert_type";

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
