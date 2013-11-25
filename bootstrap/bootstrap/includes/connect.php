<?php

//ob
ob_start();

//session
// session_start();

//connect to database
$error = "Problem connecting";
$connection = mysql_connect('localhost','root','') or die($error);
mysql_select_db('register') or die($error);

?>