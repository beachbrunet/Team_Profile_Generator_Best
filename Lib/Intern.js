// needs school
// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'
const Employee = require("./employee.js");
// Super?
class Intern {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  getRole() {
    return this.role;
  }
  getSchool() {
    return this.school;
  }
}
modeule.exports = Intern;
