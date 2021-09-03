// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'

const Employee = require("./Employee.js");
// Super?
class Engineer extends Employee {
  constructor(name, id, email, Github) {
    super(name, id, email);
    this.Github = Github;
  }
  getGithub() {
    return this.email;
  }
  getRole() {
    return "engineer";
  }
}
modeule.exports = Engineer;
