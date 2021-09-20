const Intern = require("../lib/Intern");

// -done
test("will set school username via constructor", () => {
  const testValue = "UD";
  const e = new Intern("Carla", 1, "email@email.com", testValue);
  expect(e.school).toBe(testValue));
});

// getSchool()-done
test("will set school username via getSchool()", () => {
  const testValue = "UD";
  const e = new Intern("Carla", 1, "email@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

// getRole()-done
test("it will return /Intern via getRole()", () => {
  const testValue = "Intern";
  const e = new Intern("Carla", 1, "email@email.com", "UD");
  expect(e.getRole()).toBe(testValue);
});
