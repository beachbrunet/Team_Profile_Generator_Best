const employee = require("./Employee.js");

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
// needs github
modeule.exports = Engineer;
