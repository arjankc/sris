<?php
/* $Id: session_defaults.php,v 1.13 2002/09/14 13:31:13 shaggy Exp $ */

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

if (!isset($_SESSION['uid']) ) { // we don't have session at all
	session_defaults();
}

function session_defaults() {
	$_SESSION['logged'] = false;
	$_SESSION['uid'] = 'NULL';
	$_SESSION['username'] = '';
	$_SESSION['cookie'] = 0;
	$_SESSION['remember'] = false;
	$_SESSION['permission'] = '00-not-logged';
	$_SESSION['registered'] = '0000-00-00';
	$_SESSION['last_logged'] = null;
	$_SESSION['email_priv'] = 'y';

	$_SESSION['name'] = '';
	$_SESSION['email'] = '';
}
?>
