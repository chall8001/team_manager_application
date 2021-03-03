let mysql = require("mysql");
let inquirer = require("inquirer");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3030,
  user: "root",
  password: "password",
  database: "employee_tracker"
});
//base inquirer functions
const addChoices = () => {inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to add?',
      choices: [ "departments", new inquirer.Separator(), "roles", new inquirer.Separator(), "employees"],
      name: 'addType'
    },
  ])
  .then(answers => {
      console.log(answers.addType)
      switch (answers.addType) {
        case "departments":
          addDepartment();
          break;
        case "roles":
          addRoles();
          break;
        case "employees":
           updateChoices();
          break; 
      }
  })
}
const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the name of the department you want to add?',
        name: 'departmentName'
      },
    ])
    .then(answers => {
  console.log(answers.departmentName)
  console.log('adding a new department...\n');
  const query = connection.query(
    'INSERT INTO department SET ?',{name: answers.departmentName},(err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} department inserted!\n`);
    })
  })
}
const addRoles = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the name of the role you want to add?',
        name: 'rollName'
      },
      {
        type: 'input',
        message: 'What is the salary of the role you want to add?',
        name: 'salaryType'
      },
    ])
    .then(answers => {
  console.log(answers.rollName)
  console.log('adding a new roll name...\n');
  const query = connection.query(
    'INSERT INTO role SET ?',{title: answers.rollName, salary: answers.salaryType},(err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} department inserted!\n`);
    })
  })
}

const viewChoices = () => {
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to view?',
      choices: [ "departments", new inquirer.Separator(), "roles", new inquirer.Separator(), "employees"],
      name: 'addType'
    },
  ])
  .then(answers => {
      console.log(answers.addType)
      switch (answers.addType) {
        case "departments":
          viewDepartment();
          break;
        case "roles":
          viewEmployees();
          break;
        case "employees":
           viewRoles();
          break; 
      }
  })

}
const viewDepartment = () => {
  console.log('Selecting all departments...\n');
    connection.query('SELECT * FROM department', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
}
const viewEmployees = () => {
  console.log('Selecting all departments...\n');
    connection.query('SELECT * FROM employees', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
}
const viewRoles = () => {
  connection.query('SELECT * FROM role', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
const updateEmployee = () => {inquirer
  .prompt([
    {
      type: 'input',
      message: 'Type in the first and last name of the employee you want to update',
      name: 'employeeUpdate'
    },
    {
      type: 'input',
      message: 'Type in their new role and manager ID',
      name: 'employeeNew'
    },
  ])
  .then(answers => {
    let nameArray = answers.employeeUpdate.split(" ")
    let infoArray = answers.employeeNew.split(" ")
    console.log(nameArray)
    console.log(infoArray)
    const query = connection.query(
      'UPDATE employees SET role_id = ? WHERE manager_id = ?', infoArray, 
      (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} employee updated!\n`);
      }
    );
  
  })
}

const begin = () =>{
inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: [ "add", new inquirer.Separator(), "view", new inquirer.Separator(), "update"],
      name: 'start'
    },
  ])
  .then(answers => {
    console.log(answers.start)
    switch (answers.start) {
      case "add":
        addChoices();
        break;
      case "view":
        viewChoices();
        break;
      case "update":
         updateEmployee();
        break;
      
    }


})} 
begin()

//create

    