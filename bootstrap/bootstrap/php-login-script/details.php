<?php
/* $Id: details.php,v 1.3 2002/09/20 14:38:45 shaggy Exp $ */

	$uid = (int) $filename; // the last part of the URI

	$sql = "SELECT username, name FROM member WHERE id = $uid";
	$result = $db->getRow($sql);

	if (!$result->username) {
		header("HTTP/1.0 404 Not Found");
		die('Member not found');
	}

	$site->setTitle("Member Details for $result->username ($result->name)");

	begin_html();

	echo $user->userDetails($uid);
?>
<p>A list of <a href="../list">all users</a> is also available.</p>