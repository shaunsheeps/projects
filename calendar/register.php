<?php
require "sql.php";
header("content-type: application/json");
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);


$username = $json_obj['newusername'];
$password = $json_obj['newpassword'];
$hash = password_hash($password, PASSWORD_BCRYPT);
$stmt = $mysqli->prepare('insert into userinfo (username, password) values (?, ?)');
$stmt->bind_param('ss', $username, $hash);
$stmt->execute();
$stmt->close();
	echo json_encode(array(
		"success" => true
	));
	exit;
?>