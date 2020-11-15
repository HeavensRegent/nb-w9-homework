const inquirer = require("inquirer");
const {generateMarkdown, githubCommonLicenses} = require("./utils/generateMarkdown");
const fs = require('fs');
const axios = require('axios');

//Get the license titles from the githubCommonLicenses array
const licenseTitles = [];
//Push the name into the license titles array
githubCommonLicenses.forEach(({name}) => {
    licenseTitles.push(name);
})


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
        default: 'Awesomest Project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description:',
        default: 'None'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?',
        default: 'Clone and run'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide Instructions and examples for using your project',
        default: 'Clone and run'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Add instructions for those that want to contribute:',
        default: 'Forking and pull requests'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Include instructions to test your project:',
        default: 'None'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What License is your project under',
        choices: [...licenseTitles]
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'Enter collaborator\'s github usernames seperated by a comma:',
        default: '404NotFound'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email you want questions to go to:',
        default: 'notarealemail@email.com'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    let outputDir = './out'
    try {
        if(!fs.existsSync('./out')) {
            fs.mkdirSync('./out');
        }
        fs.writeFileSync(`${outputDir}/${fileName}`, data, 'UTF8');
    } catch(e) {
        console.log(e);
    }
}

// function to get the license and generate a LICENSE.txt 
function getLicense({license}) {
    //Make a call to get the license
    axios.get(githubCommonLicenses.find(x => x.name === license).url)
        .then((result) => {
            writeToFile('LICENSE.txt', result.data.body);
        })
    // /licenses/
    //Generate the license.txt file
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
        getLicense(data)
    })
}

// function call to initialize program
init();