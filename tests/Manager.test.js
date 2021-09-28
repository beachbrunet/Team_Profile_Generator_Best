const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// -done
test("Can set office number via constructor", () => {
  const testValue = 100;
  const e = new Manager("Carla", 1, "email@email.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

// getOffice#()-done
test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Carla", 1, "email@email.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

// getRole()-done
test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Carla", 1, "email@email.com", "001");
  expect(e.getRole()).toBe(testValue);
});
