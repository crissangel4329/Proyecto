<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "agenda_2021cii_65";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $basedatos );

// Check connection
if (!$conn) {
  die("Connection failed =/ : " . mysqli_connect_error());
}
echo "Connected successfully =) ";

?>
