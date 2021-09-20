const Employee = require("../lib/Employee");

test("it will ", () => {
  const e = new Employee();
  expect(type(e)).toBe("Object");
});

test("it will ", () => {
  const e = new Employee();
  expect(type(e)).toBe("Object");
});

// getName(), getId(), getEmail(), getRole()—returns 'Employee'

// getName()
test("it will get a name via getName() ", () => {
  const testValue = "Carla";
  const e = new Employee(testValue);
  expect(e.getName()).toBe("testValue)");
});

// getId
test("it will get a name via getId() ", () => {
  const testValue = "100";
  const e = new Employee("blah", testValue);
  expect(e.getId()).toBe("testValue)");
});

// getEmail()
test("it will get a name via getName() ", () => {
  const testValue = "email@email.com";
  const e = new Employee("blah", 1, testValue);
  expect(e.getEmail()).toBe("testValue)");
});

// getRole
test("it will get a name via getName() ", () => {
  const testValue = "Employee";
  const e = new Employee("Carla", 1, "email@email.com");
  expect(e.getName()).toBe("testValue)");
});
