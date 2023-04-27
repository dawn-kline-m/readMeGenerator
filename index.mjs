import fs from 'fs';
import inquirer from 'inquirer';

const createREADME = (answers) => {
    const { title, description, installation, usage, license, contributing, tests, github } = answers;

    let licenseInfo;
    if (license === 'Apache') {
        licenseInfo =
            `[http://www.apache.org/licenses/](http://www.apache.org/licenses/)`
    }
    else if (license === 'MIT') {
        licenseInfo =
            `[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)`
    }
    else if (license === "GNU") {
        licenseInfo =
            `[https://fsf.org/](https://fsf.org/)`
    }
    else {
        licenseInfo = `No license selected`
    }
    return `
# ${title}

![${license}](https://img.shields.io/badge/license-${license}-brightgreen)

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${licenseInfo}

## Contributing
${contributing}

## Tests
${tests}

## Questions
This application is on GitHub at https://github.com/${github}/readMeGenerator
  `;
};

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a brief description of your application:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for using the application:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Provide licensing information:',
            choices: ['MIT', 'GNU', 'Apache', 'None']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide contributing guidelines for your project:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide testing instructions for your project:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
    ])
    .then((answers) => {
        const readMeFile = createREADME(answers);

        fs.writeFile('README.md', readMeFile, (err) =>
            err ? console.error(err) : console.log('README.md generated successfully!')
        );
    });
