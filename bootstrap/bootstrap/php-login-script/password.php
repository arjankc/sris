<?php
/* $Id: password.php,v 1.3 2002/07/25 21:34:53 shaggy Exp $ */

	begin_html();

	$user->membersOnly();
	
	require_once 'html_form.php';

	$form = new Form(uri_self());

	$form->addPassword('oldpass', 'Old password');
	$form->addPassword('newpass1', 'New password');
	$form->addPassword('newpass2', 'New password again');

	$form->addSubmit('Change password');

	$form->addRule('oldpass', 'range:5:20', '<strong>Old</strong> password should be 5 to 20 characters.');
	$form->addRule('newpass1', 'range:5:20',
		'Your <strong>new</strong> password should be 5 to 20 characters.');
	$form->addRule('newpass2', 'range:5:20',
		'Your new <strong>repeated</strong> password should be 5 to 20 characters.');
	$form->addRule('newpass1', 'match:newpass2', 'Your new passwords do <strong>not</strong> match.');

	$form->addFilter('_ALL_', 'db');

	if ($form->valid() ) {
		$processed = $form->getProcessed();
		$cookie = $user->generateCookie();
		$md5pass = "'" . md5(substr($processed['oldpass'], 1, -1)) . "'";

		$sql = "UPDATE member SET " .
			"password = md5($processed[newpass1]), cookie = '$cookie' WHERE " .
			"(id = $_SESSION[uid]) AND " .
			"(password = $md5pass))";

		$result = $db->query($sql);

		if ($db->affectedRows() == 1) {
			$user->updateCookie($cookie);
			$message = '<p>Your password has been changed, you should use your new password ' .
				'from now on.</p>';
		} else {
			$message = "<p>Your password could <strong>not</strong> be changed.<br />";
			$message .= "Please verify that your old password is correct and you haven't already changed it, ";
			$message .= "then try again.</p>";
			$message .= $form->toHtml();
		}

		echo $message;
		

	} else {
		$form->display();
	}
?>


