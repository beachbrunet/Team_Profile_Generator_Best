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
const Manager = require("./Lib/Manager");
const Engineer = require("./Lib/Engineer");
const Intern = require("./Lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

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
    name: "Manager",
    message: "Whats the name of your Manager?",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the Manager's ID.",
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
    name: "Github",
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
      response.Github
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
      createHTML();
    } else {
      buildTeam();
    }
  });
}

// Generate HTML
function createHTML() {
  const html = render(teamArray);
  fs.writeFileSync(outputpath, html);
  try {
    error;
    console.log(error);
  } finally {
  }
}

buildTeam();
