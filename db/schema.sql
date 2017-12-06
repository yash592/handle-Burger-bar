CREATE database burgers_db

CREATE table burgers (

id INTEGER AUTO_INCREMENT NOT NULL,
burger_name varchar(50) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 0,
date TIMESTAMP NOT NULL,
PRIMARY KEY(id)

)

SELECT * FROM burgers;

INSERT into burgers (burger_name) VALUES ("Vegan Burger"), ("Big Mac"), ("Whopper")