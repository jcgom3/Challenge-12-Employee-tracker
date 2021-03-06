INSERT INTO departments (name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (title, salary, deptId)
VALUES 
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employees (firstName, lastName, roleId, managerId)
VALUES 
('Ric', 'Ocasek', 1, NULL),
('Janis', 'Joplin', 2, 1),
('Stevie', 'Nicks', 3, NULL),
('Ray', 'Manzarek', 4, 3),
('Ray', 'Charles', 5, NULL),
('Ann', 'Wilson', 6, 5),
('Robert', 'Plant', 7, NULL),
('Roger', 'Waters', 8, 7);
