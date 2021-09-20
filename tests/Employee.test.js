const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

// name -checked
test("Can set name via constructor ", () => {
  const name = "Carla";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

// id-checked
test("Can set id via constructor", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

// email-checked
test("Can set email via constructor", () => {
  const testValue = "email@email.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

// getName()-checked
test("Can get name via getName()", () => {
  const testValue = "Carla";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

// getId()-checked
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

// getEmail()-checked
test("Can get email via getEmail()", () => {
  const testValue = "email@email.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

// getRole-checked
test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const e = new Employee("Carla", 1, "email@email.com");
  expect(e.getRole()).toBe(testValue);
});
