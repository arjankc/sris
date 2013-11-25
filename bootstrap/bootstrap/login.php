<?php session_start();?>
<?php 
	require_once("includes/connect.php");
	require_once("function.php");
	foreach ($_POST as $key => $value) {
		$$key = $value;
	}
?>
<html>
 <head>
  <title>Log In</title>
 </head>
 <body>
  <?php
   if(isset($_POST['submit'])){$errors=array();}
    $_session["email"]=test_input($_POST['email']);
    $_session["password"]= test_input($_POST['password']);
     if(empty($errors)){
     	$sql="SELECT * FROM reginfo WHERE Email='$email' AND Password='$password'";
     	// $result_set=mysql_query($query);
     	// confirm_query($result_set);
     	$found_user = query($sql);
      // print_r($found_user);
     	if($found_user){
     		$_SESSION['email']=$found_user->email;
     	  $_SESSION['Name']=$found_user->Name;
        $_SESSION['Program']=$found_user->Program;
        $_SESSION['LoggedIn']=true;
     		header('Location:resources.html');
        exit();
     	}
     	else{
     		$message="email/password combination mismatched";
     	}
     }
    else{
       $Email="";
       $Password="";
     }
?>
