DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;

CREATE TABLE department (
id int AUTO_INCREMENT NOT NULL,
name varchar(30) NOT NULL,
PRIMARY KEY(id)
);
CREATE TABLE role (
id int AUTO_INCREMENT NOT NULL,
title varchar(30) NOT NULL,
salary decimal,
PRIMARY KEY(id)
);
CREATE TABLE employees (
id int AUTO_INCREMENT NOT NULL,
employee_first_name VARCHAR(30),
employee_last_name VARCHAR(30),
role_id VARCHAR(30),
manager_id VARCHAR(30),
PRIMARY KEY(id)
)

