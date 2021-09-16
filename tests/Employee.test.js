const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("it will return a name when created", () => {
    const name = "Carla";
    const object = new Employee(testName, 1, "email@email.com");
    expect(object.name).toEqual(testName);
  });
});
