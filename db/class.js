const connection = require('./connection')

class DB {
    constructor(connection) {
        this.connection = connection
    }

    viewDepartments() {
        return this.connection.promise().query(`SELECT d.id AS 'dept_Id', d.name
                                                FROM departments AS d`);
    }

    viewRoles() {
        return this.connection.promise().query(`SELECT r.id AS 'role_id', r.title, r.salary, d.name AS 'department name' 
                                                FROM roles AS r 
                                                LEFT JOIN departments AS d 
                                                ON r.deptId = d.id`
                                                );
    }

    viewEmployees() {
        return this.connection.promise().query(`SELECT e.id, e.firstName AS 'first name', e.lastName AS 'last name', 
                                                r.title AS 'title', d.name AS department, r.salary, 
                                                CONCAT(e2.firstName,"  ", e2.lastName) AS 'manager name'
                                                FROM employees AS e
                                                LEFT JOIN roles AS r
                                                ON e.roleId = r.id
                                                LEFT JOIN departments AS d 
                                                ON r.deptId = d.id
                                                LEFT JOIN employees AS e2
                                                ON e.managerId = e2.id`
                                                );
        
    }

    addDepartment(department) {
        return this.connection.promise().query(`INSERT INTO departments SET ?`, department);
    }

    addRole(res){
        return this.connection.promise().query(`INSERT INTO roles
                                              (title, salary, deptId)
                                              VALUES (?, ?, ?)`, 
                                              [res.title, res.salary, res.deptId]);
    }

    addEmployee(res){
        return this.connection.promise().query(`INSERT INTO employees 
                                              (firstName, lastName, roleId, managerId) 
                                                VALUES (?, ?, ?, ?)`, 
                                                [res.firstName, res.lastName, res.roleId, res.managerId]);
    }

    updateRole(res){
        return this.connection.promise().query(`UPDATE employees SET roleId = ? 
                                                WHERE employees.id = ?`, [res.roleUpdate, res.EmpNameRoleUpdate]);
    }

    roleQuery(){
        return this.connection.promise().query(`SELECT roles.id, roles.title 
                                                FROM roles`)
    }

    fullNameQuery(){
        return this.connection.promise().query(`SELECT * FROM employees`)
    }

    getManager(){
        return this.connection.promise().query(`SELECT * FROM employees`)
    }


}

module.exports = new DB(connection);