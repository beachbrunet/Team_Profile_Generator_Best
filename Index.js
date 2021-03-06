// MVP ----
// Displays team member info
// Gets input from user to enter in employee info: name, ID, email address, Github user name
// Asks about the manager info to engineer info and intern.
// The application ends and displays html

// FEATURES
// When clicked on email it populates to the feild of the email address
// When github user name is clicked it opens profile
// Displays a nicely formatted team roster based on user input
// Make the array return a valid input (if/else)

// Structor for employee roles
// type of employees are: Manager, Engineer, Intern, and Employee.
// Manager asks for name, employee ID, Email address, and office number
// Engineer asks for name, employee ID, Email, and Github Username
// Intern asks for name, ID email, and school

// Important: Make sure that you remove dist from the .gitignore file
// so that Git will track this folder and include it when you push up to your application's repository.

// Created variables
// libraries and paths
const Manager = require("./Lib/Manager");
const Engineer = require("./Lib/Engineer");
const Intern = require("./Lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const render = require("./lib/generatePage");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "display.html");
// Structor for employee roles
// Type of employees are: Manager, Engineer, and Intern.
// Manager asks for name, employee ID, Email address, and office number
// Engineer asks for name, employee ID, Email, and Github Username
// Intern asks for name, ID email, and school

const teamArray = [];
// Created strings for input for each type of employee -- Manager Questions/ Requirements for assign.
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Whats the name of your Manager?",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the Manager's ID.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the Manager's email.",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter the Manager's office number",
  },
];

// Engineer asks for name, employee ID, Email, and Github Username
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Whats the name of your Engineer?",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the Engineer's ID.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the Engineer's email.",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter the Engineer's Github UserName.",
  },
];

// Intern asks for name, ID email, and school
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Whats the name of your Intern?",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the Intern's ID.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the Intern's email.",
  },
  {
    type: "input",
    name: "school",
    message: "Please enter the Intern's school.",
  },
];

// Need a function for creating Manager
function createManager() {
  return inquirer.prompt(managerQuestions).then((response) => {
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );
    teamArray.push(manager);
  });
}

// Need a function for creating Engineer
function createEngineer() {
  return inquirer.prompt(engineerQuestions).then((response) => {
    const engineer = new Engineer(
      response.name,
      response.id,
      response.email,
      response.github
    );
    teamArray.push(engineer);
  });
}

// Need a function for creating Intern
function createIntern() {
  return inquirer.prompt(internQuestions).then((response) => {
    const intern = new Intern(
      response.name,
      response.id,
      response.email,
      response.school
    );
    teamArray.push(intern);
  });
}
// Choosing which employee to hire/enter
function chooseEmployee() {
  const addEmployeeQuestions = [
    {
      type: "list",
      name: "choice",
      message: "Which employee would you like to enter?",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "I have added all the team members I need",
      ],
    },
  ];
  return inquirer.prompt(addEmployeeQuestions).then((answers) => {
    if (answers.choice === "Manager") {
      return createManager();
    }
    if (answers.choice === "Engineer") {
      return createEngineer();
    }
    if (answers.choice === "Intern") {
      return createIntern();
    }
    return true;
  });
}

// loops
function buildTeam() {
  chooseEmployee().then((done) => {
    if (done === true) {
      // issue here
      createHTML();
    } else {
      buildTeam();
    }
  });
}

// Generate HTML Error: no render defined
function createHTML() {
  try {
    const html = render(teamArray);
    fs.writeFileSync(outputPath, html);
  } catch (error) {
    console.log(error);
  }
}

// backup
// function createHTML() {
//   const html = render.teamArray;
//   // Issue here
//   fs.writeFileSync(outputPath, html);
//   try {
//     error;
//     console.log(error);
//   } finally {
//   }
// }

buildTeam();
