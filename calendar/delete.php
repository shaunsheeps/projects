<?php
session_start();
require "sql.php";
header("content-type: application/json");
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

$id = $json_obj['id'];
$user = $_SESSION['username'];

$stmt = $mysqli->prepare('delete from events where id = ? and username = ? ');
$stmt->bind_param('is', $id, $user);
$stmt->execute();
if($stmt == null) {
	echo json_encode(array(
		"success" => false,
		"message" => "Incorrect event. Toughie there. Next time"
	));
}
if($stmt){
    echo json_encode(array(
		"success" => true
	));
    exit;
}
else {
	echo json_encode(array(
		"success" => false,
		"message" => "Incorrect event. Toughie there. Next time"
	));
    exit;
}
$stmt->close();


?>