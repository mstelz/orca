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

try{

  if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['tank'])) {
    $sql = "INSERT INTO parameter_value VALUES (";
    $time = date('Y-m-d H:i:s', time());

    $tankId = filter($conn, $_POST["tank"]);

    foreach ($_POST as $param_name => $param_val) {
      if($param_name != "tank"){
        $tempSql = $sql . $tankId . "," . filter($conn, $param_name) . "," . filter($conn, $param_val) . ",'" . $time ."')";
        $conn->query($tempSql);
      }
    }

    $sql = "";
  } else {
    $op = $_GET['op'];  

      if($op == 'types'){
        $sql = "SELECT id, name, unit FROM parameter ORDER BY name DESC";
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

function filter($conn, $data) {
  $data = trim(htmlentities(strip_tags($data)));

	if (get_magic_quotes_gpc())
    $data = stripslashes($data);

  $data = mysqli_real_escape_string($conn, $data);

	return $data;
}
?>
