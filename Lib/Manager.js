// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

const Employee = require("./Employee.js");
// Super?
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
  render() {
    return `
    <div class="container">     
        <div class="row">
            <div class="card-deck">
             <div class="card text-white bg-info mb-3 d-flex justify-content-center" style="max-width: 18rem;">
              <h3 class="card-header">Manger</h3>
             <div class="card-body">
                 <h5 class="card-title"> ${this.name} </h5>
                 <li class="list-group-item"> ${this.id}</li>
                <li class="list-group-item">Email: ${this.email} </li>
                <li class="list-group-item link"> ${this.officeNumber} </li>
              </div>
            </div>
        </div>
`;
  }
}

module.exports = Manager;
