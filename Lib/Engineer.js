// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'

const Employee = require("./Employee.js");
// Super?
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.email;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
  render() {
    return `
        <div class="card-deck">
         <div class="card text-white bg-info mb-3 d-flex justify-content-center" style="max-width: 18rem;">
          <h3 class="card-header">Engineer</h3>
         <div class="card-body">
             <h5 class="card-title">${this.name}</h5>
             <li class="list-group-item"> ID: ${this.id}</li>
            <li class="list-group-item">Email:${this.email}</li>
            <li class="list-group-item link link-primary">${this.github}</li>
          </div>
        </div>
    </div>
    `;
  }
}
module.exports = Engineer;
