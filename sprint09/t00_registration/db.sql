CREATE DATABASE IF NOT EXISTS db;

CREATE USER IF NOT EXISTS 'azhupanov'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON *.* TO 'azhupanov'@'localhost' WITH GRANT OPTION;

USE db;
CREATE TABLE IF NOT EXISTS users(
    id int NOT NULL AUTO_INCREMENT, 
    login VARCHAR(30) NOT NULL UNIQUE,
    password BINARY(60) NOT NULL,
    fullname VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY(id)
);
