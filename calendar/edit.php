<?php
session_start();
require "sql.php";
header("content-type: application/json");
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);


$title = $json_obj['title'];
$year = $json_obj['year'];
$month = $json_obj['month'];
$day = $json_obj['day'];
$hour = $json_obj['hour'];
$minute = $json_obj['minute'];
$user = $_SESSION['username'];
$id = $json_obj['id'];



$stmt = $mysqli->prepare( 'update events set title = ?, year = ?, month = ?, day = ?, hour = ?, minute = ? where username = ? and id = ? ');
$stmt->bind_param('siiiiisi', $title, $year, $month, $day, $hour, $minute, $user, $id);
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