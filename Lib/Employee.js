class employee {
  constructor(name, id, email, employee) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.employee = employee;
  }

  printInfo() {
    console.log(`name: ${this.name}`);
    console.log(`id: ${this.id}`);
    console.log(`email: ${this.email}`);
    console.log(`employee: ${this.employee}`);
  }
}

module.exports = employee;
