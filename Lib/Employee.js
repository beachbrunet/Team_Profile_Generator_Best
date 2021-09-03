const employee = require("./employee.js");

// The first class is an Employee parent class with the following properties and methods:
// name, id, email AND
// getName(), getId(), getEmail(), getRole()—returns 'Employee'

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    throw "NOT IMPLEMENTED";
  }
}

modeule.exports = Employee;
