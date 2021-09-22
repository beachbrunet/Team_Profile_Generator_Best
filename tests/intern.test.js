// passed
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UD";
  const e = new Intern("Carla", 1, "email@email.com", testValue);
  expect(e.school).toBe(testValue);
});

// getSchool()
test("Can get school via getSchool()", () => {
  const testValue = "UD";
  const e = new Intern("Carla", 1, "email@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

// getRole()
test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Carla", 1, "email@email.com", "UD");
  expect(e.getRole()).toBe(testValue);
});
