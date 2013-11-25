<?php
/* $Id: signup.php,v 1.6 2002/09/03 22:02:01 shaggy Exp $ */

	begin_html();

	define('SIGNUP_SUCCESS', 0);
	define('SIGNUP_ERROR_USERNAME_TAKEN', 1);
	define('SIGNUP_ERROR_EMAIL_TAKEN', 2);
	define('SIGNUP_ERROR_DB', 4);

	$error_messages = Array(
		SIGNUP_SUCCESS => 'Congratulations your account has been created, you can now log in.',
		SIGNUP_ERROR_USERNAME_TAKEN => 'This <strong>username</strong> has already been taken.',
		SIGNUP_ERROR_EMAIL_TAKEN => 'We already have a user registered with this <strong>email address</strong>.',
		SIGNUP_ERROR_DB => 'Your account could <strong>not</strong> be created. Try again later.',
	);

	require_once 'html_form.php';
	$form = new Form(uri_self());

	$form->addText('username', 'Username (5-20 characters)');
	$form->addPassword('password', 'Password (5-20 characters)');
	$form->addText('fullname', 'Name', ' ');
	$form->addText('email', 'Email');

	$form->addCheckbox('email_priv', 'Hide my email');

	$form->addSubmit('Sign up');

	$form->addRule('username', 'range:5:20',
		'Enter your <strong>username</strong>, between 5 and 20 characters.');
	$form->addRule('password', 'range:5:20',
		'Enter your <strong>passeword</strong>, between 5 and 20 characters.');
	$form->addRule('email', 'email', 'Not a valid <strong>email</strong>.');
	$form->addRule('email', 'required', 'Your <strong>email</strong> is required.');

	$form->addFilter('_ALL_', 'db');

	if ($form->valid()) {
		signup($form, $error_messages);
	} else {
		$form->display();
	}



function signup(&$form, &$error_messages) {
	global $db, $user;

	$err = new HTML_Form_Error($error_messages);

	$processed = $form->getProcessed();
	$email_priv = isset($processed['email_priv']) ? "'y'" : "'n'";
	$name = isset($processed['fullname']) ? $processed['fullname'] : "''";
	$cookie = $GLOBALS['user']->generateCookie();

	$sql = "INSERT INTO member " .
			"(username, password, cookie, registered, name, email, email_priv) VALUES " .
			"($processed[username], md5($processed[password]), '$cookie', CURRENT_DATE, " .
			"$name, $processed[email], $email_priv)";

	$db->pushErrorHandling(PEAR_ERROR_RETURN);
	$result = $db->query($sql);

	if (DB::isError($result)) {
		if ($result->getCode() == DB_ERROR_ALREADY_EXISTS) {
			$db->popErrorHandling();
			$sql = "SELECT id FROM member WHERE username = $processed[username]";
			$result = $db->query($sql);

			if ( $result->numRows() == 1 ) {
				$err->addError(SIGNUP_ERROR_USERNAME_TAKEN);
			}

			$sql = "SELECT id FROM member WHERE email = $processed[email]";
			$result = $db->query($sql);

			if ( $result->numRows() == 1 ) {
				$err->addError(SIGNUP_ERROR_EMAIL_TAKEN);
			}
		}

		if ( $err->isError() ) {
			echo $err->getMessage();
			$form->display();
		} else {
			$err->addError(SIGNUP_ERROR_DB);
		}
		return ;
	}

	if ($db->affectedRows() != 1) {
		$err->addError(SIGNUP_ERROR_DB);
		echo $err->getMessage();
		die ($db->getMessage());
	} else {
		echo $err->getMessage();

		$sql = "SELECT subject, message FROM mail WHERE description='signup' ";
		list($subject, $message) = $db->getRow($sql, DB_FETCHMODE_ORDERED);
		$message = str_replace('$name', $form->getValue('fullname'), $message);
		$message = str_replace('$username', $form->getValue('username'), $message);
		$message = str_replace('$password', $form->getValue('password'), $message);

		$message = mail_them($form->getValue('email'), $subject, $message);
		echo "<p>$message</p>";

		$user->_checkLogin($processed['username'], $processed['password'], true);
		
		if (isset($_SESSION['log_to'])) {
			echo '<p>You can now proceed to the <a href="' . $_SESSION['log_to'] . '">' .
				"page you were headed to</a>.</p>";
		}
	}
}

?>

