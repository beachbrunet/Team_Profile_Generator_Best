const { getDiffieHellman } = require("crypto");

class employee {
  constructor(name, id, email, employee) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.employee = employee;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }

  getEmail() {
    return this.id;
  }

  getRole() {
    return this.id;
  }
}

// // The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

module.exports = employee;
