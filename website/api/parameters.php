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
    $sql = "SELECT parameter.name, parameter.unit, parameter_value.value, parameter_value._timestamp
              FROM parameter
            INNER JOIN parameter_value
              ON parameter.id = parameter_value.parameter_id";
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
