<?php
/* $Id: functions.php,v 1.20 2002/09/15 17:44:33 shaggy Exp $ */

/*
Copyright (c) 2001, 2002 by Martin Tsachev. All rights reserved.
mailto:shaggy@members.evolt.org
http://martin.f2o.org

Redistribution and use in source and binary forms,
with or without modification, are permitted provided
that the conditions available at
http://www.opensource.org/licenses/bsd-license.html
are met.
*/

$styles = Array(
	'gray',
	'white',
	'charcoal',
	'blue',
	'clean_gray');

$now = gmdate("'Y-m-d H:i:s'");

function format_datetime($date) {
	$date = strtotime($date);
	return (date($_SESSION['style']['datetime'],
		$date + $_SESSION['GMT_offset']) . ' GMT ' . $_SESSION['GMT_offset_str']);
}


function format_date($date) {
	$date = strtotime($date);
	return date($_SESSION['style']['date'], $date);
}

function uri_self() {
	return $_SERVER['PHP_SELF'];
}

function send_cookie($name, $value) {
	if (!headers_sent()) {
		// expires in one year
		setcookie($name, $value, time() + 31104000, '/');
	}
}


function delete_cookie($name) {
	if (!headers_sent() ) {
		setcookie($name, 'bogus', time() - 3600, '/');
	}
}


$email = 'username@example.com';
$mail_params = "-f$email"; // set sender to email
$mail_headers =
	"Return-path: $email\r\n" .
	"Bcc: $email\r\n";


function mail_them($to, $subject, $message) {
	global $mail_params, $mail_headers, $email;

	$headers = $mail_headers . 'From: "John Doe" <' . "$email>\r\n";

	if (mail($to, $subject, $message, $headers, $mail_params) ) {
		$message = "Mail sent to $to.";
	} else {
		$message = "Mail was <strong>not</strong> sent to $to.";
	}
	return $message;
}

function encodeEmail($email) {
    return $email;
}
?>
