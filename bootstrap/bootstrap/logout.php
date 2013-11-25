<?php
 session_start();
 session_unset($_SESSION['email']);
 session_unset($_SESSION['Program']);
 session_unset($_SESSION['Name']);
 header('Location:index.php');
?>