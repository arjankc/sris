<?php
	function check_email($email){
		// global $connection;
		$sql="SELECT email FROM reginfo WHERE Email='$email' LIMIT 1";
		// echo $sql;
		//echo mysql_query($sql);
		$results = mysql_query($sql);
		if(mysql_num_rows($results)>0){
			// Email address exists so it didn't returned null
			return false;
		}else{
			return true;
		}
	}

	function query($sql){
    // echo $sql;
		$resultset = mysql_query($sql);
    // print_r ($resultset);
		if(confirm_query($resultset)){
      // print_r(mysql_fetch_object($resultset));
			return mysql_fetch_object($resultset);
		}else{
			// echo "There was an error".mysql_error();
			header("Location:index.php");
			exit();
		}
	}
	function confirm_query($resultset){
    // print_r($resultset);
		if(mysql_num_rows($resultset)>0){
      // echo "string";
			return true;		
		}else{
			return false;
		}
	}
    function test_input($data)
    {
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
    }
    function check_fields(){
    	global $email;
    	global $username;

    	// echo $email;
    	if ($_SERVER["REQUEST_METHOD"] =="POST")
   {
     if(!preg_match("/^[a-zA-Z]*$/", $username))
     {
     exit("Only letter and whitespace are allowed"); 
     }
     else{
     $_session["username"]=test_input($_POST["username"]);
        }
     $_session["crn"]=test_input($_POST["crn"]);
   
      if(preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email))
      {
         $_session["email"]=test_input($email);
      }
      elseif(!check_email($email)){
       exit("Email Already exists. Use a different email address."); 
      }
      else{
      	exit("Invalid email format");
       }
     $_session["SELECTION"]=test_input($_POST["SELECTION"]);
      if(!preg_match("/^[a-zA-Z]*$/", $program))
      {
        exit("Only letter and whitespace are allowed");
      }
      else
      {
       $_session["program"]=test_input($_POST["program"]); 
      }
      $_session["password"]=test_input($_POST["password"]);
  

    }
    }
    function check_prve_loginparameter($parameter=0){
      if(!isset($_SESSION['email']) && !isset ($_SESSION['Name'])){
        header('Location:index.php');
      }else{
        if($parameter==1){
          header('Location:resources.html');
        }

      }
    }
    
?>