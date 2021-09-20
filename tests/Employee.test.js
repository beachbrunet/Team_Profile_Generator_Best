const Employee = require("../lib/Employee");

// getName(), getId(), getEmail(), getRole()—returns 'Employee'

// name-done
test("Can set name via constructor ", () => {
  const name = "Carla";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

// id-done
test("Can set name via constructor ", () => {
  const testValue = "001";
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

// email
test("Can set name via constructor ", () => {
  const name = "Carla";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

// getName()-done
test("it will get a name via getName() ", () => {
  const testValue = "Carla";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

// getId()-done
test("it will get a name via getId() ", () => {
  const testValue = "001";
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

// getEmail()-done
test("it will get email via getEmail() ", () => {
  const testValue = "email@email.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

// getRole-done
test("it will return /Employee via getRole()", () => {
  const testValue = "Employee";
  const e = new Employee("Carla", 1, "email@email.com");
  expect(e.getRole()).toBe(testValue);
});
