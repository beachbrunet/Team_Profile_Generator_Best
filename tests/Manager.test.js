const Intern = require("../lib/Manager");
// employ?

// -done
test("will set office manager via constructor", () => {
  const testValue = "001";
  const e = new Manager("Carla", 1, "email@email.com", testValue);
  expect(e.officeNumber).toBe("testValue)");
});

// getOffice#()-done
test("will get office number via getOffice()", () => {
  const testValue = "100";
  const e = new Manager("Carla", 1, "email@email.com", testValue);
  expect(e.getOfficeNumber()).toBe("testValue)");
});

// getRole()-done
test("it will return /Manager via getRole()", () => {
  const testValue = "Manager";
  const e = new Manager("Carla", 1, "email@email.com", "001");
  expect(e.getRole()).toBe(testValue);
});
