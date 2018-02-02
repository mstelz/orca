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

try{
  if($op == 'types'){
    $sql = "SELECT id, name FROM parameter ORDER BY name DESC";
  } elseif ($op == 'recent'){
    // Need to set a limit of 2 days worth. May need to do another query to inner select
    $sql = "SELECT parameter.name, parameter.unit, pv.value, pv._timestamp
              FROM parameter
            INNER JOIN parameter_value AS pv
              ON parameter.id = pv.parameter_id
            JOIN 
              (SELECT DISTINCT _timestamp FROM parameter_value AS b ORDER BY _timestamp DESC LIMIT 2) 
              AS c ON pv._timestamp IN(c._timestamp)";

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
