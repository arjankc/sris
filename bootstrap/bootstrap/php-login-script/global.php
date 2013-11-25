<?php
/* $Id: global.php,v 1.65 2002/09/20 08:57:24 shaggy Exp $ */

session_start(); // keep above lib/user.php and functions.php
require_once 'functions.php';
require_once '../config.php'; // before session_defaults
require_once 'session_defaults.php';
require_once 'lib/user.php';

$db = db_connect();
$user = new User($db);

/////////////////////////////////////////////////////////////////////////////////////////////////
// function definitions follow

function begin_html() {
	begin_head();
	begin_body();
}

function begin_head($doctype = true) {
    echo 'Enter your template head here';
} // begin_head


function begin_body() {
    echo 'Enter your template body here';
} // begin_body

function footer() {
    echo 'Enter your footer here';
}
?>
