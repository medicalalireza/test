CREATE TABLE account (
	id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(35) NOT NULL,
    phone varchar(11) NOT NULL,
    address varchar(120) NOT NULL,
    verify varchar(128) NOT NULL,
    signtime datetime DEFAULT CURRENT_DATE
);

CREATE TABLE dreambuyer (
	dream_id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    dream_account varchar(12) NOT NULL,
    dream_time datetime DEFAULT CURRENT_DATE
);