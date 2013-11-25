CREATE TABLE mail (
  id smallint(6) NOT NULL auto_increment,
  description varchar(6) NOT NULL default '',
  subject varchar(255) NOT NULL default '',
  message text NOT NULL,
  PRIMARY KEY  (id),
  UNIQUE KEY description (description)
);

CREATE TABLE member (
  id smallint(6) NOT NULL auto_increment,
  username varchar(20) NOT NULL default '',
  password varchar(32) binary NOT NULL default '',
  permission enum('00-deny','20-user','40-editor','60-admin','99-root') NOT NULL default '20-user',
  registered date NOT NULL default '2002-01-01',
  last_logged date default NULL,
  cookie varchar(32) binary NOT NULL default '',
  session varchar(32) binary NOT NULL default '',
  ip varchar(15) binary NOT NULL default '',
  style varchar(255) NOT NULL default 'a:4:{s:5:"theme";s:10:"clean_gray";s:6:"navbar";s:4:"left";s:13:"fontsize_body";s:2:"13";s:12:"fontsize_pre";s:2:"11";}',
  tz smallint(6) default NULL,
  name varchar(50) NOT NULL default '',
  email varchar(100) NOT NULL default '',
  email_priv enum('y','n') NOT NULL default 'y',
  PRIMARY KEY  (id),
  UNIQUE KEY email (email),
  UNIQUE KEY username (username)
);