<?php
session_start();
include ('function.php');

if(isset($_SESSION['LoggedIn']) && $_SESSION['LoggedIn'])
  check_prve_loginparameter(1);
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Student Resource and Information System</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Student Resource and Information System Login and Registration Form" />
    <meta name="keywords" content="" />
    <meta name="author" content="Curl Designs" />
    <link rel="shortcut icon" href="assets/ico/favicon.png">
    <link rel="favicon" href="favicon.ico"> 
 
    <!-- CSS -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">

    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet">
    <link href="assets/css/main" rel="stylesheet">
    <style type="text/css">

      /* Sticky footer styles
      -------------------------------------------------- */

      html,
      body {
        height: 100%;
        /* The html and body elements cannot have any padding or margin. */
      }

      /* Wrapper for page content to push down footer */
      #wrap {
        min-height: 100%;
        height: auto !important;
        height: 100%;
        /* Negative indent footer by it's height */
        margin: 0 auto -60px;
      }

      /* Set the fixed height of the footer here */
      #push,
      #footer {
        height: 60px;
      }
      #footer {
        background-color: #f5f5f5;
      }

      /* Lastly, apply responsive CSS fixes as necessary */
      @media (max-width: 767px) {
        #footer {
          margin-left: -20px;
          margin-right: -20px;
          padding-left: 20px;
          padding-right: 20px;
        }
      }



      /* Custom page CSS
      -------------------------------------------------- */
      /* Not required for template or sticky footer method. */

      #wrap > .container {
        padding-top: 60px;
      }
      .container .credit {
        margin: 20px 0;
      }

      code {
        font-size: 80%;
      }

    </style>
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="assets/js/html5shiv.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
                    <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">
                                   <link rel="shortcut icon" href="assets/ico/favicon.png">
  </head>
  <body>
      <!-- Part 1: Wrap all page content here -->
    <div id="wrap">
   <div class="container-fluid">  
          <div class ="image">
             <div class="page-header">
        <h1><p align="center"><a data-toggle="tooltip" data-placement="bottom" title="Student Resource and Information System" data-original-title="sris">sris</a> <small> an intutive tool for teaching and learning</small></h1></p>      </div>
        <p align="center" style="margin-top: 8%;"><img src="images/sris_logo.jpg" alt="Student Resource and Information System" height="200" width="200" class="img-polaroid"></p>
      </div>
          <div class="container-fluid">
            <div class="span2">

                <!--modal content -->
          <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h3 id="myModalLabel">Student Resource and Information System</h3>
            </div>
            <div class="modal-body">
              <h4>Introduction</h4>
              <p>Sris the final year project by Arjan, Ashok and Marshal.</p>

              <h4>What is sris?</h4>
              <hr>
              <h4>Our Proposal Defense Presentation Script</h4>
              <p>hello everybody,<br>
                Today I Arjan kc, and my freinds Ashok Ghimire and Marshal Babu Basnet are here to present our final year project titled 'Student Resource and Information System'.<br>
              First I would like to begin with the background and statement of problems.<br>
              Since human civilization began we have always been looking forward towards innovation and we have come accross many different technologies in many different fields. But, regarding class rooms there have been very less innovations and transformations. We can see that we are still in the 21st century using this whiteboard which is nothing but just a board, and we would like to transform this very whiteboard to something that is interactive and can be used to present ideas more efficiently.<br>
              I would like to call upon my friend Ashok Ghimire to explain the Objective and scope of the project.<br></p>
            <p>
            The objective and scope of our project is to share ideas in efficient manner. We can share subject matter in efficient manner. To make class room time interactive and valuable. We can share things in less time and in an interactive way. To minimize distance between class and outer reality by taking visual thinking in effect, we can use video tutorials in presenting the subject matter. In our project we aim to manage the resources needed for the students such as notes and the tutorials in electronic form. We also store academic information related to the students. To implement cloud based web app that is acessible to the student and teacher alike anwhere in the world. We use a server in which all the resources and the acedemic progress of the student is stored and we can access those resources.
            The applications of our project is in the universities, we can present any project or research papers in an interactive way. In busniess for sharing ideas among staffs. We can use our system for representing progress of busniess and the ideas among staffs of the group. In any field where ideas has to be shared like education, seminars, expos etc.<br>
            and I would like to call upon Marshal.<br>
            Thank you.</p>
            <p>
            This is the block diagram of our project and by interfacing these devices we are trying to make the classes more interactive and interesting. First this is the cloud which is an online storage. Here, the students' resources and information are stored in the cloud and with the help of raspberry pi and projector we project the data stored in the cloud on the white board. and only three our hardware part only three Raspberry Pi, Projector and the digital ink enabled device, or any smartphone.. whatever.. and whiteboard is a web application.<br>
            and about Raspberry Pi, this is a 35$ computer with the size of an ATM card and the specifications of this Raspberry pi are it has audio and video ports, SD card slot and HDMI ports. Whenever, teacher writes his notes or lectures on the digital ink enabled device immidiately it will be displayed on the whiteboard.<br>
            and Methodology and design requirements.<br>
            We have to first design website that contains resources and information of the students. Information means attendance, marks of the students and resources means notes, lecture classes of teachers. Most importanly we need to work on the database system for the management of resources. We can use mySQL as well as other database systems that we preffer if we need. and we need to use latest web designing tools for the website HTML5, CSS3, Jquery, ajax and other server side scripting programming languages. and our next job is to interface devices, projector with raspberry pi and project the web app from the cloud.<br>
            The instructor can enter into the whiteboard through an ink enabled device or his smartphone.</p>
            <P>Feasibility study.<br>
            We use whiteboard app rather than the digital board display because it is virtual and it is easy and it is more cheaper than digital board display and it is not costly to implement and we do not use conventional laptop for connectivity because 35$ computer can replace the laptop.
            Now the testing part.<br>
            We have some plans to test our project. In our application we need to test on the go as the appication development goes on. Later on in the beta testing stage we will require few student volunteers and teacher too for project testing and user experience rating. After completion of beta test and its results we will reconsider modifying the project.<br>
            In the expected output we will be expecting to change how teaching and learning process is carried out in our country because our system will be implementable and cost effective hence we can expect to change how things are being run around here.<br>
            Finally we have our blog which is sris3106.tumblr.com you can follow us there and get further informations and recent happenings about our project.<br>
            If any questions then please..</p>
            </div>
            <div class="modal-footer">
              <button class="btn" data-dismiss="modal">Okay Got It!</button>
              <button class="btn btn-primary">Email us</button>
            </div>
          </div>
        
          <div class="btn-group" align="center" style="margin-top: 10%;margin-left: 245%;">
            <a data-toggle="modal" href="#myModal" class="btn btn-info btn-large">What is sris?</a>
            <a data-toggle="modal" href="#loginform" class="btn btn-success btn-large">&nbsp;&nbsp;&nbsp;Sign In&nbsp;&nbsp;&nbsp;&nbsp;</a>
            <a data-toggle="modal" href="#registrationform" class="btn btn-primary btn-large">&nbsp;&nbsp;Sign Up&nbsp;&nbsp;</a>
          </div></div>
        
        </div>
    </div> 
                <!--modal content -->
          <div id="loginform" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h3 id="myModalLabel">Student Resource and Information System</h3>
            </div>
            <div class="modal-body">
                  <div class = "login"> <br>
                     <br> <i class="icon-music"></i> Already a member?<br>
                    Please enter your credentials to login!<br><br>
                    
                    <form class="form-horizontal" action ="login.php" method="post">
                    <!--the code bellow is used to display the message of the input validation-->
                      <div class="control-group">
                        <label class="control-label" for="inputEmail">Email</label>
                        <div class="controls">
                          <input type="text" id="inputEmail" name="email" placeholder="Email" class="input-large" required>
                        </div>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="inputPassword">Password</label>
                          <div class="controls">
                            <input type="password" id="inputPassword" name="password" placeholder="Password" required>
                          </div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                          <label class="checkbox">
                            <input type="checkbox"> Remember me
                          </label>
                         </div>
                      </div>
                         <button type="submit" class="btn btn-info">Sign in</button>
                         <button type="submit" class="btn btn-primary">Sign In using facebook</button>
                         
                        </div>
                    </form>      
            </div>
          </div>
          </div>
        </div>
    </div> 
      <div class="span4"><br>
          <div id="registrationform" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h3 id="myModalLabel">Student Resource and Information System</h3>
            </div>
            <div class="modal-body">
                <div class ="registration-form">  
                  Sign Up!! and be the first to experience change!  <br><br>
                  <form action ="process.php" method="post">
                  <form class="form-horizontal">
                  <div class="control-group">
                    <label class="control-label" for="inputname">Name</label>
                    <div class="controls">
                      <input type="text" name="username"placeholder="Enter your full name" required>
                    </div>
                    <div class="control-group">
                    <label class="control-label" for="inputcrn">RollNo</label>
                    <div class="controls">
                      <input type="text" name="crn"placeholder="Enter your RollNo" required>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label" for="inputEmail">Email</label>
                    <div class="controls">
                      <input type="text" name="email" placeholder="Enter your Email address" required>
                    </div>
                    <div class="control-group">
                    <label class="control-label" for="inputProgram">Program</label>
                    <div class="controls">
                      <input type="text" name="program" placeholder="Enter your Progarm" required>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label" for="inputPassword">Password</label>
                      <div class="controls">
                        <input type="password" name="password" placeholder="Desired Password" required>
                      </div>
                  </div>
                  <div class="control-group">
                    <div class="controls">
                      <label class="radio">
                          <input type="radio" name="SELECTION" id="selection" value="teacher" checked> Teacher
                      </label>
                      <label class="radio">
                      <input type="radio" name="SELECTION" id="selection1" value="Student"> Student
                      </label>
                     </div>
                  </div>
                     <button type="submit" class="btn btn-success">Sign Up</button>
                     <button type="submit" class="btn btn-primary">Sign Up using facebook</button>
                </form>
                </div>
              </div>
          </div>
</div>
    <div id="footer">
      <div class="container">
        <p class="muted credit" align = "center"> (c) 2013 <a href="http://sris.com">sris</a> and <a href="http://sris3106.tumblr.com">sris blog</a>.</p>
      </div>
    </div>

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap-transition.js"></script>
    <script src="assets/js/bootstrap-alert.js"></script>
    <script src="assets/js/bootstrap-modal.js"></script>
    <script src="assets/js/bootstrap-dropdown.js"></script>
    <script src="assets/js/bootstrap-scrollspy.js"></script>
    <script src="assets/js/bootstrap-tab.js"></script>
    <script src="assets/js/bootstrap-tooltip.js"></script>
    <script src="assets/js/bootstrap-popover.js"></script>
    <script src="assets/js/bootstrap-button.js"></script>
    <script src="assets/js/bootstrap-collapse.js"></script>
    <script src="assets/js/bootstrap-carousel.js"></script>
    <script src="assets/js/bootstrap-typeahead.js"></script>
    <script src="js/knockout-2.2.0.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>