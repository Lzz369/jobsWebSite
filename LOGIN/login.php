<?php

// $link = new PDO("mysql: host=localhost; dbname=pruebas","root","");

if(isset($_POST["send"])){


    $content = trim(file_get_contents("php://input"));

//this content should be a json already
//{"first_name":"first name","last_name":"last name"}

//if want to access values
$_arr = json_decode($content, true);
// $first_name = $_arr["first_name"];
// $last_name = $_arr["last_name"];

//do what ever you want to do with first_name and last_name

//after you are done, be sure to send back a json

// $texto_recibido = file_get_contents('php://input');


$email = htmlentities(htmlspecialchars($_POST["email"]));
$password = htmlentities(htmlspecialchars($_POST["password"]));

echo "volando";

// echo $texto_recibido;


echo json_encode(['success'=>true]);
exit()
}

// header("location: login.php");



?>