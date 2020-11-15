const inquirer = require("inquirer");

// function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(filename, data, 'UTF8');
    } catch(e) {
        console.log(e);
    }
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(() => {

    })
}

// function call to initialize program
init();

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide Instructions and examples for using your project',
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'List your collaborators / Third Party Attributes / Tutorials followed to create your project:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Add instructions for those that want to contribute:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Include instructions to test your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What License is your project under',
        choices: ['Email', 'Text', 'Phone']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email you want questions to go to:'
    },
];