<?php
/* $Id: logout.php,v 1.1.1.1 2002/07/16 20:27:38 shaggy Exp $ */

	delete_cookie('Login');
	session_defaults();

	begin_html();
?>

<p>You have successfully been logged out from your account.
Enjoy the web and come back for more.</p>
