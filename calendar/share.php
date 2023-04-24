<?php
session_start();
require "sql.php";
header("content-type: application/json");
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

$user = $_SESSION['username'];


$stmt = $mysqli->prepare('update events set public =  from events where username = ?');
$stmt->bind_param('s', $user);
$stmt->execute();
$stmt->bind_result($title, $id, $year, $hour, $month, $day, $minute);


$events = array();
while($stmt->fetch()){
	array_push($events, array(htmlentities($title), htmlentities($id), htmlentities($year), htmlentities($month), htmlentities($hour), htmlentities($day), htmlentities($minute)));
}
$stmt->close();
    echo json_encode(array(
		"success" => $events
	));
exit;
?>