<?php
$mysqli = new mysqli('localhost', 'php', 'mod3', 'calendar');

if($mysqli->connect_errno){
    printf("Connection Failed: %s\n", $mysqli->connect_error);
    exit;
}
?>