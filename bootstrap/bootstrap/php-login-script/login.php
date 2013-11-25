<?php
/* $Id: login.php,v 1.7 2002/09/03 22:02:01 shaggy Exp $ */

	if ($_SESSION['logged']) {
		redirect('/user/');
	}

	require_once 'html_form.php';
	$form = new Form(uri_self());

	$form->addText('username', 'Username');
	$form->addPassword('password', 'Password');
	$form->addCheckbox('remember', 'Remember me');

	$form->addSubmit('Log in');

	$form->addRule('username', 'range:5:20', 'Enter your username, 5 - 20 characters.');
	$form->addRule('password', 'range:5:20', 'Enter your password, 5 - 20 characters.');

	$form->addFilter('_ALL_', 'db');

	if ($form->valid()) {
		$processed = $form->getProcessed();
		$remember = $form->getValue('remember');

		if (!isset($_SESSION['login'])) {
			$_SESSION['login'] = 3;
		} else {
			if ($_SESSION['login'] <= 1) {
				die('You cannot log in.');
			}
		}

		if ($user->_checkLogin($processed['username'], $processed['password'], $remember)) {
			if (isset($_SESSION['log_to'])) {
				redirect($_SESSION['log_to']);
			} else {
				redirect('/user/');
			}
		} else {
			failed($form);
		}

	} else {
		begin_html();
		$form->display();
	}

	function failed(&$form) {
		begin_html();
		echo "<p>You could not be logged in, $_SESSION[login] attempts left.</p>
		<p>Possible reasons for this are:</p>

		<ul>
			<li>Your username and/or password is not correct.
				Check your username and password and then try again.</li>
			<li>You haven't" .
			'<a href="/user/signup" title="Sign up for an account, it is free">
			registered</a> yet</li>
			<li>Your account is temporarily disabled.</li>
			<li>You are trying to login simultaneously from two different computers or
			two browsers on the same computer.</li>
		</ul>';

		$form->display();
	}
?>

