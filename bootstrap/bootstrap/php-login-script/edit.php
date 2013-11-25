<?php
/* $Id: edit.php,v 1.4 2002/07/25 21:34:53 shaggy Exp $ */

	begin_html();

	$user->membersOnly();

	require_once 'html_form.php';

	$form = new Form(uri_self());

	$form->addText('fullname', 'Name', $_SESSION['name']);
	$form->addText('email', 'Email', $_SESSION['email']);
	$form->addCheckbox('email_priv', 'Hide my email', $_SESSION['email_priv'] == 'y');

	$form->addSubmit('Save changes');

	$form->addRule('email', 'required', 'Fill in your <strong>email</strong>.');
	$form->addRule('email', 'email', 'The email format is not valid.');

	$form->addFilter('_ALL_', 'db');

	if ($form->valid() ) {
		$processed = $form->getProcessed();
		$email_priv = isset($processed['email_priv']) ? "'y'" : "'n'";

		$sql = "UPDATE member SET " .
			"name = $processed[fullname], email = $processed[email], email_priv = $email_priv " .
			"WHERE id = $_SESSION[uid]";

		$result = $db->query($sql);

		if ($db->affectedRows() == 1) {
			$message = '<p>Your account info was updated, do you want to ' .
				'<a href="/user/details/' . $_SESSION['uid'] . '">view it</a>?</p>';
		} else {
			$message = "<p>There were some problems while updating your account.<br />";
			$message .= "Please try again later and don't hit the reload button after submitting.</p>";
			$message .= $form->toHtml();
		}

		echo $message;

	} else {
		$form->display();
	}
?>


