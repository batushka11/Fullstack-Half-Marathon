USE ucode_web;

CREATE TABLE IF NOT EXISTS heroes(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL UNIQUE,
    description text NOT NULL,
    class_role enum('tankman','healer','dps') NOT NULL,
    PRIMARY KEY(id)
);

