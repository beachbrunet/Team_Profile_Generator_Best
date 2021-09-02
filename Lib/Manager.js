// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

const Employee = require("./Employee.js");
// Super?
class Manager {
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }
  getRole() {
    return this.role;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

modeule.exports = Manager;
