<?php
/* $Id: user.php,v 1.20 2002/09/15 11:06:02 shaggy Exp $ */

/*
Copyright (c) 2001, 2002 by Martin Tsachev. All rights reserved.
mailto:martin@f2.org
http://martin.f2o.org

Redistribution and use in source and binary forms,
with or without modification, are permitted provided
that the conditions available at
http://www.opensource.org/licenses/bsd-license.html
are met.
*/

class User {
	var $db = null; // PEAR::DB pointer
	var $date; // current date GMT
	var $id = 0; // the current user's id

	function User(&$db) {
		$this->db = $db;

		if ($_SESSION['logged']) {
			$this->_checkSession();
		} elseif ( isset($_COOKIE['Login']) ) {
			$this->_checkRemembered($_COOKIE['Login']);
		}
	}


	function generateCookie() {
		$cookie = mt_rand(1, mt_getrandmax());
		$cookie = md5(uniqid($cookie));
		return $cookie;
	}


	function updateCookie($cookie, $force = false) {
		$_SESSION['cookie'] = $cookie;
		if ($_SESSION['remember'] or $force) {
			$cookie = serialize(array($_SESSION['username'], $cookie));
			send_cookie('Login', $cookie);
		}
	}


	function _checkLogin($username, $password, $remember) {
		$md5pass = "'" . md5(substr($password, 1, -1)) . "'";
		$sql = "SELECT * FROM member WHERE " .
			"(username = $username) AND " .
			"(password = $md5pass) AND " .
			"(permission != '00-deny')";

		$result = $this->db->getRow($sql);

		if (is_object($result)) {
			$this->_setSession($result, $remember);
			return true;
		} else {
			$_SESSION['login']--;
			$this->_logout();
			return false;
		}
	}


	function _checkSession() {
		$username = $this->db->quote($_SESSION['username']);
		$cookie = $this->db->quote($_SESSION['cookie']);
		$session = $this->db->quote(session_id());
		$ip = $this->db->quote($_SERVER['REMOTE_ADDR']);

		$sql = "SELECT * FROM member WHERE " .
			"(username = $username) AND (cookie = $cookie) AND " .
			"(session = $session) AND (ip = $ip) AND (permission != '00-deny')";

		$result = $this->db->getRow($sql);

		if (is_object($result)) {
			$this->_setSession($result, false, false);
		} else {
			$this->_logout();
		}
	}


	function _checkRemembered($cookie) {
		list($username, $cookie) = @unserialize($cookie);
		if (!$username or !$cookie) return;

		$username = $this->db->quote($username);
		$cookie = $this->db->quote($cookie);

		$sql = "SELECT * FROM member WHERE " .
			"(username = $username) AND (cookie = $cookie) AND (permission != '00-deny')";

		$result = $this->db->getRow($sql);

		if (is_object($result)) {
			$this->_setSession($result, true);
		}
	}


	function _logout() {
		require_once 'session_defaults.php';
		session_defaults();
	}


	function _setSession(&$values, $remember, $init = true) {
		$this->id = $values->id;
		$_SESSION['uid'] = $this->id;
		$_SESSION['username'] = htmlspecialchars($values->username);
		$_SESSION['cookie'] = $values->cookie;

		$_SESSION['logged'] = true;
		$_SESSION['permission'] = $values->permission;
		$_SESSION['registered'] = $values->registered;
		if (!$init) {
			$_SESSION['last_logged'] = $values->last_logged;
		}
		$_SESSION['email_priv'] = $values->email_priv;

		$_SESSION['style'] = unserialize($values->style);
		if (!isset($_SESSION['style']['date'])) {
			$_SESSION['style']['date'] = 'j M Y';
			$_SESSION['style']['datetime'] = 'j M Y g:ia';
		}

		if (!is_null($values->tz)) {
			$_SESSION['offset'] = $values->tz;
			set_timezone($values->tz);
		} elseif (isset($_SESSION['offset'])) {
			$this->setTZ($_SESSION['offset']);
		}

		$_SESSION['name'] = htmlspecialchars($values->name);
		$_SESSION['email'] = htmlspecialchars($values->email);

		if ($remember) {
			$_SESSION['remember'] = true;
			$this->updateCookie($values->cookie, true);
		}

		$session = $this->db->quote(session_id());
		$ip = $this->db->quote($_SERVER['REMOTE_ADDR']);
		$sqlinit = ($init) ? ", session = $session, ip = $ip" : '';

		$sql = "UPDATE member SET last_logged = CURRENT_DATE $sqlinit WHERE id = $this->id";
		$this->db->query($sql);
	}


	function memberBar() {
		if ($_SESSION['logged']) {
			$html = '<div class="heading">Logged in as ' .
				'<a href="/user/details/' . $this->id . '">' . $_SESSION['username'] . '</a></div>' .
			'<ul>
				<li><a href="/user/">Member home</a></li>
				<li><a href="/user/logout">Log out</a></li>
			</ul>';
		} else {
			$html = '<div class="heading">Membership</div>' .
			'<ul>
				<li><a href="/user/login">Login</a></li>
				<li><a href="/user/signup">Sign up</a></li>
			</ul>';
		}

		return $html;
	}


	function userDetails($user) {
		$sql = "SELECT * FROM member WHERE id = $user";

		$user = $this->db->getRow($sql);

		$col1 = Array(
			'Username:',
			'Name:',
			'Email:',
			'Registered:',
			'Last logged:'
		);

		$email = ($user->email_priv == 'n') ? encodeEmail($user->email) : 'hidden';
		$registered = format_date($user->registered);
		if ($user->last_logged) {
			$last_logged = format_date($user->last_logged);
		} else {
			$last_logged = 'never';
		}

		$col2 = Array(
			$user->username,
			$user->name,
			$email,
			$registered,
			$last_logged
		);

		require_once 'HTML/Table.php';

		$table = new HTML_Table('width="100%" cellspacing="5" cellpadding="0"' .
			'summary="user details"');
		$table->addCol($col1);
		$table->addCol($col2);

		return $table->toHtml();
	}


	function link($id) {
		if (!$id) {
			return 'Anonymous';
		}

		$sql = "SELECT username FROM member WHERE id = $id";
		$result = $this->db->getOne($sql);

		if ($result) {
			return ('<a href="/user/details/' . $id . '">' . $result . '</a>');
		} else {
			return 'Anonymous';
		}
	}


	function membersOnly() {
		if (!$_SESSION['logged']) {
			$_SESSION['log_to'] = $_SERVER['REQUEST_URI'];
			die('This page is available only to registered members,
				you have to <a href="/user/login">login</a> first, if ' .
				"you haven't" . ' <a href="/user/signup">registered</a> ' .
				 'yet you can do that for free.');
		}
	}


	function editorsOnly() {
		if ($_SESSION['permission'] < '40') {
			die("Access denied.");
		}
	}

	
	function setTZ($offset) {
		$sql = "UPDATE member SET tz = $offset WHERE id = $this->id";
		$this->db->query($sql);
	}


	function setStyle($style) {
		$style = $this->db->quote(serialize($style));
		$sql = "UPDATE member SET style = $style WHERE id = $this->id";
		$this->db->query($sql);
	}


} // class User
?>
