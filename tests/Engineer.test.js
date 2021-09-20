const Engineer = require("../lib/Engineer");

// GitHub and role

test("will set GitHub username via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Carla", 1, "email@email.com", testValue);
  expect(e.github).toBe(testValue);
});

// GitHub
test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

//gitRole()
test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});
