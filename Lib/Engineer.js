// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'

const Employee = require("./Employee.js");
// Super?
class Engineer {
  constructor(name, id, email, Github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.Github = Github;
  }
  getGithub() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}
modeule.exports = Engineer;
