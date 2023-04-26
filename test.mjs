import fs from 'fs';
import inquirer from 'inquirer';

const generateREADME = (answers) => {
    const { title, description, installation, usage, license, contributing, tests, email, github } = answers;

    return `
# ${title}

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
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions, feel free to reach out to me at ${email}. You can also find me on GitHub at [${github}](https://github.com/${github}/).
  `;
};

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a brief description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for your project:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions for your project:',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Provide licensing information for your project:',
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
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
    ])
    .then((answers) => {
        const README = generateREADME(answers);

        fs.writeFile('README.md', README, (err) =>
            err ? console.error(err) : console.log('README.md generated successfully!')
        );
    });
