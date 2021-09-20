const Engineer = require("../lib/Engineer");

// GitHub and role

test("will set GitHub username via constructor", () => {
  const testValue = "GitHub userName";
  const e = new Engineer("Carla", 1, "email@email.com");
  expect(e.github).toBe(testValue);
});

test("it will return GitHub Username via github()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Carla", 1, "email@email.com", "GitHubUser");
  expect(e.getGitHub()).toBe(testValue);
});

test("it will return /Engineer via getRole()", () => {
  const testValue = "Engineer";
  const e = new Engineer("Carla", 1, "email@email.com", "gitHubUser");
  expect(e.getRole()).toBe(testValue);
});
