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
const manager = require("./Lib/Manager");
const engineer = require("./Lib/Engineer");
const intern = require("./Lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "display.html");

// Structor for employee roles
// Type of employees are: Manager, Engineer, and Intern.
// Manager asks for name, employee ID, Email address, and office number
// Engineer asks for name, employee ID, Email, and Github Username
// Intern asks for name, ID email, and school

const Array = [];
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
function CreateManager() {
  inquirer.prompt(managerQuestions).then((response) => {
    const manager = new manager(
      response.name,
      reponse.id,
      reponse.email,
      reponse.officeNumber
    );
    Array.push(manager);
    getArray();
  });
}

// Need a function for creating Engineer
function createEngineer() {
  inquirer.prompt(engineerQuestions).then((response) => {
    const engineer = new engineer(
      response.name,
      reponse.id,
      reponse.email,
      reponse.Github
    );
    Array.push(engineer);
    getArray();
  });
}

// Need a function for creating Intern
function createIntern() {
  inquirer.prompt(internQuestions).then((response) => {
    const intern = new intern(
      response.name,
      reponse.id,
      reponse.email,
      reponse.school
    );
    Array.push(intern);
    getArray();
  });
}
// Choosing which employee to hire/enter
function chooseEmployee() {
  const addEmployeeQuestions = [
    {
      type: "list",
      name: "employeeSelection",
      message: "Which employee would you like to enter?",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "I have added all the team members I need",
      ],
    },
  ];
  inquirer.prompt(addEmployeeQuestions).then((answers) => {
    if (answers.choice === "Manager") {
      createManager();
    }
    if (answers.choice === "Engineer") {
      createEngineer();
    }
    if (answers.choice === "Intern") {
      createIntern();
    }
    if (answers.choice === "I have added all the team members I need") {
      createHTMLFile();
    }
  });
}

// Generate HTML
function createHTML() {
  const html = render(Array);
  fs.writeFileSync(outputpath, html);
  try {
    error;
    console.log(error);
  } finally {
  }
}
// would it be easier to const createHTML = () => {
//   fs.writeFileSync(outputPath, render(employees), "utf-8");
// };

// add employee

// init();
