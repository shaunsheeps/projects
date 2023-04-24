<?php
session_start();
require "sql.php";
header("content-type: application/json");
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);


$user = $_SESSION['username'];
$public = $json_obj['public'];


$stmt = $mysqli->prepare('update events set public = "public" where username = ? ');
$stmt->bind_param('s', $user);
$stmt->execute();
if($stmt){
    echo json_encode(array(
		"success" => true
	));
	exit;
}
else {
	echo json_encode(array(
		"success" => false,
		"message" => "Could not edit. Toughie there. Next time"
	));
	exit;
}
$stmt->close();

?>