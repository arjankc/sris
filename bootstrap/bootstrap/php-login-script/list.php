<?php
/* $Id: list.php,v 1.9 2002/09/15 11:06:02 shaggy Exp $ */

	require_once 'multipage.php';

	begin_html();

	$where = '';
	$sql = "SELECT COUNT(*) FROM member $where";
	$rows = $db->getOne($sql);

	if ($rows == 0) {
		die('No members found.');
	}

	$sql = "SELECT id, username, name, email_priv, email FROM member $where ORDER BY username";
	$mp = new MultiPage($db, uri_self(), $rows, $sql, 20, 'Members');
	$result = $mp->getResult();

	require_once 'HTML/Table.php';

	$table = new HTML_Table('cellpadding="0" cellspacing="5"' .
		'width="100%" summary="a list of all members"');
	$table->addRow(array('Username', 'Name', 'Email'), null, 'TH');

	while ($result->fetchInto($row)) {
		if ($row->email_priv == 'y') {
			$email = 'hidden';
		} else {
			$email = encodeEmail($row->email);
		}

		$row->username = '<a href="/user/details/' . $row->id . '">' . $row->username . '</a>';
		$table->addRow(array($row->username, $row->name, $email) );
	}


	echo '<p>' . $mp->getHeader() . '</p>';
	$table->display();
	echo '<p>' . $mp->getNav() . '</p>';

?>
