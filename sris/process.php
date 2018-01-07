<?php //require_once("includes/activate.php");?>
<?php 
  require_once("includes/connect.php");//connect to the database
  require_once("function.php");//access to the function.php where all functions are defined

?>
<html>
 <head>
  <title>form processing</title>
 </head>
 <body>
  <?php
  //global $data;
  //var_dump($_POST);
  foreach ($_POST as $key => $value) {//changes $_POST['name'] in to $name or can be used directly variable
    // $name = $_POST['name'];
    $$key = $value;
  }
    check_fields();//checks whether email, password,program etc..are correct or not

    $sql="INSERT INTO reginfo
     (Name, RollNo,Email,Program, Password, SELECTION)

            VALUES

            ('$username',
              '$crn',
            '$email',
            '$program',
            '$password',
            '$SELECTION')";
     query($sql);//checks whether email was already registered or not

  session_destroy();
  ?>
 </body> 
</html>