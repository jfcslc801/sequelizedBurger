DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


INSERT INTO burgers (burger_name, devoured) VALUES ('avoCato Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Miss Piggy Burger)', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Peppa HamBurger', true);

 SELECT * FROM burgers;
 
 
