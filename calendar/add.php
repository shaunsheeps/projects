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
$private = "private";

$stmt = $mysqli->prepare('insert into events (title, username, year, hour, month, day, minute, public) values (?, ?, ?, ?, ?, ?, ?, ?)');
$stmt->bind_param('ssiiiiis', $title, $user, $year, $hour, $month, $day, $minute, $private);
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