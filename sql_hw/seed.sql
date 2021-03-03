-- Drops the programming_db if it already exists --
USE employee_tracker;

-- Inserted a set of records into the table
INSERT INTO department (name)
VALUES ("Human Resources");
INSERT INTO department (name)
VALUES ("Accounting");

INSERT INTO role (title, salary)
VALUES ("CEO", 100000);

INSERT INTO employees (employee_first_name, employee_last_name, role_id, manager_id)
VALUES ("Jerry", "Smith", "sales_associate", "Chase");