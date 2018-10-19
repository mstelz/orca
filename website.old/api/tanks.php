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

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sql = "INSERT INTO parameter_value VALUES (";
    $time = date('Y-m-d H:i:s', time());

    foreach ($_POST as $param_name => $param_val) {
      $tempSql = $sql . "1" . "," . filter($conn, $param_name) . "," . filter($conn, $param_val) . ",'" . $time ."')";
      $conn->query($tempSql);
    }

    $sql = "";
  } else {
    $sql = "SELECT * FROM tanks ORDER BY name DESC";
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
