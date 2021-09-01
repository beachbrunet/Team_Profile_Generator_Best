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

// Structor for employee roles
// type of employees are: Manager, Engineer, Intern, and Employee.
// Manager asks for name, employee ID, Email address, and office number
// Engineer asks for name, employee ID, Email, and Github Username
// Intern asks for name, ID email, and school

// Important: Make sure that you remove dist from the .gitignore file
// so that Git will track this folder and include it when you push up to your application's repository.

// Created variables
const manager = require("./Lib/Manager");
const engineer = require("./Lib/Engineer");
const intern = require("./Lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
// const generateTheHTML = require(./generateTheHTML")

// Structor for employee roles
// Type of employees are: Manager, Engineer, and Intern.
// Manager asks for name, employee ID, Email address, and office number
// Engineer asks for name, employee ID, Email, and Github Username
// Intern asks for name, ID email, and school

// Created strings for input for each type of employee -- Manager Questions/ Requirements for assign.
const managerQuestions = [
  {
    type: "input",
    name: "Manager",
    message: "Whats the name of your Manager?",
  },
  {
    type: "input",
    name: "Please enter the Manager's ID.",
    message: "id",
  },
  {
    type: "input",
    name: "Email",
    message: "Please enter the Manager's email.",
  },
  {
    type: "input",
    name: "Office Number",
    message: "Please enter the Manager's office number",
  },
];

// Engineer asks for name, employee ID, Email, and Github Username
const engineerQuestions = [
  {
    type: "input",
    name: "Engineer",
    message: "Whats the name of your Engineer?",
  },
  {
    type: "input",
    name: "Please enter the Engineer's ID.",
    message: "id",
  },
  {
    type: "input",
    name: "Email",
    message: "Please enter the Engineer's email.",
  },
  {
    type: "input",
    name: "Office Number",
    message: "Please enter the Engineer's Github UserName.",
  },
];

// Intern asks for name, ID email, and school
const internQuestions = [
  {
    type: "input",
    name: "Intern",
    message: "Whats the name of your Intern?",
  },
  {
    type: "input",
    name: "Please enter the Intern's ID.",
    message: "id",
  },
  {
    type: "input",
    name: "Email",
    message: "Please enter the Intern's email.",
  },
  {
    type: "input",
    name: "Office Number",
    message: "Please enter the Intern's school.",
  },
];

// Need a prompt for questions of employees

//Need a function to add employees then exit when finished

// Need a function for Manager

// Need a function for Engineer

// Need a function for Intern

// This is referance code I wrote to better organize my thoughts
function init() {
  // present the user with questions
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("READMEGEN.md", generateMarkdown(data), (err) => {
      err
        ? console.log(err)
        : console.log("You have made a READMEGEN.md file successfully!");
    });
  });
}

// This is referance code I wrote to better organize my thoughts
inquirer.prompt(managerQuestions).then((response) => {
  const manager = new manager(
    response.name,
    reponse.id,
    reponse.email,
    reponse.officeNumber
  );
  Array.push(manager);
});

// init();
