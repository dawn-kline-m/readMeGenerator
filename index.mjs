import inquirer from 'inquirer';
import fs from "fs/promises";


let { description, last_name } = await inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your project",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What's your last name",
            default() {
                return 'Doe';
                type: 'input',
                    name: 'last_name',
                        message: "What's your last name",
                default() {
                return 'Doe';
            },
        },
        },
    ])
/* Elements in a readme: The title of the project, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Questions        */


let readmeText = `# Project Description
${description}
## The second largest heading

###### The smallest heading`

fs.writeFile("README,md", readmeText)
console.log(first_name, last_name);

