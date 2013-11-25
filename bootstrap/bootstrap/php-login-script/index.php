<?php
/* $Id: user.php,v 1.4 2002/09/06 21:08:56 shaggy Exp $ */

	begin_html();

	$user->membersOnly();

	echo
	'<ul>
		<li>Edit <a href="/user/edit">profile</a></li>
		<li>Change your <a href="/user/password">password</a></li>
	</ul>';
?>
