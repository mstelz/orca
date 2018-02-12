<?php
  header('Access-Control-Allow-Origin: *');
  require('creds/sql.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$op = $_GET['op'];

$sql = '';

try {
  if($op == 'current'){
    $sql = "SELECT common_name, latin_name, acquisition_date, count, alive, dead, missing, cost_per_unit, type FROM stock_list WHERE tank_id = 1 ORDER BY type";
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
