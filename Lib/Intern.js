// needs school
// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'
const Employee = require("./employee.js");
// Super?
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
  render() {
    return `
      <div class="card-deck">
        <div class="card text-white bg-info mb-3 d-flex justify-content-center" style="max-width: 18rem;">
          <h3 class="card-header">Intern</h3>
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                 <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: ${this.email}</li>
                <li class="list-group-item">School: ${this.school}</li>
            </div>
        </div>
      </div>
`;
  }
}
module.exports = Intern;
