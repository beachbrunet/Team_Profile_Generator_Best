// MVP ----
// Displays team member info
// Gets input from user to enter in employee info: name, ID, email address, Github user name
// Asks about the manager info to engineer info and intern.
// The application ends and displays html

// FEATURES
// When clicked on email it populates to the feild of the email address
// When github user name is clicked it opens profile
// Displays a nicely formatted team roster based on user input

// Manager and employee = has officeNumber and getRole(),
// Employee = has github, getGithub(),
// Intern will have school, getSchool()


// Important: Make sure that you remove dist from the .gitignore file
// so that Git will track this folder and include it when you push up to your application's repository.



// Created variables
const manager
const engineer
const intern
const inquirer = require('inquirer')

// Created string for input
const employeQuestions = [
    {
      //   title
      type: "input",
      message: "Whats the name of your manager?",
      name: "manager",
    },
    {
      type: "input",
      message: "",
      name: "",
    },
    {
      type: "list",
      name: "license",
      message: "What license do you want to use?",
      choices: ["Apache 2.0 Licene", "MIT", "ILP"],
    },
    {
      type: "input",
      name: "",
      message: "",
    },
    {
      type: "input",
      name: "",
      message: "",
    },
    {
      type: "input",
      name: "installation",
      message: "What commands should be run for dependencies?",
      default: "npm i",
    },
    {
      type: "input",
      name: "test",
      message: "What commands should be run for tests?",
      default: "",
    },
    {
      type: "input",
      name: "",
      message: "",
    },
  ];
