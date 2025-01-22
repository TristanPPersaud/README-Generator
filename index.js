// TODO: Include packages needed for this application
import fs from 'fs'; // Imports files system and makes it available for use.
import inquirer from 'inquirer'; // Imports inquierer and makes it available for use.
function myReadME(data) {
    return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}).
GitHub: [${data.github}](https://github.com/${data.github})
`;
}


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.error('Cannnot write README file:', err);
            return;
        }
        console.log('README has been generated!')
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((data)=> {
        writeToFile('README.md', data)
    })
        .catch((err)=>{
            console.error('Error when prompted:', err)
        })
    
}
// TODO: Create an array of questions for user input
inquirer.prompt ([ // Prompts users to provide information used to create READ.me file.
    { // Title of project.
        type: 'input',
        message: 'What is the title of your project?', 
        name: 'title'
    },
   
    { // Description of project.
        type: 'input',
        message: 'Enter a description of your project.',
        name: 'description'
    },
   
    { // How to install the project.
        type: 'input',
        message: 'If necessary, how do you install your project?',
        name: 'installation'
    },
   
    { // How to use the project.
        type: 'input',
        message: 'How does a user interact with your project?',
        name: 'usage'
    },

    { // What license the project uses.
        type: 'list',
        message: 'What liscense does your project use?',
        name: 'license',
        choices: [
            "BSD Zero-Clause",
            "Creative Commons license family",
            "Creative Commons Zero v1.0 Universal",
            "Creative Commons Attribution 4.0",
            "Creative Commons Attribution ShareAlike 4.0",
            "Do What The F*ck You Want To Public License",
            "Educational Community License v2.0",
            "Eclipse Public License 1.0",
            "Eclipse Public License 2.0",
            "European Union Public License 1.1",
            "GNU General Public License family",
            "GNU General Public License v2.0",
            "GNU General Public License v3.0",
            "GNU Lesser General Public License family",
            "GNU Lesser General Public License v2.1",
            "GNU Lesser General Public License v3.0",
            "ISC",
            "LaTeX Project Public License v1.3c",
            "Microsoft Public License",
            "MIT",
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "PostgreSQL License",
            "SIL Open Font License 1.1",
            "University of Illinois/NCSA Open Source License",
            "The Unlicense",
            "zLib License"
        ]
    },

    { // Who has contributed to the project and how they should go about contributing.
        type: 'input',
        message: 'Who has contributed to this project (You, sourced code, any team members that helped)? How should future contributors go about adding to the project?',
        name: 'contributors'
    },

    { // How someone should test the project.
        type: 'input',
        message: 'How should someone test your project?',
        name: 'tests'
    },

    { // Github username for project creator.
        type: 'input',
        message: 'What is your Github username?',
        name: 'Github'
    },

    { // Email for project creator.
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
// Logs user answers.
]).then((answers) => {
    writeToFile('./dist/README.md',myReadME(answers))
    console.log(answers);
// Displays error if field is not filled.
}).catch((error) => {

    if (error.isTtyError) {

    } else {

    }
    
});
