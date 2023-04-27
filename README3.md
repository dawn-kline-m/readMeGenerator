# Professional README Generator

## Description

This challenge is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) or later version

The application will be invoked by using the following command:  node index.js    

## User Story

A developer would like a README generator so that the user can quickly create a professional README for a new project

## Functionality

A command-line application that accepts user input.

When the user is prompted for information about the application repository a high-quality, professional README.md is generated with the title of the project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

When the user enters the project title, the title is displayed as the title of the README

When the user enters a description, installation instructions, usage information, contribution guidelines, and test instructions this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

When the user choose a license for the application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

When the user enters the GitHub username this is added to the section of the README entitled Questions, with a link to my GitHub profile

When the user clicks on the links in the Table of Contents the user is taken to the corresponding section of the README

## Appearance

![This is a sample README generated](./SampleREADME.md)

## Deliverables

A walkthrough video demonstrating the functionality of the application:

The URL of the GitHub repository:  https://github.com/dawn-kline-m/readMeGenerator