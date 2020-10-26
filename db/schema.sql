DROP DATABASE IF EXISTS employee_db1;
CREATE DATABASE employee_db1;
USE employee_db1;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (100)
);

CREATE TABLE roles(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    salary DECIMAL,
    deptId INTEGER,
    CONSTRAINT fk_dept FOREIGN KEY (deptId) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    roleId INTEGER,
    managerId INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (roleId) REFERENCES roles(id) ON DELETE CASCADE,
    CONSTRAINT pk_manager FOREIGN KEY (managerId) REFERENCES employees(id) ON DELETE SET NULL
);